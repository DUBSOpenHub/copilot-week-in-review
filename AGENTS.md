# Agents

## Overview

This repo ships a single GitHub Copilot agent — **week-in-review** — that turns messy weekly notes or raw GitHub activity into a polished, GitHub-issue-ready status update. Works in the GitHub Copilot app *or* the Copilot CLI. That's the whole project: one agent file plus an installer.

## Available Agents

### week-in-review

- **Purpose**: A warm, sharp writing partner. Takes either rough weekly notes (bullets, brain dumps, pasted PR titles, raw meeting notes) **or** the user's last 7 days of GitHub activity pulled directly via `gh`, **or** a delta from their previous weekly update, and returns a single, ready-to-paste status update formatted as GitHub-flavored markdown. Output is structured for a GitHub issue body: suggested title, suggested labels, `##` headings, and `- [x]` / `- [ ]` task lists that render as clickable checkboxes. The tone is layered per audience: **manager** (outcomes-focused), **team** (collaborative), or **yourself** (raw log).
- **Usage**: Works in **both** the GitHub Copilot app *and* the Copilot CLI — **no repo required**:
  ```
  @week-in-review
  ```
  The agent runs four explicit emoji-led steps, identically across both surfaces: **(1)** ask the source 📥 — `A` notes / `B` GitHub last 7 days / `C` both — **(2)** ask the audience 👥 — `1` manager / `2` team / `3` yourself — **(3)** draft the polished GitHub-issue-ready markdown 🪄 — **(4)** offer to file it as a GitHub issue 📬. Steps 1 + 2 are **skipped entirely** when both are clear from the invocation (e.g. `@week-in-review pull from my github for my manager`). Follow up with tweaks in plain English: *"make it more casual"*, *"punchier"*, *"switch audience to team"*, *"yes, file it in `myorg/team-updates`"*, or *"continue from my last weekly update in `myorg/team-updates`"*.
- **Model**: Default model in your Copilot session.
- **Location**: `agents/week-in-review.agent.md` → installs to `~/.copilot/agents/week-in-review.agent.md` (read by both the app and the CLI).
- **Tools used**:
  - `gh` (shell) — only when the user selects the *"pull from GitHub"* source (or asks to continue from their last weekly update). Runs read-only `gh search prs` / `gh search issues` / `gh issue list` against the authenticated user's activity. Includes a preflight check (`command -v gh`, `gh auth status`) and offers a friendly fallback to notes mode if either is missing. At Step 4, optionally runs `gh issue create --body-file -` (one write, only on explicit user "yes" + a named repo).
  - Otherwise, the agent is text-in / markdown-out. The intake uses prose questions (never `ask_user`) so the experience is identical in the Copilot app and the CLI.

## Install

One-click (recommended):

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash
```

Or via the Copilot CLI:

```
/agents add DUBSOpenHub/copilot-week-in-review
```

## Design Principles

- **Ultra simple.** One agent file. Keep it under ~180 lines of prompt. If a change makes the agent file longer, default to "no" unless the win is clear.
- **Weekly cadence is the product.** The default window is 7 days — always. We do not try to be a sprint tool, a monthly report tool, or a "since arbitrary date" tool. If a user needs something larger, they can ask in conversation; we don't expose configuration knobs for it.
- **Issue-ready by default.** Output must always paste cleanly into a GitHub issue body — `##` headings, `- [ ]` task lists, no fenced wrappers around the whole body.
- **No invention.** The agent must never add work the user didn't mention (or that GitHub didn't surface). Omit empty sections entirely rather than padding.
- **Tool-light, not tool-free.** The agent uses exactly one host tool, on demand: `gh` (read-only `search` / `issue list` for the GitHub-pull and continue-from-last sources; one optional `gh issue create` write at Step 4, only when the user explicitly says "yes, file it" and names a repo). The intake itself uses prose questions (never `ask_user`) so the flow is identical in the Copilot app and the CLI. No other shell, no arbitrary network. Anything beyond that bar is out of scope.
- **Audience presets, not personas.** Three tone layers (manager / team / yourself) over one shared structure. Don't fork the format per audience; only the wording shifts.
- **Graceful fallbacks.** If `gh` is missing or unauthenticated, the agent says so warmly and offers to switch to *Paste my own notes* mode for this run. Errors should never look like errors.
- **Conversational refinement over options.** Don't expose flags or CLI args. Let users ask in natural language for "more casual" / "shorter" / "switch audience to team" / "open it as an issue".

## Remixing this agent

The agent prompt lives in `agents/week-in-review.agent.md`. To customize for your team:

1. Fork the repo (or just copy the file).
2. Open `agents/week-in-review.agent.md` in the [GitHub Copilot app](https://github.com/features/copilot) and ask it to make the changes you want — different sections, different tone, different default labels.
3. Reinstall locally to test: `./install.sh`.
4. Open a PR if your change is useful to others.

That's how this agent was built; that's the cleanest way to evolve it.
