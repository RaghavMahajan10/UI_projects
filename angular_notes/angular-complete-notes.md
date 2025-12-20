# 📘 ANGULAR COMPLETE INTERVIEW-READY NOTES

> **Goal:** Deep Understanding + Practical Application + Interview Confidence

**Can you answer:**
- ✅ Can I explain it simply?
- ✅ Can I write code without copy-paste?
- ✅ Can I debug it?
- ✅ Can I explain WHY this approach is better?
- ✅ Can I answer "what if" questions?

---

## 📚 TABLE OF CONTENTS

### **SECTION 1: DATA BINDING FUNDAMENTALS**
1. [Interpolation](#1-interpolation)
2. [Property Binding](#2-property-binding)
3. [Event Binding](#3-event-binding)
4. [Keyboard Events](#4-keyboard-events)
5. [Event Object ($event)](#5-event-object-event)
6. [Two-Way Binding (ngModel)](#6-two-way-binding-ngmodel)

### **SECTION 2: DIRECTIVES**
7. [What are Directives](#7-directives-overview)
8. [*ngIf Directive](#8-ngif-directive)
9. [@if and @else (Angular 17+)](#9-if-and-else-angular-17)
10. [*ngFor Directive](#10-ngfor-directive)
11. [@for Loop (Angular 17+)](#11-for-loop-angular-17)
12. [*ngSwitch Directive](#12-ngswitch-directive)
13. [@switch (Angular 17+)](#13-switch-angular-17)
14. [ngClass Directive](#14-ngclass-directive)
15. [ngStyle Directive](#15-ngstyle-directive)
16. [ng-container](#16-ng-container)
17. [ng-template & ngTemplateOutlet](#17-ng-template-ngtemplateoutlet)

### **SECTION 3: COMPONENT LIFECYCLE**
18. [Lifecycle Hooks Overview](#18-lifecycle-hooks-overview)
19. [Constructor vs ngOnInit](#19-constructor-vs-ngoninit)
20. [ngOnChanges](#20-ngonchanges)
21. [ngDoCheck](#21-ngdocheck)
22. [ngAfterViewInit & ngAfterViewChecked](#22-ngafterviewinit-ngafterviewchecked)
23. [ngAfterContentInit & ngAfterContentChecked](#23-ngaftercontentinit-ngaftercontentchecked)
24. [ngOnDestroy](#24-ngondestroy)

### **SECTION 4: COMPONENT COMMUNICATION**
25. [Decorators Overview](#25-decorators-overview)
26. [@Input() - Parent to Child](#26-input-parent-to-child)
27. [@Output() & EventEmitter - Child to Parent](#27-output-eventemitter-child-to-parent)
28. [@ViewChild & @ViewChildren](#28-viewchild-viewchildren)
29. [@ContentChild & @ContentChildren](#29-contentchild-contentchildren)
30. [Template Reference Variables](#30-template-reference-variables)

### **SECTION 5: SERVICES & DEPENDENCY INJECTION**
31. [What are Services](#31-services-overview)
32. [Dependency Injection (DI)](#32-dependency-injection)
33. [Injectable & Provider Scope](#33-injectable-provider-scope)
34. [Service Communication Patterns](#34-service-communication-patterns)

### **SECTION 6: ROUTING**
35. [Angular Router Basics](#35-router-basics)
36. [Route Parameters](#36-route-parameters)
37. [Query Parameters](#37-query-parameters)
38. [Child Routes](#38-child-routes)
39. [Route Guards](#39-route-guards)
40. [Lazy Loading](#40-lazy-loading)
41. [Preloading Strategies](#41-preloading-strategies)

### **SECTION 7: FORMS**
42. [Template-Driven Forms](#42-template-driven-forms)
43. [Reactive Forms](#43-reactive-forms)
44. [Form Validation](#44-form-validation)
45. [Custom Validators](#45-custom-validators)
46. [Dynamic Forms](#46-dynamic-forms)

### **SECTION 8: HTTP & OBSERVABLES**
47. [HttpClient Basics](#47-httpclient-basics)
48. [HTTP Methods (GET, POST, PUT, DELETE)](#48-http-methods)
49. [RxJS Observables](#49-rxjs-observables)
50. [Common RxJS Operators](#50-rxjs-operators)
51. [Subject, BehaviorSubject, ReplaySubject](#51-subjects)
52. [Error Handling](#52-error-handling)

### **SECTION 9: PIPES**
53. [Built-in Pipes](#53-built-in-pipes)
54. [Custom Pipes](#54-custom-pipes)
55. [Pure vs Impure Pipes](#55-pure-vs-impure-pipes)

### **SECTION 10: ADVANCED CONCEPTS**
56. [Change Detection](#56-change-detection)
57. [Signals (Angular 16+)](#57-signals)
58. [Standalone Components](#58-standalone-components)
59. [Content Projection (ng-content)](#59-content-projection)
60. [Dynamic Components](#60-dynamic-components)

### **SECTION 11: BEST PRACTICES & OPTIMIZATION**
61. [Performance Optimization](#61-performance-optimization)
62. [Security Best Practices](#62-security-best-practices)
63. [Testing Basics](#63-testing-basics)
64. [Common Mistakes & Solutions](#64-common-mistakes)

---

## **PROGRESS TRACKER**
- ✅ Table of Contents Created
- ⏳ Section 1: Data Binding (In Progress)
- ⬜ Section 2: Directives
- ⬜ Section 3: Lifecycle
- ⬜ Section 4: Communication
- ⬜ Section 5: Services & DI
- ⬜ Section 6: Routing
- ⬜ Section 7: Forms
- ⬜ Section 8: HTTP & RxJS
- ⬜ Section 9: Pipes
- ⬜ Section 10: Advanced
- ⬜ Section 11: Best Practices

---

# SECTION 1: DATA BINDING FUNDAMENTALS

*Building blocks of Angular - How data flows between TypeScript and HTML*

---

## 1. INTERPOLATION

### 🎯 Simple Definition
Interpolation is a **one-way data binding** technique that displays component data in the HTML template using double curly braces `{{ }}`. It converts TypeScript values to strings and renders them in the view.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Display dynamic text (usernames, titles, messages)
- Show calculated values (totals, counts, percentages)
- Display object properties
- Show formatted data with pipes

**Benefits:**
- ✅ Simple, readable syntax
- ✅ Automatic updates when data changes
- ✅ Type-safe with TypeScript
- ✅ Can use expressions and calculations
- ✅ Works with pipes for formatting

### ⏰ When to Use It

```typescript
✅ Use Interpolation When:
- Displaying text content
- Showing simple calculations: {{ price * quantity }}
- Using ternary operators: {{ isLoggedIn ? 'Logout' : 'Login' }}
- Calling getter methods: {{ fullName }}

❌ Don't Use When:
- Setting element properties → Use Property Binding []
- Complex logic needed → Move to component
- Setting HTML attributes → Use Attribute Binding [attr.]
- Boolean/number properties → Use Property Binding
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Complex logic in template
{{ getUserName().toUpperCase().split(' ')[0] + (age > 18 ? ' (Adult)' : ' (Minor)') }}

// ✅ CORRECT: Logic in component
{{ displayName }}  // Computed in component/getter

// ❌ MISTAKE 2: Modifying data (side effects)
{{ items.push(newItem) }}  // Not allowed!
{{ count++ }}              // Not allowed!

// ✅ CORRECT: Read-only operations
{{ items.length }}
{{ count + 1 }}

// ❌ MISTAKE 3: Using for boolean properties
<button disabled="{{ isDisabled }}">  // Always disabled (string "true")

// ✅ CORRECT: Use property binding
<button [disabled]="isDisabled">     // Properly disabled

// ❌ MISTAKE 4: Forgetting null safety
{{ user.address.city }}  // Error if user is null

// ✅ CORRECT: Optional chaining
{{ user?.address?.city || 'Unknown' }}
```

### 📝 How to Use It

**Basic Syntax:**
```typescript
// Component (app.component.ts)
export class UserComponent {
  userName: string = 'Rahul Sharma';
  age: number = 25;
  salary: number = 50000;
  isActive: boolean = true;
  
  get displayName(): string {
    return this.userName.toUpperCase();
  }
  
  getGreeting(): string {
    return `Welcome, ${this.userName}!`;
  }
}
```

```html
<!-- Template (app.component.html) -->
<h1>{{ userName }}</h1>
<p>Age: {{ age }} years</p>
<p>Salary: {{ salary | currency:'INR' }}</p>
<p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
<p>{{ displayName }}</p>
<p>{{ getGreeting() }}</p>
```

**With Expressions:**
```html
<!-- Math operations -->
<p>Total: {{ price * quantity }}</p>
<p>Discount: {{ price * 0.1 }}</p>

<!-- String concatenation -->
<p>Full Name: {{ firstName + ' ' + lastName }}</p>

<!-- Ternary operator -->
<p>Status: {{ age >= 18 ? 'Adult' : 'Minor' }}</p>

<!-- Method calls -->
<p>{{ getUserGreeting() }}</p>

<!-- With Pipes -->
<p>{{ todayDate | date:'dd/MM/yyyy' }}</p>
<p>{{ userName | uppercase }}</p>
<p>{{ price | currency:'INR':'symbol':'1.2-2' }}</p>
```

**Real-World Example:**
```typescript
// Component
export class ProductComponent {
  product = {
    name: 'iPhone 15 Pro',
    price: 134900,
    discount: 10,
    inStock: true
  };
  
  get finalPrice(): number {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
  
  get discountLabel(): string {
    return `${this.product.discount}% OFF`;
  }
}
```

```html
<!-- Template -->
<div class="product-card">
  <h2>{{ product.name }}</h2>
  <p class="price">
    <span class="original">₹{{ product.price }}</span>
    <span class="final">₹{{ finalPrice }}</span>
  </p>
  <span class="discount-badge">{{ discountLabel }}</span>
  <p class="stock">
    {{ product.inStock ? '✅ In Stock' : '❌ Out of Stock' }}
  </p>
</div>
```

### 🆚 Interpolation vs Property Binding

| Feature | Interpolation `{{ }}` | Property Binding `[]` |
|---------|----------------------|----------------------|
| **Purpose** | Display text content | Set element properties |
| **Returns** | Always string | Original type preserved |
| **Data Flow** | Component → View | Component → View |
| **Use for** | Text, numbers, strings | Attributes, properties, DOM properties |
| **Example** | `<p>{{ name }}</p>` | `<img [src]="url">` |
| **Type Safety** | Converts to string | Preserves type |

**Practical Example:**
```typescript
count: number = 5;
isDisabled: boolean = true;

// ❌ WRONG - Boolean becomes string "true" (truthy)
<button disabled="{{ isDisabled }}">Click</button>  
// Result: <button disabled="true"> - Always disabled!

// ✅ CORRECT - Boolean value preserved
<button [disabled]="isDisabled">Click</button>
// Result: <button disabled> or <button>

// Both work for display, but interpolation is cleaner
<p>{{ count }}</p>        // ✅ Preferred
<p [textContent]="count"></p>  // ✅ Works but verbose
```

### 🎤 Important Interview Q&A

**Q1: What is interpolation in Angular?**
```
A: Interpolation is a one-way data binding technique that uses {{ }} 
to display component data in templates. It converts expressions to 
strings and automatically updates the view when data changes.

Flow: Component → Template
```

**Q2: Can you use interpolation for setting element properties?**
```
A: Technically yes for string properties, but NOT recommended for 
non-string values like booleans, numbers, or objects.

Example:
❌ <button disabled="{{ isDisabled }}">  // String "true" is truthy
✅ <button [disabled]="isDisabled">      // Boolean value

Reason: Interpolation always converts to string, losing type information.
```

**Q3: What's the difference between interpolation and property binding?**
```
A: Both are one-way bindings (Component → View), but:

1. Interpolation {{ }}:
   - Converts to string
   - For displaying text
   - Cleaner for text content

2. Property Binding []:
   - Preserves data type
   - For setting properties
   - Required for non-string values

Use Case:
- Display text → {{ }}
- Set src, href, disabled → []
```

**Q4: Can you perform operations in interpolation?**
```
A: Yes, but keep it simple!

✅ Good:
{{ price * quantity }}
{{ name.toUpperCase() }}
{{ items.length }}

❌ Bad - Complex logic:
{{ calculateTax(price, (category === 'electronics' ? 0.18 : 0.05)) }}

Best Practice: Move complex logic to component methods or getters.
```

**Q5: What happens if interpolated value is null/undefined?**
```
A: Angular displays empty string (no error thrown).

Best Practices:
{{ userName || 'Guest' }}           // Default value
{{ userData?.name }}                // Optional chaining
{{ userData?.name || 'Unknown' }}   // Both combined
```

**Q6: Can you use pipes with interpolation?**
```
A: Yes! Very common and recommended pattern.

{{ price | currency:'INR' }}
{{ todayDate | date:'dd/MM/yyyy' }}
{{ userName | titlecase }}
{{ data | json }}  // Debugging
```

**Q7: Can interpolation modify component data?**
```
A: No! Interpolation expressions must be side-effect free.

❌ Not Allowed:
{{ count++ }}
{{ items.push(newItem) }}
{{ user.name = 'New Name' }}

✅ Allowed (Read-only):
{{ count + 1 }}
{{ items.length }}
{{ user.name }}
```

**Q8: What's the performance impact of calling methods in interpolation?**
```
A: Methods are called on every change detection cycle!

❌ Bad Performance:
<p>{{ calculateExpensiveOperation() }}</p>
// Called multiple times per second!

✅ Better - Use Getters:
get calculatedValue(): number {
  return this.expensiveOperation();
}
<p>{{ calculatedValue }}</p>

✅ Best - Cache the value:
ngOnInit() {
  this.calculatedValue = this.expensiveOperation();
}
```

### 💡 Pro Tips

**1. Use Getters for Computed Values**
```typescript
// ❌ Method call (runs on every change detection)
getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
<p>{{ getFullName() }}</p>

// ✅ Getter (memoized by Angular)
get fullName(): string {
  return `${this.firstName} ${this.lastName}`;
}
<p>{{ fullName }}</p>
```

**2. Safe Navigation for Nested Properties**
```html
<!-- ❌ Crashes if user is null -->
{{ user.address.city }}

<!-- ✅ Safe with optional chaining -->
{{ user?.address?.city }}

<!-- ✅ With fallback -->
{{ user?.address?.city || 'Unknown City' }}
```

**3. Keep Templates Clean**
```html
<!-- ❌ Too complex -->
{{ (items | filter:searchTerm).length > 0 ? (items | filter:searchTerm)[0].name : 'No items' }}

<!-- ✅ Move to component -->
{{ firstFilteredItemName }}

// Component
get firstFilteredItemName(): string {
  const filtered = this.items.filter(item => item.includes(this.searchTerm));
  return filtered.length > 0 ? filtered[0].name : 'No items';
}
```

**4. Use Pipes for Formatting**
```html
<!-- ❌ Manual formatting -->
{{ '$' + price.toFixed(2) }}

<!-- ✅ Use currency pipe -->
{{ price | currency:'USD':'symbol':'1.2-2' }}
```

### 🧪 Can You Answer These?

1. ❓ Why does `{{ isActive }}` show "true" as text instead of boolean behavior?
2. ❓ When would you choose property binding over interpolation?
3. ❓ How do you handle null/undefined safely in interpolation?
4. ❓ Can you modify array/object inside interpolation? Why/why not?
5. ❓ What's the performance difference between methods and getters in templates?

---

## 2. PROPERTY BINDING

### 🎯 Simple Definition
Property binding uses **square brackets `[]`** to set HTML element properties or component properties dynamically from component data. It's a one-way binding that flows data from component to view while preserving data types.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Setting image sources: `[src]="imageUrl"`
- Disabling/enabling buttons: `[disabled]="!isValid"`
- Setting CSS classes: `[class.active]="isActive"`
- Binding styles: `[style.color]="textColor"`
- Passing data to child components: `[userData]="user"`
- Setting link hrefs: `[href]="externalUrl"`
- Dynamic attributes: `[attr.aria-label]="label"`

**Benefits:**
- ✅ Preserves data types (boolean, number, object, array)
- ✅ Type-safe binding
- ✅ One-way data flow (predictable)
- ✅ Works with any DOM property
- ✅ Can bind to component @Input() properties

### ⏰ When to Use It

```typescript
✅ Use Property Binding When:
- Setting non-string values (boolean, number, object)
- Binding to DOM properties (src, href, disabled, value)
- Passing data to child components
- Dynamic styling with [style.property]
- Dynamic classes with [class.className]
- Setting custom attributes with [attr.name]

❌ Don't Use When:
- Just displaying text → Use interpolation {{ }}
- Two-way binding needed → Use [(ngModel)]
- Setting static values → Use regular HTML attributes
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Using for text content
<p [innerText]="message"></p>  // Overcomplicated
<p>{{ message }}</p>            // ✅ Better

// ❌ MISTAKE 2: Quotes inside brackets treat as string literal
<img [src]="'imageUrl'">   // String literal "imageUrl"
<img [src]="imageUrl">     // ✅ Variable binding

// ❌ MISTAKE 3: Boolean as string
<button [disabled]="'true'">   // String 'true' is truthy, always disabled!
<button [disabled]="true">     // ✅ Boolean value
<button [disabled]="isDisabled">  // ✅ Variable

// ❌ MISTAKE 4: Forgetting brackets for dynamic values
<img src="imageUrl">      // Literal string "imageUrl"
<img [src]="imageUrl">    // ✅ Variable binding

// ❌ MISTAKE 5: Wrong attribute vs property
<td [colspan]="2">        // DOM property (works)
<td [attr.colspan]="2">   // ✅ HTML attribute (correct for colspan)

// ❌ MISTAKE 6: Binding to non-existent properties
<div [customProp]="value">  // Error! Not a DOM property
<div [attr.data-custom]="value">  // ✅ Custom attribute
```

### 📝 How to Use It

**Basic Syntax:**
```typescript
// Component (app.component.ts)
export class ProductComponent {
  productImage: string = 'assets/laptop.jpg';
  isAvailable: boolean = true;
  maxQuantity: number = 10;
  productPrice: number = 50000;
  productData: any = { name: 'Laptop', price: 50000 };
}
```

```html
<!-- Template (app.component.html) -->
<img [src]="productImage" [alt]="productData.name">
<button [disabled]="!isAvailable">Add to Cart</button>
<input type="number" [max]="maxQuantity" [value]="1">
<p [textContent]="productData.name"></p>
```

**Common Property Bindings:**

```html
<!-- Image Properties -->
<img [src]="userProfile.photo" 
     [alt]="userProfile.name"
     [width]="200"
     [height]="200">

<!-- Links -->
<a [href]="externalLink" 
   [target]="'_blank'"
   [title]="linkTitle">Visit Website</a>

<!-- Form Controls -->
<input [value]="userName" 
       [disabled]="isReadOnly"
       [placeholder]="placeholderText"
       [type]="inputType">

<textarea [rows]="textAreaRows"
          [maxlength]="maxLength"
          [readonly]="isLocked"></textarea>

<!-- Button States -->
<button [disabled]="!isValid || isSubmitting"
        [type]="buttonType">
  Submit
</button>

<!-- Attributes (use attr. prefix) -->
<button [attr.aria-label]="buttonLabel"
        [attr.data-id]="productId"
        [attr.role]="'button'">
  Click Me
</button>

<td [attr.colspan]="columnSpan"
    [attr.rowspan]="rowSpan">
  Cell Content
</td>

<!-- Individual Style Properties -->
<div [style.color]="textColor"
     [style.font-size.px]="fontSize"
     [style.background-color]="bgColor"
     [style.width.%]="widthPercent">
</div>

<!-- Individual Class Binding -->
<div [class.active]="isActive"
     [class.disabled]="isDisabled"
     [class.highlighted]="isImportant"
     [class.error]="hasError">
</div>
```

**Passing Data to Child Components:**

```typescript
// Parent Component
@Component({
  selector: 'app-parent',
  template: `
    <app-user-profile 
      [userData]="user"
      [isEditable]="true"
      [theme]="'dark'">
    </app-user-profile>
  `
})
export class ParentComponent {
  user = {
    name: 'Rahul',
    age: 25,
    email: 'rahul@example.com'
  };
}

// Child Component
@Component({
  selector: 'app-user-profile'
})
export class UserProfileComponent {
  @Input() userData: any;
  @Input() isEditable: boolean = false;
  @Input() theme: string = 'light';
}
```

**Real-World Example:**

```typescript
// Component
export class ProductCardComponent {
  product = {
    id: 101,
    name: 'Wireless Mouse',
    image: 'assets/mouse.jpg',
    price: 599,
    inStock: true,
    rating: 4.5,
    discount: 10
  };
  
  isWishlisted: boolean = false;
  
  get discountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
  
  get stockStatus(): string {
    return this.product.inStock ? 'In Stock' : 'Out of Stock';
  }
}
```

```html
<!-- Template -->
<div class="product-card" [attr.data-product-id]="product.id">
  <img [src]="product.image" 
       [alt]="product.name"
       [class.out-of-stock]="!product.inStock">
  
  <h3 [textContent]="product.name"></h3>
  
  <div class="price-section">
    <span class="original" 
          [style.text-decoration]="product.discount > 0 ? 'line-through' : 'none'">
      ₹{{ product.price }}
    </span>
    <span class="final" 
          [style.color]="product.discount > 0 ? 'red' : 'black'">
      ₹{{ discountedPrice }}
    </span>
  </div>
  
  <p [class.in-stock]="product.inStock"
     [class.out-of-stock]="!product.inStock">
    {{ stockStatus }}
  </p>
  
  <button [disabled]="!product.inStock"
          [attr.aria-label]="'Add ' + product.name + ' to cart'">
    Add to Cart
  </button>
  
  <button [class.wishlisted]="isWishlisted"
          [attr.aria-pressed]="isWishlisted">
    {{ isWishlisted ? '❤️' : '🤍' }}
  </button>
</div>
```

### 🆚 Property Binding vs Attribute Binding

| Aspect | Property Binding `[property]` | Attribute Binding `[attr.attribute]` |
|--------|------------------------------|--------------------------------------|
| **Binds to** | DOM property (JavaScript object) | HTML attribute |
| **Example** | `[disabled]`, `[value]`, `[src]` | `[attr.colspan]`, `[attr.aria-label]` |
| **When to use** | DOM property exists | No corresponding DOM property |
| **Common uses** | Standard HTML properties | Custom attributes, ARIA, data-* |

```html
<!-- Property Binding (DOM property exists) -->
<input [value]="userName">        <!-- input.value property -->
<img [src]="imageUrl">             <!-- img.src property -->
<button [disabled]="isDisabled">  <!-- button.disabled property -->

<!-- Attribute Binding (No DOM property) -->
<td [attr.colspan]="2">            <!-- HTML colspan attribute -->
<button [attr.aria-label]="label"> <!-- ARIA attribute -->
<div [attr.data-id]="userId">      <!-- Custom data attribute -->
```

### 🎤 Important Interview Q&A

**Q1: What is property binding in Angular?**
```
A: Property binding is a one-way data binding technique using square 
brackets [] to set DOM properties or component @Input() properties 
dynamically. It preserves data types and flows data from component to view.

Syntax: [property]="expression"
Flow: Component → View
```

**Q2: Difference between property binding and attribute binding?**
```
A: 
PROPERTY BINDING [property]:
- Binds to DOM object property (JavaScript)
- Example: [disabled], [value], [src]
- Use when DOM property exists

ATTRIBUTE BINDING [attr.attribute]:
- Binds to HTML attribute
- Example: [attr.colspan], [attr.aria-label], [attr.data-*]
- Use when no corresponding DOM property exists

Key: Not all HTML attributes have corresponding DOM properties!

Example:
<button [disabled]="true">      // Property binding
<td [attr.colspan]="2">          // Attribute binding (no colspan property)
```

**Q3: Can you bind to custom properties?**
```
A: Yes, in two ways:

1. For child component @Input():
   <app-child [customProp]="data"></app-child>

2. For custom HTML attributes (use attr.):
   <div [attr.data-user-id]="userId"
        [attr.custom-attr]="value">
   </div>
```

**Q4: What's the difference between [class] and [className]?**
```
A: 
[class]="string" → Sets entire class string (replaces all)
[className]="string" → Alias for [class]
[class.className]="boolean" → Toggles single class

Examples:
[class]="'btn btn-primary'"        // Sets all classes
[class.active]="isActive"          // Toggles 'active' only
[class.disabled]="!isEnabled"      // Toggles 'disabled'

Best Practice: Use [class.name] for conditional classes
```

**Q5: Why use property binding instead of interpolation for src?**
```
A: Security and timing!

❌ <img src="{{ imageUrl }}">  
   - Initially shows broken image
   - Briefly shows {{imageUrl}} as text
   - Security risk with dynamic URLs

✅ <img [src]="imageUrl">
   - Angular waits until value is ready
   - Safer for dynamic URLs
   - No intermediate rendering issues
```

**Q6: How do you bind style properties with units?**
```
A: Two ways:

1. Dot notation with unit:
   [style.width.px]="widthValue"
   [style.height.%]="heightPercent"
   [style.margin.rem]="marginValue"

2. String with units:
   [style.width]="widthValue + 'px'"
   [style.font-size]="fontSize + 'rem'"

Preferred: Method 1 (cleaner, type-safe)
```

**Q7: Can you bind multiple classes/styles at once?**
```
A: Yes! Using ngClass and ngStyle:

// Multiple classes
[ngClass]="{'active': isActive, 'disabled': !isEnabled}"
[ngClass]="classObject"  // From component

// Multiple styles
[ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}"
[ngStyle]="styleObject"  // From component

// Component
styleObject = {
  color: 'red',
  'font-size': '16px',
  'font-weight': 'bold'
};
```

**Q8: What happens if you bind null or undefined?**
```
A: Depends on the property:

[src]="null"           → Empty string, broken image
[disabled]="null"      → false (not disabled)
[value]="undefined"    → Empty string
[class.active]="null"  → Class removed

Best Practice: Provide defaults
[src]="imageUrl || 'assets/placeholder.jpg'"
[disabled]="isDisabled ?? false"
```

### 💡 Pro Tips

**1. Conditional Property Binding**
```typescript
// Multiple conditions
<button [disabled]="!isValid || isSubmitting || hasErrors">
  Submit
</button>

// Better: Use getter
get canSubmit(): boolean {
  return this.isValid && !this.isSubmitting && !this.hasErrors;
}

<button [disabled]="!canSubmit">Submit</button>
```

**2. Binding Multiple Properties Elegantly**
```html
<img [src]="product.image"
     [alt]="product.name"
     [title]="product.description"
     [width]="imageSize"
     [class.out-of-stock]="!product.available"
     [class.featured]="product.isFeatured">
```

**3. Using Getters for Complex Bindings**
```typescript
export class Component {
  product: any;
  
  get productImage(): string {
    return this.product?.image || 'assets/placeholder.jpg';
  }
  
  get isDiscounted(): boolean {
    return this.product?.discount > 0;
  }
  
  get priceColor(): string {
    return this.isDiscounted ? 'red' : 'black';
  }
}

// Clean template
<img [src]="productImage">
<span [style.color]="priceColor">{{ product.price }}</span>
```

**4. Avoid innerHTML Binding (Security)**
```html
<!-- ❌ Security risk - XSS vulnerability -->
<div [innerHTML]="userGeneratedContent"></div>

<!-- ✅ Use text content -->
<div>{{ userGeneratedContent }}</div>

<!-- ✅ Or sanitize first -->
<div [innerHTML]="sanitizedContent"></div>

// Component
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

get sanitizedContent() {
  return this.sanitizer.sanitize(SecurityContext.HTML, this.content);
}
```

### 🧪 Can You Answer These?

1. ❓ What's the difference between `[disabled]="false"` and `disabled="false"`?
2. ❓ When would you use `[attr.colspan]` instead of `[colspan]`?
3. ❓ Can you bind to innerHTML? Is it safe?
4. ❓ How do you bind CSS custom properties (CSS variables)?
5. ❓ What happens when you bind an object to [value]?

---

## 3. EVENT BINDING

### 🎯 Simple Definition
Event binding allows you to **listen to user actions** (clicks, key presses, mouse movements) and execute component methods in response. Uses parentheses `()` syntax to capture events from the view and send them to the component.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Button clicks: `(click)="handleClick()"`
- Form submissions: `(submit)="onSubmit()"`
- Mouse events: `(mouseenter)`, `(mouseleave)`
- Input changes: `(input)`, `(change)`
- Keyboard events: `(keyup)`, `(keydown)`
- Touch events: `(touchstart)`, `(touchend)`
- Custom component events: `(notify)="handleNotification()"`

**Benefits:**
- ✅ Declarative event handling
- ✅ Clean separation of view and logic
- ✅ Type-safe method calls
- ✅ Can pass event object: `$event`
- ✅ Can pass parameters to methods
- ✅ Multiple events on same element

### ⏰ When to Use It

```typescript
✅ Use Event Binding When:
- Handling user interactions (clicks, typing, etc.)
- Form submissions
- Custom component events (@Output)
- Responding to DOM events
- Triggering component logic from template

❌ Don't Use When:
- Need to display data → Use interpolation {{ }}
- Setting properties → Use property binding []
- Two-way data flow → Use [(ngModel)]
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting parentheses on method
<button (click)="handleClick">Click</button>  // Method not called!
<button (click)="handleClick()">Click</button>  // ✅ Correct

// ❌ MISTAKE 2: Using quotes incorrectly
<button (click)="'handleClick()'">Click</button>  // String literal!
<button (click)="handleClick()">Click</button>     // ✅ Correct

// ❌ MISTAKE 3: Heavy logic in template
<button (click)="this.user.orders.filter(o => o.status === 'pending').length > 0 ? showOrders() : alert('No orders')">
  // Too complex! Move to component
</button>

// ✅ CORRECT
<button (click)="handleOrders()">Show Orders</button>
// Component method handles complexity

// ❌ MISTAKE 4: Typo in event name
<button (onclick)="handleClick()">  // Wrong! Use (click)
<button (clickEvent)="handleClick()">  // Wrong!
<button (click)="handleClick()">    // ✅ Correct

// ❌ MISTAKE 5: Side effects without $event when needed
<input (input)="updateValue()">  // How to get input value?
<input (input)="updateValue($event)">  // ✅ Pass $event

// ❌ MISTAKE 6: Multiple statements without semicolon
<button (click)="count++ isActive = true">  // Error!
<button (click)="count++; isActive = true">  // ✅ Use semicolon
```

### 📝 How to Use It

**Basic Syntax:**

```typescript
// Component
export class AppComponent {
  counter: number = 0;
  message: string = '';
  
  increment() {
    this.counter++;
    console.log('Counter:', this.counter);
  }
  
  showMessage(msg: string) {
    this.message = msg;
    alert(msg);
  }
  
  handleClick() {
    console.log('Button clicked!');
  }
}
```

```html
<!-- Template -->
<button (click)="increment()">Increment</button>
<button (click)="showMessage('Hello!')">Show Message</button>
<button (click)="handleClick()">Click Me</button>
```

**Common Mouse Events:**

```html
<!-- Click Events -->
<button (click)="onClick()">Single Click</button>
<button (dblclick)="onDoubleClick()">Double Click</button>

<!-- Mouse Movement -->
<div (mouseenter)="onMouseEnter()"
     (mouseleave)="onMouseLeave()"
     (mousemove)="onMouseMove($event)">
  Hover over me!
</div>

<!-- Mouse Buttons -->
<div (mousedown)="onMouseDown($event)"
     (mouseup)="onMouseUp($event)">
  Press mouse button
</div>

<!-- Context Menu (Right Click) -->
<div (contextmenu)="onRightClick($event)">
  Right click me
</div>
```

**Real-World Examples:**

**Example 1: Like Button (Instagram Style)**
```typescript
export class PostComponent {
  isLiked: boolean = false;
  likeCount: number = 245;
  
  toggleLike() {
    if (this.isLiked) {
      this.likeCount--;
      this.isLiked = false;
    } else {
      this.likeCount++;
      this.isLiked = true;
    }
  }
}
```

```html
<div class="post">
  <button (click)="toggleLike()" 
          [class.liked]="isLiked">
    {{ isLiked ? '❤️ Liked' : '🤍 Like' }}
  </button>
  <p>{{ likeCount }} likes</p>
</div>
```

**Example 2: Shopping Cart**
```typescript
export class ProductComponent {
  cartCount: number = 0;
  
  addToCart() {
    this.cartCount++;
    console.log('Added to cart. Total items:', this.cartCount);
  }
  
  removeFromCart() {
    if (this.cartCount > 0) {
      this.cartCount--;
    }
  }
  
  clearCart() {
    this.cartCount = 0;
  }
}
```

```html
<div class="cart">
  <button (click)="addToCart()">Add to Cart</button>
  <button (click)="removeFromCart()" [disabled]="cartCount === 0">
    Remove
  </button>
  <button (click)="clearCart()" [disabled]="cartCount === 0">
    Clear Cart
  </button>
  <p>Items in cart: {{ cartCount }}</p>
</div>
```

**Example 3: Multiple Events on Same Element**
```typescript
export class HoverComponent {
  isHovered: boolean = false;
  clickCount: number = 0;
  
  onMouseEnter() {
    this.isHovered = true;
    console.log('Mouse entered');
  }
  
  onMouseLeave() {
    this.isHovered = false;
    console.log('Mouse left');
  }
  
  onClick() {
    this.clickCount++;
    console.log('Clicked:', this.clickCount, 'times');
  }
}
```

```html
<button 
  (mouseenter)="onMouseEnter()"
  (mouseleave)="onMouseLeave()"
  (click)="onClick()"
  [class.hovered]="isHovered">
  Hover and Click Me!
  <p>Clicks: {{ clickCount }}</p>
</button>
```

**Example 4: Passing Parameters**
```typescript
export class NotificationComponent {
  showNotification(message: string, type: string) {
    alert(`[${type.toUpperCase()}] ${message}`);
  }
  
  deleteItem(id: number) {
    console.log('Deleting item:', id);
  }
}
```

```html
<button (click)="showNotification('Success!', 'success')">
  Show Success
</button>
<button (click)="showNotification('Error occurred', 'error')">
  Show Error
</button>
<button (click)="deleteItem(123)">
  Delete Item #123
</button>
```

**Example 5: Conditional Execution**
```typescript
export class ConditionalComponent {
  count: number = 0;
  isEnabled: boolean = true;
  
  increment() {
    this.count++;
  }
  
  reset() {
    this.count = 0;
  }
}
```

```html
<!-- Ternary in template -->
<button (click)="count > 10 ? reset() : increment()">
  {{ count > 10 ? 'Reset' : 'Increment' }}
</button>

<!-- Multiple statements -->
<button (click)="count++; isEnabled = false">
  Increment and Disable
</button>
```

### 🆚 Data Flow Comparison

| Binding Type | Syntax | Direction | Use Case |
|-------------|--------|-----------|----------|
| **Interpolation** | `{{ }}` | Component → View | Display data |
| **Property Binding** | `[]` | Component → View | Set properties |
| **Event Binding** | `()` | View → Component | Handle events |
| **Two-Way Binding** | `[()]` | Component ↔ View | Forms, input sync |

```typescript
// Visual Flow
Component {
  name = 'John';        // ── {{ name }} ──→ Display in view
  imageUrl = 'img.jpg'; // ── [src]="..." ──→ Set property
  onClick() {}          // ←── (click)="..." ── User clicks
  inputValue = '';      // ←─→ [(ngModel)] ←─→ Two-way sync
}
```

### 🎤 Important Interview Q&A

**Q1: What is event binding in Angular?**
```
A: Event binding is a one-way binding from view to component using 
parentheses () to listen to DOM events and execute component methods.

Syntax: (eventName)="methodName()"
Flow: View (User Action) → Component (Method Execution)

Example: <button (click)="handleClick()">Click</button>
```

**Q2: How do you pass parameters to event handlers?**
```
A: Two ways:

1. Direct parameters:
   <button (click)="delete(123)">Delete</button>
   
2. Using $event object:
   <input (input)="handleInput($event)">
   
3. Both combined:
   <button (click)="update($event, 'user', 123)">Update</button>

Component:
delete(id: number) { }
handleInput(event: Event) { }
update(event: Event, type: string, id: number) { }
```

**Q3: What is the $event object?**
```
A: $event is a special variable containing event details:
- event.target → Element that triggered event
- event.target.value → Input value
- event.key → Key pressed
- event.clientX/Y → Mouse position
- event.preventDefault() → Stop default action

Example:
<input (input)="onInput($event)">

onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
}
```

**Q4: Can you prevent default browser behavior?**
```
A: Yes, using event.preventDefault()

Example - Prevent form submission:
<form (submit)="onSubmit($event)">
  <button type="submit">Submit</button>
</form>

onSubmit(event: Event) {
  event.preventDefault(); // Prevents page refresh
  // Your logic here
}

Example - Prevent right-click menu:
<div (contextmenu)="onRightClick($event)">

onRightClick(event: MouseEvent) {
  event.preventDefault(); // No context menu
}
```

**Q5: What's the difference between (click) and (onclick)?**
```
A: 
(click) → Angular event binding ✅
onclick → Native HTML attribute ❌

Use (click) in Angular:
- Cleaner syntax
- Better performance
- Type checking
- Angular change detection

❌ <button onclick="handleClick()">
✅ <button (click)="handleClick()">
```

**Q6: Can you bind to custom events?**
```
A: Yes! For child component @Output() events:

Child Component:
@Output() notify = new EventEmitter<string>();

sendNotification() {
  this.notify.emit('Hello from child!');
}

Parent Template:
<app-child (notify)="handleNotification($event)"></app-child>

Parent Component:
handleNotification(message: string) {
  console.log(message); // 'Hello from child!'
}
```

**Q7: How do you handle multiple events?**
```
A: Bind multiple events to same element:

<button 
  (click)="onClick()"
  (mouseenter)="onHover()"
  (mouseleave)="onLeave()"
  (focus)="onFocus()">
  Multi-Event Button
</button>

Or combine in one method:
<button (click)="handleAll($event, 'click')"
        (mouseenter)="handleAll($event, 'hover')">
        
handleAll(event: Event, type: string) {
  if (type === 'click') { }
  if (type === 'hover') { }
}
```

**Q8: What's event bubbling and how to stop it?**
```
A: Events propagate from child to parent elements.

Stop bubbling with event.stopPropagation():

<div (click)="onParentClick()">
  Parent
  <button (click)="onChildClick($event)">Child</button>
</div>

onChildClick(event: Event) {
  event.stopPropagation(); // Parent won't receive click
  console.log('Only child clicked');
}
```

### 💡 Pro Tips

**1. Use Method References for Complex Logic**
```html
<!-- ❌ Bad - Logic in template -->
<button (click)="count > 10 ? (count = 0, showMessage('Reset!')) : count++">

<!-- ✅ Good - Method in component -->
<button (click)="handleIncrement()">Increment</button>

// Component
handleIncrement() {
  if (this.count > 10) {
    this.count = 0;
    this.showMessage('Reset!');
  } else {
    this.count++;
  }
}
```

**2. Debounce Frequent Events**
```typescript
// For search input - avoid API call on every keystroke
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

searchSubject = new Subject<string>();

ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300) // Wait 300ms after user stops typing
  ).subscribe(searchTerm => {
    this.performSearch(searchTerm);
  });
}

onSearchInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.searchSubject.next(value);
}
```

**3. Type Event Objects Properly**
```typescript
// ❌ Generic type
onClick(event: any) { }

// ✅ Specific types
onClick(event: MouseEvent) { }
onKeyUp(event: KeyboardEvent) { }
onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}
```

**4. Prevent Memory Leaks**
```typescript
// Unsubscribe from event listeners in ngOnDestroy
ngOnDestroy() {
  this.searchSubject.complete();
}
```

### 🧪 Can You Answer These?

1. ❓ What's the difference between `(input)` and `(change)` events?
2. ❓ How do you prevent event bubbling in Angular?
3. ❓ Can you call multiple methods from one event?
4. ❓ What's the performance impact of event handlers on every element in a large list?
5. ❓ How do you handle keyboard shortcuts globally?

---

## 4. KEYBOARD EVENTS

### 🎯 Simple Definition
Keyboard events capture user keyboard interactions (typing, pressing keys, releasing keys). Essential for forms, search boxes, keyboard shortcuts, and accessibility features.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Search bars with live search
- Form validation on typing
- Keyboard shortcuts (Ctrl+S, Escape, Enter)
- Character counters (Twitter-style)
- Chat applications (send on Enter)
- Game controls
- Accessibility features

**Benefits:**
- ✅ Real-time user input handling
- ✅ Enhanced user experience
- ✅ Keyboard shortcuts support
- ✅ Accessibility improvements
- ✅ Form validation on-the-fly

### ⏰ When to Use It

```typescript
✅ Use Keyboard Events When:
- Live search functionality
- Form validation while typing
- Keyboard shortcuts (Enter, Escape, Ctrl+S)
- Character limit counters
- Chat message sending
- Autocomplete features
- Accessibility navigation

❌ Don't Use When:
- Simple data display → Use interpolation
- Final form submission → Use (submit)
- Just setting values → Use [(ngModel)]
```

### 📝 Common Keyboard Events

| Event | When Triggered | Use Case |
|-------|---------------|----------|
| `(keyup)` | Key released | Input validation, search |
| `(keydown)` | Key pressed | Shortcuts, prevent default |
| `(keypress)` | Character key (⚠️ Deprecated) | Avoid - use keydown |
| `(input)` | Input value changes | Real-time updates |
| `(change)` | Input loses focus | Final validation |
| `(focus)` | Input gains focus | Show hints |
| `(blur)` | Input loses focus | Validate complete input |

**Specific Key Events:**
```html
(keyup.enter)    <!-- Enter key only -->
(keydown.escape) <!-- Escape key only -->
(keyup.space)    <!-- Spacebar only -->
(keydown.shift)  <!-- Shift key -->
(keyup.arrowup)  <!-- Arrow up -->
(keyup.arrowdown)<!-- Arrow down -->
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Using deprecated keypress
<input (keypress)="handleKey($event)">  // Deprecated!
<input (keydown)="handleKey($event)">   // ✅ Use keydown/keyup

// ❌ MISTAKE 2: Not passing $event when needed
<input (keyup)="updateValue()">  // How to get the value?
<input (keyup)="updateValue($event)">  // ✅ Pass event

// ❌ MISTAKE 3: Heavy operations on every keystroke
<input (keyup)="callAPIOnEveryKey()">  // Server overload!
<input (keyup)="debouncedSearch($event)">  // ✅ Debounce

// ❌ MISTAKE 4: Not checking which key
onKeyDown(event: KeyboardEvent) {
  // Executes for ALL keys!
}

// ✅ Check specific key
onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    // Only for Enter
  }
}

// ❌ MISTAKE 5: Forgetting preventDefault
<form (keydown.enter)="submit()">
  <!-- Form submits AND page refreshes! -->
</form>

// ✅ Prevent default
onEnter(event: KeyboardEvent) {
  event.preventDefault();
  this.submit();
}
```

### 📝 How to Use It

**Basic Syntax:**

```typescript
// Component
export class SearchComponent {
  searchQuery: string = '';
  
  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    console.log('User typed:', this.searchQuery);
  }
}
```

```html
<!-- Template -->
<input type="text" 
       (keyup)="onKeyUp($event)"
       placeholder="Type to search...">
<p>Searching for: {{ searchQuery }}</p>
```

**Real-World Examples:**

**Example 1: Live Search (Google Style)**
```typescript
export class SearchComponent {
  searchQuery: string = '';
  searchResults: string[] = [];
  
  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    
    if (this.searchQuery.length >= 3) {
      this.performSearch();
    }
  }
  
  performSearch() {
    // API call or filter logic
    console.log('Searching for:', this.searchQuery);
  }
}
```

```html
<div class="search-bar">
  <input type="text"
         (input)="onSearchChange($event)"
         placeholder="Search...">
  <p *ngIf="searchQuery.length > 0">
    Searching for: {{ searchQuery }}
  </p>
</div>
```

**Example 2: Send Message on Enter (WhatsApp Style)**
```typescript
export class ChatComponent {
  message: string = '';
  messages: string[] = [];
  
  sendMessage() {
    if (this.message.trim()) {
      this.messages.push(this.message);
      this.message = ''; // Clear input
    }
  }
  
  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      this.sendMessage();
    }
  }
}
```

```html
<div class="chat-box">
  <div class="messages">
    <p *ngFor="let msg of messages">{{ msg }}</p>
  </div>
  
  <textarea 
    [(ngModel)]="message"
    (keydown)="onEnterPress($event)"
    placeholder="Type message... (Enter to send, Shift+Enter for new line)">
  </textarea>
  
  <button (click)="sendMessage()">Send</button>
</div>
```

**Example 3: Character Counter (Twitter Style)**
```typescript
export class TweetComponent {
  tweetText: string = '';
  maxLength: number = 280;
  
  get remainingChars(): number {
    return this.maxLength - this.tweetText.length;
  }
  
  get isOverLimit(): boolean {
    return this.tweetText.length > this.maxLength;
  }
  
  get warningLevel(): string {
    const remaining = this.remainingChars;
    if (remaining < 0) return 'over-limit';
    if (remaining < 20) return 'warning';
    return 'normal';
  }
}
```

```html
<div class="tweet-composer">
  <textarea 
    [(ngModel)]="tweetText"
    placeholder="What's happening?"
    rows="4">
  </textarea>
  
  <div class="counter" [ngClass]="warningLevel">
    <span [style.color]="isOverLimit ? 'red' : 'inherit'">
      {{ remainingChars }} characters remaining
    </span>
  </div>
  
  <button [disabled]="isOverLimit || tweetText.length === 0">
    Tweet
  </button>
</div>
```

**Example 4: Keyboard Shortcuts**
```typescript
export class EditorComponent {
  content: string = '';
  
  onKeyboardShortcut(event: KeyboardEvent) {
    // Ctrl + S (Save)
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.saveContent();
    }
    
    // Ctrl + B (Bold)
    if (event.ctrlKey && event.key === 'b') {
      event.preventDefault();
      this.makeBold();
    }
    
    // Escape (Cancel)
    if (event.key === 'Escape') {
      this.cancel();
    }
    
    // Ctrl + Z (Undo)
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      this.undo();
    }
  }
  
  saveContent() {
    console.log('Saving content...');
  }
  
  makeBold() {
    console.log('Making text bold...');
  }
  
  cancel() {
    console.log('Cancelled');
  }
  
  undo() {
    console.log('Undo last action');
  }
}
```

```html
<div (keydown)="onKeyboardShortcut($event)" tabindex="0">
  <h3>Keyboard Shortcuts:</h3>
  <ul>
    <li>Ctrl+S: Save</li>
    <li>Ctrl+B: Bold</li>
    <li>Ctrl+Z: Undo</li>
    <li>Escape: Cancel</li>
  </ul>
  
  <textarea [(ngModel)]="content" rows="10"></textarea>
</div>
```

**Example 5: Specific Key Events**
```html
<!-- Enter key only -->
<input (keyup.enter)="submitForm()" placeholder="Press Enter">

<!-- Escape key only -->
<div (keydown.escape)="closeModal()">Modal Content</div>

<!-- Space key -->
<button (keyup.space)="togglePlay()">Play/Pause</button>

<!-- Arrow keys -->
<div (keydown.arrowup)="moveUp()"
     (keydown.arrowdown)="moveDown()"
     (keydown.arrowleft)="moveLeft()"
     (keydown.arrowright)="moveRight()">
  Use arrow keys to navigate
</div>
```

**Example 6: Input Validation While Typing**
```typescript
export class ValidationComponent {
  email: string = '';
  password: string = '';
  
  get isEmailValid(): boolean {
    return this.email.includes('@') && this.email.includes('.');
  }
  
  get isPasswordStrong(): boolean {
    return this.password.length >= 8 &&
           /[A-Z]/.test(this.password) &&
           /[0-9]/.test(this.password);
  }
}
```

```html
<div class="form">
  <input type="email"
         [(ngModel)]="email"
         placeholder="Email">
  <span *ngIf="email && !isEmailValid" class="error">
    ❌ Invalid email
  </span>
  <span *ngIf="isEmailValid" class="success">
    ✅ Valid email
  </span>
  
  <input type="password"
         [(ngModel)]="password"
         placeholder="Password">
  <span *ngIf="password && !isPasswordStrong" class="warning">
    ⚠️ Weak password (min 8 chars, 1 uppercase, 1 number)
  </span>
  <span *ngIf="isPasswordStrong" class="success">
    ✅ Strong password
  </span>
</div>
```

### 🎤 Important Interview Q&A

**Q1: Difference between (keyup), (keydown), and (keypress)?**
```
A:
(keydown) → Fires when key is pressed down
  - Fires first
  - Can prevent default action
  - Best for shortcuts

(keyup) → Fires when key is released
  - Fires after keydown
  - Better for input validation
  - Most commonly used

(keypress) → Deprecated! Don't use
  - Only for character keys
  - Use keydown instead

Best Practice: Use (keydown) for shortcuts, (keyup) for input
```

**Q2: How do you detect specific keys?**
```
A: Three ways:

1. Angular's key.modifiers:
   <input (keyup.enter)="submit()">
   <input (keydown.escape)="cancel()">

2. Check event.key property:
   onKeyPress(event: KeyboardEvent) {
     if (event.key === 'Enter') { }
     if (event.key === 'Escape') { }
   }

3. Check modifier keys:
   if (event.ctrlKey && event.key === 's') {
     // Ctrl+S pressed
   }
```

**Q3: How do you implement debouncing for search?**
```
A: Use RxJS debounceTime operator:

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

searchSubject = new Subject<string>();

ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300),        // Wait 300ms after typing stops
    distinctUntilChanged()     // Only if value changed
  ).subscribe(term => {
    this.performSearch(term);
  });
}

onSearchInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.searchSubject.next(value);
}

Prevents API call on every keystroke!
```

**Q4: Difference between (input) and (change) events?**
```
A:
(input) → Fires on EVERY value change
  - Real-time updates
  - Every keystroke
  - Best for live search

(change) → Fires when input loses focus
  - Only after editing complete
  - Not real-time
  - Best for final validation

Example:
<input (input)="liveSearch($event)">    // Every keystroke
<input (change)="validate($event)">     // On blur
```

**Q5: How to prevent form submission on Enter?**
```
A: Use event.preventDefault():

<form (keydown.enter)="$event.preventDefault()">
  <input type="text">
  <button type="submit">Submit</button>
</form>

Or in component:
<form (keydown.enter)="onEnter($event)">

onEnter(event: KeyboardEvent) {
  event.preventDefault();
}
```

### 💡 Pro Tips

**1. Debounce for Performance**
```typescript
// Avoid calling API on every keystroke
import { debounceTime } from 'rxjs/operators';

searchTerm$ = new Subject<string>();

ngOnInit() {
  this.searchTerm$.pipe(
    debounceTime(300)
  ).subscribe(term => this.search(term));
}
```

**2. Type Event Objects Correctly**
```typescript
// ✅ Specific type
onKeyUp(event: KeyboardEvent) {
  console.log(event.key, event.code, event.ctrlKey);
}

// ❌ Generic type - lose type safety
onKeyUp(event: any) { }
```

**3. Combine Modifier Keys**
```typescript
onKeyDown(event: KeyboardEvent) {
  // Ctrl + Shift + S
  if (event.ctrlKey && event.shiftKey && event.key === 's') {
    event.preventDefault();
    this.saveAs();
  }
}
```

**4. Use (input) for Real-time, (change) for Final**
```html
<!-- Live character count -->
<textarea (input)="updateCount($event)"></textarea>

<!-- Validate after editing -->
<input (change)="validateEmail($event)">
```

### 🧪 Can You Answer These?

1. ❓ When should you use (keyup) vs (keydown)?
2. ❓ How do you detect Ctrl+S keyboard shortcut?
3. ❓ What's the purpose of event.preventDefault() in keyboard events?
4. ❓ How do you implement a character counter with max limit?
5. ❓ Why is debouncing important for search inputs?

---

## 5. EVENT OBJECT ($event)

### 🎯 Simple Definition
The `$event` object is a special variable that contains **detailed information about the event** that occurred. It's passed from the template to component methods, providing access to event properties like target element, mouse position, key pressed, etc.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Getting input field values: `event.target.value`
- Preventing default behavior: `event.preventDefault()`
- Stopping event propagation: `event.stopPropagation()`
- Getting mouse coordinates: `event.clientX`, `event.clientY`
- Detecting which key was pressed: `event.key`
- Accessing checkbox state: `event.target.checked`
- Getting event type: `event.type`

**Benefits:**
- ✅ Access to complete event details
- ✅ Control over event behavior
- ✅ Type-safe with TypeScript
- ✅ Cross-browser compatibility
- ✅ Essential for complex interactions

### ⏰ When to Use It

```typescript
✅ Use $event When:
- Need input values without ngModel
- Preventing default actions (form submit, links)
- Stopping event bubbling
- Getting mouse/touch positions
- Detecting specific keys pressed
- Accessing element properties

❌ Don't Use When:
- Simple method calls without parameters
- Two-way binding better → Use [(ngModel)]
- Not using event data → Skip $event
```

### 📝 Common $event Properties

**For All Events:**
```typescript
event.type           // Event type: 'click', 'keyup', etc.
event.target         // Element that triggered the event
event.currentTarget  // Element with event listener
event.timeStamp      // When event occurred
event.preventDefault()    // Stop default action
event.stopPropagation()   // Stop event bubbling
```

**For Mouse Events (MouseEvent):**
```typescript
event.clientX        // X coordinate relative to viewport
event.clientY        // Y coordinate relative to viewport
event.pageX          // X coordinate relative to document
event.pageY          // Y coordinate relative to document
event.offsetX        // X relative to target element
event.offsetY        // Y relative to target element
event.button         // Which mouse button (0=left, 1=middle, 2=right)
event.ctrlKey        // Was Ctrl key pressed?
event.shiftKey       // Was Shift key pressed?
event.altKey         // Was Alt key pressed?
```

**For Keyboard Events (KeyboardEvent):**
```typescript
event.key            // Key value: 'Enter', 'a', 'Escape'
event.code           // Physical key: 'KeyA', 'Enter'
event.keyCode        // Numeric code (deprecated)
event.ctrlKey        // Ctrl pressed?
event.shiftKey       // Shift pressed?
event.altKey         // Alt pressed?
event.metaKey        // Meta/Windows/Command key pressed?
```

**For Input Events:**
```typescript
event.target         // Input element
event.target.value   // Input value
event.target.checked // Checkbox state (true/false)
event.target.files   // Selected files (file input)
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting to pass $event
<input (input)="handleInput()">  // Event object not available!
<input (input)="handleInput($event)">  // ✅ Pass $event

// ❌ MISTAKE 2: Wrong $event type
onInput(event: any) {  // Loses type safety
  event.target.value;
}

// ✅ Correct type
onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
}

// ❌ MISTAKE 3: Using $event as string
<button (click)="handleClick('$event')">  // String literal!
<button (click)="handleClick($event)">    // ✅ Event object

// ❌ MISTAKE 4: Not preventing default when needed
<form (submit)="onSubmit($event)">
  <button type="submit">Submit</button>
</form>

onSubmit(event: Event) {
  // Page refreshes! ❌
  console.log('Form submitted');
}

// ✅ Prevent default
onSubmit(event: Event) {
  event.preventDefault();  // No page refresh
  console.log('Form submitted');
}

// ❌ MISTAKE 5: Accessing properties without type checking
onInput(event: Event) {
  const value = event.target.value;  // Error! target is EventTarget
}

// ✅ Type assertion
onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input.value;  // Works!
}
```

### 📝 How to Use It

**Basic Usage:**

```typescript
// Component
export class EventComponent {
  inputValue: string = '';
  
  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    console.log('Input value:', this.inputValue);
  }
}
```

```html
<!-- Template -->
<input type="text" (input)="handleInput($event)">
<p>You typed: {{ inputValue }}</p>
```

**Real-World Examples:**

**Example 1: Getting Input Values**
```typescript
export class FormComponent {
  email: string = '';
  password: string = '';
  
  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }
  
  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }
}
```

```html
<div class="form">
  <input type="email" 
         (input)="onEmailChange($event)"
         placeholder="Email">
  <p>Email: {{ email }}</p>
  
  <input type="password" 
         (input)="onPasswordChange($event)"
         placeholder="Password">
  <p>Password: {{ password }}</p>
</div>
```

**Example 2: Preventing Default Behavior**
```typescript
export class PreventDefaultComponent {
  // Prevent form refresh
  onFormSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted without page refresh!');
  }
  
  // Prevent right-click menu
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    console.log('Custom context menu here');
  }
  
  // Prevent link navigation
  onLinkClick(event: Event) {
    event.preventDefault();
    console.log('Link clicked, but not navigating');
  }
}
```

```html
<form (submit)="onFormSubmit($event)">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>

<div (contextmenu)="onRightClick($event)">
  Right-click me (no context menu)
</div>

<a href="https://google.com" (click)="onLinkClick($event)">
  Click me (won't navigate)
</a>
```

**Example 3: Checkbox State**
```typescript
export class CheckboxComponent {
  termsAccepted: boolean = false;
  newsletter: boolean = false;
  
  onTermsChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.termsAccepted = checkbox.checked;
    console.log('Terms accepted:', this.termsAccepted);
  }
  
  onNewsletterChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.newsletter = checkbox.checked;
  }
}
```

```html
<label>
  <input type="checkbox" (change)="onTermsChange($event)">
  I accept terms and conditions
</label>
<p>Status: {{ termsAccepted ? 'Accepted ✅' : 'Not accepted ❌' }}</p>

<label>
  <input type="checkbox" (change)="onNewsletterChange($event)">
  Subscribe to newsletter
</label>

<button [disabled]="!termsAccepted">Proceed</button>
```

**Example 4: Mouse Position Tracking**
```typescript
export class MouseTrackerComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  isMouseInside: boolean = false;
  
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onMouseEnter(event: MouseEvent) {
    this.isMouseInside = true;
  }
  
  onMouseLeave(event: MouseEvent) {
    this.isMouseInside = false;
  }
}
```

```html
<div class="tracker-area"
     (mousemove)="onMouseMove($event)"
     (mouseenter)="onMouseEnter($event)"
     (mouseleave)="onMouseLeave($event)"
     [style.background]="isMouseInside ? 'lightblue' : 'lightgray'"
     style="height: 300px; cursor: crosshair;">
  
  <p>Mouse Position:</p>
  <p>X: {{ mouseX }}px</p>
  <p>Y: {{ mouseY }}px</p>
  <p>Inside: {{ isMouseInside ? 'Yes' : 'No' }}</p>
</div>
```

**Example 5: Keyboard Shortcuts with Modifiers**
```typescript
export class ShortcutsComponent {
  content: string = 'Sample text';
  saved: boolean = false;
  
  onKeyDown(event: KeyboardEvent) {
    // Ctrl + S (Save)
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.save();
    }
    
    // Ctrl + B (Bold)
    if (event.ctrlKey && event.key === 'b') {
      event.preventDefault();
      this.bold();
    }
    
    // Ctrl + Z (Undo)
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      this.undo();
    }
    
    // Ctrl + Shift + S (Save As)
    if (event.ctrlKey && event.shiftKey && event.key === 's') {
      event.preventDefault();
      this.saveAs();
    }
    
    // Escape
    if (event.key === 'Escape') {
      this.cancel();
    }
  }
  
  save() {
    this.saved = true;
    console.log('Saved!');
  }
  
  bold() {
    console.log('Making bold...');
  }
  
  undo() {
    console.log('Undo...');
  }
  
  saveAs() {
    console.log('Save As...');
  }
  
  cancel() {
    console.log('Cancelled');
  }
}
```

```html
<div (keydown)="onKeyDown($event)" tabindex="0">
  <h3>Try these shortcuts:</h3>
  <ul>
    <li>Ctrl+S → Save</li>
    <li>Ctrl+B → Bold</li>
    <li>Ctrl+Z → Undo</li>
    <li>Ctrl+Shift+S → Save As</li>
    <li>Escape → Cancel</li>
  </ul>
  
  <textarea [(ngModel)]="content"></textarea>
  <p *ngIf="saved" style="color: green;">✅ Saved!</p>
</div>
```

**Example 6: Stopping Event Propagation**
```typescript
export class BubblingComponent {
  parentClicked: boolean = false;
  childClicked: boolean = false;
  
  onParentClick() {
    this.parentClicked = true;
    console.log('Parent clicked');
  }
  
  onChildClick(event: Event) {
    event.stopPropagation(); // Prevent parent from receiving event
    this.childClicked = true;
    console.log('Child clicked - parent won\'t know');
  }
  
  reset() {
    this.parentClicked = false;
    this.childClicked = false;
  }
}
```

```html
<div (click)="onParentClick()" 
     style="padding: 50px; background: lightblue;">
  <p>Parent Div (click me)</p>
  <p>Parent clicked: {{ parentClicked }}</p>
  
  <button (click)="onChildClick($event)">
    Child Button (click won't bubble to parent)
  </button>
  <p>Child clicked: {{ childClicked }}</p>
  
  <button (click)="reset()">Reset</button>
</div>
```

**Example 7: File Input**
```typescript
export class FileUploadComponent {
  selectedFile: File | null = null;
  fileName: string = '';
  fileSize: number = 0;
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
      this.fileSize = this.selectedFile.size;
      
      console.log('File selected:', this.fileName);
      console.log('Size:', this.fileSize, 'bytes');
    }
  }
}
```

```html
<input type="file" (change)="onFileSelected($event)">

<div *ngIf="selectedFile">
  <p>File: {{ fileName }}</p>
  <p>Size: {{ fileSize }} bytes</p>
</div>
```

### 🎤 Important Interview Q&A

**Q1: What is the $event object in Angular?**
```
A: $event is a special variable containing event details passed from 
template to component. It's the native DOM Event object with properties 
like target, type, preventDefault(), stopPropagation(), etc.

Syntax: <button (click)="handleClick($event)">

Types: MouseEvent, KeyboardEvent, Event, InputEvent, etc.
```

**Q2: How do you get input value using $event?**
```
A: Access via event.target.value with type casting:

onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input.value;
  console.log(value);
}

Template:
<input (input)="onInput($event)">

Why cast? event.target is EventTarget type, not HTMLInputElement.
```

**Q3: What's the difference between event.target and event.currentTarget?**
```
A:
event.target → Element that triggered the event
event.currentTarget → Element with event listener attached

Example:
<div (click)="onClick($event)">
  <button>Click</button>
</div>

If button clicked:
- event.target → button element
- event.currentTarget → div element

Important for event bubbling scenarios!
```

**Q4: How do you prevent form submission page refresh?**
```
A: Use event.preventDefault():

<form (submit)="onSubmit($event)">
  <button type="submit">Submit</button>
</form>

onSubmit(event: Event) {
  event.preventDefault(); // Stops page refresh
  // Your form logic here
}

Alternative: Return false from handler (not recommended in Angular)
```

**Q5: What's event.stopPropagation() used for?**
```
A: Prevents event from bubbling up to parent elements.

Example - Click child, parent doesn't receive event:

<div (click)="onParentClick()">
  <button (click)="onChildClick($event)">Click</button>
</div>

onChildClick(event: Event) {
  event.stopPropagation(); // Parent's onParentClick won't fire
  console.log('Only child clicked');
}

Use Case: Nested clickable elements
```

**Q6: How do you detect keyboard shortcuts with $event?**
```
A: Check modifier keys (ctrlKey, shiftKey, etc.) and key property:

onKeyDown(event: KeyboardEvent) {
  // Ctrl+S
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    this.save();
  }
  
  // Ctrl+Shift+S
  if (event.ctrlKey && event.shiftKey && event.key === 's') {
    event.preventDefault();
    this.saveAs();
  }
}

Template:
<div (keydown)="onKeyDown($event)" tabindex="0">
```

**Q7: Should you type $event parameters?**
```
A: Yes! Use specific event types:

❌ Generic:
onClick(event: any) { }

✅ Specific:
onClick(event: MouseEvent) { }
onKeyPress(event: KeyboardEvent) { }
onInput(event: Event) { }
onDrag(event: DragEvent) { }

Benefits:
- Type safety
- IntelliSense/autocomplete
- Catch errors at compile time
```

**Q8: Can you pass $event and other parameters together?**
```
A: Yes! $event can be combined with other parameters:

<button (click)="handleClick($event, 'user', 123)">
  Click
</button>

handleClick(event: MouseEvent, type: string, id: number) {
  console.log('Event:', event);
  console.log('Type:', type);
  console.log('ID:', id);
}

$event can be in any position in parameter list.
```

### 💡 Pro Tips

**1. Type Events Correctly**
```typescript
// ✅ Specific types for better IntelliSense
onClick(event: MouseEvent) {
  console.log(event.clientX, event.clientY);
}

onKeyPress(event: KeyboardEvent) {
  console.log(event.key, event.ctrlKey);
}

onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
}
```

**2. Create Helper Methods for Type Casting**
```typescript
getInputValue(event: Event): string {
  return (event.target as HTMLInputElement).value;
}

onInput(event: Event) {
  const value = this.getInputValue(event);
  console.log(value);
}
```

**3. Combine Multiple Checks**
```typescript
onKeyDown(event: KeyboardEvent) {
  const isSaveShortcut = event.ctrlKey && 
                          event.key === 's' && 
                          !event.shiftKey;
  
  if (isSaveShortcut) {
    event.preventDefault();
    this.save();
  }
}
```

**4. Avoid $event When Not Needed**
```html
<!-- ❌ Unnecessary -->
<button (click)="save($event)">Save</button>
save(event: Event) {
  this.saveData(); // Not using event!
}

<!-- ✅ Cleaner -->
<button (click)="save()">Save</button>
save() {
  this.saveData();
}
```

### 🧪 Can You Answer These?

1. ❓ What's the difference between event.target and event.currentTarget?
2. ❓ How do you prevent a link from navigating using $event?
3. ❓ Why do you need type casting for event.target?
4. ❓ What's event.stopPropagation() vs event.stopImmediatePropagation()?
5. ❓ How do you get selected file details from file input?

---

## 6. TWO-WAY BINDING [(ngModel)]

### 🎯 Simple Definition
Two-way binding creates a **bidirectional data flow** between component and template using `[(ngModel)]`. Changes in the view automatically update the component, and component changes automatically update the view - perfect synchronization!

**Banana in a Box:** `[( )]` looks like a banana 🍌 in a box 📦

### 💼 Where It's Used & Benefits

**Use Cases:**
- Form inputs (text, email, password)
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons
- Range sliders
- Any user input that needs sync

**Benefits:**
- ✅ Automatic two-way synchronization
- ✅ Less boilerplate code
- ✅ Real-time data binding
- ✅ Simple form handling
- ✅ Reduces manual event handling

**Limitations:**
- ⚠️ Requires FormsModule
- ⚠️ Can cause tight coupling
- ⚠️ Performance issues with many bindings
- ⚠️ Harder to debug in large apps
- ⚠️ Better alternatives exist (Reactive Forms, Signals)

### ⏰ When to Use It

```typescript
✅ Use [(ngModel)] When:
- Small, simple forms
- Quick prototyping
- Real-time input synchronization
- Simple settings/preferences
- Learning Angular basics

❌ Don't Use When:
- Large, complex forms → Use Reactive Forms
- Need validation → Use Reactive Forms
- Production apps → Consider Reactive Forms or Signals
- Performance critical → Use Signals (Angular 16+)
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting to import FormsModule
// Error: "Can't bind to 'ngModel'"
// Fix: Import FormsModule

import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule]  // ← Must import!
})

// ❌ MISTAKE 2: Using with standalone attributes
<input [(ngModel)]="name" name="username">  // name attribute not needed
<input [(ngModel)]="name">  // ✅ Sufficient for ngModel

// ❌ MISTAKE 3: Wrong syntax
<input [ngModel]="name">    // One-way binding
<input (ngModelChange)="name = $event">  // Event binding
<input [(ngModel)]="name">  // ✅ Two-way binding

// ❌ MISTAKE 4: Using on non-form elements
<div [(ngModel)]="content"></div>  // Error! div has no value
<input [(ngModel)]="content">       // ✅ Works on form controls

// ❌ MISTAKE 5: Binding to method instead of property
<input [(ngModel)]="getName()">  // Error!
<input [(ngModel)]="name">       // ✅ Bind to property

// ❌ MISTAKE 6: Multiple ngModels on same element
<input [(ngModel)]="name" [(ngModel)]="email">  // Error!
<input [(ngModel)]="name">  // ✅ One ngModel per element
```

### 📝 How to Use It

**Setup (IMPORTANT!):**

```typescript
// For Standalone Components (Angular 14+)
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],  // ← MUST IMPORT
  templateUrl: './form.component.html'
})
export class FormComponent {
  userName: string = '';
}

// For Module-based Components
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],  // ← Add to imports
  declarations: [FormComponent]
})
export class AppModule { }
```

**Basic Usage:**

```typescript
// Component
export class FormComponent {
  name: string = '';
  email: string = '';
  age: number = 0;
}
```

```html
<!-- Template -->
<input type="text" [(ngModel)]="name" placeholder="Name">
<p>Hello, {{ name }}!</p>

<input type="email" [(ngModel)]="email" placeholder="Email">
<p>Your email: {{ email }}</p>

<input type="number" [(ngModel)]="age" placeholder="Age">
<p>You are {{ age }} years old</p>
```

**Real-World Examples:**

**Example 1: Live Profile Editor**
```typescript
export class ProfileComponent {
  profile = {
    name: '',
    email: '',
    bio: '',
    website: ''
  };
}
```

```html
<div class="profile-editor">
  <h2>Edit Profile</h2>
  
  <input type="text" 
         [(ngModel)]="profile.name" 
         placeholder="Full Name">
  
  <input type="email" 
         [(ngModel)]="profile.email" 
         placeholder="Email">
  
  <textarea 
    [(ngModel)]="profile.bio" 
    placeholder="Bio"
    rows="4">
  </textarea>
  
  <input type="url" 
         [(ngModel)]="profile.website" 
         placeholder="Website">
  
  <!-- Live Preview -->
  <div class="preview">
    <h3>Preview:</h3>
    <p><strong>Name:</strong> {{ profile.name || 'Not set' }}</p>
    <p><strong>Email:</strong> {{ profile.email || 'Not set' }}</p>
    <p><strong>Bio:</strong> {{ profile.bio || 'Not set' }}</p>
    <p><strong>Website:</strong> {{ profile.website || 'Not set' }}</p>
  </div>
</div>
```

**Example 2: Calculator**
```typescript
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  
  get sum(): number {
    return this.num1 + this.num2;
  }
  
  get difference(): number {
    return this.num1 - this.num2;
  }
  
  get product(): number {
    return this.num1 * this.num2;
  }
  
  get quotient(): number {
    return this.num2 !== 0 ? this.num1 / this.num2 : 0;
  }
}
```

```html
<div class="calculator">
  <h2>Simple Calculator</h2>
  
  <input type="number" 
         [(ngModel)]="num1" 
         placeholder="First number">
  
  <input type="number" 
         [(ngModel)]="num2" 
         placeholder="Second number">
  
  <div class="results">
    <p>Sum: {{ sum }}</p>
    <p>Difference: {{ difference }}</p>
    <p>Product: {{ product }}</p>
    <p>Quotient: {{ quotient }}</p>
  </div>
</div>
```

**Example 3: Select Dropdown**
```typescript
export class CitySelector {
  selectedCity: string = '';
  cities: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];
  
  selectedCountry: string = 'India';
  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' }
  ];
}
```

```html
<!-- Simple dropdown -->
<select [(ngModel)]="selectedCity">
  <option value="">Select City</option>
  <option *ngFor="let city of cities" [value]="city">
    {{ city }}
  </option>
</select>
<p>Selected: {{ selectedCity || 'None' }}</p>

<!-- Object value dropdown -->
<select [(ngModel)]="selectedCountry">
  <option *ngFor="let country of countries" [value]="country.code">
    {{ country.name }}
  </option>
</select>
<p>Country Code: {{ selectedCountry }}</p>
```

**Example 4: Checkboxes**
```typescript
export class SettingsComponent {
  settings = {
    darkMode: false,
    notifications: true,
    autoSave: false,
    emailAlerts: true
  };
  
  get activeSettings(): string[] {
    const active = [];
    if (this.settings.darkMode) active.push('Dark Mode');
    if (this.settings.notifications) active.push('Notifications');
    if (this.settings.autoSave) active.push('Auto Save');
    if (this.settings.emailAlerts) active.push('Email Alerts');
    return active;
  }
}
```

```html
<div class="settings">
  <h2>Settings</h2>
  
  <label>
    <input type="checkbox" [(ngModel)]="settings.darkMode">
    Enable Dark Mode
  </label>
  
  <label>
    <input type="checkbox" [(ngModel)]="settings.notifications">
    Show Notifications
  </label>
  
  <label>
    <input type="checkbox" [(ngModel)]="settings.autoSave">
    Auto-save Documents
  </label>
  
  <label>
    <input type="checkbox" [(ngModel)]="settings.emailAlerts">
    Email Alerts
  </label>
  
  <div class="summary">
    <h3>Active Settings:</h3>
    <ul>
      <li *ngFor="let setting of activeSettings">{{ setting }} ✅</li>
    </ul>
  </div>
</div>
```

**Example 5: Radio Buttons**
```typescript
export class SubscriptionComponent {
  selectedPlan: string = 'free';
  
  get planPrice(): string {
    const prices: {[key: string]: string} = {
      'free': '₹0/month',
      'basic': '₹299/month',
      'premium': '₹999/month',
      'enterprise': '₹2999/month'
    };
    return prices[this.selectedPlan];
  }
  
  get planFeatures(): string[] {
    const features: {[key: string]: string[]} = {
      'free': ['1 User', '5GB Storage', 'Email Support'],
      'basic': ['5 Users', '50GB Storage', 'Priority Email'],
      'premium': ['25 Users', '500GB Storage', 'Phone Support', 'Advanced Analytics'],
      'enterprise': ['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'Custom Features']
    };
    return features[this.selected Plan];
  }
}
```

```html
<div class="pricing">
  <h2>Choose Your Plan</h2>
  
  <label>
    <input type="radio" name="plan" value="free" [(ngModel)]="selectedPlan">
    Free Plan
  </label>
  
  <label>
    <input type="radio" name="plan" value="basic" [(ngModel)]="selectedPlan">
    Basic Plan
  </label>
  
  <label>
    <input type="radio" name="plan" value="premium" [(ngModel)]="selectedPlan">
    Premium Plan
  </label>
  
  <label>
    <input type="radio" name="plan" value="enterprise" [(ngModel)]="selectedPlan">
    Enterprise Plan
  </label>
  
  <div class="plan-details">
    <h3>{{ selectedPlan | titlecase }} Plan</h3>
    <p class="price">{{ planPrice }}</p>
    <ul>
      <li *ngFor="let feature of planFeatures">{{ feature }}</li>
    </ul>
  </div>
</div>
```

**Example 6: Range Slider**
```typescript
export class SliderComponent {
  volume: number = 50;
  brightness: number = 75;
  fontSize: number = 16;
  
  get volumeLabel(): string {
    if (this.volume === 0) return 'Muted 🔇';
    if (this.volume < 30) return 'Low 🔉';
    if (this.volume < 70) return 'Medium 🔊';
    return 'High 🔊';
  }
}
```

```html
<div class="controls">
  <div class="control">
    <label>Volume: {{ volume }}%</label>
    <input type="range" 
           [(ngModel)]="volume" 
           min="0" 
           max="100">
    <span>{{ volumeLabel }}</span>
  </div>
  
  <div class="control">
    <label>Brightness: {{ brightness }}%</label>
    <input type="range" 
           [(ngModel)]="brightness" 
           min="0" 
           max="100">
  </div>
  
  <div class="control">
    <label>Font Size: {{ fontSize }}px</label>
    <input type="range" 
           [(ngModel)]="fontSize" 
           min="12" 
           max="32">
    <p [style.font-size.px]="fontSize">Sample Text</p>
  </div>
</div>
```

### 🆚 Alternative Approaches

**1. Manual Two-Way Binding (Without ngModel):**
```html
<!-- Using property + event binding -->
<input [value]="userName" 
       (input)="userName = $event.target.value">

<!-- Same as -->
<input [(ngModel)]="userName">
```

**2. Reactive Forms (Professional Approach):**
```typescript
import { FormControl } from '@angular/forms';

userName = new FormControl('');

// Template
<input [formControl]="userName">
```

**3. Signals (Modern Angular 16+):**
```typescript
import { signal } from '@angular/core';

userName = signal('');

// Template
<input [value]="userName()" 
       (input)="userName.set($event.target.value)">
```

### 🎤 Important Interview Q&A

**Q1: What is two-way binding in Angular?**
```
A: Two-way binding synchronizes data between component and template 
in both directions using [(ngModel)]. Changes in view update component, 
and component changes update view automatically.

Syntax: [(ngModel)]="property"
Requires: FormsModule
Flow: Component ↔ View (bidirectional)
```

**Q2: Why is it called "Banana in a Box"?**
```
A: The syntax [( )] looks like a banana 🍌 inside a box 📦

[(ngModel)] combines:
- [ ] = Property binding (Component → View)
- ( ) = Event binding (View → Component)
- [( )] = Both combined = Two-way binding

It's a mnemonic to remember the syntax!
```

**Q3: What's required to use [(ngModel)]?**
```
A: Must import FormsModule:

// Standalone Component
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule]  // ← Required!
})

// Module-based
@NgModule({
  imports: [FormsModule]
})

Without FormsModule: "Can't bind to 'ngModel'" error
```

**Q4: How does [(ngModel)] work internally?**
```
A: It's syntactic sugar for property + event binding:

[(ngModel)]="name"

// Expands to:
[ngModel]="name"
(ngModelChange)="name = $event"

Angular updates property on (ngModelChange) event.
```

**Q5: When should you use Reactive Forms instead of ngModel?**
```
A: Use Reactive Forms when:
- Complex forms with validation
- Dynamic forms
- Better testability needed
- Professional production apps
- Better performance required
- Need programmatic control

Use ngModel for:
- Simple forms
- Quick prototypes
- Learning Angular
- Small settings/preferences
```

**Q6: Can you use [(ngModel)] with Reactive Forms?**
```
A: Yes, but NOT recommended!

❌ Mixing both:
<input [(ngModel)]="name" [formControl]="nameControl">
// Confusing and unnecessary

✅ Use one approach:
// Template-driven:
<input [(ngModel)]="name">

// Reactive:
<input [formControl]="nameControl">
```

**Q7: How do you handle ngModel with objects?**
```
A: Bind to object properties:

// Component
user = {
  name: '',
  email: ''
};

// Template
<input [(ngModel)]="user.name">
<input [(ngModel)]="user.email">

Changes update the object directly.
```

### 💡 Pro Tips

**1. Use with Getters for Derived Values**
```typescript
firstName = '';
lastName = '';

get fullName(): string {
  return `${this.firstName} ${this.lastName}`.trim();
}

// Template
<input [(ngModel)]="firstName">
<input [(ngModel)]="lastName">
<p>Full Name: {{ fullName }}</p>
```

**2. Debounce Updates for Performance**
```typescript
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

searchTerm = '';
searchSubject = new Subject<string>();

ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300)
  ).subscribe(term => this.search(term));
}

onSearchChange() {
  this.searchSubject.next(this.searchTerm);
}

// Template
<input [(ngModel)]="searchTerm" (ngModelChange)="onSearchChange()">
```

**3. Consider Signals for Modern Apps**
```typescript
// Angular 16+
import { signal } from '@angular/core';

name = signal('');

// Template
<input [value]="name()" 
       (input)="name.set($event.target.value)">
<p>{{ name() }}</p>
```

### 🧪 Can You Answer These?

1. ❓ What error occurs if you forget to import FormsModule?
2. ❓ How is [(ngModel)] different from [ngModel]?
3. ❓ Can you use [(ngModel)] on a div element?
4. ❓ What's the alternative to [(ngModel)] in Reactive Forms?
5. ❓ How do you implement custom two-way binding for your own component?

---

**🎉 SECTION 1 COMPLETE!**

---

# SECTION 2: DIRECTIVES

*Superpowers for HTML - Control structure, styling, and DOM manipulation*

---

## 7. DIRECTIVES OVERVIEW

### 🎯 Simple Definition
Directives are **special instructions that add behavior to HTML elements**. They extend HTML capabilities by adding/removing DOM elements, changing appearance, or modifying behavior. Think of them as "superpowers" for your HTML!

### 💼 Types of Directives

**3 Main Types:**

1. **Structural Directives** - Modify DOM structure
   - Add/remove elements from DOM
   - Start with `*` (asterisk)
   - Examples: `*ngIf`, `*ngFor`, `*ngSwitch`
   - Only ONE per element

2. **Attribute Directives** - Change appearance/behavior
   - Modify existing elements
   - No asterisk
   - Examples: `ngClass`, `ngStyle`, `ngModel`
   - Multiple allowed per element

3. **Component Directives** - Components are directives!
   - Templates with logic
   - Examples: `<app-header>`, `<app-card>`

### 📊 Comparison Table

| Type | Symbol | DOM Change | Multiple Allowed | Examples |
|------|--------|------------|------------------|----------|
| **Structural** | `*` | Yes ✅ | No ❌ (one per element) | `*ngIf`, `*ngFor` |
| **Attribute** | None | No ❌ | Yes ✅ | `ngClass`, `ngStyle` |
| **Component** | None | Yes ✅ | N/A | `<app-header>` |

### 💡 Real-World Analogy

```
Structural Directives = Building/Demolishing rooms in a house 🏗️
  - Add/remove entire structures
  - *ngIf: "Build this room if condition true"
  - *ngFor: "Build multiple rooms based on array"

Attribute Directives = Painting/Decorating existing rooms 🎨
  - Change appearance of existing elements
  - ngClass: "Paint this room blue"
  - ngStyle: "Change furniture style"

Component Directives = Pre-built furniture units 🛋️
  - Complete functional units
  - <app-sofa>: Ready-to-use component
```

### 🆚 Structural vs Attribute - Key Differences

**Structural Directive (*ngIf):**
```html
<div *ngIf="showElement">
  <!-- If false → Entire div REMOVED from DOM -->
  This element may not exist in DOM
</div>
```

**Attribute Directive ([hidden]):**
```html
<div [hidden]="!showElement">
  <!-- If false → div stays in DOM, just hidden with CSS -->
  This element always exists in DOM
</div>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Multiple structural directives on one element
<div *ngIf="condition" *ngFor="let item of items">
  <!-- ERROR! Can't have 2 structural directives -->
</div>

// ✅ CORRECT: Nest or use ng-container
<div *ngIf="condition">
  <div *ngFor="let item of items">
    {{ item }}
  </div>
</div>

// Or
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>

// ❌ MISTAKE 2: Forgetting asterisk for structural directives
<div ngIf="condition">  <!-- Won't work! -->
<div *ngIf="condition">  <!-- ✅ Correct -->

// ❌ MISTAKE 3: Using attribute directive syntax on structural
<div [ngIf]="condition">  <!-- Wrong syntax -->
<div *ngIf="condition">    <!-- ✅ Correct -->

// ❌ MISTAKE 4: Confusing *ngIf with [hidden]
// Both hide elements but work differently!
<div *ngIf="show">        <!-- Removes from DOM -->
<div [hidden]="!show">    <!-- Stays in DOM, CSS hidden -->
```

### 📝 How Structural Directives Work (Under the Hood)

**What You Write:**
```html
<div *ngIf="condition">
  Content
</div>
```

**What Angular Creates:**
```html
<ng-template [ngIf]="condition">
  <div>
    Content
  </div>
</ng-template>
```

The `*` is syntactic sugar that Angular expands into `<ng-template>`!

### 🎤 Important Interview Q&A

**Q1: What are directives in Angular?**
```
A: Directives are classes that add behavior to HTML elements. 
Three types:
1. Structural (*ngIf, *ngFor) - Change DOM structure
2. Attribute (ngClass, ngStyle) - Change appearance/behavior
3. Component (custom elements) - Templates with logic

All components are directives, but not all directives are components.
```

**Q2: What's the difference between structural and attribute directives?**
```
A:
STRUCTURAL:
- Modify DOM (add/remove elements)
- Use * prefix
- Only one per element
- Examples: *ngIf, *ngFor

ATTRIBUTE:
- Change existing elements
- No * prefix
- Multiple per element
- Examples: ngClass, ngStyle

Key: Structural changes DOM structure, Attribute changes properties.
```

**Q3: Why can't you have multiple structural directives on one element?**
```
A: Angular can't determine the order to apply them.

❌ <div *ngIf="show" *ngFor="let item of items">
Should it:
- Show div if true, then loop?
- Loop items, then check if show?

✅ Solution: Nest or use ng-container
<ng-container *ngIf="show">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

**Q4: What does the asterisk (*) mean in directives?**
```
A: Asterisk is syntactic sugar for <ng-template>.

*ngIf="condition" expands to:
<ng-template [ngIf]="condition">
  ...content...
</ng-template>

Angular transforms starred directives into template wrapping.
```

**Q5: Can you create custom directives?**
```
A: Yes! Two types:

1. Custom Attribute Directive:
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    // Add behavior
  }
}

Usage: <p appHighlight>Text</p>

2. Custom Structural Directive:
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    // Control template rendering
  }
}

Usage: <div *appUnless="condition">
```

### 💡 Pro Tips

**1. Use ng-container to Avoid Extra DOM Elements**
```html
<!-- ❌ Extra div in DOM -->
<div *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</div>

<!-- ✅ No extra element -->
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

**2. Prefer *ngIf Over [hidden] for Performance**
```html
<!-- ❌ Element stays in DOM (uses memory) -->
<heavy-component [hidden]="!show"></heavy-component>

<!-- ✅ Completely removed from DOM -->
<heavy-component *ngIf="show"></heavy-component>
```

**3. Use [ngClass] and [ngStyle] Together**
```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}"
     [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  Styled Content
</div>
```

### 🧪 Can You Answer These?

1. ❓ What's the difference between *ngIf and [hidden]?
2. ❓ Why does *ngFor need trackBy for large lists?
3. ❓ Can you use *ngIf and *ngFor on the same element?
4. ❓ What happens to event listeners when *ngIf removes an element?
5. ❓ How do you create a custom attribute directive?

---

## 8. *ngIf DIRECTIVE

### 🎯 Simple Definition
`*ngIf` conditionally adds or removes elements from the DOM based on a boolean expression. If true, element is rendered; if false, element is completely removed (not just hidden).

### 💼 Where It's Used & Benefits

**Use Cases:**
- Show/hide login/logout buttons
- Display loading spinners
- Show error messages
- Conditional UI elements
- Permission-based rendering
- Feature flags

**Benefits:**
- ✅ Better performance (elements removed from DOM)
- ✅ Memory efficient
- ✅ Cleaner than CSS hiding
- ✅ Prevents unnecessary rendering
- ✅ Security (sensitive data not in DOM)

### ⏰ When to Use It

```typescript
✅ Use *ngIf When:
- Element should be completely removed when hidden
- Heavy components (performance matters)
- Sensitive data (security)
- Different content for true/false cases
- Element depends on async data

❌ Don't Use When:
- Need animations (use [hidden] with animations)
- Frequently toggling (performance hit from add/remove)
- Element always exists but styled differently
```

### 📝 Basic Syntax & Variations

**1. Simple Condition:**
```html
<div *ngIf="isLoggedIn">
  Welcome, User!
</div>
```

**2. With Else Block:**
```html
<div *ngIf="isLoggedIn; else loginPrompt">
  Welcome back!
</div>

<ng-template #loginPrompt>
  <div>Please log in</div>
</ng-template>
```

**3. With Then and Else:**
```html
<div *ngIf="isLoggedIn; then loggedInBlock; else loggedOutBlock"></div>

<ng-template #loggedInBlock>
  <p>Welcome back!</p>
</ng-template>

<ng-template #loggedOutBlock>
  <p>Please log in</p>
</ng-template>
```

**4. Storing Value in Variable (as):**
```html
<div *ngIf="user$ | async as user">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
</div>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Using with interpolation
<div *ngIf="{{ condition }}">  // Wrong!
<div *ngIf="condition">         // ✅ Correct

// ❌ MISTAKE 2: Complex logic in template
<div *ngIf="user && user.age > 18 && user.verified && !user.blocked">
  // Too complex!
</div>

// ✅ CORRECT: Use getter
get canAccess(): boolean {
  return this.user && 
         this.user.age > 18 && 
         this.user.verified && 
         !this.user.blocked;
}
<div *ngIf="canAccess">Access granted</div>

// ❌ MISTAKE 3: Forgetting template reference for else
<div *ngIf="show; else elseBlock">Content</div>
<!-- No #elseBlock defined = Error! -->

// ✅ CORRECT
<div *ngIf="show; else elseBlock">Content</div>
<ng-template #elseBlock>Else content</ng-template>

// ❌ MISTAKE 4: Using *ngIf for styling
<div *ngIf="isActive">  <!-- Removes from DOM -->
  Always needs to exist but styled differently
</div>

// ✅ CORRECT: Use class binding
<div [class.active]="isActive">
  Always in DOM, just CSS changes
</div>
```

### 📝 Real-World Examples

**Example 1: Login/Logout Buttons**
```typescript
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userName: string = 'John Doe';
  
  login() {
    this.isLoggedIn = true;
  }
  
  logout() {
    this.isLoggedIn = false;
  }
}
```

```html
<header>
  <div *ngIf="!isLoggedIn">
    <button (click)="login()">Login</button>
    <button>Sign Up</button>
  </div>
  
  <div *ngIf="isLoggedIn">
    <span>Welcome, {{ userName }}!</span>
    <button (click)="logout()">Logout</button>
  </div>
</header>
```

**Example 2: Loading State**
```typescript
export class DataComponent {
  isLoading: boolean = true;
  data: string[] = [];
  error: string = '';
  
  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.isLoading = true;
    setTimeout(() => {
      this.data = ['Item 1', 'Item 2', 'Item 3'];
      this.isLoading = false;
    }, 2000);
  }
}
```

```html
<div class="data-container">
  <!-- Loading State -->
  <div *ngIf="isLoading" class="spinner">
    Loading... ⏳
  </div>
  
  <!-- Error State -->
  <div *ngIf="error && !isLoading" class="error">
    ❌ {{ error }}
  </div>
  
  <!-- Success State -->
  <div *ngIf="!isLoading && !error && data.length > 0">
    <h2>Data Loaded Successfully! ✅</h2>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  </div>
  
  <!-- Empty State -->
  <div *ngIf="!isLoading && !error && data.length === 0">
    No data available
  </div>
</div>
```

**Example 3: Permission-Based Rendering**
```typescript
export class DashboardComponent {
  userRole: 'admin' | 'user' | 'guest' = 'user';
  
  get isAdmin(): boolean {
    return this.userRole === 'admin';
  }
  
  get isUser(): boolean {
    return this.userRole === 'user';
  }
}
```

```html
<div class="dashboard">
  <h1>Dashboard</h1>
  
  <!-- Admin Only -->
  <div *ngIf="isAdmin" class="admin-panel">
    <h2>Admin Controls</h2>
    <button>Manage Users</button>
    <button>View Analytics</button>
    <button>System Settings</button>
  </div>
  
  <!-- User Features -->
  <div *ngIf="isUser || isAdmin">
    <h2>Your Content</h2>
    <button>View Profile</button>
    <button>Edit Settings</button>
  </div>
  
  <!-- Guest Message -->
  <div *ngIf="userRole === 'guest'">
    <p>Please <a href="/login">login</a> to access features</p>
  </div>
</div>
```

**Example 4: With Else Block**
```typescript
export class SubscriptionComponent {
  isPremium: boolean = false;
}
```

```html
<div class="features">
  <div *ngIf="isPremium; else freeFeatures">
    <h2>Premium Features ⭐</h2>
    <ul>
      <li>Unlimited Storage</li>
      <li>Priority Support</li>
      <li>Advanced Analytics</li>
      <li>No Ads</li>
    </ul>
  </div>
  
  <ng-template #freeFeatures>
    <h2>Free Features</h2>
    <ul>
      <li>5GB Storage</li>
      <li>Email Support</li>
      <li>Basic Analytics</li>
    </ul>
    <button>Upgrade to Premium</button>
  </ng-template>
</div>
```

**Example 5: Storing Observable Value**
```typescript
import { Observable, of } from 'rxjs';

export class UserComponent {
  user$: Observable<any> = of({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'avatar.jpg'
  });
}
```

```html
<!-- ❌ Bad: Multiple async pipes (multiple subscriptions) -->
<div *ngIf="user$ | async">
  <h2>{{ (user$ | async)?.name }}</h2>
  <p>{{ (user$ | async)?.email }}</p>
</div>

<!-- ✅ Good: Single async with 'as' -->
<div *ngIf="user$ | async as user">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
  <img [src]="user.avatar">
</div>
```

**Example 6: Complex Conditions with Getter**
```typescript
export class ProductComponent {
  product = {
    stock: 5,
    isActive: true,
    price: 100
  };
  
  userAge: number = 20;
  
  get canPurchase(): boolean {
    return this.product.stock > 0 && 
           this.product.isActive && 
           this.userAge >= 18;
  }
}
```

```html
<div class="product">
  <h2>Product Details</h2>
  
  <button *ngIf="canPurchase" (click)="buy()">
    Buy Now
  </button>
  
  <p *ngIf="!canPurchase">
    <span *ngIf="product.stock === 0">Out of Stock</span>
    <span *ngIf="!product.isActive">Product Inactive</span>
    <span *ngIf="userAge < 18">Age Restricted (18+)</span>
  </p>
</div>
```

### 🆚 *ngIf vs [hidden] vs CSS

| Feature | *ngIf | [hidden] | CSS display:none |
|---------|-------|----------|------------------|
| **In DOM?** | No (removed) | Yes (hidden) | Yes (hidden) |
| **Performance** | Better ✅ | Worse ❌ | Worse ❌ |
| **Memory** | Lower ✅ | Higher ❌ | Higher ❌ |
| **Animations** | Harder | Easier ✅ | Easier ✅ |
| **SEO** | Better ✅ | Worse ❌ | Worse ❌ |
| **Frequent Toggle** | Expensive | Cheaper ✅ | Cheaper ✅ |

**When to Use Each:**
```html
<!-- Heavy component, rarely shown → *ngIf -->
<heavy-component *ngIf="show"></heavy-component>

<!-- Light element, frequently toggled → [hidden] -->
<div [hidden]="!show">Frequently toggled</div>

<!-- Animation needed → [hidden] or CSS -->
<div [hidden]="!show" [@fadeIn]>Animated content</div>
```

### 🎤 Important Interview Q&A

**Q1: How does *ngIf work?**
```
A: *ngIf conditionally renders elements in the DOM.
- True → Element added to DOM
- False → Element completely removed from DOM
- Not just CSS hiding - actual DOM manipulation

Syntax: <div *ngIf="condition">Content</div>
```

**Q2: Difference between *ngIf and [hidden]?**
```
A:
*ngIf:
- Removes from DOM when false
- Better performance & memory
- Good for heavy components
- Bad for frequent toggling

[hidden]:
- Stays in DOM, CSS hidden
- Faster toggling
- Uses more memory
- Good for animations

Example:
*ngIf → Remove bedroom from house
[hidden] → Close bedroom door (still exists)
```

**Q3: How do you use *ngIf with else?**
```
A: Use ng-template with template reference:

<div *ngIf="condition; else elseBlock">
  True content
</div>

<ng-template #elseBlock>
  False content
</ng-template>

Cleaner than two separate *ngIf conditions!
```

**Q4: What does 'as' do in *ngIf?**
```
A: Stores the value in a local variable:

<div *ngIf="user$ | async as user">
  <p>{{ user.name }}</p>
  <p>{{ user.email }}</p>
</div>

Benefits:
- Single async pipe (one subscription)
- Cleaner template
- Better performance
```

**Q5: Can *ngIf check for null/undefined?**
```
A: Yes! *ngIf treats null/undefined as falsy:

<div *ngIf="user">  // Only shows if user exists
  {{ user.name }}
</div>

Prevents errors from accessing properties on null objects.
```

**Q6: Performance impact of *ngIf?**
```
A: 
Adding/Removing Cost:
- Removing: Fast (frees memory)
- Adding: Slower (creates DOM, runs lifecycle hooks)

Best Practices:
- Use for rarely toggled content
- Avoid for frequent show/hide
- Consider [hidden] for frequent toggles
- Use OnPush change detection for optimization
```

### 💡 Pro Tips

**1. Use Getters for Complex Logic**
```typescript
// ❌ Complex logic in template
<div *ngIf="user && user.age > 18 && user.verified && !user.suspended">

// ✅ Clean with getter
get isEligible(): boolean {
  return this.user && 
         this.user.age > 18 && 
         this.user.verified && 
         !this.user.suspended;
}
<div *ngIf="isEligible">
```

**2. Avoid Nested *ngIf for Similar Conditions**
```typescript
// ❌ Repetitive
<div *ngIf="data">
  <div *ngIf="data.length > 0">
    <div *ngFor="let item of data">{{ item }}</div>
  </div>
</div>

// ✅ Single check
<div *ngIf="data && data.length > 0">
  <div *ngFor="let item of data">{{ item }}</div>
</div>
```

**3. Use ng-container for Clean DOM**
```html
<!-- ❌ Extra div wrapper -->
<div *ngIf="show">
  <p>Content 1</p>
  <p>Content 2</p>
</div>

<!-- ✅ No extra element -->
<ng-container *ngIf="show">
  <p>Content 1</p>
  <p>Content 2</p>
</ng-container>
```

### 🧪 Can You Answer These?

1. ❓ What happens to component lifecycle when *ngIf becomes false?
2. ❓ How do you show loading/error/success states efficiently?
3. ❓ When would you choose [hidden] over *ngIf?
4. ❓ Can *ngIf be used with observables? How?
5. ❓ What's the performance difference between *ngIf and *ngIf with else?

---

## 9. @if and @else (Angular 17+)

### 🎯 Simple Definition
`@if` is the **modern, built-in control flow** syntax introduced in Angular 17. It replaces `*ngIf` with cleaner, more readable syntax, better performance, and built-in else/else-if support without ng-template.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Everything `*ngIf` does, but better!
- Conditional rendering
- Multiple condition branches
- Loading/error/success states
- Permission-based UI

**Benefits:**
- ✅ Better performance (faster rendering)
- ✅ Cleaner syntax (no ng-template needed)
- ✅ Built-in @else and @else if
- ✅ More readable code
- ✅ Easier debugging
- ✅ Type narrowing support

### ⏰ When to Use It

```typescript
✅ Use @if When:
- Angular 17+ projects
- New codebases
- Cleaner conditional logic needed
- Multiple conditions (if/else if/else)

✅ Keep *ngIf When:
- Older Angular versions (< 17)
- Migrating gradually
- Team familiarity with old syntax
```

### 📝 Syntax & Variations

**1. Simple @if:**
```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
}
```

**2. @if with @else:**
```html
@if (isLoggedIn) {
  <p>Welcome, {{ userName }}!</p>
} @else {
  <p>Please log in</p>
}
```

**3. @if with @else if:**
```html
@if (status === 'loading') {
  <p>Loading... ⏳</p>
} @else if (status === 'error') {
  <p>Error occurred ❌</p>
} @else if (status === 'success') {
  <p>Success! ✅</p>
} @else {
  <p>Unknown status</p>
}
```

**4. Nested @if:**
```html
@if (user) {
  @if (user.isPremium) {
    <p>Premium User ⭐</p>
  } @else {
    <p>Free User</p>
  }
}
```

### 🆚 *ngIf vs @if Comparison

| Feature | *ngIf (Old) | @if (New) |
|---------|-------------|-----------|
| **Syntax** | `*ngIf="condition"` | `@if (condition) { }` |
| **Else Block** | `<ng-template #ref>` | Built-in `@else { }` |
| **Else If** | Multiple `*ngIf` | Built-in `@else if` |
| **Performance** | Good | Better ✅ |
| **Readability** | Medium | Better ✅ |
| **Angular Version** | All | 17+ only |

**Side-by-Side Comparison:**

```html
<!-- OLD WAY (*ngIf) -->
<div *ngIf="condition; else elseBlock">
  True content
</div>
<ng-template #elseBlock>
  False content
</ng-template>

<!-- NEW WAY (@if) - Cleaner! -->
@if (condition) {
  <div>True content</div>
} @else {
  <div>False content</div>
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting parentheses around condition
@if condition {  // Error!
  Content
}

@if (condition) {  // ✅ Correct
  Content
}

// ❌ MISTAKE 2: Forgetting curly braces
@if (condition)  // Error!
  <p>Content</p>

@if (condition) {  // ✅ Correct
  <p>Content</p>
}

// ❌ MISTAKE 3: Using semicolon after condition
@if (condition); {  // Error!

@if (condition) {  // ✅ Correct

// ❌ MISTAKE 4: Multiple @else blocks
@if (condition) {
  Content
} @else {
  Else 1
} @else {  // Error! Only one @else allowed
  Else 2
}

// ✅ CORRECT: Use @else if
@if (condition1) {
  Content 1
} @else if (condition2) {
  Content 2
} @else {
  Content 3
}

// ❌ MISTAKE 5: Mixing *ngIf and @if syntax
<div *ngIf="show">  // Old syntax
  @if (condition) {  // New syntax - Confusing!
    Content
  }
</div>

// ✅ CORRECT: Use one style consistently
@if (show) {
  @if (condition) {
    Content
  }
}
```

### 📝 Real-World Examples

**Example 1: Login Status**
```typescript
export class HeaderComponent {
  isLoggedIn = false;
  userName = 'John Doe';
  
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
```

```html
<header>
  @if (isLoggedIn) {
    <div class="user-menu">
      <span>Welcome, {{ userName }}!</span>
      <button (click)="toggleLogin()">Logout</button>
    </div>
  } @else {
    <div class="auth-buttons">
      <button (click)="toggleLogin()">Login</button>
      <button>Sign Up</button>
    </div>
  }
</header>
```

**Example 2: Loading States (Multiple Conditions)**
```typescript
export class DataComponent {
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  data: any[] = [];
  errorMessage = '';
  
  loadData() {
    this.status = 'loading';
    setTimeout(() => {
      if (Math.random() > 0.5) {
        this.data = ['Item 1', 'Item 2', 'Item 3'];
        this.status = 'success';
      } else {
        this.errorMessage = 'Failed to load data';
        this.status = 'error';
      }
    }, 2000);
  }
}
```

```html
<div class="data-container">
  @if (status === 'idle') {
    <button (click)="loadData()">Load Data</button>
  } @else if (status === 'loading') {
    <div class="spinner">Loading... ⏳</div>
  } @else if (status === 'error') {
    <div class="error">
      ❌ {{ errorMessage }}
      <button (click)="loadData()">Retry</button>
    </div>
  } @else if (status === 'success') {
    <div class="success">
      <h2>Data Loaded! ✅</h2>
      <ul>
        @for (item of data; track item) {
          <li>{{ item }}</li>
        }
      </ul>
    </div>
  }
</div>
```

**Example 3: Role-Based UI**
```typescript
export class DashboardComponent {
  userRole: 'admin' | 'moderator' | 'user' | 'guest' = 'user';
  userName = 'Jane Smith';
}
```

```html
<div class="dashboard">
  <h1>Dashboard</h1>
  
  @if (userRole === 'admin') {
    <div class="admin-panel">
      <h2>Admin Panel 👑</h2>
      <button>Manage Users</button>
      <button>System Settings</button>
      <button>View All Data</button>
      <button>Analytics</button>
    </div>
  } @else if (userRole === 'moderator') {
    <div class="moderator-panel">
      <h2>Moderator Tools 🛡️</h2>
      <button>Manage Content</button>
      <button>Review Reports</button>
      <button>User Moderation</button>
    </div>
  } @else if (userRole === 'user') {
    <div class="user-panel">
      <h2>Welcome, {{ userName }}! 👤</h2>
      <button>My Profile</button>
      <button>My Content</button>
      <button>Settings</button>
    </div>
  } @else {
    <div class="guest-panel">
      <h2>Guest Mode 👋</h2>
      <p>Please <a href="/login">login</a> to access features</p>
      <button>Sign Up</button>
    </div>
  }
</div>
```

**Example 4: Nested Conditions**
```typescript
export class ProductComponent {
  product = {
    inStock: true,
    quantity: 5,
    isPremium: false,
    discount: 10
  };
  
  user = {
    isLoggedIn: true,
    isPremiumMember: false
  };
}
```

```html
<div class="product-card">
  @if (product.inStock) {
    <div class="in-stock">
      <h3>In Stock ✅</h3>
      <p>Quantity: {{ product.quantity }}</p>
      
      @if (product.discount > 0) {
        <span class="discount-badge">{{ product.discount }}% OFF</span>
      }
      
      @if (user.isLoggedIn) {
        <button class="buy-btn">Buy Now</button>
        
        @if (user.isPremiumMember && product.isPremium) {
          <p class="premium-perk">🌟 Extra 5% off for Premium Members!</p>
        }
      } @else {
        <p><a href="/login">Login</a> to purchase</p>
      }
    </div>
  } @else {
    <div class="out-of-stock">
      <h3>Out of Stock ❌</h3>
      <button>Notify When Available</button>
    </div>
  }
</div>
```

**Example 5: With Async Data**
```typescript
import { signal } from '@angular/core';

export class UserProfileComponent {
  user = signal<any>(null);
  loading = signal(true);
  
  ngOnInit() {
    setTimeout(() => {
      this.user.set({
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar: 'avatar.jpg',
        verified: true
      });
      this.loading.set(false);
    }, 1500);
  }
}
```

```html
<div class="profile">
  @if (loading()) {
    <p>Loading profile... ⏳</p>
  } @else if (user()) {
    <div class="user-info">
      <img [src]="user().avatar" [alt]="user().name">
      <h2>{{ user().name }}</h2>
      <p>{{ user().email }}</p>
      
      @if (user().verified) {
        <span class="verified-badge">✓ Verified</span>
      }
    </div>
  } @else {
    <p>No user data available</p>
  }
</div>
```

### 🎤 Important Interview Q&A

**Q1: What is @if in Angular?**
```
A: @if is the new built-in control flow syntax introduced in Angular 17.
It's a cleaner, more performant replacement for *ngIf with built-in
@else and @else if support.

Syntax: @if (condition) { content }
Benefits: Better performance, cleaner code, easier to read
```

**Q2: Difference between @if and *ngIf?**
```
A:
@if (Angular 17+):
- New syntax: @if (condition) { }
- Built-in @else { }
- Built-in @else if
- Better performance
- No ng-template needed
- Cleaner, more readable

*ngIf (All versions):
- Old syntax: *ngIf="condition"
- Else needs ng-template
- No built-in else-if
- Good performance
- More verbose

Recommendation: Use @if in new Angular 17+ projects
```

**Q3: How do you migrate from *ngIf to @if?**
```
A: Angular provides automatic migration:

Command: ng generate @angular/core:control-flow

Or manual migration:

Before (*ngIf):
<div *ngIf="show; else other">Show</div>
<ng-template #other>Other</ng-template>

After (@if):
@if (show) {
  <div>Show</div>
} @else {
  <div>Other</div>
}
```

**Q4: Can you use @if with @for together?**
```
A: Yes! They work perfectly together:

@if (items && items.length > 0) {
  <ul>
    @for (item of items; track item.id) {
      <li>{{ item.name }}</li>
    }
  </ul>
} @else {
  <p>No items found</p>
}
```

**Q5: Does @if support 'as' syntax for variables?**
```
A: Not directly like *ngIf, but you can use it within expressions:

*ngIf way:
<div *ngIf="user$ | async as user">
  {{ user.name }}
</div>

@if way (use signals or variables):
@if (user(); as userData) {  // With signals
  {{ userData.name }}
}

Or assign to component property first.
```

### 💡 Pro Tips

**1. Prefer @if for New Angular 17+ Projects**
```html
<!-- ✅ Modern approach -->
@if (condition) {
  Content
} @else {
  Other content
}

<!-- ❌ Old way (still works but verbose) -->
<div *ngIf="condition; else other">Content</div>
<ng-template #other>Other content</ng-template>
```

**2. Use @else if for Multiple Conditions**
```html
<!-- ✅ Clean with @else if -->
@if (status === 'loading') {
  Loading...
} @else if (status === 'error') {
  Error!
} @else if (status === 'success') {
  Success!
} @else {
  Unknown
}

<!-- ❌ Multiple *ngIf (inefficient) -->
<p *ngIf="status === 'loading'">Loading...</p>
<p *ngIf="status === 'error'">Error!</p>
<p *ngIf="status === 'success'">Success!</p>
```

**3. Combine with Signals for Reactivity**
```typescript
import { signal } from '@angular/core';

isVisible = signal(false);

toggle() {
  this.isVisible.update(v => !v);
}

// Template
@if (isVisible()) {
  <p>Visible content</p>
}
```

### 🧪 Can You Answer These?

1. ❓ What Angular version introduced @if?
2. ❓ Can you mix @if and *ngIf in the same component?
3. ❓ How do you handle async data with @if?
4. ❓ What's the performance advantage of @if over *ngIf?
5. ❓ How do you migrate existing *ngIf code to @if?

---

## 10. *ngFor DIRECTIVE

### 🎯 Simple Definition
`*ngFor` is a structural directive that **repeats an element for each item in an array**. It's like a loop in templates - creates multiple copies of an element based on your data array.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Display lists (products, users, posts)
- Render table rows
- Create navigation menus
- Show search results
- Display cards/tiles
- Generate form elements dynamically

**Benefits:**
- ✅ Dynamic list rendering
- ✅ Automatic updates when array changes
- ✅ Access to index and other metadata
- ✅ Performance optimized with trackBy
- ✅ Works with any iterable

### ⏰ When to Use It

```typescript
✅ Use *ngFor When:
- Rendering dynamic lists
- Data-driven UI
- Repeating elements based on array
- Tables, grids, cards

❌ Don't Use When:
- Static content (just write HTML)
- Single item (use interpolation)
- Complex nested loops (consider virtual scrolling)
```

### 📝 Basic Syntax

**Simple Loop:**
```html
<div *ngFor="let item of items">
  {{ item }}
</div>
```

**With Index:**
```html
<div *ngFor="let item of items; index as i">
  {{ i + 1 }}. {{ item }}
</div>
```

**Available Variables:**
```typescript
index: number      // Current index (0, 1, 2...)
first: boolean     // Is first item?
last: boolean      // Is last item?
even: boolean      // Is even index? (0, 2, 4...)
odd: boolean       // Is odd index? (1, 3, 5...)
count: number      // Total items
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting 'let' keyword
<div *ngFor="item of items">  // Error!
<div *ngFor="let item of items">  // ✅ Correct

// ❌ MISTAKE 2: Using 'in' instead of 'of'
<div *ngFor="let item in items">  // Wrong!
<div *ngFor="let item of items">  // ✅ Correct

// ❌ MISTAKE 3: No trackBy for large lists
<div *ngFor="let item of bigList">  // Performance issue!
<div *ngFor="let item of bigList; trackBy: trackByFn">  // ✅ Better

// ❌ MISTAKE 4: Wrong semicolon placement
<div *ngFor="let item of items, index as i">  // Wrong!
<div *ngFor="let item of items; index as i">  // ✅ Use semicolon

// ❌ MISTAKE 5: Modifying array while looping
<button *ngFor="let item of items" (click)="items.splice(0, 1)">
  // Causes issues!
</button>

// ✅ CORRECT: Use safe deletion
<button *ngFor="let item of items" (click)="deleteItem(item)">
  Delete
</button>

deleteItem(item: any) {
  const index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
  }
}
```

### 📝 Real-World Examples

**Example 1: Simple List**
```typescript
export class ShoppingListComponent {
  items: string[] = [
    'Milk',
    'Bread',
    'Eggs',
    'Butter',
    'Cheese'
  ];
}
```

```html
<h2>Shopping List 🛒</h2>
<ul>
  <li *ngFor="let item of items">
    {{ item }}
  </li>
</ul>
```

**Example 2: Object Array (Products)**
```typescript
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop', price: 50000, inStock: true },
    { id: 2, name: 'Mouse', price: 500, inStock: true },
    { id: 3, name: 'Keyboard', price: 2000, inStock: false },
    { id: 4, name: 'Monitor', price: 15000, inStock: true }
  ];
}
```

```html
<div class="products-grid">
  <div class="product-card" *ngFor="let product of products">
    <h3>{{ product.name }}</h3>
    <p class="price">₹{{ product.price }}</p>
    <p [class.in-stock]="product.inStock"
       [class.out-of-stock]="!product.inStock">
      {{ product.inStock ? '✅ In Stock' : '❌ Out of Stock' }}
    </p>
    <button [disabled]="!product.inStock">
      Add to Cart
    </button>
  </div>
</div>
```

**Example 3: With Index (Numbered List)**
```typescript
export class TutorialComponent {
  steps = [
    'Install Angular CLI',
    'Create new project',
    'Run development server',
    'Start coding!'
  ];
}
```

```html
<h2>Getting Started Tutorial</h2>
<ol>
  <li *ngFor="let step of steps; index as i">
    <strong>Step {{ i + 1 }}:</strong> {{ step }}
  </li>
</ol>
```

**Example 4: Using first/last/even/odd**
```typescript
export class TableComponent {
  users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
    { name: 'Diana', email: 'diana@example.com' }
  ];
}
```

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users; 
                first as isFirst;
                last as isLast;
                even as isEven;
                odd as isOdd"
        [class.first-row]="isFirst"
        [class.last-row]="isLast"
        [class.even-row]="isEven"
        [class.odd-row]="isOdd">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </tbody>
</table>
```

**Example 5: TrackBy for Performance**
```typescript
export class OptimizedListComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  // TrackBy function - IMPORTANT for performance!
  trackByFn(index: number, item: any): number {
    return item.id; // Use unique identifier
  }
  
  refreshItems() {
    // Fetch new data
    this.items = [
      { id: 1, name: 'Item 1 Updated' },
      { id: 2, name: 'Item 2' },
      { id: 4, name: 'Item 4 New' }
    ];
    // With trackBy, Angular reuses DOM for items with same ID
  }
}
```

```html
<div *ngFor="let item of items; trackBy: trackByFn">
  {{ item.name }}
</div>

<button (click)="refreshItems()">Refresh</button>
```

**Example 6: Nested *ngFor**
```typescript
export class NestedComponent {
  categories = [
    {
      name: 'Electronics',
      items: ['Laptop', 'Phone', 'Tablet']
    },
    {
      name: 'Clothing',
      items: ['Shirt', 'Pants', 'Shoes']
    },
    {
      name: 'Books',
      items: ['Fiction', 'Non-Fiction', 'Comics']
    }
  ];
}
```

```html
<div *ngFor="let category of categories">
  <h2>{{ category.name }}</h2>
  <ul>
    <li *ngFor="let item of category.items">
      {{ item }}
    </li>
  </ul>
</div>
```

**Example 7: Empty State Handling**
```typescript
export class SearchResultsComponent {
  results: any[] = [];
  isSearching = false;
}
```

```html
<div class="search-results">
  @if (isSearching) {
    <p>Searching... ⏳</p>
  } @else if (results.length > 0) {
    <div *ngFor="let result of results">
      <h3>{{ result.title }}</h3>
      <p>{{ result.description }}</p>
    </div>
  } @else {
    <p class="no-results">No results found 😕</p>
  }
</div>
```

**Example 8: Dynamic Form Fields**
```typescript
export class DynamicFormComponent {
  formFields = [
    { label: 'Name', type: 'text', required: true },
    { label: 'Email', type: 'email', required: true },
    { label: 'Phone', type: 'tel', required: false },
    { label: 'Message', type: 'textarea', required: true }
  ];
}
```

```html
<form>
  <div *ngFor="let field of formFields" class="form-field">
    <label>
      {{ field.label }}
      <span *ngIf="field.required" class="required">*</span>
    </label>
    
    @if (field.type === 'textarea') {
      <textarea [required]="field.required"></textarea>
    } @else {
      <input [type]="field.type" [required]="field.required">
    }
  </div>
  
  <button type="submit">Submit</button>
</form>
```

### 🎯 TrackBy - Performance Optimization

**Why TrackBy is Important:**

Without trackBy:
```typescript
// Angular recreates ALL DOM elements when array changes
items = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
// Later...
items = [{id: 1, name: 'A'}, {id: 2, name: 'B Updated'}];
// Angular destroys and recreates both elements! 😱
```

With trackBy:
```typescript
trackByFn(index: number, item: any) {
  return item.id; // Track by unique ID
}

// Same scenario
items = [{id: 1, name: 'A'}, {id: 2, name: 'B Updated'}];
// Angular reuses element for id:1, only updates id:2 ✅
```

**Performance Comparison:**
```
Without trackBy (1000 items):
- Array update: ~500ms
- All 1000 DOM elements recreated

With trackBy (1000 items):
- Array update: ~50ms
- Only changed elements updated
- 10x faster! 🚀
```

### 🎤 Important Interview Q&A

**Q1: What is *ngFor in Angular?**
```
A: *ngFor is a structural directive that repeats elements for each 
item in an iterable (array). It's like a for-loop in templates.

Syntax: <div *ngFor="let item of items">{{ item }}</div>

Creates one div for each item in the items array.
```

**Q2: What's the difference between *ngFor="let item of items" and "in items"?**
```
A:
"of" → Iterates over VALUES (correct) ✅
"in" → Iterates over KEYS (wrong for arrays) ❌

of items → [1, 2, 3] gives 1, 2, 3
in items → [1, 2, 3] gives 0, 1, 2 (indices)

Always use "of" for arrays in Angular!
```

**Q3: What is trackBy and why use it?**
```
A: trackBy is a function that helps Angular identify which items 
changed in the array, improving performance.

Without trackBy:
- Array updates → All DOM elements recreated
- Slow for large lists

With trackBy:
- Angular tracks items by unique ID
- Only changed items re-rendered
- Much faster!

trackByFn(index: number, item: any) {
  return item.id; // Unique identifier
}

<div *ngFor="let item of items; trackBy: trackByFn">
```

**Q4: What variables are available in *ngFor?**
```
A: Six context variables:

index: number     // Current index (0-based)
first: boolean    // true for first item
last: boolean     // true for last item
even: boolean     // true for even indices
odd: boolean      // true for odd indices
count: number     // Total number of items

Example:
<li *ngFor="let item of items; index as i; first as isFirst">
  {{ isFirst ? '👑' : '' }} {{ i + 1 }}. {{ item }}
</li>
```

**Q5: Can you use multiple *ngFor on the same element?**
```
A: No! Only one structural directive per element.

❌ Wrong:
<div *ngIf="show" *ngFor="let item of items">

✅ Correct - Nest them:
<div *ngIf="show">
  <div *ngFor="let item of items">{{ item }}</div>
</div>

✅ Or use ng-container:
<ng-container *ngIf="show">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

**Q6: How do you handle empty arrays?**
```
A: Combine with *ngIf or @if:

<div *ngIf="items.length > 0; else noItems">
  <div *ngFor="let item of items">{{ item }}</div>
</div>
<ng-template #noItems>
  <p>No items found</p>
</ng-template>

Or with @if (Angular 17+):
@if (items.length > 0) {
  <div *ngFor="let item of items">{{ item }}</div>
} @else {
  <p>No items found</p>
}
```

**Q7: Performance tips for *ngFor?**
```
A: 
1. Always use trackBy for large lists
2. Avoid complex calculations in template
3. Use OnPush change detection
4. Consider virtual scrolling for huge lists (1000+ items)
5. Limit nested *ngFor depth

Bad:
<div *ngFor="let item of items">
  {{ expensiveCalculation(item) }}
</div>

Good:
// Pre-calculate in component
ngOnInit() {
  this.processedItems = this.items.map(item => ({
    ...item,
    calculated: this.expensiveCalculation(item)
  }));
}

<div *ngFor="let item of processedItems">
  {{ item.calculated }}
</div>
```

### 💡 Pro Tips

**1. Use trackBy Always for Dynamic Lists**
```typescript
// ✅ Best practice
trackById(index: number, item: any) {
  return item.id;
}

<div *ngFor="let item of items; trackBy: trackById">
```

**2. Combine with @if for Better UX**
```html
@if (items.length > 0) {
  <div *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
  </div>
} @else {
  <p>No items to display</p>
}
```

**3. Use ng-container to Avoid Extra DOM**
```html
<!-- ❌ Extra div wrapper -->
<div *ngFor="let item of items">
  <p>{{ item.title }}</p>
  <p>{{ item.description }}</p>
</div>

<!-- ✅ No wrapper needed -->
<ng-container *ngFor="let item of items">
  <p>{{ item.title }}</p>
  <p>{{ item.description }}</p>
</ng-container>
```

**4. Consider Virtual Scrolling for Large Lists**
```typescript
// For 1000+ items, use CDK Virtual Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';

<cdk-virtual-scroll-viewport itemSize="50" class="viewport">
  <div *cdkVirtualFor="let item of items">
    {{ item }}
  </div>
</cdk-virtual-scroll-viewport>
```

### 🧪 Can You Answer These?

1. ❓ What's the performance difference with and without trackBy?
2. ❓ How do you iterate over object properties (not array)?
3. ❓ Can *ngFor work with observables directly?
4. ❓ What happens to event listeners when *ngFor re-renders?
5. ❓ How do you implement pagination with *ngFor?

---

## 11. @for LOOP (Angular 17+)

### 🎯 Simple Definition
`@for` is the **modern built-in loop syntax** in Angular 17+, replacing `*ngFor` with cleaner, faster, and more powerful iteration. Mandatory `track` keyword ensures better performance.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Everything *ngFor does, but better!
- Lists, tables, grids
- Dynamic UI generation
- Iterating collections

**Benefits:**
- ✅ Better performance (faster rendering)
- ✅ Mandatory `track` (prevents trackBy mistakes)
- ✅ Built-in `@empty` block
- ✅ Cleaner syntax
- ✅ Better type inference
- ✅ Less verbose

### ⏰ When to Use It

```typescript
✅ Use @for When:
- Angular 17+ projects
- New code
- Need cleaner syntax
- Want better performance

✅ Keep *ngFor When:
- Older Angular (< 17)
- Legacy codebases
- Gradual migration
```

### 📝 Syntax & Variations

**1. Basic @for:**
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}
```

**2. With @empty (for empty arrays):**
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items found</p>
}
```

**3. With Index ($index):**
```html
@for (item of items; track item.id; let idx = $index) {
  <div>{{ idx + 1 }}. {{ item.name }}</div>
}
```

**4. Available Variables:**
```typescript
$index: number    // Current index (0-based)
$first: boolean   // Is first item?
$last: boolean    // Is last item?
$even: boolean    // Even index?
$odd: boolean     // Odd index?
$count: number    // Total items
```

### 🆚 *ngFor vs @for Comparison

| Feature | *ngFor (Old) | @for (New) |
|---------|--------------|------------|
| **Syntax** | `*ngFor="let x of arr"` | `@for (x of arr; track x.id)` |
| **Track** | Optional (trackBy) | Mandatory ✅ |
| **Empty handling** | Separate *ngIf | Built-in `@empty` |
| **Performance** | Good | Better ✅ |
| **Variables** | `index as i` | `let i = $index` |
| **Readability** | Medium | Better ✅ |
| **Angular Version** | All | 17+ only |

**Side-by-Side:**

```html
<!-- OLD WAY (*ngFor) -->
<div *ngIf="items.length > 0; else noItems">
  <div *ngFor="let item of items; trackBy: trackByFn">
    {{ item.name }}
  </div>
</div>
<ng-template #noItems>
  <p>No items</p>
</ng-template>

<!-- NEW WAY (@for) - Much cleaner! -->
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items</p>
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting track (Mandatory!)
@for (item of items) {  // Error!
  {{ item }}
}

@for (item of items; track item.id) {  // ✅ Correct
  {{ item }}
}

// ❌ MISTAKE 2: Wrong variable syntax
@for (item of items; track item.id; index as i) {  // Old syntax!
  {{ i }}. {{ item }}
}

@for (item of items; track item.id; let i = $index) {  // ✅ Correct
  {{ i }}. {{ item }}
}

// ❌ MISTAKE 3: Forgetting parentheses
@for item of items; track item.id {  // Error!
}

@for (item of items; track item.id) {  // ✅ Correct
}

// ❌ MISTAKE 4: Using curly braces for variables
@for (item of items; track item.id; {let i = $index}) {  // Wrong!
}

@for (item of items; track item.id; let i = $index) {  // ✅ Correct
}

// ❌ MISTAKE 5: Track with index only (bad performance)
@for (item of items; track $index) {  // Works but not recommended
  {{ item }}
}

@for (item of items; track item.id) {  // ✅ Use unique ID
  {{ item }}
}
```

### 📝 Real-World Examples

**Example 1: Product List**
```typescript
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop', price: 50000, image: 'laptop.jpg' },
    { id: 2, name: 'Phone', price: 30000, image: 'phone.jpg' },
    { id: 3, name: 'Tablet', price: 20000, image: 'tablet.jpg' }
  ];
}
```

```html
<div class="products-grid">
  @for (product of products; track product.id) {
    <div class="product-card">
      <img [src]="product.image" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <p class="price">₹{{ product.price }}</p>
      <button>Add to Cart</button>
    </div>
  } @empty {
    <p class="no-products">No products available 😕</p>
  }
</div>
```

**Example 2: With Index and Special Variables**
```typescript
export class LeaderboardComponent {
  players = [
    { id: 1, name: 'Alice', score: 9500 },
    { id: 2, name: 'Bob', score: 8700 },
    { id: 3, name: 'Charlie', score: 8200 },
    { id: 4, name: 'Diana', score: 7900 }
  ];
}
```

```html
<h2>Leaderboard 🏆</h2>
<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    @for (player of players; track player.id; 
          let idx = $index;
          let isFirst = $first;
          let isLast = $last;
          let isEven = $even) {
      <tr [class.gold]="idx === 0"
          [class.silver]="idx === 1"
          [class.bronze]="idx === 2"
          [class.even-row]="isEven"
          [class.last-row]="isLast">
        <td>
          @if (isFirst) {
            🥇
          } @else if (idx === 1) {
            🥈
          } @else if (idx === 2) {
            🥉
          } @else {
            {{ idx + 1 }}
          }
        </td>
        <td>{{ player.name }}</td>
        <td>{{ player.score }}</td>
      </tr>
    } @empty {
      <tr>
        <td colspan="3">No players yet</td>
      </tr>
    }
  </tbody>
</table>
```

**Example 3: Nested @for Loops**
```typescript
export class MenuComponent {
  menu = [
    {
      category: 'Starters',
      items: [
        { id: 1, name: 'Spring Rolls', price: 150 },
        { id: 2, name: 'Soup', price: 120 }
      ]
    },
    {
      category: 'Main Course',
      items: [
        { id: 3, name: 'Pizza', price: 350 },
        { id: 4, name: 'Pasta', price: 280 }
      ]
    }
  ];
}
```

```html
<div class="menu">
  @for (section of menu; track section.category) {
    <div class="menu-section">
      <h2>{{ section.category }}</h2>
      <ul>
        @for (item of section.items; track item.id) {
          <li>
            <span class="name">{{ item.name }}</span>
            <span class="price">₹{{ item.price }}</span>
          </li>
        } @empty {
          <li class="no-items">No items in this category</li>
        }
      </ul>
    </div>
  } @empty {
    <p>Menu not available</p>
  }
</div>
```

**Example 4: With Conditional Rendering**
```typescript
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Buy groceries', completed: false, priority: 'high' },
    { id: 2, title: 'Finish report', completed: true, priority: 'medium' },
    { id: 3, title: 'Call dentist', completed: false, priority: 'low' }
  ];
  
  showCompleted = true;
  
  get filteredTasks() {
    return this.showCompleted 
      ? this.tasks 
      : this.tasks.filter(t => !t.completed);
  }
}
```

```html
<div class="task-list">
  <label>
    <input type="checkbox" [(ngModel)]="showCompleted">
    Show completed tasks
  </label>
  
  @for (task of filteredTasks; track task.id; let idx = $index) {
    <div class="task"
         [class.completed]="task.completed"
         [class.high-priority]="task.priority === 'high'">
      <span class="number">{{ idx + 1 }}</span>
      <span class="title">{{ task.title }}</span>
      
      @if (task.priority === 'high') {
        <span class="badge">🔴 High</span>
      }
      
      @if (task.completed) {
        <span class="status">✅ Done</span>
      }
    </div>
  } @empty {
    <p class="no-tasks">No tasks to show</p>
  }
</div>
```

**Example 5: Dynamic Column Count**
```typescript
export class GalleryComponent {
  images = [
    { id: 1, url: 'img1.jpg', title: 'Sunset' },
    { id: 2, url: 'img2.jpg', title: 'Mountain' },
    { id: 3, url: 'img3.jpg', title: 'Ocean' },
    { id: 4, url: 'img4.jpg', title: 'Forest' },
    { id: 5, url: 'img5.jpg', title: 'City' },
    { id: 6, url: 'img6.jpg', title: 'Desert' }
  ];
}
```

```html
<div class="gallery">
  @for (image of images; track image.id; 
        let idx = $index;
        let count = $count) {
    <div class="gallery-item"
         [style.width.%]="100 / 3"> <!-- 3 columns -->
      <img [src]="image.url" [alt]="image.title">
      <p>{{ image.title }}</p>
      <small>{{ idx + 1 }} of {{ count }}</small>
    </div>
  } @empty {
    <p>No images to display</p>
  }
</div>
```

### 🎯 Track - Performance Key

**Why track is Mandatory:**

```typescript
// *ngFor - trackBy optional (often forgotten → bad performance)
<div *ngFor="let item of items">  // No trackBy - slow!

// @for - track REQUIRED (good performance guaranteed)
@for (item of items; track item.id) {  // Must provide track!
```

**Track Strategies:**

```html
<!-- ✅ Best: Unique ID -->
@for (item of items; track item.id) { }

<!-- ✅ Good: Combination of properties -->
@for (item of items; track item.userId + '-' + item.timestamp) { }

<!-- ⚠️ Acceptable: Index (if no unique ID) -->
@for (item of items; track $index) { }

<!-- ❌ Bad: Object reference (defeats tracking purpose) -->
@for (item of items; track item) { }
```

### 🎤 Important Interview Q&A

**Q1: What is @for in Angular?**
```
A: @for is the new built-in loop syntax in Angular 17+, replacing 
*ngFor with better performance and mandatory tracking.

Syntax: @for (item of array; track item.id) { content }

Key features:
- Mandatory track keyword
- Built-in @empty block
- Better performance
- Cleaner syntax
```

**Q2: Difference between @for and *ngFor?**
```
A:
@for (Angular 17+):
- New syntax: @for (x of arr; track x.id)
- Mandatory tracking
- Built-in @empty
- Better performance
- Simpler variable syntax

*ngFor (All versions):
- Old syntax: *ngFor="let x of arr"
- Optional trackBy
- No built-in empty handling
- Good performance
- More verbose

Recommendation: Use @for in new Angular 17+ projects
```

**Q3: Why is track mandatory in @for?**
```
A: To enforce best practices and prevent performance issues.

Without tracking:
- Angular recreates ALL DOM elements on array changes
- Expensive and slow

With mandatory track:
- Forces developers to think about performance
- Angular reuses DOM elements efficiently
- Better app performance by default
```

**Q4: How do you handle empty arrays in @for?**
```
A: Use built-in @empty block:

@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items found</p>
}

Much cleaner than *ngFor + *ngIf combo!
```

**Q5: How do you access index in @for?**
```
A: Use 'let' with $index:

@for (item of items; track item.id; let idx = $index) {
  <div>{{ idx + 1 }}. {{ item }}</div>
}

Other variables:
let isFirst = $first
let isLast = $last
let isEven = $even
let isOdd = $odd
let totalCount = $count
```

**Q6: Can you nest @for loops?**
```
A: Yes! Perfect for matrices, nested lists:

@for (category of categories; track category.id) {
  <h2>{{ category.name }}</h2>
  @for (item of category.items; track item.id) {
    <p>{{ item.name }}</p>
  } @empty {
    <p>No items in category</p>
  }
}
```

### 💡 Pro Tips

**1. Always Use Unique IDs for Track**
```html
<!-- ✅ Best performance -->
@for (user of users; track user.id) {
  {{ user.name }}
}

<!-- ❌ Avoid index unless no ID available -->
@for (user of users; track $index) {
  {{ user.name }}
}
```

**2. Combine @for with @if/@else**
```html
@if (users.length > 0) {
  @for (user of users; track user.id) {
    <div>{{ user.name }}</div>
  }
} @else {
  <p>No users</p>
}

<!-- Or use @empty -->
@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
} @empty {
  <p>No users</p>
}
```

**3. Use Descriptive Variable Names**
```html
<!-- ❌ Unclear -->
@for (u of users; track u.id; let i = $index) {
  {{ i }}. {{ u.name }}
}

<!-- ✅ Clear -->
@for (user of users; track user.id; let index = $index) {
  {{ index + 1 }}. {{ user.name }}
}
```

### 🧪 Can You Answer These?

1. ❓ What happens if you don't provide track in @for?
2. ❓ Can @for iterate over observables directly?
3. ❓ How do you implement virtual scrolling with @for?
4. ❓ What's the performance difference between track by id vs track by $index?
5. ❓ Can you use @for with async pipe?

---

## 12. *ngSwitch DIRECTIVE

### 🎯 Simple Definition
`*ngSwitch` is a structural directive that displays **one element from multiple options** based on a switch expression. Like JavaScript's switch-case statement for templates.

### 💼 Where It's Used & Benefits

**Use Cases:**
- User role-based UI
- Status displays (loading/error/success)
- Tab content switching
- Theme/language selection
- Different views for different states

**Benefits:**
- ✅ Cleaner than multiple *ngIf
- ✅ Better performance (evaluates once)
- ✅ More maintainable
- ✅ Similar to switch-case logic

### ⏰ When to Use It

```typescript
✅ Use *ngSwitch When:
- Multiple mutually exclusive conditions
- Checking single value against many options
- Cleaner than multiple if-else
- 3+ different cases

❌ Don't Use When:
- Only 2 conditions → Use *ngIf with else
- Independent conditions → Use multiple *ngIf
- Complex boolean logic → Use *ngIf
```

### 📝 Syntax

```html
<div [ngSwitch]="expression">
  <p *ngSwitchCase="'value1'">Case 1</p>
  <p *ngSwitchCase="'value2'">Case 2</p>
  <p *ngSwitchCase="'value3'">Case 3</p>
  <p *ngSwitchDefault>Default case</p>
</div>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting quotes for string values
<div [ngSwitch]="status">
  <p *ngSwitchCase="loading">Loading</p>  // Wrong!
  <p *ngSwitchCase="'loading'">Loading</p>  // ✅ Correct
</div>

// ❌ MISTAKE 2: Using *ngSwitch instead of [ngSwitch]
<div *ngSwitch="status">  // Wrong! No asterisk for parent
<div [ngSwitch]="status">  // ✅ Correct

// ❌ MISTAKE 3: Multiple *ngSwitchDefault
<div [ngSwitch]="value">
  <p *ngSwitchDefault>Default 1</p>
  <p *ngSwitchDefault>Default 2</p>  // Error! Only one default
</div>

// ❌ MISTAKE 4: Forgetting [ngSwitch] on parent
<div>  <!-- No ngSwitch! -->
  <p *ngSwitchCase="'a'">A</p>  // Won't work
</div>

// ✅ CORRECT
<div [ngSwitch]="value">
  <p *ngSwitchCase="'a'">A</p>
</div>
```

### 📝 Real-World Examples

**Example 1: User Role UI**
```typescript
export class DashboardComponent {
  userRole: 'admin' | 'moderator' | 'user' | 'guest' = 'user';
}
```

```html
<div class="dashboard" [ngSwitch]="userRole">
  <div *ngSwitchCase="'admin'" class="admin-panel">
    <h2>Admin Dashboard 👑</h2>
    <button>Manage Users</button>
    <button>System Settings</button>
    <button>View Analytics</button>
  </div>
  
  <div *ngSwitchCase="'moderator'" class="moderator-panel">
    <h2>Moderator Panel 🛡️</h2>
    <button>Review Content</button>
    <button>Manage Reports</button>
  </div>
  
  <div *ngSwitchCase="'user'" class="user-panel">
    <h2>User Dashboard 👤</h2>
    <button>My Profile</button>
    <button>My Posts</button>
  </div>
  
  <div *ngSwitchDefault class="guest-panel">
    <h2>Welcome Guest 👋</h2>
    <p>Please <a href="/login">login</a> to continue</p>
  </div>
</div>
```

**Example 2: Loading States**
```typescript
export class DataComponent {
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  data: any[] = [];
  errorMessage = '';
}
```

```html
<div class="data-container" [ngSwitch]="status">
  <div *ngSwitchCase="'idle'">
    <button (click)="loadData()">Load Data</button>
  </div>
  
  <div *ngSwitchCase="'loading'" class="loading">
    <div class="spinner"></div>
    <p>Loading data... ⏳</p>
  </div>
  
  <div *ngSwitchCase="'success'" class="success">
    <h2>Data Loaded! ✅</h2>
    <div *ngFor="let item of data">
      {{ item.name }}
    </div>
  </div>
  
  <div *ngSwitchCase="'error'" class="error">
    <h2>Error ❌</h2>
    <p>{{ errorMessage }}</p>
    <button (click)="loadData()">Retry</button>
  </div>
</div>
```

**Example 3: Tab Content**
```typescript
export class TabsComponent {
  activeTab: 'profile' | 'settings' | 'notifications' = 'profile';
  
  setActiveTab(tab: 'profile' | 'settings' | 'notifications') {
    this.activeTab = tab;
  }
}
```

```html
<div class="tabs-container">
  <!-- Tab Navigation -->
  <div class="tab-nav">
    <button [class.active]="activeTab === 'profile'"
            (click)="setActiveTab('profile')">
      Profile
    </button>
    <button [class.active]="activeTab === 'settings'"
            (click)="setActiveTab('settings')">
      Settings
    </button>
    <button [class.active]="activeTab === 'notifications'"
            (click)="setActiveTab('notifications')">
      Notifications
    </button>
  </div>
  
  <!-- Tab Content -->
  <div class="tab-content" [ngSwitch]="activeTab">
    <div *ngSwitchCase="'profile'">
      <h2>Profile</h2>
      <p>Your profile information...</p>
    </div>
    
    <div *ngSwitchCase="'settings'">
      <h2>Settings</h2>
      <p>Application settings...</p>
    </div>
    
    <div *ngSwitchCase="'notifications'">
      <h2>Notifications</h2>
      <p>Your notifications...</p>
    </div>
  </div>
</div>
```

**Example 4: Number Switch (Non-String)**
```typescript
export class PlanComponent {
  selectedPlan: number = 1; // 1, 2, or 3
}
```

```html
<div [ngSwitch]="selectedPlan">
  <div *ngSwitchCase="1">
    <h3>Free Plan</h3>
    <p>₹0/month</p>
  </div>
  
  <div *ngSwitchCase="2">
    <h3>Pro Plan</h3>
    <p>₹499/month</p>
  </div>
  
  <div *ngSwitchCase="3">
    <h3>Enterprise Plan</h3>
    <p>₹999/month</p>
  </div>
  
  <div *ngSwitchDefault>
    <p>Please select a plan</p>
  </div>
</div>
```

### 🆚 *ngSwitch vs Multiple *ngIf

```html
<!-- Using Multiple *ngIf (Verbose, evaluates all) -->
<div *ngIf="status === 'loading'">Loading...</div>
<div *ngIf="status === 'success'">Success!</div>
<div *ngIf="status === 'error'">Error!</div>
<div *ngIf="status !== 'loading' && status !== 'success' && status !== 'error'">
  Unknown
</div>

<!-- Using *ngSwitch (Cleaner, evaluates once) -->
<div [ngSwitch]="status">
  <div *ngSwitchCase="'loading'">Loading...</div>
  <div *ngSwitchCase="'success'">Success!</div>
  <div *ngSwitchCase="'error'">Error!</div>
  <div *ngSwitchDefault>Unknown</div>
</div>
```

### 🎤 Important Interview Q&A

**Q1: What is *ngSwitch in Angular?**
```
A: *ngSwitch is a structural directive for conditional rendering
based on a switch expression. Shows one element from multiple options.

Syntax:
<div [ngSwitch]="expression">
  <p *ngSwitchCase="value1">Case 1</p>
  <p *ngSwitchDefault>Default</p>
</div>

Like JavaScript switch-case for templates.
```

**Q2: Difference between *ngSwitch and *ngIf?**
```
A:
*ngIf:
- For simple true/false conditions
- Can have else block
- Each condition evaluated independently

*ngSwitch:
- For multiple mutually exclusive options
- Evaluates expression once
- Cleaner for 3+ conditions
- Has default case

Use *ngIf for 2 conditions, *ngSwitch for 3+
```

**Q3: Why [ngSwitch] without asterisk but *ngSwitchCase with?**
```
A:
[ngSwitch] → Attribute directive (property binding)
  - Sets up switch context
  - No DOM manipulation

*ngSwitchCase → Structural directive
  - Adds/removes elements
  - DOM manipulation

Parent uses [], children use *
```

**Q4: Can you have multiple *ngSwitchDefault?**
```
A: No! Only ONE *ngSwitchDefault allowed.

❌ Wrong:
<div [ngSwitch]="value">
  <p *ngSwitchDefault>Default 1</p>
  <p *ngSwitchDefault>Default 2</p>  // Error!
</div>

✅ Correct - Single default:
<div [ngSwitch]="value">
  <p *ngSwitchCase="'a'">A</p>
  <p *ngSwitchDefault>All others</p>
</div>
```

**Q5: Performance: *ngSwitch vs multiple *ngIf?**
```
A:
*ngSwitch:
- Evaluates expression ONCE
- Better for many conditions
- ✅ More efficient

Multiple *ngIf:
- Evaluates EACH condition
- All conditions checked even after match
- Slower for many conditions

For 3+ conditions, *ngSwitch is faster.
```

### 💡 Pro Tips

**1. Use for Mutually Exclusive States**
```html
<!-- ✅ Perfect for ngSwitch -->
<div [ngSwitch]="userRole">
  <div *ngSwitchCase="'admin'">Admin Panel</div>
  <div *ngSwitchCase="'user'">User Panel</div>
</div>

<!-- ❌ Independent conditions - use *ngIf -->
<div *ngIf="isLoggedIn">Welcome</div>
<div *ngIf="hasNotifications">You have messages</div>
```

**2. Provide *ngSwitchDefault for Safety**
```html
<div [ngSwitch]="status">
  <div *ngSwitchCase="'active'">Active</div>
  <div *ngSwitchCase="'inactive'">Inactive</div>
  <!-- Always have default for unexpected values -->
  <div *ngSwitchDefault>Unknown Status</div>
</div>
```

**3. Works with Any Type**
```html
<!-- Strings -->
<div [ngSwitch]="'status'">

<!-- Numbers -->
<div [ngSwitch]="level">
  <p *ngSwitchCase="1">Level 1</p>
  <p *ngSwitchCase="2">Level 2</p>
</div>

<!-- Booleans -->
<div [ngSwitch]="isActive">
  <p *ngSwitchCase="true">Active</p>
  <p *ngSwitchCase="false">Inactive</p>
</div>
```

### 🧪 Can You Answer These?

1. ❓ When would you use *ngSwitch over multiple *ngIf statements?
2. ❓ Can *ngSwitchCase match complex objects?
3. ❓ What happens if no case matches and no default?
4. ❓ Can you nest *ngSwitch inside *ngSwitch?
5. ❓ How is *ngSwitch different from @switch (Angular 17+)?

---

## 13. @switch (Angular 17+)

### 🎯 Simple Definition
`@switch` is the **modern built-in switch syntax** in Angular 17+, replacing `*ngSwitch` with cleaner, more readable conditional rendering.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Everything *ngSwitch does, but cleaner!
- Role-based UI
- Status/state displays
- Tab content
- Multiple mutually exclusive conditions

**Benefits:**
- ✅ Cleaner syntax
- ✅ More readable
- ✅ No directive imports needed
- ✅ Better type safety
- ✅ Easier to nest
- ✅ Block-based (like if/for)

### ⏰ When to Use It

```typescript
✅ Use @switch When:
- Angular 17+ projects
- Multiple exclusive conditions (3+)
- Cleaner code needed
- New code development

✅ Keep *ngSwitch When:
- Angular < 17
- Legacy codebases
- Gradual migration
```

### 📝 Syntax

**Basic Structure:**
```html
@switch (expression) {
  @case ('value1') {
    <div>Content for value1</div>
  }
  @case ('value2') {
    <div>Content for value2</div>
  }
  @default {
    <div>Default content</div>
  }
}
```

### 🆚 *ngSwitch vs @switch Comparison

| Feature | *ngSwitch (Old) | @switch (New) |
|---------|----------------|---------------|
| **Syntax** | `[ngSwitch]` + `*ngSwitchCase` | `@switch` + `@case` |
| **Readability** | Medium | Better ✅ |
| **Parent Directive** | Needs [ngSwitch] | Direct @switch |
| **Case Syntax** | `*ngSwitchCase="'value'"` | `@case ('value')` |
| **Default** | `*ngSwitchDefault` | `@default` |
| **Nesting** | Complex | Easier ✅ |
| **Angular Version** | All | 17+ only |

**Side-by-Side:**

```html
<!-- OLD WAY (*ngSwitch) -->
<div [ngSwitch]="userRole">
  <div *ngSwitchCase="'admin'">
    <h2>Admin Dashboard</h2>
  </div>
  <div *ngSwitchCase="'user'">
    <h2>User Dashboard</h2>
  </div>
  <div *ngSwitchDefault>
    <h2>Guest View</h2>
  </div>
</div>

<!-- NEW WAY (@switch) - Cleaner! -->
@switch (userRole) {
  @case ('admin') {
    <h2>Admin Dashboard</h2>
  }
  @case ('user') {
    <h2>User Dashboard</h2>
  }
  @default {
    <h2>Guest View</h2>
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting parentheses
@switch userRole {  // Error!
  @case ('admin') {}
}

@switch (userRole) {  // ✅ Correct
  @case ('admin') {}
}

// ❌ MISTAKE 2: Forgetting curly braces
@switch (role) 
  @case ('admin') <div>Admin</div>  // Error!

@switch (role) {  // ✅ Correct
  @case ('admin') {
    <div>Admin</div>
  }
}

// ❌ MISTAKE 3: Using quotes incorrectly for numbers
@switch (level) {
  @case ('1') {  // Wrong! Comparing number to string
  }
}

@switch (level) {
  @case (1) {  // ✅ Correct - no quotes for numbers
  }
}

// ❌ MISTAKE 4: Multiple @default blocks
@switch (value) {
  @case ('a') { }
  @default { }
  @default { }  // Error! Only one default allowed
}

// ❌ MISTAKE 5: Using old syntax inside @switch
@switch (status) {
  *ngSwitchCase="'loading'" {  // Wrong! Mixed syntaxes
  }
}

@switch (status) {
  @case ('loading') {  // ✅ Correct
  }
}
```

### 📝 Real-World Examples

**Example 1: User Role Dashboard**
```typescript
export class DashboardComponent {
  userRole: 'superadmin' | 'admin' | 'moderator' | 'user' = 'user';
  userName = 'John Doe';
}
```

```html
<div class="dashboard">
  @switch (userRole) {
    @case ('superadmin') {
      <div class="superadmin-panel">
        <h2>🔑 Super Admin Dashboard</h2>
        <p>Welcome, {{ userName }}!</p>
        <ul>
          <li><a href="/admin/users">Manage All Users</a></li>
          <li><a href="/admin/settings">System Settings</a></li>
          <li><a href="/admin/security">Security Logs</a></li>
          <li><a href="/admin/billing">Billing Management</a></li>
        </ul>
      </div>
    }
    @case ('admin') {
      <div class="admin-panel">
        <h2>👑 Admin Dashboard</h2>
        <p>Welcome, {{ userName }}!</p>
        <ul>
          <li><a href="/admin/users">Manage Users</a></li>
          <li><a href="/admin/content">Content Management</a></li>
          <li><a href="/admin/analytics">View Analytics</a></li>
        </ul>
      </div>
    }
    @case ('moderator') {
      <div class="moderator-panel">
        <h2>🛡️ Moderator Panel</h2>
        <p>Welcome, {{ userName }}!</p>
        <ul>
          <li><a href="/mod/reports">Review Reports</a></li>
          <li><a href="/mod/content">Moderate Content</a></li>
        </ul>
      </div>
    }
    @case ('user') {
      <div class="user-panel">
        <h2>👤 User Dashboard</h2>
        <p>Welcome back, {{ userName }}!</p>
        <ul>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/posts">My Posts</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </div>
    }
    @default {
      <div class="guest-panel">
        <h2>👋 Welcome Guest</h2>
        <p>Please <a href="/login">log in</a> to access your dashboard</p>
      </div>
    }
  }
</div>
```

**Example 2: API Loading States**
```typescript
type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export class DataFetchComponent {
  status: ApiStatus = 'idle';
  data: any[] = [];
  error: string = '';
  
  fetchData() {
    this.status = 'loading';
    // API call...
  }
}
```

```html
<div class="data-view">
  @switch (status) {
    @case ('idle') {
      <div class="idle-state">
        <p>Ready to load data</p>
        <button (click)="fetchData()">Load Data 📥</button>
      </div>
    }
    @case ('loading') {
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Fetching data... ⏳</p>
        <p class="hint">This may take a few seconds</p>
      </div>
    }
    @case ('success') {
      <div class="success-state">
        <h2>Data Loaded Successfully! ✅</h2>
        <p>Found {{ data.length }} items</p>
        <div class="data-grid">
          @for (item of data; track item.id) {
            <div class="data-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          } @empty {
            <p>No data available</p>
          }
        </div>
        <button (click)="fetchData()">Refresh 🔄</button>
      </div>
    }
    @case ('error') {
      <div class="error-state">
        <h2>Error Loading Data ❌</h2>
        <p class="error-message">{{ error }}</p>
        <button (click)="fetchData()">Retry</button>
      </div>
    }
  }
</div>
```

**Example 3: Payment Status**
```typescript
type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';

export class PaymentComponent {
  paymentStatus: PaymentStatus = 'pending';
  orderId = '#ORD-12345';
  amount = 1999;
}
```

```html
<div class="payment-status">
  <h2>Order {{ orderId }}</h2>
  
  @switch (paymentStatus) {
    @case ('pending') {
      <div class="status pending">
        <span class="icon">⏱️</span>
        <h3>Payment Pending</h3>
        <p>Awaiting payment of ₹{{ amount }}</p>
        <button>Pay Now</button>
      </div>
    }
    @case ('processing') {
      <div class="status processing">
        <span class="icon">🔄</span>
        <h3>Processing Payment</h3>
        <p>Please wait while we process your payment...</p>
        <div class="progress-bar"></div>
      </div>
    }
    @case ('completed') {
      <div class="status completed">
        <span class="icon">✅</span>
        <h3>Payment Successful!</h3>
        <p>Thank you! Your payment of ₹{{ amount }} is confirmed.</p>
        <button>View Receipt</button>
      </div>
    }
    @case ('failed') {
      <div class="status failed">
        <span class="icon">❌</span>
        <h3>Payment Failed</h3>
        <p>We couldn't process your payment. Please try again.</p>
        <button>Retry Payment</button>
      </div>
    }
    @case ('refunded') {
      <div class="status refunded">
        <span class="icon">↩️</span>
        <h3>Payment Refunded</h3>
        <p>₹{{ amount }} has been refunded to your account.</p>
        <p class="hint">Please allow 5-7 business days</p>
      </div>
    }
    @default {
      <div class="status unknown">
        <span class="icon">❓</span>
        <h3>Unknown Status</h3>
        <p>Contact support for assistance</p>
      </div>
    }
  }
</div>
```

**Example 4: Nested @switch**
```typescript
export class UserProfileComponent {
  accountType: 'free' | 'premium' | 'enterprise' = 'free';
  subscriptionStatus: 'active' | 'expired' | 'cancelled' = 'active';
}
```

```html
<div class="profile">
  @switch (accountType) {
    @case ('free') {
      <div class="free-account">
        <h2>Free Account 🆓</h2>
        <p>Limited features available</p>
        <button>Upgrade to Premium</button>
      </div>
    }
    @case ('premium') {
      <div class="premium-account">
        <h2>Premium Account ⭐</h2>
        
        <!-- Nested @switch -->
        @switch (subscriptionStatus) {
          @case ('active') {
            <p class="status active">✅ Active Subscription</p>
            <button>Manage Subscription</button>
          }
          @case ('expired') {
            <p class="status expired">⚠️ Subscription Expired</p>
            <button>Renew Now</button>
          }
          @case ('cancelled') {
            <p class="status cancelled">❌ Subscription Cancelled</p>
            <button>Reactivate</button>
          }
        }
      </div>
    }
    @case ('enterprise') {
      <div class="enterprise-account">
        <h2>Enterprise Account 🏢</h2>
        <p>Full access to all features</p>
        <button>Contact Account Manager</button>
      </div>
    }
  }
</div>
```

**Example 5: Combined with @if**
```typescript
export class NotificationComponent {
  notificationType: 'info' | 'success' | 'warning' | 'error' = 'info';
  isCloseable = true;
  message = 'This is a notification';
}
```

```html
<div class="notification">
  @switch (notificationType) {
    @case ('info') {
      <div class="alert alert-info">
        <span class="icon">ℹ️</span>
        <p>{{ message }}</p>
        @if (isCloseable) {
          <button class="close">×</button>
        }
      </div>
    }
    @case ('success') {
      <div class="alert alert-success">
        <span class="icon">✅</span>
        <p>{{ message }}</p>
        @if (isCloseable) {
          <button class="close">×</button>
        }
      </div>
    }
    @case ('warning') {
      <div class="alert alert-warning">
        <span class="icon">⚠️</span>
        <p>{{ message }}</p>
        @if (isCloseable) {
          <button class="close">×</button>
        }
      </div>
    }
    @case ('error') {
      <div class="alert alert-error">
        <span class="icon">❌</span>
        <p>{{ message }}</p>
        <!-- Errors usually not closeable -->
        @if (isCloseable) {
          <button class="close">×</button>
        }
      </div>
    }
  }
</div>
```

### 🎤 Important Interview Q&A

**Q1: What is @switch in Angular?**
```
A: @switch is the new built-in switch syntax in Angular 17+,
replacing *ngSwitch with cleaner block-based syntax.

Syntax:
@switch (expression) {
  @case (value1) { content }
  @case (value2) { content }
  @default { content }
}

Benefits: Cleaner, more readable, easier to maintain.
```

**Q2: Difference between @switch and *ngSwitch?**
```
A:
@switch (Angular 17+):
- New syntax: @switch (x) { @case (1) {} }
- Block-based (like @if/@for)
- No directive imports
- Cleaner nesting
- More readable

*ngSwitch (All versions):
- Old syntax: [ngSwitch] + *ngSwitchCase
- Attribute + structural directives
- More verbose
- Complex nesting

Use @switch in new Angular 17+ projects.
```

**Q3: Can you nest @switch blocks?**
```
A: Yes! Much easier than nesting *ngSwitch:

@switch (category) {
  @case ('electronics') {
    <h2>Electronics</h2>
    @switch (brand) {
      @case ('apple') { <p>Apple products</p> }
      @case ('samsung') { <p>Samsung products</p> }
    }
  }
  @case ('clothing') {
    <h2>Clothing</h2>
  }
}

Cleaner and more readable than *ngSwitch nesting.
```

**Q4: Do you need @default in @switch?**
```
A: No, @default is optional (like *ngSwitchDefault).

If no case matches and no @default:
- Nothing renders
- No error

But recommended for safety:
@switch (value) {
  @case ('a') { }
  @case ('b') { }
  @default { <p>Unknown value</p> }  // Good practice
}
```

**Q5: Can @switch work with observables?**
```
A: Yes, with async pipe:

@switch (status$ | async) {
  @case ('loading') { <p>Loading...</p> }
  @case ('success') { <p>Success!</p> }
}

The async pipe unwraps the observable value.
```

### 💡 Pro Tips

**1. Combine @switch with @for**
```html
@switch (viewMode) {
  @case ('grid') {
    <div class="grid">
      @for (item of items; track item.id) {
        <div class="grid-item">{{ item.name }}</div>
      }
    </div>
  }
  @case ('list') {
    <ul>
      @for (item of items; track item.id) {
        <li>{{ item.name }}</li>
      }
    </ul>
  }
}
```

**2. Type Safety with Union Types**
```typescript
type Status = 'idle' | 'loading' | 'success' | 'error';

status: Status = 'idle'; // TypeScript enforces valid values

@switch (status) {  // TypeScript knows all possible values
  @case ('idle') { }
  @case ('loading') { }
  @case ('success') { }
  @case ('error') { }
}
```

**3. Use for State Machines**
```typescript
type GameState = 'menu' | 'playing' | 'paused' | 'gameover';

@switch (gameState) {
  @case ('menu') { <app-main-menu /> }
  @case ('playing') { <app-game /> }
  @case ('paused') { <app-pause-menu /> }
  @case ('gameover') { <app-game-over /> }
}
```

### 🧪 Can You Answer These?

1. ❓ Can you use @switch with template reference variables?
2. ❓ What's the performance difference between @switch and @if chains?
3. ❓ Can @switch handle null/undefined values?
4. ❓ How do you handle multiple values matching same case?
5. ❓ Can @switch expression be a method call?

---

## 14. ngClass DIRECTIVE

### 🎯 Simple Definition
`ngClass` is a **class manipulation directive** that dynamically adds/removes CSS classes based on conditions. Essential for conditional styling.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Conditional styling
- Active/inactive states
- Theme switching
- Status indicators
- Hover/focus effects
- Form validation styling

**Benefits:**
- ✅ Dynamic class management
- ✅ Multiple classes at once
- ✅ Conditional classes
- ✅ Cleaner than manual DOM manipulation
- ✅ Reactive to data changes

### ⏰ When to Use It

```typescript
✅ Use ngClass When:
- Conditional CSS classes
- Multiple class toggling
- Complex class logic
- Dynamic styling

❌ Use Static class When:
- Classes never change
- Example: <div class="container">
```

### 📝 Syntax Variations

**1. String Syntax:**
```html
<div [ngClass]="'active highlight'">Text</div>
```

**2. Array Syntax:**
```html
<div [ngClass]="['active', 'highlight', 'bold']">Text</div>
```

**3. Object Syntax (Most Common):**
```html
<div [ngClass]="{ 
  'active': isActive, 
  'disabled': isDisabled,
  'error': hasError
}">Text</div>
```

**4. Method Call:**
```html
<div [ngClass]="getClasses()">Text</div>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting quotes for class names
<div [ngClass]="{ active: true }">  // Wrong! 'active' will be variable
<div [ngClass]="{ 'active': true }">  // ✅ Correct

// ❌ MISTAKE 2: Using ngClass without brackets
<div ngClass="active">  // Wrong! Won't work dynamically
<div [ngClass]="'active'">  // ✅ Correct

// ❌ MISTAKE 3: Mixing static class and ngClass incorrectly
<div class="container" ngClass="active">  // Won't work
<div class="container" [ngClass]="'active'">  // ✅ Correct

// ❌ MISTAKE 4: Using && instead of object syntax
<div [ngClass]="isActive && 'active'">  // Complex, avoid
<div [ngClass]="{ 'active': isActive }">  // ✅ Clearer

// ❌ MISTAKE 5: Overwriting static classes
// Both work together fine, but be aware:
<div class="base-class" [ngClass]="dynamicClass">
// Both classes applied ✅
```

### 📝 Real-World Examples

**Example 1: Button States**
```typescript
export class ButtonComponent {
  isLoading = false;
  isDisabled = false;
  isPrimary = true;
  
  click() {
    this.isLoading = true;
    // API call...
  }
}
```

```html
<button 
  [ngClass]="{
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
    'btn-loading': isLoading,
    'cursor-not-allowed': isDisabled || isLoading
  }"
  [disabled]="isDisabled || isLoading"
  (click)="click()">
  @if (isLoading) {
    <span class="spinner"></span> Loading...
  } @else {
    Click Me
  }
</button>
```

```css
.btn-primary { background: blue; color: white; }
.btn-disabled { opacity: 0.5; }
.btn-loading { position: relative; padding-left: 30px; }
.cursor-not-allowed { cursor: not-allowed; }
```

**Example 2: Form Validation**
```typescript
export class LoginComponent {
  email = '';
  password = '';
  emailTouched = false;
  passwordTouched = false;
  
  get isEmailValid() {
    return this.email.includes('@');
  }
  
  get isPasswordValid() {
    return this.password.length >= 8;
  }
}
```

```html
<form>
  <div class="form-group">
    <input 
      type="email" 
      [(ngModel)]="email"
      (blur)="emailTouched = true"
      [ngClass]="{
        'input-valid': emailTouched && isEmailValid,
        'input-invalid': emailTouched && !isEmailValid,
        'input-touched': emailTouched
      }"
      placeholder="Email">
    @if (emailTouched && !isEmailValid) {
      <span class="error-message">Invalid email</span>
    }
  </div>
  
  <div class="form-group">
    <input 
      type="password" 
      [(ngModel)]="password"
      (blur)="passwordTouched = true"
      [ngClass]="{
        'input-valid': passwordTouched && isPasswordValid,
        'input-invalid': passwordTouched && !isPasswordValid,
        'input-touched': passwordTouched
      }"
      placeholder="Password">
    @if (passwordTouched && !isPasswordValid) {
      <span class="error-message">Password must be 8+ characters</span>
    }
  </div>
</form>
```

```css
.input-valid { border-color: green; }
.input-invalid { border-color: red; }
.input-touched { background-color: #f0f0f0; }
.error-message { color: red; font-size: 12px; }
```

**Example 3: Navigation Menu**
```typescript
export class NavComponent {
  currentRoute = '/home';
  
  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
```

```html
<nav>
  <a href="/home" 
     [ngClass]="{ 'nav-active': isActive('/home') }">
    Home
  </a>
  <a href="/products" 
     [ngClass]="{ 'nav-active': isActive('/products') }">
    Products
  </a>
  <a href="/about" 
     [ngClass]="{ 'nav-active': isActive('/about') }">
    About
  </a>
</nav>
```

```css
.nav-active {
  font-weight: bold;
  border-bottom: 2px solid blue;
  color: blue;
}
```

**Example 4: Card Status**
```typescript
export class TaskCardComponent {
  task = {
    title: 'Complete report',
    priority: 'high', // 'high' | 'medium' | 'low'
    completed: false,
    overdue: true
  };
}
```

```html
<div class="task-card"
     [ngClass]="{
       'priority-high': task.priority === 'high',
       'priority-medium': task.priority === 'medium',
       'priority-low': task.priority === 'low',
       'task-completed': task.completed,
       'task-overdue': task.overdue && !task.completed
     }">
  <h3>{{ task.title }}</h3>
  
  <div class="badges">
    <span class="priority-badge">{{ task.priority }}</span>
    @if (task.completed) {
      <span class="status-badge">✅ Done</span>
    } @else if (task.overdue) {
      <span class="status-badge">⚠️ Overdue</span>
    }
  </div>
</div>
```

```css
.task-card { border: 1px solid #ddd; padding: 15px; }
.priority-high { border-left: 4px solid red; }
.priority-medium { border-left: 4px solid orange; }
.priority-low { border-left: 4px solid green; }
.task-completed { opacity: 0.6; text-decoration: line-through; }
.task-overdue { background-color: #fff3cd; }
```

**Example 5: Theme Switcher**
```typescript
export class AppComponent {
  theme: 'light' | 'dark' = 'light';
  fontSize: 'small' | 'medium' | 'large' = 'medium';
  
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
```

```html
<div class="app"
     [ngClass]="{
       'theme-light': theme === 'light',
       'theme-dark': theme === 'dark',
       'font-small': fontSize === 'small',
       'font-medium': fontSize === 'medium',
       'font-large': fontSize === 'large'
     }">
  <header>
    <button (click)="toggleTheme()">
      @if (theme === 'light') {
        🌙 Dark Mode
      } @else {
        ☀️ Light Mode
      }
    </button>
  </header>
  
  <main>
    <p>Content here...</p>
  </main>
</div>
```

```css
.theme-light { background: white; color: black; }
.theme-dark { background: #1a1a1a; color: white; }
.font-small { font-size: 14px; }
.font-medium { font-size: 16px; }
.font-large { font-size: 18px; }
```

### 🎤 Important Interview Q&A

**Q1: What is ngClass in Angular?**
```
A: ngClass is an attribute directive for dynamically adding/removing
CSS classes based on conditions.

Syntax:
[ngClass]="{ 'className': condition }"

Use case: Conditional styling, active states, validation
```

**Q2: Different ways to use ngClass?**
```
A: Four ways:

1. String: [ngClass]="'class1 class2'"
2. Array: [ngClass]="['class1', 'class2']"
3. Object: [ngClass]="{ 'class1': true, 'class2': false }"
4. Method: [ngClass]="getClasses()"

Object syntax is most common for conditional classes.
```

**Q3: Can you use both class and [ngClass]?**
```
A: Yes! They work together:

<div class="base-class" [ngClass]="{ 'active': isActive }">

Result when isActive = true:
class="base-class active"

Static classes + dynamic classes = combined
```

**Q4: ngClass vs [class.className]?**
```
A:
[ngClass] - Multiple classes:
[ngClass]="{ 'class1': cond1, 'class2': cond2 }"

[class.className] - Single class:
[class.active]="isActive"

Use [class.x] for single class toggle
Use ngClass for multiple classes
```

**Q5: How to pass ngClass from parent to child?**
```
A:
Parent:
<app-button [customClasses]="{ 'btn-primary': true }"></app-button>

Child component:
@Input() customClasses: any;

<button [ngClass]="customClasses">Click</button>

Passes object/string/array to child component.
```

### 💡 Pro Tips

**1. Use Method for Complex Logic**
```typescript
get buttonClasses() {
  return {
    'btn-primary': this.type === 'primary',
    'btn-large': this.size === 'large',
    'btn-disabled': this.disabled,
    'btn-loading': this.loading
  };
}
```

```html
<button [ngClass]="buttonClasses">Click</button>
```

**2. Combine with Component State**
```html
<div [ngClass]="{
  'success': status === 'success',
  'error': status === 'error',
  'loading': status === 'loading'
}">
```

**3. Use for Animations**
```html
<div [ngClass]="{ 'fade-in': showContent }">
  Content
</div>
```

```css
.fade-in {
  animation: fadeIn 0.3s ease-in;
}
```

### 🧪 Can You Answer These?

1. ❓ What happens if two classes have conflicting styles?
2. ❓ Can ngClass work with CSS modules or scoped styles?
3. ❓ How does ngClass affect performance with many elements?
4. ❓ Can you use ternary operators in ngClass?
5. ❓ How do you debug ngClass not applying classes?

---

## 15. ngStyle DIRECTIVE

### 🎯 Simple Definition
`ngStyle` is an **inline style manipulation directive** that dynamically sets CSS styles based on conditions. Like ngClass but for inline styles instead of classes.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Dynamic colors, sizes, positions
- Calculated dimensions (width, height)
- Animation values
- Conditional styling without CSS classes
- Runtime style computation
- Theme-based styling

**Benefits:**
- ✅ Dynamic inline styles
- ✅ Multiple styles at once
- ✅ Computed values
- ✅ No CSS class needed
- ✅ Immediate style application

### ⏰ When to Use It

```typescript
✅ Use ngStyle When:
- Dynamic calculated values
- Runtime style computation
- User-controlled styling
- Inline styles needed

❌ Use CSS Classes When:
- Predefined styles
- Better performance needed
- Reusable styles
- Complex styling
```

### 📝 Syntax Variations

**1. Object Syntax (Most Common):**
```html
<div [ngStyle]="{ 
  'color': 'red', 
  'font-size': '20px',
  'background-color': '#f0f0f0'
}">Text</div>
```

**2. With Component Properties:**
```html
<div [ngStyle]="{ 
  'width': width + 'px',
  'height': height + 'px',
  'color': textColor
}">Text</div>
```

**3. Method Call:**
```html
<div [ngStyle]="getStyles()">Text</div>
```

**4. Conditional Styles:**
```html
<div [ngStyle]="{ 
  'color': isActive ? 'green' : 'red',
  'font-weight': isActive ? 'bold' : 'normal'
}">Text</div>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting units for size values
<div [ngStyle]="{ 'width': 100 }">  // Won't work!
<div [ngStyle]="{ 'width': '100px' }">  // ✅ Correct

// ❌ MISTAKE 2: Using camelCase incorrectly
<div [ngStyle]="{ fontSize: '20px' }">  // Works but inconsistent
<div [ngStyle]="{ 'font-size': '20px' }">  // ✅ Better (kebab-case)

// Both work, but kebab-case matches CSS:
[ngStyle]="{ 'background-color': 'red' }"  // ✅ Recommended
[ngStyle]="{ backgroundColor: 'red' }"     // Also works

// ❌ MISTAKE 3: Missing quotes for property names with hyphens
<div [ngStyle]="{ background-color: 'red' }">  // Error!
<div [ngStyle]="{ 'background-color': 'red' }">  // ✅ Correct

// ❌ MISTAKE 4: Overusing ngStyle (performance)
<!-- Bad: Inline styles for static values -->
<div [ngStyle]="{ 'color': 'blue' }">  // Just use CSS!

<!-- Good: Use for dynamic values -->
<div [ngStyle]="{ 'color': userColor }">  // ✅ Dynamic

// ❌ MISTAKE 5: Forgetting to add 'px' or other units
<div [ngStyle]="{ 'padding': 20 }">  // Wrong!
<div [ngStyle]="{ 'padding': '20px' }">  // ✅ Correct
<div [ngStyle]="{ 'padding.px': 20 }">  // ✅ Also correct (unit suffix)
```

### 📝 Real-World Examples

**Example 1: Progress Bar**
```typescript
export class ProgressComponent {
  progress = 65; // 0-100
  
  get progressColor(): string {
    if (this.progress < 30) return '#ff4444'; // Red
    if (this.progress < 70) return '#ffaa00'; // Orange
    return '#44ff44'; // Green
  }
}
```

```html
<div class="progress-container">
  <div class="progress-bar"
       [ngStyle]="{
         'width': progress + '%',
         'background-color': progressColor,
         'transition': 'width 0.3s ease'
       }">
    <span class="progress-text">{{ progress }}%</span>
  </div>
</div>
```

```css
.progress-container {
  width: 100%;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```

**Example 2: Dynamic Grid Layout**
```typescript
export class GalleryComponent {
  columnCount = 3;
  itemGap = 10;
  
  images = [
    { id: 1, url: 'img1.jpg', height: 200 },
    { id: 2, url: 'img2.jpg', height: 250 },
    { id: 3, url: 'img3.jpg', height: 180 }
  ];
  
  get gridStyles() {
    return {
      'display': 'grid',
      'grid-template-columns': `repeat(${this.columnCount}, 1fr)`,
      'gap': `${this.itemGap}px`
    };
  }
}
```

```html
<div class="controls">
  <label>
    Columns: 
    <input type="range" min="1" max="6" [(ngModel)]="columnCount">
    {{ columnCount }}
  </label>
  <label>
    Gap: 
    <input type="range" min="0" max="50" [(ngModel)]="itemGap">
    {{ itemGap }}px
  </label>
</div>

<div class="gallery" [ngStyle]="gridStyles">
  @for (image of images; track image.id) {
    <div class="gallery-item"
         [ngStyle]="{ 'height': image.height + 'px' }">
      <img [src]="image.url" alt="Gallery image">
    </div>
  }
</div>
```

**Example 3: User Customizable Theme**
```typescript
export class ThemeComponent {
  userSettings = {
    fontSize: 16,
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Arial',
    lineHeight: 1.5,
    padding: 20
  };
  
  get contentStyles() {
    return {
      'font-size': this.userSettings.fontSize + 'px',
      'background-color': this.userSettings.backgroundColor,
      'color': this.userSettings.textColor,
      'font-family': this.userSettings.fontFamily,
      'line-height': this.userSettings.lineHeight,
      'padding': this.userSettings.padding + 'px'
    };
  }
}
```

```html
<div class="theme-settings">
  <h3>Customize Appearance</h3>
  
  <label>
    Font Size: {{ userSettings.fontSize }}px
    <input type="range" min="12" max="24" [(ngModel)]="userSettings.fontSize">
  </label>
  
  <label>
    Background Color:
    <input type="color" [(ngModel)]="userSettings.backgroundColor">
  </label>
  
  <label>
    Text Color:
    <input type="color" [(ngModel)]="userSettings.textColor">
  </label>
  
  <label>
    Font Family:
    <select [(ngModel)]="userSettings.fontFamily">
      <option value="Arial">Arial</option>
      <option value="Georgia">Georgia</option>
      <option value="'Courier New'">Courier New</option>
    </select>
  </label>
  
  <label>
    Line Height: {{ userSettings.lineHeight }}
    <input type="range" min="1" max="2" step="0.1" [(ngModel)]="userSettings.lineHeight">
  </label>
  
  <label>
    Padding: {{ userSettings.padding }}px
    <input type="range" min="0" max="50" [(ngModel)]="userSettings.padding">
  </label>
</div>

<div class="preview-content" [ngStyle]="contentStyles">
  <h2>Preview</h2>
  <p>This is how your content will look with the current settings.</p>
  <p>Adjust the controls above to customize the appearance.</p>
</div>
```

**Example 4: Conditional Alert Styling**
```typescript
export class AlertComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() message = '';
  
  getAlertStyles() {
    const baseStyles = {
      'padding': '15px',
      'border-radius': '5px',
      'margin': '10px 0',
      'border-left': '4px solid'
    };
    
    switch(this.type) {
      case 'info':
        return {
          ...baseStyles,
          'background-color': '#e3f2fd',
          'color': '#1976d2',
          'border-left-color': '#1976d2'
        };
      case 'success':
        return {
          ...baseStyles,
          'background-color': '#e8f5e9',
          'color': '#388e3c',
          'border-left-color': '#388e3c'
        };
      case 'warning':
        return {
          ...baseStyles,
          'background-color': '#fff3e0',
          'color': '#f57c00',
          'border-left-color': '#f57c00'
        };
      case 'error':
        return {
          ...baseStyles,
          'background-color': '#ffebee',
          'color': '#d32f2f',
          'border-left-color': '#d32f2f'
        };
      default:
        return baseStyles;
    }
  }
}
```

```html
<div class="alert" [ngStyle]="getAlertStyles()">
  {{ message }}
</div>
```

**Example 5: Draggable Element Position**
```typescript
export class DraggableComponent {
  position = { x: 0, y: 0 };
  isDragging = false;
  
  startDrag(event: MouseEvent) {
    this.isDragging = true;
  }
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.position = {
        x: event.clientX,
        y: event.clientY
      };
    }
  }
  
  @HostListener('document:mouseup')
  stopDrag() {
    this.isDragging = false;
  }
  
  get boxStyles() {
    return {
      'position': 'fixed',
      'left': this.position.x + 'px',
      'top': this.position.y + 'px',
      'cursor': this.isDragging ? 'grabbing' : 'grab',
      'user-select': 'none'
    };
  }
}
```

```html
<div class="draggable-box"
     [ngStyle]="boxStyles"
     (mousedown)="startDrag($event)">
  <p>Drag me!</p>
  <small>Position: ({{ position.x }}, {{ position.y }})</small>
</div>
```

**Example 6: Battery Level Indicator**
```typescript
export class BatteryComponent {
  batteryLevel = 45; // 0-100
  isCharging = false;
  
  get batteryColor(): string {
    if (this.isCharging) return '#4caf50';
    if (this.batteryLevel <= 10) return '#f44336';
    if (this.batteryLevel <= 30) return '#ff9800';
    return '#4caf50';
  }
  
  get batteryStyles() {
    return {
      'width': this.batteryLevel + '%',
      'background-color': this.batteryColor,
      'transition': 'all 0.3s ease',
      'height': '100%',
      'border-radius': '3px'
    };
  }
}
```

```html
<div class="battery-widget">
  <div class="battery-icon">
    <div class="battery-level" [ngStyle]="batteryStyles"></div>
  </div>
  <span class="battery-text"
        [ngStyle]="{ 'color': batteryColor }">
    {{ batteryLevel }}%
    @if (isCharging) {
      ⚡
    }
  </span>
</div>
```

```css
.battery-icon {
  width: 100px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 3px;
  background: white;
  position: relative;
}

.battery-icon::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 20px;
  background: #333;
  border-radius: 0 3px 3px 0;
}
```

### 🆚 ngStyle vs ngClass

| Feature | ngStyle | ngClass |
|---------|---------|---------|
| **Purpose** | Inline styles | CSS classes |
| **Use For** | Dynamic values | Predefined styles |
| **Performance** | Slower (inline styles) | Faster (CSS classes) |
| **Syntax** | `{ 'color': 'red' }` | `{ 'active': true }` |
| **Best For** | Calculated values | Toggle states |
| **Reusability** | Less reusable | More reusable |

**When to Use What:**

```html
<!-- ✅ Use ngClass: Predefined styles -->
<div [ngClass]="{ 'error': hasError }"></div>
.error { color: red; border: 1px solid red; }

<!-- ✅ Use ngStyle: Dynamic/calculated values -->
<div [ngStyle]="{ 'width': calculateWidth() + 'px' }"></div>

<!-- ✅ Combine Both -->
<div class="button" 
     [ngClass]="{ 'active': isActive }"
     [ngStyle]="{ 'width': buttonWidth + 'px' }">
</div>
```

### 🎤 Important Interview Q&A

**Q1: What is ngStyle in Angular?**
```
A: ngStyle is an attribute directive for dynamically setting inline
CSS styles based on component properties.

Syntax:
[ngStyle]="{ 'property': value }"

Example:
[ngStyle]="{ 'color': 'red', 'font-size': '20px' }"

Use for: Dynamic, calculated, or runtime-computed styles.
```

**Q2: Difference between ngStyle and ngClass?**
```
A:
ngStyle:
- Sets inline styles
- For dynamic values
- Example: width, colors from user input
- Slower (inline styles)

ngClass:
- Adds/removes CSS classes
- For predefined styles
- Better performance
- More maintainable

Use ngClass when possible, ngStyle for calculated values.
```

**Q3: Can you use both camelCase and kebab-case in ngStyle?**
```
A: Yes, both work:

Kebab-case (CSS-style):
[ngStyle]="{ 'background-color': 'red' }"  // Need quotes

CamelCase (JS-style):
[ngStyle]="{ backgroundColor: 'red' }"     // No quotes needed

Recommendation: Use kebab-case for consistency with CSS.
```

**Q4: How to add units in ngStyle?**
```
A: Three ways:

1. String with unit:
[ngStyle]="{ 'width': '100px' }"

2. Concatenation:
[ngStyle]="{ 'width': width + 'px' }"

3. Unit suffix:
[ngStyle]="{ 'width.px': width }"

All work, choose based on preference.
```

**Q5: Performance: ngStyle vs static CSS?**
```
A:
Static CSS: Fastest
- Parsed once
- Browser optimized
- ✅ Use when styles don't change

ngClass: Fast
- Toggles existing classes
- Better than ngStyle
- ✅ Use for conditional styles

ngStyle: Slower
- Inline styles calculated each change
- Less efficient
- ⚠️ Use only for dynamic calculated values

Always prefer CSS/ngClass over ngStyle when possible.
```

**Q6: Can ngStyle work with CSS variables?**
```
A: Yes!

Component:
primaryColor = '#3f51b5';

Template:
<div [ngStyle]="{ '--primary-color': primaryColor }">
  <p class="text">Text with CSS variable color</p>
</div>

CSS:
.text {
  color: var(--primary-color);
}

Great for theming!
```

### 💡 Pro Tips

**1. Use Methods for Complex Styles**
```typescript
getBoxStyles() {
  return {
    'width': this.size + 'px',
    'height': this.size + 'px',
    'background-color': this.color,
    'transform': `rotate(${this.rotation}deg)`,
    'transition': 'all 0.3s ease'
  };
}
```

```html
<div [ngStyle]="getBoxStyles()"></div>
```

**2. Unit Suffix Shorthand**
```html
<!-- Instead of concatenation -->
<div [ngStyle]="{ 'width': width + 'px' }"></div>

<!-- Use unit suffix -->
<div [ngStyle]="{ 'width.px': width }"></div>

<!-- Multiple units -->
<div [ngStyle]="{ 
  'width.%': 50,
  'height.px': 200,
  'top.rem': 2
}"></div>
```

**3. Combine with Ternary for Simple Conditions**
```html
<div [ngStyle]="{ 
  'color': isActive ? 'green' : 'red',
  'font-weight': isActive ? 'bold' : 'normal',
  'opacity': isVisible ? 1 : 0.5
}">
</div>
```

**4. Use for CSS Variables (Theming)**
```typescript
theme = {
  primary: '#3f51b5',
  secondary: '#ff4081',
  background: '#fafafa'
};
```

```html
<div [ngStyle]="{
  '--primary': theme.primary,
  '--secondary': theme.secondary,
  '--bg': theme.background
}">
  <button class="themed-button">Click</button>
</div>
```

```css
.themed-button {
  background: var(--primary);
  color: white;
}
```

### 🧪 Can You Answer These?

1. ❓ What happens to ngStyle when component is destroyed?
2. ❓ Can ngStyle set transform properties?
3. ❓ How do you animate using ngStyle?
4. ❓ Can you use ngStyle with !important?
5. ❓ What's the performance impact of using many ngStyle bindings?

---

## 16. ng-container

### 🎯 Simple Definition
`ng-container` is a **logical grouping element** that doesn't render to the DOM. Perfect for applying directives without adding extra HTML elements.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Grouping elements without DOM nodes
- Applying *ngIf without wrapper div
- Structural directives without extra markup
- Clean HTML output
- Template organization

**Benefits:**
- ✅ No extra DOM elements
- ✅ Cleaner HTML
- ✅ Better performance (less DOM)
- ✅ Semantic clarity
- ✅ Works with all structural directives

### ⏰ When to Use It

```typescript
✅ Use ng-container When:
- Need directive but no wrapper element
- Grouping without affecting layout
- Multiple structural directives
- Clean DOM needed

❌ Don't Need When:
- Already have a wrapper element
- Need styling (use div/span)
```

### 📝 Syntax

```html
<!-- Basic ng-container -->
<ng-container *ngIf="condition">
  <p>Content here</p>
  <span>More content</span>
</ng-container>

<!-- With structural directives -->
<ng-container *ngFor="let item of items">
  <div>{{ item }}</div>
</ng-container>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Trying to style ng-container
<ng-container class="container">  // Won't work! Not in DOM
  Content
</ng-container>

<div class="container">  // ✅ Use div/span for styling
  Content
</div>

// ❌ MISTAKE 2: Multiple structural directives on one element
<div *ngIf="show" *ngFor="let item of items">  // Error!

// ✅ CORRECT: Use ng-container
<ng-container *ngIf="show">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>

// ❌ MISTAKE 3: Adding [ngStyle] or [ngClass]
<ng-container [ngClass]="{ 'active': true }">  // Won't work!
  Content
</ng-container>

// ✅ CORRECT: Use on actual element
<div [ngClass]="{ 'active': true }">
  Content
</div>

// ❌ MISTAKE 4: Expecting ng-container in inspector
// ng-container doesn't appear in browser DevTools
// Only its children are rendered
```

### 📝 Real-World Examples

**Example 1: Conditional Grouping Without Extra Div**
```typescript
export class UserComponent {
  user = {
    name: 'John Doe',
    isAdmin: true,
    isPremium: true
  };
}
```

```html
<!-- ❌ BAD: Extra div in DOM -->
<div *ngIf="user.isAdmin">
  <h2>{{ user.name }}</h2>
  <span class="badge">Admin</span>
  <button>Admin Panel</button>
</div>

<!-- ✅ GOOD: No extra wrapper -->
<ng-container *ngIf="user.isAdmin">
  <h2>{{ user.name }}</h2>
  <span class="badge">Admin</span>
  <button>Admin Panel</button>
</ng-container>

<!-- Renders ONLY the 3 elements, no wrapper! -->
```

**Example 2: Table Rows with Conditional Rendering**
```typescript
export class TableComponent {
  users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true }
  ];
}
```

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- Can't put *ngIf and *ngFor on <tr> together! -->
    <ng-container *ngFor="let user of users">
      <tr *ngIf="user.active">
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>Active ✅</td>
      </tr>
    </ng-container>
  </tbody>
</table>

<!-- Clean output: Only active user rows, no extra elements! -->
```

**Example 3: Multiple Siblings Without Wrapper**
```typescript
export class ProductComponent {
  showDetails = true;
  product = {
    name: 'Laptop',
    price: 50000,
    description: 'High-performance laptop',
    specifications: ['16GB RAM', '512GB SSD', 'Intel i7']
  };
}
```

```html
<div class="product-card">
  <h3>{{ product.name }}</h3>
  <p class="price">₹{{ product.price }}</p>
  
  <!-- Show multiple elements together without wrapper -->
  <ng-container *ngIf="showDetails">
    <p class="description">{{ product.description }}</p>
    <ul class="specs">
      <li *ngFor="let spec of product.specifications">{{ spec }}</li>
    </ul>
    <button class="btn-details">More Info</button>
  </ng-container>
</div>

<!-- No extra div between price and description! -->
```

**Example 4: Role-Based Content (Clean Switch)**
```typescript
export class DashboardComponent {
  userRole: 'admin' | 'editor' | 'viewer' = 'admin';
}
```

```html
<div class="dashboard">
  <h1>Dashboard</h1>
  
  <ng-container [ngSwitch]="userRole">
    <ng-container *ngSwitchCase="'admin'">
      <button>Create User</button>
      <button>Delete User</button>
      <button>System Settings</button>
    </ng-container>
    
    <ng-container *ngSwitchCase="'editor'">
      <button>Create Post</button>
      <button>Edit Post</button>
    </ng-container>
    
    <ng-container *ngSwitchCase="'viewer'">
      <button>View Content</button>
    </ng-container>
  </ng-container>
</div>

<!-- Buttons render directly inside dashboard, no nesting! -->
```

**Example 5: Loading State with Skeleton**
```typescript
export class DataListComponent {
  isLoading = true;
  data: any[] = [];
  hasError = false;
}
```

```html
<div class="data-container">
  <!-- Loading state -->
  <ng-container *ngIf="isLoading">
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
  </ng-container>
  
  <!-- Error state -->
  <ng-container *ngIf="hasError && !isLoading">
    <p class="error">Failed to load data</p>
    <button>Retry</button>
  </ng-container>
  
  <!-- Success state -->
  <ng-container *ngIf="!isLoading && !hasError">
    <div *ngFor="let item of data" class="data-item">
      {{ item.name }}
    </div>
  </ng-container>
</div>
```

**Example 6: With Angular 17+ @if**
```html
<!-- Modern syntax with ng-container -->
<ng-container>
  @if (isLoggedIn) {
    <nav class="user-menu">
      <a href="/profile">Profile</a>
      <a href="/settings">Settings</a>
      <button (click)="logout()">Logout</button>
    </nav>
  } @else {
    <nav class="guest-menu">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  }
</ng-container>

<!-- All nav elements render without ng-container wrapper -->
```

### 🆚 ng-container vs div

| Feature | ng-container | div |
|---------|-------------|-----|
| **Renders to DOM** | ❌ No | ✅ Yes |
| **Can be styled** | ❌ No | ✅ Yes |
| **Adds HTML element** | ❌ No | ✅ Yes |
| **Structural directives** | ✅ Yes | ✅ Yes |
| **Performance** | Better (less DOM) | Slightly slower |
| **Use for layout** | ❌ No | ✅ Yes |
| **Use for grouping** | ✅ Yes | ✅ Yes |

**Visual Comparison:**

```html
<!-- With div -->
<div *ngIf="show">
  <p>Hello</p>
</div>

<!-- DOM Output: -->
<div>
  <p>Hello</p>
</div>

<!-- With ng-container -->
<ng-container *ngIf="show">
  <p>Hello</p>
</ng-container>

<!-- DOM Output: -->
<p>Hello</p>

<!-- Notice: No wrapper! -->
```

### 🎤 Important Interview Q&A

**Q1: What is ng-container in Angular?**
```
A: ng-container is a logical container that doesn't render to the DOM.
Used for grouping elements or applying structural directives without
adding extra HTML elements.

Syntax:
<ng-container *ngIf="condition">
  <p>Content</p>
</ng-container>

DOM output: Only <p>, no container!
```

**Q2: Why use ng-container instead of div?**
```
A: 
Reasons:
1. Cleaner DOM (no extra elements)
2. Better performance (less DOM nodes)
3. Semantic clarity (logical grouping)
4. Doesn't affect CSS layout
5. Doesn't interfere with flex/grid

Example: Table rows, multiple structural directives
```

**Q3: Can you style ng-container?**
```
A: No! ng-container doesn't render to DOM.

❌ Won't work:
<ng-container class="active">  // Not in DOM
<ng-container [ngStyle]="...">  // Not in DOM

✅ Use div/span for styling:
<div class="active">
  <ng-container *ngIf="show">...</ng-container>
</div>
```

**Q4: Can you use multiple structural directives on ng-container?**
```
A: No, same rule applies - only ONE structural directive per element.

❌ Wrong:
<ng-container *ngIf="show" *ngFor="let item of items">

✅ Correct - Nest:
<ng-container *ngIf="show">
  <ng-container *ngFor="let item of items">
    {{ item }}
  </ng-container>
</ng-container>

Or use ng-container for one directive, element for another.
```

**Q5: ng-container vs ng-template?**
```
A:
ng-container:
- Renders immediately
- For grouping
- Logical container
- Use with *ngIf, *ngFor directly

ng-template:
- Doesn't render by default
- Template definition
- Needs ngTemplateOutlet to render
- Use for reusable templates

ng-container = logical grouping
ng-template = template definition
```

### 💡 Pro Tips

**1. Use for Table Structures**
```html
<!-- Clean table without wrapper divs -->
<table>
  <tbody>
    <ng-container *ngFor="let category of categories">
      <tr class="category-header">
        <td colspan="3">{{ category.name }}</td>
      </tr>
      <tr *ngFor="let item of category.items">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.stock }}</td>
      </tr>
    </ng-container>
  </tbody>
</table>
```

**2. Combine with @if/@for (Angular 17+)**
```html
<ng-container>
  @if (showProducts) {
    @for (product of products; track product.id) {
      <div class="product">{{ product.name }}</div>
    }
  }
</ng-container>
```

**3. Use for Multiple Conditions Without Nesting**
```html
<ng-container *ngIf="condition1">
  <p>Condition 1 content</p>
</ng-container>

<ng-container *ngIf="condition2">
  <p>Condition 2 content</p>
</ng-container>

<!-- Independent conditions, clean output -->
```

### 🧪 Can You Answer These?

1. ❓ Does ng-container affect change detection?
2. ❓ Can ng-container have event listeners?
3. ❓ What's the performance benefit vs div?
4. ❓ Can you use ng-container with @ViewChild?
5. ❓ How does ng-container work with Content Projection?

---

## 17. ng-template & ngTemplateOutlet

### 🎯 Simple Definition
`ng-template` defines a **reusable template block** that doesn't render by default. `ngTemplateOutlet` **renders (instantiates)** that template. Think of it as a template stamp you can use multiple times.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Reusable template blocks
- Custom structural directives
- Dynamic content rendering
- Template customization
- Conditional complex content
- DRY (Don't Repeat Yourself) templates

**Benefits:**
- ✅ Template reusability
- ✅ No duplication
- ✅ Dynamic rendering
- ✅ Memory efficient (lazy)
- ✅ Conditional complexity
- ✅ Parameterized templates

### ⏰ When to Use It

```typescript
✅ Use ng-template When:
- Reusable template blocks
- Conditional complex content
- Template-based customization
- Building structural directives
- Else blocks (*ngIf else)

❌ Don't Use When:
- Simple static content
- One-time use (just use div)
```

### 📝 Syntax & Core Concepts

**1. Basic ng-template (Doesn't render by itself):**
```html
<!-- This won't show anything -->
<ng-template>
  <p>Hidden content</p>
</ng-template>
```

**2. With Template Reference:**
```html
<ng-template #myTemplate>
  <p>Template content</p>
</ng-template>

<!-- Render using ngTemplateOutlet -->
<ng-container *ngTemplateOutlet="myTemplate"></ng-container>
```

**3. With Context (Passing Data):**
```html
<ng-template #greetTemplate let-name="userName" let-age="userAge">
  <p>Hello {{ name }}, you are {{ age }} years old!</p>
</ng-template>

<ng-container 
  *ngTemplateOutlet="greetTemplate; context: { userName: 'John', userAge: 25 }">
</ng-container>
```

**4. With *ngIf else:**
```html
<div *ngIf="isLoggedIn; else loginTemplate">
  <p>Welcome back!</p>
</div>

<ng-template #loginTemplate>
  <p>Please log in</p>
  <button>Login</button>
</ng-template>
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Expecting ng-template to render without outlet
<ng-template>
  <p>This won't show!</p>  // Not rendered!
</ng-template>

<ng-template #myTemp>
  <p>This won't show either!</p>  // Need ngTemplateOutlet!
</ng-template>

// ✅ CORRECT: Use ngTemplateOutlet
<ng-template #myTemp>
  <p>This will show!</p>
</ng-template>
<ng-container *ngTemplateOutlet="myTemp"></ng-container>

// ❌ MISTAKE 2: Wrong context syntax
<ng-template #temp let-name>  // Missing "="
  {{ name }}
</ng-template>
<ng-container *ngTemplateOutlet="temp; context: { name: 'John' }">
// Won't work!

// ✅ CORRECT: Use let-var="key"
<ng-template #temp let-username="name">
  {{ username }}
</ng-template>
<ng-container *ngTemplateOutlet="temp; context: { name: 'John' }">

// ❌ MISTAKE 3: Using $implicit incorrectly
<ng-template #temp let-value>  // Expects $implicit in context
  {{ value }}
</ng-template>
<ng-container *ngTemplateOutlet="temp; context: { value: 123 }">
// Won't work!

// ✅ CORRECT: Use $implicit or named variable
<ng-template #temp let-value>
  {{ value }}
</ng-template>
<ng-container *ngTemplateOutlet="temp; context: { $implicit: 123 }">

// Or named:
<ng-template #temp let-value="val">
  {{ value }}
</ng-template>
<ng-container *ngTemplateOutlet="temp; context: { val: 123 }">

// ❌ MISTAKE 4: Forgetting # for template reference
<ng-template myTemplate>  // Wrong!
<ng-template #myTemplate>  // ✅ Correct

// ❌ MISTAKE 5: Multiple template outlets with same context reference
// Context is shared - modifications affect all instances
```

### 📝 Real-World Examples

**Example 1: Loading/Error States (Reusable Templates)**
```typescript
export class DataComponent {
  status: 'loading' | 'error' | 'success' = 'loading';
  data: any[] = [];
  errorMessage = 'Something went wrong';
}
```

```html
<!-- Define reusable templates -->
<ng-template #loadingTemplate>
  <div class="loading-state">
    <div class="spinner"></div>
    <p>Loading data... ⏳</p>
  </div>
</ng-template>

<ng-template #errorTemplate>
  <div class="error-state">
    <p class="error-icon">❌</p>
    <p>{{ errorMessage }}</p>
    <button (click)="retry()">Retry</button>
  </div>
</ng-template>

<ng-template #successTemplate>
  <div class="success-state">
    <h2>Data Loaded! ✅</h2>
    <div *ngFor="let item of data">{{ item.name }}</div>
  </div>
</ng-template>

<!-- Use templates based on status -->
<div class="data-container">
  <ng-container [ngSwitch]="status">
    <ng-container *ngSwitchCase="'loading'">
      <ng-container *ngTemplateOutlet="loadingTemplate"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="'error'">
      <ng-container *ngTemplateOutlet="errorTemplate"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="'success'">
      <ng-container *ngTemplateOutlet="successTemplate"></ng-container>
    </ng-container>
  </ng-container>
</div>
```

**Example 2: Dynamic Card Template with Context**
```typescript
export class CardListComponent {
  users = [
    { id: 1, name: 'Alice', role: 'Admin', avatar: 'alice.jpg' },
    { id: 2, name: 'Bob', role: 'Editor', avatar: 'bob.jpg' },
    { id: 3, name: 'Charlie', role: 'Viewer', avatar: 'charlie.jpg' }
  ];
}
```

```html
<!-- Reusable card template -->
<ng-template #userCard let-user="userData" let-index="idx">
  <div class="card">
    <img [src]="user.avatar" [alt]="user.name">
    <h3>{{ index + 1 }}. {{ user.name }}</h3>
    <p class="role">{{ user.role }}</p>
    <button>View Profile</button>
  </div>
</ng-template>

<!-- Use template multiple times with different data -->
<div class="user-grid">
  <ng-container *ngFor="let user of users; let i = index">
    <ng-container 
      *ngTemplateOutlet="userCard; 
                        context: { userData: user, idx: i }">
    </ng-container>
  </ng-container>
</div>
```

**Example 3: Custom Table with Header/Row Templates**
```typescript
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() rowTemplate!: TemplateRef<any>;
}
```

```typescript
// custom-table.component.html
<table>
  <thead>
    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
  </thead>
  <tbody>
    <ng-container *ngFor="let row of data">
      <ng-container 
        *ngTemplateOutlet="rowTemplate; context: { $implicit: row }">
      </ng-container>
    </ng-container>
  </tbody>
</table>
```

```html
<!-- Usage in parent component -->
<app-custom-table [data]="products"
                  [headerTemplate]="header"
                  [rowTemplate]="row">
</app-custom-table>

<!-- Define templates -->
<ng-template #header>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
</ng-template>

<ng-template #row let-product>
  <tr>
    <td>{{ product.name }}</td>
    <td>₹{{ product.price }}</td>
    <td>{{ product.stock }}</td>
  </tr>
</ng-template>
```

**Example 4: Tabs with Content Templates**
```typescript
export class TabsComponent {
  activeTab: 'profile' | 'settings' | 'notifications' = 'profile';
  
  setTab(tab: 'profile' | 'settings' | 'notifications') {
    this.activeTab = tab;
  }
}
```

```html
<!-- Tab Navigation -->
<div class="tab-nav">
  <button [class.active]="activeTab === 'profile'"
          (click)="setTab('profile')">Profile</button>
  <button [class.active]="activeTab === 'settings'"
          (click)="setTab('settings')">Settings</button>
  <button [class.active]="activeTab === 'notifications'"
          (click)="setTab('notifications')">Notifications</button>
</div>

<!-- Define tab content templates -->
<ng-template #profileTab>
  <div class="tab-content">
    <h2>Profile</h2>
    <p>Your profile information...</p>
    <form>
      <input type="text" placeholder="Name">
      <input type="email" placeholder="Email">
      <button>Save</button>
    </form>
  </div>
</ng-template>

<ng-template #settingsTab>
  <div class="tab-content">
    <h2>Settings</h2>
    <label>
      <input type="checkbox"> Enable notifications
    </label>
    <label>
      <input type="checkbox"> Dark mode
    </label>
  </div>
</ng-template>

<ng-template #notificationsTab>
  <div class="tab-content">
    <h2>Notifications</h2>
    <div class="notification">You have 3 new messages</div>
    <div class="notification">Your post was liked</div>
  </div>
</ng-template>

<!-- Render active tab content -->
<div class="tab-panel">
  <ng-container [ngSwitch]="activeTab">
    <ng-container *ngSwitchCase="'profile'">
      <ng-container *ngTemplateOutlet="profileTab"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="'settings'">
      <ng-container *ngTemplateOutlet="settingsTab"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="'notifications'">
      <ng-container *ngTemplateOutlet="notificationsTab"></ng-container>
    </ng-container>
  </ng-container>
</div>
```

**Example 5: Recursive Template (Tree Structure)**
```typescript
export class TreeComponent {
  treeData = {
    name: 'Root',
    children: [
      {
        name: 'Folder 1',
        children: [
          { name: 'File 1.1', children: [] },
          { name: 'File 1.2', children: [] }
        ]
      },
      {
        name: 'Folder 2',
        children: [
          { name: 'File 2.1', children: [] }
        ]
      }
    ]
  };
}
```

```html
<!-- Recursive template -->
<ng-template #treeNode let-node>
  <div class="tree-item">
    <span class="node-name">
      @if (node.children?.length > 0) {
        📁
      } @else {
        📄
      }
      {{ node.name }}
    </span>
    
    @if (node.children && node.children.length > 0) {
      <div class="children">
        @for (child of node.children; track child.name) {
          <!-- Recursive call! -->
          <ng-container 
            *ngTemplateOutlet="treeNode; context: { $implicit: child }">
          </ng-container>
        }
      </div>
    }
  </div>
</ng-template>

<!-- Start recursion -->
<div class="tree-view">
  <ng-container *ngTemplateOutlet="treeNode; context: { $implicit: treeData }">
  </ng-container>
</div>
```

**Example 6: Multiple Templates with $implicit**
```typescript
export class ListComponent {
  items = [
    { id: 1, name: 'Apple', type: 'fruit' },
    { id: 2, name: 'Carrot', type: 'vegetable' },
    { id: 3, name: 'Banana', type: 'fruit' }
  ];
}
```

```html
<!-- Template using $implicit (default binding) -->
<ng-template #itemTemplate let-item>
  <div class="item">
    <strong>{{ item.name }}</strong>
    <span class="badge">{{ item.type }}</span>
  </div>
</ng-template>

<!-- Use with different items -->
<div class="item-list">
  @for (item of items; track item.id) {
    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }">
    </ng-container>
  }
</div>
```

### 🆚 Comparisons

**ng-template vs ng-container:**

| Feature | ng-template | ng-container |
|---------|-------------|--------------|
| **Renders by default** | ❌ No | ✅ Yes |
| **Purpose** | Template definition | Logical grouping |
| **Needs outlet** | ✅ Yes | ❌ No |
| **Reusable** | ✅ Yes | ❌ No |
| **With context** | ✅ Yes | ❌ No |
| **Use case** | Reusable blocks | Grouping without wrapper |

### 🎤 Important Interview Q&A

**Q1: What is ng-template in Angular?**
```
A: ng-template is a template definition element that doesn't render
by default. It defines a reusable template block.

Syntax:
<ng-template #name>
  <p>Content</p>
</ng-template>

Must use ngTemplateOutlet or structural directive to render it.
```

**Q2: How do you render an ng-template?**
```
A: Three ways:

1. ngTemplateOutlet:
<ng-container *ngTemplateOutlet="templateRef"></ng-container>

2. With *ngIf else:
<div *ngIf="condition; else templateRef"></div>
<ng-template #templateRef>...</ng-template>

3. ViewChild + ViewContainerRef:
@ViewChild(TemplateRef) template!: TemplateRef<any>;
viewContainer.createEmbeddedView(this.template);
```

**Q3: What is context in ngTemplateOutlet?**
```
A: Context passes data to the template.

Template:
<ng-template #temp let-name="userName" let-age="userAge">
  {{ name }} - {{ age }}
</ng-template>

Usage:
<ng-container 
  *ngTemplateOutlet="temp; context: { userName: 'John', userAge: 25 }">
</ng-container>

Output: John - 25
```

**Q4: What is $implicit in template context?**
```
A: $implicit is the default property for unnamed let bindings.

<ng-template #temp let-value>  <!-- No "=" means $implicit -->
  {{ value }}
</ng-template>

<ng-container 
  *ngTemplateOutlet="temp; context: { $implicit: 'Hello' }">
</ng-container>

let-value binds to $implicit automatically.
```

**Q5: Difference between ng-template and ng-content?**
```
A:
ng-template:
- Template definition
- Doesn't render by default
- Needs ngTemplateOutlet
- For reusable templates

ng-content:
- Content projection
- Renders immediately
- For transclusion
- Parent-child communication

ng-template = reusable template
ng-content = slot for projected content
```

**Q6: Can you pass templates from parent to child?**
```
A: Yes! Using @Input with TemplateRef:

Child component:
@Input() customTemplate!: TemplateRef<any>;

<ng-container *ngTemplateOutlet="customTemplate"></ng-container>

Parent:
<app-child [customTemplate]="myTemp"></app-child>

<ng-template #myTemp>
  <p>Custom content</p>
</ng-template>

Great for customizable components!
```

### 💡 Pro Tips

**1. Use for DRY (Don't Repeat Yourself)**
```html
<!-- ❌ BAD: Repeated code -->
<div class="card" *ngFor="let user of users">
  <img [src]="user.avatar">
  <h3>{{ user.name }}</h3>
  <p>{{ user.role }}</p>
</div>

<div class="sidebar">
  <div class="card">
    <img [src]="currentUser.avatar">
    <h3>{{ currentUser.name }}</h3>
    <p>{{ currentUser.role }}</p>
  </div>
</div>

<!-- ✅ GOOD: Reusable template -->
<ng-template #userCard let-user>
  <div class="card">
    <img [src]="user.avatar">
    <h3>{{ user.name }}</h3>
    <p>{{ user.role }}</p>
  </div>
</ng-template>

<div *ngFor="let user of users">
  <ng-container *ngTemplateOutlet="userCard; context: { $implicit: user }">
  </ng-container>
</div>

<div class="sidebar">
  <ng-container *ngTemplateOutlet="userCard; context: { $implicit: currentUser }">
  </ng-container>
</div>
```

**2. Use with @ViewChild for Dynamic Rendering**
```typescript
@ViewChild('dynamicTemplate') template!: TemplateRef<any>;
@ViewChild('container', { read: ViewContainerRef }) 
container!: ViewContainerRef;

renderTemplate() {
  this.container.clear();
  this.container.createEmbeddedView(this.template);
}
```

**3. Template as Component Input**
```typescript
// Reusable list component
export class ListComponent {
  @Input() items: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;
}
```

```html
<!-- list.component.html -->
<div class="list">
  @for (item of items; track item.id) {
    <ng-container 
      *ngTemplateOutlet="itemTemplate; context: { $implicit: item }">
    </ng-container>
  }
</div>
```

### 🧪 Can You Answer These?

1. ❓ Can ng-template be rendered multiple times?
2. ❓ What happens to context when template is reused?
3. ❓ Can you nest ng-templates?
4. ❓ How does ng-template affect performance?
5. ❓ Can ng-template access component properties?

---

**🎉 SECTION 2 COMPLETE! 🎉**

**✅ Progress: 17/64 topics complete**

**📊 Completion Status:**
- ✅ Section 1: Data Binding Fundamentals (6/6) - 100%
- ✅ Section 2: Directives (11/11) - 100%
- ⬜ Section 3: Component Lifecycle (7 topics) - 0%
- ⬜ Section 4: Component Communication (8 topics) - 0%
- ⬜ Section 5-11: Remaining sections (38 topics) - 0%

---

## SECTION 3: COMPONENT LIFECYCLE

**Next up:** Topic 18 - Lifecycle Hooks Overview

Would you like me to continue with Section 3?

---

## SECTION 3: COMPONENT LIFECYCLE

## 18. LIFECYCLE HOOKS OVERVIEW

### 🎯 Simple Definition
**Lifecycle hooks** are special methods Angular calls at specific moments in a component's life - from creation to destruction. They let you execute custom code at key points.

### 💼 What Are Lifecycle Hooks?

Angular components have a lifecycle managed by Angular. Hooks are callback methods that tap into these lifecycle events:

**8 Main Lifecycle Hooks (in order):**

1. **ngOnChanges** - When input properties change
2. **ngOnInit** - After first ngOnChanges, component initialized
3. **ngDoCheck** - Every change detection cycle
4. **ngAfterContentInit** - After content projection initialized (once)
5. **ngAfterContentChecked** - After every content check
6. **ngAfterViewInit** - After view initialized (once)
7. **ngAfterViewChecked** - After every view check
8. **ngOnDestroy** - Before component is destroyed

**Plus Constructor** (not a hook, but part of lifecycle)

### 📊 Lifecycle Sequence Diagram

```
Component Creation
       ↓
   Constructor         → Component instance created
       ↓
   ngOnChanges        → @Input properties set (if any)
       ↓
   ngOnInit           → Component initialized (ONCE)
       ↓
   ngDoCheck          → Custom change detection
       ↓
ngAfterContentInit    → Projected content initialized (ONCE)
       ↓
ngAfterContentChecked → After content checked
       ↓
ngAfterViewInit       → View initialized (ONCE)
       ↓
ngAfterViewChecked    → After view checked
       ↓
   [Component Active - ngDoCheck runs on every change]
       ↓
   ngOnDestroy        → Component destroyed, cleanup
```

### 🎯 Quick Reference Table

| Hook | When Called | Called Once? | Use For |
|------|-------------|--------------|---------|
| **Constructor** | Instance creation | ✅ Yes | Dependency injection only |
| **ngOnChanges** | @Input changes | ❌ Multiple | React to input changes |
| **ngOnInit** | After first ngOnChanges | ✅ Yes | Initialization logic |
| **ngDoCheck** | Every change detection | ❌ Many | Custom change detection |
| **ngAfterContentInit** | After content projection | ✅ Yes | Access projected content |
| **ngAfterContentChecked** | After content checked | ❌ Many | React to content changes |
| **ngAfterViewInit** | After view initialized | ✅ Yes | Access child views |
| **ngAfterViewChecked** | After view checked | ❌ Many | React to view changes |
| **ngOnDestroy** | Before destruction | ✅ Yes | Cleanup, unsubscribe |

### 📝 Basic Example (All Hooks)

```typescript
import { 
  Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy,
  SimpleChanges, Input 
} from '@angular/core';

export class LifecycleComponent implements 
  OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() data: string = '';
  
  // 0. Constructor (not a hook)
  constructor() {
    console.log('0. Constructor called');
  }
  
  // 1. ngOnChanges - @Input changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('1. ngOnChanges', changes);
  }
  
  // 2. ngOnInit - Initialization
  ngOnInit() {
    console.log('2. ngOnInit - Component initialized');
  }
  
  // 3. ngDoCheck - Change detection
  ngDoCheck() {
    console.log('3. ngDoCheck - Change detection run');
  }
  
  // 4. ngAfterContentInit - Content projected
  ngAfterContentInit() {
    console.log('4. ngAfterContentInit');
  }
  
  // 5. ngAfterContentChecked - Content checked
  ngAfterContentChecked() {
    console.log('5. ngAfterContentChecked');
  }
  
  // 6. ngAfterViewInit - View initialized
  ngAfterViewInit() {
    console.log('6. ngAfterViewInit');
  }
  
  // 7. ngAfterViewChecked - View checked
  ngAfterViewChecked() {
    console.log('7. ngAfterViewChecked');
  }
  
  // 8. ngOnDestroy - Cleanup
  ngOnDestroy() {
    console.log('8. ngOnDestroy - Component destroyed');
  }
}
```

### ⏰ When Each Hook Runs

**During Component Creation (First Time):**
```
1. Constructor
2. ngOnChanges (if @Input present)
3. ngOnInit ✅ (ONCE)
4. ngDoCheck
5. ngAfterContentInit ✅ (ONCE)
6. ngAfterContentChecked
7. ngAfterViewInit ✅ (ONCE)
8. ngAfterViewChecked
```

**During Updates (Change Detection):**
```
1. ngOnChanges (only if @Input changed)
2. ngDoCheck
3. ngAfterContentChecked
4. ngAfterViewChecked
```

**During Destruction:**
```
1. ngOnDestroy ✅ (ONCE)
```

### 💼 Common Use Cases

**ngOnInit - Most Used:**
```typescript
ngOnInit() {
  // ✅ Fetch data from API
  this.loadData();
  
  // ✅ Initialize component state
  this.setupForm();
  
  // ✅ Subscribe to observables
  this.subscription = this.dataService.data$.subscribe(...);
}
```

**ngOnDestroy - Second Most Used:**
```typescript
ngOnDestroy() {
  // ✅ Unsubscribe from observables
  this.subscription?.unsubscribe();
  
  // ✅ Clear timers
  clearInterval(this.timer);
  
  // ✅ Remove event listeners
  window.removeEventListener('resize', this.handler);
}
```

**ngOnChanges - For @Input Monitoring:**
```typescript
@Input() userId: number = 0;

ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    // ✅ React to input changes
    this.loadUserData(this.userId);
  }
}
```

**ngAfterViewInit - For ViewChild:**
```typescript
@ViewChild('myInput') input!: ElementRef;

ngAfterViewInit() {
  // ✅ Access child elements
  this.input.nativeElement.focus();
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Heavy logic in constructor
constructor() {
  this.loadData();  // Wrong! @Input not available yet
  this.http.get(...);  // Wrong! Component not ready
}

// ✅ CORRECT: Use ngOnInit
ngOnInit() {
  this.loadData();  // ✅ Component initialized
}

// ❌ MISTAKE 2: Accessing ViewChild in ngOnInit
@ViewChild('el') element!: ElementRef;

ngOnInit() {
  this.element.nativeElement.focus();  // undefined! View not ready
}

// ✅ CORRECT: Use ngAfterViewInit
ngAfterViewInit() {
  this.element.nativeElement.focus();  // ✅ View ready
}

// ❌ MISTAKE 3: Not unsubscribing
ngOnInit() {
  this.dataService.data$.subscribe(...);  // Memory leak!
}

// ✅ CORRECT: Unsubscribe in ngOnDestroy
subscription!: Subscription;

ngOnInit() {
  this.subscription = this.dataService.data$.subscribe(...);
}

ngOnDestroy() {
  this.subscription.unsubscribe();  // ✅ Cleanup
}

// ❌ MISTAKE 4: State changes in ngAfterViewChecked
ngAfterViewChecked() {
  this.count++;  // Causes ExpressionChangedAfterItHasBeenCheckedError!
}

// ✅ CORRECT: Use setTimeout or avoid state changes
ngAfterViewChecked() {
  // Read-only operations OK
  console.log('View checked');
}
```

### 🎤 Important Interview Q&A

**Q1: What are lifecycle hooks in Angular?**
```
A: Lifecycle hooks are methods called by Angular at specific 
moments in a component's lifecycle from creation to destruction.

8 main hooks:
- ngOnChanges, ngOnInit, ngDoCheck
- ngAfterContentInit, ngAfterContentChecked
- ngAfterViewInit, ngAfterViewChecked
- ngOnDestroy

Use for: initialization, cleanup, responding to changes.
```

**Q2: What's the order of lifecycle hooks?**
```
A: Order on component creation:
1. Constructor
2. ngOnChanges (if @Input exists)
3. ngOnInit (once)
4. ngDoCheck
5. ngAfterContentInit (once)
6. ngAfterContentChecked
7. ngAfterViewInit (once)
8. ngAfterViewChecked

On updates: ngOnChanges → ngDoCheck → AfterContent/ViewChecked
On destroy: ngOnDestroy
```

**Q3: Which hooks are called only once?**
```
A: Called ONCE per component:
- ngOnInit
- ngAfterContentInit
- ngAfterViewInit
- ngOnDestroy

Called MULTIPLE times:
- ngOnChanges (when @Input changes)
- ngDoCheck (every change detection)
- ngAfterContentChecked (every check)
- ngAfterViewChecked (every check)
```

**Q4: What's the difference between ngOnInit and constructor?**
```
A:
Constructor:
- TypeScript feature
- Called when instance created
- For dependency injection only
- @Input not available yet
- Component not initialized

ngOnInit:
- Angular lifecycle hook
- Called after first ngOnChanges
- For initialization logic
- @Input available
- Component ready

Always use ngOnInit for initialization!
```

**Q5: When would you use ngOnDestroy?**
```
A: For cleanup before component is destroyed:

- Unsubscribe from observables
- Clear intervals/timeouts
- Remove event listeners
- Cancel pending HTTP requests
- Disconnect websockets
- Free up resources

Prevents memory leaks!
```

### 💡 Pro Tips

**1. Most Used Hooks (90% of cases):**
```typescript
// These 3 hooks cover most scenarios:

ngOnInit() {
  // Initialization
}

ngOnChanges(changes: SimpleChanges) {
  // React to @Input changes
}

ngOnDestroy() {
  // Cleanup
}
```

**2. Use takeUntil for Clean Unsubscription:**
```typescript
destroy$ = new Subject<void>();

ngOnInit() {
  this.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(...);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

**3. Implement Interfaces for Type Safety:**
```typescript
// ✅ Implement interfaces
export class MyComponent implements OnInit, OnDestroy {
  ngOnInit() { }
  ngOnDestroy() { }
}

// TypeScript will error if you misspell method names!
```

### 🧪 Can You Answer These?

1. ❓ What happens if you don't implement ngOnDestroy?
2. ❓ Can a component have multiple ngOnInit calls?
3. ❓ Why should you avoid heavy logic in constructor?
4. ❓ What's the difference between AfterViewInit and AfterContentInit?
5. ❓ When does ngDoCheck run and why is it expensive?

---

## 19. CONSTRUCTOR vs ngOnInit

### 🎯 Simple Definition
**Constructor** is a TypeScript class feature for creating instances. **ngOnInit** is an Angular lifecycle hook for component initialization. Both run during component creation but have different purposes.

### 💼 Key Differences

| Feature | Constructor | ngOnInit |
|---------|-------------|----------|
| **Type** | TypeScript class feature | Angular lifecycle hook |
| **Purpose** | Dependency injection | Initialization logic |
| **When Called** | When class instantiated | After first ngOnChanges |
| **@Input Available** | ❌ No | ✅ Yes |
| **Component Ready** | ❌ No | ✅ Yes |
| **Called By** | JavaScript engine | Angular framework |
| **Use For** | Injecting dependencies | Fetching data, setup |
| **Template Bindings** | ❌ Not resolved | ✅ Resolved |

### ⏰ Execution Order

```
1. Constructor called
   - Class instance created
   - Dependencies injected
   - @Input properties = undefined

2. Angular binds @Input properties

3. ngOnInit called
   - @Input properties available
   - Component initialized
   - Template ready
```

### 📝 Real-World Examples

**Example 1: What Goes Where**
```typescript
export class UserComponent implements OnInit {
  @Input() userId: number = 0;
  userData: any;
  
  // ✅ CONSTRUCTOR: Dependency Injection ONLY
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Constructor: userId =', this.userId); // undefined!
    
    // ❌ DON'T DO THIS:
    // this.loadUser();  // userId not available!
    // this.http.get(...);  // Component not ready!
  }
  
  // ✅ ngOnInit: Initialization Logic
  ngOnInit() {
    console.log('ngOnInit: userId =', this.userId); // ✅ Available!
    
    // ✅ DO THIS:
    this.loadUser();
    this.setupSubscriptions();
    this.initializeForm();
  }
  
  loadUser() {
    this.userService.getUser(this.userId).subscribe(
      data => this.userData = data
    );
  }
}
```

**Example 2: @Input Not Available in Constructor**
```typescript
export class ChildComponent implements OnInit {
  @Input() message: string = '';
  
  constructor() {
    // ❌ WRONG: @Input not set yet
    console.log('Constructor message:', this.message); // ""
    
    if (this.message) {  // Won't work!
      console.log('Message exists');
    }
  }
  
  ngOnInit() {
    // ✅ CORRECT: @Input available now
    console.log('ngOnInit message:', this.message); // "Hello!"
    
    if (this.message) {  // ✅ Works!
      console.log('Message exists');
    }
  }
}
```

```html
<!-- Parent component -->
<app-child [message]="'Hello!'"></app-child>
```

**Example 3: Proper Data Fetching**
```typescript
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  
  // ✅ Constructor: Just inject service
  constructor(private productService: ProductService) {
    // Good: Only dependency injection
  }
  
  // ✅ ngOnInit: Fetch data
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.isLoading = false;
      }
    });
  }
}
```

**Example 4: Route Parameters**
```typescript
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product: any;
  
  // ✅ Constructor: Inject services
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  
  // ✅ ngOnInit: Read route params
  ngOnInit() {
    // Route params available in ngOnInit
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProduct();
    });
  }
  
  loadProduct() {
    this.productService.getProduct(this.productId).subscribe(
      data => this.product = data
    );
  }
}
```

**Example 5: Form Initialization**
```typescript
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  // ✅ Constructor: Inject FormBuilder
  constructor(private fb: FormBuilder) { }
  
  // ✅ ngOnInit: Initialize form
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: API calls in constructor
constructor(private http: HttpClient) {
  this.http.get('/api/data').subscribe(...);  // Wrong!
}

// ✅ CORRECT
ngOnInit() {
  this.http.get('/api/data').subscribe(...);  // ✅ Right
}

// ❌ MISTAKE 2: Using @Input in constructor
@Input() config: any;

constructor() {
  this.processConfig(this.config);  // undefined!
}

// ✅ CORRECT
ngOnInit() {
  this.processConfig(this.config);  // ✅ Available
}

// ❌ MISTAKE 3: Complex logic in constructor
constructor() {
  this.calculateTotal();
  this.filterData();
  this.sortItems();  // All wrong in constructor!
}

// ✅ CORRECT
ngOnInit() {
  this.calculateTotal();
  this.filterData();
  this.sortItems();  // ✅ Do in ngOnInit
}

// ❌ MISTAKE 4: Subscribing without cleanup
constructor(private dataService: DataService) {
  this.dataService.data$.subscribe(...);  // Memory leak!
}

// ✅ CORRECT
subscription!: Subscription;

ngOnInit() {
  this.subscription = this.dataService.data$.subscribe(...);
}

ngOnDestroy() {
  this.subscription.unsubscribe();  // ✅ Cleanup
}
```

### 🎤 Important Interview Q&A

**Q1: What's the difference between constructor and ngOnInit?**
```
A:
Constructor (TypeScript):
- Creates class instance
- For dependency injection ONLY
- @Input not available
- Called by JavaScript

ngOnInit (Angular):
- Lifecycle hook
- For initialization logic
- @Input available
- Called by Angular framework

Rule: Constructor for injection, ngOnInit for initialization.
```

**Q2: Why not put initialization logic in constructor?**
```
A: Reasons:
1. @Input properties not set yet
2. Component bindings not resolved
3. Child components not initialized
4. Template not ready
5. Angular context not fully established

Constructor is too early for component logic.
Use ngOnInit instead!
```

**Q3: Can you make HTTP calls in constructor?**
```
A: Technically yes, but DON'T!

❌ Bad practice:
constructor(private http: HttpClient) {
  this.http.get(...).subscribe(...);
}

Problems:
- Component not ready
- Hard to test
- Against Angular patterns
- @Input unavailable for request params

✅ Always use ngOnInit for HTTP calls.
```

**Q4: When does each run?**
```
A:
Constructor:
- When: new Component() called
- Before: Any Angular initialization
- @Input: Not available

ngOnInit:
- When: After first ngOnChanges
- After: @Input binding complete
- @Input: Available

Order: Constructor → @Input binding → ngOnInit
```

**Q5: What should go in constructor?**
```
A: ONLY dependency injection:

constructor(
  private service: MyService,
  private router: Router,
  private fb: FormBuilder
) {
  // That's it! Nothing else!
}

Maybe simple assignments:
constructor() {
  this.someProperty = 'value';  // OK, but simple only
}

Everything else → ngOnInit
```

### 💡 Pro Tips

**1. Constructor - Minimal:**
```typescript
// ✅ GOOD: Only injection
constructor(
  private service: DataService,
  private router: Router
) { }

// ⚠️ ACCEPTABLE: Simple assignments
constructor() {
  this.id = uuid();
  this.createdAt = new Date();
}

// ❌ BAD: Complex logic
constructor() {
  this.items = this.processData();  // No!
  this.loadFromAPI();  // No!
}
```

**2. ngOnInit - Everything Else:**
```typescript
ngOnInit() {
  // ✅ Data fetching
  this.loadData();
  
  // ✅ Subscriptions
  this.setupSubscriptions();
  
  // ✅ Form initialization
  this.initForm();
  
  // ✅ Using @Input
  this.processInput();
  
  // ✅ Complex calculations
  this.calculate();
}
```

**3. Testing Benefits:**
```typescript
// Easy to test when separated:
it('should initialize data', () => {
  component.ngOnInit();  // ✅ Can call directly
  expect(component.data).toBeDefined();
});

// vs constructor logic (harder to test)
```

### 🧪 Can You Answer These?

1. ❓ Can a component exist without ngOnInit?
2. ❓ What if you call ngOnInit manually?
3. ❓ Can constructor be async?
4. ❓ Why is dependency injection in constructor and not ngOnInit?
5. ❓ What happens if you skip implementing OnInit interface?

---

## 20. ngOnChanges

### 🎯 Simple Definition
`ngOnChanges` is a lifecycle hook called **whenever @Input properties change**. It receives a `SimpleChanges` object showing previous and current values.

### 💼 Where It's Used & Benefits

**Use Cases:**
- React to @Input property changes
- Validate input data
- Trigger actions when inputs change
- Transform input data
- Compare previous vs current values

**Benefits:**
- ✅ Detect @Input changes
- ✅ Access previous values
- ✅ First hook to run (before ngOnInit)
- ✅ Can track multiple @Input changes
- ✅ Conditional logic based on changes

### ⏰ When It's Called

```typescript
1. Before ngOnInit (first time, if @Input present)
2. Whenever any @Input property changes
3. NOT called for local property changes
4. NOT called if @Input reference doesn't change (objects/arrays)
```

### 📝 Syntax & SimpleChanges

```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export class MyComponent implements OnChanges {
  @Input() data: string = '';
  
  ngOnChanges(changes: SimpleChanges) {
    // changes object contains:
    // - previousValue
    // - currentValue
    // - firstChange (boolean)
    
    if (changes['data']) {
      console.log('Previous:', changes['data'].previousValue);
      console.log('Current:', changes['data'].currentValue);
      console.log('First change?', changes['data'].firstChange);
    }
  }
}
```

**SimpleChanges Object Structure:**
```typescript
{
  propertyName: {
    previousValue: any,
    currentValue: any,
    firstChange: boolean
  }
}
```

### 📝 Real-World Examples

**Example 1: Basic @Input Change Detection**
```typescript
export class UserProfileComponent implements OnChanges {
  @Input() userId: number = 0;
  userData: any;
  
  constructor(private userService: UserService) { }
  
  ngOnChanges(changes: SimpleChanges) {
    // Called when userId changes
    if (changes['userId']) {
      console.log('User ID changed from', 
        changes['userId'].previousValue, 
        'to', 
        changes['userId'].currentValue
      );
      
      // Fetch new user data
      if (!changes['userId'].firstChange) {
        this.loadUser();
      }
    }
  }
  
  ngOnInit() {
    // Initial load
    this.loadUser();
  }
  
  loadUser() {
    this.userService.getUser(this.userId).subscribe(
      data => this.userData = data
    );
  }
}
```

```html
<!-- Parent component -->
<app-user-profile [userId]="selectedUserId"></app-user-profile>

<button (click)="selectedUserId = 1">User 1</button>
<button (click)="selectedUserId = 2">User 2</button>
```

**Example 2: Multiple @Input Properties**
```typescript
export class ProductCardComponent implements OnChanges {
  @Input() productId: number = 0;
  @Input() showDetails: boolean = false;
  @Input() discount: number = 0;
  
  ngOnChanges(changes: SimpleChanges) {
    // Check which input changed
    if (changes['productId']) {
      console.log('Product ID changed');
      this.loadProduct();
    }
    
    if (changes['showDetails']) {
      console.log('Show details toggled:', changes['showDetails'].currentValue);
      this.toggleDetails();
    }
    
    if (changes['discount']) {
      console.log('Discount changed to:', changes['discount'].currentValue);
      this.recalculatePrice();
    }
  }
  
  loadProduct() { /* ... */ }
  toggleDetails() { /* ... */ }
  recalculatePrice() { /* ... */ }
}
```

**Example 3: First Change Detection**
```typescript
export class ChartComponent implements OnChanges {
  @Input() chartData: number[] = [];
  chart: any;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      if (changes['chartData'].firstChange) {
        // First time - initialize chart
        console.log('Initializing chart');
        this.initializeChart();
      } else {
        // Subsequent changes - update chart
        console.log('Updating chart');
        this.updateChart();
      }
    }
  }
  
  initializeChart() {
    // Create chart for first time
    this.chart = new Chart(this.chartData);
  }
  
  updateChart() {
    // Update existing chart
    this.chart.update(this.chartData);
  }
}
```

**Example 4: Input Validation & Transformation**
```typescript
export class PriceComponent implements OnChanges {
  @Input() price: number = 0;
  @Input() currency: string = 'USD';
  
  formattedPrice: string = '';
  
  ngOnChanges(changes: SimpleChanges) {
    // Validate and transform whenever inputs change
    if (changes['price'] || changes['currency']) {
      this.validateAndFormat();
    }
  }
  
  validateAndFormat() {
    // Validation
    if (this.price < 0) {
      console.warn('Price cannot be negative');
      this.price = 0;
    }
    
    // Transformation
    const symbols: any = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'INR': '₹'
    };
    
    const symbol = symbols[this.currency] || '$';
    this.formattedPrice = `${symbol}${this.price.toFixed(2)}`;
  }
}
```

```html
<app-price [price]="productPrice" [currency]="'INR'"></app-price>
```

**Example 5: Conditional API Calls**
```typescript
export class SearchComponent implements OnChanges, OnInit {
  @Input() searchTerm: string = '';
  @Input() category: string = 'all';
  @Input() minPrice: number = 0;
  
  results: any[] = [];
  
  constructor(private searchService: SearchService) { }
  
  ngOnInit() {
    // Initial search
    this.performSearch();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // Only search if it's not the first change (ngOnInit handles that)
    const isFirstChange = Object.keys(changes).some(
      key => changes[key].firstChange
    );
    
    if (!isFirstChange) {
      console.log('Search parameters changed');
      this.performSearch();
    }
  }
  
  performSearch() {
    this.searchService.search({
      term: this.searchTerm,
      category: this.category,
      minPrice: this.minPrice
    }).subscribe(data => {
      this.results = data;
    });
  }
}
```

**Example 6: Object/Array Changes (Gotcha!)**
```typescript
export class ListComponent implements OnChanges {
  @Input() items: string[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      console.log('Items changed!');
    }
  }
}
```

```typescript
// Parent component
items = ['a', 'b', 'c'];

// ❌ This WON'T trigger ngOnChanges (same reference)
addItem() {
  this.items.push('d');  // Mutation, reference unchanged
}

// ✅ This WILL trigger ngOnChanges (new reference)
addItem() {
  this.items = [...this.items, 'd'];  // New array
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Expecting ngOnChanges for local properties
export class MyComponent implements OnChanges {
  localProperty = 'value';
  
  changeLocal() {
    this.localProperty = 'new value';  
    // ngOnChanges NOT called! Only for @Input
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // Won't see localProperty here
  }
}

// ❌ MISTAKE 2: Object mutation doesn't trigger ngOnChanges
@Input() config: any = {};

// Parent does:
this.config.setting = 'new';  // ngOnChanges NOT called

// ✅ CORRECT: New reference
this.config = { ...this.config, setting: 'new' };  // ✅ Triggers

// ❌ MISTAKE 3: Not checking if property exists in changes
ngOnChanges(changes: SimpleChanges) {
  console.log(changes['nonExistent'].currentValue);  // Error!
}

// ✅ CORRECT: Always check
ngOnChanges(changes: SimpleChanges) {
  if (changes['myInput']) {
    console.log(changes['myInput'].currentValue);  // ✅ Safe
  }
}

// ❌ MISTAKE 4: Expensive operations on every change
ngOnChanges(changes: SimpleChanges) {
  // Runs on EVERY change of ANY @Input!
  this.expensiveCalculation();  // Inefficient!
}

// ✅ CORRECT: Check specific property
ngOnChanges(changes: SimpleChanges) {
  if (changes['specificInput']) {
    this.expensiveCalculation();  // ✅ Only when needed
  }
}
```

### 🆚 ngOnChanges vs ngDoCheck

| Feature | ngOnChanges | ngDoCheck |
|---------|-------------|-----------|
| **Triggers On** | @Input changes | Every change detection |
| **Frequency** | Only when @Input changes | Very frequent |
| **Use For** | @Input monitoring | Custom change detection |
| **Performance** | Better | Expensive if not careful |
| **Gets changes object** | ✅ Yes | ❌ No |

### 🎤 Important Interview Q&A

**Q1: What is ngOnChanges in Angular?**
```
A: ngOnChanges is a lifecycle hook called whenever @Input
properties change. It receives a SimpleChanges object with
previous and current values.

Syntax:
ngOnChanges(changes: SimpleChanges) {
  if (changes['inputName']) {
    // React to change
  }
}

Called before ngOnInit and whenever @Input changes.
```

**Q2: What is SimpleChanges object?**
```
A: SimpleChanges contains changed @Input properties:

{
  propertyName: {
    previousValue: any,     // Old value
    currentValue: any,      // New value
    firstChange: boolean    // Is this first change?
  }
}

Use to compare old vs new values.
```

**Q3: Does ngOnChanges detect object/array mutations?**
```
A: No! Only reference changes.

❌ Doesn't trigger:
this.myArray.push(item);        // Mutation
this.myObject.prop = 'value';   // Mutation

✅ Triggers:
this.myArray = [...this.myArray, item];  // New reference
this.myObject = {...this.myObject};      // New reference

Use immutable update patterns!
```

**Q4: When is ngOnChanges called?**
```
A: Called when:
1. Before ngOnInit (first time, if @Input present)
2. Whenever @Input property changes
3. Every time parent updates @Input binding

NOT called for:
- Local property changes
- Object/array mutations (same reference)
- Properties without @Input decorator
```

**Q5: How to handle multiple @Input changes?**
```
A: Check each property in changes object:

ngOnChanges(changes: SimpleChanges) {
  if (changes['input1']) {
    // Handle input1 change
  }
  
  if (changes['input2']) {
    // Handle input2 change
  }
  
  if (changes['input1'] || changes['input2']) {
    // Handle either/both
  }
}
```

### 💡 Pro Tips

**1. Use firstChange to Avoid Duplication:**
```typescript
ngOnInit() {
  this.loadData();  // Initial load
}

ngOnChanges(changes: SimpleChanges) {
  if (changes['userId'] && !changes['userId'].firstChange) {
    this.loadData();  // Subsequent changes only
  }
}
```

**2. Destructure SimpleChanges:**
```typescript
ngOnChanges({ userId, category }: SimpleChanges) {
  if (userId) {
    console.log('User changed:', userId.currentValue);
  }
  
  if (category) {
    console.log('Category changed:', category.currentValue);
  }
}
```

**3. Use for Computed Properties:**
```typescript
@Input() firstName: string = '';
@Input() lastName: string = '';
fullName: string = '';

ngOnChanges(changes: SimpleChanges) {
  if (changes['firstName'] || changes['lastName']) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
```

### 🧪 Can You Answer These?

1. ❓ Can ngOnChanges run before constructor?
2. ❓ What if component has no @Input properties?
3. ❓ How to deep-watch object changes?
4. ❓ Performance impact of ngOnChanges vs getters?
5. ❓ Can you manually trigger ngOnChanges?

---

## 21. ngDoCheck

### 🎯 Simple Definition
`ngDoCheck` is a lifecycle hook for **custom change detection**. It runs during every change detection cycle, allowing you to implement custom checks for changes that Angular can't detect automatically.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Detect changes Angular misses (object mutations)
- Custom change detection logic
- Deep object comparisons
- Manual dirty checking
- Performance optimization (skip unnecessary checks)

**Benefits:**
- ✅ Detect non-standard changes
- ✅ Custom equality checks
- ✅ Deep object monitoring
- ✅ Full control over change detection

**⚠️ Warning:** Very expensive if not careful! Runs VERY frequently.

### ⏰ When It's Called

```typescript
Called EVERY change detection cycle:
- After ngOnChanges
- After ngOnInit (first time)
- On every user interaction
- On every async event
- On timer/interval ticks
- Very, very frequently! ⚠️
```

### 📝 Basic Syntax

```typescript
import { Component, DoCheck } from '@angular/core';

export class MyComponent implements DoCheck {
  ngDoCheck() {
    // Runs VERY frequently!
    console.log('ngDoCheck called');
  }
}
```

### 📝 Real-World Examples

**Example 1: Detecting Array Mutations**
```typescript
export class TodoListComponent implements DoCheck {
  @Input() todos: Todo[] = [];
  private lastTodoCount = 0;
  
  ngDoCheck() {
    // Detect array length changes (mutations)
    if (this.todos.length !== this.lastTodoCount) {
      console.log('Todo count changed!', 
        'From:', this.lastTodoCount, 
        'To:', this.todos.length
      );
      this.lastTodoCount = this.todos.length;
      this.onTodosChange();
    }
  }
  
  onTodosChange() {
    // Custom logic when todos change
    this.calculateCompleted();
  }
  
  calculateCompleted() {
    const completed = this.todos.filter(t => t.completed).length;
    console.log(`${completed} of ${this.todos.length} completed`);
  }
}
```

```html
<!-- Parent component -->
<app-todo-list [todos]="todos"></app-todo-list>
<button (click)="todos.push({id: 4, title: 'New', completed: false})">
  Add Todo (mutation)
</button>
```

**Example 2: Deep Object Comparison**
```typescript
export class UserSettingsComponent implements DoCheck {
  @Input() settings: any = {};
  private oldSettings: any = {};
  
  ngDoCheck() {
    // Deep comparison
    if (JSON.stringify(this.settings) !== JSON.stringify(this.oldSettings)) {
      console.log('Settings changed!');
      this.oldSettings = JSON.parse(JSON.stringify(this.settings));
      this.applySettings();
    }
  }
  
  applySettings() {
    console.log('Applying new settings:', this.settings);
    // Update UI based on settings
  }
}
```

**Example 3: Monitoring Specific Properties**
```typescript
export class ChartComponent implements DoCheck {
  @Input() data: number[] = [];
  private prevDataSum = 0;
  
  ngDoCheck() {
    // Check if data values changed (not just reference)
    const currentSum = this.data.reduce((a, b) => a + b, 0);
    
    if (currentSum !== this.prevDataSum) {
      console.log('Data values changed');
      this.prevDataSum = currentSum;
      this.updateChart();
    }
  }
  
  updateChart() {
    console.log('Updating chart with new data');
    // Chart update logic
  }
}
```

**Example 4: Custom Equality Check**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

export class UserCardComponent implements DoCheck {
  @Input() user: User = { id: 0, name: '', email: '' };
  private previousUser: User = { id: 0, name: '', email: '' };
  
  ngDoCheck() {
    // Custom equality - only care about id and name
    if (this.user.id !== this.previousUser.id || 
        this.user.name !== this.previousUser.name) {
      console.log('Relevant user properties changed');
      this.previousUser = {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email
      };
      this.refreshCard();
    }
    // Ignore email changes
  }
  
  refreshCard() {
    console.log('Refreshing user card');
  }
}
```

**Example 5: Performance Optimization with Flags**
```typescript
export class DataTableComponent implements DoCheck {
  @Input() data: any[] = [];
  private dataChecksum = '';
  private shouldCheck = true;
  
  ngDoCheck() {
    // Only check when flag is true
    if (!this.shouldCheck) return;
    
    // Calculate checksum for performance
    const currentChecksum = this.calculateChecksum(this.data);
    
    if (currentChecksum !== this.dataChecksum) {
      console.log('Data changed');
      this.dataChecksum = currentChecksum;
      this.updateTable();
    }
  }
  
  calculateChecksum(data: any[]): string {
    // Fast checksum calculation
    return data.map(d => d.id).join(',');
  }
  
  updateTable() {
    this.shouldCheck = false;  // Prevent check during update
    console.log('Updating table');
    setTimeout(() => {
      this.shouldCheck = true;  // Re-enable checking
    }, 100);
  }
}
```

**Example 6: Avoid ngDoCheck Anti-Pattern**
```typescript
// ❌ BAD: Expensive operation in ngDoCheck
export class BadComponent implements DoCheck {
  @Input() items: any[] = [];
  
  ngDoCheck() {
    // Runs on EVERY change detection!
    this.items.forEach(item => {
      this.expensiveCalculation(item);  // Very bad!
    });
  }
  
  expensiveCalculation(item: any) {
    // Heavy computation
  }
}

// ✅ GOOD: Optimized ngDoCheck
export class GoodComponent implements DoCheck {
  @Input() items: any[] = [];
  private itemsLength = 0;
  
  ngDoCheck() {
    // Only check what's necessary
    if (this.items.length !== this.itemsLength) {
      this.itemsLength = this.items.length;
      this.recalculate();  // Only when length changes
    }
  }
  
  recalculate() {
    this.items.forEach(item => {
      this.expensiveCalculation(item);
    });
  }
  
  expensiveCalculation(item: any) {
    // Heavy computation (but only when needed)
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Heavy operations without guards
ngDoCheck() {
  this.heavyComputation();  // Called thousands of times!
}

// ✅ CORRECT: Use guards
private lastValue: any;

ngDoCheck() {
  if (this.value !== this.lastValue) {
    this.lastValue = this.value;
    this.heavyComputation();  // Only when needed
  }
}

// ❌ MISTAKE 2: Infinite loops
ngDoCheck() {
  this.counter++;  // Changes state → triggers change detection → ngDoCheck → infinite loop!
}

// ✅ CORRECT: Read-only operations
ngDoCheck() {
  const hasChanged = this.checkForChanges();  // Don't modify state
  if (hasChanged) {
    // Safe operations only
  }
}

// ❌ MISTAKE 3: Using ngDoCheck when ngOnChanges would work
@Input() userId: number = 0;

ngDoCheck() {
  // Overkill! ngOnChanges is better for @Input
}

// ✅ CORRECT: Use ngOnChanges for @Input
ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    // Much better!
  }
}

// ❌ MISTAKE 4: Deep object comparison every time
ngDoCheck() {
  if (JSON.stringify(this.obj) !== this.cached) {  // Very expensive!
    // ...
  }
}

// ✅ CORRECT: Use specific property checks
private lastId: number = 0;

ngDoCheck() {
  if (this.obj.id !== this.lastId) {  // Fast!
    this.lastId = this.obj.id;
    // ...
  }
}
```

### 🆚 ngOnChanges vs ngDoCheck

| Feature | ngOnChanges | ngDoCheck |
|---------|-------------|-----------|
| **Triggers On** | @Input reference changes | Every change detection |
| **Frequency** | Only when @Input changes | VERY frequent |
| **Performance** | Good | Can be bad |
| **Gets previous value** | ✅ Yes (SimpleChanges) | ❌ No (manual tracking) |
| **Use For** | @Input monitoring | Custom detection |
| **Detects mutations** | ❌ No | ✅ Yes (if you check) |

### 🎤 Important Interview Q&A

**Q1: What is ngDoCheck in Angular?**
```
A: ngDoCheck is a lifecycle hook for custom change detection.
It runs during EVERY change detection cycle.

Use for:
- Detecting changes Angular can't see (mutations)
- Custom equality checks
- Deep object monitoring

⚠️ Warning: Very expensive! Use carefully.
```

**Q2: When does ngDoCheck run?**
```
A: Runs VERY frequently:
- After ngOnChanges/ngOnInit
- On every user interaction (click, input, etc.)
- On every async operation
- On timer ticks
- Basically: Every change detection cycle

Can run hundreds/thousands of times per second!
```

**Q3: Why is ngDoCheck expensive?**
```
A: Because it runs so frequently!

Example scenario:
- User types in input
- Every keystroke triggers change detection
- ngDoCheck runs for EVERY component
- If you have 100 components = 100 ngDoCheck calls per keystroke

Solution: Guard expensive operations!
```

**Q4: When should you use ngDoCheck?**
```
A: Use ngDoCheck when:

✅ Need to detect object/array mutations
✅ Custom equality logic required
✅ Angular's change detection isn't enough

❌ Don't use for:
- Simple @Input changes (use ngOnChanges)
- Every-component logging (too expensive)
- Heavy computations (performance nightmare)

Last resort, not first choice!
```

**Q5: ngDoCheck vs ngOnChanges - which to use?**
```
A:
Use ngOnChanges when:
- @Input properties (reference changes)
- Standard change detection works
- Better performance needed

Use ngDoCheck when:
- Object/array mutations
- Custom change logic
- Angular misses changes

Rule: Try ngOnChanges first, ngDoCheck only if needed.
```

### 💡 Pro Tips

**1. Always Use Guards:**
```typescript
private cache: any;

ngDoCheck() {
  // ✅ Guard: Only run when necessary
  if (this.value !== this.cache) {
    this.cache = this.value;
    this.expensiveOperation();
  }
}
```

**2. Store Previous Values:**
```typescript
private prevLength = 0;
private prevSum = 0;

ngDoCheck() {
  const currentLength = this.items.length;
  const currentSum = this.items.reduce((a, b) => a + b.value, 0);
  
  if (currentLength !== this.prevLength || currentSum !== this.prevSum) {
    this.prevLength = currentLength;
    this.prevSum = currentSum;
    this.update();
  }
}
```

**3. Use IterableDiffers for Arrays:**
```typescript
import { IterableDiffers, IterableDiffer } from '@angular/core';

export class ListComponent implements DoCheck {
  @Input() items: any[] = [];
  private differ: IterableDiffer<any>;
  
  constructor(private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create();
  }
  
  ngDoCheck() {
    const changes = this.differ.diff(this.items);
    if (changes) {
      console.log('Array changed!');
      // React to changes
    }
  }
}
```

### 🧪 Can You Answer These?

1. ❓ Can ngDoCheck cause infinite loops?
2. ❓ How many times does ngDoCheck run for one click?
3. ❓ What's IterableDiffers and when to use it?
4. ❓ Can you disable ngDoCheck temporarily?
5. ❓ What happens if ngDoCheck throws an error?

---

## 22. ngAfterViewInit & ngAfterViewChecked

### 🎯 Simple Definition
**ngAfterViewInit** - Called once after the component's view (template) is fully initialized.  
**ngAfterViewChecked** - Called after every check of the component's view.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Access @ViewChild/@ViewChildren elements
- DOM manipulation after view ready
- Initialize third-party libraries (charts, maps)
- Measure element dimensions
- Set focus on elements
- jQuery-like operations

**Benefits:**
- ✅ Safe DOM access
- ✅ View elements ready
- ✅ @ViewChild available
- ✅ Child components initialized

### ⏰ When They're Called

```typescript
ngAfterViewInit:
- Called ONCE
- After view fully initialized
- After first ngAfterViewChecked
- @ViewChild/@ViewChildren available

ngAfterViewChecked:
- Called MANY times
- After every view check
- After ngAfterViewInit
- Every change detection cycle
```

### 📝 Syntax

```typescript
import { 
  Component, AfterViewInit, AfterViewChecked,
  ViewChild, ElementRef 
} from '@angular/core';

export class MyComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('myInput') inputRef!: ElementRef;
  
  ngAfterViewInit() {
    // Called once - view ready
    console.log('View initialized');
    this.inputRef.nativeElement.focus();
  }
  
  ngAfterViewChecked() {
    // Called many times - after every check
    console.log('View checked');
  }
}
```

### 📝 Real-World Examples

**Example 1: Accessing ViewChild Elements**
```typescript
export class LoginComponent implements AfterViewInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  
  ngAfterViewInit() {
    // ✅ Elements are ready now
    console.log('Username input:', this.usernameInput.nativeElement);
    
    // Auto-focus first input
    this.usernameInput.nativeElement.focus();
    
    // Get element dimensions
    const width = this.usernameInput.nativeElement.offsetWidth;
    console.log('Input width:', width);
  }
}
```

```html
<input #usernameInput type="text" placeholder="Username">
<input #passwordInput type="password" placeholder="Password">
```

**Example 2: Initializing Third-Party Libraries**
```typescript
export class ChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') canvas!: ElementRef;
  private chart: any;
  
  ngAfterViewInit() {
    // Initialize Chart.js after view is ready
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2]
        }]
      }
    });
  }
  
  ngOnDestroy() {
    // Clean up chart
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
```

```html
<canvas #chartCanvas width="400" height="200"></canvas>
```

**Example 3: Measuring Element Dimensions**
```typescript
export class ResponsiveComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  
  containerWidth = 0;
  containerHeight = 0;
  
  ngAfterViewInit() {
    // Measure after view is rendered
    const el = this.container.nativeElement;
    this.containerWidth = el.offsetWidth;
    this.containerHeight = el.offsetHeight;
    
    console.log(`Container size: ${this.containerWidth}x${this.containerHeight}`);
    
    // Adjust layout based on size
    if (this.containerWidth < 600) {
      el.classList.add('mobile-view');
    }
  }
}
```

```html
<div #container class="responsive-container">
  <p>Width: {{ containerWidth }}px</p>
  <p>Height: {{ containerHeight }}px</p>
</div>
```

**Example 4: ViewChildren (Multiple Elements)**
```typescript
export class TabsComponent implements AfterViewInit {
  @ViewChildren('tabButton') tabButtons!: QueryList<ElementRef>;
  
  ngAfterViewInit() {
    // Access all tab buttons
    console.log('Number of tabs:', this.tabButtons.length);
    
    // Iterate over them
    this.tabButtons.forEach((button, index) => {
      console.log(`Tab ${index}:`, button.nativeElement);
    });
    
    // Set first tab as active
    if (this.tabButtons.length > 0) {
      this.tabButtons.first.nativeElement.classList.add('active');
    }
  }
}
```

```html
<button #tabButton>Tab 1</button>
<button #tabButton>Tab 2</button>
<button #tabButton>Tab 3</button>
```

**Example 5: ngAfterViewChecked - Detecting View Changes**
```typescript
export class ScrollComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private lastScrollHeight = 0;
  
  ngAfterViewChecked() {
    // Check if content height changed
    const currentHeight = this.scrollContainer.nativeElement.scrollHeight;
    
    if (currentHeight !== this.lastScrollHeight) {
      console.log('Content height changed:', currentHeight);
      this.lastScrollHeight = currentHeight;
      
      // Auto-scroll to bottom when new content added
      this.scrollToBottom();
    }
  }
  
  scrollToBottom() {
    const el = this.scrollContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}
```

**Example 6: Avoiding ExpressionChangedAfterItHasBeenCheckedError**
```typescript
import { ChangeDetectorRef } from '@angular/core';

export class SafeComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;
  contentHeight = 0;
  
  constructor(private cdr: ChangeDetectorRef) { }
  
  ngAfterViewInit() {
    // ❌ This causes error if used in template
    // this.contentHeight = this.content.nativeElement.offsetHeight;
    
    // ✅ CORRECT: Use setTimeout or detectChanges
    setTimeout(() => {
      this.contentHeight = this.content.nativeElement.offsetHeight;
    }, 0);
    
    // Or:
    // this.contentHeight = this.content.nativeElement.offsetHeight;
    // this.cdr.detectChanges();
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Accessing ViewChild in ngOnInit
export class BadComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  
  ngOnInit() {
    this.input.nativeElement.focus();  // undefined! View not ready
  }
}

// ✅ CORRECT: Use ngAfterViewInit
export class GoodComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef;
  
  ngAfterViewInit() {
    this.input.nativeElement.focus();  // ✅ Works!
  }
}

// ❌ MISTAKE 2: Changing state in ngAfterViewChecked without guard
ngAfterViewChecked() {
  this.counter++;  // ExpressionChangedAfterItHasBeenCheckedError!
}

// ✅ CORRECT: Use guards or setTimeout
ngAfterViewChecked() {
  const newValue = this.calculateValue();
  if (this.value !== newValue) {
    setTimeout(() => {
      this.value = newValue;
    }, 0);
  }
}

// ❌ MISTAKE 3: Heavy operations in ngAfterViewChecked
ngAfterViewChecked() {
  this.expensiveCalculation();  // Runs on every check! Very slow!
}

// ✅ CORRECT: Use guards
private lastHeight = 0;

ngAfterViewChecked() {
  const height = this.element.nativeElement.offsetHeight;
  if (height !== this.lastHeight) {
    this.lastHeight = height;
    this.expensiveCalculation();  // Only when needed
  }
}

// ❌ MISTAKE 4: Forgetting static: true for early access
@ViewChild('input') input!: ElementRef;  // Not available in ngOnInit

// ✅ CORRECT: Use static: true if needed in ngOnInit
@ViewChild('input', { static: true }) input!: ElementRef;  // Available in ngOnInit
```

### 🎤 Important Interview Q&A

**Q1: What are ngAfterViewInit and ngAfterViewChecked?**
```
A:
ngAfterViewInit:
- Called ONCE after view initialized
- Use for @ViewChild access
- Safe for DOM manipulation

ngAfterViewChecked:
- Called after EVERY view check
- Runs frequently
- Use for monitoring view changes

Both run after child component views are ready.
```

**Q2: When can you access @ViewChild?**
```
A: In ngAfterViewInit or later.

@ViewChild('el') element!: ElementRef;

❌ ngOnInit: undefined (view not ready)
✅ ngAfterViewInit: available (view ready)

Exception: @ViewChild(el, {static: true}) available in ngOnInit
```

**Q3: What's ExpressionChangedAfterItHasBeenCheckedError?**
```
A: Error when you change state in AfterView hooks that affects
the template.

Cause:
ngAfterViewInit() {
  this.value = 'new';  // Change after view was checked
}

Solutions:
1. setTimeout:
   setTimeout(() => { this.value = 'new'; }, 0);

2. Manual detection:
   this.cdr.detectChanges();

3. Avoid state changes in these hooks
```

**Q4: Difference between ViewInit and ContentInit?**
```
A:
ViewInit (ngAfterViewInit):
- Component's own template
- @ViewChild/@ViewChildren
- Template elements

ContentInit (ngAfterContentInit):
- Projected content (ng-content)
- @ContentChild/@ContentChildren
- Content from parent

Order: ContentInit → ViewInit
```

**Q5: Why use ngAfterViewInit over ngOnInit?**
```
A: Use ngAfterViewInit when:

- Need to access @ViewChild
- DOM manipulation required
- Third-party library initialization (needs DOM)
- Measure element dimensions
- Set focus on elements

Use ngOnInit for:
- Data fetching
- Initialization (no DOM needed)
- Subscriptions
```

### 💡 Pro Tips

**1. Always Check Element Exists:**
```typescript
ngAfterViewInit() {
  if (this.element) {
    this.element.nativeElement.focus();
  }
}
```

**2. Use Renderer2 for DOM Manipulation:**
```typescript
import { Renderer2 } from '@angular/core';

constructor(private renderer: Renderer2) { }

ngAfterViewInit() {
  // ✅ Better than direct DOM manipulation
  this.renderer.setStyle(
    this.element.nativeElement,
    'background-color',
    'blue'
  );
}
```

**3. QueryList Changes:**
```typescript
@ViewChildren('item') items!: QueryList<ElementRef>;

ngAfterViewInit() {
  // Listen for changes
  this.items.changes.subscribe(() => {
    console.log('Items changed:', this.items.length);
  });
}
```

### 🧪 Can You Answer These?

1. ❓ Can you have multiple @ViewChild with same template reference?
2. ❓ What's the difference between static: true and static: false?
3. ❓ How to avoid performance issues in ngAfterViewChecked?
4. ❓ Can ngAfterViewInit run multiple times?
5. ❓ How to access grandchild components?

---

## 23. ngAfterContentInit & ngAfterContentChecked

### 🎯 Simple Definition
**ngAfterContentInit** - Called once after content projected via `<ng-content>` is initialized.  
**ngAfterContentChecked** - Called after every check of projected content.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Access @ContentChild/@ContentChildren
- Work with projected content
- Custom component wrappers
- Content projection scenarios
- Tab panels, accordions, cards

**Benefits:**
- ✅ Access projected content
- ✅ @ContentChild available
- ✅ Parent-child content communication
- ✅ Customize projected content

### ⏰ When They're Called

```typescript
ngAfterContentInit:
- Called ONCE
- After content projection initialized
- After ngDoCheck (first time)
- Before ngAfterViewInit
- @ContentChild/@ContentChildren available

ngAfterContentChecked:
- Called MANY times
- After every content check
- After ngDoCheck
- Before ngAfterViewChecked
```

### 🆚 Content vs View

| Aspect | Content (ng-content) | View (template) |
|--------|---------------------|-----------------|
| **What** | Projected from parent | Component's own template |
| **Hook** | ngAfterContentInit | ngAfterViewInit |
| **Decorator** | @ContentChild | @ViewChild |
| **Example** | `<my-comp><p>Content</p></my-comp>` | `<p>View</p>` in template |

### 📝 Understanding Content Projection

```html
<!-- Parent Component -->
<app-card>
  <h2 class="card-title">My Title</h2>   <!-- Projected Content -->
  <p class="card-body">My content</p>    <!-- Projected Content -->
</app-card>

<!-- Card Component Template -->
<div class="card">
  <ng-content select=".card-title"></ng-content>  <!-- Content projection -->
  <ng-content select=".card-body"></ng-content>   <!-- Content projection -->
</div>
```

### 📝 Syntax

```typescript
import { 
  Component, AfterContentInit, AfterContentChecked,
  ContentChild, ContentChildren, ElementRef 
} from '@angular/core';

export class CardComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('cardTitle') title!: ElementRef;
  
  ngAfterContentInit() {
    // Called once - content ready
    console.log('Content initialized:', this.title);
  }
  
  ngAfterContentChecked() {
    // Called many times - after every check
    console.log('Content checked');
  }
}
```

### 📝 Real-World Examples

**Example 1: Basic Content Projection**
```typescript
// card.component.ts
export class CardComponent implements AfterContentInit {
  @ContentChild('cardTitle') titleElement!: ElementRef;
  @ContentChild('cardContent') contentElement!: ElementRef;
  
  ngAfterContentInit() {
    // Access projected content
    console.log('Title:', this.titleElement.nativeElement.textContent);
    console.log('Content:', this.contentElement.nativeElement.textContent);
    
    // Style projected content
    this.titleElement.nativeElement.style.color = 'blue';
  }
}
```

```html
<!-- card.component.html -->
<div class="card">
  <div class="card-header">
    <ng-content select="[card-title]"></ng-content>
  </div>
  <div class="card-body">
    <ng-content select="[card-content]"></ng-content>
  </div>
</div>
```

```html
<!-- Usage -->
<app-card>
  <h2 #cardTitle card-title>Welcome!</h2>
  <p #cardContent card-content>This is the card content</p>
</app-card>
```

**Example 2: Tabs Component with Content**
```typescript
// tab-group.component.ts
@Component({
  selector: 'app-tab-group',
  template: `
    <div class="tab-headers">
      @for (tab of tabs; track tab; let i = $index) {
        <button [class.active]="i === activeIndex"
                (click)="selectTab(i)">
          {{ tab.title }}
        </button>
      }
    </div>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeIndex = 0;
  
  ngAfterContentInit() {
    // Access all tab children
    console.log('Number of tabs:', this.tabs.length);
    
    // Show first tab by default
    this.selectTab(0);
    
    // Listen for tab changes
    this.tabs.changes.subscribe(() => {
      console.log('Tabs changed:', this.tabs.length);
    });
  }
  
  selectTab(index: number) {
    this.activeIndex = index;
    
    // Hide all tabs
    this.tabs.forEach(tab => tab.active = false);
    
    // Show selected tab
    if (this.tabs.toArray()[index]) {
      this.tabs.toArray()[index].active = true;
    }
  }
}
```

```typescript
// tab.component.ts
@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() title = '';
  active = false;
}
```

```html
<!-- Usage -->
<app-tab-group>
  <app-tab title="Profile">
    <h2>Profile Content</h2>
    <p>User profile information...</p>
  </app-tab>
  <app-tab title="Settings">
    <h2>Settings Content</h2>
    <p>Application settings...</p>
  </app-tab>
  <app-tab title="Messages">
    <h2>Messages Content</h2>
    <p>Your messages...</p>
  </app-tab>
</app-tab-group>
```

**Example 3: Accordion with ContentChildren**
```typescript
@Component({
  selector: 'app-accordion',
  template: `<div class="accordion"><ng-content></ng-content></div>`
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;
  
  ngAfterContentInit() {
    console.log('Accordion items:', this.items.length);
    
    // Only allow one item open at a time
    this.items.forEach((item, index) => {
      item.toggle.subscribe(() => {
        if (item.isOpen) {
          this.closeOthers(index);
        }
      });
    });
  }
  
  closeOthers(exceptIndex: number) {
    this.items.forEach((item, index) => {
      if (index !== exceptIndex) {
        item.isOpen = false;
      }
    });
  }
}
```

```typescript
@Component({
  selector: 'app-accordion-item',
  template: `
    <div class="accordion-item">
      <div class="header" (click)="toggleOpen()">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="body" *ngIf="isOpen">
        <ng-content select="[body]"></ng-content>
      </div>
    </div>
  `
})
export class AccordionItemComponent {
  @Output() toggle = new EventEmitter<void>();
  isOpen = false;
  
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
  }
}
```

```html
<!-- Usage -->
<app-accordion>
  <app-accordion-item>
    <h3 header>Section 1</h3>
    <p body>Content for section 1</p>
  </app-accordion-item>
  <app-accordion-item>
    <h3 header>Section 2</h3>
    <p body>Content for section 2</p>
  </app-accordion-item>
</app-accordion>
```

**Example 4: Dialog with Projected Footer**
```typescript
@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog-overlay">
      <div class="dialog">
        <div class="dialog-header">
          <ng-content select="[dialog-title]"></ng-content>
          <button (click)="close()">×</button>
        </div>
        <div class="dialog-body">
          <ng-content></ng-content>
        </div>
        <div class="dialog-footer">
          <ng-content select="[dialog-footer]"></ng-content>
        </div>
      </div>
    </div>
  `
})
export class DialogComponent implements AfterContentInit {
  @ContentChild('dialogFooter') footer!: ElementRef;
  
  ngAfterContentInit() {
    // Check if footer is provided
    if (this.footer) {
      console.log('Dialog has custom footer');
    } else {
      console.log('Using default footer');
    }
  }
  
  close() {
    console.log('Dialog closed');
  }
}
```

```html
<!-- Usage -->
<app-dialog>
  <h2 dialog-title>Confirm Action</h2>
  
  <p>Are you sure you want to continue?</p>
  
  <div dialog-footer #dialogFooter>
    <button (click)="cancel()">Cancel</button>
    <button (click)="confirm()">Confirm</button>
  </div>
</app-dialog>
```

**Example 5: ngAfterContentChecked - Monitor Changes**
```typescript
export class ListWrapperComponent implements AfterContentChecked {
  @ContentChildren(ListItemComponent) items!: QueryList<ListItemComponent>;
  private lastCount = 0;
  
  ngAfterContentChecked() {
    // Detect when items change
    const currentCount = this.items.length;
    
    if (currentCount !== this.lastCount) {
      console.log('Items count changed:', currentCount);
      this.lastCount = currentCount;
      this.updateItemNumbers();
    }
  }
  
  updateItemNumbers() {
    this.items.forEach((item, index) => {
      item.number = index + 1;
    });
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Accessing ContentChild in ngOnInit
export class BadComponent implements OnInit {
  @ContentChild('content') content!: ElementRef;
  
  ngOnInit() {
    console.log(this.content);  // undefined! Content not ready
  }
}

// ✅ CORRECT: Use ngAfterContentInit
export class GoodComponent implements AfterContentInit {
  @ContentChild('content') content!: ElementRef;
  
  ngAfterContentInit() {
    console.log(this.content);  // ✅ Available!
  }
}

// ❌ MISTAKE 2: Confusing ViewChild with ContentChild
@ViewChild('projected') element!: ElementRef;  // Won't find projected content!

// ✅ CORRECT: Use ContentChild for projected content
@ContentChild('projected') element!: ElementRef;  // ✅ Finds it!

// ❌ MISTAKE 3: Heavy operations in ngAfterContentChecked
ngAfterContentChecked() {
  this.expensiveOperation();  // Runs on every check!
}

// ✅ CORRECT: Use guards
private lastState: any;

ngAfterContentChecked() {
  if (this.currentState !== this.lastState) {
    this.lastState = this.currentState;
    this.expensiveOperation();
  }
}

// ❌ MISTAKE 4: Modifying content state causing loops
ngAfterContentChecked() {
  this.content.nativeElement.textContent = 'New';  // Can cause issues!
}

// ✅ CORRECT: Use read-only operations or guards
ngAfterContentChecked() {
  const text = this.content.nativeElement.textContent;  // Read only
  console.log('Content:', text);
}
```

### 🎤 Important Interview Q&A

**Q1: What are ngAfterContentInit and ngAfterContentChecked?**
```
A:
ngAfterContentInit:
- Called ONCE after projected content initialized
- Use for @ContentChild access
- Works with <ng-content>

ngAfterContentChecked:
- Called after EVERY content check
- Monitors projected content changes

Both work with content projection (ng-content).
```

**Q2: Difference between ContentChild and ViewChild?**
```
A:
@ContentChild:
- Projected content (<ng-content>)
- Content from parent component
- Available in ngAfterContentInit

@ViewChild:
- Component's own template
- Defined in component's HTML
- Available in ngAfterViewInit

ContentChild = from parent
ViewChild = from own template
```

**Q3: What is content projection?**
```
A: Content projection allows you to insert content from parent
into child component template using <ng-content>.

Parent:
<app-card>
  <p>This is projected</p>
</app-card>

Child template:
<div class="card">
  <ng-content></ng-content>  <!-- Content inserted here -->
</div>

Like "slots" in other frameworks.
```

**Q4: Lifecycle order with Content and View hooks?**
```
A: Order:
1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit (content ready) ← Content first
5. ngAfterContentChecked
6. ngAfterViewInit (view ready)     ← Then view
7. ngAfterViewChecked

Content hooks run BEFORE view hooks.
```

**Q5: When to use ngAfterContentInit?**
```
A: Use when:
- Need to access @ContentChild
- Work with projected content
- Building reusable wrapper components
- Tabs, accordions, dialogs with slots
- Need to modify/style projected content

Examples: Tab components, card wrappers, modals
```

### 💡 Pro Tips

**1. Multiple Projections:**
```html
<!-- Component template -->
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

<!-- Usage -->
<app-card>
  <h2 header>Title</h2>
  <p body>Content</p>
  <button footer>Action</button>
</app-card>
```

**2. ContentChildren with Descendants:**
```typescript
// Get all descendants (including nested)
@ContentChildren(ItemComponent, { descendants: true }) 
allItems!: QueryList<ItemComponent>;

// Get only direct children
@ContentChildren(ItemComponent, { descendants: false }) 
directChildren!: QueryList<ItemComponent>;
```

**3. Check Content Existence:**
```typescript
ngAfterContentInit() {
  if (this.contentChild) {
    console.log('Content provided');
  } else {
    console.log('Using default content');
  }
}
```

### 🧪 Can You Answer These?

1. ❓ Can you have multiple ng-content in one component?
2. ❓ What happens if no content is projected?
3. ❓ Can you access ViewChild in ngAfterContentInit?
4. ❓ How to listen for ContentChildren changes?
5. ❓ What's the difference between select and no select in ng-content?

---

## 24. ngOnDestroy

### 🎯 Simple Definition
`ngOnDestroy` is a lifecycle hook called **just before Angular destroys the component**. Perfect for cleanup - unsubscribe from observables, clear timers, remove event listeners.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Unsubscribe from observables
- Clear intervals/timeouts
- Remove event listeners
- Close websocket connections
- Save state before navigation
- Cancel pending HTTP requests
- Free up resources

**Benefits:**
- ✅ Prevent memory leaks
- ✅ Clean up resources
- ✅ Proper component cleanup
- ✅ Avoid zombie subscriptions

### ⏰ When It's Called

```typescript
Called ONCE:
- Before component is destroyed
- Before component removed from DOM
- On navigation away
- When parent component destroys it
- When *ngIf becomes false
```

### 📝 Syntax

```typescript
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class MyComponent implements OnDestroy {
  private subscription!: Subscription;
  
  ngOnDestroy() {
    // Cleanup code
    console.log('Component destroyed');
    
    // Unsubscribe
    this.subscription?.unsubscribe();
  }
}
```

### 📝 Real-World Examples

**Example 1: Unsubscribe from Observables**
```typescript
export class UserDashboardComponent implements OnInit, OnDestroy {
  private userSubscription!: Subscription;
  private dataSubscription!: Subscription;
  
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) { }
  
  ngOnInit() {
    // Subscribe to user data
    this.userSubscription = this.userService.getCurrentUser().subscribe(
      user => console.log('User:', user)
    );
    
    // Subscribe to data updates
    this.dataSubscription = this.dataService.getData().subscribe(
      data => console.log('Data:', data)
    );
  }
  
  ngOnDestroy() {
    // ✅ Clean up subscriptions
    console.log('Cleaning up subscriptions');
    this.userSubscription?.unsubscribe();
    this.dataSubscription?.unsubscribe();
  }
}
```

**Example 2: Clear Timers**
```typescript
export class CountdownComponent implements OnInit, OnDestroy {
  countdown = 60;
  private timer: any;
  
  ngOnInit() {
    // Start countdown timer
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.timer);
        console.log('Countdown complete!');
      }
    }, 1000);
  }
  
  ngOnDestroy() {
    // ✅ Clear timer to prevent memory leak
    if (this.timer) {
      clearInterval(this.timer);
      console.log('Timer cleared');
    }
  }
}
```

**Example 3: Remove Event Listeners**
```typescript
export class ScrollTrackerComponent implements OnInit, OnDestroy {
  private scrollHandler: any;
  
  ngOnInit() {
    // Add scroll event listener
    this.scrollHandler = () => {
      console.log('Scrolled:', window.scrollY);
    };
    
    window.addEventListener('scroll', this.scrollHandler);
  }
  
  ngOnDestroy() {
    // ✅ Remove event listener
    window.removeEventListener('scroll', this.scrollHandler);
    console.log('Scroll listener removed');
  }
}
```

**Example 4: Using takeUntil Pattern (Best Practice)**
```typescript
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class DataComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  constructor(
    private service1: Service1,
    private service2: Service2,
    private service3: Service3
  ) { }
  
  ngOnInit() {
    // All subscriptions will auto-unsubscribe
    this.service1.data$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => console.log('Service 1:', data));
    
    this.service2.data$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => console.log('Service 2:', data));
    
    this.service3.data$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => console.log('Service 3:', data));
  }
  
  ngOnDestroy() {
    // ✅ One line to unsubscribe all!
    this.destroy$.next();
    this.destroy$.complete();
    console.log('All subscriptions cleaned up');
  }
}
```

**Example 5: Close WebSocket Connection**
```typescript
export class ChatComponent implements OnInit, OnDestroy {
  private socket!: WebSocket;
  messages: string[] = [];
  
  ngOnInit() {
    // Open websocket connection
    this.socket = new WebSocket('ws://localhost:8080/chat');
    
    this.socket.onmessage = (event) => {
      this.messages.push(event.data);
    };
    
    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };
  }
  
  ngOnDestroy() {
    // ✅ Close websocket connection
    if (this.socket) {
      this.socket.close();
      console.log('WebSocket closed');
    }
  }
  
  sendMessage(message: string) {
    this.socket.send(message);
  }
}
```

**Example 6: Save State Before Leaving**
```typescript
export class FormComponent implements OnDestroy {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  constructor(private stateService: StateService) { }
  
  ngOnDestroy() {
    // ✅ Save form state before component is destroyed
    console.log('Saving form state');
    this.stateService.saveFormDraft(this.formData);
    
    // Or save to localStorage
    localStorage.setItem('formDraft', JSON.stringify(this.formData));
  }
}
```

**Example 7: Multiple Cleanup Tasks**
```typescript
export class ComplexComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  private timer: any;
  private listener: any;
  
  ngOnInit() {
    // Add multiple subscriptions to one Subscription object
    this.subscriptions.add(
      this.service1.data$.subscribe(data => console.log(data))
    );
    
    this.subscriptions.add(
      this.service2.data$.subscribe(data => console.log(data))
    );
    
    // Timer
    this.timer = setInterval(() => console.log('Tick'), 1000);
    
    // Event listener
    this.listener = () => console.log('Click');
    document.addEventListener('click', this.listener);
  }
  
  ngOnDestroy() {
    // ✅ Clean up everything
    console.log('Cleaning up component');
    
    // Unsubscribe all at once
    this.subscriptions.unsubscribe();
    
    // Clear timer
    clearInterval(this.timer);
    
    // Remove event listener
    document.removeEventListener('click', this.listener);
    
    console.log('Cleanup complete');
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting to unsubscribe
ngOnInit() {
  this.service.data$.subscribe(data => {
    // This keeps running even after component destroyed!
    console.log(data);
  });
  // Memory leak! 💧
}

// ✅ CORRECT: Always unsubscribe
subscription!: Subscription;

ngOnInit() {
  this.subscription = this.service.data$.subscribe(data => {
    console.log(data);
  });
}

ngOnDestroy() {
  this.subscription.unsubscribe();  // ✅ Cleaned up
}

// ❌ MISTAKE 2: Not clearing timers
ngOnInit() {
  setInterval(() => {
    this.updateData();  // Keeps running forever!
  }, 1000);
}

// ✅ CORRECT: Clear timers
timer: any;

ngOnInit() {
  this.timer = setInterval(() => {
    this.updateData();
  }, 1000);
}

ngOnDestroy() {
  clearInterval(this.timer);  // ✅ Stopped
}

// ❌ MISTAKE 3: Multiple manual unsubscribes (verbose)
sub1!: Subscription;
sub2!: Subscription;
sub3!: Subscription;

ngOnDestroy() {
  this.sub1.unsubscribe();
  this.sub2.unsubscribe();
  this.sub3.unsubscribe();  // Repetitive!
}

// ✅ BETTER: Use takeUntil pattern
destroy$ = new Subject<void>();

ngOnInit() {
  this.service1.data$.pipe(takeUntil(this.destroy$)).subscribe(...);
  this.service2.data$.pipe(takeUntil(this.destroy$)).subscribe(...);
  this.service3.data$.pipe(takeUntil(this.destroy$)).subscribe(...);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();  // ✅ All unsubscribed!
}

// ❌ MISTAKE 4: Async pipe subscriptions
// Actually OK! async pipe auto-unsubscribes ✅
data$ = this.service.getData();  // No manual unsubscribe needed

// Template: {{ data$ | async }}
```

### 🎤 Important Interview Q&A

**Q1: What is ngOnDestroy in Angular?**
```
A: ngOnDestroy is a lifecycle hook called just before Angular
destroys a component.

Use for cleanup:
- Unsubscribe from observables
- Clear timers (setInterval, setTimeout)
- Remove event listeners
- Close connections (WebSocket, HTTP)
- Free up resources

Prevents memory leaks!
```

**Q2: Why is ngOnDestroy important?**
```
A: Prevents memory leaks:

Without ngOnDestroy:
- Subscriptions keep running
- Timers keep ticking
- Event listeners keep listening
- Memory keeps growing
- App gets slower

With ngOnDestroy:
- Clean shutdown
- Resources freed
- No memory leaks
- Better performance

Critical for long-running apps!
```

**Q3: What needs cleanup in ngOnDestroy?**
```
A: Clean up:

✅ Must clean:
- Observable subscriptions
- setInterval/setTimeout
- addEventListener
- WebSocket connections
- Third-party libraries

❌ Don't need to clean:
- async pipe subscriptions (auto-unsubscribe)
- HTTP requests (auto-complete)
- Variables (garbage collected)

Rule: Anything you "start", you should "stop"
```

**Q4: What's the takeUntil pattern?**
```
A: Best practice for managing multiple subscriptions:

destroy$ = new Subject<void>();

ngOnInit() {
  this.obs1$.pipe(takeUntil(this.destroy$)).subscribe(...);
  this.obs2$.pipe(takeUntil(this.destroy$)).subscribe(...);
  // No need to store subscriptions!
}

ngOnDestroy() {
  this.destroy$.next();      // Trigger unsubscribe
  this.destroy$.complete();  // Complete subject
}

Benefits: Clean, scalable, less code
```

**Q5: Does async pipe need ngOnDestroy?**
```
A: No! async pipe auto-unsubscribes.

// Template
{{ data$ | async }}

// Component - No ngOnDestroy needed! ✅
data$ = this.service.getData();

async pipe handles subscription AND unsubscription automatically.

This is one reason to prefer async pipe!
```

### 💡 Pro Tips

**1. Use Subscription Container:**
```typescript
private subs = new Subscription();

ngOnInit() {
  this.subs.add(this.obs1$.subscribe(...));
  this.subs.add(this.obs2$.subscribe(...));
  this.subs.add(this.obs3$.subscribe(...));
}

ngOnDestroy() {
  this.subs.unsubscribe();  // One line!
}
```

**2. Prefer takeUntil Over Manual Unsubscribe:**
```typescript
// ✅ Best
destroy$ = new Subject<void>();
this.data$.pipe(takeUntil(this.destroy$)).subscribe(...);

// ⚠️ OK but verbose
sub = this.data$.subscribe(...);
ngOnDestroy() { this.sub.unsubscribe(); }
```

**3. Use async Pipe When Possible:**
```typescript
// ✅ Best - no ngOnDestroy needed
data$ = this.service.getData();
// Template: {{ data$ | async }}

// ⚠️ OK but needs cleanup
data: any;
ngOnInit() {
  this.service.getData().subscribe(d => this.data = d);
}
```

### 🧪 Can You Answer These?

1. ❓ What happens if you don't implement ngOnDestroy?
2. ❓ Can ngOnDestroy be async?
3. ❓ Does ngOnDestroy run when page refreshes?
4. ❓ How to test ngOnDestroy?
5. ❓ What's a memory leak and how does ngOnDestroy prevent it?

---

**🎉 SECTION 3 COMPLETE! 🎉**

**✅ Progress: 24/64 topics complete (37.5%)**

**📊 Completion Status:**
- ✅ Section 1: Data Binding Fundamentals (6/6) - 100%
- ✅ Section 2: Directives (11/11) - 100%
- ✅ Section 3: Component Lifecycle (7/7) - 100%
- ⬜ Section 4: Component Communication (8 topics) - 0%
- ⬜ Sections 5-11: Remaining (40 topics) - 0%

---

## SECTION 4: COMPONENT COMMUNICATION

## 25. DECORATORS OVERVIEW

### 🎯 Simple Definition
**Decorators** are special TypeScript functions prefixed with `@` that add metadata to classes, methods, properties, or parameters. They enable Angular's dependency injection, component communication, and lifecycle management.

### 💼 Where They're Used & Benefits

**Common Angular Decorators:**
- `@Component` - Define components
- `@Directive` - Create directives
- `@Pipe` - Define pipes
- `@Injectable` - Enable dependency injection
- `@Input()` - Parent → Child data
- `@Output()` - Child → Parent events
- `@ViewChild()` - Access child elements
- `@ContentChild()` - Access projected content
- `@HostListener()` - Listen to host events
- `@HostBinding()` - Bind to host properties

**Benefits:**
- ✅ Cleaner syntax
- ✅ Metadata attachment
- ✅ Component communication
- ✅ Dependency injection
- ✅ Code organization

### 📝 Decorator Categories

**1. Class Decorators:**
```typescript
@Component({
  selector: 'app-user',
  template: '<p>User</p>'
})
export class UserComponent { }

@Injectable({
  providedIn: 'root'
})
export class UserService { }
```

**2. Property Decorators:**
```typescript
export class ChildComponent {
  @Input() userName: string = '';
  @Output() userClick = new EventEmitter();
  @ViewChild('myDiv') divRef!: ElementRef;
}
```

**3. Method Decorators:**
```typescript
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized');
  }
}
```

**4. Parameter Decorators:**
```typescript
constructor(@Optional() private service?: MyService) { }
```

### 🆚 Key Decorator Comparison

| Decorator | Purpose | Use Case |
|-----------|---------|----------|
| **@Input()** | Receive data from parent | Parent → Child |
| **@Output()** | Send events to parent | Child → Parent |
| **@ViewChild()** | Access child element/component | Query child |
| **@ViewChildren()** | Access multiple children | Query children |
| **@ContentChild()** | Access projected content | ng-content |
| **@HostListener()** | Listen to host events | Event handling |
| **@HostBinding()** | Bind to host property | Dynamic properties |

### 🎤 Important Interview Q&A

**Q1: What are decorators in Angular?**
```
A: Decorators are TypeScript functions that add metadata to classes,
properties, methods, or parameters. Prefixed with @.

Types:
- Class: @Component, @Directive, @Pipe, @Injectable
- Property: @Input, @Output, @ViewChild
- Method: @HostListener
- Parameter: @Optional, @Inject

Enable: DI, component communication, metadata definition
```

**Q2: Can you create custom decorators?**
```
A: Yes!

function Log() {
  return function(target: any, propertyKey: string, 
                  descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`Calling ${propertyKey}`);
      return original.apply(this, args);
    };
  };
}

class MyClass {
  @Log()
  myMethod() { }
}
```

### 💡 Pro Tips

**1. Decorators Execute Bottom-Up**
```typescript
@First()
@Second()
@Third()
class MyClass { }

// Execution order: Third → Second → First
```

**2. Multiple Property Decorators**
```typescript
@Input()
@HostBinding('class.active')
isActive = false;
// Can use multiple decorators on same property
```

---

## 26. @Input() - PARENT TO CHILD

### 🎯 Simple Definition
`@Input()` decorator allows a **child component to receive data from its parent** component. It creates a one-way data binding from parent to child.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Passing configuration to child
- Display data in child component
- Customizable reusable components
- Parent-child communication
- Component composition

**Benefits:**
- ✅ One-way data flow
- ✅ Component reusability
- ✅ Clear data dependencies
- ✅ Type safety
- ✅ Easy testing

### 📝 Syntax Variations

**1. Basic @Input:**
```typescript
export class ChildComponent {
  @Input() userName: string = '';
  @Input() age: number = 0;
}
```

**2. With Alias:**
```typescript
export class ChildComponent {
  @Input('user-name') userName: string = '';
  // Use as: <app-child user-name="John"></app-child>
}
```

**3. Required Input (Angular 16+):**
```typescript
export class ChildComponent {
  @Input({ required: true }) userName!: string;
  // Parent MUST provide this input
}
```

**4. Input with Transform:**
```typescript
export class ChildComponent {
  @Input({ transform: booleanAttribute }) isActive: boolean = false;
  // Transforms string to boolean automatically
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Not initializing or using !
@Input() userName: string;  // Might be undefined!

@Input() userName: string = '';  // ✅ With default
@Input() userName!: string;      // ✅ Definite assignment

// ❌ MISTAKE 2: Modifying input directly in child (bad practice)
export class ChildComponent {
  @Input() user: User = {};
  
  changeUser() {
    this.user.name = 'New name';  // Mutates parent's object!
  }
}

// ✅ CORRECT: Emit event to parent, let parent modify
@Output() userChange = new EventEmitter<User>();

changeUser() {
  this.userChange.emit({ ...this.user, name: 'New name' });
}

// ❌ MISTAKE 3: Using Input value in constructor
constructor() {
  console.log(this.userName);  // Undefined! Not set yet
}

ngOnInit() {
  console.log(this.userName);  // ✅ Available here
}

// ❌ MISTAKE 4: Forgetting @Input decorator
userName: string = '';  // Won't receive data from parent!

@Input() userName: string = '';  // ✅ Correct

// ❌ MISTAKE 5: Wrong syntax in parent template
<app-child [userName]="John"></app-child>  // Error! Looks for variable 'John'
<app-child [userName]="'John'"></app-child>  // ✅ String literal
<app-child userName="John"></app-child>      // ✅ Static binding
```

### 📝 Real-World Examples

**Example 1: User Card Component**

```typescript
// user-card.component.ts
export class UserCardComponent {
  @Input() userName: string = '';
  @Input() userRole: string = 'User';
  @Input() avatar: string = 'default.jpg';
  @Input() isOnline: boolean = false;
}
```

```html
<!-- user-card.component.html -->
<div class="user-card">
  <img [src]="avatar" [alt]="userName">
  <h3>{{ userName }}</h3>
  <p class="role">{{ userRole }}</p>
  <span class="status" [class.online]="isOnline">
    {{ isOnline ? 'Online' : 'Offline' }}
  </span>
</div>
```

```html
<!-- parent.component.html -->
<app-user-card 
  [userName]="'Alice'"
  [userRole]="'Admin'"
  [avatar]="'alice.jpg'"
  [isOnline]="true">
</app-user-card>

<app-user-card 
  [userName]="'Bob'"
  [userRole]="'Editor'"
  [avatar]="'bob.jpg'"
  [isOnline]="false">
</app-user-card>
```

**Example 2: Button Component with Multiple Inputs**

```typescript
// custom-button.component.ts
export class CustomButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  
  get buttonClasses() {
    return {
      [`btn-${this.type}`]: true,
      [`btn-${this.size}`]: true,
      'disabled': this.disabled
    };
  }
}
```

```html
<!-- custom-button.component.html -->
<button [ngClass]="buttonClasses" [disabled]="disabled">
  @if (icon) {
    <i [class]="icon"></i>
  }
  {{ label }}
</button>
```

```html
<!-- parent.component.html -->
<app-custom-button 
  label="Save"
  type="primary"
  size="large"
  icon="fas fa-save">
</app-custom-button>

<app-custom-button 
  label="Delete"
  type="danger"
  [disabled]="!canDelete">
</app-custom-button>
```

**Example 3: Complex Object Input**

```typescript
// product-card.component.ts
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
}

export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showActions: boolean = true;
}
```

```html
<!-- product-card.component.html -->
<div class="product-card">
  <img [src]="product.image" [alt]="product.name">
  <h3>{{ product.name }}</h3>
  <div class="price">₹{{ product.price }}</div>
  <div class="rating">⭐ {{ product.rating }}/5</div>
  
  @if (product.inStock) {
    <span class="badge in-stock">In Stock</span>
  } @else {
    <span class="badge out-of-stock">Out of Stock</span>
  }
  
  @if (showActions) {
    <div class="actions">
      <button>Add to Cart</button>
      <button>View Details</button>
    </div>
  }
</div>
```

```typescript
// parent.component.ts
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      image: 'laptop.jpg',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'Phone',
      price: 30000,
      image: 'phone.jpg',
      rating: 4.2,
      inStock: false
    }
  ];
}
```

```html
<!-- parent.component.html -->
<div class="product-grid">
  @for (product of products; track product.id) {
    <app-product-card 
      [product]="product"
      [showActions]="product.inStock">
    </app-product-card>
  }
</div>
```

**Example 4: Input with ngOnChanges**

```typescript
// chart.component.ts
import { SimpleChanges } from '@angular/core';

export class ChartComponent implements OnChanges {
  @Input() data: number[] = [];
  @Input() chartType: 'line' | 'bar' | 'pie' = 'line';
  
  private chart: any;
  
  ngOnChanges(changes: SimpleChanges) {
    // Detect when inputs change
    if (changes['data'] && !changes['data'].firstChange) {
      console.log('Data changed:', changes['data'].currentValue);
      this.updateChart();
    }
    
    if (changes['chartType']) {
      console.log('Chart type changed:', this.chartType);
      this.recreateChart();
    }
  }
  
  updateChart() {
    // Update chart with new data
  }
  
  recreateChart() {
    // Recreate chart with new type
  }
}
```

**Example 5: Input with Getter/Setter**

```typescript
// progress-bar.component.ts
export class ProgressBarComponent {
  private _progress: number = 0;
  
  @Input()
  set progress(value: number) {
    // Validation and transformation
    this._progress = Math.min(100, Math.max(0, value));
    this.updateColor();
  }
  
  get progress(): number {
    return this._progress;
  }
  
  color: string = 'green';
  
  updateColor() {
    if (this._progress < 30) {
      this.color = 'red';
    } else if (this._progress < 70) {
      this.color = 'orange';
    } else {
      this.color = 'green';
    }
  }
}
```

```html
<!-- progress-bar.component.html -->
<div class="progress-container">
  <div class="progress-bar"
       [style.width.%]="progress"
       [style.background-color]="color">
    {{ progress }}%
  </div>
</div>
```

```html
<!-- parent.component.html -->
<app-progress-bar [progress]="50"></app-progress-bar>
<app-progress-bar [progress]="150"></app-progress-bar>  <!-- Clamped to 100 -->
<app-progress-bar [progress]="-10"></app-progress-bar>  <!-- Clamped to 0 -->
```

**Example 6: Required Input (Angular 16+)**

```typescript
// alert.component.ts
export class AlertComponent {
  @Input({ required: true }) message!: string;
  @Input({ required: true }) type!: 'info' | 'success' | 'warning' | 'error';
  @Input() dismissible: boolean = true;  // Optional with default
}
```

```html
<!-- parent.component.html -->
<!-- ❌ Error: Missing required inputs -->
<app-alert></app-alert>

<!-- ✅ Correct: All required inputs provided -->
<app-alert 
  message="Operation successful!"
  type="success">
</app-alert>

<!-- ✅ Also correct: Optional input can be omitted -->
<app-alert 
  message="Error occurred"
  type="error"
  [dismissible]="false">
</app-alert>
```

### 🎤 Important Interview Q&A

**Q1: What is @Input() in Angular?**
```
A: @Input() is a decorator that allows a child component to receive
data from its parent component.

Usage:
Child:
@Input() userName: string = '';

Parent:
<app-child [userName]="'John'"></app-child>

Creates one-way binding from parent to child.
```

**Q2: Difference between [property] and property bindings?**
```
A:
[property] - Dynamic binding (expression):
<app-child [userName]="userVariable"></app-child>
Evaluates TypeScript expression

property - Static binding (string literal):
<app-child userName="John"></app-child>
Always passes string "John"

Use [] for variables, without for static strings.
```

**Q3: Can child component modify @Input() value?**
```
A: Technically yes, but DON'T do it!

❌ Bad practice:
@Input() user: User = {};
modifyUser() {
  this.user.name = 'New';  // Mutates parent's object!
}

✅ Good practice:
- Treat inputs as immutable
- Emit event to parent to make changes
- Use @Output() for child-to-parent communication
```

**Q4: How to handle undefined @Input()?**
```
A: Three approaches:

1. Default value:
@Input() userName: string = 'Guest';

2. Definite assignment:
@Input() userName!: string;
(Use when parent always provides)

3. Optional:
@Input() userName?: string;

4. Required (Angular 16+):
@Input({ required: true }) userName!: string;
```

**Q5: When is @Input() value available?**
```
A:
constructor: ❌ Not available
ngOnChanges: ✅ Available (first change)
ngOnInit: ✅ Available
ngAfterViewInit: ✅ Available

Order:
1. Constructor
2. @Input() binding
3. ngOnChanges (if input changed)
4. ngOnInit
```

**Q6: Can you use alias with @Input()?**
```
A: Yes!

@Input('user-name') userName: string = '';

Parent template:
<app-child user-name="John"></app-child>

Property name in component: userName
Attribute name in template: user-name

Useful for kebab-case HTML attributes.
```

### 💡 Pro Tips

**1. Use Setter for Validation/Transformation**
```typescript
@Input()
set age(value: number) {
  this._age = value < 0 ? 0 : value;
}
get age(): number {
  return this._age;
}
private _age: number = 0;
```

**2. Detect Input Changes**
```typescript
ngOnChanges(changes: SimpleChanges) {
  if (changes['userName']) {
    console.log('Old:', changes['userName'].previousValue);
    console.log('New:', changes['userName'].currentValue);
  }
}
```

**3. Type Safety with Interfaces**
```typescript
interface User {
  name: string;
  email: string;
}

@Input() user!: User;  // TypeScript enforces structure
```

### 🧪 Can You Answer These?

1. ❓ Can @Input() accept functions as values?
2. ❓ What happens if parent changes object reference vs property?
3. ❓ Can you have conditional @Input() based on another input?
4. ❓ How do you test components with @Input()?
5. ❓ Performance: Many inputs vs one object input?

---

## 27. @Output() & EventEmitter - CHILD TO PARENT

### 🎯 Simple Definition
`@Output()` decorator with `EventEmitter` allows a **child component to send data/events to its parent** component. It creates custom events for parent-child communication.

### 💼 Where It's Used & Benefits

**Use Cases:**
- Button clicks from child to parent
- Form submissions
- User actions
- Data modifications
- Component communication
- Event delegation

**Benefits:**
- ✅ Clear event flow
- ✅ Component encapsulation
- ✅ Type-safe events
- ✅ Reusable components
- ✅ Loosely coupled

### 📝 Syntax

**Child Component:**
```typescript
import { EventEmitter, Output } from '@angular/core';

export class ChildComponent {
  @Output() userClick = new EventEmitter<string>();
  @Output() dataChange = new EventEmitter<number>();
  
  handleClick() {
    this.userClick.emit('Button clicked!');
  }
  
  updateData(value: number) {
    this.dataChange.emit(value);
  }
}
```

**Parent Component:**
```html
<app-child 
  (userClick)="onUserClick($event)"
  (dataChange)="onDataChange($event)">
</app-child>
```

```typescript
export class ParentComponent {
  onUserClick(message: string) {
    console.log('Child says:', message);
  }
  
  onDataChange(value: number) {
    console.log('New value:', value);
  }
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Forgetting to call .emit()
@Output() clicked = new EventEmitter<void>();

handleClick() {
  this.clicked;  // Wrong! Doesn't emit
}

handleClick() {
  this.clicked.emit();  // ✅ Correct
}

// ❌ MISTAKE 2: Not importing EventEmitter
import { Output } from '@angular/core';  // Missing EventEmitter!

@Output() clicked = new EventEmitter();  // Error!

import { Output, EventEmitter } from '@angular/core';  // ✅

// ❌ MISTAKE 3: Wrong event binding syntax in parent
<app-child [userClick]="handleClick()"></app-child>  // Wrong! []
<app-child userClick="handleClick()"></app-child>    // Wrong! No ()
<app-child (userClick)="handleClick($event)"></app-child>  // ✅

// ❌ MISTAKE 4: Subscribing in component (not needed)
export class ChildComponent {
  @Output() clicked = new EventEmitter();
  
  ngOnInit() {
    this.clicked.subscribe(...);  // ❌ Don't do this!
  }
}
// Parent automatically subscribes via () binding

// ❌ MISTAKE 5: Memory leak (manual subscription)
subscription = this.childComponent.clicked.subscribe(...);
// Remember to unsubscribe in ngOnDestroy!

// Better: Use template binding (auto-unsubscribes)
<app-child (clicked)="handleClick()"></app-child>
```

### 📝 Real-World Examples

**Example 1: Counter Component**

```typescript
// counter.component.ts
export class CounterComponent {
  count = 0;
  @Output() countChange = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
```

```html
<!-- counter.component.html -->
<div class="counter">
  <button (click)="decrement()">-</button>
  <span>{{ count }}</span>
  <button (click)="increment()">+</button>
</div>
```

```typescript
// parent.component.ts
export class ParentComponent {
  totalCount = 0;
  
  onCountChange(newCount: number) {
    this.totalCount = newCount;
    console.log('Counter updated:', newCount);
  }
}
```

```html
<!-- parent.component.html -->
<h2>Total Count: {{ totalCount }}</h2>
<app-counter (countChange)="onCountChange($event)"></app-counter>
```

**Example 2: Search Component**

```typescript
// search.component.ts
export class SearchComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();
  
  onSearchChange(value: string) {
    this.searchTerm = value;
    this.search.emit(this.searchTerm);
  }
  
  clearSearch() {
    this.searchTerm = '';
    this.search.emit('');
  }
}
```

```html
<!-- search.component.html -->
<div class="search-box">
  <input 
    type="text"
    [(ngModel)]="searchTerm"
    (input)="onSearchChange(searchTerm)"
    placeholder="Search...">
  <button (click)="clearSearch()">Clear</button>
</div>
```

```typescript
// parent.component.ts
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Tablet', price: 20000 }
  ];
  
  filteredProducts = [...this.products];
  
  onSearch(term: string) {
    if (!term) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
```

```html
<!-- parent.component.html -->
<app-search (search)="onSearch($event)"></app-search>

<div class="product-list">
  @for (product of filteredProducts; track product.id) {
    <div class="product">{{ product.name }} - ₹{{ product.price }}</div>
  }
</div>
```

**Example 3: Custom Modal Component**

```typescript
// modal.component.ts
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  
  onClose() {
    this.close.emit();
  }
  
  onConfirm() {
    this.confirm.emit();
  }
}
```

```html
<!-- modal.component.html -->
@if (isOpen) {
  <div class="modal-overlay" (click)="onClose()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-btn" (click)="onClose()">×</button>
      </div>
      
      <div class="modal-body">
        <ng-content></ng-content>
      </div>
      
      <div class="modal-footer">
        <button (click)="onClose()">Cancel</button>
        <button (click)="onConfirm()" class="btn-primary">Confirm</button>
      </div>
    </div>
  </div>
}
```

```typescript
// parent.component.ts
export class ParentComponent {
  showModal = false;
  
  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }
  
  handleConfirm() {
    console.log('User confirmed!');
    this.showModal = false;
  }
}
```

```html
<!-- parent.component.html -->
<button (click)="openModal()">Open Modal</button>

<app-modal 
  [isOpen]="showModal"
  title="Confirm Action"
  (close)="closeModal()"
  (confirm)="handleConfirm()">
  <p>Are you sure you want to proceed?</p>
</app-modal>
```

**Example 4: Form Component with Complex Data**

```typescript
// user-form.component.ts
interface UserData {
  name: string;
  email: string;
  age: number;
}

export class UserFormComponent {
  @Output() submitForm = new EventEmitter<UserData>();
  @Output() cancel = new EventEmitter<void>();
  
  userData: UserData = {
    name: '',
    email: '',
    age: 0
  };
  
  onSubmit() {
    if (this.isValid()) {
      this.submitForm.emit({ ...this.userData });
    }
  }
  
  onCancel() {
    this.cancel.emit();
  }
  
  isValid(): boolean {
    return this.userData.name !== '' && 
           this.userData.email.includes('@') &&
           this.userData.age > 0;
  }
}
```

```html
<!-- user-form.component.html -->
<form (ngSubmit)="onSubmit()">
  <input [(ngModel)]="userData.name" 
         name="name" 
         placeholder="Name" required>
  
  <input [(ngModel)]="userData.email" 
         name="email" 
         type="email" 
         placeholder="Email" required>
  
  <input [(ngModel)]="userData.age" 
         name="age" 
         type="number" 
         placeholder="Age" required>
  
  <button type="submit" [disabled]="!isValid()">Submit</button>
  <button type="button" (click)="onCancel()">Cancel</button>
</form>
```

```typescript
// parent.component.ts
export class ParentComponent {
  users: UserData[] = [];
  
  onFormSubmit(userData: UserData) {
    this.users.push(userData);
    console.log('User added:', userData);
    console.log('All users:', this.users);
  }
  
  onFormCancel() {
    console.log('Form cancelled');
  }
}
```

```html
<!-- parent.component.html -->
<app-user-form 
  (submitForm)="onFormSubmit($event)"
  (cancel)="onFormCancel()">
</app-user-form>

<h3>Users:</h3>
<ul>
  @for (user of users; track user.email) {
    <li>{{ user.name }} ({{ user.email }}) - Age: {{ user.age }}</li>
  }
</ul>
```

**Example 5: Rating Component**

```typescript
// rating.component.ts
export class RatingComponent {
  @Input() rating = 0;
  @Input() maxRating = 5;
  @Output() ratingChange = new EventEmitter<number>();
  
  stars: number[] = [];
  
  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }
  
  setRating(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }
}
```

```html
<!-- rating.component.html -->
<div class="rating">
  @for (star of stars; track star) {
    <span 
      class="star"
      [class.filled]="star <= rating"
      (click)="setRating(star)">
      {{ star <= rating ? '⭐' : '☆' }}
    </span>
  }
</div>
```

```typescript
// parent.component.ts
export class ProductComponent {
  productRating = 3;
  
  onRatingChange(newRating: number) {
    this.productRating = newRating;
    console.log('New rating:', newRating);
    // Could also save to backend
  }
}
```

```html
<!-- parent.component.html -->
<h3>Product Rating</h3>
<app-rating 
  [rating]="productRating"
  [maxRating]="5"
  (ratingChange)="onRatingChange($event)">
</app-rating>
<p>Current Rating: {{ productRating }}/5</p>
```

### 🆚 @Input() vs @Output()

| Feature | @Input() | @Output() |
|---------|----------|-----------|
| **Direction** | Parent → Child | Child → Parent |
| **Purpose** | Receive data | Send events |
| **Type** | Any data type | EventEmitter |
| **Syntax** | `@Input() data` | `@Output() event` |
| **Template** | `[property]="value"` | `(event)="handler($event)"` |
| **Use case** | Configuration, display data | User actions, data changes |

### 🎤 Important Interview Q&A

**Q1: What is @Output() in Angular?**
```
A: @Output() is a decorator that allows a child component to emit
custom events to its parent component using EventEmitter.

Child:
@Output() clicked = new EventEmitter<string>();
this.clicked.emit('data');

Parent:
<app-child (clicked)="handleClick($event)"></app-child>

Creates child → parent communication.
```

**Q2: What is EventEmitter?**
```
A: EventEmitter is a class used with @Output() to emit custom events.

import { EventEmitter } from '@angular/core';

@Output() myEvent = new EventEmitter<string>();

Methods:
- emit(value): Emits event with value
- subscribe(): Subscribe to events (rarely used directly)

Generic type specifies emitted data type.
```

**Q3: Can you emit multiple values in one event?**
```
A: Use object or array:

1. Object:
@Output() dataChange = new EventEmitter<{name: string, age: number}>();

this.dataChange.emit({ name: 'John', age: 25 });

2. Array:
@Output() multiSelect = new EventEmitter<string[]>();

this.multiSelect.emit(['item1', 'item2', 'item3']);
```

**Q4: Difference between EventEmitter and Subject?**
```
A:
EventEmitter:
- Specifically for @Output()
- Extends Subject
- Synchronous by default
- ✅ Use for component events

Subject (RxJS):
- General-purpose observable
- For services, data streams
- More features (multicast)
- ✅ Use for complex event handling

For @Output(), always use EventEmitter.
```

**Q5: Can parent access child's EventEmitter directly?**
```
A: Yes, with @ViewChild, but NOT recommended:

// Child
@Output() myEvent = new EventEmitter();

// Parent
@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  this.child.myEvent.subscribe(data => {
    console.log(data);
  });
}

❌ Bad practice - memory leak, tight coupling
✅ Use template binding: (myEvent)="handler($event)"
```

### 💡 Pro Tips

**1. Use Naming Convention**
```typescript
// For events, use past tense or noun
@Output() clicked = new EventEmitter();
@Output() dataChanged = new EventEmitter();
@Output() itemSelected = new EventEmitter();

// Or action + complete
@Output() saveComplete = new EventEmitter();
```

**2. Type Safety**
```typescript
interface UserAction {
  type: 'edit' | 'delete' | 'view';
  userId: number;
}

@Output() userAction = new EventEmitter<UserAction>();

// Parent gets type safety
onUserAction(action: UserAction) {
  // TypeScript knows action.type and action.userId
}
```

**3. Combine @Input() and @Output() for Two-Way Binding**
```typescript
// Child
@Input() value = 0;
@Output() valueChange = new EventEmitter<number>();

updateValue(newValue: number) {
  this.value = newValue;
  this.valueChange.emit(this.value);
}

// Parent can use [(value)]="parentValue"
<app-child [(value)]="parentValue"></app-child>
```

### 🧪 Can You Answer These?

1. ❓ Can you emit events in ngOnInit?
2. ❓ What happens if no parent listens to @Output()?
3. ❓ Can @Output() work with async operations?
4. ❓ How to pass multiple @Outputs with one event?
5. ❓ Performance: Many @Outputs vs single event with type?

---

**✅ Progress: 27/64 topics complete (42%)**

Continuing with topics 28-32...

## 28. @ViewChild & @ViewChildren

### 🎯 Simple Definition
`@ViewChild` and `@ViewChildren` are decorators that allow a component to **access child elements, components, or directives** from its template. Think of it as querying the DOM programmatically.

### 💼 Where They're Used & Benefits

**Use Cases:**
- Access child component methods
- Manipulate DOM elements directly
- Focus input fields
- Trigger animations
- Access template reference variables
- Query multiple children

**Benefits:**
- ✅ Programmatic DOM access
- ✅ Call child methods
- ✅ Direct element manipulation
- ✅ Type-safe queries
- ✅ Multiple element access

### 📝 Syntax

**@ViewChild (Single Element):**
```typescript
@ViewChild('elementRef') element!: ElementRef;
@ViewChild(ChildComponent) child!: ChildComponent;
@ViewChild('input', { read: ElementRef }) input!: ElementRef;
```

**@ViewChildren (Multiple Elements):**
```typescript
@ViewChildren('item') items!: QueryList<ElementRef>;
@ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;
```

### ⏰ When Available?

```typescript
constructor() {
  // ❌ Not available - undefined
}

ngOnInit() {
  // ❌ Not available - undefined
}

ngAfterViewInit() {
  // ✅ Available here!
  console.log(this.childComponent);
}

ngAfterViewChecked() {
  // ✅ Available and updated
}
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Accessing in ngOnInit
@ViewChild('input') inputRef!: ElementRef;

ngOnInit() {
  this.inputRef.nativeElement.focus();  // Error! undefined
}

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();  // ✅ Works
}

// ❌ MISTAKE 2: Forgetting template reference #
<!-- Template -->
<input type="text">  <!-- No # reference! -->

// Component
@ViewChild('input') input!: ElementRef;  // Won't find it!

<!-- ✅ Correct -->
<input #input type="text">

// ❌ MISTAKE 3: Wrong read type
@ViewChild('div') div!: ChildComponent;  // Wrong! It's a div, not component

@ViewChild('div', { read: ElementRef }) div!: ElementRef;  // ✅

// ❌ MISTAKE 4: Using ViewChild with *ngIf (element not in DOM)
<div *ngIf="show">
  <input #input>
</div>

@ViewChild('input') input!: ElementRef;
// undefined if show = false!

// ✅ Use { static: false } or check for existence
@ViewChild('input', { static: false }) input?: ElementRef;

// ❌ MISTAKE 5: Not unsubscribing from QueryList changes
@ViewChildren('item') items!: QueryList<ElementRef>;

ngAfterViewInit() {
  this.items.changes.subscribe(...);  // Remember to unsubscribe!
}
```

### 📝 Real-World Examples

**Example 1: Focus Input Field**

```typescript
export class LoginComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;
  
  ngAfterViewInit() {
    // Auto-focus email field when component loads
    this.emailInput.nativeElement.focus();
  }
}
```

```html
<input #emailInput type="email" placeholder="Email">
<input type="password" placeholder="Password">
```

**Example 2: Call Child Component Method**

```typescript
// child.component.ts
export class AlertComponent {
  isVisible = false;
  message = '';
  
  show(msg: string) {
    this.message = msg;
    this.isVisible = true;
    
    setTimeout(() => {
      this.hide();
    }, 3000);
  }
  
  hide() {
    this.isVisible = false;
  }
}
```

```html
<!-- child.component.html -->
@if (isVisible) {
  <div class="alert">{{ message }}</div>
}
```

```typescript
// parent.component.ts
export class ParentComponent {
  @ViewChild(AlertComponent) alert!: AlertComponent;
  
  ngAfterViewInit() {
    // Can now call child methods
  }
  
  showSuccess() {
    this.alert.show('Operation successful!');
  }
  
  showError() {
    this.alert.show('Error occurred!');
  }
}
```

```html
<!-- parent.component.html -->
<button (click)="showSuccess()">Show Success</button>
<button (click)="showError()">Show Error</button>
<app-alert></app-alert>
```

**Example 3: Multiple Elements with @ViewChildren**

```typescript
export class TabsComponent {
  @ViewChildren('tabButton') tabButtons!: QueryList<ElementRef>;
  
  activeIndex = 0;
  
  ngAfterViewInit() {
    this.highlightActiveTab();
    
    // Listen to changes when tabs are added/removed
    this.tabButtons.changes.subscribe(() => {
      console.log('Tabs changed');
      this.highlightActiveTab();
    });
  }
  
  setActiveTab(index: number) {
    this.activeIndex = index;
    this.highlightActiveTab();
  }
  
  highlightActiveTab() {
    this.tabButtons.forEach((button, index) => {
      if (index === this.activeIndex) {
        button.nativeElement.classList.add('active');
      } else {
        button.nativeElement.classList.remove('active');
      }
    });
  }
}
```

```html
<div class="tabs">
  <button #tabButton (click)="setActiveTab(0)">Tab 1</button>
  <button #tabButton (click)="setActiveTab(1)">Tab 2</button>
  <button #tabButton (click)="setActiveTab(2)">Tab 3</button>
</div>
```

**Example 4: Access Form Controls**

```typescript
export class FormComponent {
  @ViewChild('userForm') form!: NgForm;
  
  submitForm() {
    if (this.form.valid) {
      console.log('Form values:', this.form.value);
      this.form.resetForm();
    }
  }
  
  clearForm() {
    this.form.resetForm();
  }
}
```

```html
<form #userForm="ngForm" (ngSubmit)="submitForm()">
  <input name="name" ngModel required>
  <input name="email" ngModel type="email" required>
  <button type="submit">Submit</button>
  <button type="button" (click)="clearForm()">Clear</button>
</form>
```

**Example 5: Scroll to Element**

```typescript
export class ScrollComponent {
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  
  scrollTo(section: 'section1' | 'section2' | 'section3') {
    const element = this[section].nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
```

```html
<nav>
  <button (click)="scrollTo('section1')">Go to Section 1</button>
  <button (click)="scrollTo('section2')">Go to Section 2</button>
  <button (click)="scrollTo('section3')">Go to Section 3</button>
</nav>

<div #section1 class="section">
  <h2>Section 1</h2>
  <p>Content...</p>
</div>

<div #section2 class="section">
  <h2>Section 2</h2>
  <p>Content...</p>
</div>

<div #section3 class="section">
  <h2>Section 3</h2>
  <p>Content...</p>
</div>
```

**Example 6: Dynamic Component with Read**

```typescript
export class DynamicComponent {
  // Get the component instance
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  
  // Get the element reference
  @ViewChild(ChildComponent, { read: ElementRef }) 
  childElement!: ElementRef;
  
  // Get the ViewContainerRef
  @ViewChild(ChildComponent, { read: ViewContainerRef })
  childContainer!: ViewContainerRef;
  
  ngAfterViewInit() {
    // Access different aspects of the same child
    console.log('Component:', this.childComponent);
    console.log('Element:', this.childElement.nativeElement);
    console.log('Container:', this.childContainer);
  }
}
```

**Example 7: Video Player Control**

```typescript
export class VideoPlayerComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  isPlaying = false;
  
  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    
    video.addEventListener('play', () => {
      this.isPlaying = true;
    });
    
    video.addEventListener('pause', () => {
      this.isPlaying = false;
    });
  }
  
  play() {
    this.videoPlayer.nativeElement.play();
  }
  
  pause() {
    this.videoPlayer.nativeElement.pause();
  }
  
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  
  setVolume(volume: number) {
    this.videoPlayer.nativeElement.volume = volume / 100;
  }
}
```

```html
<video #videoPlayer src="movie.mp4" width="600"></video>

<div class="controls">
  <button (click)="togglePlayPause()">
    {{ isPlaying ? 'Pause' : 'Play' }}
  </button>
  
  <label>
    Volume:
    <input type="range" min="0" max="100" 
           (input)="setVolume($any($event.target).value)">
  </label>
</div>
```

### 🆚 @ViewChild vs @ContentChild

| Feature | @ViewChild | @ContentChild |
|---------|-----------|---------------|
| **Queries** | Component's own template | Projected content |
| **Available in** | ngAfterViewInit | ngAfterContentInit |
| **Syntax** | `@ViewChild('ref')` | `@ContentChild('ref')` |
| **Use case** | Own template elements | `<ng-content>` elements |

### 🎤 Important Interview Q&A

**Q1: What is @ViewChild in Angular?**
```
A: @ViewChild is a decorator that queries a single element, component,
or directive from the component's template.

Syntax:
@ViewChild('templateRef') element!: ElementRef;
@ViewChild(ChildComponent) child!: ChildComponent;

Available in: ngAfterViewInit
```

**Q2: Difference between @ViewChild and @ViewChildren?**
```
A:
@ViewChild:
- Queries SINGLE element
- Returns: ElementRef, Component, etc.
- Use: One specific element

@ViewChildren:
- Queries MULTIPLE elements
- Returns: QueryList<T>
- Use: Multiple similar elements
- Has .changes observable

Example:
@ViewChild('input') input!: ElementRef;
@ViewChildren('item') items!: QueryList<ElementRef>;
```

**Q3: When is @ViewChild available?**
```
A: Available in ngAfterViewInit, not before.

constructor: ❌ undefined
ngOnInit: ❌ undefined
ngAfterViewInit: ✅ Available
ngAfterViewChecked: ✅ Available

Why? View is constructed after ngOnInit.
```

**Q4: How to query different types with { read }?**
```
A: Use { read } to specify what to get:

<app-child #child></app-child>

@ViewChild('child') component!: ChildComponent;  // Component instance
@ViewChild('child', { read: ElementRef }) el!: ElementRef;  // DOM element
@ViewChild('child', { read: ViewContainerRef }) vcr!: ViewContainerRef;

{ read } specifies the type to return.
```

**Q5: What is QueryList?**
```
A: QueryList is a live collection returned by @ViewChildren.

@ViewChildren('item') items!: QueryList<ElementRef>;

Properties:
- length: number
- first: T
- last: T
- changes: Observable  // Notifies when list changes

Methods:
- forEach()
- map()
- filter()
- toArray()

It's "live" - automatically updates when elements added/removed.
```

**Q6: How to handle @ViewChild with *ngIf?**
```
A: Element might not exist if condition is false.

Solutions:

1. Static false (default):
@ViewChild('el', { static: false }) el?: ElementRef;

2. Check before use:
ngAfterViewInit() {
  if (this.el) {
    // Use element
  }
}

3. Use setter:
@ViewChild('el')
set element(el: ElementRef) {
  if (el) {
    // Element available
  }
}
```

### 💡 Pro Tips

**1. Use Type Parameter for Generic Elements**
```typescript
@ViewChild('video') video!: ElementRef<HTMLVideoElement>;

// Now TypeScript knows it's a video element
this.video.nativeElement.play();  // Autocomplete works!
```

**2. Query Directives**
```typescript
@ViewChild(MyDirective) directive!: MyDirective;
// Can query custom directives too
```

**3. Access Multiple Children in Array**
```typescript
@ViewChildren('item') items!: QueryList<ElementRef>;

ngAfterViewInit() {
  const array = this.items.toArray();
  console.log('First item:', array[0]);
  console.log('Last item:', array[array.length - 1]);
}
```

### 🧪 Can You Answer These?

1. ❓ Can @ViewChild query elements in child components?
2. ❓ What happens if multiple elements match @ViewChild query?
3. ❓ Can you use @ViewChild with ng-template?
4. ❓ How to detect when QueryList changes?
5. ❓ Performance: Many @ViewChild vs fewer?

---

## 29. @ContentChild & @ContentChildren

### 🎯 Simple Definition
`@ContentChild` and `@ContentChildren` query elements **projected into a component via `<ng-content>`** (content projection). Unlike @ViewChild which queries the component's own template.

### 💼 Where They're Used & Benefits

**Use Cases:**
- Access projected content
- Customize projected components
- Validate projected elements
- Tabs with tab panels
- Card with header/footer
- Accordion panels

**Benefits:**
- ✅ Access projected content
- ✅ Component customization
- ✅ Flexible composition
- ✅ Reusable containers
- ✅ Type-safe projection

### ⏰ When Available?

```typescript
ngAfterContentInit() {
  // ✅ Available here (first time)
}

ngAfterContentChecked() {
  // ✅ Available and updated
}
```

### 📝 Syntax

```typescript
@ContentChild('ref') content!: ElementRef;
@ContentChild(Component) component!: Component;
@ContentChildren('ref') contents!: QueryList<ElementRef>;
```

### 📝 Real-World Examples

**Example 1: Card with Projected Header**

```typescript
// card.component.ts
export class CardComponent {
  @ContentChild('cardHeader') header!: ElementRef;
  @ContentChild('cardFooter') footer!: ElementRef;
  
  ngAfterContentInit() {
    console.log('Header:', this.header);
    console.log('Footer:', this.footer);
  }
}
```

```html
<!-- card.component.html -->
<div class="card">
  <div class="card-header">
    <ng-content select="[card-header]"></ng-content>
  </div>
  
  <div class="card-body">
    <ng-content></ng-content>
  </div>
  
  <div class="card-footer">
    <ng-content select="[card-footer]"></ng-content>
  </div>
</div>
```

```html
<!-- parent usage -->
<app-card>
  <h2 #cardHeader card-header>Card Title</h2>
  
  <p>This is the card body content</p>
  
  <div #cardFooter card-footer>
    <button>Action</button>
  </div>
</app-card>
```

**Example 2: Tabs Component**

```typescript
// tab.component.ts
export class TabComponent {
  @Input() title = '';
  isActive = false;
}

// tabs.component.ts
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  
  ngAfterContentInit() {
    // Activate first tab
    const activeTabs = this.tabs.filter(tab => tab.isActive);
    
    if (activeTabs.length === 0 && this.tabs.first) {
      this.tabs.first.isActive = true;
    }
  }
  
  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.isActive = tab === selectedTab;
    });
  }
}
```

```html
<!-- tabs.component.html -->
<div class="tabs">
  <div class="tab-headers">
    @for (tab of tabs; track tab.title) {
      <button [class.active]="tab.isActive"
              (click)="selectTab(tab)">
        {{ tab.title }}
      </button>
    }
  </div>
  
  <div class="tab-content">
    <ng-content></ng-content>
  </div>
</div>
```

```html
<!-- tab.component.html -->
@if (isActive) {
  <div class="tab-panel">
    <ng-content></ng-content>
  </div>
}
```

```html
<!-- parent usage -->
<app-tabs>
  <app-tab title="Profile">
    <p>Profile content here</p>
  </app-tab>
  
  <app-tab title="Settings">
    <p>Settings content here</p>
  </app-tab>
  
  <app-tab title="Messages">
    <p>Messages content here</p>
  </app-tab>
</app-tabs>
```

### 🆚 @ViewChild vs @ContentChild

| Feature | @ViewChild | @ContentChild |
|---------|-----------|---------------|
| **Queries** | Own template | Projected content |
| **Lifecycle** | ngAfterViewInit | ngAfterContentInit |
| **Source** | Component template | Parent's ng-content |
| **Plural** | @ViewChildren | @ContentChildren |

### 🎤 Important Interview Q&A

**Q1: What is @ContentChild?**
```
A: @ContentChild queries elements projected into a component
via <ng-content>.

@ContentChild('ref') content!: ElementRef;

Available in: ngAfterContentInit

Use: Access projected content from parent
```

**Q2: Difference between @ViewChild and @ContentChild?**
```
A:
@ViewChild:
- Queries component's own template
- Available: ngAfterViewInit
- Example: <div #myDiv> in component

@ContentChild:
- Queries projected content (<ng-content>)
- Available: ngAfterContentInit
- Example: Content from parent

@ViewChild = own template
@ContentChild = projected content
```

**Q3: When is @ContentChild available?**
```
A:
ngAfterContentInit: ✅ First time
ngAfterContentChecked: ✅ After changes

Before ngAfterContentInit: ❌ undefined

Content is initialized before view.
Order: Content Init → View Init
```

### 💡 Pro Tips

**1. Validate Projected Content**
```typescript
ngAfterContentInit() {
  if (!this.header) {
    console.warn('No header projected!');
  }
}
```

**2. Listen to Content Changes**
```typescript
@ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

ngAfterContentInit() {
  this.tabs.changes.subscribe(() => {
    console.log('Tabs changed');
  });
}
```

---

## 30. Template Reference Variables

### 🎯 Simple Definition
Template reference variables (declared with `#` or `ref-`) create **references to DOM elements, components, or directives** in templates. Access them within the same template or via @ViewChild/@ContentChild.

### 📝 Syntax

```html
<!-- Element reference -->
<input #myInput type="text">
<button (click)="myInput.focus()">Focus Input</button>

<!-- Component reference -->
<app-child #childComponent></app-child>
<button (click)="childComponent.someMethod()">Call Method</button>

<!-- Directive reference -->
<form #myForm="ngForm">
  <input name="email" ngModel>
</form>
<p>Valid: {{ myForm.valid }}</p>
```

### 📝 Real-World Examples

**Example: Form with Template Reference**
```html
<form #userForm="ngForm" (ngSubmit)="submit(userForm)">
  <input name="name" ngModel required>
  <p *ngIf="userForm.invalid">Form is invalid</p>
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

### 🎤 Important Interview Q&A

**Q1: What are template reference variables?**
```
A: Template references create variables pointing to elements,
components, or directives in templates.

Syntax:
#variableName or ref-variableName

<input #myInput>
<button (click)="myInput.value = ''">Clear</button>

Access in template or via @ViewChild
```

**Q2: Scope of template reference variables?**
```
A: Template-wide scope, but only in same template.

Can use in:
- Same template ✅
- Passed to component methods ✅
- @ViewChild/@ContentChild ✅

Cannot use in:
- Component TypeScript (without @ViewChild) ❌
- Other component templates ❌
```

---

## 31. Services & Dependency Injection

### 🎯 Simple Definition
**Services** are singleton classes that provide reusable business logic, data access, or utilities across the application. **Dependency Injection (DI)** is Angular's mechanism to provide these services to components/other services.

### 💼 Where Used & Benefits

**Use Cases:**
- API calls (HTTP service)
- Data sharing between components
- Business logic
- Authentication
- Logging
- State management

**Benefits:**
- ✅ Code reusability
- ✅ Separation of concerns
- ✅ Easier testing
- ✅ Singleton pattern
- ✅ Loose coupling

### 📝 Creating & Using Services

**1. Create Service:**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Singleton across app
})
export class UserService {
  private users: User[] = [];
  
  getUsers() {
    return this.users;
  }
  
  addUser(user: User) {
    this.users.push(user);
  }
}
```

**2. Inject in Component:**
```typescript
export class UserListComponent {
  users: User[] = [];
  
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
```

### 📝 Real-World Example

```typescript
// auth.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private isAuthenticated = false;
  
  login(email: string, password: string): Observable<User> {
    // API call
    return this.http.post<User>('/api/login', { email, password })
      .pipe(
        tap(user => {
          this.currentUser = user;
          this.isAuthenticated = true;
          localStorage.setItem('token', user.token);
        })
      );
  }
  
  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }
  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
```

```typescript
// login.component.ts
export class LoginComponent {
  constructor(private authService: AuthService) {}
  
  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: (user) => console.log('Logged in:', user),
      error: (err) => console.error('Login failed:', err)
    });
  }
}
```

### 🎤 Important Interview Q&A

**Q1: What are services in Angular?**
```
A: Services are singleton classes with @Injectable decorator
that provide reusable logic, data access, or utilities.

@Injectable({
  providedIn: 'root'
})
export class DataService { }

Use for: API calls, data sharing, business logic
Inject via: constructor(private service: Service)
```

**Q2: What is Dependency Injection?**
```
A: DI is a design pattern where dependencies are provided
(injected) rather than created by the class itself.

Without DI:
class MyComponent {
  service = new MyService();  // Tight coupling
}

With DI:
class MyComponent {
  constructor(private service: MyService) {}  // Injected
}

Benefits: Testability, loose coupling, reusability
```

**Q3: What does providedIn: 'root' mean?**
```
A: Makes service a singleton at root level.

@Injectable({
  providedIn: 'root'  // App-wide singleton
})

Alternative:
@Injectable()  // Must add to providers array

providedIn: 'root' = tree-shakeable, single instance
```

---

## 32. Component Communication Patterns

### 🎯 Simple Definition
Different patterns for **components to communicate** with each other beyond simple parent-child relationships.

### 📝 Communication Patterns

**1. Parent → Child: @Input()**
```typescript
// Already covered in topic 26
```

**2. Child → Parent: @Output()**
```typescript
// Already covered in topic 27
```

**3. Siblings: Shared Service**
```typescript
// shared-data.service.ts
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private messageSource = new BehaviorSubject<string>('');
  currentMessage$ = this.messageSource.asObservable();
  
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

// component-a.ts
export class ComponentA {
  constructor(private sharedData: SharedDataService) {}
  
  sendMessage() {
    this.sharedData.changeMessage('Hello from A!');
  }
}

// component-b.ts
export class ComponentB {
  message = '';
  
  constructor(private sharedData: SharedDataService) {
    this.sharedData.currentMessage$.subscribe(msg => {
      this.message = msg;
    });
  }
}
```

**4. Any to Any: Event Bus Service**
```typescript
@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private events = new Subject<{type: string, data: any}>();
  
  emit(type: string, data: any) {
    this.events.next({ type, data });
  }
  
  on(type: string) {
    return this.events.pipe(
      filter(event => event.type === type),
      map(event => event.data)
    );
  }
}
```

### 🎤 Important Interview Q&A

**Q1: How do sibling components communicate?**
```
A: Use shared service with Subject/BehaviorSubject:

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();
  
  sendData(data: any) {
    this.dataSource.next(data);
  }
}

Component A: service.sendData(data)
Component B: service.data$.subscribe(...)
```

**Q2: All component communication methods?**
```
A:
1. @Input/@Output - Parent-child
2. Service - Any components
3. @ViewChild - Parent to child (direct access)
4. Template reference - Within template
5. Router (query params/state) - Route-based
6. Local storage - Persistent data
7. RxJS Subject - Event-based

Choose based on relationship and requirements.
```

---

**🎉 SECTION 4 COMPLETE! 🎉**

**✅ Progress: 32/64 topics complete (50%)**

**📊 Completion Status:**
- ✅ Section 1: Data Binding (6/6) - 100%
- ✅ Section 2: Directives (11/11) - 100%
- ✅ Section 3: Lifecycle (7/7) - 100%
- ✅ Section 4: Communication (8/8) - 100%
- ⬜ Section 5-11: Remaining (32 topics)

**Halfway complete! 🎯**

Ready to continue with Section 5: Services & DI?

---

## SECTION 5: SERVICES & DEPENDENCY INJECTION

## 33. Injectable & Provider Scope

### 🎯 Simple Definition
`@Injectable()` makes a class available for **dependency injection**. **Provider scope** determines where the service instance is created and shared (root, module, or component level).

### 💼 Provider Scopes

**1. Root Level (Singleton):**
```typescript
@Injectable({
  providedIn: 'root'  // Single instance app-wide
})
export class UserService { }
```

**2. Module Level:**
```typescript
@Injectable()
export class DataService { }

@NgModule({
  providers: [DataService]  // One instance per module
})
export class FeatureModule { }
```

**3. Component Level:**
```typescript
@Component({
  selector: 'app-user',
  providers: [UserService]  // New instance per component
})
export class UserComponent { }
```

### 🆚 Scope Comparison

| Scope | Syntax | Instance | Use Case |
|-------|--------|----------|----------|
| **Root** | `providedIn: 'root'` | App-wide singleton | Most services |
| **Module** | `providers: []` in @NgModule | Per module | Feature-specific |
| **Component** | `providers: []` in @Component | Per component | Isolated state |

### 📝 Real-World Examples

**Example 1: Root-Level Service (Singleton)**
```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  
  login(user: User) {
    this.currentUser = user;
  }
  
  getCurrentUser() {
    return this.currentUser;
  }
}

// Same instance everywhere
// ComponentA and ComponentB share same AuthService instance
```

**Example 2: Component-Level Service (New Instance)**
```typescript
@Injectable()
export class FormStateService {
  formData: any = {};
  
  saveFormData(data: any) {
    this.formData = data;
  }
}

@Component({
  selector: 'app-user-form',
  providers: [FormStateService]  // Each component gets new instance
})
export class UserFormComponent {
  constructor(private formState: FormStateService) {}
}

// Each UserFormComponent has its own FormStateService
// Data is isolated between instances
```

### ❌ Common Mistakes

```typescript
// ❌ MISTAKE 1: Providing at both root and component
@Injectable({
  providedIn: 'root'  // Singleton
})
export class MyService { }

@Component({
  providers: [MyService]  // Creates new instance! Not singleton anymore
})
// Component gets different instance than rest of app

// ✅ CORRECT: Choose one scope
@Injectable({
  providedIn: 'root'  // Use everywhere
})

// ❌ MISTAKE 2: Forgetting @Injectable for injected services
export class MyService {  // No @Injectable!
  constructor(private http: HttpClient) {}  // Won't work!
}

@Injectable()  // ✅ Needed if injecting dependencies
export class MyService {
  constructor(private http: HttpClient) {}
}
```

### 🎤 Important Interview Q&A

**Q1: What does providedIn: 'root' mean?**
```
A: Creates app-wide singleton service with these benefits:

@Injectable({
  providedIn: 'root'
})

Benefits:
1. Single instance across entire app
2. Tree-shakeable (removed if unused)
3. No need to add to providers array
4. Better performance

Default choice for most services.
```

**Q2: When to use component-level providers?**
```
A: When you need isolated instances:

Use cases:
1. Form state per component instance
2. Separate data for each component
3. Different configuration per instance

@Component({
  providers: [IsolatedService]
})

Each component gets its own service instance.
```

---

## 34. Service Communication Patterns

### 🎯 Simple Definition
Patterns for **components to communicate** using services with **RxJS Subjects/BehaviorSubjects** for reactive data flow.

### 📝 Common Patterns

**1. Subject Pattern (Event Bus):**
```typescript
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();
  
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
```

**2. BehaviorSubject Pattern (Stateful):**
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<Data[]>([]);
  data$ = this.dataSubject.asObservable();
  
  updateData(data: Data[]) {
    this.dataSubject.next(data);
  }
  
  getCurrentValue() {
    return this.dataSubject.getValue();  // Get current state
  }
}
```

### 📝 Real-World Example

```typescript
// notification.service.ts
export interface Notification {
  type: 'success' | 'error' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notification$ = this.notificationSubject.asObservable();
  
  success(message: string) {
    this.notificationSubject.next({ type: 'success', message });
  }
  
  error(message: string) {
    this.notificationSubject.next({ type: 'error', message });
  }
}

// any-component.ts
export class AnyComponent {
  constructor(private notificationService: NotificationService) {}
  
  saveData() {
    // After save...
    this.notificationService.success('Data saved!');
  }
}

// notification-display.component.ts
export class NotificationDisplayComponent {
  notification: Notification | null = null;
  
  constructor(private notificationService: NotificationService) {
    this.notificationService.notification$.subscribe(notification => {
      this.notification = notification;
      setTimeout(() => this.notification = null, 3000);
    });
  }
}
```

---

## SECTION 6: ROUTING

## 35. Router Basics

### 🎯 Simple Definition
**Angular Router** enables navigation between different views/components based on URL paths. It manages application navigation and component rendering.

### 📝 Setup & Basic Usage

**1. Define Routes:**
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard
];
```

**2. Configure Router:**
```typescript
// app.config.ts
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

**3. Router Outlet:**
```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/users">Users</a>
</nav>

<router-outlet></router-outlet>  <!-- Component renders here -->
```

### 🎤 Important Interview Q&A

**Q1: What is Angular Router?**
```
A: Angular Router is a navigation library that:
- Maps URLs to components
- Manages browser history
- Handles navigation
- Supports route parameters, guards, lazy loading

Setup:
1. Define routes: Routes array
2. Configure: provideRouter()
3. Use: <router-outlet> + routerLink
```

---

## 36. Route Parameters

### 🎯 Simple Definition
**Route parameters** pass dynamic values through the URL path (like `/user/123`). Accessed via `ActivatedRoute`.

### 📝 Syntax & Usage

**1. Define Parameterized Route:**
```typescript
const routes: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'product/:id/:name', component: ProductComponent }
];
```

**2. Navigate with Parameters:**
```typescript
// Programmatic
this.router.navigate(['/user', userId]);

// Template
<a [routerLink]="['/user', user.id]">View User</a>
```

**3. Read Parameters:**
```typescript
export class UserDetailComponent {
  userId: string = '';
  
  constructor(private route: ActivatedRoute) {
    // Snapshot (one-time read)
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    
    // Observable (reactive updates)
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || '';
      this.loadUser(this.userId);
    });
  }
}
```

### 📝 Real-World Example

```typescript
// Route
{ path: 'product/:id', component: ProductDetailComponent }

// product-list.component.html
<div *ngFor="let product of products">
  <a [routerLink]="['/product', product.id]">
    {{ product.name }}
  </a>
</div>

// product-detail.component.ts
export class ProductDetailComponent {
  product: Product | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProduct(id).subscribe(product => {
          this.product = product;
        });
      }
    });
  }
}
```

---

## 37. Query Parameters

### 🎯 Simple Definition
**Query parameters** pass optional data via URL query string (like `/search?q=angular&page=2`). Useful for filters, pagination, search.

### 📝 Syntax & Usage

**1. Navigate with Query Params:**
```typescript
// Programmatic
this.router.navigate(['/search'], {
  queryParams: { q: 'angular', page: 2 }
});
// Result: /search?q=angular&page=2

// Template
<a [routerLink]="['/search']" 
   [queryParams]="{q: 'angular', page: 2}">
  Search
</a>
```

**2. Read Query Params:**
```typescript
export class SearchComponent {
  searchTerm = '';
  page = 1;
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('q') || '';
      this.page = Number(params.get('page')) || 1;
      this.performSearch();
    });
  }
}
```

### 📝 Real-World Example

```typescript
// product-list.component.ts
export class ProductListComponent {
  products: Product[] = [];
  category = '';
  sortBy = 'name';
  page = 1;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.sortBy = params.get('sort') || 'name';
      this.page = Number(params.get('page')) || 1;
      this.loadProducts();
    });
  }
  
  applyFilters(category: string, sortBy: string) {
    this.router.navigate(['/products'], {
      queryParams: { category, sort: sortBy, page: 1 }
    });
  }
  
  nextPage() {
    this.router.navigate(['/products'], {
      queryParams: { ...this.route.snapshot.queryParams, page: this.page + 1 },
      queryParamsHandling: 'merge'  // Preserve existing params
    });
  }
}
```

---

## 38. Child Routes

### 🎯 Simple Definition
**Child routes** create nested routing structures where parent components have their own `<router-outlet>` for child components.

### 📝 Configuration

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
```

**Parent Template:**
```html
<!-- dashboard.component.html -->
<div class="dashboard">
  <nav>
    <a routerLink="/dashboard">Home</a>
    <a routerLink="/dashboard/profile">Profile</a>
    <a routerLink="/dashboard/settings">Settings</a>
  </nav>
  
  <router-outlet></router-outlet>  <!-- Child components render here -->
</div>
```

---

## 39. Route Guards

### 🎯 Simple Definition
**Route guards** protect routes by controlling access based on conditions (authentication, permissions, unsaved changes).

### 📝 Types of Guards

**1. CanActivate (Can enter route?):**
```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

// Route
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

**2. CanDeactivate (Can leave route?):**
```typescript
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard {
  canDeactivate(component: CanComponentDeactivate): boolean {
    return component.canDeactivate();
  }
}

// Component
export class FormComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;
  
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Leave anyway?');
    }
    return true;
  }
}

// Route
{
  path: 'form',
  component: FormComponent,
  canDeactivate: [UnsavedChangesGuard]
}
```

---

## 40. Lazy Loading

### 🎯 Simple Definition
**Lazy loading** loads feature modules only when needed, reducing initial bundle size and improving performance.

### 📝 Implementation

```typescript
// app.routes.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component')
      .then(m => m.ProductsComponent)
  }
];
```

### 🎤 Important Interview Q&A

**Q: Benefits of lazy loading?**
```
A:
1. Smaller initial bundle size
2. Faster initial load time
3. Load features on-demand
4. Better performance
5. Code splitting

Use for: Large feature modules, admin panels, rarely used features
```

---

## 41. Preloading Strategies

### 🎯 Simple Definition
**Preloading strategies** determine when to load lazy modules (immediately, on hover, custom logic).

### 📝 Built-in Strategies

**1. PreloadAllModules:**
```typescript
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';

providers: [
  provideRouter(routes, withPreloading(PreloadAllModules))
]
// Loads all lazy modules in background after initial load
```

**2. NoPreloading (Default):**
```typescript
// Only loads when user navigates to route
```

**3. Custom Strategy:**
```typescript
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Custom logic
    if (route.data && route.data['preload']) {
      return load();
    }
    return of(null);
  }
}

// Route with custom data
{ path: 'feature', data: { preload: true }, loadChildren: ... }
```

---

**✅ Progress: 41/64 topics complete (64%)**

Continuing with Section 7: Forms...

## SECTION 7: FORMS

## 42. Template-Driven Forms

### 🎯 Simple Definition
**Template-Driven Forms** use directives in the template (like `ngModel`) to create and manage forms. Simple, declarative approach similar to AngularJS.

### 📝 Setup & Usage

**1. Import FormsModule:**
```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  standalone: true
})
export class MyComponent { }
```

**2. Basic Form:**
```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <input name="username" ngModel required>
  <input name="email" type="email" ngModel required>
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

```typescript
export class FormComponent {
  onSubmit(form: NgForm) {
    console.log('Form values:', form.value);
    // { username: '...', email: '...' }
  }
}
```

### 📝 Real-World Example

```html
<form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
  <div class="form-group">
    <label>Email</label>
    <input 
      type="email" 
      name="email" 
      [(ngModel)]="credentials.email"
      required
      email
      #emailField="ngModel">
    
    @if (emailField.invalid && emailField.touched) {
      <span class="error">Please enter valid email</span>
    }
  </div>
  
  <div class="form-group">
    <label>Password</label>
    <input 
      type="password" 
      name="password" 
      [(ngModel)]="credentials.password"
      required
      minlength="8"
      #passwordField="ngModel">
    
    @if (passwordField.invalid && passwordField.touched) {
      <span class="error">Password must be 8+ characters</span>
    }
  </div>
  
  <button type="submit" [disabled]="loginForm.invalid">Login</button>
</form>
```

```typescript
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };
  
  login(form: NgForm) {
    if (form.valid) {
      console.log('Login:', this.credentials);
    }
  }
}
```

### 🎤 Important Interview Q&A

**Q: Template-Driven vs Reactive Forms?**
```
A:
Template-Driven:
- Logic in template
- ngModel, directives
- Simple forms
- Less code
- Asynchronous

Reactive:
- Logic in component
- FormControl, FormGroup
- Complex forms
- More control
- Synchronous
- Better testing

Use template-driven for simple forms, reactive for complex.
```

---

## 43. Reactive Forms

### 🎯 Simple Definition
**Reactive Forms** use explicit FormControl/FormGroup objects in the component class for form management. More powerful, testable, and scalable.

### 📝 Setup & Usage

**1. Import ReactiveFormsModule:**
```typescript
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  standalone: true
})
export class MyComponent { }
```

**2. Create Form:**
```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class UserFormComponent {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(0, [Validators.min(18), Validators.max(100)])
  });
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
```

**3. Bind in Template:**
```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input formControlName="username">
  @if (userForm.get('username')?.invalid && userForm.get('username')?.touched) {
    <span class="error">Username is required (min 3 chars)</span>
  }
  
  <input formControlName="email" type="email">
  @if (userForm.get('email')?.invalid && userForm.get('email')?.touched) {
    <span class="error">Valid email required</span>
  }
  
  <input formControlName="age" type="number">
  
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

### 📝 Real-World Example: Registration Form

```typescript
export class RegistrationComponent {
  registrationForm = new FormGroup({
    personal: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    ]),
    confirmPassword: new FormControl('', Validators.required),
    agreeToTerms: new FormControl(false, Validators.requiredTrue)
  });
  
  get firstName() {
    return this.registrationForm.get('personal.firstName');
  }
  
  get password() {
    return this.registrationForm.get('password');
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration:', this.registrationForm.value);
    }
  }
}
```

```html
<form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
  <div formGroupName="personal">
    <input formControlName="firstName" placeholder="First Name">
    @if (firstName?.invalid && firstName?.touched) {
      <span class="error">Required</span>
    }
    
    <input formControlName="lastName" placeholder="Last Name">
    <input formControlName="email" type="email" placeholder="Email">
  </div>
  
  <input formControlName="password" type="password" placeholder="Password">
  @if (password?.invalid && password?.touched) {
    <span class="error">
      Password must be 8+ chars with uppercase, lowercase, and number
    </span>
  }
  
  <input formControlName="confirmPassword" type="password">
  
  <label>
    <input formControlName="agreeToTerms" type="checkbox">
    I agree to terms
  </label>
  
  <button [disabled]="registrationForm.invalid">Register</button>
</form>
```

---

## 44. Form Validation

### 🎯 Simple Definition
**Form validation** ensures user input meets requirements using built-in validators or custom validators.

### 📝 Built-in Validators

```typescript
import { Validators } from '@angular/forms';

new FormControl('', [
  Validators.required,           // Required field
  Validators.minLength(5),       // Min length
  Validators.maxLength(20),      // Max length
  Validators.min(18),            // Min value
  Validators.max(100),           // Max value
  Validators.email,              // Email format
  Validators.pattern(/regex/)    // Custom regex
]);
```

### 📝 Validation States

```typescript
const control = this.form.get('email');

// States
control?.valid        // true if valid
control?.invalid      // true if invalid
control?.pristine     // true if not modified
control?.dirty        // true if modified
control?.touched      // true if blurred
control?.untouched    // true if not blurred

// Errors
control?.errors       // Object with errors
control?.errors?.['required']
control?.errors?.['minlength']
```

### 📝 Display Errors

```html
<input formControlName="email">

@if (email.invalid && email.touched) {
  <div class="errors">
    @if (email.errors?.['required']) {
      <span>Email is required</span>
    }
    @if (email.errors?.['email']) {
      <span>Invalid email format</span>
    }
  </div>
}
```

---

## 45. Custom Validators

### 🎯 Simple Definition
**Custom validators** are functions that implement validation logic not covered by built-in validators.

### 📝 Validator Function

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Simple validator
export function forbiddenNameValidator(forbidden: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = control.value?.toLowerCase() === forbidden.toLowerCase();
    return isForbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// Usage
new FormControl('', [forbiddenNameValidator('admin')])
```

### 📝 Real-World Examples

**1. Password Match Validator:**
```typescript
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (!password || !confirmPassword) {
      return null;
    }
    
    return password.value === confirmPassword.value 
      ? null 
      : { passwordMismatch: true };
  };
}

// Usage
registrationForm = new FormGroup({
  password: new FormControl(''),
  confirmPassword: new FormControl('')
}, { validators: passwordMatchValidator() });
```

**2. Age Validator:**
```typescript
export function ageValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value;
    
    if (age === null || age === undefined) {
      return null;
    }
    
    if (age < min) {
      return { tooYoung: { min, actual: age } };
    }
    
    if (age > max) {
      return { tooOld: { max, actual: age } };
    }
    
    return null;
  };
}

// Usage
age: new FormControl(0, [ageValidator(18, 100)])
```

**3. Async Validator (Username availability):**
```typescript
export class UsernameValidator {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      
      return userService.checkUsername(control.value).pipe(
        map(isAvailable => isAvailable ? null : { usernameTaken: true }),
        catchError(() => of(null))
      );
    };
  }
}

// Usage
username: new FormControl('', {
  validators: [Validators.required],
  asyncValidators: [UsernameValidator.createValidator(this.userService)]
})
```

---

## 46. Dynamic Forms

### 🎯 Simple Definition
**Dynamic forms** are forms created programmatically at runtime based on configuration or data, using FormArray.

### 📝 FormArray Example

```typescript
import { FormArray, FormBuilder } from '@angular/forms';

export class DynamicFormComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      phones: this.fb.array([])  // Dynamic array
    });
  }
  
  get phones() {
    return this.form.get('phones') as FormArray;
  }
  
  addPhone() {
    this.phones.push(this.fb.control(''));
  }
  
  removePhone(index: number) {
    this.phones.removeAt(index);
  }
}
```

```html
<form [formGroup]="form">
  <input formControlName="name">
  
  <div formArrayName="phones">
    @for (phone of phones.controls; track $index; let i = $index) {
      <div>
        <input [formControlName]="i">
        <button type="button" (click)="removePhone(i)">Remove</button>
      </div>
    }
  </div>
  
  <button type="button" (click)="addPhone()">Add Phone</button>
</form>
```

---

## SECTION 8: HTTP & OBSERVABLES

## 47. HttpClient Basics

### 🎯 Simple Definition
**HttpClient** is Angular's service for making HTTP requests to APIs. Returns Observables for reactive data handling.

### 📝 Setup

```typescript
import { provideHttpClient } from '@angular/common/http';

// app.config.ts
export const appConfig = {
  providers: [
    provideHttpClient()
  ]
};
```

### 📝 Basic Usage

```typescript
import { HttpClient } from '@angular/common/http';

export class DataService {
  constructor(private http: HttpClient) {}
  
  getData() {
    return this.http.get('https://api.example.com/data');
  }
}

// Component
export class MyComponent {
  data: any;
  
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(result => {
      this.data = result;
    });
  }
}
```

---

## 48. HTTP Methods

### 🎯 Simple Definition
Common **HTTP methods** for CRUD operations: GET (read), POST (create), PUT (update), DELETE (delete).

### 📝 All Methods

```typescript
export class ApiService {
  private apiUrl = 'https://api.example.com';
  
  constructor(private http: HttpClient) {}
  
  // GET - Read
  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  
  getUser(id: number) {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
  
  // POST - Create
  createUser(user: User) {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }
  
  // PUT - Update (full)
  updateUser(id: number, user: User) {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
  }
  
  // PATCH - Update (partial)
  patchUser(id: number, changes: Partial<User>) {
    return this.http.patch<User>(`${this.apiUrl}/users/${id}`, changes);
  }
  
  // DELETE - Delete
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
```

### 📝 With Headers & Options

```typescript
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123'
});

this.http.get(url, { headers });

this.http.post(url, body, { 
  headers,
  params: new HttpParams().set('page', '1')
});
```

---

## 49. RxJS Observables

### 🎯 Simple Definition
**Observables** are streams of data that emit values over time. Core to Angular's reactive programming with RxJS.

### 📝 Basic Concepts

```typescript
import { Observable } from 'rxjs';

// Create observable
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

// Subscribe
observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete')
});
```

### 📝 HTTP Returns Observable

```typescript
this.http.get<User[]>('/api/users').subscribe({
  next: (users) => console.log('Users:', users),
  error: (error) => console.error('Error:', error),
  complete: () => console.log('Request complete')
});
```

---

## 50. Common RxJS Operators

### 🎯 Simple Definition
**RxJS operators** transform, filter, and combine observable streams using the `pipe()` method.

### 📝 Most Used Operators

```typescript
import { map, filter, tap, catchError, switchMap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';

// map - Transform data
this.http.get<User[]>('/api/users').pipe(
  map(users => users.map(u => u.name))
).subscribe(names => console.log(names));

// filter - Filter emissions
this.http.get<User[]>('/api/users').pipe(
  map(users => users.filter(u => u.age > 18))
).subscribe(adults => console.log(adults));

// tap - Side effects (debugging)
this.http.get<User[]>('/api/users').pipe(
  tap(users => console.log('Received:', users)),
  map(users => users.length)
).subscribe(count => console.log('Count:', count));

// catchError - Error handling
this.http.get<User[]>('/api/users').pipe(
  catchError(error => {
    console.error('Error:', error);
    return of([]);  // Return empty array on error
  })
).subscribe(users => console.log(users));

// switchMap - Chain HTTP requests
this.http.get<User>('/api/user/1').pipe(
  switchMap(user => this.http.get(`/api/posts/${user.id}`))
).subscribe(posts => console.log(posts));

// debounceTime - Delay emissions (search)
searchTerms$.pipe(
  debounceTime(300),
  switchMap(term => this.http.get(`/api/search?q=${term}`))
).subscribe(results => console.log(results));
```

---

## 51. Subject, BehaviorSubject, ReplaySubject

### 🎯 Simple Definition
**Subjects** are special observables that can multicast to multiple observers and allow manual value emission.

### 📝 Types

**1. Subject:**
```typescript
const subject = new Subject<number>();

// Subscribe
subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

// Emit
subject.next(1);  // Both subscribers get 1
subject.next(2);  // Both subscribers get 2
```

**2. BehaviorSubject (has initial value):**
```typescript
const behaviorSubject = new BehaviorSubject<number>(0);  // Initial value

behaviorSubject.subscribe(val => console.log('A:', val));  // Gets 0 immediately
behaviorSubject.next(1);  // A gets 1

behaviorSubject.subscribe(val => console.log('B:', val));  // Gets latest (1)
behaviorSubject.next(2);  // Both get 2
```

**3. ReplaySubject (replay last N values):**
```typescript
const replaySubject = new ReplaySubject<number>(2);  // Replay last 2

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe(val => console.log(val));  // Gets 2, 3
```

### 📝 Real-World Use

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  
  setUser(user: User) {
    this.userSubject.next(user);
  }
  
  clearUser() {
    this.userSubject.next(null);
  }
  
  getCurrentUser() {
    return this.userSubject.getValue();
  }
}
```

---

## 52. Error Handling

### 🎯 Simple Definition
**Error handling** manages HTTP errors and provides user feedback using `catchError`, `retry`, and error interceptors.

### 📝 Methods

**1. catchError:**
```typescript
this.http.get('/api/data').pipe(
  catchError(error => {
    console.error('Error:', error);
    return of({ error: true, data: [] });
  })
).subscribe(result => console.log(result));
```

**2. retry:**
```typescript
this.http.get('/api/data').pipe(
  retry(3),  // Retry 3 times before failing
  catchError(error => {
    console.error('Failed after 3 retries:', error);
    return throwError(() => error);
  })
).subscribe();
```

**3. Error Interceptor:**
```typescript
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
```

---

**✅ Progress: 52/64 topics complete (81%)**

Continuing with final sections...

## SECTION 9: PIPES

## 53. Built-in Pipes

### 🎯 Simple Definition
**Pipes** transform displayed values in templates without changing the underlying data. Angular provides several built-in pipes.

### 📝 Common Built-in Pipes

```html
<!-- DatePipe -->
{{ today | date }}                        <!-- Dec 20, 2025 -->
{{ today | date:'short' }}               <!-- 12/20/25, 3:45 PM -->
{{ today | date:'dd/MM/yyyy' }}          <!-- 20/12/2025 -->
{{ today | date:'fullDate' }}            <!-- Friday, December 20, 2025 -->

<!-- CurrencyPipe -->
{{ price | currency }}                    <!-- $1,234.56 -->
{{ price | currency:'INR' }}             <!-- ₹1,234.56 -->
{{ price | currency:'EUR':'symbol':'1.0-0' }}  <!-- €1,235 -->

<!-- DecimalPipe -->
{{ 3.14159 | number }}                   <!-- 3.142 -->
{{ 3.14159 | number:'1.0-5' }}          <!-- 3.14159 -->
{{ 1234.5 | number:'3.1-1' }}           <!-- 1,234.5 -->

<!-- PercentPipe -->
{{ 0.25 | percent }}                     <!-- 25% -->
{{ 0.5678 | percent:'1.2-2' }}          <!-- 56.78% -->

<!-- UpperCasePipe / LowerCasePipe -->
{{ 'hello' | uppercase }}                <!-- HELLO -->
{{ 'WORLD' | lowercase }}                <!-- world -->

<!-- TitleCasePipe -->
{{ 'hello world' | titlecase }}          <!-- Hello World -->

<!-- SlicePipe -->
{{ [1,2,3,4,5] | slice:1:3 }}           <!-- [2,3] -->
{{ 'Hello World' | slice:0:5 }}         <!-- Hello -->

<!-- JsonPipe (debugging) -->
{{ user | json }}                        <!-- { "name": "John", "age": 25 } -->

<!-- AsyncPipe (unwraps observables) -->
{{ users$ | async }}                     <!-- Automatically subscribes -->

<!-- KeyValuePipe (for objects) -->
@for (item of object | keyvalue; track item.key) {
  {{ item.key }}: {{ item.value }}
}
```

### 📝 Real-World Examples

```html
<!-- Product display -->
<div class="product">
  <h3>{{ product.name | titlecase }}</h3>
  <p class="price">{{ product.price | currency:'INR':'symbol':'1.0-0' }}</p>
  <p class="discount">Save {{ product.discount | percent }}!</p>
  <p class="date">Available from: {{ product.availableDate | date:'mediumDate' }}</p>
</div>

<!-- User list with async -->
<ul>
  @for (user of users$ | async; track user.id) {
    <li>{{ user.name | titlecase }} - {{ user.email | lowercase }}</li>
  }
</ul>

<!-- Debug object -->
<pre>{{ debugData | json }}</pre>
```

### 🎤 Important Interview Q&A

**Q: What are pipes in Angular?**
```
A: Pipes transform displayed values in templates.

Syntax: {{ value | pipeName:param1:param2 }}

Built-in:
- date, currency, percent, number
- uppercase, lowercase, titlecase
- slice, json, async, keyvalue

Benefits: Reusable, declarative, clean templates
```

---

## 54. Custom Pipes

### 🎯 Simple Definition
**Custom pipes** are user-defined transformation functions created with `@Pipe` decorator.

### 📝 Creating Custom Pipe

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

// Usage
{{ 2 | exponential:3 }}  // 8 (2^3)
```

### 📝 Real-World Examples

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

// Usage
{{ post.createdAt | timeAgo }}  // "2 hours ago"
```

**2. Filter Pipe:**
```typescript
@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], searchText: string, key?: keyof T): T[] {
    if (!items || !searchText) {
      return items;
    }
    
    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      if (key) {
        return String(item[key]).toLowerCase().includes(searchText);
      }
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}

// Usage
@for (user of users | filter:searchTerm:'name'; track user.id) {
  {{ user.name }}
}
```

**3. Truncate Pipe:**
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

// Usage
{{ longText | truncate:100 }}
{{ description | truncate:50:'... Read more' }}
```

---

## 55. Pure vs Impure Pipes

### 🎯 Simple Definition
**Pure pipes** (default) only run when input reference changes. **Impure pipes** run on every change detection cycle.

### 📝 Pure Pipe (Default)

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

// Only runs when array reference changes
items = [{ active: true }];
this.items.push({ active: false });  // Pipe NOT triggered
this.items = [...this.items, { active: false }];  // Pipe triggered (new reference)
```

### 📝 Impure Pipe

```typescript
@Pipe({
  name: 'impurePipe',
  pure: false,  // Impure
  standalone: true
})
export class ImpurePipe implements PipeTransform {
  transform(value: any[]): any[] {
    console.log('Impure pipe executed');  // Runs frequently!
    return value.filter(item => item.active);
  }
}

// Runs on EVERY change detection
```

### 🎤 Important Interview Q&A

**Q: Pure vs Impure pipes?**
```
A:
Pure (default):
- Runs only when input reference changes
- Better performance
- Use for most cases
- pure: true

Impure:
- Runs on every change detection
- Slower performance
- Use for frequently changing data (async)
- pure: false

Example impure: AsyncPipe (monitors observable changes)
```

---

## SECTION 10: ADVANCED CONCEPTS

## 56. Change Detection

### 🎯 Simple Definition
**Change detection** is Angular's mechanism to detect changes in component data and update the DOM accordingly.

### 📝 Change Detection Strategies

**1. Default Strategy:**
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.Default
})
// Checks entire component tree on every event
```

**2. OnPush Strategy (Performance):**
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
  @Input() data: Data = {};
  
  // Only checks when:
  // 1. @Input() reference changes
  // 2. Event emitted from component
  // 3. Observable emits (async pipe)
  // 4. Manual markForCheck()
}
```

### 📝 Manual Change Detection

```typescript
import { ChangeDetectorRef } from '@angular/core';

export class MyComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  
  updateData() {
    this.data = newData;
    this.cdr.markForCheck();  // Mark for check
  }
  
  forceUpdate() {
    this.cdr.detectChanges();  // Run change detection now
  }
}
```

### 🎤 Important Interview Q&A

**Q: OnPush vs Default change detection?**
```
A:
Default:
- Checks on every change
- Slower for large apps
- Easier to use

OnPush:
- Only checks on @Input changes, events, observables
- Much faster
- Requires immutable patterns
- Best for performance

Use OnPush for: Large lists, performance-critical components
```

---

## 57. Signals (Angular 16+)

### 🎯 Simple Definition
**Signals** are a new reactive primitive in Angular for managing state with automatic change detection.

### 📝 Basic Usage

```typescript
import { signal, computed, effect } from '@angular/core';

export class CounterComponent {
  // Create signal
  count = signal(0);
  
  // Computed (derived state)
  doubleCount = computed(() => this.count() * 2);
  
  // Effect (side effects)
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  // Update signal
  increment() {
    this.count.update(value => value + 1);
  }
  
  setCount(value: number) {
    this.count.set(value);
  }
}
```

```html
<!-- Read signal with () -->
<p>Count: {{ count() }}</p>
<p>Double: {{ doubleCount() }}</p>
<button (click)="increment()">Increment</button>
```

### 📝 Real-World Example

```typescript
export class UserProfileComponent {
  // Signals
  user = signal<User | null>(null);
  loading = signal(false);
  
  // Computed
  displayName = computed(() => {
    const u = this.user();
    return u ? `${u.firstName} ${u.lastName}` : 'Guest';
  });
  
  isLoggedIn = computed(() => this.user() !== null);
  
  constructor(private userService: UserService) {
    effect(() => {
      if (this.isLoggedIn()) {
        console.log('User logged in:', this.displayName());
      }
    });
  }
  
  loadUser(id: number) {
    this.loading.set(true);
    this.userService.getUser(id).subscribe(user => {
      this.user.set(user);
      this.loading.set(false);
    });
  }
}
```

### 🎤 Important Interview Q&A

**Q: Signals vs Observables?**
```
A:
Signals (Angular 16+):
- Simpler syntax
- Automatic change detection
- Synchronous
- Better performance
- Local state

Observables (RxJS):
- Async operations
- Rich operators
- HTTP, events
- Complex streams
- More powerful

Use signals for: Component state
Use observables for: HTTP, events, complex async
```

---

## 58. Standalone Components

### 🎯 Simple Definition
**Standalone components** don't require NgModules. They import dependencies directly, simplifying Angular architecture.

### 📝 Creating Standalone Component

```typescript
@Component({
  selector: 'app-user',
  standalone: true,  // Standalone
  imports: [CommonModule, FormsModule, UserCardComponent],
  template: `<div>User Component</div>`
})
export class UserComponent { }
```

### 📝 Standalone App Setup

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
```

### 🎤 Important Interview Q&A

**Q: Benefits of standalone components?**
```
A:
Benefits:
1. No NgModule needed
2. Simpler architecture
3. Better tree-shaking
4. Easier to understand
5. Lazy loading simplified
6. Future of Angular

Migration: Can coexist with modules
```

---

## 59. Content Projection (ng-content)

### 🎯 Simple Definition
**Content projection** allows components to accept and display content from parent components using `<ng-content>`.

### 📝 Basic Projection

```typescript
// card.component.ts
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent { }

// Usage
<app-card>
  <h2>Title</h2>
  <p>Card content here</p>
</app-card>
```

### 📝 Multi-slot Projection

```typescript
@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog">
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
  `
})
export class DialogComponent { }

// Usage
<app-dialog>
  <h2 header>Dialog Title</h2>
  <p body>Dialog content...</p>
  <button footer>Close</button>
</app-dialog>
```

---

## 60. Dynamic Components

### 🎯 Simple Definition
**Dynamic components** are created and inserted into the DOM programmatically at runtime.

### 📝 Creating Dynamic Component

```typescript
import { ViewContainerRef, ComponentRef } from '@angular/core';

export class DynamicHostComponent {
  @ViewChild('container', { read: ViewContainerRef }) 
  container!: ViewContainerRef;
  
  loadComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent(DynamicComponent);
    
    // Set inputs
    componentRef.instance.data = { name: 'John' };
    
    // Subscribe to outputs
    componentRef.instance.close.subscribe(() => {
      componentRef.destroy();
    });
  }
}
```

```html
<button (click)="loadComponent()">Load Component</button>
<ng-container #container></ng-container>
```

---

## SECTION 11: BEST PRACTICES & OPTIMIZATION

## 61. Performance Optimization

### 🎯 Simple Definition
Techniques to improve Angular app **performance, load time, and runtime efficiency**.

### 📝 Key Optimizations

**1. Lazy Loading:**
```typescript
// Load modules on demand
{ path: 'admin', loadChildren: () => import('./admin/admin.routes') }
```

**2. OnPush Change Detection:**
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

**3. TrackBy for *ngFor:**
```typescript
trackById(index: number, item: any) {
  return item.id;
}
```

```html
<div *ngFor="let item of items; trackBy: trackById">
```

**4. Async Pipe:**
```html
<!-- Auto-subscribes and unsubscribes -->
{{ data$ | async }}
```

**5. Pure Pipes:**
```typescript
// Default, better performance
@Pipe({ pure: true })
```

**6. Preload Strategy:**
```typescript
provideRouter(routes, withPreloading(PreloadAllModules))
```

**7. Virtual Scrolling (Large Lists):**
```typescript
import { ScrollingModule } from '@angular/cdk/scrolling';

<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

---

## 62. Security Best Practices

### 🎯 Simple Definition
Security practices to protect Angular apps from common vulnerabilities.

### 📝 Key Practices

**1. XSS Protection (Angular auto-sanitizes):**
```typescript
// Angular sanitizes by default
{{ userInput }}  // Safe - sanitized

// Bypass (dangerous!)
[innerHTML]="sanitizer.bypassSecurityTrustHtml(html)"  // Only if trusted!
```

**2. HTTP Security:**
```typescript
// Use HttpClient (built-in XSRF protection)
// Set proper headers
const headers = new HttpHeaders({
  'X-Requested-With': 'XMLHttpRequest'
});
```

**3. Authentication:**
```typescript
// Store tokens securely
localStorage.setItem('token', token);  // Vulnerable to XSS
// Better: httpOnly cookies (backend)
```

**4. Route Guards:**
```typescript
// Protect routes
{ path: 'admin', canActivate: [AuthGuard] }
```

**5. Environment Variables:**
```typescript
// Don't commit secrets
// Use environment files
export const environment = {
  apiKey: 'USE_ENV_VARIABLE'
};
```

---

## 63. Testing Basics

### 🎯 Simple Definition
Testing ensures code quality through **unit tests** (individual components) and **integration tests**.

### 📝 Basic Unit Test

```typescript
import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserComponent]
    });
  });
  
  it('should create', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  
  it('should display user name', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    component.user = { name: 'John', email: 'john@example.com' };
    
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('John');
  });
});
```

### 📝 Service Test

```typescript
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
  
  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
  
  afterEach(() => {
    httpMock.verify();
  });
});
```

---

## 64. Common Mistakes & Solutions

### 🎯 Simple Definition
Frequent mistakes Angular developers make and how to avoid them.

### 📝 Top Mistakes

**1. Memory Leaks (Subscriptions):**
```typescript
// ❌ BAD
this.service.data$.subscribe(data => this.data = data);

// ✅ GOOD - Use async pipe
data$ = this.service.data$;
// Template: {{ data$ | async }}

// ✅ GOOD - Unsubscribe
private destroy$ = new Subject();

ngOnInit() {
  this.service.data$
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy() {
  this.destroy$.next(true);
  this.destroy$.complete();
}
```

**2. Mutating @Input():**
```typescript
// ❌ BAD
@Input() user: User;
modifyUser() {
  this.user.name = 'New Name';  // Mutates parent's object!
}

// ✅ GOOD
@Output() userChange = new EventEmitter<User>();
modifyUser() {
  this.userChange.emit({ ...this.user, name: 'New Name' });
}
```

**3. Not Using TrackBy:**
```html
<!-- ❌ BAD: Re-renders all items -->
<div *ngFor="let item of items">{{ item.name }}</div>

<!-- ✅ GOOD: Only re-renders changed items -->
<div *ngFor="let item of items; trackBy: trackById">{{ item.name }}</div>
```

**4. Subscribing in Loops:**
```typescript
// ❌ BAD
users.forEach(user => {
  this.service.getDetails(user.id).subscribe(...);  // N subscriptions!
});

// ✅ GOOD
forkJoin(users.map(user => this.service.getDetails(user.id)))
  .subscribe(results => ...);
```

**5. Large Bundle Size:**
```typescript
// ❌ BAD
import * as _ from 'lodash';  // Imports entire library

// ✅ GOOD
import { debounce } from 'lodash-es';  // Import specific function
```

**6. Not Using Change Detection Wisely:**
```typescript
// ❌ BAD: Default for all components

// ✅ GOOD: OnPush for better performance
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

**7. Calling Functions in Templates:**
```html
<!-- ❌ BAD: Called on every change detection -->
<div>{{ getFullName() }}</div>

<!-- ✅ GOOD: Use getter or property -->
<div>{{ fullName }}</div>
```

---

**🎉 COMPLETE! ALL 64 TOPICS FINISHED! 🎉**

**✅ Progress: 64/64 topics (100%)**

---

## 📋 BONUS: CRITICAL INTERVIEW TOPICS

### 65. Angular Modules (NgModule) vs Standalone

**Traditional NgModule Approach:**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserComponent],  // Components/Directives/Pipes
  imports: [BrowserModule, FormsModule],        // Other modules
  providers: [UserService],                     // Services (app-wide)
  bootstrap: [AppComponent]                     // Root component
})
export class AppModule { }

// Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
```

**Modern Standalone Approach (Angular 14+):**
```typescript
// No NgModule needed!
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, UserComponent],
  template: `...`
})
export class AppComponent { }

// Bootstrap directly
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
```

**Interview Q: NgModule vs Standalone?**
```
NgModule (Legacy):
- Requires module files
- Centralized imports
- More boilerplate
- Harder to tree-shake

Standalone (Modern):
- No NgModule needed
- Component-level imports
- Less code
- Better tree-shaking
- Future of Angular

Migration: Can mix both approaches during transition
```

---

### 66. HTTP Interceptors

**Creating an Interceptor:**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';

// Functional Interceptor (Angular 15+)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  
  return next(req);
};

// Register in app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor])
    )
  ]
};
```

**Class-based Interceptor (Legacy):**
```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    
    return next.handle(cloned);
  }
}

// Register in module
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
```

**Common Use Cases:**
1. Adding authentication tokens
2. Logging requests/responses
3. Error handling globally
4. Loading spinner triggers
5. Caching
6. Request/Response transformation

---

### 67. ViewEncapsulation

**Controls how component styles are scoped:**

```typescript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<h1 class="title">Hello</h1>`,
  styles: [`.title { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated  // Default
})
export class DemoComponent { }
```

**Three Modes:**

```typescript
// 1. Emulated (Default) - Scoped to component
encapsulation: ViewEncapsulation.Emulated
// Result: .title[_ngcontent-c0] { color: red; }
// Styles don't leak to other components

// 2. None - Global styles
encapsulation: ViewEncapsulation.None
// Result: .title { color: red; }
// Affects entire app!

// 3. ShadowDom - Native Shadow DOM
encapsulation: ViewEncapsulation.ShadowDom
// Uses browser's Shadow DOM
// True isolation
```

**Interview Q: When to use ViewEncapsulation.None?**
```
Use Cases:
- Third-party component styling
- Global modal/dialog styles
- Overriding deep child component styles

Warning: Can cause style conflicts!
Prefer: CSS custom properties (variables) for theming
```

---

### 68. @HostListener & @HostBinding

**@HostListener - Listen to host element events:**

```typescript
import { HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor = 'transparent';
  @HostBinding('class.active') isActive = false;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'yellow';
    this.isActive = true;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'transparent';
    this.isActive = false;
  }
  
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Clicked at:', event.clientX, event.clientY);
  }
  
  // Listen to window/document events
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('Window scrolled');
  }
  
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    console.log('Escape pressed');
  }
}

// Usage
<div appHighlight>Hover me!</div>
```

**Real-World: Click Outside Directive:**
```typescript
@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
  
  constructor(private el: ElementRef) {}
}

// Usage (close dropdown when clicking outside)
<div class="dropdown" (clickOutside)="closeDropdown()">
  ...
</div>
```

---

### 69. ElementRef & Renderer2

**Direct DOM Manipulation (Avoid!):**
```typescript
// ❌ BAD - Direct DOM access
@ViewChild('myDiv') div!: ElementRef;

ngAfterViewInit() {
  this.div.nativeElement.style.color = 'red';  // Not SSR-safe!
  this.div.nativeElement.innerHTML = '<b>Test</b>';  // XSS risk!
}
```

**Safe Approach with Renderer2:**
```typescript
// ✅ GOOD - Using Renderer2
import { Renderer2, ElementRef } from '@angular/core';

export class SafeComponent {
  @ViewChild('myDiv') div!: ElementRef;
  
  constructor(private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    // Set styles
    this.renderer.setStyle(this.div.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.div.nativeElement, 'font-size', '20px');
    
    // Add/remove classes
    this.renderer.addClass(this.div.nativeElement, 'active');
    this.renderer.removeClass(this.div.nativeElement, 'inactive');
    
    // Set attributes
    this.renderer.setAttribute(this.div.nativeElement, 'data-id', '123');
    
    // Create and append elements
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('New paragraph');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.div.nativeElement, p);
    
    // Listen to events
    const unlisten = this.renderer.listen(
      this.div.nativeElement, 
      'click', 
      (event) => console.log('Clicked!', event)
    );
    
    // Clean up listener
    // unlisten();
  }
}
```

**Why Renderer2?**
```
✅ Server-Side Rendering (SSR) safe
✅ Web Workers compatible
✅ Better security (no direct DOM)
✅ Abstraction over platform
✅ Easier to test

❌ ElementRef.nativeElement:
- Only works in browser
- Breaks SSR
- Security risks
- Platform-specific
```

---

### 70. APP_INITIALIZER

**Run code before app starts:**

```typescript
import { APP_INITIALIZER } from '@angular/core';

// Service with initialization logic
@Injectable({ providedIn: 'root' })
export class ConfigService {
  config: any;
  
  loadConfig(): Observable<any> {
    return this.http.get('/api/config').pipe(
      tap(config => this.config = config)
    );
  }
}

// Factory function
export function initializeApp(configService: ConfigService) {
  return (): Observable<any> => {
    return configService.loadConfig();
  };
}

// Register in app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true  // Important!
    },
    provideHttpClient()
  ]
};
```

**Common Use Cases:**
```
1. Load configuration from server
2. Check authentication status
3. Initialize analytics
4. Load user preferences
5. Set up feature flags
6. Pre-fetch critical data

Note: App won't start until initialization completes!
```

---

### 71. toSignal() - Observable to Signal

**From Angnotes.txt - Converting Observable to Signal:**

```typescript
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

export class AppComponent {
  // RxJS Observable
  obs$ = interval(500).pipe(
    map(data => (data * 10).toString()),
    take(10)
  );
  
  // Convert to Signal
  signalData = toSignal(this.obs$, { 
    initialValue: 'Loading...' 
  });
  
  // React to signal changes
  effectData = effect(() => {
    console.log('Signal value:', this.signalData());
  });
}
```

```html
<!-- Use signal in template -->
<h1>Current Value: {{ signalData() }}</h1>
```

**Benefits:**
```
✅ Bridges RxJS and Signals
✅ Automatic subscription/unsubscription
✅ Simpler than async pipe for some cases
✅ Works with reactive primitives (computed, effect)
✅ Better performance with OnPush

Use Cases:
- Converting existing RxJS code to signals
- HTTP responses to signals
- Route params/query params to signals
- Store state to signals
```

---

### 72. linkedSignal() - Signal Chaining

**From Angnotes.txt:**

```typescript
export class AppComponent {
  count1 = signal(10);
  
  // linkedSignal - derives from another signal but can be set independently
  linkedSignal = linkedSignal(() => this.count1() * 2);
  
  constructor() {
    console.log(this.linkedSignal());  // 20
    
    // Unlike computed(), you CAN modify linkedSignal
    this.linkedSignal.set(50);  // ✅ Allowed!
    console.log(this.linkedSignal());  // 50
    
    // Update based on current value
    this.linkedSignal.update(val => val + 10);  // 60
  }
}
```

**linkedSignal vs computed:**
```
computed():
- Read-only
- Always derived from other signals
- Cannot use .set() or .update()
- Pure computation

linkedSignal():
- Can be modified with .set() / .update()
- Initially derived from source
- Can break link and set independently
- Mutable derived state

Use linkedSignal when:
- Need derived value that can be overridden
- Form defaults that can change
- Cached computed values you want to reset
```

---

### 73. untracked() - Prevent Dependency Tracking

**From Angnotes.txt:**

```typescript
export class AppComponent {
  count1 = signal(0);
  count2 = signal(0);
  
  incCount1() {
    this.count1.update(val => val + 1);
  }
  
  incCount2() {
    this.count2.update(val => val + 1);
  }
  
  // Effect only tracks count1, not count2
  counterEffect = effect(() => {
    console.log('Count1:', this.count1());  // Tracked
    
    // untracked() reads signal without tracking
    console.log('Count2:', untracked(() => this.count2()));  // NOT tracked
  });
}
```

**Result:**
```
- Changing count1 → Effect runs ✅
- Changing count2 → Effect does NOT run ❌

Use Cases:
- Reading signals for logging without re-running
- Conditional signal access
- Performance optimization
- Preventing infinite loops
```

---

### 74. Signal effect() Cleanup

**From Angnotes.txt:**

```typescript
export class TimerComponent {
  count = signal(0);
  
  constructor() {
    effect((onCleanup) => {
      const timer = setInterval(() => {
        console.log('Timer tick:', this.count());
      }, 1000);
      
      // Cleanup function
      onCleanup(() => {
        clearInterval(timer);
        console.log('Timer cleaned up');
      });
    });
  }
}
```

**When cleanup runs:**
```
1. Before effect re-runs (signal changed)
2. When component is destroyed
3. When effect is explicitly destroyed

Use Cases:
- Clear timers/intervals
- Unsubscribe from observables
- Remove event listeners
- Cancel pending HTTP requests
- Clean up WebSocket connections
```

---

## 📊 FINAL CHECKLIST - ALL TOPICS COVERED

### ✅ Core Fundamentals
- [x] Interpolation, Property Binding, Event Binding
- [x] Two-Way Binding (ngModel)
- [x] Directives (*ngIf, *ngFor, *ngSwitch, ngClass, ngStyle)
- [x] New Syntax (@if, @for, @switch - Angular 17+)
- [x] ng-container, ng-template

### ✅ Components & Communication
- [x] Lifecycle Hooks (all 8 hooks)
- [x] @Input(), @Output(), EventEmitter
- [x] @ViewChild, @ViewChildren
- [x] @ContentChild, @ContentChildren
- [x] Template Reference Variables

### ✅ Services & DI
- [x] Dependency Injection
- [x] Injectable & Provider Scopes
- [x] Service Communication Patterns

### ✅ Routing
- [x] Router Basics, Route Parameters, Query Params
- [x] Child Routes, Route Guards
- [x] Lazy Loading, Preloading Strategies

### ✅ Forms
- [x] Template-Driven Forms
- [x] Reactive Forms
- [x] Validation (built-in & custom)
- [x] Dynamic Forms (FormArray)

### ✅ HTTP & RxJS
- [x] HttpClient (GET, POST, PUT, DELETE)
- [x] Observables
- [x] RxJS Operators (map, filter, switchMap, debounceTime, etc.)
- [x] Subjects (Subject, BehaviorSubject, ReplaySubject)
- [x] Error Handling (catchError, retry)

### ✅ Pipes
- [x] Built-in Pipes
- [x] Custom Pipes
- [x] Pure vs Impure Pipes

### ✅ Advanced Concepts
- [x] Change Detection Strategies
- [x] Signals (signal, computed, effect)
- [x] toSignal(), linkedSignal(), untracked()
- [x] Standalone Components
- [x] Content Projection (ng-content)
- [x] Dynamic Components

### ✅ Architecture & Best Practices
- [x] NgModule vs Standalone
- [x] Performance Optimization
- [x] Security (XSS, Sanitization)
- [x] Testing Basics
- [x] Common Mistakes

### ✅ Advanced Features
- [x] HTTP Interceptors
- [x] ViewEncapsulation
- [x] @HostListener, @HostBinding
- [x] ElementRef, Renderer2
- [x] APP_INITIALIZER

---

**📊 Final Summary:**
- ✅ Section 1: Data Binding (6 topics)
- ✅ Section 2: Directives (11 topics)
- ✅ Section 3: Lifecycle (7 topics)
- ✅ Section 4: Communication (8 topics)
- ✅ Section 5: Services & DI (4 topics)
- ✅ Section 6: Routing (7 topics)
- ✅ Section 7: Forms (5 topics)
- ✅ Section 8: HTTP & Observables (6 topics)
- ✅ Section 9: Pipes (3 topics)
- ✅ Section 10: Advanced (5 topics)
- ✅ Section 11: Best Practices (4 topics)
- ✅ BONUS: Critical Interview Topics (10 topics)

**Total: 74 comprehensive interview-ready topics! 🚀**

---

## 🎯 QUICK REVISION CHECKLIST

**Before Your Interview:**

**Day 1: Fundamentals**
- [ ] Data Binding (Interpolation, Property, Event, Two-Way)
- [ ] Directives (*ngIf, *ngFor, ngClass, ngStyle)
- [ ] New syntax (@if, @for, @switch)

**Day 2: Components**
- [ ] Lifecycle hooks (especially ngOnInit, ngOnDestroy)
- [ ] Component communication (@Input, @Output)
- [ ] @ViewChild, @ContentChild

**Day 3: Advanced**
- [ ] Services & Dependency Injection
- [ ] Routing (lazy loading, guards)
- [ ] Forms (Reactive vs Template-driven)

**Day 4: Modern Angular**
- [ ] Signals (signal, computed, effect)
- [ ] Standalone components
- [ ] Change Detection strategies

**Day 5: Real-World**
- [ ] HTTP & Observables
- [ ] RxJS operators
- [ ] Error handling
- [ ] Performance optimization

**Day 6: Interview Prep**
- [ ] Common mistakes
- [ ] Best practices
- [ ] Security
- [ ] Testing basics

---

**🏆 YOU'RE READY! This guide covers:**
✅ Everything from Angnotes.txt
✅ Latest Angular features (Signals, Standalone, @if/@for)
✅ Real-world examples
✅ Interview Q&A for every topic
✅ Common mistakes and solutions
✅ Pro tips and best practices

**Good luck with your interviews! 💪**
