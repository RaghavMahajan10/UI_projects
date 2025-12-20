# 🚀 Angular Cheat Sheet - Quick Reference

> **Purpose:** Fast lookups while coding • All 74 topics condensed • Ready-to-copy examples

**📌 How to Use:** Ctrl+F to search topics • Copy-paste code snippets • Quick syntax reminders

---

## 📋 TABLE OF CONTENTS

<details>
<summary><b>SECTION 1: DATA BINDING FUNDAMENTALS (6)</b></summary>

1. [Interpolation](#1-interpolation)
2. [Property Binding](#2-property-binding)
3. [Event Binding](#3-event-binding)
4. [Keyboard Events](#4-keyboard-events)
5. [Event Object ($event)](#5-event-object-event)
6. [Two-Way Binding](#6-two-way-binding)
</details>

<details>
<summary><b>SECTION 2: DIRECTIVES (11)</b></summary>

7. [Directives Overview](#7-directives-overview)
8. [*ngIf](#8-ngif)
9. [@if (Angular 17+)](#9-if-angular-17)
10. [*ngFor](#10-ngfor)
11. [@for (Angular 17+)](#11-for-angular-17)
12. [*ngSwitch](#12-ngswitch)
13. [@switch (Angular 17+)](#13-switch-angular-17)
14. [ngClass](#14-ngclass)
15. [ngStyle](#15-ngstyle)
16. [ng-container](#16-ng-container)
17. [ng-template](#17-ng-template)
</details>

<details>
<summary><b>SECTION 3: COMPONENT LIFECYCLE (7)</b></summary>

18. [Lifecycle Hooks](#18-lifecycle-hooks)
19. [Constructor vs ngOnInit](#19-constructor-vs-ngoninit)
20. [ngOnChanges](#20-ngonchanges)
21. [ngDoCheck](#21-ngdocheck)
22. [ngAfterViewInit](#22-ngafterviewinit)
23. [ngAfterContentInit](#23-ngaftercontentinit)
24. [ngOnDestroy](#24-ngondestroy)
</details>

<details>
<summary><b>SECTION 4: COMPONENT COMMUNICATION (8)</b></summary>

25. [Decorators](#25-decorators)
26. [@Input()](#26-input)
27. [@Output()](#27-output)
28. [@ViewChild](#28-viewchild)
29. [@ViewChildren](#29-viewchildren)
30. [@ContentChild](#30-contentchild)
31. [Template Reference](#31-template-reference)
32. [Service Communication](#32-service-communication)
</details>

<details>
<summary><b>SECTION 5: SERVICES & DI (4)</b></summary>

33. [Services](#33-services)
34. [Dependency Injection](#34-dependency-injection)
35. [Provider Scope](#35-provider-scope)
36. [Service Patterns](#36-service-patterns)
</details>

<details>
<summary><b>SECTION 6: ROUTING (7)</b></summary>

37. [Router Basics](#37-router-basics)
38. [Route Parameters](#38-route-parameters)
39. [Query Parameters](#39-query-parameters)
40. [Child Routes](#40-child-routes)
41. [Route Guards](#41-route-guards)
42. [Lazy Loading](#42-lazy-loading)
43. [Preloading](#43-preloading)
</details>

<details>
<summary><b>SECTION 7: FORMS (5)</b></summary>

44. [Template-Driven Forms](#44-template-driven-forms)
45. [Reactive Forms](#45-reactive-forms)
46. [Form Validation](#46-form-validation)
47. [Custom Validators](#47-custom-validators)
48. [Dynamic Forms](#48-dynamic-forms)
</details>

<details>
<summary><b>SECTION 8: HTTP & RXJS (6)</b></summary>

49. [HttpClient](#49-httpclient)
50. [HTTP Methods](#50-http-methods)
51. [Observables](#51-observables)
52. [RxJS Operators](#52-rxjs-operators)
53. [Subjects](#53-subjects)
54. [Error Handling](#54-error-handling)
</details>

<details>
<summary><b>SECTION 9: PIPES (3)</b></summary>

55. [Built-in Pipes](#55-built-in-pipes)
56. [Custom Pipes](#56-custom-pipes)
57. [Pure vs Impure](#57-pure-vs-impure)
</details>

<details>
<summary><b>SECTION 10: ADVANCED (5)</b></summary>

58. [Change Detection](#58-change-detection)
59. [Signals](#59-signals)
60. [Standalone Components](#60-standalone-components)
61. [Content Projection](#61-content-projection)
62. [Dynamic Components](#62-dynamic-components)
</details>

<details>
<summary><b>SECTION 11: BEST PRACTICES (4)</b></summary>

63. [Performance](#63-performance)
64. [Security](#64-security)
65. [Testing](#65-testing)
66. [Common Mistakes](#66-common-mistakes)
</details>

<details>
<summary><b>BONUS: CRITICAL TOPICS (8)</b></summary>

67. [NgModule vs Standalone](#67-ngmodule-vs-standalone)
68. [HTTP Interceptors](#68-http-interceptors)
69. [ViewEncapsulation](#69-viewencapsulation)
70. [@HostListener](#70-hostlistener)
71. [Renderer2](#71-renderer2)
72. [APP_INITIALIZER](#72-app_initializer)
73. [toSignal()](#73-tosignal)
74. [Advanced Signals](#74-advanced-signals)
</details>

---

## SECTION 1: DATA BINDING FUNDAMENTALS

### 1. Interpolation

**What:** Display component data in template (one-way: Component → View)

**Syntax:**
```typescript
// Component
name = 'John';
age = 25;
getGreeting() { return 'Hello'; }
```

```html
<!-- Template -->
{{ name }}                    <!-- John -->
{{ age + 5 }}                 <!-- 30 -->
{{ name.toUpperCase() }}      <!-- JOHN -->
{{ getGreeting() }}           <!-- Hello -->
{{ isActive ? 'Yes' : 'No' }} <!-- Ternary -->
```

**Key Points:**
- Always converts to string
- Use for text display only
- For properties, use `[property]` instead

---

### 2. Property Binding

**What:** Set element properties/attributes (one-way: Component → View)

**Syntax:**
```typescript
// Component
imageUrl = 'assets/logo.png';
isDisabled = true;
userId = 123;
```

```html
<!-- Property Binding -->
<img [src]="imageUrl">
<button [disabled]="isDisabled">Click</button>
<input [value]="name">

<!-- Attribute Binding (when no DOM property exists) -->
<td [attr.colspan]="2">
<button [attr.aria-label]="label">

<!-- Class Binding -->
<div [class.active]="isActive">
<div [class]="'btn btn-primary'">

<!-- Style Binding -->
<div [style.color]="textColor">
<div [style.width.px]="widthValue">
```

**Key Points:**
- Preserves data types (boolean, number, object)
- Use `[attr.name]` for HTML attributes without DOM properties
- For text display, use `{{ }}` instead

**Quick Comparison:**
| Feature | Interpolation | Property Binding |
|---------|--------------|------------------|
| Syntax | `{{ value }}` | `[property]="value"` |
| Type | Always string | Original type |
| Use for | Text display | Properties/Attributes |

---

### 3. Event Binding

**What:** Listen to user events (one-way: View → Component)

**Syntax:**
```typescript
// Component
count = 0;
increment() { this.count++; }
showAlert(msg: string) { alert(msg); }
```

```html
<!-- Mouse Events -->
<button (click)="increment()">+1</button>
<button (dblclick)="reset()">Reset</button>
<div (mouseenter)="onEnter()" (mouseleave)="onLeave()">

<!-- With Parameters -->
<button (click)="showAlert('Hello!')">Click</button>
<button (click)="delete(123)">Delete</button>

<!-- Multiple Statements -->
<button (click)="count++; isActive = true">Update</button>
```

**Common Events:**
- `(click)` - Single click
- `(dblclick)` - Double click
- `(mouseenter)` `(mouseleave)` - Hover
- `(input)` - Input changes
- `(change)` - Value changed
- `(submit)` - Form submit

---

### 4. Keyboard Events

**What:** Handle keyboard interactions

**Syntax:**
```typescript
// Component
searchTerm = '';
onSearch(event: any) {
  this.searchTerm = event.target.value;
}
sendMessage() { /* ... */ }
```

```html
<!-- Keyboard Events -->
<input (keyup)="onSearch($event)">
<input (keydown)="onKeyDown($event)">

<!-- Specific Keys -->
<input (keydown.enter)="sendMessage()">
<input (keydown.escape)="closeModal()">
<input (keydown.space)="pause()">

<!-- Modifiers -->
<input (keydown.control.s)="save($event)">
<input (keydown.shift.delete)="permanentDelete()">

<!-- Focus Events -->
<input (focus)="onFocus()" (blur)="onBlur()">
```

**Common Events:**
| Event | When Triggered |
|-------|----------------|
| `(keydown)` | Key pressed down |
| `(keyup)` | Key released |
| `(keydown.enter)` | Enter key only |
| `(keydown.escape)` | Escape key only |
| `(focus)` | Element focused |
| `(blur)` | Element unfocused |

---

### 5. Event Object ($event)

**What:** Access detailed event information

**Syntax:**
```typescript
// Component
onInput(event: any) {
  console.log(event.target.value);
}

onSubmit(event: Event) {
  event.preventDefault(); // Prevent default
}

trackMouse(event: MouseEvent) {
  console.log(event.clientX, event.clientY);
}
```

```html
<!-- Pass $event -->
<input (input)="onInput($event)">
<form (submit)="onSubmit($event)">
<div (mousemove)="trackMouse($event)">

<!-- Checkbox -->
<input type="checkbox" (change)="onCheck($event)">
<!-- Access: event.target.checked -->
```

**Useful Properties:**
| Property | Description |
|----------|-------------|
| `event.target.value` | Input value |
| `event.target.checked` | Checkbox state |
| `event.key` | Key pressed |
| `event.preventDefault()` | Stop default action |
| `event.stopPropagation()` | Stop bubbling |
| `event.clientX/Y` | Mouse position |

---

### 6. Two-Way Binding

**What:** Sync data both ways (Component ↔ View)

**Setup:**
```typescript
// Import FormsModule
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule], // Required!
  // ...
})
```

**Syntax:**
```typescript
// Component
username = '';
email = '';
isChecked = false;
selectedCity = 'Delhi';
```

```html
<!-- Input -->
<input [(ngModel)]="username" placeholder="Name">
<p>Hello, {{ username }}!</p>

<!-- Textarea -->
<textarea [(ngModel)]="email" rows="3"></textarea>

<!-- Checkbox -->
<input type="checkbox" [(ngModel)]="isChecked">

<!-- Select Dropdown -->
<select [(ngModel)]="selectedCity">
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
</select>

<!-- Radio -->
<input type="radio" name="plan" value="free" [(ngModel)]="selectedPlan">
<input type="radio" name="plan" value="pro" [(ngModel)]="selectedPlan">
```

**Equivalent Manual Binding:**
```html
<!-- [(ngModel)]="name" is shorthand for: -->
<input [value]="name" (input)="name = $event.target.value">
```

**Remember:** 🍌 Banana in a Box `[( )]`
- `[ ]` = Property binding (Component → View)
- `( )` = Event binding (View → Component)
- `[( )]` = Both combined!

---

## 📊 QUICK COMPARISON: Data Flow

| Type | Syntax | Direction | Use Case |
|------|--------|-----------|----------|
| **Interpolation** | `{{ }}` | Component → View | Display text |
| **Property** | `[property]` | Component → View | Set properties |
| **Event** | `(event)` | View → Component | Handle events |
| **Two-Way** | `[(ngModel)]` | Component ↔ View | Forms/Inputs |

---

## SECTION 2: DIRECTIVES

### 7. Directives Overview

**What:** Instructions to DOM - modify element behavior/appearance

**Types:**
```typescript
// 1. Component Directives (with template)
@Component({ selector: 'app-user' })

// 2. Structural Directives (change DOM structure)
*ngIf, *ngFor, *ngSwitch

// 3. Attribute Directives (change appearance/behavior)
ngClass, ngStyle, ngModel
```

**Custom Attribute Directive:**
```typescript
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}

// Usage: <p appHighlight>Highlighted text</p>
```

---

### 8. *ngIf

**What:** Conditionally show/hide elements (removes from DOM)

**Syntax:**
```html
<!-- Basic -->
<div *ngIf="isLoggedIn">Welcome back!</div>

<!-- With else -->
<div *ngIf="isLoggedIn; else loginBlock">
  Dashboard
</div>
<ng-template #loginBlock>
  Please login
</ng-template>

<!-- With then/else -->
<div *ngIf="isLoading; then loading else content"></div>
<ng-template #loading>Loading...</ng-template>
<ng-template #content>Data loaded</ng-template>

<!-- Store value (as syntax) -->
<div *ngIf="user$ | async as user">
  {{ user.name }}
</div>
```

**Key Points:**
- Removes from DOM (not just hidden)
- Use for heavy components (better performance)
- Evaluates truthy/falsy values

---

### 9. @if (Angular 17+)

**What:** New control flow syntax (no * needed)

**Syntax:**
```html
<!-- Basic -->
@if (isLoggedIn) {
  <p>Welcome!</p>
}

<!-- With @else -->
@if (isLoggedIn) {
  <p>Dashboard</p>
} @else {
  <p>Please login</p>
}

<!-- With @else if -->
@if (score >= 90) {
  <p>Grade: A</p>
} @else if (score >= 75) {
  <p>Grade: B</p>
} @else {
  <p>Grade: C</p>
}

<!-- Store value -->
@if (user$ | async; as user) {
  <p>{{ user.name }}</p>
}
```

**Comparison:**
| Feature | *ngIf | @if |
|---------|-------|-----|
| Syntax | `*ngIf="condition"` | `@if (condition) { }` |
| Else | `<ng-template #else>` | `@else { }` |
| Readability | Good | Better |
| Performance | Same | Same |

---

### 10. *ngFor

**What:** Loop through arrays/objects

**Syntax:**
```html
<!-- Basic -->
<div *ngFor="let item of items">
  {{ item.name }}
</div>

<!-- With index -->
<div *ngFor="let item of items; let i = index">
  {{ i + 1 }}. {{ item.name }}
</div>

<!-- Special variables -->
<div *ngFor="let item of items; 
             let i = index;
             let first = first;
             let last = last;
             let even = even;
             let odd = odd">
  <p [class.highlight]="first">{{ item }}</p>
</div>

<!-- trackBy (performance) -->
<div *ngFor="let item of items; trackBy: trackByFn">
  {{ item.name }}
</div>
```

```typescript
// Component
trackByFn(index: number, item: any) {
  return item.id; // Unique identifier
}
```

**Special Variables:**
| Variable | Type | Description |
|----------|------|-------------|
| `index` | number | Current index (0-based) |
| `first` | boolean | First item? |
| `last` | boolean | Last item? |
| `even` | boolean | Even index? |
| `odd` | boolean | Odd index? |
| `count` | number | Total items |

---

### 11. @for (Angular 17+)

**What:** New loop syntax with built-in tracking

**Syntax:**
```html
<!-- Basic (track required!) -->
@for (item of items; track item.id) {
  <p>{{ item.name }}</p>
}

<!-- With index -->
@for (item of items; track item.id; let i = $index) {
  <p>{{ i + 1 }}. {{ item.name }}</p>
}

<!-- With @empty (no items) -->
@for (item of items; track item.id) {
  <p>{{ item.name }}</p>
} @empty {
  <p>No items found</p>
}

<!-- All special variables -->
@for (item of items; track item.id; 
      let i = $index;
      let first = $first;
      let last = $last;
      let even = $even;
      let odd = $odd;
      let count = $count) {
  <p>{{ i }}/{{ count }}: {{ item.name }}</p>
}
```

**Comparison:**
| Feature | *ngFor | @for |
|---------|--------|------|
| Syntax | `*ngFor="let item of items"` | `@for (item of items; track item.id) { }` |
| trackBy | Optional | Required |
| Empty state | Need *ngIf | `@empty { }` |
| Variables | `let i = index` | `let i = $index` |

---

### 12. *ngSwitch

**What:** Switch between multiple views based on value

**Syntax:**
```html
<div [ngSwitch]="userRole">
  <p *ngSwitchCase="'admin'">Admin Dashboard</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchCase="'guest'">Guest View</p>
  <p *ngSwitchDefault>Unknown Role</p>
</div>
```

```typescript
// Component
userRole: 'admin' | 'user' | 'guest' = 'user';
```

**Key Points:**
- Use `[ngSwitch]` on parent
- Use `*ngSwitchCase` on children
- Use `*ngSwitchDefault` for fallback

---

### 13. @switch (Angular 17+)

**What:** New switch syntax (cleaner)

**Syntax:**
```html
@switch (userRole) {
  @case ('admin') {
    <p>Admin Dashboard</p>
  }
  @case ('user') {
    <p>User Dashboard</p>
  }
  @case ('guest') {
    <p>Guest View</p>
  }
  @default {
    <p>Unknown Role</p>
  }
}
```

**Comparison:**
| Feature | *ngSwitch | @switch |
|---------|-----------|---------|
| Syntax | `[ngSwitch]` + `*ngSwitchCase` | `@switch { @case }` |
| Default | `*ngSwitchDefault` | `@default { }` |
| Readability | Verbose | Clean |

---

### 14. ngClass

**What:** Conditionally add/remove CSS classes

**Syntax:**
```html
<!-- String -->
<div [ngClass]="'active'">Text</div>

<!-- Array -->
<div [ngClass]="['btn', 'btn-primary']">Button</div>

<!-- Object (most common) -->
<div [ngClass]="{
  'active': isActive,
  'disabled': !isEnabled,
  'error': hasError
}">Content</div>

<!-- From component property -->
<div [ngClass]="classObject">Content</div>

<!-- Method call -->
<div [ngClass]="getClasses()">Content</div>

<!-- Mixed with class binding -->
<div class="base-class" [ngClass]="{'extra': condition}">
```

```typescript
// Component
classObject = {
  'active': true,
  'disabled': false,
  'highlight': this.isSpecial
};

getClasses() {
  return {
    'success': this.score > 80,
    'warning': this.score > 50 && this.score <= 80,
    'danger': this.score <= 50
  };
}
```

**Single Class Binding:**
```html
<!-- Prefer for single class -->
<div [class.active]="isActive">Text</div>
```

---

### 15. ngStyle

**What:** Conditionally apply inline styles

**Syntax:**
```html
<!-- Object -->
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': bgColor
}">Styled</div>

<!-- From component property -->
<div [ngStyle]="styleObject">Content</div>

<!-- Method call -->
<div [ngStyle]="getStyles()">Content</div>

<!-- Conditional styles -->
<div [ngStyle]="{
  'color': isError ? 'red' : 'green',
  'font-weight': isPriority ? 'bold' : 'normal'
}">Text</div>
```

```typescript
// Component
styleObject = {
  'color': 'blue',
  'font-size': '16px',
  'padding': '10px'
};

getStyles() {
  return {
    'width': this.width + 'px',
    'height': this.height + 'px',
    'border': this.hasBorder ? '1px solid black' : 'none'
  };
}
```

**Single Style Binding:**
```html
<!-- Prefer for single style -->
<div [style.color]="textColor">Text</div>
<div [style.width.px]="widthValue">Box</div>
```

---

### 16. ng-container

**What:** Logical container (no DOM element created)

**Syntax:**
```html
<!-- Avoid wrapper divs -->
<ng-container *ngIf="isLoggedIn">
  <p>Welcome</p>
  <p>Dashboard</p>
</ng-container>
<!-- No extra <div> wrapper! -->

<!-- Multiple directives (can't use two * on same element) -->
<ng-container *ngIf="showList">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>

<!-- With @if (Angular 17+) -->
@if (isLoggedIn) {
  <p>Welcome</p>
  <p>Dashboard</p>
}
<!-- ng-container not needed with @ syntax -->
```

**Use Cases:**
- Avoid extra wrapper elements
- Apply structural directive without adding DOM node
- Group multiple elements under one condition

---

### 17. ng-template

**What:** Template definition (not rendered by default)

**Syntax:**
```html
<!-- Define template -->
<ng-template #myTemplate>
  <p>Template content</p>
</ng-template>

<!-- Use with *ngIf else -->
<div *ngIf="show; else myTemplate">
  Show this
</div>

<!-- Use with ngTemplateOutlet -->
<ng-container *ngTemplateOutlet="myTemplate"></ng-container>

<!-- With context -->
<ng-template #userTemplate let-user="user" let-index="index">
  <p>{{ index }}. {{ user.name }}</p>
</ng-template>

<ng-container *ngTemplateOutlet="userTemplate; 
  context: { user: currentUser, index: 0 }">
</ng-container>
```

```typescript
// Access in component
@ViewChild('myTemplate') template!: TemplateRef<any>;
```

**Use Cases:**
- Reusable template fragments
- Conditional rendering (else blocks)
- Dynamic template rendering
- Custom structural directives

---

## 📊 QUICK COMPARISON: Structural Directives

| Old Syntax (*) | New Syntax (@) | When to Use |
|----------------|----------------|-------------|
| `*ngIf="condition"` | `@if (condition) { }` | Show/hide based on condition |
| `*ngIf; else` | `@if { } @else { }` | If-else logic |
| `*ngFor="let x of items"` | `@for (x of items; track x.id) { }` | Loop through arrays |
| `[ngSwitch]` + `*ngSwitchCase` | `@switch { @case }` | Multiple conditions |

**Migration:** Angular 17+ recommends `@` syntax (no performance difference)

---

---

**✅ Section 2 Complete! (17/74 topics)**

Ready for **Section 3: Component Lifecycle** (7 topics)?

---

## SECTION 3: COMPONENT LIFECYCLE

### 18. Lifecycle Hooks

**What:** Methods called at specific points in component lifecycle

**Complete Order:**
```typescript
export class MyComponent implements OnInit, OnDestroy {
  constructor() { }              // 1. Constructor (DI setup)
  ngOnChanges() { }              // 2. When @Input() changes
  ngOnInit() { }                 // 3. After first ngOnChanges
  ngDoCheck() { }                // 4. Every change detection
  ngAfterContentInit() { }       // 5. After content projected
  ngAfterContentChecked() { }    // 6. After content checked
  ngAfterViewInit() { }          // 7. After view initialized
  ngAfterViewChecked() { }       // 8. After view checked
  ngOnDestroy() { }              // 9. Before component destroyed
}
```

**Quick Reference:**
| Hook | When Called | Common Use |
|------|-------------|------------|
| `constructor()` | Component created | DI injection |
| `ngOnChanges()` | @Input() changed | React to input changes |
| `ngOnInit()` | After first ngOnChanges | Init logic, API calls |
| `ngDoCheck()` | Every change detection | Custom change detection |
| `ngAfterViewInit()` | View initialized | Access @ViewChild |
| `ngAfterContentInit()` | Content projected | Access @ContentChild |
| `ngOnDestroy()` | Before destroyed | Cleanup, unsubscribe |

---

### 19. Constructor vs ngOnInit

**Constructor:**
```typescript
export class UserComponent {
  user: User;
  
  constructor(private userService: UserService) {
    // ✅ Dependency Injection
    console.log('Constructor called');
    
    // ❌ Don't do API calls here
    // ❌ @Input() not available yet
    // ❌ View not ready
    
    // ✅ Initialize properties
    this.user = { name: '', email: '' };
  }
}
```

**ngOnInit:**
```typescript
export class UserComponent implements OnInit {
  @Input() userId!: number;
  user: User | null = null;
  
  constructor(private userService: UserService) {
    // DI only
  }
  
  ngOnInit() {
    // ✅ API calls
    this.userService.getUser(this.userId).subscribe(
      user => this.user = user
    );
    
    // ✅ @Input() values available
    console.log('User ID:', this.userId);
    
    // ✅ Initialization logic
    this.setupData();
  }
}
```

**Key Differences:**
| Constructor | ngOnInit |
|-------------|----------|
| TypeScript feature | Angular lifecycle hook |
| Called first | Called after @Input() |
| DI setup only | Initialization logic |
| No @Input() access | @Input() available |
| No DOM access | DOM being prepared |

---

### 20. ngOnChanges

**What:** Called when @Input() properties change

**Syntax:**
```typescript
import { OnChanges, SimpleChanges } from '@angular/core';

export class ChildComponent implements OnChanges {
  @Input() userName!: string;
  @Input() age!: number;
  
  ngOnChanges(changes: SimpleChanges) {
    // Called BEFORE ngOnInit
    // Called whenever @Input() changes
    
    // Check specific property
    if (changes['userName']) {
      console.log('Previous:', changes['userName'].previousValue);
      console.log('Current:', changes['userName'].currentValue);
      console.log('First change?', changes['userName'].firstChange);
    }
    
    // React to changes
    if (changes['age'] && !changes['age'].firstChange) {
      this.updateAgeGroup();
    }
  }
}
```

**Real Example:**
```typescript
export class ProductComponent implements OnChanges {
  @Input() productId!: number;
  product: Product | null = null;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productId']) {
      // Load new product when ID changes
      this.loadProduct(changes['productId'].currentValue);
    }
  }
  
  loadProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product
    );
  }
}
```

**Key Points:**
- Only for `@Input()` properties
- Called before `ngOnInit()`
- Called on every input change
- Access previous and current values

---

### 21. ngDoCheck

**What:** Custom change detection (runs frequently!)

**Syntax:**
```typescript
import { DoCheck } from '@angular/core';

export class MyComponent implements DoCheck {
  @Input() items: any[] = [];
  previousLength = 0;
  
  ngDoCheck() {
    // ⚠️ Called on EVERY change detection
    // Be careful with performance!
    
    // Custom change detection
    if (this.items.length !== this.previousLength) {
      console.log('Array length changed!');
      this.previousLength = this.items.length;
    }
  }
}
```

**Use Cases:**
- Detect changes Angular doesn't track
- Deep object/array mutations
- Third-party library integrations

**Warning:** Runs very frequently! Avoid heavy operations.

---

### 22. ngAfterViewInit

**What:** Called after component view initialized (access @ViewChild)

**Syntax:**
```typescript
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

export class MyComponent implements AfterViewInit {
  @ViewChild('myInput') inputRef!: ElementRef;
  @ViewChild(ChildComponent) childComp!: ChildComponent;
  
  ngAfterViewInit() {
    // ✅ @ViewChild available now
    console.log(this.inputRef.nativeElement.value);
    
    // ✅ Access child component
    this.childComp.someMethod();
    
    // ✅ Focus input
    this.inputRef.nativeElement.focus();
    
    // ⚠️ Don't update @Input() here (causes ExpressionChangedAfterItHasBeenCheckedError)
    // Use setTimeout or ChangeDetectorRef if needed
  }
}
```

**Template:**
```html
<input #myInput type="text">
<app-child></app-child>
```

**Common Uses:**
- Access DOM elements
- Initialize third-party libraries (charts, maps)
- Measure element dimensions
- Set focus

---

### 23. ngAfterContentInit

**What:** Called after content projection initialized (access @ContentChild)

**Syntax:**
```typescript
import { AfterContentInit, ContentChild } from '@angular/core';

export class CardComponent implements AfterContentInit {
  @ContentChild('cardContent') content!: ElementRef;
  
  ngAfterContentInit() {
    // ✅ @ContentChild available
    console.log('Content projected:', this.content);
  }
}
```

**Template:**
```html
<!-- card.component.html -->
<div class="card">
  <ng-content></ng-content>
</div>

<!-- Usage -->
<app-card>
  <p #cardContent>This content is projected</p>
</app-card>
```

**Difference from ngAfterViewInit:**
| ngAfterViewInit | ngAfterContentInit |
|-----------------|-------------------|
| Component's own view | Projected content |
| @ViewChild | @ContentChild |
| Template elements | ng-content |

---

### 24. ngOnDestroy

**What:** Called before component is destroyed (cleanup)

**Syntax:**
```typescript
import { OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  subscription!: Subscription;
  intervalId: any;
  
  ngOnInit() {
    // Method 1: Manual unsubscribe
    this.subscription = this.dataService.data$.subscribe(
      data => console.log(data)
    );
    
    // Method 2: takeUntil (recommended)
    this.dataService.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
    
    // Timer
    this.intervalId = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }
  
  ngOnDestroy() {
    // ✅ Unsubscribe from observables
    this.subscription?.unsubscribe();
    
    // ✅ Complete Subject
    this.destroy$.next();
    this.destroy$.complete();
    
    // ✅ Clear timers
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    // ✅ Remove event listeners
    // ✅ Cancel pending HTTP requests
    // ✅ Clean up third-party libraries
    
    console.log('Component destroyed');
  }
}
```

**Common Cleanup Tasks:**
```typescript
ngOnDestroy() {
  // Subscriptions
  this.subscription?.unsubscribe();
  this.destroy$.next();
  this.destroy$.complete();
  
  // Timers
  clearInterval(this.intervalId);
  clearTimeout(this.timeoutId);
  
  // Event listeners
  document.removeEventListener('scroll', this.scrollHandler);
  
  // WebSockets
  this.socket?.close();
  
  // Third-party cleanup
  this.chart?.destroy();
}
```

**Why Important:**
- Prevent memory leaks
- Avoid zombie subscriptions
- Clean up side effects
- Stop timers/intervals

---

## 📊 LIFECYCLE HOOKS SUMMARY

**Execution Order:**
```
1. constructor()          → DI setup
2. ngOnChanges()         → @Input() changed
3. ngOnInit()            → Initialize (once)
4. ngDoCheck()           → Custom change detection
5. ngAfterContentInit()  → Content projected (once)
6. ngAfterContentChecked() → After content checked
7. ngAfterViewInit()     → View ready (once)
8. ngAfterViewChecked()  → After view checked
9. ngOnDestroy()         → Cleanup before destroy
```

**Most Commonly Used (90% of cases):**
1. `ngOnInit()` - API calls, initialization
2. `ngOnDestroy()` - Cleanup, unsubscribe
3. `ngOnChanges()` - React to @Input() changes
4. `ngAfterViewInit()` - Access @ViewChild

**Rarely Used:**
- `ngDoCheck()` - Performance concerns
- `ngAfterContentChecked()` - Usually not needed
- `ngAfterViewChecked()` - Usually not needed

---

**✅ Section 3 Complete! (24/74 topics)**

Ready for **Section 4: Component Communication** (8 topics)?

---

## SECTION 4: COMPONENT COMMUNICATION

### 25. Decorators

**What:** Special syntax to add metadata to classes/properties

**Common Angular Decorators:**
```typescript
// Component/Directive/Pipe
@Component({ selector: 'app-user' })
@Directive({ selector: '[appHighlight]' })
@Pipe({ name: 'customPipe' })

// Dependency Injection
@Injectable({ providedIn: 'root' })

// Component Communication
@Input()    // Parent → Child
@Output()   // Child → Parent

// View/Content Queries
@ViewChild()
@ViewChildren()
@ContentChild()
@ContentChildren()

// Host Element
@HostListener('click')
@HostBinding('class.active')
```

**Quick Reference:**
| Decorator | Purpose | Example |
|-----------|---------|---------|
| `@Input()` | Receive data from parent | `@Input() userName: string` |
| `@Output()` | Send data to parent | `@Output() notify = new EventEmitter()` |
| `@ViewChild()` | Access child component/element | `@ViewChild('myInput') input` |
| `@Injectable()` | Make class injectable | `@Injectable({ providedIn: 'root' })` |

---

### 26. @Input()

**What:** Pass data from parent to child component

**Syntax:**
```typescript
// Child Component
export class ChildComponent {
  @Input() userName!: string;
  @Input() age!: number;
  @Input() user!: User;
  
  // With alias
  @Input('displayName') name!: string;
  
  // With default value
  @Input() theme: string = 'light';
  
  // Required (Angular 16+)
  @Input({ required: true }) userId!: number;
}
```

```html
<!-- Parent Template -->
<app-child 
  [userName]="parentName"
  [age]="parentAge"
  [user]="currentUser"
  displayName="John Doe"
  theme="dark">
</app-child>
```

**Parent Component:**
```typescript
export class ParentComponent {
  parentName = 'Alice';
  parentAge = 25;
  currentUser = { id: 1, name: 'Alice', email: 'alice@example.com' };
}
```

**Input Transforms (Angular 16+):**
```typescript
import { booleanAttribute, numberAttribute } from '@angular/core';

export class ChildComponent {
  // Transform string to boolean
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  
  // Transform string to number
  @Input({ transform: numberAttribute }) count: number = 0;
}

// Usage: <app-child disabled count="5"></app-child>
// disabled will be true (boolean), count will be 5 (number)
```

---

### 27. @Output()

**What:** Send data/events from child to parent

**Syntax:**
```typescript
import { EventEmitter, Output } from '@angular/core';

// Child Component
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();
  @Output() userDeleted = new EventEmitter<number>();
  @Output() formSubmitted = new EventEmitter<User>();
  
  // With alias
  @Output('onSave') saveEvent = new EventEmitter<void>();
  
  sendNotification() {
    this.notify.emit('Hello from child!');
  }
  
  deleteUser(id: number) {
    this.userDeleted.emit(id);
  }
  
  submitForm(user: User) {
    this.formSubmitted.emit(user);
  }
}
```

```html
<!-- Child Template -->
<button (click)="sendNotification()">Notify Parent</button>
<button (click)="deleteUser(123)">Delete User</button>
```

```html
<!-- Parent Template -->
<app-child 
  (notify)="handleNotification($event)"
  (userDeleted)="onUserDeleted($event)"
  (formSubmitted)="onFormSubmit($event)">
</app-child>
```

```typescript
// Parent Component
export class ParentComponent {
  handleNotification(message: string) {
    console.log('Child says:', message);
    alert(message);
  }
  
  onUserDeleted(userId: number) {
    console.log('Delete user:', userId);
    this.users = this.users.filter(u => u.id !== userId);
  }
  
  onFormSubmit(user: User) {
    this.saveUser(user);
  }
}
```

**Real Example - Counter:**
```typescript
// Child
export class CounterComponent {
  count = 0;
  @Output() countChanged = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
}

// Parent
<app-counter (countChanged)="totalCount = $event"></app-counter>
<p>Total: {{ totalCount }}</p>
```

---

### 28. @ViewChild

**What:** Access child component/element from parent

**Syntax:**
```typescript
import { ViewChild, ElementRef } from '@angular/core';

export class ParentComponent {
  // Access DOM element
  @ViewChild('myInput') inputRef!: ElementRef;
  
  // Access child component
  @ViewChild(ChildComponent) childComp!: ChildComponent;
  
  // With static option
  @ViewChild('static', { static: true }) staticRef!: ElementRef;
  
  ngAfterViewInit() {
    // ✅ Available here
    console.log(this.inputRef.nativeElement.value);
    this.childComp.someMethod();
  }
  
  focusInput() {
    this.inputRef.nativeElement.focus();
  }
  
  callChildMethod() {
    this.childComp.reset();
  }
}
```

```html
<!-- Parent Template -->
<input #myInput type="text">
<button (click)="focusInput()">Focus Input</button>

<app-child></app-child>
<button (click)="callChildMethod()">Reset Child</button>
```

**static Option:**
```typescript
// static: true - Available in ngOnInit (for elements not in *ngIf)
@ViewChild('header', { static: true }) header!: ElementRef;

// static: false (default) - Available in ngAfterViewInit
@ViewChild('dynamic', { static: false }) dynamic!: ElementRef;
```

---

### 29. @ViewChildren

**What:** Access multiple children (QueryList)

**Syntax:**
```typescript
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

export class ParentComponent {
  // Multiple elements
  @ViewChildren('item') items!: QueryList<ElementRef>;
  
  // Multiple components
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;
  
  ngAfterViewInit() {
    // Loop through items
    this.items.forEach(item => {
      console.log(item.nativeElement.textContent);
    });
    
    // Get count
    console.log('Total items:', this.items.length);
    
    // Convert to array
    const itemsArray = this.items.toArray();
    
    // Listen to changes
    this.items.changes.subscribe(items => {
      console.log('Items changed:', items.length);
    });
    
    // Access all child components
    this.children.forEach(child => {
      child.someMethod();
    });
  }
  
  highlightFirst() {
    const first = this.items.first;
    first.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

```html
<!-- Template -->
<div #item *ngFor="let product of products">
  {{ product.name }}
</div>

<app-child *ngFor="let user of users"></app-child>
```

---

### 30. @ContentChild

**What:** Access projected content

**Syntax:**
```typescript
// Parent Component (projects content)
@Component({
  template: `
    <app-card>
      <h2 #cardTitle>My Title</h2>
      <p>Card content here</p>
    </app-card>
  `
})
export class ParentComponent { }

// Card Component (receives content)
import { ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {
  @ContentChild('cardTitle') title!: ElementRef;
  
  ngAfterContentInit() {
    // ✅ Available here
    console.log('Title:', this.title.nativeElement.textContent);
  }
}
```

**Difference: @ViewChild vs @ContentChild:**
| Feature | @ViewChild | @ContentChild |
|---------|------------|---------------|
| Targets | Component's own template | Projected content |
| Available | ngAfterViewInit | ngAfterContentInit |
| Hook | AfterViewInit | AfterContentInit |
| Source | Same component | Parent component |

---

### 31. Template Reference

**What:** Reference elements/components in template with #

**Syntax:**
```html
<!-- Element reference -->
<input #myInput type="text" placeholder="Enter name">
<button (click)="myInput.focus()">Focus</button>
<p>Value: {{ myInput.value }}</p>

<!-- Component reference -->
<app-child #childComp></app-child>
<button (click)="childComp.reset()">Reset Child</button>

<!-- With *ngFor -->
<div *ngFor="let item of items; let i = index">
  <input #input type="text">
  <button (click)="input.focus()">Focus {{ i }}</button>
</div>

<!-- Pass to method -->
<input #email type="email">
<button (click)="validateEmail(email.value)">Validate</button>

<!-- ng-template reference -->
<ng-template #myTemplate>
  <p>Template content</p>
</ng-template>
<ng-container *ngTemplateOutlet="myTemplate"></ng-container>
```

**Component:**
```typescript
export class MyComponent {
  validateEmail(email: string) {
    console.log('Validating:', email);
  }
}
```

**Access in Component:**
```typescript
@ViewChild('myInput') inputRef!: ElementRef;

ngAfterViewInit() {
  console.log(this.inputRef.nativeElement.value);
}
```

---

### 32. Service Communication

**What:** Share data between unrelated components using services

**Service:**
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  // BehaviorSubject (has initial value)
  private messageSource = new BehaviorSubject<string>('Initial message');
  message$ = this.messageSource.asObservable();
  
  // Subject (no initial value)
  private eventSource = new Subject<string>();
  event$ = this.eventSource.asObservable();
  
  // Update message
  updateMessage(message: string) {
    this.messageSource.next(message);
  }
  
  // Emit event
  emitEvent(event: string) {
    this.eventSource.next(event);
  }
  
  // Simple property (less reactive)
  sharedData: any = {};
}
```

**Component A (Sender):**
```typescript
export class ComponentA {
  constructor(private dataService: DataService) {}
  
  sendMessage() {
    this.dataService.updateMessage('Hello from A!');
  }
}
```

**Component B (Receiver):**
```typescript
export class ComponentB implements OnInit, OnDestroy {
  message: string = '';
  private destroy$ = new Subject<void>();
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.message$
      .pipe(takeUntil(this.destroy$))
      .subscribe(msg => {
        this.message = msg;
        console.log('Received:', msg);
      });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**State Management Service:**
```typescript
@Injectable({ providedIn: 'root' })
export class UserStateService {
  private userState = new BehaviorSubject<User | null>(null);
  user$ = this.userState.asObservable();
  
  setUser(user: User) {
    this.userState.next(user);
  }
  
  clearUser() {
    this.userState.next(null);
  }
  
  get currentUser(): User | null {
    return this.userState.value;
  }
}
```

---

## 📊 COMPONENT COMMUNICATION SUMMARY

**Communication Patterns:**

| Pattern | Direction | Use Case | Syntax |
|---------|-----------|----------|--------|
| **@Input()** | Parent → Child | Pass data down | `<child [data]="value">` |
| **@Output()** | Child → Parent | Emit events | `<child (event)="handler()">` |
| **@ViewChild** | Parent → Child | Access child | `@ViewChild(Child) child` |
| **Service** | Any ↔ Any | Unrelated components | `service.data$` |
| **Template Ref** | Template → Template | Direct reference | `#ref` |

**When to Use:**
```typescript
// Related components (parent-child)
@Input() / @Output()        → Tight coupling, clear data flow

// Access child methods/properties
@ViewChild / @ViewChildren  → Parent controls child

// Access projected content
@ContentChild               → ng-content scenarios

// Unrelated components
Service with Observable     → Loose coupling, scalable

// Quick template access
Template reference (#)      → Simple interactions
```

---

**✅ Section 4 Complete! (32/74 topics)**

Ready for **Section 5: Services & DI** (4 topics)?

---

## SECTION 5: SERVICES & DEPENDENCY INJECTION

### 33. Services

**What:** Reusable classes for business logic, data sharing, API calls

**Creating a Service:**
```typescript
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Singleton (app-wide)
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  
  constructor(private http: HttpClient) {}
  
  // API methods
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  
  // Business logic
  calculateDiscount(price: number, percentage: number): number {
    return price * (1 - percentage / 100);
  }
}
```

**Using Service in Component:**
```typescript
export class UserListComponent implements OnInit {
  users: User[] = [];
  
  // Inject service
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    // Call service method
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }
  
  addUser(user: User) {
    this.userService.createUser(user).subscribe(
      newUser => this.users.push(newUser)
    );
  }
}
```

**When to Use Services:**
- API calls (HTTP requests)
- Business logic (calculations, validations)
- Data sharing between components
- State management
- Utility functions
- Third-party integrations

---

### 34. Dependency Injection

**What:** Design pattern where Angular provides dependencies to classes

**How DI Works:**
```typescript
// 1. Create injectable service
@Injectable({ providedIn: 'root' })
export class DataService {
  getData() { return ['data1', 'data2']; }
}

// 2. Inject in constructor
export class MyComponent {
  constructor(private dataService: DataService) {
    // Angular creates/injects DataService instance
  }
  
  loadData() {
    const data = this.dataService.getData();
  }
}
```

**Without DI (Manual - Bad):**
```typescript
// ❌ Don't do this!
export class MyComponent {
  dataService: DataService;
  
  constructor() {
    // Manual instantiation - hard to test, maintain
    this.dataService = new DataService();
  }
}
```

**Multiple Dependencies:**
```typescript
export class ProductComponent {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    // Angular injects all automatically
  }
}
```

**Inject Function (Angular 14+):**
```typescript
import { inject } from '@angular/core';

export class MyComponent {
  // New way (no constructor needed)
  private userService = inject(UserService);
  private http = inject(HttpClient);
  private router = inject(Router);
  
  loadData() {
    this.userService.getUsers().subscribe(/* ... */);
  }
}
```

**Benefits:**
- Loose coupling
- Easy testing (mock dependencies)
- Singleton management
- Automatic lifecycle

---

### 35. Provider Scope

**What:** Control where service instances are created and shared

**Three Scopes:**

**1. Root Level (Singleton - Recommended):**
```typescript
@Injectable({
  providedIn: 'root'  // One instance for entire app
})
export class GlobalService {
  sharedData = { count: 0 };
}

// All components share same instance
// Survives route navigation
// Tree-shakable (removed if not used)
```

**2. Module Level:**
```typescript
// Service
@Injectable()  // No providedIn
export class ModuleService { }

// Provide in NgModule
@NgModule({
  providers: [ModuleService]  // One instance per module
})
export class FeatureModule { }
```

**3. Component Level:**
```typescript
@Component({
  selector: 'app-user',
  providers: [ComponentService]  // New instance per component
})
export class UserComponent {
  constructor(private service: ComponentService) {
    // Each component instance gets its own service
  }
}
```

**Scope Comparison:**
| Scope | Syntax | Lifetime | Use Case |
|-------|--------|----------|----------|
| **Root** | `providedIn: 'root'` | App lifetime | Global state, API services |
| **Module** | `providers: []` in NgModule | Module lifetime | Feature-specific services |
| **Component** | `providers: []` in Component | Component lifetime | Component-specific state |

**Real Example:**
```typescript
// Root - Shared authentication
@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: User | null = null;
}

// Component - Isolated form state
@Component({
  providers: [FormService]  // Each form gets own service
})
export class FormComponent {
  constructor(private formService: FormService) {}
}
```

---

### 36. Service Patterns

**What:** Common patterns for service communication

**1. BehaviorSubject Pattern (State Management):**
```typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();
  
  // Get current value
  get currentItems(): Product[] {
    return this.cartItems.value;
  }
  
  // Add item
  addItem(product: Product) {
    const items = [...this.cartItems.value, product];
    this.cartItems.next(items);
  }
  
  // Remove item
  removeItem(productId: number) {
    const items = this.cartItems.value.filter(p => p.id !== productId);
    this.cartItems.next(items);
  }
  
  // Clear cart
  clearCart() {
    this.cartItems.next([]);
  }
}

// Component usage
export class CartComponent implements OnInit {
  items$ = this.cartService.cartItems$;
  
  constructor(private cartService: CartService) {}
}

// Template
<div *ngFor="let item of items$ | async">
  {{ item.name }}
</div>
```

**2. Subject Pattern (Event Bus):**
```typescript
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new Subject<string>();
  notification$ = this.notificationSubject.asObservable();
  
  notify(message: string) {
    this.notificationSubject.next(message);
  }
}

// Sender
this.notificationService.notify('User logged in!');

// Receiver
this.notificationService.notification$.subscribe(msg => {
  console.log('Notification:', msg);
});
```

**3. ReplaySubject Pattern (Late Subscribers):**
```typescript
@Injectable({ providedIn: 'root' })
export class ConfigService {
  // Keep last 1 value for late subscribers
  private config = new ReplaySubject<Config>(1);
  config$ = this.config.asObservable();
  
  loadConfig() {
    this.http.get<Config>('/api/config').subscribe(
      config => this.config.next(config)
    );
  }
}
```

**4. Async Data Pattern:**
```typescript
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  
  // Return observable directly
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  
  // With caching
  private cache$?: Observable<Product[]>;
  
  getProductsCached(): Observable<Product[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Product[]>('/api/products').pipe(
        shareReplay(1)  // Cache result
      );
    }
    return this.cache$;
  }
}
```

**5. Facade Pattern (Complex Logic):**
```typescript
@Injectable({ providedIn: 'root' })
export class UserFacadeService {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  
  // Combine multiple services
  loadUserData(userId: number): Observable<UserData> {
    return forkJoin({
      user: this.userService.getUser(userId),
      profile: this.profileService.getProfile(userId),
      permissions: this.authService.getPermissions(userId)
    });
  }
}
```

**Common Patterns Summary:**
| Pattern | Use Case | Subject Type |
|---------|----------|--------------|
| **BehaviorSubject** | State management | Has initial value |
| **Subject** | Event bus | No initial value |
| **ReplaySubject** | Late subscribers | Keeps N values |
| **AsyncSubject** | Single final value | Emits on complete |

---

## 📊 SERVICES & DI SUMMARY

**Service Checklist:**
```typescript
// ✅ Good Service
@Injectable({ providedIn: 'root' })
export class MyService {
  // Private subjects
  private dataSubject = new BehaviorSubject<Data[]>([]);
  
  // Public observables
  data$ = this.dataSubject.asObservable();
  
  // Inject dependencies
  constructor(private http: HttpClient) {}
  
  // Public methods
  loadData() {
    this.http.get<Data[]>('/api/data').subscribe(
      data => this.dataSubject.next(data)
    );
  }
  
  // Getter for current value
  get currentData(): Data[] {
    return this.dataSubject.value;
  }
}
```

**DI Best Practices:**
- Use `providedIn: 'root'` for most services
- Keep services focused (single responsibility)
- Use observables for async data
- Always unsubscribe in components
- Avoid circular dependencies
- Use `inject()` function for cleaner code (Angular 14+)

---

**✅ Section 5 Complete! (36/74 topics)**

Ready for **Section 6: Routing** (7 topics)?

---

## SECTION 6: ROUTING

### 37. Router Basics

**What:** Navigate between different views/components

**Setup (Standalone):**
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard (404)
];

// main.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
```

**Router Outlet:**
```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>

<router-outlet></router-outlet>  <!-- Components render here -->
```

**Navigation:**
```typescript
import { Router } from '@angular/router';

export class MyComponent {
  constructor(private router: Router) {}
  
  // Navigate to route
  goToAbout() {
    this.router.navigate(['/about']);
  }
  
  // Navigate with parameters
  goToUser(userId: number) {
    this.router.navigate(['/user', userId]);
  }
  
  // Navigate with query params
  goToProducts() {
    this.router.navigate(['/products'], {
      queryParams: { category: 'electronics', sort: 'price' }
    });
  }
}
```

**routerLink Directive:**
```html
<!-- Basic -->
<a routerLink="/about">About</a>

<!-- With parameters -->
<a [routerLink]="['/user', userId]">User Profile</a>

<!-- With query params -->
<a [routerLink]="['/products']" 
   [queryParams]="{category: 'books', page: 1}">Products</a>

<!-- Active class -->
<a routerLink="/home" routerLinkActive="active">Home</a>

<!-- Exact match -->
<a routerLink="/" 
   routerLinkActive="active" 
   [routerLinkActiveOptions]="{exact: true}">Home</a>
```

---

### 38. Route Parameters

**What:** Pass dynamic data in URL path

**Define Route:**
```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'product/:id/:slug', component: ProductComponent },
];
```

**Access Parameters:**
```typescript
import { ActivatedRoute } from '@angular/router';

export class UserDetailComponent implements OnInit {
  userId: number = 0;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Method 1: Snapshot (one-time read)
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Method 2: Observable (reactive - recommended)
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.loadUser(this.userId);
    });
  }
  
  loadUser(id: number) {
    this.userService.getUser(id).subscribe(/* ... */);
  }
}
```

**Navigate with Parameters:**
```html
<!-- Template -->
<a [routerLink]="['/user', user.id]">View User</a>
```

```typescript
// Component
goToUser(userId: number) {
  this.router.navigate(['/user', userId]);
}
```

**Multiple Parameters:**
```typescript
// Route: product/:id/:slug
this.router.navigate(['/product', 123, 'laptop-hp']);

// Access
const id = this.route.snapshot.paramMap.get('id');      // '123'
const slug = this.route.snapshot.paramMap.get('slug');  // 'laptop-hp'
```

---

### 39. Query Parameters

**What:** Pass optional data in URL query string (?key=value)

**Navigate with Query Params:**
```typescript
// Component
searchProducts() {
  this.router.navigate(['/products'], {
    queryParams: { 
      category: 'electronics', 
      minPrice: 1000,
      sort: 'price-asc'
    }
  });
  // URL: /products?category=electronics&minPrice=1000&sort=price-asc
}
```

```html
<!-- Template -->
<a [routerLink]="['/products']" 
   [queryParams]="{category: 'books', page: 2}">Books Page 2</a>
```

**Access Query Params:**
```typescript
export class ProductListComponent implements OnInit {
  category: string = '';
  minPrice: number = 0;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Snapshot (one-time)
    this.category = this.route.snapshot.queryParamMap.get('category') || '';
    
    // Observable (reactive)
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category') || 'all';
      this.minPrice = Number(params.get('minPrice')) || 0;
      this.loadProducts();
    });
  }
}
```

**Preserve/Merge Query Params:**
```typescript
// Preserve existing query params
this.router.navigate(['/products'], {
  queryParams: { page: 2 },
  queryParamsHandling: 'preserve'  // Keep existing params
});

// Merge with existing
this.router.navigate(['/products'], {
  queryParams: { sort: 'name' },
  queryParamsHandling: 'merge'  // Merge new with existing
});
```

**Difference: Route Params vs Query Params:**
| Feature | Route Params | Query Params |
|---------|--------------|--------------|
| Syntax | `/user/:id` | `/products?category=books` |
| Required | Yes | No (optional) |
| Use for | Resource identification | Filtering, sorting, pagination |
| Example | User ID, Product ID | Search terms, page number |

---

### 40. Child Routes

**What:** Nested routes for component hierarchies

**Define Child Routes:**
```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
```

**Parent Component Template:**
```html
<!-- admin.component.html -->
<div class="admin-layout">
  <aside>
    <nav>
      <a routerLink="dashboard">Dashboard</a>
      <a routerLink="users">Users</a>
      <a routerLink="settings">Settings</a>
    </nav>
  </aside>
  
  <main>
    <router-outlet></router-outlet>  <!-- Child routes render here -->
  </main>
</div>
```

**URLs:**
```
/admin              → Redirects to /admin/dashboard
/admin/dashboard    → Shows DashboardComponent inside AdminComponent
/admin/users        → Shows UsersComponent inside AdminComponent
/admin/settings     → Shows SettingsComponent inside AdminComponent
```

**Access Parent Route Data:**
```typescript
export class ChildComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Access parent params
    this.route.parent?.paramMap.subscribe(params => {
      const parentId = params.get('id');
    });
  }
}
```

---

### 41. Route Guards

**What:** Control access to routes (authentication, permissions)

**Types of Guards:**
| Guard | Purpose | Return |
|-------|---------|--------|
| `CanActivate` | Can route be activated? | boolean/UrlTree |
| `CanDeactivate` | Can user leave route? | boolean (unsaved changes) |
| `CanActivateChild` | Can child routes activate? | boolean/UrlTree |
| `CanMatch` | Can route config match? | boolean (lazy loading) |

**CanActivate Guard (Functional - Angular 15+):**
```typescript
// auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};

// Apply to route
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard]  // Protect route
  }
];
```

**CanDeactivate Guard (Unsaved Changes):**
```typescript
// unsaved-changes.guard.ts
export interface CanDeactivateComponent {
  canDeactivate: () => boolean;
}

export const unsavedChangesGuard = 
  (component: CanDeactivateComponent) => {
    return component.canDeactivate() 
      ? true 
      : confirm('You have unsaved changes. Leave anyway?');
  };

// Component
export class FormComponent implements CanDeactivateComponent {
  hasUnsavedChanges = false;
  
  canDeactivate(): boolean {
    return !this.hasUnsavedChanges;
  }
}

// Route
{
  path: 'form',
  component: FormComponent,
  canDeactivate: [unsavedChangesGuard]
}
```

**Class-based Guard (Legacy):**
```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
```

---

### 42. Lazy Loading

**What:** Load modules/routes on demand (faster initial load)

**Lazy Route Configuration:**
```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)  // Loaded on demand
  },
  {
    path: 'products',
    loadComponent: () => import('./products/product-list.component')
      .then(m => m.ProductListComponent)  // Standalone component
  }
];
```

**Admin Routes (Separate File):**
```typescript
// admin/admin.routes.ts
import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'settings', component: AdminSettingsComponent }
];
```

**Lazy Loading Standalone Component:**
```typescript
{
  path: 'about',
  loadComponent: () => import('./about/about.component')
    .then(m => m.AboutComponent)
}
```

**Benefits:**
- Smaller initial bundle
- Faster app startup
- Load features only when needed
- Better performance

**When to Use:**
- Large feature modules (admin panels)
- Rarely used features
- User-specific sections
- Heavy third-party libraries

---

### 43. Preloading

**What:** Load lazy modules in background after initial load

**Preloading Strategies:**

**1. PreloadAllModules (Default Lazy):**
```typescript
// main.ts
import { PreloadAllModules } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, 
      withPreloading(PreloadAllModules)  // Preload all lazy routes
    )
  ]
});
```

**2. No Preloading (Load Only On Demand):**
```typescript
provideRouter(routes, 
  withPreloading(NoPreloading)  // Default - no preloading
)
```

**3. Custom Preloading Strategy:**
```typescript
// custom-preload.strategy.ts
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Preload if route has data.preload = true
    if (route.data && route.data['preload']) {
      console.log('Preloading:', route.path);
      return load();
    }
    return of(null);  // Don't preload
  }
}

// Routes
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes'),
    data: { preload: true }  // Preload this
  },
  {
    path: 'rarely-used',
    loadChildren: () => import('./rarely/rarely.routes'),
    data: { preload: false }  // Don't preload
  }
];

// Apply strategy
provideRouter(routes, 
  withPreloading(CustomPreloadStrategy)
)
```

**Preloading Strategy Comparison:**
| Strategy | When Loads | Use Case |
|----------|------------|----------|
| `NoPreloading` | On demand only | Save bandwidth |
| `PreloadAllModules` | After initial load | Better UX |
| `Custom` | Selective | Fine control |

---

## 📊 ROUTING SUMMARY

**Quick Reference:**
```typescript
// Routes
export const routes: Routes = [
  { path: '', component: HomeComponent },                    // Default
  { path: 'about', component: AboutComponent },              // Static
  { path: 'user/:id', component: UserComponent },            // Params
  { path: 'products', component: ProductsComponent },        // Query params
  { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [authGuard],                                // Guard
    children: [...]                                          // Child routes
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.routes')         // Lazy loading
  },
  { path: '**', component: NotFoundComponent }               // Wildcard (404)
];
```

**Navigation Methods:**
```html
<!-- Template -->
<a routerLink="/about">About</a>
<a [routerLink]="['/user', userId]">User</a>
<a [routerLink]="['/products']" [queryParams]="{page: 1}">Products</a>
```

```typescript
// Component
this.router.navigate(['/about']);
this.router.navigate(['/user', 123]);
this.router.navigate(['/products'], { queryParams: { page: 1 } });
```

**Access Route Data:**
```typescript
// Route params
this.route.paramMap.subscribe(params => {
  const id = params.get('id');
});

// Query params
this.route.queryParamMap.subscribe(params => {
  const page = params.get('page');
});
```

---

**✅ Section 6 Complete! (43/74 topics)**

Ready for **Section 7: Forms** (5 topics)?

---

## SECTION 7: FORMS

### 44. Template-Driven Forms

**What:** Forms driven by template directives (simpler, less control)

**Setup:**
```typescript
// Import FormsModule
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],  // Required!
  // ...
})
```

**Basic Form:**
```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <!-- Text Input -->
  <input 
    type="text" 
    name="username"
    [(ngModel)]="user.username"
    required
    minlength="3"
    #username="ngModel">
  
  <!-- Validation Messages -->
  <div *ngIf="username.invalid && username.touched">
    <p *ngIf="username.errors?.['required']">Username required</p>
    <p *ngIf="username.errors?.['minlength']">Min 3 characters</p>
  </div>
  
  <!-- Email -->
  <input 
    type="email" 
    name="email"
    [(ngModel)]="user.email"
    required
    email
    #email="ngModel">
  
  <div *ngIf="email.invalid && email.touched">
    <p *ngIf="email.errors?.['email']">Invalid email</p>
  </div>
  
  <!-- Submit -->
  <button [disabled]="userForm.invalid">Submit</button>
</form>

<!-- Form State -->
<p>Valid: {{ userForm.valid }}</p>
<p>Submitted: {{ userForm.submitted }}</p>
```

```typescript
// Component
export class FormComponent {
  user = {
    username: '',
    email: ''
  };
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.user);
      console.log('Form value:', form.value);
    }
  }
}
```

**Form States:**
| State | Description |
|-------|-------------|
| `valid` | All validations pass |
| `invalid` | At least one validation fails |
| `pristine` | User hasn't changed value |
| `dirty` | User changed value |
| `touched` | User focused then blurred |
| `untouched` | User never focused |

---

### 45. Reactive Forms

**What:** Forms driven by component code (more control, testable)

**Setup:**
```typescript
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  // ...
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.min(18), Validators.max(100)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form value:', this.userForm.value);
    }
  }
  
  // Getters for easy access
  get username() {
    return this.userForm.get('username');
  }
  
  get email() {
    return this.userForm.get('email');
  }
}
```

**Template:**
```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <!-- Input with formControlName -->
  <input type="text" formControlName="username">
  
  <!-- Validation -->
  <div *ngIf="username?.invalid && username?.touched">
    <p *ngIf="username?.errors?.['required']">Username required</p>
    <p *ngIf="username?.errors?.['minlength']">
      Min {{ username?.errors?.['minlength'].requiredLength }} chars
    </p>
  </div>
  
  <input type="email" formControlName="email">
  <div *ngIf="email?.invalid && email?.touched">
    <p *ngIf="email?.errors?.['email']">Invalid email</p>
  </div>
  
  <input type="number" formControlName="age">
  <input type="password" formControlName="password">
  
  <button [disabled]="userForm.invalid">Submit</button>
</form>

<!-- Form State -->
<p>Valid: {{ userForm.valid }}</p>
<p>Value: {{ userForm.value | json }}</p>
```

**Dynamic Value Changes:**
```typescript
// Set value
this.userForm.patchValue({ username: 'John' });
this.userForm.setValue({ username: 'John', email: 'john@test.com', ... });

// Get value
const username = this.userForm.get('username')?.value;

// Listen to changes
this.userForm.get('username')?.valueChanges.subscribe(value => {
  console.log('Username changed:', value);
});

// Disable/Enable
this.userForm.get('email')?.disable();
this.userForm.get('email')?.enable();

// Reset
this.userForm.reset();
```

**Template-Driven vs Reactive:**
| Feature | Template-Driven | Reactive |
|---------|----------------|----------|
| Setup | FormsModule | ReactiveFormsModule |
| Logic | In template | In component |
| Syntax | `[(ngModel)]` | `[formGroup]` + `formControlName` |
| Validation | Directives | Validators class |
| Testing | Harder | Easier |
| Dynamic | Limited | Full control |
| Use for | Simple forms | Complex forms |

---

### 46. Form Validation

**What:** Validate user input

**Built-in Validators:**
```typescript
import { Validators } from '@angular/forms';

this.form = this.fb.group({
  username: ['', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[a-zA-Z0-9]+$/)
  ]],
  email: ['', [Validators.required, Validators.email]],
  age: ['', [Validators.min(18), Validators.max(100)]],
  website: ['', Validators.pattern(/^https?:\/\/.+/)],
  phone: ['', Validators.pattern(/^\d{10}$/)]
});
```

**Validation Messages:**
```html
<input formControlName="username">

<div *ngIf="username?.invalid && username?.touched">
  <p *ngIf="username?.errors?.['required']">
    Username is required
  </p>
  <p *ngIf="username?.errors?.['minlength']">
    Minimum {{ username?.errors?.['minlength'].requiredLength }} characters
  </p>
  <p *ngIf="username?.errors?.['maxlength']">
    Maximum {{ username?.errors?.['maxlength'].requiredLength }} characters
  </p>
  <p *ngIf="username?.errors?.['pattern']">
    Only letters and numbers allowed
  </p>
</div>
```

**CSS Classes (Auto-applied):**
```css
/* Angular adds these classes automatically */
.ng-valid { }       /* Valid */
.ng-invalid { }     /* Invalid */
.ng-pristine { }    /* Unchanged */
.ng-dirty { }       /* Changed */
.ng-touched { }     /* Focused then blurred */
.ng-untouched { }   /* Never focused */

/* Example styling */
input.ng-invalid.ng-touched {
  border-color: red;
}

input.ng-valid.ng-touched {
  border-color: green;
}
```

**Conditional Validation:**
```typescript
ngOnInit() {
  this.form = this.fb.group({
    accountType: ['personal'],
    companyName: ['']
  });
  
  // Add validator conditionally
  this.form.get('accountType')?.valueChanges.subscribe(type => {
    const companyControl = this.form.get('companyName');
    
    if (type === 'business') {
      companyControl?.setValidators([Validators.required]);
    } else {
      companyControl?.clearValidators();
    }
    
    companyControl?.updateValueAndValidity();
  });
}
```

---

### 47. Custom Validators

**What:** Create your own validation logic

**Sync Validator (Function):**
```typescript
// validators/custom.validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// No whitespace validator
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  };
}

// Password strength
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*]/.test(value);
    
    const valid = hasNumber && hasUpper && hasLower && hasSpecial;
    
    return valid ? null : {
      passwordStrength: {
        hasNumber,
        hasUpper,
        hasLower,
        hasSpecial
      }
    };
  };
}

// Age range
export function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value;
    if (age < min || age > max) {
      return { ageRange: { min, max, actual: age } };
    }
    return null;
  };
}

// Use in form
this.form = this.fb.group({
  username: ['', [Validators.required, noWhitespaceValidator()]],
  password: ['', [Validators.required, passwordStrengthValidator()]],
  age: ['', [ageRangeValidator(18, 65)]]
});
```

**Cross-field Validator:**
```typescript
// Password match validator
export function passwordMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}

// Apply to form group
this.form = this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, { validators: passwordMatchValidator() });

// Template
<div *ngIf="userForm.errors?.['passwordMismatch'] && 
            userForm.get('confirmPassword')?.touched">
  Passwords do not match
</div>
```

**Async Validator (API Check):**
```typescript
import { AsyncValidatorFn } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export function usernameAvailableValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }
    
    return userService.checkUsername(control.value).pipe(
      map(available => available ? null : { usernameTaken: true }),
      catchError(() => of(null))
    );
  };
}

// Use in form
this.form = this.fb.group({
  username: ['', 
    [Validators.required],
    [usernameAvailableValidator(this.userService)]  // Async validator
  ]
});

// Template (shows pending state)
<input formControlName="username">
<span *ngIf="username?.pending">Checking...</span>
<span *ngIf="username?.errors?.['usernameTaken']">Username taken</span>
```

---

### 48. Dynamic Forms

**What:** Create forms dynamically (FormArray)

**Basic FormArray:**
```typescript
import { FormArray, FormControl } from '@angular/forms';

export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phones: this.fb.array([])  // FormArray
    });
    
    // Add initial phone
    this.addPhone();
  }
  
  // Getter for phones array
  get phones() {
    return this.form.get('phones') as FormArray;
  }
  
  // Add phone
  addPhone() {
    const phoneForm = this.fb.group({
      type: ['mobile', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.phones.push(phoneForm);
  }
  
  // Remove phone
  removePhone(index: number) {
    this.phones.removeAt(index);
  }
  
  onSubmit() {
    console.log(this.form.value);
    // { name: 'John', phones: [{ type: 'mobile', number: '1234567890' }] }
  }
}
```

**Template:**
```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="name" placeholder="Name">
  
  <div formArrayName="phones">
    <div *ngFor="let phone of phones.controls; let i = index">
      <div [formGroupName]="i">
        <select formControlName="type">
          <option value="mobile">Mobile</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
        </select>
        
        <input formControlName="number" placeholder="Phone number">
        
        <button type="button" (click)="removePhone(i)">Remove</button>
      </div>
    </div>
  </div>
  
  <button type="button" (click)="addPhone()">Add Phone</button>
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>
```

**Complex Example (Skills List):**
```typescript
export class SkillsFormComponent {
  form = this.fb.group({
    skills: this.fb.array([])
  });
  
  get skills() {
    return this.form.get('skills') as FormArray;
  }
  
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }
  
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}

// Template
<div formArrayName="skills">
  <div *ngFor="let skill of skills.controls; let i = index">
    <input [formControlName]="i" placeholder="Skill">
    <button (click)="removeSkill(i)">×</button>
  </div>
</div>
<button (click)="addSkill()">+ Add Skill</button>
```

---

## 📊 FORMS SUMMARY

**Quick Comparison:**
```typescript
// Template-Driven (Simple)
<input [(ngModel)]="user.name" name="name" required>

// Reactive (Complex)
this.form = this.fb.group({
  name: ['', Validators.required]
});
<input formControlName="name">
```

**Built-in Validators:**
| Validator | Usage |
|-----------|-------|
| `Validators.required` | Field required |
| `Validators.email` | Valid email format |
| `Validators.minLength(n)` | Minimum length |
| `Validators.maxLength(n)` | Maximum length |
| `Validators.min(n)` | Minimum value |
| `Validators.max(n)` | Maximum value |
| `Validators.pattern(regex)` | Regex match |

**Form States:**
- Valid/Invalid - Validation status
- Pristine/Dirty - Value changed?
- Touched/Untouched - User interacted?
- Pending - Async validation in progress

**Best Practices:**
- Use Reactive Forms for complex scenarios
- Create reusable validators
- Show validation errors only after touched
- Use FormBuilder for cleaner code
- Unsubscribe from valueChanges in ngOnDestroy

---

**✅ Section 7 Complete! (48/74 topics)**

Ready for **Section 8: HTTP & RxJS** (6 topics)?

---

## SECTION 8: HTTP & RXJS

### 49. HttpClient

**What:** Service for making HTTP requests

**Setup:**
```typescript
// app.config.ts (Standalone)
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};

// Or with interceptors
import { withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor])
    )
  ]
};
```

**Basic Usage:**
```typescript
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  
  constructor(private http: HttpClient) {}
  
  // GET request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
  // GET with params
  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, {
      params: { role }
    });
  }
  
  // GET with headers
  getProtectedData(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: { 
        'Authorization': 'Bearer ' + this.token 
      }
    });
  }
}
```

**Component Usage:**
```typescript
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.loading = false;
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }
}
```

**Template with Async Pipe:**
```typescript
// Component
users$ = this.userService.getUsers();

// Template
<div *ngIf="users$ | async as users; else loading">
  <div *ngFor="let user of users">{{ user.name }}</div>
</div>
<ng-template #loading>Loading...</ng-template>
```

---

### 50. HTTP Methods

**What:** CRUD operations with HttpClient

**GET - Read:**
```typescript
// Get all
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}/users`);
}

// Get single
getUser(id: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/users/${id}`);
}

// With query params
searchUsers(term: string, page: number): Observable<User[]> {
  const params = new HttpParams()
    .set('search', term)
    .set('page', page.toString());
    
  return this.http.get<User[]>(`${this.apiUrl}/users`, { params });
}

// Or simpler
searchUsers(term: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}/users`, {
    params: { search: term }
  });
}
```

**POST - Create:**
```typescript
createUser(user: User): Observable<User> {
  return this.http.post<User>(`${this.apiUrl}/users`, user, {
    headers: { 'Content-Type': 'application/json' }
  });
}

// With response type
uploadFile(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('file', file);
  
  return this.http.post(`${this.apiUrl}/upload`, formData, {
    reportProgress: true,
    observe: 'events'
  });
}
```

**PUT - Update (Replace):**
```typescript
updateUser(id: number, user: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
}
```

**PATCH - Update (Partial):**
```typescript
updateUserEmail(id: number, email: string): Observable<User> {
  return this.http.patch<User>(`${this.apiUrl}/users/${id}`, { email });
}
```

**DELETE - Remove:**
```typescript
deleteUser(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
}
```

**HttpHeaders:**
```typescript
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + token)
  .set('Content-Type', 'application/json')
  .set('X-Custom-Header', 'value');

this.http.get(url, { headers });
```

**HttpParams:**
```typescript
import { HttpParams } from '@angular/common/http';

const params = new HttpParams()
  .set('page', '1')
  .set('limit', '10')
  .set('sort', 'name');

this.http.get(url, { params });

// Or object syntax
this.http.get(url, {
  params: { page: 1, limit: 10, sort: 'name' }
});
```

---

### 51. Observables

**What:** Streams of async data (RxJS)

**Basic Observable:**
```typescript
import { Observable } from 'rxjs';

// Create observable
const numbers$ = new Observable<number>(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

// Subscribe
numbers$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete')
});
```

**Common Observables:**
```typescript
import { of, from, interval, fromEvent } from 'rxjs';

// of - Emit values
of(1, 2, 3).subscribe(val => console.log(val));  // 1, 2, 3

// from - Convert array/promise
from([1, 2, 3]).subscribe(val => console.log(val));

// interval - Emit every N ms
interval(1000).subscribe(val => console.log(val));  // 0, 1, 2...

// fromEvent - DOM events
fromEvent(button, 'click').subscribe(event => console.log('Clicked'));
```

**Unsubscribing:**
```typescript
export class MyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    // Method 1: takeUntil (recommended)
    this.dataService.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
    
    // Method 2: Manual
    const sub = this.dataService.data$.subscribe(/* ... */);
    // Later: sub.unsubscribe();
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**When to Unsubscribe:**
```typescript
// ✅ MUST unsubscribe
interval(1000).subscribe(/* ... */);
this.http.get(url).subscribe(/* ... */);  // Actually auto-completes
this.customService.data$.subscribe(/* ... */);

// ❌ NO need to unsubscribe (Angular handles it)
this.route.params.subscribe(/* ... */);
this.route.queryParams.subscribe(/* ... */);
// Async pipe handles it
{{ data$ | async }}
```

---

### 52. RxJS Operators

**What:** Transform, filter, combine observables

**Transformation Operators:**
```typescript
import { map, pluck, filter, tap } from 'rxjs/operators';

// map - Transform values
this.http.get<User[]>(url).pipe(
  map(users => users.map(u => u.name))  // Extract names
).subscribe(names => console.log(names));

// filter - Filter values
interval(1000).pipe(
  filter(val => val % 2 === 0)  // Only even numbers
).subscribe(console.log);

// tap - Side effects (debugging)
this.http.get(url).pipe(
  tap(data => console.log('Response:', data)),
  map(data => data.items)
).subscribe(/* ... */);
```

**Combination Operators:**
```typescript
import { mergeMap, switchMap, concatMap, combineLatest, forkJoin } from 'rxjs';

// switchMap - Cancel previous, switch to new (search)
searchTerm$.pipe(
  debounceTime(300),
  switchMap(term => this.searchService.search(term))
).subscribe(results => console.log(results));

// mergeMap - Run in parallel
this.userIds$.pipe(
  mergeMap(id => this.userService.getUser(id))
).subscribe(user => console.log(user));

// concatMap - Sequential (wait for previous)
this.requests$.pipe(
  concatMap(req => this.http.post(url, req))
).subscribe(/* ... */);

// combineLatest - Combine multiple observables
combineLatest([
  this.userService.getUser(1),
  this.productService.getProducts()
]).subscribe(([user, products]) => {
  console.log(user, products);
});

// forkJoin - Wait for all to complete (like Promise.all)
forkJoin({
  users: this.userService.getUsers(),
  products: this.productService.getProducts()
}).subscribe(result => {
  console.log(result.users, result.products);
});
```

**Utility Operators:**
```typescript
import { debounceTime, distinctUntilChanged, retry, catchError } from 'rxjs/operators';

// debounceTime - Wait before emitting
searchInput$.pipe(
  debounceTime(300)  // Wait 300ms after user stops typing
).subscribe(term => this.search(term));

// distinctUntilChanged - Only emit if different from previous
searchInput$.pipe(
  distinctUntilChanged()  // Ignore duplicate consecutive values
).subscribe(/* ... */);

// retry - Retry on error
this.http.get(url).pipe(
  retry(3)  // Retry up to 3 times
).subscribe(/* ... */);

// catchError - Handle errors
this.http.get(url).pipe(
  catchError(err => {
    console.error('Error:', err);
    return of([]);  // Return fallback value
  })
).subscribe(/* ... */);
```

**Real Search Example:**
```typescript
export class SearchComponent implements OnInit {
  searchTerm = new FormControl('');
  results$!: Observable<Product[]>;
  
  ngOnInit() {
    this.results$ = this.searchTerm.valueChanges.pipe(
      debounceTime(300),           // Wait 300ms
      distinctUntilChanged(),      // Only if changed
      filter(term => term.length > 2),  // Min 3 chars
      switchMap(term =>            // Cancel previous request
        this.productService.search(term).pipe(
          catchError(() => of([]))  // Handle errors
        )
      )
    );
  }
}

// Template
<input [formControl]="searchTerm" placeholder="Search...">
<div *ngFor="let product of results$ | async">
  {{ product.name }}
</div>
```

---

### 53. Subjects

**What:** Both Observable and Observer (can emit and subscribe)

**Subject (No initial value):**
```typescript
import { Subject } from 'rxjs';

const subject = new Subject<string>();

// Subscribe
subject.subscribe(val => console.log('Sub 1:', val));
subject.subscribe(val => console.log('Sub 2:', val));

// Emit
subject.next('Hello');  // Both subscribers receive
subject.next('World');

// Complete
subject.complete();
```

**BehaviorSubject (Has initial value, remembers last):**
```typescript
import { BehaviorSubject } from 'rxjs';

const behavior = new BehaviorSubject<number>(0);  // Initial value

behavior.subscribe(val => console.log('Sub 1:', val));  // Immediately logs 0

behavior.next(1);
behavior.next(2);

// Late subscriber gets last value
behavior.subscribe(val => console.log('Sub 2:', val));  // Logs 2

// Get current value
console.log(behavior.value);  // 2
```

**ReplaySubject (Replays N values to new subscribers):**
```typescript
import { ReplaySubject } from 'rxjs';

const replay = new ReplaySubject<number>(2);  // Keep last 2 values

replay.next(1);
replay.next(2);
replay.next(3);

replay.subscribe(val => console.log('Sub:', val));
// Logs: 2, 3 (last 2 values)
```

**AsyncSubject (Emits only last value on complete):**
```typescript
import { AsyncSubject } from 'rxjs';

const async = new AsyncSubject<number>();

async.subscribe(val => console.log(val));

async.next(1);
async.next(2);
async.next(3);
async.complete();  // Only now subscribers receive 3
```

**Subject Comparison:**
| Type | Initial Value | Late Subscribers | Use Case |
|------|---------------|------------------|----------|
| `Subject` | No | Miss old values | Events |
| `BehaviorSubject` | Yes | Get last value | State |
| `ReplaySubject` | No | Get N values | Caching |
| `AsyncSubject` | No | Get final value | Promises |

**Real Example - Notification Service:**
```typescript
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notification$ = this.notificationSubject.asObservable();
  
  notify(message: string, type: 'success' | 'error' = 'success') {
    this.notificationSubject.next({ message, type, timestamp: Date.now() });
  }
}

// Usage
this.notificationService.notify('User saved successfully!', 'success');
```

**State Management with BehaviorSubject:**
```typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartState = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartState.asObservable();
  
  get currentCart(): CartItem[] {
    return this.cartState.value;
  }
  
  addItem(item: CartItem) {
    const cart = [...this.cartState.value, item];
    this.cartState.next(cart);
  }
  
  removeItem(id: number) {
    const cart = this.cartState.value.filter(item => item.id !== id);
    this.cartState.next(cart);
  }
}
```

---

### 54. Error Handling

**What:** Handle HTTP errors gracefully

**Basic Error Handling:**
```typescript
this.http.get<User[]>(url).subscribe({
  next: (users) => console.log(users),
  error: (error) => {
    console.error('Error:', error);
    // Handle error
  }
});
```

**catchError Operator:**
```typescript
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(url).pipe(
    catchError(error => {
      console.error('Failed to fetch users:', error);
      return of([]); // Return empty array as fallback
    })
  );
}

// Or rethrow
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(url).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('Failed to load users'));
    })
  );
}
```

**retry Operator:**
```typescript
import { retry, retryWhen, delay, take } from 'rxjs/operators';

