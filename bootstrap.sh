#!/usr/bin/env bash
set -euo pipefail
cat overlay.part-*.b64 | base64 -d > overlay.tar.gz
BASE_DIR=".gev-upstream"
rm -rf "$BASE_DIR"
git clone --depth 1 --filter=blob:none --sparse https://github.com/bilawalsidhu/gods-eye-view.git "$BASE_DIR"
git -C "$BASE_DIR" sparse-checkout set src public config
mkdir -p src public config
cp -rn "$BASE_DIR/src/." src/
cp -rn "$BASE_DIR/public/." public/
cp -rn "$BASE_DIR/config/." config/
for f in index.html style.css LICENSE; do
  if [ ! -e "$f" ] && [ -e "$BASE_DIR/$f" ]; then cp "$BASE_DIR/$f" "$f"; fi
done
rm -rf "$BASE_DIR"
tar -xzf overlay.tar.gz -C .
rm -f overlay.tar.gz overlay.part-*.b64
echo "God's Eye v0.6.3 source bootstrapped and overlay applied."
