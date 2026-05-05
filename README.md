# Frontend Community

Welcome to the **Frontend Community** repository.

This space is designed to centralize knowledge, share best practices, and foster collaboration among frontend developers across the company.

---

## 🎯 Purpose

The goal of this repository is to:

* Share frontend knowledge and experience
* Define and maintain coding standards
* Encourage experimentation and innovation
* Provide reusable solutions and patterns
* Improve consistency across projects
* Support onboarding of new developers

---

## 🧠 What you'll find here

* 📐 **Guidelines & Standards**
  Coding conventions, architecture decisions, naming patterns, etc.

* 🧩 **Reusable Components & Patterns**
  Common UI/UX solutions and implementation examples

* ⚙️ **Best Practices**
  Performance, accessibility, maintainability, testing, etc.

* 🧪 **Experiments & Proof of Concepts**
  New tools, frameworks, or approaches

* 📚 **Learning Resources**
  Articles, tutorials, internal knowledge, and references

---

## 🤝 How to contribute

We encourage everyone to participate.

You can contribute by:

* Adding documentation or examples
* Improving existing guidelines
* Sharing patterns or solutions
* Proposing new ideas or tools
* Fixing issues or inconsistencies

### Contribution workflow

1. Create a branch
2. Make your changes
3. Open a Pull Request
4. Request review from the community

---

## 📌 Principles

* Keep it simple and practical
* Prefer clarity over complexity
* Focus on real use cases
* Document decisions
* Think long-term and scalable

---

## 🧭 Repository structure

This repository is an [Astro](https://astro.build/) site powered by
[Starlight](https://starlight.astro.build/). All documentation and code
examples live as Markdown / MDX inside `src/content/docs/`.

```text
src/content/docs/
├── index.mdx              → Landing page
├── docs/                  → Onboarding, ADRs, glossary
├── angular/               → Guidelines, architecture, examples in Angular
├── react/                 → Guidelines, architecture, examples in React
├── vue/                   → Guidelines, architecture, examples in Vue
├── others/                → Svelte, Web Components, experiments
└── shared/                → Cross-cutting topics (a11y, perf, testing, …)
```

## 🛠️ Local development

```bash
npm install
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site to ./dist
npm run preview  # preview the production build locally
```

> ⚠️ **Search is only available in production builds.** Starlight's search index isn't generated during `npm run dev`. To test search locally, run `npm run build` followed by `npm run preview`.

---

## 📝 How to add documentation or examples

The site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Every `.md` or `.mdx` file inside `src/content/docs/` is automatically turned into a page.

### Step 1 — Pick the right folder

Place your file in the section that matches its content:

| Folder | Content |
|---|---|
| `src/content/docs/docs/` | Onboarding, ADRs, glossary |
| `src/content/docs/angular/` | Guidelines, examples, Angular patterns |
| `src/content/docs/react/` | Guidelines, examples, React patterns |
| `src/content/docs/vue/` | Guidelines, examples, Vue patterns |
| `src/content/docs/others/` | Svelte, Web Components, experiments |
| `src/content/docs/shared/` | Cross-cutting topics: a11y, perf, testing, etc. |

Each section has sub-folders by topic (e.g. `react/examples/`, `angular/guidelines/`). Use the sub-folder that best describes your contribution.

### Step 2 — Create the file

Create a `.md` or `.mdx` file with a descriptive name in [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case):

```
src/content/docs/react/examples/use-reducer-cart.md
src/content/docs/shared/testing/unit-testing-hooks.mdx
```

**When to use `.md` vs `.mdx`?**

- `.md` — sufficient for text, code, and simple tables.
- `.mdx` — required if you want to use Starlight components (callouts, tabs, cards) or JSX inside the content.

### Step 3 — Add frontmatter

Every file must start with a frontmatter block containing at least `title` and `description`:

```md
---
title: useReducer for a shopping cart
description: Example of complex state management with useReducer in React.
---

Content goes here...
```

Useful Starlight frontmatter properties:

| Property | Description |
|---|---|
| `title` | **Required.** Title shown on the page and in the sidebar. |
| `description` | **Recommended.** Short description for SEO and previews. |
| `sidebar.order` | Number to control order within the section (lower = first). |
| `sidebar.label` | Alternative label for the sidebar (if different from the title). |

### Step 4 — Write the content

For a `.md` file:

```md
---
title: useReducer for a shopping cart
description: Example of complex state management with useReducer in React.
---

## Why useReducer

When state has multiple sub-values or transitions depend on the previous state,
`useReducer` is preferable to `useState`.

## Example

```tsx
type Action =
  | { type: 'add'; item: CartItem }
  | { type: 'remove'; id: string };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add':    return [...state, action.item];
    case 'remove': return state.filter(i => i.id !== action.id);
  }
}
\`\`\`
```

For a `.mdx` file you can use Starlight components:

```mdx
---
title: Testing hooks with React Testing Library
description: How to test custom hooks in React with RTL.
---

import { Aside, Tabs, TabItem } from '@astrojs/starlight/components';

<Aside type="tip">
  Use `renderHook` to test hooks without needing a wrapper component.
</Aside>

<Tabs>
  <TabItem label="Hook">
    ```ts
    export function useCounter(initial = 0) {
      const [count, setCount] = useState(initial);
      return { count, increment: () => setCount(c => c + 1) };
    }
    ```
  </TabItem>
  <TabItem label="Test">
    ```ts
    it('increments the counter', () => {
      const { result } = renderHook(() => useCounter(0));
      act(() => result.current.increment());
      expect(result.current.count).toBe(1);
    });
    ```
  </TabItem>
</Tabs>
```

### Step 5 — Verify in the local server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Your page appears in the sidebar automatically under the section matching the folder you placed it in.

### Note: creating a new folder

If you need to create a sub-folder that doesn't exist yet (e.g. `react/hooks/`), you also need to register it in the sidebar inside `astro.config.mjs`:

```js
// astro.config.mjs
{
  label: "React",
  items: [
    // ...existing entries
    { label: "Hooks", autogenerate: { directory: "react/hooks" } }, // ← add this
  ],
}
```

Without that entry the file exists but won't appear in the navigation sidebar.

---

## 🚀 Vision

Build a strong frontend culture where knowledge is shared, quality is consistent, and innovation is encouraged.

---

## 📬 Questions or ideas?

Feel free to open an issue or start a discussion.
