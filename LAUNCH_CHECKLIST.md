# Launch Checklist

当前版本是本地可运行官网初版，不做正式部署。上线前建议完成以下事项。

## Content

- 替换正式 Logo、游戏截图、KV、角色图和社媒链接。
- 用真实项目数据替换 `src/lib/content.ts` 中的占位游戏信息。
- 英文文案交由熟悉海外市场的人做最终校对。

## Product

- 明确商务邮箱、招聘邮箱、社媒入口和合作类型。
- 决定联系表单后端：邮件服务、CRM、表单平台或自建 API。
- 确认是否需要隐私政策、Cookie 声明或备案信息。

## Engineering

- 部署前设置正式域名和 `metadataBase`。
- 接入真实 Open Graph 图片，建议使用 1200x630 专用图。
- 生产部署后跑 Lighthouse，重点看 Performance、Accessibility、SEO。
- 配置 Vercel 或其他托管平台的环境、预览分支和回滚流程。
