#!/usr/bin/env bash
set -euo pipefail

# Copilot Week in Review — one-click installer
# Drops the agent into ~/.copilot/agents/. No git clone, no config.

AGENT_DIR="$HOME/.copilot/agents"
AGENT_URL="https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/agents/week-in-review.agent.md"
AGENT_PATH="$AGENT_DIR/week-in-review.agent.md"

echo "📅 Installing Copilot Week in Review..."
echo ""

mkdir -p "$AGENT_DIR"

if ! command -v curl >/dev/null 2>&1; then
  echo "❌ curl is required but not installed. Please install curl and re-run." >&2
  exit 1
fi

curl -fsSL "$AGENT_URL" -o "$AGENT_PATH"
echo "  ✅ Agent → $AGENT_PATH"

echo ""
echo "📅 Copilot Week in Review installed!"
echo ""
echo "  Try it from the GitHub Copilot App or any Copilot CLI session:"
echo ""
echo "    @week-in-review"
echo ""
echo "  The agent will ask two quick questions (in one message):"
echo "    1. Source   — paste your own notes, pull from your GitHub,"
echo "                  both, or continue from your last weekly update?"
echo "    2. Audience — your manager, your team, or just yourself?"
echo ""
echo "  ⚡ Shortcut: include both hints in your invocation to skip the"
echo "  intake entirely:"
echo ""
echo "    @week-in-review pull from my github for my manager"
echo ""
echo "  Then you'll get a polished, GitHub-issue-ready status update in seconds."
echo ""
echo "  Tip: 'pull from your GitHub' mode uses the 'gh' CLI — make sure"
echo "  you've run 'gh auth login' at least once. (If not, the agent will"
echo "  detect it and offer to switch to notes mode.)"
echo ""
