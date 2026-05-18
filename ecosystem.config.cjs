/**
 * PM2 进程配置 —— 通过 standalone 输出启动
 * 启动命令：pm2 start ecosystem.config.cjs --env production
 */
module.exports = {
  apps: [
    {
      name: "wzlywebsite",
      script: ".next/standalone/server.js",
      cwd: __dirname,
      instances: 1, // CPU 充足可改为 "max"
      exec_mode: "fork", // 单实例用 fork；多实例改 "cluster"
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        // Next standalone 默认监听 0.0.0.0:3000；nginx 反代到此
        HOSTNAME: "127.0.0.1",
        PORT: 3000,
      },
      // 日志
      out_file: "./logs/out.log",
      error_file: "./logs/err.log",
      merge_logs: true,
      time: true,
    },
  ],
};
