# 📅 Week in Review

> **Week in Review is a GitHub Copilot agent that turns messy weekly notes into a polished, GitHub-issue-ready status update in seconds.**

*Built using the [GitHub Copilot app](https://github.com/features/copilot) — chat, refine, ship.*

---

## What it does

You paste rough notes about your week. You get back a clean, structured status update — formatted as **GitHub-flavored markdown with clickable task lists**, ready to drop into an issue, a Slack message, or an email.

### Before

```
ran soss session 4 retro, ai enablement deck, shipped new agent in copilot app,
prep for openclaw video shoot tuesday in SF with maintainers
```

### After

**Title:** Week in Review — May 25–29, 2026

**Labels:** `weekly-update` `status`

**Body:**

## TL;DR

Closed out SOSS Fund Session 4, shipped a new Copilot agent, and locked in logistics for next week's OpenClaw shoot in SF.

## ✅ Shipped this week

- [x] **SOSS Fund — Session 4 retrospective** — ran end-to-end; takeaways captured for Session 5.
- [x] **New agent live in the GitHub Copilot app** — additional capability now in users' hands.
- [x] **AI enablement deck** — meaningful progress on narrative + structure.

## 🚧 In progress

- [ ] **AI enablement deck** — refining content and visuals ahead of delivery.
- [ ] **OpenClaw video shoot prep** — maintainer coordination, schedule, logistics.

## 🔭 Next week

- [ ] ✈️ **OpenClaw video shoot — Tue, June 3, San Francisco.** Filming with maintainers.
- [ ] Fold SOSS Session 4 retro takeaways into Session 5 planning.

---

## 🚀 Install

```bash
git clone https://github.com/DUBSOpenHub/week-in-review.git
cd week-in-review
./install.sh
```

The installer drops one file into `~/.copilot/agents/`. That's it.

### Or install directly via the GitHub Copilot CLI

```
/agents add DUBSOpenHub/week-in-review
```

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

## ✨ Why GitHub-issue-ready by default?

Because that's where weekly updates actually live for engineering teams:

- `##` headings render as real section headers
- `- [ ]` task items become **clickable checkboxes** — teammates tick things off as they ship
- Built-in progress tracking (`2 of 6 done`) on the issue list
- Linkable, searchable, archivable — Slack messages aren't

The output also pastes cleanly into Slack, Notion, and email (markdown gracefully degrades).

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
├── install.sh                    ← copies the agent to ~/.copilot/agents/
├── CONTRIBUTING.md
├── LICENSE                       ← MIT
└── README.md
```

That's the whole project. One agent file, one installer.

---

## 🤝 Contributing

PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). The agent prompt is intentionally short — keep it that way.

---

## 📜 License

[MIT](LICENSE) © DUBSOpenHub
