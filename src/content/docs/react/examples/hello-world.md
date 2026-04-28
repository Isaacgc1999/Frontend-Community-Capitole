---
title: Hello World
description: Minimal example of a functional component in React.
---

```tsx
type HelloProps = { name: string };

export function Hello({ name }: HelloProps) {
  return <h1>Hello, {name}!</h1>;
}
```
