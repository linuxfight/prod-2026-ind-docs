// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid(),
    starlight({
      title: "LOTTY A/B Platform",
      sidebar: [
        {
          label: "Начало",
          items: [
            { label: "Быстрый старт", link: "/quick-start/" },
            { label: "Академическая честность", link: "/fairness/" },
          ],
        },
        {
          label: "Часть A: Контекст",
          items: [
            { label: "История", link: "/a/story/" },
            { label: "Что и как делаем", link: "/a/what/" },
            { label: "Введение в Guardrails", link: "/a/guardrails/" },
          ],
        },
        {
          label: "Часть B: Основной функционал",
          items: [
            { label: "0. Роли и доступ", link: "/b/roles/" },
            { label: "1. Feature Flags", link: "/b/feature-flags/" },
            { label: "2. Эксперименты", link: "/b/experiments/" },
            { label: "3. Runtime Decide", link: "/b/decide/" },
            { label: "4. События", link: "/b/events/" },
            { label: "5. Отчёты", link: "/b/reports/" },
            { label: "6. Guardrails", link: "/b/guardrails/" },
          ],
        },
        {
          label: "Часть C: Расширения",
          items: [
            { label: "7. Уведомления", link: "/c/notifications/" },
            { label: "8. UI и Инсайты", link: "/c/ui/" },
            { label: "9. Библиотека знаний", link: "/c/learnings/" },
            { label: "10. Автопилот", link: "/c/autopilot/" },
            { label: "11. Разрешение конфликтов", link: "/c/conflicts/" },
          ],
        },
        {
          label: "Часть D: Сдача и критерии",
          items: [
            { label: "Результат", link: "/d/result/" },
            { label: "Критерии оценивания", link: "/d/criteria/" },
            { label: "Словарь терминов", link: "/glossary/" },
          ],
        },
      ],
      customCss: [
        './src/assets/custom.css'
      ],
    },),
  ],
});
