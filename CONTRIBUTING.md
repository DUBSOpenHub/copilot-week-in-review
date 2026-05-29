# Contributing to Copilot Week in Review

Thanks for your interest! This is a tiny project — one agent file plus an installer — so contributing is straightforward.

## What lives where

- `agents/week-in-review.agent.md` — the agent itself (Copilot agent format: YAML frontmatter + markdown instructions). Used by both the GitHub Copilot app and the Copilot CLI.
- `docs/index.html` + `docs/style.css` — the landing page published to [dubsopenhub.github.io/copilot-week-in-review](https://dubsopenhub.github.io/copilot-week-in-review/).
- `install.sh` / `quickstart.sh` — copy the agent into `~/.copilot/agents/`.
- `README.md` — install instructions, examples, the story behind the project.
- `AGENTS.md` — agent reference, design principles, tool usage.

## Making a change

1. Fork and clone.
2. Edit `agents/week-in-review.agent.md`.
3. Test locally: `./install.sh` then open a Copilot CLI session and run `@week-in-review`.
4. Open a PR with a short description of what changed and why.

## Style

The agent prompt should stay:

- **Short.** Under ~180 lines. Long prompts dilute attention.
- **Concrete.** Show the exact output structure, don't describe it abstractly.
- **Issue-ready by default.** Output must be GitHub-flavored markdown that pastes cleanly into an issue body.
- **Warm but sharp.** It's a writing partner, not a corporate template.

## Built with GitHub Copilot

This project was scaffolded inside the GitHub Copilot app, in conversation. If you're iterating on the agent prompt, doing it the same way (chat with Copilot, refine, paste back) is the fastest workflow.
