import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://nujovich.github.io/frontend-community-capitole",
  integrations: [
    starlight({
      title: "Frontend Community",
      description:
        "Knowledge base, guidelines and code examples across frontend frameworks and languages.",
      defaultLocale: "root",
      locales: {
        root: { label: "Español", lang: "es" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nujovich/frontend-community-capitole",
        },
      ],
      sidebar: [
        {
          label: "Inicio",
          link: "/",
        },
        {
          label: "Docs",
          items: [
            { label: "Introducción", link: "/docs/" },
            { label: "Onboarding", autogenerate: { directory: "docs/onboarding" } },
            { label: "Decisiones (ADRs)", autogenerate: { directory: "docs/decisions" } },
            { label: "Glosario", autogenerate: { directory: "docs/glossary" } },
          ],
        },
        {
          label: "Angular",
          items: [
            { label: "Introducción", link: "/angular/" },
            { label: "Guidelines", autogenerate: { directory: "angular/guidelines" } },
            { label: "Architecture", autogenerate: { directory: "angular/architecture" } },
            { label: "Components", autogenerate: { directory: "angular/components" } },
            { label: "Patterns", autogenerate: { directory: "angular/patterns" } },
            { label: "State management", autogenerate: { directory: "angular/state-management" } },
            { label: "Examples", autogenerate: { directory: "angular/examples" } },
          ],
        },
        {
          label: "React",
          items: [
            { label: "Introducción", link: "/react/" },
            { label: "Guidelines", autogenerate: { directory: "react/guidelines" } },
            { label: "Architecture", autogenerate: { directory: "react/architecture" } },
            { label: "Components", autogenerate: { directory: "react/components" } },
            { label: "Patterns", autogenerate: { directory: "react/patterns" } },
            { label: "State management", autogenerate: { directory: "react/state-management" } },
            { label: "Examples", autogenerate: { directory: "react/examples" } },
          ],
        },
        {
          label: "Vue",
          items: [
            { label: "Introducción", link: "/vue/" },
            { label: "Guidelines", autogenerate: { directory: "vue/guidelines" } },
            { label: "Architecture", autogenerate: { directory: "vue/architecture" } },
            { label: "Components", autogenerate: { directory: "vue/components" } },
            { label: "Patterns", autogenerate: { directory: "vue/patterns" } },
            { label: "State management", autogenerate: { directory: "vue/state-management" } },
            { label: "Examples", autogenerate: { directory: "vue/examples" } },
          ],
        },
        {
          label: "Otros",
          items: [
            { label: "Introducción", link: "/others/" },
            { label: "Svelte", autogenerate: { directory: "others/svelte" } },
            { label: "Web components", autogenerate: { directory: "others/web-components" } },
            { label: "Experimentos", autogenerate: { directory: "others/experiments" } },
          ],
        },
        {
          label: "Compartido",
          items: [
            { label: "Introducción", link: "/shared/" },
            { label: "Best practices", autogenerate: { directory: "shared/best-practices" } },
            { label: "Performance", autogenerate: { directory: "shared/performance" } },
            { label: "Accessibility", autogenerate: { directory: "shared/accessibility" } },
            { label: "Testing", autogenerate: { directory: "shared/testing" } },
            { label: "Security", autogenerate: { directory: "shared/security" } },
            { label: "Tooling", autogenerate: { directory: "shared/tooling" } },
          ],
        },
      ],
    }),
  ],
});
