---
title: Hello World
description: Ejemplo mínimo de un componente standalone en Angular.
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<h1>Hello, {{ name }}!</h1>`,
})
export class HelloComponent {
  name = 'Frontend Community';
}
```
