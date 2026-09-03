#!/usr/bin/env bash
set -euo pipefail

BASE_DIR=".gev-upstream"
UPSTREAM_COMMIT="65bc522f49dc1166eca533996be8e789ad36cfe5"

rm -rf "$BASE_DIR" v063-runtime-full.patch.gz v063-runtime-full.patch

git clone https://github.com/bilawalsidhu/gods-eye-view.git "$BASE_DIR"
(
  cd "$BASE_DIR"
  git checkout --detach "$UPSTREAM_COMMIT"
)

cat v063full.b64.part.* | base64 -d > v063-runtime-full.patch.gz
gzip -t v063-runtime-full.patch.gz
gzip -dc v063-runtime-full.patch.gz > v063-runtime-full.patch

(
  cd "$BASE_DIR"
  git apply --binary ../v063-runtime-full.patch
  rm -f package-lock.json
  rm -rf .git
)

cp -a "$BASE_DIR"/. .
rm -rf "$BASE_DIR"
rm -f v063-runtime-full.patch.gz v063-runtime-full.patch v063full.b64.part.* v063.patch.part.*

echo "God's Eye v0.6.3 source reconstructed successfully from pinned upstream ${UPSTREAM_COMMIT}."