// Retry 3 times
this.http.get(url).pipe(
  retry(3),
  catchError(error => of(null))
).subscribe(/* ... */);

// Retry with delay
this.http.get(url).pipe(
  retryWhen(errors => 
    errors.pipe(
      delay(1000),  // Wait 1s between retries
      take(3)       // Max 3 retries
    )
  ),
  catchError(error => of(null))
).subscribe(/* ... */);
```

**Global Error Handler:**
```typescript
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error:', error);
    
    // Log to server
    this.logService.logError(error);
    
    // Show notification
    this.notificationService.showError('An error occurred');
  }
  
  constructor(
    private logService: LogService,
    private notificationService: NotificationService
  ) {}
}

// Provide in app.config.ts
providers: [
  { provide: ErrorHandler, useClass: GlobalErrorHandler }
]
```

**HTTP Error Types:**
```typescript
import { HttpErrorResponse } from '@angular/common/http';

this.http.get(url).pipe(
  catchError((error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server error ${error.status}:`, error.message);
      
      switch (error.status) {
        case 401:
          this.router.navigate(['/login']);
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
      }
    }
    
    return throwError(() => error);
  })
).subscribe(/* ... */);
```

**Service with Error Handling:**
```typescript
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      retry(2),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed:`, error);
      
      // User-friendly message
      const message = error.error?.message || 'Operation failed';
      this.notificationService.showError(message);
      
      // Return safe fallback
      return of(result as T);
    };
  }
}
```

---

## 📊 HTTP & RXJS SUMMARY

**HTTP Methods Quick Reference:**
```typescript
// GET
this.http.get<T>(url)
this.http.get<T>(url, { params, headers })

