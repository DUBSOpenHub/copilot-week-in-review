# Changelog

All notable changes to **Copilot Week in Review** will be documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Dropped all screenshot/file-attachment language from the agent.**
  Custom-agent attachment support is host-dependent and currently absent
  in parts of the Copilot app, so the prompt no longer mentions
  screenshots, attachments, or paperclips anywhere. Source A is now
  simply "I'll paste my notes" — paste text, GitHub URLs, brain dumps,
  anything that fits in a chat message. CLI users who want richer input
  already know how to reach for `@file` mentions or `gh` themselves.
  Replaces the two prior "screenshots if your host supports it" /
  three-fallback iterations with one short, honest Notes section.

- **Agent flow rewritten as four explicit, identical-across-hosts steps.**
  The intake is now sequenced — Step 1 source (📝 notes / 🐙 GitHub /
  🎁 both), Step 2 audience (👔 manager / 🤝 team / 🪞 yourself),
  Step 3 draft, Step 4 always offer to file as a GitHub issue (with a
  ready-to-run `gh issue create --body-file -` template). Replaces the
  single-combined-message intake that branched on `ask_user`
  availability. Same prose flow now runs identically in the GitHub
  Copilot app and the Copilot CLI — no host-conditional behavior. Notes
  mode explicitly accepts screenshots and attached files. Emojis added
  at each touchpoint to keep the experience engaging and fun. The
  hint-skip shortcut still bypasses Steps 1+2 when both source and
  audience are clear from the invocation. Verified end-to-end on a real
  GitHub-pull / manager-audience run. Agent file is 184 lines, at the
  ~180 design ceiling.

- **Docs refreshed to match the verified v1.1 behavior.** Added the
  hint-skip shortcut (`@week-in-review pull from my github for my
  manager`) to the README "30-second start" + "Use it" sections,
  AGENTS.md agent description, and both install scripts'
  post-install hints. The 'three lines in' / 'two quick questions'
  framing was leftover from the staged-turn intake; replaced with
  the one-message-or-skipped reality. AGENTS.md overview no longer
  says "Copilot CLI agent" — works in app or CLI.

### Changed (earlier in [Unreleased])

- **Body length cap relaxed for GitHub-pull mode.** Was 250 words across
  the board, which overflowed silently on busy GitHub weeks (test run
  hit ~330 words). Now: 400 words when pulling from GitHub, still 250
  when working from pasted notes. Either way, cut filler before going
  over.

## [1.1.0] — 2026-05-29

A big feature-additive release. All changes are backward-compatible; the
original "paste notes, get status" flow still works exactly the same.

### Added

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
- **Dual-surface positioning.** README, AGENTS, and the installers now
  call out that the agent runs identically in the GitHub Copilot app
  *and* the Copilot CLI. One install location
  (`~/.copilot/agents/`).

### Changed

- **Audience label: `boss` → `manager`** across the agent prompt,
  README, AGENTS, install scripts (19 strings across 7 files).
- **Frontmatter `description`** rewritten to reflect the new
  capabilities (notes OR GitHub activity, audience-tuned, ready for
  GitHub issue, app or CLI).

### Removed

- A Next.js + shadcn/ui landing page was prototyped during this
  release cycle and removed before tagging. The repo intentionally
  ships as a single agent file + two installers + the docs that
  explain it.

### Security

- Cleared the broken `homepageUrl` in repo metadata.
- The transient `web/package-lock.json` carried a moderate `postcss`
  XSS advisory (GHSA-qx2v-qp2m-jg93) for a few minutes; resolved when
  the landing page was removed. The shipping agent has no JS/CSS deps.

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

## [1.0.0] — 2026-05-29 (earlier the same day)

Initial public release. Single Copilot agent that turns messy weekly
notes into a polished, GitHub-issue-ready status update.

[1.1.0]: https://github.com/DUBSOpenHub/copilot-week-in-review/releases/tag/v1.1.0
[1.0.0]: https://github.com/DUBSOpenHub/copilot-week-in-review/releases/tag/v1.0.0
