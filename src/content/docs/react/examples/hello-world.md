---
title: Hello World
description: Ejemplo mínimo de un componente funcional en React.
---

```tsx
type HelloProps = { name: string };

export function Hello({ name }: HelloProps) {
  return <h1>Hello, {name}!</h1>;
}
```
