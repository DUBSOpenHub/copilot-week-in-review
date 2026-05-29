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
echo "  Try it from any Copilot CLI session:"
echo ""
echo "    @week-in-review"
echo ""
echo "  Then paste your messy weekly notes. You'll get a polished,"
echo "  GitHub-issue-ready status update in seconds."
echo ""
