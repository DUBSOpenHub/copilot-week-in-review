# 📅 Week in Review

> **Week in Review is a GitHub Copilot agent that turns messy weekly notes into a polished, GitHub-issue-ready status update in seconds.**

*Built using the [GitHub Copilot app](https://github.com/features/copilot) — chat, refine, ship.*

---

## 🏃 30-second start

**1. Install** — paste this in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/week-in-review/main/quickstart.sh | bash
```

**2. Use it** — in any GitHub Copilot CLI session, type:

```
@week-in-review
```

Then paste your messy weekly notes. That's it.

---

## ✨ How it makes your week easier

| 🧠 You write | 🤖 You get back |
|---|---|
| Half-sentence brain dump | A polished status update |
| 30 seconds of typing | 0 seconds of writing |
| Notes only you understand | Markdown your team can ship from |

- 📌 **GitHub-issue-ready by default** — `##` headings render, `- [x]` becomes clickable checkboxes your team can tick off as work ships
- 🪶 **Tiny footprint** — one agent file, one installer, no servers, no config, no API keys
- 🪄 **No repo required** — runs from any GitHub Copilot CLI session, anywhere
- 🔁 **Conversational refinement** — ask for "more casual", "punchier", or "open it as an issue in `myorg/updates`"

---

## 👀 See it in action

### ✍️ You paste this

```
shipped checkout v2 behind a feature flag, fixed two flaky login tests,
reviewed 6 PRs, started API rate-limit design doc, oncall starts monday
```

### 📬 You get this back — ready to paste into a GitHub issue

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
curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/week-in-review/main/quickstart.sh | bash
```

That's it. No git clone, no config, no API keys.

Then in any Copilot CLI session: `@week-in-review`

<details>
<summary>Other install options</summary>

**Via the GitHub Copilot CLI:**

```
/agents add DUBSOpenHub/week-in-review
```

**Clone + install (if you want a local copy to remix):**

```bash
git clone https://github.com/DUBSOpenHub/week-in-review.git
cd week-in-review && ./install.sh
```

</details>

**Requirements:** GitHub Copilot CLI · active [Copilot subscription](https://github.com/features/copilot) · macOS, Linux, or WSL.
**Privacy:** Your notes stay in your Copilot session. No telemetry, no analytics, nothing sent anywhere this agent doesn't already use.

---

## 🧑‍💻 Use it

From any GitHub Copilot CLI session — **no repo required**:

```
@week-in-review

ran the design review, fixed two flaky tests, finished the Q3 plan draft,
1:1s with three reports, prepping for the all-hands on Friday
```

You'll get a polished, issue-ready update back. Then:

- **Paste it** into a GitHub issue, Slack, or email
- **Ask for tweaks** — "make it more casual", "more formal", "punchier"
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
week-in-review/
├── agents/
│   └── week-in-review.agent.md   ← the agent (Copilot CLI format)
├── quickstart.sh                 ← one-click curl|bash installer
├── install.sh                    ← local installer (for git clone users)
├── CONTRIBUTING.md
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
