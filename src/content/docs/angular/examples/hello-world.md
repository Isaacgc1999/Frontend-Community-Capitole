---
title: Hello World
description: Minimal example of a standalone component in Angular.
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
