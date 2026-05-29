# Endmoon Studio Homepage

中英双语游戏研发与运营工作室官网初版。本地项目使用 Next.js App Router、React、Tailwind CSS 和本地结构化内容数据实现。

## Pages

- `/` 首页：品牌首屏、能力模块、精选作品、合作 CTA
- `/games` 作品/游戏：3 个可替换项目展示
- `/about` 关于我们：团队定位、能力支柱、价值观
- `/contact` 联系我们：商务/招聘/社媒入口、前端校验表单

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Content

主要文案和项目数据在 `src/lib/content.ts`。临时视觉资产在 `public/assets/endmoon-showcase-triptych.png`，后续可替换为真实 Logo、游戏截图、KV 或角色图。

## Delivery Notes

- 语言切换使用前端会话状态，刷新后回到默认中文。
- 联系表单仅做前端校验，不提交到服务器。
- Figma 文件：`Endmoon Studio 官网视觉方向 V1`
- 上线前事项见 `LAUNCH_CHECKLIST.md`。
