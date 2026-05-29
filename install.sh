#!/usr/bin/env bash
set -euo pipefail

# Copilot Week in Review installer
# Turns messy weekly notes into a polished, GitHub-issue-ready status update.

echo "📅 Installing Copilot Week in Review..."
echo ""

AGENT_DIR="$HOME/.copilot/agents"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

mkdir -p "$AGENT_DIR"

cp "$SCRIPT_DIR/agents/week-in-review.agent.md" "$AGENT_DIR/week-in-review.agent.md"
echo "  ✅ Agent → $AGENT_DIR/week-in-review.agent.md"

echo ""
echo "📅 Copilot Week in Review installed!"
echo ""
echo "  Try it from the GitHub Copilot app or any Copilot CLI session:"
echo ""
echo "    @week-in-review"
echo ""
echo "  The agent will ask two quick questions:"
echo "    1. Source   — paste your own notes, pull from your GitHub,"
echo "                  both, or continue from your last weekly update?"
echo "    2. Audience — your manager, your team, or just yourself?"
echo ""
echo "  Then you'll get a polished, GitHub-issue-ready status update in seconds."
echo ""
echo "  Tip: 'pull from your GitHub' mode uses the 'gh' CLI — make sure"
echo "  you've run 'gh auth login' at least once. (If not, the agent will"
echo "  detect it and offer to switch to notes mode.)"
echo ""
echo "  Demo + docs: https://dubsopenhub.github.io/copilot-week-in-review/"
echo ""
