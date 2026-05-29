# Changelog

All notable changes to **Copilot Week in Review** will be documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-05-29

First stable release. The agent is mature enough that any future change
that breaks the prompt format (intake flow, output structure, tool usage)
will require a major version bump.

### Added

- **Two-question intake.** The agent asks just two things — *Source*
  (paste notes / pull from GitHub / both / continue from last weekly
  update) and *Audience* (manager / team / yourself) — then drafts.
- **GitHub-pull source.** When chosen, the agent uses the local `gh`
  CLI to gather the last 7 days of the user's PRs, reviews, issues, and
  comments, then groups them by workstream and filters noise.
- **Continue-from-last-update source.** Finds the user's previous weekly
  issue via `gh issue list --label weekly-update --author @me`, uses its
  timestamp as the search cutoff, and skips any activity already
  reported so wins are never double-counted.
- **Audience tone presets.** Three layered tones over one shared output
  structure: *Manager* (outcomes-first, impact-quantified), *Team*
  (collaborative, handoff-friendly), *Yourself* (raw, includes small
  wins).
- **`gh` preflight + graceful fallback.** Before any GitHub work, the
  agent checks for `gh` and a valid auth state; if either is missing it
  warmly offers to switch to *Paste my own notes* mode for that run.
- **Single-turn intake parsing.** The agent parses the opening
  `@week-in-review` invocation for source/audience hints (e.g.,
  *"pull from github for my manager"*) and skips the intake entirely
  when both are clear. When it does need to ask, both questions go in
  one message — at most one Enter press before drafting starts.
- **GitHub-issue-ready output.** Suggested title, suggested labels,
  `##` headings, and `- [x]` / `- [ ]` task lists that render as
  clickable checkboxes when pasted into an issue body.
- **Dual-surface support.** Works identically in the GitHub Copilot
  app and the Copilot CLI; one install location
  (`~/.copilot/agents/`).
- **One-click installer.** `quickstart.sh` over `curl | bash`, no git
  clone or config required.

### Locked-in design principles

- **Weekly cadence is the product.** Window is always 7 days
  (or "since my last update" when continuing). No sprint / month /
  arbitrary-date mode — that would dilute the brand.
- **Tool-light, not tool-free.** Only `ask_user` and read-only `gh`
  are used. No writes, no other shell, no third-party APIs.
- **Conversational refinement over options.** Users iterate in plain
  English (*"more casual"*, *"switch audience to team"*,
  *"open it as an issue in `myorg/updates`"*) rather than CLI flags.
- **No invention.** The agent never adds work the user didn't mention
  or that GitHub didn't surface.

### Removed (during the lead-up to 1.0)

- A Next.js + shadcn/ui landing page was prototyped and removed before
  release. The repo intentionally ships as a single agent file + two
  installers + the docs that explain it.

[1.0.0]: https://github.com/DUBSOpenHub/copilot-week-in-review/releases/tag/v1.0.0
