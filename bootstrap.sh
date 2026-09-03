#!/usr/bin/env bash
set -euo pipefail
BASE_DIR=".gev-upstream"
rm -rf "$BASE_DIR"
git clone --depth 1 https://github.com/bilawalsidhu/gods-eye-view.git "$BASE_DIR"
cat v063.patch.part.* > "$BASE_DIR/v063.patch"
(
  cd "$BASE_DIR"
  git apply --binary v063.patch
  rm -f v063.patch package-lock.json
  rm -rf .git
)
cp -a "$BASE_DIR"/. .
rm -rf "$BASE_DIR"
rm -f v063.patch.part.* bootstrap.sh
echo "God's Eye v0.6.3 source reconstructed successfully."
