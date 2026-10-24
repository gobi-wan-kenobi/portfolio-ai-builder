# Deployment

Published on 2026-10-24 using the official GitHub CLI after device authorization.

- Course: https://gobi-wan-kenobi.github.io/portfolio-ai-builder/
- Public source: https://github.com/gobi-wan-kenobi/portfolio-ai-builder
- Private learning: https://github.com/gobi-wan-kenobi/portfolio-ai-learning
- Successful deployment: https://github.com/gobi-wan-kenobi/portfolio-ai-builder/actions/runs/40116675862

## Target layout

- `portfolio-ai-builder`: public, generic course content and fictional examples.
- `portfolio-ai-learning`: private, assignments, progress exports, capstone work, and feedback.

No employer name, actual company policies, or learner submissions are included in the public course content.

## Option A — GitHub CLI

Use the official GitHub CLI on a machine where it is authenticated. Unzip the package and run from the course directory:

```sh
bash scripts/publish-github.sh
```

The script creates fresh repositories and stops if either target already exists. It sets up the private starter, checks the course, pushes source, enables Pages with the Actions source, and dispatches the publishing workflow. It does not install software or store credentials. Confirm the workflow's deployed URL before considering publication complete.

## Option B — GitHub UI

1. Create a public `portfolio-ai-builder` repository and initialize its main branch with a README.
2. Create a private `portfolio-ai-learning` repository and initialize its main branch with a README.
3. The connected agent can upload the prepared UTF-8 source files to those existing repositories. Preserve generated files and `.github` workflows; keep submissions private.
4. In course repository Settings → Pages, choose GitHub Actions as the build source.
5. Run the Publish course to GitHub Pages workflow, then verify its deployment URL.
6. Set `site/config.js` to the confirmed repository names and republish, or enter the learning repository in the website settings.

## Verification already performed

- Curriculum, assignment, progress-validation, completion, URL-boundary, and export-content unit tests.
- Desktop browser navigation, practice feedback, draft persistence, completion constraints, and invalid-submission validation.
- Browser-generated export preview, actual progress-file download, and clipboard copy on the live HTTPS site.
- Mobile navigation at a 390px viewport, including accessible open and close behavior.
- GitHub repository creation, private learning repository visibility, and successful Pages build and deployment.
- Live home page, lesson navigation, and default learning repository configuration.

No real assignment has been submitted or graded. Submission links and issue templates are provided; the learner completes the GitHub submission and records its URL. Progress remains local to the browser until exported, and completion is explicitly self-assessed.