// POST
this.http.post<T>(url, body)
this.http.post<T>(url, body, { headers })

// PUT/PATCH
this.http.put<T>(url, body)
this.http.patch<T>(url, partialBody)

// DELETE
this.http.delete<T>(url)
```

**Essential RxJS Operators:**
| Operator | Purpose | Example |
|----------|---------|---------|
| `map` | Transform values | Extract properties |
| `filter` | Filter values | Only even numbers |
| `switchMap` | Cancel previous | Search autocomplete |
| `mergeMap` | Run parallel | Multiple requests |
| `debounceTime` | Wait before emit | Search delay |
| `distinctUntilChanged` | Skip duplicates | Avoid redundant calls |
| `catchError` | Handle errors | Fallback values |
| `retry` | Retry on error | Network resilience |

**Subject Types:**
- **Subject**: Event bus, no replay
- **BehaviorSubject**: State management, has current value
- **ReplaySubject**: Cache N values for late subscribers
- **AsyncSubject**: Emit final value on complete

**Best Practices:**
- Always unsubscribe (use `takeUntil` or async pipe)
- Handle errors with `catchError`
- Use `switchMap` for search/autocomplete
- Use `forkJoin` for parallel requests
- Retry failed requests with `retry`
- Type HTTP responses: `http.get<User[]>(url)`

---

**✅ Section 8 Complete! (54/74 topics)**

Ready for **Section 9: Pipes** (3 topics)?

---

## SECTION 9: PIPES

### 55. Built-in Pipes

**What:** Transform displayed values in templates

**Common Pipes:**
```html
<!-- DatePipe -->
{{ today | date }}                          <!-- Dec 20, 2025 -->
{{ today | date:'short' }}                  <!-- 12/20/25, 3:45 PM -->
{{ today | date:'dd/MM/yyyy' }}             <!-- 20/12/2025 -->
{{ today | date:'fullDate' }}               <!-- Friday, December 20, 2025 -->
{{ today | date:'HH:mm:ss' }}               <!-- 15:30:45 -->

