#!/usr/bin/env bash
set -euo pipefail
command -v gh >/dev/null || { echo 'Install the official GitHub CLI, then run gh auth login before using this script.'; exit 1; }
gh auth status
course_dir="$(cd "$(dirname "$0")/.." && pwd)"
learning_dir="$(dirname "$course_dir")/portfolio-ai-learning"
owner="$(gh api user --jq .login)"
course_repo="$owner/portfolio-ai-builder"
learning_repo="$owner/portfolio-ai-learning"
if gh repo view "$course_repo" >/dev/null 2>&1 || gh repo view "$learning_repo" >/dev/null 2>&1; then
  echo 'One of the target repositories already exists. Stop to inspect it; this script never overwrites existing repositories.'
  exit 1
fi
cd "$course_dir"
node scripts/create-learning-starter.cjs "$learning_dir"
node scripts/build.cjs
npm run check
node - "$course_repo" "$learning_repo" <<'NODE'
const fs=require('node:fs');
const config={courseRepo:process.argv[2],learningRepo:process.argv[3]};
fs.writeFileSync('site/config.js','window.COURSE_CONFIG = '+JSON.stringify(config)+';\n');
NODE
for target in "$course_dir" "$learning_dir"; do
  git -C "$target" init -b main
  git -C "$target" add .
  git -C "$target" -c user.name="$owner" -c user.email="$owner@users.noreply.github.com" commit -m 'Create Portfolio AI Builder course workspace'
done
gh repo create "$course_repo" --public --description 'Self-paced course on company problem solving and reusable portfolio AI workflows' --source "$course_dir" --remote origin --push
gh repo create "$learning_repo" --private --description 'Private assignments, review history, progress, and capstone workspace' --source "$learning_dir" --remote origin --push
gh api --method POST "repos/$course_repo/pages" -f build_type=workflow
gh workflow run pages.yml --repo "$course_repo"
echo "Course source: https://github.com/$course_repo"
echo "Private learning: https://github.com/$learning_repo"
echo 'Follow the Publish course to GitHub Pages workflow to confirm deployment and its returned URL.'
