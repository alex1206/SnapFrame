# 🖼️ SnapFrame

> **让每一张截图都精致出彩**  
> Make every screenshot stand out.

SnapFrame 是一款极简、高颜值的在线截图美化工具。采用 **Cyber-Glass (赛博玻璃)** 设计风格，拖入即美化，一键即下载，助您轻松生成专业级的产品展示图、社交媒体配图或技术博客插图。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg?style=flat&logo=tailwind-css)

## ✨ 核心功能 (Features)

- **🎯 极简交互**  
  支持拖拽上传、点击选择或直接 `Ctrl+V` 粘贴截图，3秒完成美化。

- **🎨 高级质感**  
  内置多款精选渐变背景，搭配精心调校的阴影与圆角参数，瞬间提升图片格调。

- **📐 自由定制**  
  - **背景**：支持预设渐变、纯色背景或透明背景。
  - **边框**：可调节圆角大小 (0-32px)。
  - **阴影**：提供 无/轻/中/重 四档阴影强度。
  - **布局**：自由调整内边距 (Padding) 和缩放比例。

- **⚡ 高效输出**  
  基于 HTML5 Canvas 纯前端处理，无需上传服务器，保护隐私。支持一键导出高清 PNG 图片。

## 🛠 技术栈 (Tech Stack)

本项目基于现代前端技术栈构建：

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Graphics**: HTML5 Canvas API

## 🚀 快速开始 (Getting Started)

### 前置要求
确保您的环境已安装 [Node.js](https://nodejs.org/) (推荐 v18+)。

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/alex1206/SnapFrame.git
   ```

2. **进入项目目录**
   注意：前端代码位于 `snapframe` 子目录下。
   ```bash
   cd SnapFrame/snapframe
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```
   浏览器访问 `http://localhost:5173` 即可看到效果。

### 构建部署

构建生产环境代码：
```bash
npm run build
```
构建产物将输出至 `dist` 目录，可直接部署到 Vercel、Netlify 或任何静态文件服务器。

## 📂 目录结构

```
snapframe/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # UI 组件 (UploadZone, Preview, StylePanel等)
│   ├── constants/       # 常量配置 (预设背景等)
│   ├── utils/           # 工具函数 (Canvas处理, 下载逻辑)
│   ├── App.tsx          # 主应用组件
│   └── main.tsx         # 入口文件
├── public/              # 公共资源
├── index.html           # HTML 模板
└── vite.config.ts       # Vite 配置
```

## 🤝 贡献 (Contributing)

欢迎提交 Issue 或 Pull Request 来改进 SnapFrame！
1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