<!-- CurrencyPipe -->
{{ price | currency }}                      <!-- $1,234.56 -->
{{ price | currency:'INR' }}                <!-- ₹1,234.56 -->
{{ price | currency:'EUR':'symbol':'1.0-0' }} <!-- €1,235 -->

<!-- DecimalPipe (number) -->
{{ 3.14159 | number }}                      <!-- 3.142 -->
{{ 3.14159 | number:'1.0-5' }}              <!-- 3.14159 -->
{{ 1234.567 | number:'3.1-2' }}             <!-- 1,234.57 -->

<!-- PercentPipe -->
{{ 0.25 | percent }}                        <!-- 25% -->
{{ 0.5678 | percent:'1.2-2' }}              <!-- 56.78% -->

<!-- UpperCase/LowerCase -->
{{ 'hello' | uppercase }}                   <!-- HELLO -->
{{ 'WORLD' | lowercase }}                   <!-- world -->
{{ 'hello world' | titlecase }}             <!-- Hello World -->

<!-- SlicePipe -->
{{ [1,2,3,4,5] | slice:1:3 }}              <!-- [2,3] -->
{{ 'Hello World' | slice:0:5 }}            <!-- Hello -->

<!-- JsonPipe (debugging) -->
{{ user | json }}                           <!-- { "name": "John", "age": 25 } -->

