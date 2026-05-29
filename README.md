# 📅 Copilot Week in Review

> **Copilot Week in Review is a GitHub Copilot agent that turns your week — whether messy notes or raw GitHub activity — into a polished, audience-tuned, GitHub-issue-ready status update in seconds. Works in the GitHub Copilot app *or* the Copilot CLI.**

*Built using the [GitHub Copilot app](https://github.com/features/copilot) — chat, refine, ship.*

---

## 🏃 30-second start

**1. Install** — paste this in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash
```

**2. Use it** — in either the **GitHub Copilot app** *or* a **Copilot CLI** session, type:

```
@week-in-review
```

The agent then asks you two quick questions:

1. **Source** — paste your own notes, pull from your GitHub activity, both, or continue from your last weekly update?
2. **Audience** — your manager (formal, outcomes), your team (collaborative), or just yourself (raw log)?

Answer those, and you get a polished update back. That's it.

> ⚡ **Shortcut:** include both answers in your invocation and the agent skips the questions entirely:
>
> ```
> @week-in-review pull from my github for my manager
> ```
>
> One line in, manager-ready update out.

---

## ✨ How it makes your week easier

| 🧠 You bring | 🤖 You get back |
|---|---|
| Half-sentence brain dump | A polished status update |
| Nothing — *"pull from my GitHub"* | A week summarized straight from your PRs & issues |
| 30 seconds of typing | 0 seconds of writing |
| Notes only you understand | Markdown your team can ship from |

- 🎯 **Two-question intake** — *source* (notes / GitHub pull / both / continue from last update) and *audience* (manager / team / yourself), so the same agent fits every weekly ritual. Both questions come in **one message**, or get skipped entirely if you put hints in your invocation.
- 🐙 **Auto-pulls from GitHub** — uses `gh` to gather your last 7 days of PRs, reviews, issues, and comments across your repos. Skips the noise (typo fixes, bot bumps). Falls back to notes mode gracefully if `gh` isn't installed or logged in.
- 🔁 **Continue from your last update** — fourth source option that finds your previous weekly issue and diffs from there, so you never double-report wins
- 🎚️ **Audience-aware tone** — *Manager* leads with outcomes & impact; *Team* highlights handoffs & "what's next"; *Yourself* keeps your voice and small wins
- 📌 **GitHub-issue-ready by default** — `##` headings render, `- [x]` becomes clickable checkboxes your team can tick off as work ships
- 🪶 **Tiny footprint** — one agent file, one installer, no servers, no config, no API keys
- 🪄 **No repo required** — runs in the GitHub Copilot app *or* any Copilot CLI session, anywhere
- 🔁 **Conversational refinement** — ask for "more casual", "punchier", or "open it as an issue in `myorg/updates`"

---

## 👀 See it in action

### 🐙 The hero shot — pulling from GitHub (no typing required)

```
@week-in-review
> Source? Pull from my GitHub activity
> Audience? My manager
```

…and the agent runs `gh search` against your last 7 days, groups your PRs/issues by workstream, filters out the noise, and tunes the language for leadership. **One line in, a manager-ready update out — no notes required, no follow-up questions.**

<details>
<summary>✍️ Prefer pasting your own notes? Click for the notes-mode example</summary>

```
@week-in-review
> Source? Paste my own notes
> Audience? My team

shipped checkout v2 behind a feature flag, fixed two flaky login tests,
reviewed 6 PRs, started API rate-limit design doc, oncall starts monday
```

Same polished output, with your wording and tone preserved.

</details>

### 📬 Either way, you get this back — ready to paste into a GitHub issue

**Title:** Week in Review — Mar 17–21, 2026

**Labels:** `weekly-update` `status`

**Body:**

## TL;DR

Shipped Checkout v2 behind a feature flag, cleared the flaky login tests, and kicked off the API rate-limit design doc. Oncall starts Monday.

## ✅ Shipped this week

- [x] **Checkout v2 — live behind a feature flag** — ready for staged rollout next week.
- [x] **Fixed two flaky login tests** — login suite back to green.
- [x] **Reviewed 6 PRs** — kept the team unblocked.

## 🚧 In progress

- [ ] **API rate-limit design doc** — first draft underway, ready for review next week.

## 🔭 Next week

- [ ] 🚨 **Oncall rotation starts Monday.** Slower response on non-urgent items.
- [ ] Begin staged rollout of Checkout v2.
- [ ] Circulate the rate-limit design doc for team review.

**That's it.** Paste it into an issue. Click the boxes as work ships. Done.

---

## ⚡ Install

**One-click install** — paste this in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash
```

That's it. No git clone, no config, no API keys.

Then in the **GitHub Copilot app** or any **Copilot CLI** session: `@week-in-review`

<details>
<summary>Other install options</summary>

**Via the GitHub Copilot CLI:**

```
/agents add DUBSOpenHub/copilot-week-in-review
```

**Clone + install (if you want a local copy to remix):**

```bash
git clone https://github.com/DUBSOpenHub/copilot-week-in-review.git
cd copilot-week-in-review && ./install.sh
```

</details>

**Requirements:** GitHub Copilot (app or CLI) · active [Copilot subscription](https://github.com/features/copilot) · macOS, Linux, or WSL. The optional *"pull from my GitHub"* mode needs the [`gh` CLI](https://cli.github.com/) authenticated as you (`gh auth login`); if it's missing, the agent will detect that and offer to fall back to notes mode.
**Privacy:** Your notes stay in your Copilot session. When you pick the *"pull from my GitHub"* mode, the agent runs `gh` locally as you — nothing leaves your machine except the GitHub API calls `gh` already makes on your behalf. No telemetry, no analytics.

---

## 🧑‍💻 Use it

Works the same way in either surface — **no repo required**:

### In the GitHub Copilot app

Open Copilot. Type:

```
@week-in-review
```

### In the Copilot CLI

```
copilot
> @week-in-review
```

Either way, the agent asks two quick questions in a single message — *or* skips them entirely if you include hints in your invocation (e.g. `@week-in-review continue from my last update, for my team`):

**With your own notes:**
```
> Source? Paste my own notes
> Audience? My team

ran the design review, fixed two flaky tests, finished the Q3 plan draft,
1:1s with three reports, prepping for the all-hands on Friday
```

**Pulled from your GitHub activity:**
```
> Source? Pull from my GitHub activity
> Audience? My manager
```

**Continuing from your last update (no double-reporting):**
```
> Source? Continue from my last weekly update
> Audience? My team
```

You'll get a polished, issue-ready update back. Then:

- **Paste it** into a GitHub issue, Slack, or email
- **Ask for tweaks** — "make it more casual", "more formal", "punchier", "switch the audience to my team"
- **Have it filed** — "open this as an issue in `myorg/team-updates`"

---

## 🏗️ Built with the GitHub Copilot app

This whole project — agent prompt, installer, README, repo structure — was built in **conversation** inside the [GitHub Copilot app](https://github.com/features/copilot):

1. Started with a one-line idea: *"turn my messy weekly notes into a polished update"*
2. Iterated on the agent's output format live (Slack-style → GitHub-issue-style)
3. Asked Copilot to scaffold this repo using a sibling project ([terminal-stampede](https://github.com/DUBSOpenHub/terminal-stampede)) as a template
4. Shipped

No frameworks, no boilerplate generators, no setup. Just chat → refine → ship.

If you want to remix this agent for your own team — change the sections, the tone, the labels — open `agents/week-in-review.agent.md` in the Copilot app and ask it to make the changes. That's how it was built; that's the cleanest way to evolve it.

---

## 📁 What's in this repo

```
copilot-week-in-review/
├── agents/
│   └── week-in-review.agent.md   ← the agent (Copilot agent format, invoke as @week-in-review in the app or CLI)
├── quickstart.sh                 ← one-click curl|bash installer
├── install.sh                    ← local installer (for git clone users)
├── AGENTS.md                     ← agent reference / design principles
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE                       ← MIT
└── README.md
```

That's the whole project. One agent file, two installers.

---

## 🤝 Contributing

PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). The agent prompt is intentionally short — keep it that way.

---

## 📜 License

[MIT](LICENSE) — use it, fork it, remix it for your team. 📅

---

## 🐙 Created with 💜 by [@DUBSOpenHub](https://github.com/DUBSOpenHub) with the [GitHub Copilot app](https://github.com/features/copilot).

Let's build! 🚀✨
