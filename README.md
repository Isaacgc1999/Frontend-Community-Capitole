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

---

## 📝 Cómo agregar documentación o ejemplos

El sitio está construido con [Astro](https://astro.build/) y [Starlight](https://starlight.astro.build/). Cada archivo `.md` o `.mdx` dentro de `src/content/docs/` se convierte automáticamente en una página.

### Paso 1 — Elegí la carpeta correcta

Ubicá tu archivo en la sección que corresponda:

| Carpeta | Contenido |
|---|---|
| `src/content/docs/docs/` | Onboarding, ADRs, glosario |
| `src/content/docs/angular/` | Guidelines, ejemplos, patrones de Angular |
| `src/content/docs/react/` | Guidelines, ejemplos, patrones de React |
| `src/content/docs/vue/` | Guidelines, ejemplos, patrones de Vue |
| `src/content/docs/others/` | Svelte, Web Components, experimentos |
| `src/content/docs/shared/` | Temas transversales: a11y, perf, testing, etc. |

Dentro de cada sección hay subcarpetas por tema (p. ej. `react/examples/`, `angular/guidelines/`). Usá la subcarpeta que mejor describe tu aporte.

### Paso 2 — Creá el archivo

Creá un archivo `.md` o `.mdx` con un nombre descriptivo en [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case):

```
src/content/docs/react/examples/use-reducer-cart.md
src/content/docs/shared/testing/unit-testing-hooks.mdx
```

**¿Cuándo usar `.md` y cuándo `.mdx`?**

- `.md` — suficiente para texto, código y tablas simples.
- `.mdx` — necesario si querés usar componentes de Starlight (callouts, tabs, cards) o JSX dentro del contenido.

### Paso 3 — Agregá el frontmatter

Todo archivo debe empezar con un bloque frontmatter con al menos `title` y `description`:

```md
---
title: useReducer para carrito de compras
description: Ejemplo de manejo de estado complejo con useReducer en React.
---

El contenido va acá...
```

Propiedades útiles del frontmatter de Starlight:

| Propiedad | Descripción |
|---|---|
| `title` | **Obligatorio.** Título que aparece en la página y en el sidebar. |
| `description` | **Recomendado.** Descripción breve para SEO y vista previa. |
| `sidebar.order` | Número para controlar el orden dentro de la sección (menor = primero). |
| `sidebar.label` | Texto alternativo para el sidebar (si diferís del título). |

### Paso 4 — Escribí el contenido

Para un archivo `.md`:

```md
---
title: useReducer para carrito de compras
description: Ejemplo de manejo de estado complejo con useReducer en React.
---

## Por qué useReducer

Cuando el estado tiene múltiples sub-valores o las transiciones dependen del estado anterior,
`useReducer` es preferible a `useState`.

## Ejemplo

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

Para un archivo `.mdx` podés usar los componentes de Starlight:

```mdx
---
title: Testing de hooks con React Testing Library
description: Cómo testear hooks custom en React con RTL.
---

import { Aside, Tabs, TabItem } from '@astrojs/starlight/components';

<Aside type="tip">
  Usá `renderHook` para testear hooks sin necesidad de un componente wrapper.
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

### Paso 5 — Verificá en el servidor local

```bash
npm run dev
```

Abrí [http://localhost:4321](http://localhost:4321). Tu página aparece en el sidebar automáticamente dentro de la sección de la carpeta donde la creaste.

### Nota: crear una carpeta nueva

Si necesitás crear una subcarpeta que no existe todavía (p. ej. `react/hooks/`), también tenés que registrarla en el sidebar dentro de `astro.config.mjs`:

```js
// astro.config.mjs
{
  label: "React",
  items: [
    // ...entradas existentes
    { label: "Hooks", autogenerate: { directory: "react/hooks" } }, // ← agregar
  ],
}
```

Sin esa entrada el archivo existe pero no aparece en el sidebar de navegación.

---

## 🚀 Vision

Build a strong frontend culture where knowledge is shared, quality is consistent, and innovation is encouraged.

---

## 📬 Questions or ideas?

Feel free to open an issue or start a discussion.