<!-- AsyncPipe (unwraps observables/promises) -->
{{ user$ | async }}
<div *ngFor="let item of items$ | async">{{ item }}</div>

<!-- KeyValuePipe (for objects) -->
<div *ngFor="let item of object | keyvalue">
  {{ item.key }}: {{ item.value }}
</div>
```

**Chaining Pipes:**
```html
{{ today | date:'short' | uppercase }}      <!-- 12/20/25, 3:45 PM -->
{{ price | currency:'INR' | lowercase }}    <!-- ₹1,234.56 -->
{{ text | slice:0:20 | titlecase }}         <!-- First 20 chars, title case -->
```

**Pipe Parameters:**
```typescript
// Syntax: {{ value | pipeName:param1:param2:param3 }}

// Date with timezone
{{ date | date:'short':'UTC' }}

// Currency with display and digits
{{ price | currency:'USD':'symbol':'1.2-2' }}
//                    ^      ^        ^
//                    |      |        |
//          currency code  display  digitsInfo
//                         (symbol/code/name)
```

**Built-in Pipes Summary:**
| Pipe | Example | Output |
|------|---------|--------|
| `date` | `{{ now \| date:'short' }}` | 12/20/25, 3:45 PM |
| `currency` | `{{ 100 \| currency:'INR' }}` | ₹100.00 |
| `number` | `{{ 1234.5 \| number:'1.2-2' }}` | 1,234.50 |
| `percent` | `{{ 0.5 \| percent }}` | 50% |
| `uppercase` | `{{ 'hello' \| uppercase }}` | HELLO |
| `lowercase` | `{{ 'WORLD' \| lowercase }}` | world |
| `titlecase` | `{{ 'hi there' \| titlecase }}` | Hi There |
| `slice` | `{{ [1,2,3] \| slice:1 }}` | [2,3] |
| `json` | `{{ obj \| json }}` | JSON string |
| `async` | `{{ data$ \| async }}` | Unwrapped value |

---

### 56. Custom Pipes

**What:** Create your own transformation logic

**Basic Custom Pipe:**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
  standalone: true
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }
}

// Usage: {{ 2 | exponential:3 }}  → 8 (2³)
```

**Real-World Examples:**

**1. Time Ago Pipe:**
```typescript
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds} seconds ago`;
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;
    
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    
    const years = Math.floor(months / 12);
    return `${years} years ago`;
  }
}

// Usage: {{ post.createdAt | timeAgo }}  → "2 hours ago"
```

**2. Truncate Pipe:**
```typescript
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50, ellipsis: string = '...'): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit).trim() + ellipsis;
  }
}

// Usage: {{ description | truncate:100 }}
```

**3. Filter Pipe:**
```typescript
@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], searchText: string, key?: keyof T): T[] {
    if (!items || !searchText) return items;
    
    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      if (key) {
        return String(item[key]).toLowerCase().includes(searchText);
      }
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}

// Usage: 
// <div *ngFor="let user of users | filter:searchTerm:'name'">
```

**4. Safe HTML Pipe (with sanitization):**
```typescript
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value: string): SafeHtml {
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
  }
}

// Usage: <div [innerHTML]="htmlContent | safeHtml"></div>
```

**5. Phone Number Pipe:**
```typescript
@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    // Format: (123) 456-7890
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return value;
  }
}

// Usage: {{ '1234567890' | phone }}  → "(123) 456-7890"
```

---

### 57. Pure vs Impure

**What:** Control when pipe executes

**Pure Pipe (Default - Better Performance):**
```typescript
@Pipe({
  name: 'purePipe',
  pure: true,  // Default
  standalone: true
})
export class PurePipe implements PipeTransform {
  transform(value: any[]): any[] {
    console.log('Pure pipe executed');
    return value.filter(item => item.active);
  }
}

// Only runs when:
// 1. Input reference changes
items = [{ active: true }];
this.items.push({ active: false });  // Pipe NOT triggered (same reference)
this.items = [...this.items, { active: false }];  // Pipe triggered (new reference)
```

**Impure Pipe (Runs on Every Change Detection):**
```typescript
@Pipe({
  name: 'impurePipe',
  pure: false,  // Impure
  standalone: true
})
export class ImpurePipe implements PipeTransform {
  transform(value: any[]): any[] {
    console.log('Impure pipe executed');  // Runs FREQUENTLY!
    return value.filter(item => item.active);
  }
}

// Runs on EVERY change detection cycle
// Even if input hasn't changed!
```

**Comparison:**
| Feature | Pure Pipe | Impure Pipe |
|---------|-----------|-------------|
| Execution | Only on reference change | Every change detection |
| Performance | Fast | Slow |
| `pure` flag | `true` (default) | `false` |
| Use for | Most cases | Observables, frequent changes |
| Example | Custom filters, formatting | AsyncPipe |

**When to Use Impure:**
```typescript
// ❌ Bad - Impure filter (runs constantly)
@Pipe({ name: 'filter', pure: false })

// ✅ Good - Filter in component
filteredItems = this.items.filter(item => item.active);

// ✅ Good - Use pure pipe with observable
items$ = this.dataService.items$.pipe(
  map(items => items.filter(item => item.active))
);
// Template: items$ | async
```

**AsyncPipe is Impure (Built-in Exception):**
```typescript
// Angular's AsyncPipe is impure
@Pipe({ name: 'async', pure: false })

// Because it needs to:
// 1. Subscribe to observable
// 2. Check for new emissions
// 3. Update view when data arrives

// Usage: {{ data$ | async }}
```

**Performance Impact:**
```typescript
// Pure pipe (good)
{{ users | filter:searchTerm }}  // Only runs when users or searchTerm changes

// Impure pipe (bad)
{{ users | impureFilter }}  // Runs on every:
                           // - Mouse move
                           // - Keyboard input
                           // - Timer tick
                           // - Any change detection!
```

**Best Practices:**
```typescript
// ✅ Use pure pipes (default)
@Pipe({ name: 'myPipe', pure: true })

// ✅ Transform in component for complex logic
get filteredUsers() {
  return this.users.filter(u => u.active);
}

// ✅ Use observables + async pipe
users$ = this.users$.pipe(
  map(users => users.filter(u => u.active))
);

// ❌ Avoid impure pipes unless necessary
@Pipe({ name: 'myPipe', pure: false })  // Rarely needed!
```

---

## 📊 PIPES SUMMARY

**Quick Reference:**
```html
<!-- Built-in Pipes -->
{{ date | date:'short' }}
{{ price | currency:'INR' }}
{{ value | number:'1.2-2' }}
{{ text | uppercase }}
{{ data$ | async }}

<!-- Custom Pipe -->
{{ text | truncate:100 }}
{{ timestamp | timeAgo }}
{{ phone | phone }}

<!-- Chaining -->
{{ date | date:'short' | uppercase }}
```

**Creating Custom Pipe:**
```typescript
@Pipe({
  name: 'myPipe',
  standalone: true,
  pure: true  // Default
})
export class MyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // Transform logic
    return transformedValue;
  }
}
```

**Pure vs Impure Decision:**
- **Pure (99% of cases)**: Custom formatting, filtering on immutable data
- **Impure (rare)**: AsyncPipe, polling data, mutable array operations

**Remember:**
- Pure pipes are memoized (cached based on input)
- Impure pipes run on every change detection
- Always prefer pure pipes for performance
- Use async pipe for observables (auto-subscribe/unsubscribe)

---

**✅ Section 9 Complete! (57/74 topics)**

Ready for **Section 10: Advanced Concepts** (5 topics)?

---

## SECTION 10: ADVANCED CONCEPTS

### 58. Change Detection

**What:** How Angular detects and updates changes in the UI

**Default Change Detection:**
```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button (click)="increment()">+</button>
  `,
  changeDetection: ChangeDetectionStrategy.Default  // Default
})
export class DefaultComponent {
  title = 'Default CD';
  count = 0;
  
  increment() {
    this.count++;  // Triggers change detection for entire tree
  }
}

// Checks component tree on:
// - Events (click, input, etc.)
// - HTTP responses
// - Timers (setTimeout, setInterval)
// - Any async operation
```

**OnPush Strategy (Performance Optimization):**
```typescript
@Component({
  selector: 'app-optimized',
  template: `
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <app-child [data]="data"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush  // Only checks when:
})
export class OptimizedComponent {
  title = 'OnPush CD';
  count = 0;
  data = { value: 100 };
  
  // ❌ Won't trigger change detection (same reference)
  updateWrong() {
    this.data.value = 200;  // Mutates object
  }
  
  // ✅ Triggers change detection (new reference)
  updateCorrect() {
    this.data = { value: 200 };  // New object
  }
}

// OnPush only checks when:
// 1. @Input reference changes
// 2. Event triggered in component
// 3. Async pipe emits new value
// 4. Manually triggered with ChangeDetectorRef
```

**Manual Change Detection:**
```typescript
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-manual',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualComponent {
  data: any;
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  // Method 1: Mark for check (schedules check on next CD cycle)
  updateWithMarkForCheck() {
    this.data = fetchData();
    this.cdr.markForCheck();  // Marks path to root for checking
  }
  
  // Method 2: Detect changes immediately
  updateImmediate() {
    this.data = fetchData();
    this.cdr.detectChanges();  // Runs CD immediately
  }
  
  // Method 3: Detach/reattach
  ngOnInit() {
    this.cdr.detach();  // Stop automatic CD
    
    setInterval(() => {
      this.data = fetchData();
      this.cdr.detectChanges();  // Manual check
    }, 1000);
  }
}
```

**Practical Example:**
```typescript
// Parent Component (OnPush)
@Component({
  selector: 'app-parent',
  template: `
    <app-child [users]="users"></app-child>
    <button (click)="addUser()">Add User</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  users = [{ name: 'John' }];
  
  // ❌ Won't update child (same array reference)
  addUserWrong() {
    this.users.push({ name: 'Jane' });
  }
  
  // ✅ Updates child (new array reference)
  addUser() {
    this.users = [...this.users, { name: 'Jane' }];
  }
}

// Child Component (OnPush)
@Component({
  selector: 'app-child',
  template: `<div *ngFor="let user of users">{{ user.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() users: any[] = [];
}
```

**Change Detection Strategies Comparison:**
| Strategy | When Checks Run | Performance | Use Case |
|----------|----------------|-------------|----------|
| `Default` | Every CD cycle | Slower | Simple apps, mutable data |
| `OnPush` | Input changes, events, async pipe | Faster | Large apps, immutable data |

**Best Practices:**
```typescript
// ✅ Use OnPush with immutable patterns
this.items = [...this.items, newItem];

// ✅ Use async pipe (auto-marks for check)
items$ = this.service.getItems();
// Template: items$ | async

// ✅ Mark for check after external updates
ngOnInit() {
  this.socket.on('data', (data) => {
    this.data = data;
    this.cdr.markForCheck();
  });
}

// ❌ Avoid mutations with OnPush
this.items.push(newItem);  // Won't update!
```

---

### 59. Signals (Angular 16+)

**What:** Reactive primitive that notifies when value changes

**Basic Signal:**
```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+</button>
  `,
  standalone: true
})
export class CounterComponent {
  // Create signal
  count = signal(0);
  
  increment() {
    // Update methods
    this.count.set(10);           // Set value
    this.count.update(v => v + 1); // Update based on current
  }
  
  getCount() {
    return this.count();  // Read signal (with parentheses)
  }
}
```

**Computed Signals:**
```typescript
import { computed } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <p>Total: {{ total() }}</p>
    <p>Tax: {{ tax() }}</p>
    <p>Grand Total: {{ grandTotal() }}</p>
  `,
  standalone: true
})
export class CartComponent {
  items = signal([
    { name: 'Book', price: 100 },
    { name: 'Pen', price: 50 }
  ]);
  
  // Computed (auto-updates when dependencies change)
  total = computed(() => {
    return this.items().reduce((sum, item) => sum + item.price, 0);
  });
  
  tax = computed(() => this.total() * 0.18);
  
  grandTotal = computed(() => this.total() + this.tax());
  
  addItem(item: any) {
    this.items.update(items => [...items, item]);
    // total, tax, grandTotal auto-recalculate!
  }
}
```

**Effects (Side Effects):**
```typescript
import { effect } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true
})
export class LoggerComponent {
  count = signal(0);
  user = signal({ name: 'John' });
  
  constructor() {
    // Runs when signal changes
    effect(() => {
      console.log('Count changed:', this.count());
      // Auto-tracks dependencies!
    });
    
    // Multiple dependencies
    effect(() => {
      console.log(`${this.user().name} clicked ${this.count()} times`);
    });
    
    // Cleanup
    const effectRef = effect(() => {
      const subscription = this.setupWebSocket();
      
      // Cleanup function
      return () => subscription.unsubscribe();
    });
  }
  
  increment() {
    this.count.update(v => v + 1);  // Triggers effect
  }
}
```

**Signal Methods:**
```typescript
// Create
const count = signal(0);
const user = signal({ name: 'John', age: 25 });

// Read
console.log(count());       // 0
console.log(user().name);   // 'John'

// Write
count.set(10);              // Set absolute value
count.update(v => v + 1);   // Update based on current
user.update(u => ({ ...u, age: 26 }));  // Immutable update

// Computed
const double = computed(() => count() * 2);
const isAdult = computed(() => user().age >= 18);

// Effect
effect(() => {
  console.log('Current:', count());
});
```

**Signals vs Observables:**
```typescript
// Observable approach
count$ = new BehaviorSubject(0);
double$ = this.count$.pipe(map(v => v * 2));

ngOnInit() {
  this.count$.subscribe(v => console.log(v));  // Manual subscribe
}

ngOnDestroy() {
  // Must unsubscribe!
}

// Signal approach
count = signal(0);
double = computed(() => this.count() * 2);

constructor() {
  effect(() => console.log(this.count()));  // Auto cleanup!
}
// No unsubscribe needed!
```

**Practical Example - Todo App:**
```typescript
@Component({
  selector: 'app-todos',
  template: `
    <input [(ngModel)]="newTodo" (keyup.enter)="addTodo()">
    <p>Total: {{ todos().length }} | Completed: {{ completedCount() }}</p>
    
    <div *ngFor="let todo of todos()">
      <input type="checkbox" 
             [checked]="todo.completed" 
             (change)="toggle(todo.id)">
      {{ todo.text }}
    </div>
  `,
  standalone: true
})
export class TodosComponent {
  newTodo = '';
  todos = signal([
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Learn Signals', completed: true }
  ]);
  
  // Auto-updates when todos change
  completedCount = computed(() => {
    return this.todos().filter(t => t.completed).length;
  });
  
  addTodo() {
    this.todos.update(todos => [
      ...todos,
      { id: Date.now(), text: this.newTodo, completed: false }
    ]);
    this.newTodo = '';
  }
  
