# 📅 Copilot Week in Review

> **Copilot Week in Review is a GitHub Copilot agent that turns your week — whether messy notes or raw GitHub activity — into a polished, audience-tuned, GitHub-issue-ready status update in seconds. Works in the GitHub Copilot App *or* the Copilot CLI.**

*Built using the [GitHub Copilot App](https://github.com/features/copilot) — chat, refine, ship.*

---

## 🏃 30-second start

**1. Install** — paste this in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash
```

**2. Use it** — in either the **GitHub Copilot App** *or* a **Copilot CLI** session, type:

```
@week-in-review
```

The agent then walks you through four quick steps:

1. **Source** 📥 — paste your notes, pull from your last 7 days of GitHub activity, or both
2. **Audience** 👥 — your manager (formal, outcomes), your team (collaborative), or just yourself (raw log)
3. **Draft** 🪄 — you get a polished, GitHub-issue-ready markdown update back
4. **File it?** 📬 — the agent then offers to file it as a GitHub issue for you (or you can paste it yourself)

That's it.

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

- 🎯 **Four-step flow** — source 📥 (notes / GitHub pull / both), audience 👥 (manager / team / yourself), polished draft 🪄, then an explicit offer to file it as a GitHub issue 📬. Same flow in the Copilot App and the CLI — never skips, never asks twice.
- 🐙 **Auto-pulls from GitHub** — uses `gh` to gather your last 7 days of PRs, reviews, issues, and comments across your repos. Skips the noise (typo fixes, bot bumps). Falls back to notes mode gracefully if `gh` isn't installed or logged in.
- 🔁 **Continue from your last update** — ask in plain English (*"continue from my last weekly update in `myorg/team-updates`"*) and the agent finds your prior weekly issue and diffs from there, so you never double-report wins
- 🎚️ **Audience-aware tone** — *Manager* leads with outcomes & impact; *Team* highlights handoffs & "what's next"; *Yourself* keeps your voice and small wins
- 📬 **Files the issue for you** — at Step 4, just say "yes, file it in `myorg/team-updates`" and the agent runs `gh issue create` with the right labels and body
- 📌 **GitHub-issue-ready by default** — `##` headings render, `- [x]` becomes clickable checkboxes your team can tick off as work ships
- 🪶 **Tiny footprint** — one agent file, one installer, no servers, no config, no API keys
- 🪄 **No repo required** — runs in the GitHub Copilot App *or* any Copilot CLI session, anywhere
- 🔁 **Conversational refinement** — ask for "more casual", "punchier", or "switch audience to team"

---

## 👀 See it in action

### 📬 What you get back — ready to paste into a GitHub issue

The agent emits a suggested **Title** and **Labels** above the body, so the whole thing is one paste away from being an issue:

```
Title: Week in Review — May 25–29, 2026
Labels: weekly-update, status
```

Then the body itself, which renders inside a GitHub issue like this:

## TL;DR

Shipped Checkout v2 behind a feature flag, cleared the flaky login tests, and kicked off the API rate-limit design doc. Oncall starts Monday. 🎯

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

**That's it.** Paste it into an issue yourself, or just say *"yes, file it in `myorg/team-updates`"* at the Step 4 📬 prompt and the agent will run `gh issue create` for you. Click the boxes as work ships. Done.

---

## ⚡ Install

**One-click install** — paste this in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash
```

That's it. No git clone, no config, no API keys.

Then in the **GitHub Copilot App** or any **Copilot CLI** session: `@week-in-review`

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

**Requirements:** GitHub Copilot (App or CLI) · active [Copilot subscription](https://github.com/features/copilot) · macOS, Linux, or WSL. The optional *"pull from my GitHub"* mode needs the [`gh` CLI](https://cli.github.com/) authenticated as you (`gh auth login`); if it's missing, the agent will detect that and offer to fall back to notes mode.
**Privacy:** Your notes stay in your Copilot session. When you pick the *"pull from my GitHub"* mode, the agent runs `gh` locally as you — nothing leaves your machine except the GitHub API calls `gh` already makes on your behalf. No telemetry, no analytics.

---

## 🧑‍💻 Use it

Works the same way in either surface — **no repo required**:

### In the GitHub Copilot App

Open Copilot. Type:

```
@week-in-review
```

### In the Copilot CLI

```
copilot
> @week-in-review
```

Either way, the agent walks you through four quick steps — *or* skips Steps 1 & 2 entirely if you include hints in your invocation (e.g. `@week-in-review continue from my last update, for my team`):

**With your own notes:**
```
> Where should I pull from? A (notes)
> Who's this update for? 2 (team)

ran the design review, fixed two flaky tests, finished the Q3 plan draft,
1:1s with three reports, prepping for the all-hands on Friday
```

**Pulled from your GitHub activity:**
```
> Where should I pull from? B (GitHub, last 7 days)
> Who's this update for? 1 (manager)
```

**Continuing from your last update (no double-reporting):**
```
@week-in-review continue from my last weekly update in myorg/team-updates, for my team
```

You'll get a polished, issue-ready update back. Then at **Step 4**, the agent offers to:

- **Paste it yourself** into a GitHub issue, Slack, or email
- **Tweak first** — "make it more casual", "punchier", "switch audience to team"
- **File it for you** — say "yes, in `myorg/team-updates`" and the agent runs `gh issue create` with the right title, labels, and body

---

## 🏗️ Built with the GitHub Copilot App

This whole project — agent prompt, installer, README, repo structure — was built in **conversation** inside the [GitHub Copilot App](https://github.com/features/copilot):

1. Started with a one-line idea: *"turn my messy weekly notes into a polished update"*
2. Iterated on the agent's output format live (Slack-style → GitHub-issue-style)
3. Asked Copilot to scaffold this repo using a sibling project ([terminal-stampede](https://github.com/DUBSOpenHub/terminal-stampede)) as a template
4. Shipped

No frameworks, no boilerplate generators, no setup. Just chat → refine → ship.

If you want to remix this agent for your own team — change the sections, the tone, the labels — open `agents/week-in-review.agent.md` in the Copilot App and ask it to make the changes. That's how it was built; that's the cleanest way to evolve it.

---

## 📁 What's in this repo

```
copilot-week-in-review/
├── agents/
│   └── week-in-review.agent.md   ← the agent (Copilot agent format, invoke as @week-in-review in the App or CLI)
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

## 🐙 Created with 💜 by [@DUBSOpenHub](https://github.com/DUBSOpenHub) with the [GitHub Copilot App](https://github.com/features/copilot).

Let's build! 🚀✨
