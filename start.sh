#!/bin/bash
# Move to the script's directory
cd "$(dirname "$0")"

# Ensure Node & npm from ~/.gemini/antigravity/bin are in PATH
export PATH="$HOME/.gemini/antigravity/bin:$PATH"

echo "=========================================="
echo "  Credit Cards Sahi Hai - Dev Server"
echo "=========================================="
echo "Starting local server at http://localhost:3000..."
echo "Press Ctrl+C to stop the server."
echo ""

# Remove any stale build cache to ensure styles always compile fresh
rm -rf .next

npm run dev