  toggle(id: number) {
    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}
```

**Signals vs RxJS:**
| Feature | Signals | Observables |
|---------|---------|-------------|
| Value reading | Synchronous `count()` | Async subscription |
| Change detection | Automatic | Need `async` pipe or manual |
| Cleanup | Automatic | Manual unsubscribe |
| Learning curve | Simple | Complex |
| Use case | Component state | Async operations, HTTP |

---

### 60. Standalone Components

**What:** Components without NgModule (Angular 14+)

**Basic Standalone Component:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,  // Key flag
  imports: [CommonModule],  // Import dependencies directly
  template: `
    <h1>{{ title }}</h1>
    <p *ngIf="show">Hello Standalone!</p>
  `
})
export class HelloComponent {
  title = 'Standalone Component';
  show = true;
}
```

**Standalone App Setup:**
```typescript
// main.ts (bootstrapping)
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Other providers
  ]
});
```

**Using Standalone in Component:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';  // Import another standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,      // *ngIf, *ngFor, etc.
    FormsModule,       // ngModel
    HelloComponent     // Other standalone components
  ],
  template: `
    <input [(ngModel)]="name">
    <app-hello *ngIf="name"></app-hello>
  `
})
export class AppComponent {
  name = '';
}
```

**Standalone Routes:**
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)  // Lazy load standalone
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes')
      .then(m => m.USERS_ROUTES)  // Lazy load routes
  }
];

// users.routes.ts
export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];
```

**Standalone Directive:**
```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// Usage in component
@Component({
  imports: [HighlightDirective],
  template: `<p appHighlight>Hover me</p>`
})
```

**Standalone Pipe:**
```typescript
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

// Usage
@Component({
  imports: [ReversePipe],
  template: `{{ 'hello' | reverse }}`  // olleh
})
```

**Migration: NgModule → Standalone:**
```typescript
// Before (NgModule)
@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// After (Standalone)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HelloComponent]
})
export class AppComponent {}

// main.ts
bootstrapApplication(AppComponent, {
  providers: [UserService]
});
```

**Standalone Benefits:**
| Feature | Standalone | NgModule |
|---------|------------|----------|
| Imports | Direct in component | Centralized in module |
| Lazy loading | Component-level | Module-level |
| Boilerplate | Less | More |
| Tree-shaking | Better | Good |
| Mental model | Simpler | Complex |

---

### 61. Content Projection (ng-content)

**What:** Insert external content into component template

**Basic Projection:**
```typescript
// card.component.ts
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>  <!-- Projects content here -->
    </div>
  `,
  styles: [`.card { border: 1px solid #ccc; padding: 16px; }`],
  standalone: true
})
export class CardComponent {}

// Usage
@Component({
  template: `
    <app-card>
      <h2>Title</h2>
      <p>This content is projected!</p>
    </app-card>
  `,
  imports: [CardComponent]
})
export class AppComponent {}

// Rendered:
// <div class="card">
//   <h2>Title</h2>
//   <p>This content is projected!</p>
// </div>
```

**Multi-Slot Projection (Named Slots):**
```typescript
// card.component.ts
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="body">
        <ng-content select="[body]"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  standalone: true
})
export class CardComponent {}

// Usage
@Component({
  template: `
    <app-card>
      <h2 header>Card Title</h2>
      <p body>Card content goes here</p>
      <button footer>Action</button>
    </app-card>
  `,
  imports: [CardComponent]
})
export class AppComponent {}
```

**Conditional Projection:**
```typescript
@Component({
  selector: 'app-panel',
  template: `
    <div class="panel">
      <ng-content select="[title]"></ng-content>
      
      <ng-content></ng-content>  <!-- Default slot -->
      
      <div *ngIf="showFooter">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class PanelComponent {
  @Input() showFooter = true;
}
```

**Accessing Projected Content:**
```typescript
import { Component, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<div>Tab Content</div>`,
  standalone: true
})
export class TabComponent {
  @Input() title = '';
}

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs">
      <button *ngFor="let tab of tabs; let i = index" 
              (click)="selectTab(i)">
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  
  ngAfterContentInit() {
    console.log('Tabs projected:', this.tabs.length);
  }
  
  selectTab(index: number) {
    // Hide all tabs, show selected
  }
}

// Usage
@Component({
  template: `
    <app-tabs>
      <app-tab title="Tab 1">Content 1</app-tab>
      <app-tab title="Tab 2">Content 2</app-tab>
    </app-tabs>
  `
})
```

**Real-World Example - Modal:**
```typescript
// modal.component.ts
@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop" *ngIf="isOpen" (click)="close()">
      <div class="modal-container" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <ng-content select="[modal-header]"></ng-content>
          <button (click)="close()">×</button>
        </div>
        
        <div class="modal-body">
          <ng-content select="[modal-body]"></ng-content>
        </div>
        
        <div class="modal-footer">
          <ng-content select="[modal-footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
}

// Usage
@Component({
  template: `
    <button (click)="isOpen = true">Open Modal</button>
    
    <app-modal [isOpen]="isOpen" (close)="isOpen = false">
      <h2 modal-header>Delete Confirmation</h2>
      
      <p modal-body>Are you sure you want to delete this item?</p>
      
      <div modal-footer>
        <button (click)="isOpen = false">Cancel</button>
        <button (click)="delete()">Delete</button>
      </div>
    </app-modal>
  `,
  imports: [ModalComponent]
})
export class AppComponent {
  isOpen = false;
  
  delete() {
    console.log('Deleted!');
    this.isOpen = false;
  }
}
```

**Projection Comparison:**
| Type | Selector | Use Case |
|------|----------|----------|
| Single | `<ng-content>` | Simple content |
| Named | `<ng-content select="[attr]">` | Multiple slots |
| Element | `<ng-content select="h2">` | Specific elements |
| Class | `<ng-content select=".class">` | Styled content |

---

### 62. Dynamic Components

**What:** Create and load components at runtime

**Using ViewContainerRef:**
```typescript
import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-dynamic',
  template: `
    <button (click)="loadComponent()">Load Component</button>
    <button (click)="removeComponent()">Remove</button>
    
    <div #container></div>  <!-- Dynamic insertion point -->
  `,
  standalone: true
})
export class DynamicComponent {
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  componentRef?: ComponentRef<HelloComponent>;
  
  loadComponent() {
    // Clear existing
    this.container.clear();
    
    // Create component
    this.componentRef = this.container.createComponent(HelloComponent);
    
    // Pass data to component
    this.componentRef.instance.title = 'Dynamic Title';
    
    // Subscribe to outputs
    this.componentRef.instance.someEvent.subscribe(data => {
      console.log('Event from dynamic component:', data);
    });
  }
  
  removeComponent() {
    this.componentRef?.destroy();
  }
}
```

**Dynamic Component with Data:**
```typescript
// alert.component.ts
@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-{{ type }}">
      {{ message }}
      <button (click)="onClose()">×</button>
    </div>
  `,
  standalone: true
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'info' = 'info';
  @Input() message = '';
  @Output() closed = new EventEmitter<void>();
  
  onClose() {
    this.closed.emit();
  }
}

// alert.service.ts
@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}
  
  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const componentRef = this.viewContainerRef.createComponent(
      AlertComponent,
      { injector: this.injector }
    );
    
    // Set inputs
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    
    // Handle close
    componentRef.instance.closed.subscribe(() => {
      componentRef.destroy();
    });
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      componentRef.destroy();
    }, 3000);
  }
}
```

**Modal Service Example:**
```typescript
// modal.service.ts
@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalRef?: ComponentRef<any>;
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}
  
  open<T>(component: Type<T>, data?: any): ComponentRef<T> {
    // Close existing modal
    this.close();
    
    // Create new modal
    this.modalRef = this.viewContainerRef.createComponent(component, {
      injector: this.injector
    });
    
    // Pass data
    if (data) {
      Object.assign(this.modalRef.instance, data);
    }
    
    return this.modalRef;
  }
  
  close() {
    this.modalRef?.destroy();
    this.modalRef = undefined;
  }
}

// Usage
@Component({
  selector: 'app-user-detail',
  template: `<div>User: {{ userName }}</div>`
})
export class UserDetailComponent {
  @Input() userName = '';
}

@Component({
  template: `<button (click)="openModal()">Show User</button>`
})
export class AppComponent {
  constructor(private modalService: ModalService) {}
  
  openModal() {
    const modalRef = this.modalService.open(UserDetailComponent, {
      userName: 'John Doe'
    });
  }
}
```

**Tab System with Dynamic Components:**
```typescript
interface Tab {
  component: Type<any>;
  title: string;
  data?: any;
}

@Component({
  selector: 'app-tab-container',
  template: `
    <div class="tabs">
      <button *ngFor="let tab of tabs; let i = index"
              (click)="selectTab(i)"
              [class.active]="selectedIndex === i">
        {{ tab.title }}
      </button>
    </div>
    <div #tabContent></div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class TabContainerComponent {
  @ViewChild('tabContent', { read: ViewContainerRef })
  container!: ViewContainerRef;
  
  tabs: Tab[] = [];
  selectedIndex = 0;
  private componentRef?: ComponentRef<any>;
  
  addTab(tab: Tab) {
    this.tabs.push(tab);
  }
  
  selectTab(index: number) {
    this.selectedIndex = index;
    const tab = this.tabs[index];
    
    // Clear and load new component
    this.container.clear();
    this.componentRef = this.container.createComponent(tab.component);
    
    // Pass data
    if (tab.data) {
      Object.assign(this.componentRef.instance, tab.data);
    }
  }
}

// Usage
const tab1: Tab = {
  component: UserListComponent,
  title: 'Users',
  data: { filter: 'active' }
};

const tab2: Tab = {
  component: SettingsComponent,
  title: 'Settings'
};

this.tabContainer.addTab(tab1);
this.tabContainer.addTab(tab2);
```

**Dynamic Components Summary:**
| Method | Use Case | Example |
|--------|----------|---------|
| `createComponent()` | Runtime creation | Modals, alerts |
| `ViewContainerRef` | Insertion point | Dynamic tabs |
| `ComponentRef` | Manage lifecycle | Destroy, update inputs |
| Service-based | Global components | Toast notifications |

---

## 📊 ADVANCED CONCEPTS SUMMARY

**Change Detection:**
```typescript
// OnPush for performance
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

// Manual control
this.cdr.markForCheck();
this.cdr.detectChanges();
```

**Signals:**
```typescript
count = signal(0);
double = computed(() => this.count() * 2);
effect(() => console.log(this.count()));
```

**Standalone:**
```typescript
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule]
})
```

**Content Projection:**
```html
<!-- Component -->
<ng-content select="[header]"></ng-content>

<!-- Usage -->
<app-card>
  <h2 header>Title</h2>
</app-card>
```

**Dynamic Components:**
```typescript
const ref = this.viewContainer.createComponent(MyComponent);
ref.instance.data = value;
ref.destroy();
```

---

**✅ Section 10 Complete! (62/74 topics)**

Ready for **Section 11: Best Practices** (4 topics)?

---

## SECTION 11: BEST PRACTICES

### 63. Performance Optimization

**What:** Techniques to make Angular apps faster

**1. OnPush Change Detection:**
```typescript
@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let item of items; trackBy: trackById">
      {{ item.name }}
    </div>
  `
})
export class OptimizedComponent {
  @Input() items: Item[] = [];
  
  // TrackBy prevents unnecessary re-renders
  trackById(index: number, item: Item) {
    return item.id;  // Track by unique identifier
  }
}

// ❌ Without trackBy: Re-renders all items when array changes
// ✅ With trackBy: Only re-renders changed items
```

**2. Lazy Loading:**
```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)  // Loads only when route accessed
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  }
];

// Reduces initial bundle size!
```

**3. Preloading Strategy:**
```typescript
import { PreloadAllModules } from '@angular/router';

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)  // Preload after initial load
    )
  ]
};

// Custom preloading
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}

// Route config
{
  path: 'feature',
  loadChildren: () => import('./feature/routes'),
  data: { preload: true }  // Will preload
}
```

**4. Virtual Scrolling (Large Lists):**
```typescript
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-list',
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" style="height: 400px">
      <div *cdkVirtualFor="let item of items">
        {{ item.name }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  standalone: true,
  imports: [ScrollingModule]
})
export class ListComponent {
  items = Array.from({ length: 10000 }, (_, i) => ({ 
    id: i, 
    name: `Item ${i}` 
  }));
  
  // Only renders visible items!
}
```

**5. Async Pipe (Auto Unsubscribe):**
```typescript
// ❌ Manual subscription (memory leak risk)
@Component({
  template: `<div>{{ data }}</div>`
})
export class BadComponent {
  data: any;
  private subscription?: Subscription;
  
  ngOnInit() {
    this.subscription = this.service.getData()
      .subscribe(data => this.data = data);
  }
  
  ngOnDestroy() {
    this.subscription?.unsubscribe();  // Must remember!
  }
}

// ✅ Async pipe (auto cleanup)
@Component({
  template: `<div>{{ data$ | async }}</div>`
})
export class GoodComponent {
  data$ = this.service.getData();  // No unsubscribe needed!
  
  constructor(private service: DataService) {}
}
```

**6. Pure Pipes:**
```typescript
// ✅ Pure pipe (cached, fast)
@Pipe({ name: 'filter', pure: true })
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: string) {
    return items.filter(i => i.name.includes(search));
  }
}

// Use with immutable data
this.items = [...this.items, newItem];  // New reference
```

**7. Memoization:**
```typescript
import { memoize } from 'lodash-es';

export class DataService {
  // Cache expensive calculations
  getProcessedData = memoize((id: number) => {
    return this.expensiveOperation(id);
  });
  
  private expensiveOperation(id: number) {
    // Heavy computation
    return result;
  }
}
```

**8. Image Optimization:**
```typescript
// Use NgOptimizedImage (Angular 15+)
import { NgOptimizedImage } from '@angular/common';

@Component({
  template: `
    <img ngSrc="/assets/hero.jpg" 
         width="400" 
         height="300" 
         priority>  <!-- LCP image -->
    
    <img ngSrc="/assets/thumbnail.jpg" 
         width="100" 
         height="100" 
         loading="lazy">  <!-- Lazy loaded -->
  `,
  imports: [NgOptimizedImage]
})
```

**Performance Checklist:**
| Technique | Impact | When to Use |
|-----------|--------|-------------|
| OnPush CD | High | Most components |
| trackBy | High | Large *ngFor lists |
| Lazy loading | High | Feature modules |
| Virtual scrolling | High | 1000+ items |
| Async pipe | Medium | Observables |
| Pure pipes | Medium | Transformations |
| Preloading | Medium | Common routes |
| Image optimization | Medium | Image-heavy apps |

---

### 64. Security Best Practices

**What:** Protect against common web vulnerabilities

**1. XSS Protection (Built-in):**
```typescript
@Component({
  template: `
    <!-- ✅ Safe: Angular auto-escapes -->
    <div>{{ userInput }}</div>
    
    <!-- ❌ Dangerous: Bypasses sanitization -->
    <div [innerHTML]="userInput"></div>
    
    <!-- ✅ Safe: Sanitized -->
    <div [innerHTML]="sanitizedContent"></div>
  `
})
export class SafeComponent {
  userInput = '<script>alert("XSS")</script>';
  
  constructor(private sanitizer: DomSanitizer) {}
  
  get sanitizedContent() {
    return this.sanitizer.sanitize(
      SecurityContext.HTML, 
      this.userInput
    );
  }
}

// Angular automatically escapes {{ }} interpolation
// <script> becomes &lt;script&gt;
```

**2. DomSanitizer (When You Need HTML):**
```typescript
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  template: `
    <div [innerHTML]="safeHtml"></div>
    <a [href]="safeUrl">Link</a>
    <iframe [src]="safeUrl"></iframe>
  `
})
export class TrustedComponent {
  constructor(private sanitizer: DomSanitizer) {}
  
  get safeHtml(): SafeHtml {
    const html = '<strong>Trusted HTML</strong>';
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  get safeUrl(): SafeUrl {
    const url = 'https://example.com';
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

// Only use bypassSecurityTrust* with trusted sources!
```

**3. HTTP Security:**
```typescript
// CSRF Protection (automatic with HttpClient)
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })
    )
  ]
};

// HttpClient automatically adds CSRF token to requests
```

**4. Authentication & Authorization:**
```typescript
// auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  // Store attempted URL
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// Route protection
{
  path: 'admin',
  canActivate: [authGuard],
  loadComponent: () => import('./admin/admin.component')
}

// JWT Token Storage
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  
  saveToken(token: string) {
    // ❌ Don't store in localStorage (XSS vulnerable)
    // localStorage.setItem(this.TOKEN_KEY, token);
    
    // ✅ Use httpOnly cookies (set by backend)
    // Or use sessionStorage for temporary tokens
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
}
```

**5. Input Validation:**
```typescript
import { Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="email">
      <input formControlName="age">
    </form>
  `
})
export class SecureFormComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(120)
    ])
  });
  
  submit() {
    if (this.form.invalid) {
      return;  // Block invalid submissions
    }
    
    // Backend should also validate!
    this.http.post('/api/users', this.form.value).subscribe();
  }
}
```

**6. Content Security Policy (CSP):**
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self'; 
               style-src 'self' 'unsafe-inline';
               img-src 'self' https:">
```

**7. Avoid eval() and Dynamic Code:**
```typescript
// ❌ Never use eval
const userCode = "alert('XSS')";
eval(userCode);  // DANGEROUS!

// ❌ Avoid Function constructor
new Function(userCode)();  // DANGEROUS!

// ✅ Use JSON.parse for data
const userData = '{"name": "John"}';
const parsed = JSON.parse(userData);  // Safe
```

**Security Checklist:**
| Threat | Protection | Implementation |
|--------|------------|----------------|
| XSS | Auto-escaping | `{{ }}` interpolation |
| CSRF | Token validation | HttpClient automatic |
| Injection | Input validation | Validators |
| Auth | Guards | CanActivate |
| Secrets | Environment vars | Never in code |

---

### 65. Testing Basics

**What:** Ensure code quality with automated tests

**1. Component Testing:**
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]  // Standalone component
    }).compileComponents();
    
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger initial data binding
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should start with count 0', () => {
    expect(component.count).toBe(0);
  });
  
  it('should increment count', () => {
    component.increment();
    expect(component.count).toBe(1);
  });
  
  it('should display count in template', () => {
    component.count = 5;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('5');
  });
  
  it('should increment on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    
    expect(component.count).toBe(1);
  });
});
```

**2. Service Testing:**
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();  // Ensure no outstanding requests
  });
  
  it('should fetch users', () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ];
    
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });
    
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);  // Send mock response
  });
  
  it('should handle errors', () => {
    service.getUsers().subscribe({
      next: () => fail('should have failed'),
      error: (error) => {
        expect(error.status).toBe(404);
      }
    });
    
    const req = httpMock.expectOne('/api/users');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });
});
```

**3. Testing with Inputs/Outputs:**
```typescript
@Component({
  selector: 'app-child',
  template: `
    <button (click)="handleClick()">Click</button>
  `,
  standalone: true
})
export class ChildComponent {
  @Input() title = '';
  @Output() clicked = new EventEmitter<string>();
  
  handleClick() {
    this.clicked.emit(this.title);
  }
}

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
  });
  
  it('should accept title input', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    
    expect(component.title).toBe('Test Title');
  });
  
  it('should emit clicked event', () => {
    let emittedValue: string | undefined;
    component.clicked.subscribe(value => emittedValue = value);
    
    component.title = 'Hello';
    component.handleClick();
    
    expect(emittedValue).toBe('Hello');
  });
});
```

**4. Testing Async Operations:**
```typescript
import { fakeAsync, tick, flush } from '@angular/core/testing';

describe('AsyncComponent', () => {
  it('should handle setTimeout', fakeAsync(() => {
    let value = false;
    
    setTimeout(() => {
      value = true;
    }, 1000);
    
    expect(value).toBe(false);
    
    tick(1000);  // Fast-forward time
    
    expect(value).toBe(true);
  }));
  
  it('should handle observables', fakeAsync(() => {
    let result: number | undefined;
    
    of(42).pipe(delay(500)).subscribe(val => result = val);
    
    expect(result).toBeUndefined();
    
    tick(500);
    
    expect(result).toBe(42);
  }));
});
```

