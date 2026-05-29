# Agents

## Overview

This repo ships a single GitHub Copilot CLI agent — **week-in-review** — that turns messy weekly notes into a polished, GitHub-issue-ready status update. That's the whole project: one agent file plus an installer.

## Available Agents

### week-in-review

- **Purpose**: A warm, sharp writing partner. Takes rough weekly notes (bullets, brain dumps, pasted PR titles, raw meeting notes) and returns a single, ready-to-paste status update formatted as GitHub-flavored markdown. Output is structured for a GitHub issue body: suggested title, suggested labels, `##` headings, and `- [x]` / `- [ ]` task lists that render as clickable checkboxes.
- **Usage**: From any GitHub Copilot CLI session — **no repo required**:
  ```
  @week-in-review

  shipped checkout v2 behind a flag, fixed two flaky login tests,
  reviewed 6 PRs, started API rate-limit design doc, oncall starts monday
  ```
  Then ask for tweaks — *"make it more casual"*, *"punchier"*, *"open this as an issue in `myorg/team-updates`"*.
- **Model**: Default model in your Copilot CLI session.
- **Location**: `agents/week-in-review.agent.md` → installs to `~/.copilot/agents/week-in-review.agent.md`.
- **Tools used**: None. The agent is pure prompt — text in, markdown out. No file access, no shell, no network.

## Install

One-click (recommended):

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/week-in-review/main/quickstart.sh | bash
```

Or via the Copilot CLI:

```
/agents add DUBSOpenHub/week-in-review
```

## Design Principles

- **Ultra simple.** One agent file, ~85 lines of prompt. If a change makes the agent file longer, default to "no" unless the win is clear.
- **Issue-ready by default.** Output must always paste cleanly into a GitHub issue body — `##` headings, `- [ ]` task lists, no fenced wrappers around the whole body.
- **No invention.** The agent must never add work the user didn't mention. Omit empty sections entirely rather than padding.
- **Tool-free.** The agent does not read files, run shell, hit the network, or use any tools. It's a writing partner, not an automation runtime. This keeps the privacy story trivially honest.
- **Conversational refinement over options.** Don't expose flags or modes. Let users ask in natural language for "more casual" / "shorter" / "open it as an issue".

## Remixing this agent

The agent prompt lives in `agents/week-in-review.agent.md`. To customize for your team:

1. Fork the repo (or just copy the file).
2. Open `agents/week-in-review.agent.md` in the [GitHub Copilot app](https://github.com/features/copilot) and ask it to make the changes you want — different sections, different tone, different default labels.
3. Reinstall locally to test: `./install.sh`.
4. Open a PR if your change is useful to others.

That's how this agent was built; that's the cleanest way to evolve it.
