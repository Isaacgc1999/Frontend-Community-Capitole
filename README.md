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

To add a new example, create a `.md` or `.mdx` file inside the matching
folder under `src/content/docs/`. The sidebar is auto-generated from the
folder structure, so the page will appear automatically.

---

## 🚀 Vision

Build a strong frontend culture where knowledge is shared, quality is consistent, and innovation is encouraged.

---

## 📬 Questions or ideas?

Feel free to open an issue or start a discussion.