**5. Mocking Dependencies:**
```typescript
// Mock service
class MockUserService {
  getUsers() {
    return of([{ id: 1, name: 'Mock User' }]);
  }
}

describe('ComponentWithDependency', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
      providers: [
        { provide: UserService, useClass: MockUserService }
      ]
    }).compileComponents();
  });
  
  it('should use mock service', () => {
    const service = TestBed.inject(UserService);
    service.getUsers().subscribe(users => {
      expect(users[0].name).toBe('Mock User');
    });
  });
});
```

**Testing Checklist:**
| Test Type | Tool | Purpose |
|-----------|------|---------|
| Unit | Jasmine/Jest | Individual functions |
| Component | TestBed | Component behavior |
| Service | HttpTestingController | API calls |
| E2E | Playwright/Cypress | User workflows |
| Coverage | Karma/Jest | Code coverage % |

---

### 66. Common Mistakes to Avoid

**What:** Pitfalls that Angular developers should avoid

**1. Memory Leaks (Not Unsubscribing):**
```typescript
// ❌ Memory leak
export class BadComponent implements OnInit {
  ngOnInit() {
    this.service.data$.subscribe(data => {
      console.log(data);
    });
    // Subscription never cleaned up!
  }
}

// ✅ Solution 1: Async pipe
@Component({
  template: `{{ data$ | async }}`
})
export class GoodComponent {
  data$ = this.service.data$;
}

// ✅ Solution 2: takeUntil
export class GoodComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.service.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// ✅ Solution 3: takeUntilDestroyed (Angular 16+)
export class GoodComponent {
  private destroyRef = inject(DestroyRef);
  
  ngOnInit() {
    this.service.data$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => console.log(data));
  }
}
```

**2. Mutating State with OnPush:**
```typescript
// ❌ Mutation doesn't trigger change detection
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadComponent {
  items = [1, 2, 3];
  
  addItem() {
    this.items.push(4);  // View won't update!
  }
}

// ✅ Create new reference
export class GoodComponent {
  items = [1, 2, 3];
  
  addItem() {
    this.items = [...this.items, 4];  // New array reference
  }
}
```

**3. Not Using trackBy:**
```typescript
// ❌ Re-renders entire list on every change
@Component({
  template: `
    <div *ngFor="let item of items">{{ item.name }}</div>
  `
})

// ✅ Track by unique ID
@Component({
  template: `
    <div *ngFor="let item of items; trackBy: trackById">
      {{ item.name }}
    </div>
  `
})
export class GoodComponent {
  items = [{ id: 1, name: 'Item 1' }];
  
  trackById(index: number, item: any) {
    return item.id;
  }
}
```

**4. Using Logic in Templates:**
```typescript
// ❌ Method called on every change detection
@Component({
  template: `
    <div>{{ calculateTotal() }}</div>
    <p>{{ user.getName() }}</p>
  `
})
export class BadComponent {
  calculateTotal() {
    console.log('Calculating...');  // Runs constantly!
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// ✅ Use component property
export class GoodComponent {
  private _total = 0;
  
  get total() {
    return this._total;
  }
  
  updateItems(items: Item[]) {
    this.items = items;
    this._total = items.reduce((sum, item) => sum + item.price, 0);
  }
}

// ✅ Or use signals/computed
export class BetterComponent {
  items = signal<Item[]>([]);
  total = computed(() => 
    this.items().reduce((sum, item) => sum + item.price, 0)
  );
}
```

**5. Not Handling Errors:**
```typescript
// ❌ No error handling
this.http.get('/api/users').subscribe(users => {
  this.users = users;
});

// ✅ Handle errors
this.http.get('/api/users').subscribe({
  next: (users) => {
    this.users = users;
  },
  error: (error) => {
    console.error('Failed to fetch users:', error);
    this.errorMessage = 'Failed to load users';
  }
});

// ✅ Better: Use catchError operator
this.users$ = this.http.get('/api/users').pipe(
  catchError(error => {
    console.error(error);
    return of([]);  // Return empty array
  })
);
```

**6. Circular Dependencies:**
```typescript
// ❌ service-a imports service-b, service-b imports service-a
// service-a.ts
import { ServiceB } from './service-b';

// service-b.ts
import { ServiceA } from './service-a';

// ✅ Solution: Use forwardRef or restructure
@Injectable()
export class ServiceA {
  constructor(@Inject(forwardRef(() => ServiceB)) private serviceB: ServiceB) {}
}

// ✅ Better: Extract shared logic to separate service
@Injectable()
export class SharedService {
  sharedMethod() {}
}

@Injectable()
export class ServiceA {
  constructor(private shared: SharedService) {}
}

@Injectable()
export class ServiceB {
  constructor(private shared: SharedService) {}
}
```

**7. Improper Form Validation:**
```typescript
// ❌ No validation
<input [(ngModel)]="email">

// ✅ Reactive forms with validation
export class GoodComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });
  
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Submit valid data
  }
}
```

**8. Overusing Services in Root:**
```typescript
// ❌ Every service in root (larger bundle)
@Injectable({ providedIn: 'root' })
export class FeatureSpecificService {}

// ✅ Provide in component/module when needed
@Injectable()
export class FeatureSpecificService {}

@Component({
  providers: [FeatureSpecificService]  // Only loaded with component
})
```

**Common Mistakes Summary:**
| Mistake | Impact | Fix |
|---------|--------|-----|
| Not unsubscribing | Memory leaks | async pipe, takeUntil |
| Mutating state | OnPush broken | Immutable updates |
| No trackBy | Poor performance | trackBy function |
| Template methods | Constant execution | Component properties |
| No error handling | Silent failures | catchError, error callback |
| Circular deps | Build errors | Restructure, forwardRef |

**Best Practices Recap:**
```typescript
// ✅ Performance
- Use OnPush change detection
- Add trackBy to *ngFor
- Lazy load routes
- Use async pipe

// ✅ Security
- Never bypass sanitization without review
- Validate all inputs
- Use route guards
- Store tokens securely

// ✅ Testing
- Write unit tests for services
- Test component interactions
- Mock dependencies
- Aim for >80% coverage

// ✅ Code Quality
- Unsubscribe from observables
- Use immutable patterns
- Handle errors properly
- Avoid circular dependencies
```

---

**✅ Section 11 Complete! (66/74 topics)**

Ready for **BONUS: Critical Interview Topics** (8 topics)?

---

## BONUS: CRITICAL INTERVIEW TOPICS

### 67. NgModule vs Standalone

**What:** Two approaches to organizing Angular applications

**NgModule Approach (Traditional):**
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [    // Components, directives, pipes
    AppComponent,
    HeaderComponent
  ],
  imports: [         // Other modules
    BrowserModule,
    FormsModule
  ],
  providers: [       // Services
    UserService
  ],
  bootstrap: [AppComponent]  // Root component
})
export class AppModule {}

// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);
```

**Standalone Approach (Modern):**
```typescript
// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,    // Key difference
  imports: [           // Import dependencies directly
    CommonModule,
    FormsModule,
    HeaderComponent
  ],
  template: `
    <app-header></app-header>
    <input [(ngModel)]="name">
  `
})
export class AppComponent {
  name = '';
}

// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    UserService  // Services here
  ]
});
```

**Feature Module vs Standalone Routes:**
```typescript
// NgModule Approach
// feature.module.ts
@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeatureComponent }
    ])
  ]
})
export class FeatureModule {}

// app-routing.module.ts
{
  path: 'feature',
  loadChildren: () => import('./feature/feature.module')
    .then(m => m.FeatureModule)
}

// Standalone Approach
// feature.routes.ts
export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature.component')
      .then(m => m.FeatureComponent)
  }
];

// app.routes.ts
{
  path: 'feature',
  loadChildren: () => import('./feature/feature.routes')
    .then(m => m.FEATURE_ROUTES)
}
```

**Comparison Table:**
| Feature | NgModule | Standalone |
|---------|----------|------------|
| Setup | Complex (module files) | Simple (no modules) |
| Imports | Centralized in module | Per component |
| Lazy loading | Module-level | Component-level |
| Boilerplate | More | Less |
| Tree-shaking | Good | Better |
| Learning curve | Steeper | Easier |
| Migration | N/A | Gradual possible |
| Future | Legacy | Recommended |

**When to Use:**
- **NgModule**: Legacy projects, large existing codebases
- **Standalone**: New projects (Angular 14+), simpler architecture

**Migration Example:**
```typescript
// Step 1: Convert component to standalone
@Component({
  selector: 'app-user',
  standalone: true,           // Add this
  imports: [CommonModule]     // Add imports
})
export class UserComponent {}

// Step 2: Remove from NgModule declarations
@NgModule({
  declarations: [
    // UserComponent  // Remove
  ],
  imports: [
    UserComponent    // Import as standalone
  ]
})
```

---

### 68. HTTP Interceptors

**What:** Intercept and modify HTTP requests/responses globally

**Functional Interceptor (Angular 15+):**
```typescript
// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get token
  const token = localStorage.getItem('auth_token');
  
  // Clone and modify request
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  
  return next(authReq);
};

// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```

**Logging Interceptor:**
```typescript
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request:', req.method, req.url);
  const startTime = Date.now();
  
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          const elapsed = Date.now() - startTime;
          console.log(`Response: ${req.url} (${elapsed}ms)`);
        }
      },
      error: (error) => {
        console.error('Request failed:', error);
      }
    })
  );
};
```

**Error Handling Interceptor:**
```typescript
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastService = inject(ToastService);
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Unauthorized - redirect to login
        router.navigate(['/login']);
      } else if (error.status === 403) {
        // Forbidden
        toastService.error('Access denied');
      } else if (error.status === 500) {
        // Server error
        toastService.error('Server error. Please try again.');
      }
      
      return throwError(() => error);
    })
  );
};
```

**Retry Interceptor:**
```typescript
export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry({
      count: 3,
      delay: (error, retryCount) => {
        // Only retry on network errors or 5xx
        if (error.status >= 500 || error.status === 0) {
          const delayMs = retryCount * 1000;  // 1s, 2s, 3s
          console.log(`Retry ${retryCount} after ${delayMs}ms`);
          return timer(delayMs);
        }
        return throwError(() => error);
      }
    })
  );
};
```

**Cache Interceptor:**
```typescript
const cache = new Map<string, HttpResponse<any>>();

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }
  
  // Check cache
  const cachedResponse = cache.get(req.url);
  if (cachedResponse) {
    console.log('Returning cached response');
    return of(cachedResponse);
  }
  
  // Make request and cache
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.set(req.url, event);
      }
    })
  );
};
```

**Class-based Interceptor (Legacy):**
```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('auth_token');
    
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    
    return next.handle(authReq);
  }
}

// app.module.ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
```

**Multiple Interceptors (Execution Order):**
```typescript
// app.config.ts
provideHttpClient(
  withInterceptors([
    loggingInterceptor,    // Runs first (request)
    authInterceptor,       // Runs second (request)
    retryInterceptor,      // Runs third (request)
    errorInterceptor       // Runs last (request)
    // Response order is reversed!
  ])
);

// Execution:
// Request: logging → auth → retry → error → HTTP call
// Response: error → retry → auth → logging → component
```

**Interceptor Use Cases:**
| Use Case | Implementation |
|----------|----------------|
| Authentication | Add Bearer token |
| Logging | Log requests/responses |
| Error handling | Global error handling |
| Retry logic | Retry failed requests |
| Caching | Cache GET requests |
| Loading spinner | Show/hide loader |
| URL modification | Add base URL |

---

### 69. ViewEncapsulation

**What:** Controls how component styles are scoped

**1. Emulated (Default):**
```typescript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `<p class="text">Emulated</p>`,
  styles: [`
    .text { color: red; }
  `],
  encapsulation: ViewEncapsulation.Emulated  // Default
})
export class EmulatedComponent {}

// Rendered HTML:
// <app-emulated _ngcontent-c0>
//   <p _ngcontent-c0 class="text">Emulated</p>
// </app-emulated>

// Generated CSS:
// .text[_ngcontent-c0] { color: red; }
// Styles scoped to this component only!
```

**2. None (No Encapsulation):**
```typescript
@Component({
  selector: 'app-none',
  template: `<p class="text">No Encapsulation</p>`,
  styles: [`
    .text { color: blue; }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {}

// Rendered HTML:
// <app-none>
//   <p class="text">No Encapsulation</p>
// </app-none>

// Generated CSS:
// .text { color: blue; }  // No scoping attributes!
// Affects ALL .text elements globally!
```

**3. ShadowDom (Native Shadow DOM):**
```typescript
@Component({
  selector: 'app-shadow',
  template: `<p class="text">Shadow DOM</p>`,
  styles: [`
    .text { color: green; }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {}

// Rendered HTML:
// <app-shadow>
//   #shadow-root (open)
//     <p class="text">Shadow DOM</p>
//     <style>.text { color: green; }</style>
// </app-shadow>

// True isolation with Shadow DOM API
```

**Practical Comparison:**
```typescript
// Parent component
@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      <app-emulated></app-emulated>
      <app-none></app-none>
      <app-shadow></app-shadow>
    </div>
  `,
  styles: [`
    .container { background: lightgray; }
    .text { color: black; }  // Try to override child styles
  `]
})
export class ParentComponent {}

// Results:
// - Emulated: .text stays red (isolated)
// - None: .text becomes black (not isolated, parent wins)
// - ShadowDom: .text stays green (truly isolated)
```

**When to Use:**
| Encapsulation | When to Use | Pros | Cons |
|---------------|-------------|------|------|
| **Emulated** | Default, most cases | Good isolation, works everywhere | Extra attributes in DOM |
| **None** | Global themes, third-party integration | No extra markup | No style isolation |
| **ShadowDom** | Web components, maximum isolation | True isolation | Browser support, global styles don't penetrate |

**Global Styles Penetration:**
```typescript
// styles.css (global)
p { font-size: 16px; }

// Component with Emulated
@Component({
  styles: [`p { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated
})
// Result: Font size applied, color red (component wins)

// Component with ShadowDom
@Component({
  styles: [`p { color: blue; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
// Result: Font size NOT applied, color blue (shadow DOM isolated)
```

**Styling Shadow DOM from Outside:**
```typescript
// Component with ShadowDom
@Component({
  selector: 'app-card',
  template: `<div class="card"><ng-content></ng-content></div>`,
  styles: [`
    :host { display: block; }           // Style host element
    :host(.active) { border: 2px solid blue; }
    :host-context(.dark-theme) { background: black; }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})

// Usage
<app-card class="active">Content</app-card>  // Blue border
<div class="dark-theme">
  <app-card>Content</app-card>  // Black background
</div>
```

**Best Practice:**
```typescript
// ✅ Use default (Emulated) for most components
@Component({
  // encapsulation defaults to Emulated
})

// ✅ Use None for global utilities
@Component({
  selector: 'app-global-toast',
  encapsulation: ViewEncapsulation.None
})

// ✅ Use ShadowDom for web components
@Component({
  selector: 'app-web-component',
  encapsulation: ViewEncapsulation.ShadowDom
})
```

---

### 70. @HostListener & @HostBinding

**What:** Interact with host element from component class

**@HostListener (Listen to Host Events):**
```typescript
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-click-tracker',
  template: `<p>Click count: {{ clickCount }}</p>`
})
export class ClickTrackerComponent {
  clickCount = 0;
  
  // Listen to click events on host element
  @HostListener('click')
  onClick() {
    this.clickCount++;
  }
  
  // Listen with event object
  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    console.log('Mouse entered:', event);
  }
  
  // Listen to window events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized:', window.innerWidth);
  }
  
  // Listen to document events
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      console.log('Escape pressed');
    }
  }
}
```

**@HostBinding (Bind to Host Properties):**
```typescript
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-highlight',
  template: `<p>Hover me!</p>`
})
export class HighlightComponent {
  // Bind to host element's class
  @HostBinding('class.active')
  isActive = false;
  
  // Bind to style property
  @HostBinding('style.backgroundColor')
  backgroundColor = 'white';
  
  // Bind to attribute
  @HostBinding('attr.role')
  role = 'button';
  
  // Bind to tabindex
  @HostBinding('tabindex')
  tabIndex = 0;
  
  @HostListener('mouseenter')
  onEnter() {
    this.isActive = true;
    this.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave')
  onLeave() {
    this.isActive = false;
    this.backgroundColor = 'white';
  }
}

// Rendered:
// <app-highlight class="active" 
//                style="background-color: yellow"
//                role="button" 
//                tabindex="0">
//   <p>Hover me!</p>
// </app-highlight>
```

**Real-World Example - Dropdown:**
```typescript
@Component({
  selector: 'app-dropdown',
  template: `
    <button (click)="toggle()">Toggle</button>
    <div class="menu" *ngIf="isOpen">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class DropdownComponent {
  isOpen = false;
  
  @HostBinding('class.dropdown-open')
  get isOpenClass() {
    return this.isOpen;
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  // Close on outside click
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('app-dropdown');
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
    }
  }
  
  // Close on Escape
  @HostListener('document:keydown.escape')
  onEscape() {
    this.isOpen = false;
  }
}
```

**Directive Example - Tooltip:**
```typescript
@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';
  
  private tooltipElement?: HTMLElement;
  
  @HostListener('mouseenter')
  onMouseEnter() {
    this.showTooltip();
  }
  
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideTooltip();
  }
  
  private showTooltip() {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = 'tooltip';
    this.tooltipElement.textContent = this.tooltipText;
    document.body.appendChild(this.tooltipElement);
  }
  
  private hideTooltip() {
    this.tooltipElement?.remove();
  }
}

// Usage: <button appTooltip="Click me!">Hover</button>
```

**Keyboard Shortcuts:**
```typescript
@Component({
  selector: 'app-shortcuts',
  template: `<p>Press Ctrl+S to save</p>`
})
export class ShortcutsComponent {
  @HostListener('document:keydown.control.s', ['$event'])
  onCtrlS(event: KeyboardEvent) {
    event.preventDefault();
    this.save();
  }
  
  @HostListener('document:keydown.control.z')
  onCtrlZ() {
    this.undo();
  }
  
  @HostListener('document:keydown.control.shift.z')
  onCtrlShiftZ() {
    this.redo();
  }
  
  save() { console.log('Saved!'); }
  undo() { console.log('Undo'); }
  redo() { console.log('Redo'); }
}
```

**Comparison:**
| Decorator | Purpose | Example |
|-----------|---------|---------|
| `@HostListener` | Listen to events | `@HostListener('click')` |
| `@HostBinding` | Bind properties | `@HostBinding('class.active')` |

**Common Event Targets:**
```typescript
@HostListener('click')              // Host element
@HostListener('window:scroll')      // Window
@HostListener('document:keydown')   // Document
@HostListener('mouseenter')         // Host element
@HostListener('keydown.enter')      // Keyboard specific key
```

---

### 71. ElementRef & Renderer2

**What:** Safe DOM manipulation in Angular

**❌ Wrong Way (Direct DOM Access):**
```typescript
@Component({
  selector: 'app-bad',
  template: `<div #myDiv>Content</div>`
})
export class BadComponent {
  @ViewChild('myDiv') myDiv!: ElementRef;
  
  ngAfterViewInit() {
    // ❌ Direct DOM manipulation (unsafe, breaks SSR)
    this.myDiv.nativeElement.style.color = 'red';
    this.myDiv.nativeElement.innerHTML = '<b>Bold</b>';
    document.querySelector('.some-class')!.textContent = 'Changed';
  }
}
```

**✅ Right Way (Renderer2):**
```typescript
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-good',
  template: `<div #myDiv>Content</div>`
})
export class GoodComponent {
  @ViewChild('myDiv') myDiv!: ElementRef;
  
  constructor(private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    const element = this.myDiv.nativeElement;
    
    // ✅ Set style
    this.renderer.setStyle(element, 'color', 'red');
    this.renderer.setStyle(element, 'fontSize', '20px');
    
    // ✅ Add/remove class
    this.renderer.addClass(element, 'active');
    this.renderer.removeClass(element, 'inactive');
    
    // ✅ Set attribute
    this.renderer.setAttribute(element, 'data-id', '123');
    this.renderer.removeAttribute(element, 'disabled');
    
    // ✅ Set property
    this.renderer.setProperty(element, 'textContent', 'New text');
    
    // ✅ Add event listener
    this.renderer.listen(element, 'click', (event) => {
      console.log('Clicked!', event);
    });
  }
}
```

**Common Renderer2 Methods:**
```typescript
export class Renderer2Component {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  
  examples() {
    const element = this.el.nativeElement;
    
    // Create element
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello');
    
    // Append/remove child
    this.renderer.appendChild(element, div);
    this.renderer.removeChild(element, div);
    
    // Insert before
    this.renderer.insertBefore(element, div, element.firstChild);
    
    // Parent/next sibling
    const parent = this.renderer.parentNode(element);
    const next = this.renderer.nextSibling(element);
    
    // Select element
    this.renderer.selectRootElement('#myId');
    
    // Set/remove style
    this.renderer.setStyle(div, 'color', 'red');
    this.renderer.removeStyle(div, 'color');
    
    // Add/remove class
    this.renderer.addClass(div, 'active');
    this.renderer.removeClass(div, 'active');
    
    // Listen to events
    const unlisten = this.renderer.listen(div, 'click', (e) => {
      console.log(e);
    });
    unlisten();  // Remove listener
  }
}
```

**Real-World Example - Dynamic Theme:**
```typescript
@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  setTheme(theme: 'light' | 'dark') {
    const body = this.document.body;
    
    if (theme === 'dark') {
      this.renderer.addClass(body, 'dark-theme');
      this.renderer.removeClass(body, 'light-theme');
    } else {
      this.renderer.addClass(body, 'light-theme');
      this.renderer.removeClass(body, 'dark-theme');
    }
  }
}
```

**Highlight Directive with Renderer2:**
```typescript
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  
  @HostListener('mouseenter')
  onEnter() {
    this.highlight(this.appHighlight);
  }
  
  @HostListener('mouseleave')
  onLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      color
    );
  }
}
```

**Why Renderer2?**
| Reason | Explanation |
|--------|-------------|
| **SSR Safe** | Works with server-side rendering |
| **Platform Independent** | Works on web, mobile, web workers |
| **Security** | Prevents XSS attacks |
| **Testability** | Easier to mock and test |
| **Consistency** | Unified API across platforms |

**ElementRef vs Renderer2:**
```typescript
// ElementRef - Access to native element
@ViewChild('div') divRef!: ElementRef;
const nativeEl = this.divRef.nativeElement;  // Raw DOM element

