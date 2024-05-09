import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  server: { port: 4322 },
  site: "https://heihua.yadaze.com",
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: "游戏王黑话文档",
      editLink: {
        baseUrl: "https://github.com/ColinWttt/yugioh-slang/edit/main/",
      },
      tableOfContents: false,
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/ColinWttt/yugioh-slang",
      },
      sidebar: [
        {
          label: "基础篇",
          autogenerate: { directory: "基础篇", collapsed: true },
        },
        {
          label: "怪兽",
          autogenerate: { directory: "怪兽", collapsed: true },
        },
        {
          label: "常见缩写",
          autogenerate: { directory: "abbr", collapsed: true },
        },
        {
          label: "卡组",
          autogenerate: { directory: "卡组", collapsed: true },
        },
        {
          label: "规则",
          collapsed: true,
          autogenerate: { directory: "规则", collapsed: true },
        },
      ],
    }),
  ],
});
