#!/usr/bin/env bash
set -euo pipefail

# Week in Review — one-click installer
# Drops the agent into ~/.copilot/agents/. No git clone, no config.

AGENT_DIR="$HOME/.copilot/agents"
AGENT_URL="https://raw.githubusercontent.com/DUBSOpenHub/week-in-review/main/agents/week-in-review.agent.md"
AGENT_PATH="$AGENT_DIR/week-in-review.agent.md"

echo "📅 Installing Week in Review..."
echo ""

mkdir -p "$AGENT_DIR"

if ! command -v curl >/dev/null 2>&1; then
  echo "❌ curl is required but not installed. Please install curl and re-run." >&2
  exit 1
fi

curl -fsSL "$AGENT_URL" -o "$AGENT_PATH"
echo "  ✅ Agent → $AGENT_PATH"

echo ""
echo "📅 Week in Review installed!"
echo ""
echo "  Try it from any Copilot CLI session:"
echo ""
echo "    @week-in-review"
echo ""
echo "  Then paste your messy weekly notes. You'll get a polished,"
echo "  GitHub-issue-ready status update in seconds."
echo ""