// ❌ Don't use directly for manipulation
nativeEl.style.color = 'red';

// ✅ Use for reading properties
const width = nativeEl.offsetWidth;
const text = nativeEl.textContent;

// ✅ Use Renderer2 for manipulation
this.renderer.setStyle(nativeEl, 'color', 'red');
```

**Best Practices:**
```typescript
// ✅ Use Renderer2 for DOM manipulation
this.renderer.setStyle(el, 'color', 'red');

// ✅ Use ElementRef for reading
const width = this.el.nativeElement.offsetWidth;

// ✅ Use @HostBinding for simple host properties
@HostBinding('class.active') isActive = true;

// ✅ Use @HostListener for events
@HostListener('click') onClick() {}

// ❌ Avoid direct nativeElement manipulation
this.el.nativeElement.style.color = 'red';  // Bad!
```

---

### 72. APP_INITIALIZER

**What:** Run code before app initialization

**Basic Usage:**
```typescript
import { APP_INITIALIZER } from '@angular/core';

// app.config.ts
export function initializeApp(): () => Promise<void> {
  return () => {
    return new Promise<void>((resolve) => {
      console.log('App initializing...');
      setTimeout(() => {
        console.log('Initialization complete!');
        resolve();
      }, 2000);
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true  // Important: allows multiple initializers
    }
  ]
};
```

**Loading Config Before App Starts:**
```typescript
// config.service.ts
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: any;
  
  constructor(private http: HttpClient) {}
  
  loadConfig(): Promise<void> {
    return this.http.get('/assets/config.json')
      .pipe(
        tap(config => {
          this.config = config;
          console.log('Config loaded:', config);
        })
      )
      .toPromise()
      .then(() => undefined);
  }
  
  get apiUrl() {
    return this.config?.apiUrl;
  }
}

// app.config.ts
export function initializeConfig(configService: ConfigService) {
  return (): Promise<void> => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],  // Inject dependencies
      multi: true
    }
  ]
};
```

**Authentication Check:**
```typescript
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: any;
  
  constructor(private http: HttpClient) {}
  
  checkAuth(): Promise<boolean> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return Promise.resolve(false);
    }
    
    return this.http.get('/api/auth/verify')
      .pipe(
        tap(user => this.currentUser = user),
        map(() => true),
        catchError(() => of(false))
      )
      .toPromise()
      .then(result => result ?? false);
  }
  
  isAuthenticated() {
    return !!this.currentUser;
  }
}

// app.config.ts
function initializeAuth(authService: AuthService) {
  return (): Promise<boolean> => authService.checkAuth();
}

providers: [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeAuth,
    deps: [AuthService],
    multi: true
  }
]
```

**Multiple Initializers (Run in Sequence):**
```typescript
// 1. Load config
function initConfig(config: ConfigService) {
  return () => config.load();
}

// 2. Initialize auth
function initAuth(auth: AuthService) {
  return () => auth.initialize();
}

// 3. Load user preferences
function initPreferences(pref: PreferencesService) {
  return () => pref.load();
}

// app.config.ts
providers: [
  provideHttpClient(),
  {
    provide: APP_INITIALIZER,
    useFactory: initConfig,
    deps: [ConfigService],
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initAuth,
    deps: [AuthService],
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initPreferences,
    deps: [PreferencesService],
    multi: true
  }
]
// All run before app starts, in order
```

**Loading Translations:**
```typescript
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations: any;
  
  constructor(private http: HttpClient) {}
  
  loadTranslations(): Promise<void> {
    const language = localStorage.getItem('language') || 'en';
    
    return this.http.get(`/assets/i18n/${language}.json`)
      .pipe(
        tap(translations => {
          this.translations = translations;
        })
      )
      .toPromise()
      .then(() => undefined);
  }
  
  translate(key: string): string {
    return this.translations?.[key] || key;
  }
}

// app.config.ts
function initTranslations(service: TranslationService) {
  return () => service.loadTranslations();
}
```

**Use Cases:**
| Use Case | Purpose |
|----------|---------|
| Load config | API URLs, feature flags |
| Check auth | Verify user session |
| Load translations | i18n files |
| Initialize analytics | Google Analytics setup |
| Load user preferences | Theme, language |
| Feature flags | Remote config |

**Best Practices:**
```typescript
// ✅ Return Promise or Observable
return service.loadConfig();  // Promise
return service.loadConfig().toPromise();  // Observable to Promise

// ✅ Handle errors gracefully
loadConfig(): Promise<void> {
  return this.http.get('/config').pipe(
    catchError(() => {
      console.error('Failed to load config, using defaults');
      return of(DEFAULT_CONFIG);
    })
  ).toPromise().then(() => undefined);
}

// ✅ Use multi: true
{ provide: APP_INITIALIZER, multi: true }

// ❌ Don't block too long
// Keep initialization fast (< 3 seconds)
```

---

### 73. toSignal() - Observable to Signal

**What:** Convert Observable to Signal (Angular 16+)

**Basic Usage:**
```typescript
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="user() as user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <p *ngIf="loading()">Loading...</p>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class UserComponent {
  private userId$ = new BehaviorSubject(1);
  
  // Convert Observable to Signal
  user = toSignal(
    this.userId$.pipe(
      switchMap(id => this.http.get<User>(`/api/users/${id}`))
    )
  );
  
  // With initial value
  loading = toSignal(
    this.loadingService.isLoading$,
    { initialValue: false }
  );
  
  constructor(private http: HttpClient) {}
  
  loadUser(id: number) {
    this.userId$.next(id);
  }
}
```

**Options:**
```typescript
// 1. With initial value
count = toSignal(count$, { initialValue: 0 });

// 2. Require sync emission (no initial value needed)
count = toSignal(count$, { requireSync: true });

// 3. Custom injector
count = toSignal(count$, { injector: this.injector });

// 4. Manual cleanup
const signal = toSignal(observable$);
// Auto-cleaned when component destroyed
```

**Real-World Examples:**

**1. Search with Debounce:**
```typescript
@Component({
  selector: 'app-search',
  template: `
    <input [ngModel]="searchTerm()" (ngModelChange)="search($event)">
    
    <div *ngFor="let result of results()">
      {{ result.name }}
    </div>
    
    <p *ngIf="loading()">Searching...</p>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SearchComponent {
  private searchTerm$ = new BehaviorSubject('');
  
  searchTerm = toSignal(this.searchTerm$, { initialValue: '' });
  
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => 
        term ? this.http.get<any[]>(`/api/search?q=${term}`) : of([])
      )
    ),
    { initialValue: [] }
  );
  
  loading = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      switchMap(() => of(true)),
      startWith(false)
    ),
    { initialValue: false }
  );
  
  constructor(private http: HttpClient) {}
  
  search(term: string) {
    this.searchTerm$.next(term);
  }
}
```

**2. Real-time Data:**
```typescript
@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Stock Price: ${{ price() }}</h2>
    <p>Last updated: {{ lastUpdate() | date:'medium' }}</p>
  `
})
export class DashboardComponent {
  // WebSocket/Polling observable to signal
  price = toSignal(
    this.stockService.getPrice('AAPL'),
    { initialValue: 0 }
  );
  
  lastUpdate = toSignal(
    this.stockService.getPrice('AAPL').pipe(
      map(() => new Date())
    ),
    { initialValue: new Date() }
  );
  
  constructor(private stockService: StockService) {}
}
```

**3. Combining Signals from Observables:**
```typescript
@Component({
  template: `
    <p>Total: {{ total() }}</p>
  `
})
export class CartComponent {
  items = toSignal(this.cartService.items$, { initialValue: [] });
  discount = toSignal(this.promoService.discount$, { initialValue: 0 });
  
  // Computed signal from converted observables
  total = computed(() => {
    const itemsTotal = this.items().reduce((sum, item) => sum + item.price, 0);
    const discountAmount = itemsTotal * this.discount();
    return itemsTotal - discountAmount;
  });
}
```

**Observable vs Signal:**
```typescript
// ❌ Observable way (manual subscription)
export class ObservableComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.userService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.user = user);
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// ✅ Signal way (auto cleanup)
export class SignalComponent {
  user = toSignal(this.userService.currentUser$);
  // No ngOnDestroy needed!
}
```

**When to Use toSignal:**
| Use Case | Benefit |
|----------|---------|
| Component state | Auto-unsubscribe |
| Template binding | Simpler syntax |
| Computed values | Reactive calculations |
| Combine with signals | Mix observables & signals |
| HTTP responses | One-time values |

**Best Practices:**
```typescript
// ✅ Provide initial value for templates
count = toSignal(count$, { initialValue: 0 });

// ✅ Use with async data
users = toSignal(this.http.get<User[]>('/api/users'));

// ✅ Combine with computed
fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

// ❌ Don't use for events (stick with observables)
// clicks = toSignal(fromEvent(button, 'click'));  // Overkill

// ✅ Use observables for complex async operations
this.data$.pipe(
  debounceTime(300),
  switchMap(...)
).subscribe();
```

---

### 74. Advanced Signals

**What:** Advanced Signal features (Angular 16+)

**1. linkedSignal (Angular 19+):**
```typescript
import { linkedSignal } from '@angular/core';

@Component({
  template: `
    <input [(ngModel)]="userId" type="number">
    <p>User: {{ userName() }}</p>
  `
})
export class LinkedSignalComponent {
  userId = signal(1);
  
  // Derived signal that resets when source changes
  userName = linkedSignal(() => {
    const id = this.userId();
    // Fetch user name based on ID
    return this.fetchUserName(id);
  });
  
  // Alternative: source + computation
  searchTerm = signal('');
  searchResults = linkedSignal({
    source: this.searchTerm,
    computation: (term) => this.search(term)
  });
}
```

**2. untracked() - Read Without Dependency:**
```typescript
import { untracked } from '@angular/core';

@Component({
  selector: 'app-counter'
})
export class CounterComponent {
  count = signal(0);
  lastSaved = signal(0);
  
  // Effect that doesn't track lastSaved
  saveEffect = effect(() => {
    const currentCount = this.count();  // Tracked
    const saved = untracked(() => this.lastSaved());  // Not tracked
    
    if (currentCount !== saved) {
      this.saveToServer(currentCount);
      this.lastSaved.set(currentCount);
    }
    // Only re-runs when count changes, not lastSaved
  });
  
  increment() {
    this.count.update(c => c + 1);
  }
}
```

**3. effect() with Cleanup:**
```typescript
@Component({
  selector: 'app-websocket'
})
export class WebSocketComponent {
  userId = signal(1);
  
  constructor() {
    effect((onCleanup) => {
      const id = this.userId();
      
      // Setup
      const ws = new WebSocket(`ws://api/users/${id}`);
      ws.onmessage = (msg) => console.log(msg);
      
      // Cleanup function
      onCleanup(() => {
        console.log('Closing WebSocket');
        ws.close();
      });
      
      // Cleanup runs when:
      // 1. userId changes (before re-run)
      // 2. Component destroyed
    });
  }
  
  changeUser(id: number) {
    this.userId.set(id);  // Triggers cleanup + re-run
  }
}
```

**4. effect() Timing:**
```typescript
import { effect } from '@angular/core';

@Component({})
export class EffectTimingComponent {
  count = signal(0);
  
  constructor() {
    // Default: runs asynchronously after change detection
    effect(() => {
      console.log('Count:', this.count());
    });
    
    // Manual effect management
    const effectRef = effect(() => {
      console.log('Manual effect:', this.count());
    });
    
    // Destroy effect manually
    effectRef.destroy();
  }
}
```

**5. Signal Equality:**
```typescript
@Component({})
export class SignalEqualityComponent {
  // Default equality (===)
  count = signal(0);
  
  // Custom equality
  user = signal(
    { id: 1, name: 'John' },
    { equal: (a, b) => a.id === b.id }  // Only compare by ID
  );
  
  updateUser() {
    // Won't trigger if ID is same
    this.user.set({ id: 1, name: 'Jane' });  // No update!
    
    // Will trigger (different ID)
    this.user.set({ id: 2, name: 'Jane' });  // Updates!
  }
}
```

**6. Computed with Custom Equality:**
```typescript
@Component({})
export class ComputedEqualityComponent {
  items = signal([
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 }
  ]);
  
  // Only re-computes when total actually changes
  total = computed(
    () => this.items().reduce((sum, item) => sum + item.price, 0),
    { equal: (a, b) => a === b }
  );
  
  updateName() {
    // Won't recalculate total (price unchanged)
    this.items.update(items => 
      items.map(item => item.id === 1 ? { ...item, name: 'New Name' } : item)
    );
  }
}
```

**7. Effect Error Handling:**
```typescript
@Component({})
export class EffectErrorHandlingComponent {
  data = signal<any>(null);
  
  constructor() {
    effect(() => {
      try {
        const value = this.data();
        if (!value) {
          throw new Error('No data');
        }
        console.log('Processing:', value);
      } catch (error) {
        console.error('Effect error:', error);
        // Handle error gracefully
      }
    });
  }
}
```

**8. Batched Updates:**
```typescript
import { batch } from '@angular/core';

@Component({})
export class BatchedUpdatesComponent {
  firstName = signal('John');
  lastName = signal('Doe');
  
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  
  constructor() {
    effect(() => {
      console.log('Full name:', this.fullName());
    });
  }
  
  // ❌ Without batch: effect runs twice
  updateNameSlow() {
    this.firstName.set('Jane');  // Effect runs
    this.lastName.set('Smith');   // Effect runs again
  }
  
  // ✅ With batch: effect runs once
  updateNameFast() {
    batch(() => {
      this.firstName.set('Jane');
      this.lastName.set('Smith');
    });
    // Effect runs once with both updates
  }
}
```

**Advanced Patterns:**
```typescript
// Pattern 1: Lazy computed signal
class LazyComponent {
  expensiveData = signal<any[]>([]);
  
  // Only computes when accessed
  processedData = computed(() => {
    console.log('Computing...');
    return this.expensiveData().map(item => heavyProcessing(item));
  });
  
  // Won't compute until template uses processedData()
}

// Pattern 2: Signal-based state machine
class StateMachineComponent {
  state = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  canLoad = computed(() => this.state() === 'idle');
  isLoading = computed(() => this.state() === 'loading');
  hasError = computed(() => this.state() === 'error');
  
  load() {
    if (!this.canLoad()) return;
    
    this.state.set('loading');
    // Load data...
    this.state.set('success');
  }
}

// Pattern 3: Signal for form state
class FormComponent {
  formData = signal({ name: '', email: '' });
  
  isValid = computed(() => {
    const data = this.formData();
    return data.name.length > 0 && data.email.includes('@');
  });
  
  updateField(field: string, value: string) {
    this.formData.update(data => ({ ...data, [field]: value }));
  }
}
```

**Advanced Signals Summary:**
| Feature | Purpose | Example |
|---------|---------|---------|
| `linkedSignal` | Derived state that resets | User profile based on ID |
| `untracked()` | Read without dependency | Compare current vs saved |
| `effect(onCleanup)` | Cleanup side effects | Close connections |
| Custom equality | Optimize updates | Compare by ID only |
| `batch()` | Group updates | Multiple signal changes |
| Lazy computed | Defer expensive work | Process only when needed |

**Best Practices:**
```typescript
// ✅ Use untracked for comparisons
effect(() => {
  const current = this.value();
  const previous = untracked(() => this.previousValue());
  if (current !== previous) {
    this.onChange(current);
  }
});

// ✅ Cleanup effects
effect((onCleanup) => {
  const sub = this.service.subscribe();
  onCleanup(() => sub.unsubscribe());
});

// ✅ Batch related updates
batch(() => {
  this.signal1.set(value1);
  this.signal2.set(value2);
});

// ✅ Custom equality for objects
signal(obj, { equal: (a, b) => a.id === b.id });

// ❌ Don't mutate signal values
this.items().push(newItem);  // Bad!
this.items.update(items => [...items, newItem]);  // Good!
```

---

**🎉 CONGRATULATIONS! ALL 74 TOPICS COMPLETE! 🎉**

---

## 📚 FINAL SUMMARY

You now have a comprehensive Angular quick reference covering:

**Core Fundamentals (1-8):**
- Data binding, directives, lifecycle hooks, component communication

**Services & Infrastructure (9-18):**
- Dependency injection, routing, forms, HTTP/RxJS

**Advanced Features (19-27):**
- Pipes, change detection, signals, standalone components, content projection

**Best Practices (28-31):**
- Performance, security, testing, common mistakes

**Critical Topics (32-39):**
- NgModule vs Standalone, interceptors, ViewEncapsulation, host decorators, DOM manipulation, APP_INITIALIZER, advanced signals

---

## 🚀 QUICK REFERENCE GUIDE

**Most Used Patterns:**
```typescript
// Component
@Component({ selector: 'app-name', standalone: true, imports: [...] })

// Service
@Injectable({ providedIn: 'root' })

// Signal
count = signal(0);
double = computed(() => this.count() * 2);

// HTTP
this.http.get<T>(url).pipe(catchError(...))

// Forms
form = new FormGroup({ field: new FormControl('', Validators.required) })

// Routing
{ path: 'route', loadComponent: () => import(...) }

// Lifecycle
ngOnInit(), ngOnDestroy(), ngAfterViewInit()

// Communication
@Input(), @Output(), @ViewChild(), Services

// Performance
OnPush, trackBy, lazy loading, async pipe
```

---

**📖 Use this cheat sheet for daily quick lookups while coding!**

**💡 Tip:** Ctrl+F to search for specific topics instantly!
