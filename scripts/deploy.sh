#!/usr/bin/env bash
# ----------------------------------------------------------------------------
# 服务器端一键部署脚本
#   - 拉取最新代码
#   - 安装依赖
#   - 构建（standalone）
#   - 复制静态资源到 standalone 目录
#   - 重启 PM2
# 使用：在服务器项目根目录执行  bash scripts/deploy.sh
# ----------------------------------------------------------------------------
set -euo pipefail

cd "$(dirname "$0")/.."

echo "▸ 拉取最新代码"
git fetch --all --prune
git reset --hard origin/main

echo "▸ 安装依赖（--frozen-lockfile）"
pnpm install --frozen-lockfile --prod=false

echo "▸ 构建生产产物"
pnpm build

# standalone 模式不会自动复制 public 与 .next/static，需要手动同步
echo "▸ 同步静态资源到 standalone"
mkdir -p .next/standalone/.next
rm -rf .next/standalone/.next/static
cp -R .next/static .next/standalone/.next/static
rm -rf .next/standalone/public
cp -R public .next/standalone/public

echo "▸ 重启 / 启动 PM2"
if pm2 describe wzlywebsite > /dev/null 2>&1; then
  pm2 reload wzlywebsite --update-env
else
  pm2 start ecosystem.config.cjs --env production
  pm2 save
fi

pm2 status wzlywebsite
echo "✅ 部署完成"
