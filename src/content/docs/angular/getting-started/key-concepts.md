---
title: Key Concepts
description: Essential Angular concepts you need to understand to build applications effectively.
sidebar.order: 4
---

## Components

Components are the building blocks of Angular applications. Each component encapsulates:

- **Template** — The HTML structure
- **Class** — The logic written in TypeScript
- **Styles** — CSS/SCSS for the component
- **Metadata** — The `@Component` decorator

```ts
@Component({
  selector: 'app-greeting',
  template: `<h1>Hello, {{ name }}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class GreetingComponent {
  name = 'Angular';
}
```

### Standalone Components (Angular 14+)

Modern Angular recommends standalone components, which don't require NgModules:

```ts
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  // No NgModule needed!
}
```

## Services and Dependency Injection

Services are reusable classes that provide functionality across your application.

### Creating a Service

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  getData(): string {
    return 'Hello from service!';
  }
}
```

### Using a Service in a Component

```ts
@Component({
  selector: 'app-display',
  standalone: true,
  template: `<p>{{ message }}</p>`
})
export class DisplayComponent {
  message: string;

  constructor(private dataService: DataService) {
    this.message = dataService.getData();
  }
}
```

**Key Points:**

- `@Injectable()` decorator makes a class injectable
- `providedIn: 'root'` provides the service globally
- The constructor parameter is automatically injected
- Services promote code reuse and testability

## Dependency Injection (DI)

Angular's DI container automatically provides dependencies to components and services.

### Injection Methods

#### 1. Constructor Injection (Recommended)

```ts
constructor(private http: HttpClient, private route: ActivatedRoute) {}
```

#### 2. Inject Function (Modern)

```ts
export class MyComponent {
  private http = inject(HttpClient);
}
```

## Directives

Directives modify the behavior or appearance of DOM elements.

### Structural Directives (modify DOM)

```html
<!-- ngIf: Conditional rendering -->
<div *ngIf="isVisible">Visible!</div>

<!-- ngFor: Loops -->
<li *ngFor="let item of items">{{ item.name }}</li>

<!-- ngSwitch: Multiple conditions -->
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">Red selected</div>
  <div *ngSwitchCase="'blue'">Blue selected</div>
  <div *ngSwitchDefault>Other color</div>
</div>
```

### Attribute Directives (modify behavior)

```html
<!-- ngClass: Dynamic CSS classes -->
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
  Content
</div>

<!-- ngStyle: Dynamic inline styles -->
<div [ngStyle]="{ 'color': textColor, 'font-size.px': fontSize }">
  Styled text
</div>

<!-- Built-in directives -->
<input [(ngModel)]="name" />
<input [disabled]="isDisabled" />
```

### Custom Directives

```ts
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

Usage:
```html
<p appHighlight>This text is highlighted</p>
```

## Data Binding

Angular provides multiple ways to bind data between component and template.

### 1. Interpolation

```html
<p>{{ message }}</p>
<p>{{ user.name.toUpperCase() }}</p>
<p>{{ 5 + 5 }}</p>
```

### 2. Property Binding

```html
<img [src]="imageUrl" />
<button [disabled]="isDisabled">Click me</button>
<div [class.active]="isActive">Active</div>
```

### 3. Event Binding

```html
<button (click)="handleClick()">Click</button>
<input (keyup.enter)="onEnter($event)" />
<div (mouseover)="onHover()">Hover me</div>
```

### 4. Two-Way Binding

```html
<input [(ngModel)]="name" />
<!-- Equivalent to: <input [value]="name" (input)="name = $event.target.value" /> -->
```

## Pipes

Pipes transform data for display in templates.

### Built-in Pipes

```html
<!-- Date pipe -->
<p>{{ today | date: 'short' }}</p>

<!-- Currency pipe -->
<p>{{ price | currency: 'USD' }}</p>

<!-- Uppercase/Lowercase -->
<p>{{ text | uppercase }}</p>
<p>{{ text | lowercase }}</p>

<!-- Decimal pipe -->
<p>{{ value | number: '1.2-2' }}</p>

<!-- Percent pipe -->
<p>{{ score | percent }}</p>

<!-- Json pipe (debugging) -->
<pre>{{ data | json }}</pre>
```

### Custom Pipes

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

Usage:
```html
<p>{{ 'hello' | reverse }}</p>  <!-- Output: olleh -->
```

## Forms

Angular provides two approaches to forms.

### Reactive Forms

```ts
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="name" />
      <input formControlName="email" />
      <button type="submit">Submit</button>
    </form>
  `
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

### Template-Driven Forms

```html
<form (ngSubmit)="onSubmit(form)" #form="ngForm">
  <input name="name" ngModel required />
  <input name="email" ngModel required email />
  <button type="submit" [disabled]="!form.valid">Submit</button>
</form>
```

## Routing

Route between different views in your application.

```ts
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent }
];
```

### Navigation

```ts
constructor(private router: Router) {}

navigate() {
  this.router.navigate(['/user', 123]);
}
```

```html
<a routerLink="/home">Home</a>
<a [routerLink]="['/user', userId]">User Profile</a>
```

## Lifecycle Hooks

Components have a lifecycle Angular manages.

### Common Lifecycle Hooks

```ts
export class MyComponent implements OnInit, OnDestroy {
  // Called after component initialization
  ngOnInit() {
    // Fetch data, initialize properties
  }

  // Called when component is destroyed
  ngOnDestroy() {
    // Clean up resources
  }

  // Called when input property changes
  ngOnChanges(changes: SimpleChanges) {
    // React to input changes
  }

  // Called after view initialization
  ngAfterViewInit() {
    // Access DOM elements
  }
}
```

## Change Detection

Angular tracks when component data changes and updates the view.

### OnPush Strategy (Performance)

```ts
@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
  // Only checks when inputs change or events occur
}
```

## HTTP Communication

Communicate with backend APIs.

```ts
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }

  createUser(user: User) {
    return this.http.post<User>('/api/users', user);
  }

  updateUser(id: number, user: User) {
    return this.http.put<User>(`/api/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`/api/users/${id}`);
  }
}
```

### Using in Components

```ts
export class UserListComponent {
  users$ = this.api.getUsers();

  constructor(private api: ApiService) {}

  // In template: {{ users$ | async }}
}
```

## Summary Table

| Concept | Purpose | Example |
|---|---|---|
| Components | Build UI blocks | `@Component()` class |
| Services | Reusable logic | Fetch data, calculations |
| Directives | Modify DOM/behavior | `*ngIf`, `[ngClass]` |
| Data Binding | Connect template & logic | `{{ }}`, `()`, `[]` |
| Pipes | Transform data | `{{ date \| date }}` |
| Forms | User input | Reactive or template-driven |
| Routing | Navigation | Routes, RouterLink |
| Lifecycle | Component states | OnInit, OnDestroy |
| HTTP | API communication | HttpClient |

---

## References

- [Angular Architecture Guide](https://angular.dev/guide/architecture)
- [Components Deep Dive](https://angular.dev/guide/components)
- [Directives Guide](https://angular.dev/guide/directives)
- [Services Guide](https://angular.dev/guide/services)
