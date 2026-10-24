# Portfolio AI Builder

An independent self-paced course on diagnosing company problems and building AI capabilities another PM can adapt across verticals. All company examples are fictional. This is not an official employer training program.

## Start learning

- Open the [published course](https://gobi-wan-kenobi.github.io/portfolio-ai-builder/) or preview locally.
- Your [private learning workspace](https://github.com/gobi-wan-kenobi/portfolio-ai-learning) is already configured for assignment submissions and progress exports.
- Work through the eight modules in order. Budget about 32 hours, including setup and a final demo.
- Use [INSTRUCTOR.md](INSTRUCTOR.md) with a tutor or repository-capable agent.
- The full source is [COURSE.md](COURSE.md). The project contract is [CAPSTONE.md](CAPSTONE.md).
- Assignments and rubrics live in their respective folders. Practice-answer explanations are part of the course data.

## Local preview

Requires Node.js 22+. No npm dependencies or API keys are required.

```sh
npm run check
npm run build
npm run dev
```

Open the server's local URL. `site/index.html` also works without a server for most browser interactions.

## GitHub Pages

The included workflow checks and builds the course, then publishes `site/`. In repository Settings → Pages, select **GitHub Actions** as the build source. The initial push or a workflow dispatch publishes the site. Public-repository Pages is available on GitHub Free; private repository hosting/access rules depend on the plan. A private source repository does not automatically make a Pages website private.

## Assignment and progress workflow

Use a separate **private** learning repository. The companion starter contains module templates, an issue form, a pull-request template, and progress.json.

1. Configure its `owner/repository` in the website's Learning workspace settings.
2. Draft the assignment in the course UI. Drafts autosave in this browser.
3. Download the Markdown assignment, commit it to the private repository, and open a pull request. Alternatively open the configured issue form and link the committed artifact for review.
4. Record the resulting issue or PR URL in the course. Opening the GitHub page does not automatically submit it.
5. Track revisions and self-assessed completion. Export `progress.json` and commit it privately for durable version history or another device.

The static site never reads a GitHub token, writes to GitHub, verifies a PR review, or synchronizes accounts automatically. Import replaces the local course record after confirmation. Exporting a file does not upload it.

## Progress semantics

Not started → Learning → Submitted → Revision needed → Complete. Submission requires a GitHub issue/PR URL to be recorded. Complete requires draft content, rubric checks, correct knowledge checks, and evidence; it is explicitly self-assessed. AI feedback is advisory. The final assessment is a separate capstone review.

Do not store sensitive company material in browser drafts on a public course workstation or publish private submissions in the course repository. Use the company's approved workspace for actual operational data.

## Editing

Edit `site/course-data.js` for curriculum content. Run `npm run build` to regenerate Markdown lessons, assignments, rubrics, and downloads. The site is buildless HTML/CSS/JS; generated Markdown is for agents and offline reading. `site/state.js` implements progress validation and exports. `site/config.js` can supply default repository names.

There are no analytics, external fonts, model calls, or built-in tutor chat. Resource links open official external documentation; those services have their own terms and availability.

## Verification

`npm run check` runs syntax checks and unit tests for curriculum completeness, progress validation, completion rules, assignment export, and GitHub URL boundaries. Browser QA covers navigation, quizzes, drafts, exports/imports, and responsive layout. Repository creation, private workspace visibility, successful Pages deployment, live lesson navigation, and progress-file download were verified on 2026-10-24. No real assignment has been submitted or graded.
