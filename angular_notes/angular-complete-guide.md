# Angular Complete Guide - From Zero to Hero 🚀

> **A Comprehensive Angular Guide in Simple Language**  
> Perfect for Freshers and Interview Preparation

---

## 📚 Table of Contents

1. [Interpolation - Display Data in HTML](#1-interpolation)
2. [Property Binding - Bind Element Properties](#2-property-binding)
3. [Event Binding - Handle User Actions](#3-event-binding)
4. [Keyboard Events - Handle Keyboard Input](#4-keyboard-events)
5. [Event Object ($event) - Access Event Details](#5-event-object)
6. [Two-Way Binding [(ngModel)] - Bidirectional Data Flow](#6-two-way-binding)
7. [Directives - HTML Superpowers](#7-directives)
8. [*ngIf Directive - Conditional Rendering](#8-ngif-directive)
9. [@if Control Flow - Modern Conditional (Angular 17+)](#9-if-control-flow)
10. [*ngFor Directive - Loop Through Arrays](#10-ngfor-directive)
11. [@for Control Flow - Modern Loop (Angular 17+)](#11-for-control-flow)
12. [*ngSwitch Directive - Multiple Conditions](#12-ngswitch-directive)
13. [@switch Control Flow - Modern Switch (Angular 17+)](#13-switch-control-flow)
14. [Attribute Directives - Dynamic Styling](#14-attribute-directives)
15. [ng-container - Invisible Wrapper](#15-ng-container)
16. [ng-template - Reusable Templates](#16-ng-template)
17. [ngTemplateOutlet - Dynamic Template Rendering](#17-ngtemplateoutlet)
18. [Component Lifecycle Hooks](#18-component-lifecycle-hooks)
19. [Decorators - Component Communication](#19-decorators)
20. [Services & Dependency Injection](#20-services-dependency-injection)
21. [Template Driven Forms](#21-template-driven-forms)
22. [Reactive Forms](#22-reactive-forms)
23. [Routing & Navigation](#23-routing-navigation)
24. [Signals - Modern State Management (Angular 16+)](#24-signals)
25. [Interview Questions](#25-interview-questions)

---

## 📌 Important Files Structure

- **TypeScript (.ts)** - Where you write logic
- **HTML (.html)** - Where UI is displayed
- **CSS (.css)** - Where styling happens

---

## 1. Interpolation

### 📖 Definition

**Interpolation** is a technique in Angular to display data from your TypeScript component in the HTML template. It's the simplest way to bind component data to the view. You simply wrap the variable name in double curly braces `{{ }}` and Angular automatically displays the value.

**In Simple Words**: Imagine you have a name stored in TypeScript, and you want to show it on the screen. Interpolation is like a bridge that brings that data to your HTML!

**Real-Life Analogy**: Think of Instagram's profile page where your username is displayed. That username comes from a database (backend/TypeScript) and is shown on the screen (HTML) using interpolation.

### 📝 Syntax and Examples

#### Basic Syntax
```typescript
{{ variable_name }}
```

#### Example 1: Simple Variable Display

**TypeScript (app.component.ts)**:
```typescript
export class AppComponent {
  userName: string = 'Rahul_Sharma';
  followers: number = 1500;
  bio: string = 'Coding enthusiast | Delhi';
}
```

**HTML (app.component.html)**:
```html
<div class="profile">
  <h1>Welcome, {{userName}}! 🎉</h1>
  <p>Followers: {{followers}}</p>
  <p>Bio: {{bio}}</p>
</div>
```

**Output**:
```
Welcome, Rahul_Sharma! 🎉
Followers: 1500
Bio: Coding enthusiast | Delhi
```

#### Example 2: Expressions in Interpolation

**TypeScript**:
```typescript
export class AppComponent {
  price: number = 1000;
  quantity: number = 5;
  discount: number = 10; // percentage
}
```

**HTML**:
```html
<div class="cart">
  <p>Price per item: ₹{{price}}</p>
  <p>Quantity: {{quantity}}</p>
  <p>Subtotal: ₹{{price * quantity}}</p>
  <p>Discount: {{discount}}%</p>
  <p>Final Price: ₹{{price * quantity - (price * quantity * discount / 100)}}</p>
</div>
```

**Output**:
```
Price per item: ₹1000
Quantity: 5
Subtotal: ₹5000
Discount: 10%
Final Price: ₹4500
```

#### Example 3: String Concatenation

**TypeScript**:
```typescript
export class AppComponent {
  firstName: string = 'Rahul';
  lastName: string = 'Sharma';
  age: number = 24;
}
```

**HTML**:
```html
<div>
  <h2>{{ firstName + ' ' + lastName }}</h2>
  <p>{{ 'Age: ' + age + ' years' }}</p>
  <p>{{ firstName }} is {{ age >= 18 ? 'Adult' : 'Minor' }}</p>
</div>
```

**Output**:
```
Rahul Sharma
Age: 24 years
Rahul is Adult
```

#### Example 4: Calling Methods

**TypeScript**:
```typescript
export class AppComponent {
  getUserName(): string {
    return 'Priya Singh';
  }
  
  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
  
  formatPrice(price: number): string {
    return '₹' + price.toLocaleString('en-IN');
  }
}
```

**HTML**:
```html
<div>
  <h1>{{ getGreeting() }}, {{ getUserName() }}! 👋</h1>
  <p>Product Price: {{ formatPrice(25000) }}</p>
</div>
```

**Output**:
```
Good Morning, Priya Singh! 👋
Product Price: ₹25,000
```

### 🎯 Use Cases

1. **Displaying User Data**: Show username, email, profile info
2. **E-commerce**: Display product names, prices, ratings
3. **Dashboards**: Show statistics, counts, metrics
4. **Forms**: Display validation messages, field values
5. **Social Media**: Show post content, comments, likes
6. **Real-time Updates**: Display live data like stock prices, scores

**Common Scenarios**:
- Shopping cart total calculation
- User greetings based on time
- Displaying API response data
- Showing calculated values
- Dynamic text content

### ✅ Best Practices

#### DO's ✅

1. **Keep Expressions Simple**
   ```html
   <!-- Good -->
   <p>Total: {{ price * quantity }}</p>
   
   <!-- Avoid complex logic in template -->
   ```

2. **Use Getters for Complex Logic**
   ```typescript
   // Good - TypeScript
   get fullName(): string {
     return `${this.firstName} ${this.lastName}`;
   }
   ```
   ```html
   <!-- Good - HTML -->
   <p>{{ fullName }}</p>
   ```

3. **Handle Null/Undefined Values**
   ```typescript
   // Good
   userName: string = '';  // Initialize with default
   ```
   ```html
   <!-- Or use safe navigation -->
   <p>{{ user?.name }}</p>
   ```

4. **Use for Display Only**
   ```html
   <!-- Good - Just displaying data -->
   <p>{{ userName }}</p>
   ```

#### DON'Ts ❌

1. **Don't Use Complex Calculations**
   ```html
   <!-- Bad -->
   <p>{{ calculateComplexFormula(a, b, c, d) }}</p>
   
   <!-- Better - Use getter or method -->
   <p>{{ result }}</p>
   ```

2. **Don't Call Functions Repeatedly**
   ```html
   <!-- Bad - Function called 3 times! -->
   <p>{{ getUser().name }}</p>
   <p>{{ getUser().email }}</p>
   <p>{{ getUser().age }}</p>
   
   <!-- Good - Store result -->
   <div *ngIf="getUser() as user">
     <p>{{ user.name }}</p>
     <p>{{ user.email }}</p>
     <p>{{ user.age }}</p>
   </div>
   ```

3. **Don't Modify Data**
   ```html
   <!-- Bad - Don't change data in interpolation -->
   <p>{{ counter++ }}</p>
   
   <!-- Good - Display only -->
   <p>{{ counter }}</p>
   <button (click)="counter++">Increment</button>
   ```

4. **Don't Use Assignment**
   ```html
   <!-- Bad -->
   <p>{{ userName = 'New Name' }}</p>
   
   <!-- Good -->
   <p>{{ userName }}</p>
   ```

### 🔄 Differences

#### Interpolation vs Property Binding

| Feature | Interpolation `{{ }}` | Property Binding `[ ]` |
|---------|---------------------|---------------------|
| **Syntax** | `{{ value }}` | `[property]="value"` |
| **Data Type** | Always returns **String** | Preserves original type |
| **Use Case** | Display text content | Set element properties |
| **Example** | `<h1>{{ name }}</h1>` | `<img [src]="imageUrl">` |
| **Boolean Handling** | Converts to string "true"/"false" | Works as actual boolean |

**Example showing the difference**:

```typescript
export class AppComponent {
  isActive: boolean = true;
  imageUrl: string = 'assets/logo.png';
  count: number = 5;
}
```

```html
<!-- Interpolation - converts everything to string -->
<button disabled="{{ isActive }}">Click</button>
<!-- Result: disabled="true" (string, always disabled!) ❌ -->

<!-- Property Binding - uses actual boolean -->
<button [disabled]="isActive">Click</button>
<!-- Result: Actually disabled/enabled based on boolean ✅ -->

<!-- Interpolation for text -->
<h1>{{ 'Count: ' + count }}</h1>  ✅

<!-- Property Binding for attributes -->
<img [src]="imageUrl" [width]="count * 10">  ✅
```

**Key Rule**: 
- Use **Interpolation** for displaying text content
- Use **Property Binding** for element properties (especially boolean/number)

### ❓ Interview Questions

#### Q1: What is interpolation in Angular?

**Answer**: Interpolation is a one-way data binding technique in Angular that allows you to display component data in the HTML template. It uses double curly braces `{{ }}` syntax to embed expressions directly in the template. Angular evaluates the expression and converts the result to a string for display.

```typescript
// Component
userName: string = 'John';

// Template
<p>Hello, {{ userName }}!</p>
// Output: Hello, John!
```

---

#### Q2: What are the limitations of interpolation?

**Answer**: 
1. **Always returns string** - Even numbers/booleans are converted to strings
2. **No assignments** - Cannot assign values: `{{ x = 10 }}` is invalid
3. **No increment/decrement** - Cannot use `{{ counter++ }}`
4. **Limited to expressions** - Cannot use statements like if/for/while
5. **Template expressions only** - Cannot access global scope (window, document)

```typescript
// Valid
{{ userName }}
{{ price * quantity }}
{{ age > 18 ? 'Adult' : 'Minor' }}

// Invalid
{{ userName = 'New Name' }}  ❌
{{ counter++ }}  ❌
{{ if(condition) }}  ❌
```

---

#### Q3: Can you call methods in interpolation? Is it recommended?

**Answer**: Yes, you can call methods in interpolation, but it should be used carefully:

```typescript
export class AppComponent {
  getGreeting(): string {
    return 'Hello';
  }
}
```

```html
<p>{{ getGreeting() }}</p>  <!-- Valid -->
```

**⚠️ Warning**: Method is called on **every change detection cycle**, which can impact performance. 

**Best Practice**:
- Use **getters** for simple computations
- Use **cached values** for complex computations
- Avoid heavy operations in template methods

```typescript
// Better approach
get greeting(): string {
  return 'Hello';
}
```

---

#### Q4: What is the difference between interpolation and property binding?

**Answer**: 

| Aspect | Interpolation | Property Binding |
|--------|--------------|------------------|
| Syntax | `{{ value }}` | `[property]="value"` |
| Data Type | Always string | Original type preserved |
| Use | Display text | Set properties |
| Direction | Component → View | Component → View |

**Example**:
```typescript
isDisabled: boolean = true;
```

```html
<!-- Interpolation - Wrong for boolean ❌ -->
<button disabled="{{ isDisabled }}">Click</button>
<!-- Always disabled because "true" is a string -->

<!-- Property Binding - Correct ✅ -->
<button [disabled]="isDisabled">Click</button>
<!-- Properly disabled/enabled -->
```

---

#### Q5: Can you use interpolation with expressions? Give examples.

**Answer**: Yes, interpolation supports various expressions:

**1. Arithmetic Operations**:
```html
<p>Total: {{ price * quantity }}</p>
<p>Average: {{ (num1 + num2) / 2 }}</p>
```

**2. String Concatenation**:
```html
<p>{{ firstName + ' ' + lastName }}</p>
<p>{{ 'Hello, ' + userName + '!' }}</p>
```

**3. Ternary Operator**:
```html
<p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
<p>{{ age >= 18 ? 'Can Vote' : 'Cannot Vote' }}</p>
```

**4. Method Calls**:
```html
<p>{{ getUserName() }}</p>
<p>{{ formatDate(currentDate) }}</p>
```

**5. Property Access**:
```html
<p>{{ user.name }}</p>
<p>{{ product.price }}</p>
```

**⚠️ Cannot Use**:
- Assignments: `{{ x = 10 }}`
- Increment/Decrement: `{{ count++ }}`
- Control statements: `{{ if (x) }}`
- Chaining with semicolon: `{{ x = 1; y = 2 }}`

---

#### Q6: How does Angular handle null or undefined values in interpolation?

**Answer**: Angular handles null/undefined gracefully by displaying an empty string instead of throwing an error.

```typescript
export class AppComponent {
  userName: string | null = null;
  age: number | undefined = undefined;
}
```

```html
<!-- No error, displays empty -->
<p>Name: {{ userName }}</p>
<p>Age: {{ age }}</p>

<!-- Output: -->
<!-- Name:  -->
<!-- Age:  -->
```

**Best Practice - Safe Navigation Operator**:
```html
<!-- Safe navigation prevents errors -->
<p>{{ user?.name }}</p>
<p>{{ user?.address?.city }}</p>

<!-- If user is null/undefined, displays empty instead of error -->
```

**Alternative - Default Values**:
```html
<p>{{ userName || 'Guest' }}</p>
<!-- Output: Guest (if userName is null/undefined) -->

<p>{{ age ?? 0 }}</p>
<!-- Output: 0 (if age is null/undefined) -->
```

---

#### Q7: What happens if you use complex logic inside interpolation?

**Answer**: While Angular allows complex expressions, it's **not recommended** because:

1. **Performance Issue**: Expression is evaluated on every change detection
2. **Poor Readability**: Makes template hard to understand
3. **Difficult to Debug**: Logic scattered in template
4. **No Unit Testing**: Cannot test template logic easily

**Bad Practice ❌**:
```html
<p>{{ (price * quantity) - (price * quantity * discount / 100) + shippingCost }}</p>
```

**Good Practice ✅**:
```typescript
// Component
get totalPrice(): number {
  const subtotal = this.price * this.quantity;
  const discountAmount = subtotal * this.discount / 100;
  return subtotal - discountAmount + this.shippingCost;
}
```

```html
<!-- Template -->
<p>{{ totalPrice }}</p>
```

---

#### Q8: Can you change the interpolation delimiter from `{{ }}` to something else?

**Answer**: Yes! You can change the interpolation delimiters using the `interpolation` property in the `@Component` decorator.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  interpolation: ['[[', ']]']  // Custom delimiters
})
export class AppComponent {
  message: string = 'Hello';
}
```

```html
<!-- Now use [[ ]] instead of {{ }} -->
<p>[[ message ]]</p>
<!-- Output: Hello -->
```

**Use Case**: When your template needs to use `{{ }}` as literal text (e.g., in documentation or tutorials).

---

#### Q9: Does interpolation work with all data types?

**Answer**: Interpolation converts all values to **strings** before displaying:

```typescript
export class AppComponent {
  // String
  name: string = 'John';
  
  // Number
  age: number = 25;
  
  // Boolean
  isActive: boolean = true;
  
  // Object
  user = { name: 'John', age: 25 };
  
  // Array
  items = [1, 2, 3];
  
  // Null/Undefined
  empty: null = null;
}
```

```html
<p>{{ name }}</p>         <!-- Output: John -->
<p>{{ age }}</p>          <!-- Output: 25 -->
<p>{{ isActive }}</p>     <!-- Output: true -->
<p>{{ user }}</p>         <!-- Output: [object Object] ❌ -->
<p>{{ items }}</p>        <!-- Output: 1,2,3 -->
<p>{{ empty }}</p>        <!-- Output: (empty) -->

<!-- For objects/arrays, access properties -->
<p>{{ user.name }}</p>    <!-- Output: John ✅ -->
<p>{{ items[0] }}</p>     <!-- Output: 1 ✅ -->
```

**Note**: Objects are converted to `[object Object]` which is not useful. Always access specific properties!

---

#### Q10: What is the performance impact of using functions in interpolation?

**Answer**: Functions in interpolation are called during **every change detection cycle**, which can happen frequently:

**Example of Performance Issue**:
```typescript
export class AppComponent {
  getRandomNumber(): number {
    console.log('Function called!');
    return Math.random();
  }
}
```

```html
<p>{{ getRandomNumber() }}</p>
```

**Result**: "Function called!" is logged many times (on every mouse move, click, etc.)

**Solutions**:

1. **Use Getter with Cached Value**:
```typescript
private _randomNumber: number = Math.random();

get randomNumber(): number {
  return this._randomNumber;
}
```

2. **Use Property Instead**:
```typescript
randomNumber: number = Math.random();
```

3. **Use Pure Pipes** (if transformation needed):
```typescript
@Pipe({ name: 'format', pure: true })
export class FormatPipe implements PipeTransform {
  transform(value: any): any {
    return /* formatted value */;
  }
}
```

```html
<p>{{ value | format }}</p>
```

---

## 2. Property Binding

### 📖 Definition

**Property Binding** is a one-way data binding technique in Angular that allows you to set properties of HTML elements dynamically from your TypeScript component. Unlike interpolation which always returns strings, property binding preserves the original data type.

**In Simple Words**: Property binding connects a TypeScript variable to an HTML element's property. You use square brackets `[ ]` around the property name.

**Real-Life Analogy**: Think of TV remote control - you press a button (component) and it changes the TV volume property. The remote (property binding) sends the signal to control the TV's property!

### 📝 Syntax and Examples

#### Basic Syntax
```html
<element [property]="expression"></element>
```

#### Example 1: Disabling a Button

**TypeScript (app.component.ts)**:
```typescript
export class AppComponent {
  isButtonDisabled: boolean = true;
  
  enableButton() {
    this.isButtonDisabled = false;
  }
}
```

**HTML (app.component.html)**:
```html
<button [disabled]="isButtonDisabled">Submit</button>
<button (click)="enableButton()">Enable Submit Button</button>
```

**Output**: First button is disabled. Clicking second button enables it.

---

#### Example 2: Image Source Binding

**TypeScript**:
```typescript
export class AppComponent {
  logoUrl: string = 'assets/images/logo.png';
  altText: string = 'Company Logo';
  imageWidth: number = 200;
  imageHeight: number = 100;
}
```

**HTML**:
```html
<img 
  [src]="logoUrl" 
  [alt]="altText"
  [width]="imageWidth"
  [height]="imageHeight">
```

**Output**: Image displayed with specified source, alt text, and dimensions.

---

#### Example 3: Input Value Binding

**TypeScript**:
```typescript
export class AppComponent {
  userEmail: string = 'user@example.com';
  readOnlyMode: boolean = true;
  maxLength: number = 50;
}
```

**HTML**:
```html
<input 
  type="email" 
  [value]="userEmail"
  [readOnly]="readOnlyMode"
  [maxLength]="maxLength">
```

---

#### Example 4: Class and Style Binding

**TypeScript**:
```typescript
export class AppComponent {
  isHighlighted: boolean = true;
  textColor: string = 'blue';
  fontSize: number = 20;
}
```

**HTML**:
```html
<!-- Class binding -->
<div [class.highlighted]="isHighlighted">
  This div has conditional class
</div>

<!-- Style binding -->
<p [style.color]="textColor" 
   [style.fontSize.px]="fontSize">
  Styled paragraph
</p>
```

**Output**: Div with 'highlighted' class, paragraph with blue color and 20px font.

---

#### Example 5: href and Link Binding

**TypeScript**:
```typescript
export class AppComponent {
  websiteUrl: string = 'https://angular.io';
  productId: number = 12345;
  
  getProductUrl(): string {
    return `/products/${this.productId}`;
  }
}
```

**HTML**:
```html
<a [href]="websiteUrl" target="_blank">Visit Angular</a>
<a [href]="getProductUrl()">View Product</a>
```

---

#### Example 6: innerHTML Binding (Be Careful!)

**TypeScript**:
```typescript
export class AppComponent {
  htmlContent: string = '<strong>Bold Text</strong> and <em>Italic Text</em>';
}
```

**HTML**:
```html
<div [innerHTML]="htmlContent"></div>
```

**Output**: **Bold Text** and *Italic Text*

**⚠️ Security Warning**: Angular sanitizes HTML to prevent XSS attacks. Untrusted HTML will be cleaned.

---

### 🎯 Use Cases

1. **Dynamic Image Sources**: Product images, user avatars, gallery
2. **Form Control States**: Disable/enable inputs, readonly fields
3. **Conditional Styling**: Highlight active items, error states
4. **Navigation**: Dynamic route links, external URLs
5. **Accessibility**: Setting ARIA attributes dynamically
6. **Media Elements**: Video sources, audio controls
7. **Custom Attributes**: Data attributes for third-party libraries

**Common Scenarios**:
- E-commerce product images
- Form validation states
- Loading indicators
- Dynamic button states
- Conditional tooltips

### ✅ Best Practices

#### DO's ✅

1. **Use for Element Properties**
   ```html
   <!-- Good -->
   <button [disabled]="isProcessing">Submit</button>
   <img [src]="imageUrl">
   ```

2. **Bind Boolean Properties Correctly**
   ```typescript
   isDisabled: boolean = true;
   ```
   ```html
   <!-- Good -->
   <input [disabled]="isDisabled">
   ```

3. **Use Type-Safe Binding**
   ```typescript
   width: number = 300;
   ```
   ```html
   <!-- Good - number type preserved -->
   <div [style.width.px]="width"></div>
   ```

4. **Sanitize User Input**
   ```typescript
   // Angular auto-sanitizes, but be careful
   userContent: string = this.sanitizer.sanitize(SecurityContext.HTML, untrustedHtml);
   ```

#### DON'Ts ❌

1. **Don't Mix Interpolation and Property Binding**
   ```html
   <!-- Bad -->
   <img src="{{ imageUrl }}">
   
   <!-- Good -->
   <img [src]="imageUrl">
   ```

2. **Don't Use for Text Content (Use Interpolation)**
   ```html
   <!-- Bad -->
   <p [textContent]="message"></p>
   
   <!-- Good -->
   <p>{{ message }}</p>
   ```

3. **Don't Bind innerHTML with Untrusted Data**
   ```html
   <!-- Dangerous if userInput is untrusted -->
   <div [innerHTML]="userInput"></div>
   
   <!-- Safe - Angular sanitizes, but still be careful -->
   ```

4. **Don't Forget Square Brackets**
   ```html
   <!-- Bad - treats as string "isDisabled" -->
   <button disabled="isDisabled">Submit</button>
   
   <!-- Good -->
   <button [disabled]="isDisabled">Submit</button>
   ```

---

### 🔄 Differences

#### Property Binding vs Interpolation

| Feature | Property Binding `[ ]` | Interpolation `{{ }}` |
|---------|---------------------|---------------------|
| **Purpose** | Set element properties | Display text content |
| **Syntax** | `[property]="value"` | `{{ value }}` |
| **Data Type** | Preserves type (boolean, number, etc.) | Always string |
| **Use Case** | Element attributes/properties | Text display |
| **Performance** | Slightly better | Slightly slower |
| **Example** | `[disabled]="true"` | `{{ userName }}` |

**Example Comparison**:

```typescript
export class AppComponent {
  isActive: boolean = true;
  count: number = 5;
  name: string = 'John';
}
```

```html
<!-- Property Binding - For Properties ✅ -->
<button [disabled]="!isActive">Click</button>
<input [value]="name" [maxLength]="count * 10">

<!-- Interpolation - For Text ✅ -->
<h1>Welcome, {{ name }}!</h1>
<p>Count: {{ count }}</p>

<!-- Wrong Usage -->
<button disabled="{{ !isActive }}">Click</button>  ❌
<h1 [textContent]="name"></h1>  ❌ (Use interpolation)
```

---

#### Property Binding vs Attribute Binding

**Property Binding** - Sets DOM element **properties**:
```html
<input [value]="userName">  <!-- DOM property -->
```

**Attribute Binding** - Sets HTML **attributes**:
```html
<button [attr.aria-label]="label">Click</button>  <!-- HTML attribute -->
```

**When to use Attribute Binding**:
1. When no corresponding DOM property exists
2. For ARIA attributes
3. For data attributes
4. For SVG attributes

```html
<!-- Attribute binding (no DOM property) -->
<td [attr.colspan]="columnSpan"></td>
<div [attr.data-id]="userId"></div>
<svg><circle [attr.cx]="centerX"></circle></svg>
```

---

### ❓ Interview Questions

#### Q1: What is property binding in Angular?

**Answer**: Property binding is a one-way data binding mechanism in Angular that sets a property of an HTML element or directive from a component property. It uses square bracket syntax `[property]="expression"`. Unlike interpolation, property binding preserves the data type of the value.

```typescript
export class AppComponent {
  imageUrl: string = 'assets/logo.png';
  isDisabled: boolean = true;
}
```

```html
<img [src]="imageUrl">
<button [disabled]="isDisabled">Submit</button>
```

---

#### Q2: What's the difference between property binding and interpolation?

**Answer**: 

**Key Differences**:

1. **Data Type Preservation**:
```typescript
isDisabled: boolean = true;
```

```html
<!-- Interpolation - converts to string "true" ❌ -->
<button disabled="{{ isDisabled }}">Click</button>
<!-- Always disabled! -->

<!-- Property Binding - uses actual boolean ✅ -->
<button [disabled]="isDisabled">Click</button>
<!-- Properly enabled/disabled -->
```

2. **Use Case**:
- **Interpolation**: Display text content
- **Property Binding**: Set element properties

3. **Syntax**:
- **Interpolation**: `{{ value }}`
- **Property Binding**: `[property]="value"`

**Rule of Thumb**: Use property binding for properties, interpolation for text!

---

#### Q3: Can you give examples of when to use property binding vs attribute binding?

**Answer**: 

**Property Binding** - When DOM property exists:
```html
<input [value]="userName">
<img [src]="imageUrl">
<button [disabled]="isDisabled">
```

**Attribute Binding** - When only HTML attribute exists (no DOM property):
```html
<!-- ARIA attributes -->
<button [attr.aria-label]="buttonLabel">Click</button>

<!-- colspan (no DOM property) -->
<td [attr.colspan]="columnCount"></td>

<!-- Data attributes -->
<div [attr.data-user-id]="userId"></div>

<!-- SVG attributes -->
<svg>
  <circle [attr.cx]="centerX" [attr.cy]="centerY"></circle>
</svg>
```

**Check**:
```typescript
// Has DOM property? Use property binding
console.log('value' in document.createElement('input')); // true ✅

// No DOM property? Use attribute binding
console.log('colspan' in document.createElement('td')); // false ❌
```

---

#### Q4: What is the difference between `[disabled]="false"` and `disabled="false"`?

**Answer**: 

```html
<!-- Property Binding - CORRECT ✅ -->
<button [disabled]="false">Click Me</button>
<!-- Button is ENABLED (false boolean) -->

<!-- String Attribute - WRONG ❌ -->
<button disabled="false">Click Me</button>
<!-- Button is DISABLED (any string value disables it!) -->
```

**Explanation**: 
- With property binding `[disabled]="false"`, Angular sets the DOM property to `false` boolean
- With string `disabled="false"`, HTML treats ANY value as truthy, so button is disabled
- In HTML, presence of `disabled` attribute disables element, value doesn't matter!

**Correct Usage**:
```html
<!-- Remove attribute to enable -->
<button>Enabled</button>

<!-- Add attribute to disable -->
<button disabled>Disabled</button>

<!-- Or use property binding -->
<button [disabled]="false">Enabled</button>
<button [disabled]="true">Disabled</button>
```

---

#### Q5: How do you bind to CSS classes and styles using property binding?

**Answer**: 

**1. Single Class Binding**:
```html
<div [class.active]="isActive">Content</div>
<!-- Adds/removes 'active' class based on isActive -->
```

**2. Multiple Classes**:
```html
<div [class]="cssClasses">Content</div>
```
```typescript
cssClasses: string = 'btn btn-primary active';
```

**3. Style Binding**:
```html
<!-- Single style -->
<p [style.color]="textColor">Text</p>
<div [style.width.px]="widthValue">Box</div>

<!-- Multiple styles -->
<div [style]="styleObject">Content</div>
```
```typescript
textColor: string = 'red';
widthValue: number = 200;
styleObject = {
  'color': 'blue',
  'font-size': '20px',
  'font-weight': 'bold'
};
```

**4. ngClass and ngStyle (More Common)**:
```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
<div [ngStyle]="{'color': textColor, 'fontSize.px': fontSize}">
```

---

#### Q6: What security concerns should you be aware of with property binding?

**Answer**: 

**1. innerHTML Binding - XSS Risk**:
```typescript
// Dangerous if untrusted!
userInput: string = '<script>alert("XSS")</script>';
```

```html
<div [innerHTML]="userInput"></div>
<!-- Angular sanitizes this, but still risky! -->
```

**Angular's Protection**:
- Automatically sanitizes HTML
- Removes `<script>` tags
- Removes event handlers (`onclick`, etc.)
- Removes potentially dangerous URLs

**2. URL Binding**:
```html
<!-- Dangerous -->
<a [href]="userProvidedUrl">Link</a>
<!-- If userProvidedUrl is "javascript:alert('XSS')" -->
```

**Safe Practice**:
```typescript
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

safeHtml: SafeHtml = this.sanitizer.sanitize(SecurityContext.HTML, untrustedHtml);
```

**Best Practices**:
1. Never bind untrusted user input directly
2. Sanitize on server-side first
3. Use Angular's built-in sanitization
4. Validate and whitelist allowed values
5. Use Content Security Policy (CSP)

---

#### Q7: Can you bind to custom component properties?

**Answer**: Yes! Using `@Input()` decorator:

**Child Component**:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <div class="card">
      <h3>{{ userName }}</h3>
      <p>Age: {{ userAge }}</p>
    </div>
  `
})
export class UserCardComponent {
  @Input() userName: string = '';
  @Input() userAge: number = 0;
}
```

**Parent Component**:
```typescript
export class AppComponent {
  name: string = 'John Doe';
  age: number = 25;
}
```

```html
<!-- Property binding to child component -->
<app-user-card 
  [userName]="name" 
  [userAge]="age">
</app-user-card>
```

**Alternative Syntax** (without brackets for static values):
```html
<app-user-card 
  userName="Static Name" 
  [userAge]="age">
</app-user-card>
```

---

#### Q8: What happens if you forget the square brackets in property binding?

**Answer**: 

**With Brackets (Correct ✅)**:
```typescript
isDisabled: boolean = true;
imageUrl: string = 'logo.png';
```

```html
<button [disabled]="isDisabled">Click</button>
<!-- Angular evaluates: disabled = true (boolean) -->

<img [src]="imageUrl">
<!-- Angular evaluates: src = "logo.png" (from variable) -->
```

**Without Brackets (Wrong ❌)**:
```html
<button disabled="isDisabled">Click</button>
<!-- Treats "isDisabled" as string, button is disabled! -->

<img src="imageUrl">
<!-- Looks for file named "imageUrl", not variable value! -->
```

**Result**:
- Without brackets: Angular treats it as **static string**
- With brackets: Angular **evaluates the expression**

**Remember**: 
- `[property]` = Dynamic (evaluates TypeScript expression)
- `property` = Static (literal string value)

---

#### Q9: How do you bind to element properties that contain dashes (like data-* attributes)?

**Answer**: 

**Problem**: Dashes in JavaScript property names need special handling.

**Solution**: Use **attribute binding** with `attr.` prefix:

```typescript
export class AppComponent {
  userId: number = 12345;
  userName: string = 'John';
}
```

```html
<!-- Attribute binding for data-* attributes -->
<div [attr.data-user-id]="userId" 
     [attr.data-user-name]="userName">
  User Info
</div>

<!-- ARIA attributes -->
<button [attr.aria-label]="'Close button'" 
        [attr.aria-expanded]="isExpanded">
  Close
</button>
```

**Rendered HTML**:
```html
<div data-user-id="12345" data-user-name="John">
<button aria-label="Close button" aria-expanded="false">
```

**Why attr. prefix?**:
- DOM properties don't always match HTML attributes
- Custom attributes (data-*) don't have DOM properties
- ARIA attributes need attribute binding
- SVG attributes need attribute binding

---

#### Q10: Can you combine multiple property bindings on the same element?

**Answer**: Yes! You can have multiple property bindings on a single element:

```typescript
export class AppComponent {
  imageUrl: string = 'assets/logo.png';
  imageAlt: string = 'Logo';
  imageWidth: number = 300;
  imageHeight: number = 200;
  imageClass: string = 'logo-img';
  imageTitle: string = 'Company Logo';
  isHidden: boolean = false;
}
```

```html
<img 
  [src]="imageUrl"
  [alt]="imageAlt"
  [width]="imageWidth"
  [height]="imageHeight"
  [class]="imageClass"
  [title]="imageTitle"
  [hidden]="isHidden"
  [style.border]="'2px solid blue'"
  [attr.data-image-id]="'logo-123'">
```

**Mix Property and Attribute Binding**:
```html
<button
  [disabled]="isDisabled"              <!-- Property -->
  [class.active]="isActive"            <!-- Class -->
  [style.color]="textColor"            <!-- Style -->
  [attr.aria-label]="buttonLabel"      <!-- Attribute -->
  (click)="onClick()">                 <!-- Event -->
  Click Me
</button>
```

**All bindings work together!** ✅

---

## 3. Event Binding

### 📖 Definition

**Event Binding** allows you to listen to and respond to user actions like clicks, mouse movements, keyboard inputs, and other events. When a user interacts with the application (like clicking a button), event binding executes a specified method from your component.

**In Simple Words**: Event binding connects user actions on HTML elements to methods in your TypeScript component. You wrap the event name in parentheses `( )`.

**Real-Life Analogy**: Think of WhatsApp's send button - when you click it (event), the message is sent (method execution). That's event binding in action!

### 📝 Syntax and Examples

#### Basic Syntax
```html
<element (eventName)="methodName()"></element>
```

#### Example 1: Simple Button Click

**TypeScript (app.component.ts)**:
```typescript
export class AppComponent {
  counter: number = 0;
  message: string = '';
  
  incrementCounter() {
    this.counter++;
    console.log('Counter increased:', this.counter);
  }
  
  showMessage() {
    this.message = 'Button was clicked!';
  }
}
```

**HTML (app.component.html)**:
```html
<div class="counter-app">
  <h2>Counter Value: {{counter}}</h2>
  <button (click)="incrementCounter()">+1 Increase</button>
  
  <hr>
  
  <button (click)="showMessage()">Click Me</button>
  <p>{{message}}</p>
</div>
```

**Output**: Click the button to increment counter or display message.

---

#### Example 2: Like Button (Instagram/Facebook Style)

**TypeScript**:
```typescript
export class AppComponent {
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

**HTML**:
```html
<div class="post">
  <button (click)="toggleLike()">
    {{ isLiked ? '❤️ Liked' : '🤍 Like' }}
  </button>
  <p>{{likeCount}} likes</p>
</div>
```

**Output**: Toggle between liked/unliked states with count updating.

---

#### Example 3: Function with Parameters

**TypeScript**:
```typescript
export class AppComponent {
  showNotification(message: string, userName: string) {
    alert(`${userName}, ${message}`);
  }
  
  addToCart(productName: string, price: number) {
    console.log(`Added ${productName} - ₹${price} to cart`);
  }
}
```

**HTML**:
```html
<button (click)="showNotification('Welcome to Angular!', 'Rahul')">
  Greet User
</button>

<button (click)="addToCart('Laptop', 45000)">
  Add to Cart
</button>
```

**Output**: 
- Alert box shows: "Rahul, Welcome to Angular!"
- Console shows: "Added Laptop - ₹45000 to cart"

---

#### Example 4: Multiple Events on Same Element

**TypeScript**:
```typescript
export class AppComponent {
  buttonText: string = 'Hover over me';
  clickCount: number = 0;
  
  onMouseEnter() {
    this.buttonText = 'Mouse is over me! 🎯';
    console.log('Mouse entered!');
  }
  
  onMouseLeave() {
    this.buttonText = 'Mouse left 😢';
    console.log('Mouse left!');
  }
  
  onClick() {
    this.clickCount++;
    this.buttonText = `Clicked ${this.clickCount} times! 🎉`;
    console.log('Button clicked!');
  }
}
```

**HTML**:
```html
<button 
  (mouseenter)="onMouseEnter()"
  (mouseleave)="onMouseLeave()"
  (click)="onClick()">
  {{buttonText}}
</button>
```

---

### 🖱️ Common Mouse Events

| Event | When It Triggers |
|-------|-----------------|
| `(click)` | Single click - most common |
| `(dblclick)` | Double click |
| `(mouseenter)` | Mouse enters element |
| `(mouseleave)` | Mouse leaves element |
| `(mouseover)` | Mouse moves over element |
| `(mouseout)` | Mouse moves out of element |
| `(mousedown)` | Mouse button pressed |
| `(mouseup)` | Mouse button released |
| `(mousemove)` | Mouse is moving over element |

**Example - Hover Effect**:
```typescript
export class AppComponent {
  isHovering: boolean = false;
  
  onHover() {
    this.isHovering = true;
  }
  
  onLeave() {
    this.isHovering = false;
  }
}
```

```html
<div 
  class="card"
  (mouseenter)="onHover()"
  (mouseleave)="onLeave()"
  [class.hovered]="isHovering">
  <h3>Hover over this card!</h3>
  <p>{{ isHovering ? 'You are hovering! 🎯' : 'Not hovering' }}</p>
</div>
```

---

### 🎯 Use Cases

1. **Button Actions**: Submit forms, save data, navigate
2. **User Interactions**: Like buttons, follow buttons, add to cart
3. **Form Events**: Input changes, focus/blur, validation
4. **Navigation**: Menu clicks, tab switching, page navigation
5. **Animation Triggers**: Hover effects, click animations
6. **Real-time Updates**: Chat send, live search, filters

**Common Scenarios**:
- E-commerce: Add to cart, wishlist
- Social Media: Like, share, comment
- Forms: Submit, reset, validate
- Navigation: Menu toggle, page routing
- Games: Click handlers, controls

---

### ✅ Best Practices

#### DO's ✅

1. **Use Arrow Functions for Simple Logic**
   ```html
   <button (click)="counter = counter + 1">Increment</button>
   ```

2. **Call Methods for Complex Logic**
   ```html
   <!-- Good -->
   <button (click)="handleComplexLogic()">Process</button>
   ```
   ```typescript
   handleComplexLogic() {
     // Complex calculations here
     this.validateData();
     this.processResults();
     this.updateUI();
   }
   ```

3. **Use Descriptive Method Names**
   ```typescript
   // Good
   submitForm() { }
   deleteUser() { }
   toggleSidebar() { }
   
   // Bad
   click1() { }
   handle() { }
   method() { }
   ```

4. **Don't Forget Parentheses**
   ```html
   <!-- Correct -->
   <button (click)="myFunction()">Click</button>
   
   <!-- Wrong - missing () -->
   <button (click)="myFunction">Click</button>
   ```

#### DON'Ts ❌

1. **Don't Put Too Much Logic in Template**
   ```html
   <!-- Bad ❌ -->
   <button (click)="user.name=''; user.age=0; user.email=''; resetForm(); updateDB()">
     Reset
   </button>
   
   <!-- Good ✅ -->
   <button (click)="resetUser()">Reset</button>
   ```

2. **Don't Forget to Handle Errors**
   ```typescript
   // Bad
   deleteItem() {
     this.api.delete(this.itemId);
   }
   
   // Good
   deleteItem() {
     this.api.delete(this.itemId).subscribe({
       next: () => console.log('Deleted successfully'),
       error: (err) => this.handleError(err)
     });
   }
   ```

3. **Don't Use Event Binding for Display Logic**
   ```html
   <!-- Bad - use property binding -->
   <div (click)="isActive = true" [class.active]="isActive">
   
   <!-- Good - separate concerns -->
   <div (click)="activate()" [class.active]="isActive">
   ```

---

### 🔄 Differences

#### Event Binding vs Property Binding

| Feature | Event Binding `( )` | Property Binding `[ ]` |
|---------|-------------------|----------------------|
| **Direction** | HTML → Component | Component → HTML |
| **Purpose** | Handle user actions | Set element properties |
| **Syntax** | `(event)="method()"` | `[property]="value"` |
| **Example** | `(click)="save()"` | `[disabled]="isDisabled"` |
| **Data Flow** | Event data to component | Component data to view |

**Example**:
```typescript
export class AppComponent {
  isDisabled: boolean = false;
  
  enableButton() {
    this.isDisabled = false;
  }
}
```

```html
<!-- Property Binding: Component → View -->
<button [disabled]="isDisabled">Submit</button>

<!-- Event Binding: View → Component -->
<button (click)="enableButton()">Enable Submit</button>
```

---

### ❓ Interview Questions

#### Q1: What is event binding in Angular?

**Answer**: Event binding is a one-way data binding technique that allows you to listen to events (like clicks, key presses, mouse movements) raised by HTML elements and execute methods in response. It uses parentheses `()` syntax.

```typescript
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

```html
<button (click)="handleClick()">Click Me</button>
```

The data flows from the **view to the component** (HTML → TypeScript).

---

#### Q2: What's the difference between event binding and property binding?

**Answer**: 

**Event Binding `()`**: 
- Listens to events from HTML elements
- Data flows: **View → Component**
- Used for handling user actions

**Property Binding `[]`**:
- Sets properties of HTML elements
- Data flows: **Component → View**
- Used for displaying/setting values

```html
<!-- Event Binding: User clicks → Component method executes -->
<button (click)="save()">Save</button>

<!-- Property Binding: Component value → Element property -->
<button [disabled]="isSaving">Save</button>

<!-- Both together -->
<button 
  (click)="save()" 
  [disabled]="isSaving">
  {{ isSaving ? 'Saving...' : 'Save' }}
</button>
```

---

#### Q3: Can you call multiple methods in event binding?

**Answer**: Yes, you can call multiple methods, but it's not recommended. Better to create a single method that calls others.

**Not Recommended ❌**:
```html
<button (click)="method1(); method2(); method3()">Click</button>
```

**Better Approach ✅**:
```typescript
handleClick() {
  this.method1();
  this.method2();
  this.method3();
}
```

```html
<button (click)="handleClick()">Click</button>
```

---

#### Q4: How do you pass parameters in event binding?

**Answer**: You can pass parameters directly in the template or use `$event` to pass event data.

**Static Parameters**:
```typescript
export class AppComponent {
  greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old`);
  }
}
```

```html
<button (click)="greet('John', 25)">Greet John</button>
<button (click)="greet('Mary', 30)">Greet Mary</button>
```

**Dynamic Parameters from Component**:
```typescript
export class AppComponent {
  userName: string = 'Rahul';
  userAge: number = 24;
  
  greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old`);
  }
}
```

```html
<button (click)="greet(userName, userAge)">Greet User</button>
```

---

#### Q5: What are the most commonly used events in Angular?

**Answer**: 

**Click Events**:
```html
<button (click)="handleClick()">Click</button>
<div (dblclick)="handleDoubleClick()">Double Click</div>
```

**Input Events**:
```html
<input (input)="onInput($event)">
<input (change)="onChange($event)">
<input (blur)="onBlur()">
<input (focus)="onFocus()">
```

**Keyboard Events**:
```html
<input (keyup)="onKeyUp($event)">
<input (keydown)="onKeyDown($event)">
<input (keyup.enter)="onEnter()">
```

**Mouse Events**:
```html
<div (mouseenter)="onEnter()">
<div (mouseleave)="onLeave()">
<div (mousemove)="onMove($event)">
```

---

#### Q6: Can you prevent default behavior in event binding?

**Answer**: Yes, using `$event.preventDefault()` in the event handler.

```typescript
export class AppComponent {
  onSubmit(event: Event) {
    event.preventDefault();  // Prevents form submission
    console.log('Form submitted without page refresh');
    // Handle form data here
  }
  
  onLinkClick(event: Event) {
    event.preventDefault();  // Prevents navigation
    console.log('Link clicked but navigation prevented');
  }
}
```

```html
<form (submit)="onSubmit($event)">
  <input type="text">
  <button type="submit">Submit</button>
</form>

<a href="https://google.com" (click)="onLinkClick($event)">
  Click (won't navigate)
</a>
```

---

#### Q7: What is event bubbling and how do you stop it?

**Answer**: Event bubbling is when an event propagates from the child element to parent elements. You can stop it using `$event.stopPropagation()`.

```typescript
export class AppComponent {
  onParentClick() {
    console.log('Parent clicked');
  }
  
  onChildClick(event: Event) {
    event.stopPropagation();  // Stops event from reaching parent
    console.log('Child clicked - parent will not receive this event');
  }
}
```

```html
<div (click)="onParentClick()" class="parent">
  <p>Parent Div</p>
  <button (click)="onChildClick($event)">
    Child Button (Click me - parent won't trigger)
  </button>
</div>
```

**Without `stopPropagation()`**: Both child and parent handlers execute  
**With `stopPropagation()`**: Only child handler executes

---

#### Q8: Can you bind to custom events from child components?

**Answer**: Yes! Child components emit custom events using `@Output()` and `EventEmitter`, which parent components can listen to.

**Child Component**:
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="notifyParent()">Notify Parent</button>
  `
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  
  notifyParent() {
    this.messageEvent.emit('Hello from child!');
  }
}
```

**Parent Component**:
```typescript
export class ParentComponent {
  handleMessage(message: string) {
    console.log('Received from child:', message);
  }
}
```

```html
<app-child (messageEvent)="handleMessage($event)"></app-child>
```

---

#### Q9: What's the difference between `(change)` and `(input)` events?

**Answer**: 

**`(input)`**: Fires on every keystroke/change
```html
<input (input)="onInput($event)" placeholder="Type here">
```
```typescript
onInput(event: any) {
  console.log('Current value:', event.target.value);
  // Fires: 'R', 'Ra', 'Rah', 'Rahu', 'Rahul'
}
```

**`(change)`**: Fires only when element loses focus (blur) after value changed
```html
<input (change)="onChange($event)" placeholder="Type and click outside">
```
```typescript
onChange(event: any) {
  console.log('Final value:', event.target.value);
  // Fires only once after you click outside
}
```

**Use Case**:
- `(input)`: Live search, character count, real-time validation
- `(change)`: Form submission, final value confirmation

---

#### Q10: How do you handle asynchronous operations in event handlers?

**Answer**: Use `async/await` or Promises/Observables:

**Using async/await**:
```typescript
export class AppComponent {
  isLoading: boolean = false;
  
  async handleClick() {
    this.isLoading = true;
    try {
      const result = await this.apiService.fetchData().toPromise();
      console.log('Data loaded:', result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
```

**Using Observables**:
```typescript
export class AppComponent {
  isLoading: boolean = false;
  
  handleClick() {
    this.isLoading = true;
    this.apiService.fetchData().subscribe({
      next: (data) => {
        console.log('Success:', data);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    });
  }
}
```

```html
<button (click)="handleClick()" [disabled]="isLoading">
  {{ isLoading ? 'Loading...' : 'Load Data' }}
</button>
```

---

## 4. Keyboard Events

### 📖 Definition

**Keyboard Events** are special events that trigger when users interact with the keyboard. These events allow you to detect when keys are pressed, released, or held down, enabling features like keyboard shortcuts, form validation, search functionality, and more.

**In Simple Words**: Keyboard events let you know when and which key the user presses on their keyboard, so you can respond accordingly.

**Real-Life Analogy**: Think of Google Search - as you type (keyboard events), it shows suggestions instantly. Or Gmail's keyboard shortcuts (Ctrl+Enter to send email). These are all keyboard events in action!

### 📝 Syntax and Examples

#### Available Keyboard Events

| Event | When It Triggers | Use Case |
|-------|-----------------|----------|
| `(keypress)` | Key pressed (deprecated, avoid) | Legacy code |
| `(keydown)` | Key pressed down | Shortcuts, real-time |
| `(keyup)` | Key released | Most common, after typing |
| `(keyup.enter)` | Enter key released | Form submission |
| `(keydown.escape)` | Escape key pressed | Close modals |
| `(keydown.space)` | Spacebar pressed | Custom controls |

#### Example 1: Google Search Style (Real-time Search)

**TypeScript**:
```typescript
export class AppComponent {
  searchQuery: string = '';
  searchResults: string[] = [];
  
  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    console.log('User typed:', this.searchQuery);
    
    // Simulate API call for live search
    if (this.searchQuery.length > 2) {
      this.searchResults = [
        `${this.searchQuery} - Result 1`,
        `${this.searchQuery} - Result 2`,
        `${this.searchQuery} - Result 3`
      ];
    } else {
      this.searchResults = [];
    }
  }
}
```

**HTML**:
```html
<div class="search-container">
  <input 
    type="text" 
    placeholder="Search Google..."
    (keyup)="onSearchChange($event)">
  
  <div class="results">
    <p *ngFor="let result of searchResults">{{ result }}</p>
  </div>
  
  <p *ngIf="searchQuery">You searched for: {{ searchQuery }}</p>
</div>
```

---

#### Example 2: WhatsApp Style Send Message (Enter Key)

**TypeScript**:
```typescript
export class AppComponent {
  message: string = '';
  chatMessages: string[] = [];
  
  sendMessage() {
    if (this.message.trim()) {
      this.chatMessages.push(this.message);
      this.message = '';  // Clear input field
    }
  }
  
  onEnterPress(event: KeyboardEvent) {
    // Check if Enter was pressed without Shift (for new line)
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();  // Prevent new line
      this.sendMessage();
    }
  }
}
```

**HTML**:
```html
<div class="chat-box">
  <h2>Chat Messages</h2>
  
  <div class="messages">
    <div *ngFor="let msg of chatMessages" class="message">
      {{ msg }}
    </div>
  </div>
  
  <div class="input-area">
    <input 
      type="text" 
      [(ngModel)]="message"
      (keydown.enter)="sendMessage()"
      placeholder="Type your message...">
    <button (click)="sendMessage()">Send</button>
  </div>
</div>
```

---

#### Example 3: Keyboard Shortcuts (Gmail Style)

**TypeScript**:
```typescript
export class AppComponent {
  onKeyPress(event: KeyboardEvent) {
    // Ctrl + S - Save
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.save();
    }
    
    // Ctrl + P - Print
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
      this.print();
    }
    
    // Escape - Close modal
    if (event.key === 'Escape') {
      this.closeModal();
    }
    
    // Ctrl + Z - Undo
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      this.undo();
    }
  }
  
  save() {
    console.log('Document saved! 💾');
    alert('Saved successfully!');
  }
  
  print() {
    console.log('Print dialog opened! 🖨️');
    window.print();
  }
  
  closeModal() {
    console.log('Modal closed! ❌');
  }
  
  undo() {
    console.log('Undo action! ↩️');
  }
}
```

**HTML**:
```html
<div (keydown)="onKeyPress($event)" tabindex="0">
  <h2>Keyboard Shortcuts Demo</h2>
  <p>Try these shortcuts:</p>
  <ul>
    <li>Ctrl + S → Save</li>
    <li>Ctrl + P → Print</li>
    <li>Escape → Close</li>
    <li>Ctrl + Z → Undo</li>
  </ul>
  <p>Click here and use keyboard shortcuts!</p>
</div>
```

---

#### Example 4: Character Counter (Twitter/Instagram Style)

**TypeScript**:
```typescript
export class AppComponent {
  postText: string = '';
  maxLength: number = 280;
  
  get remainingChars(): number {
    return this.maxLength - this.postText.length;
  }
  
  get isOverLimit(): boolean {
    return this.postText.length > this.maxLength;
  }
  
  get progressPercentage(): number {
    return (this.postText.length / this.maxLength) * 100;
  }
}
```

**HTML**:
```html
<div class="tweet-composer">
  <h2>Compose Tweet</h2>
  
  <textarea 
    [(ngModel)]="postText"
    placeholder="What's happening?"
    rows="4">
  </textarea>
  
  <div class="stats">
    <p [style.color]="isOverLimit ? 'red' : 'green'">
      {{ remainingChars }} characters remaining
    </p>
    
    <div class="progress-bar">
      <div 
        class="progress"
        [style.width.%]="progressPercentage"
        [style.background]="isOverLimit ? 'red' : 'blue'">
      </div>
    </div>
  </div>
  
  <button [disabled]="isOverLimit || postText.length === 0">
    Post Tweet
  </button>
</div>
```

---

#### Example 5: Focus and Blur Events

**TypeScript**:
```typescript
export class AppComponent {
  isFocused: boolean = false;
  inputValue: string = '';
  focusMessage: string = '';
  
  onFocus() {
    this.isFocused = true;
    this.focusMessage = 'Input is focused! Start typing...';
    console.log('Input field focused! ✨');
  }
  
  onBlur() {
    this.isFocused = false;
    this.focusMessage = 'Input lost focus';
    console.log('Input field blurred! 👋');
  }
  
  onKeyUp(event: any) {
    this.inputValue = event.target.value;
  }
}
```

**HTML**:
```html
<div class="input-demo">
  <input 
    type="text"
    (focus)="onFocus()"
    (blur)="onBlur()"
    (keyup)="onKeyUp($event)"
    [class.focused]="isFocused"
    placeholder="Click to focus">
  
  <p>{{ focusMessage }}</p>
  <p>Current value: {{ inputValue }}</p>
</div>
```

**CSS**:
```css
input.focused {
  border: 2px solid blue;
  box-shadow: 0 0 5px blue;
}
```

---

### 🎯 Use Cases

1. **Search Functionality**: Live search as user types
2. **Form Submission**: Submit on Enter key
3. **Keyboard Shortcuts**: Ctrl+S, Ctrl+P, Escape
4. **Character Limit**: Tweet composer, SMS counter
5. **Autocomplete**: Show suggestions while typing
6. **Navigation**: Arrow keys for menu navigation
7. **Games**: WASD controls, arrow keys
8. **Text Editors**: Formatting shortcuts

---

### ✅ Best Practices

#### DO's ✅

1. **Use `(keyup)` for Most Cases**
   ```html
   <!-- User has finished typing the character -->
   <input (keyup)="onKeyUp($event)">
   ```

2. **Use Specific Key Modifiers**
   ```html
   <!-- More readable and performant -->
   <input (keydown.enter)="submit()">
   <input (keydown.escape)="cancel()">
   <div (keydown.ctrl.s)="save($event)">
   ```

3. **Prevent Default for Custom Shortcuts**
   ```typescript
   onKeyPress(event: KeyboardEvent) {
     if (event.ctrlKey && event.key === 's') {
       event.preventDefault();  // Prevent browser save dialog
       this.save();
     }
   }
   ```

4. **Debounce for API Calls**
   ```typescript
   import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
   
   searchInput = new FormControl('');
   
   ngOnInit() {
     this.searchInput.valueChanges.pipe(
       debounceTime(300),  // Wait 300ms after user stops typing
       distinctUntilChanged()
     ).subscribe(value => {
       this.search(value);
     });
   }
   ```

#### DON'Ts ❌

1. **Don't Use `(keypress)` - Deprecated**
   ```html
   <!-- Bad - deprecated -->
   <input (keypress)="handle()">
   
   <!-- Good -->
   <input (keyup)="handle()">
   ```

2. **Don't Make API Calls on Every Keystroke**
   ```typescript
   // Bad ❌
   onKeyUp(event: any) {
     this.apiService.search(event.target.value).subscribe();
     // API called for every letter!
   }
   
   // Good ✅ - Use debouncing
   searchSubject = new Subject<string>();
   
   ngOnInit() {
     this.searchSubject.pipe(
       debounceTime(300)
     ).subscribe(term => this.search(term));
   }
   ```

3. **Don't Forget to Check Key Values**
   ```typescript
   // Bad
   onKeyPress(event: any) {
     this.submit();  // Triggers on every key!
   }
   
   // Good
   onKeyPress(event: KeyboardEvent) {
     if (event.key === 'Enter') {
       this.submit();
     }
   }
   ```

---

### ❓ Interview Questions

#### Q1: What are the main keyboard events in Angular?

**Answer**: 

1. **`(keydown)`**: Fires when key is pressed (before character appears)
2. **`(keyup)`**: Fires when key is released (most common)
3. **`(keypress)`**: Deprecated, don't use

**Example**:
```html
<input (keydown)="onKeyDown($event)">  <!-- When key pressed -->
<input (keyup)="onKeyUp($event)">      <!-- When key released -->
```

**Best Practice**: Use `(keyup)` for most scenarios as it fires after the character is fully typed.

---

#### Q2: How do you detect specific keys like Enter or Escape?

**Answer**: Use Angular's key modifiers or check `event.key` property.

**Method 1: Angular Key Modifiers** (Recommended):
```html
<input (keydown.enter)="submit()">
<input (keydown.escape)="cancel()">
<input (keydown.space)="togglePlay()">
<div (keydown.arrowup)="moveUp()">
<div (keydown.arrowdown)="moveDown()">
```

**Method 2: Check event.key**:
```typescript
onKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    this.submit();
  } else if (event.key === 'Escape') {
    this.cancel();
  }
}
```

```html
<input (keydown)="onKeyPress($event)">
```

---

#### Q3: How do you implement keyboard shortcuts like Ctrl+S?

**Answer**: Check for modifier keys (`ctrlKey`, `shiftKey`, `altKey`) along with the specific key.

```typescript
export class AppComponent {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Ctrl + S
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.save();
      return false;
    }
    
    // Ctrl + Shift + D
    if (event.ctrlKey && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      this.debug();
    }
    
    // Alt + N
    if (event.altKey && event.key === 'n') {
      event.preventDefault();
      this.createNew();
    }
  }
  
  save() {
    console.log('Saving... 💾');
  }
  
  debug() {
    console.log('Debug mode activated! 🐛');
  }
  
  createNew() {
    console.log('Creating new item... ✨');
  }
}
```

**Modifier Properties**:
- `event.ctrlKey` - Ctrl key pressed?
- `event.shiftKey` - Shift key pressed?
- `event.altKey` - Alt key pressed?
- `event.metaKey` - Command/Windows key pressed?

---

#### Q4: What's the difference between `(keydown)` and `(keyup)`?

**Answer**:

| Feature | `(keydown)` | `(keyup)` |
|---------|------------|----------|
| **Fires** | When key is pressed | When key is released |
| **Timing** | Before character appears | After character appears |
| **Input value** | Doesn't include new character | Includes new character |
| **Use for** | Shortcuts, immediate response | Validation, search |

**Example**:
```typescript
export class AppComponent {
  onKeyDown(event: any) {
    console.log('Key down - Value:', event.target.value);
    // If you type 'A', shows old value (without 'A')
  }
  
  onKeyUp(event: any) {
    console.log('Key up - Value:', event.target.value);
    // If you type 'A', shows new value (with 'A')
  }
}
```

```html
<input (keydown)="onKeyDown($event)" placeholder="Key Down">
<input (keyup)="onKeyUp($event)" placeholder="Key Up">
```

---

#### Q5: How do you prevent default browser behavior in keyboard events?

**Answer**: Use `event.preventDefault()` method.

```typescript
export class AppComponent {
  onKeyPress(event: KeyboardEvent) {
    // Prevent browser's default Ctrl+S (Save dialog)
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();  // ← Prevents default
      this.customSave();
    }
    
    // Prevent form submission on Enter
    if (event.key === 'Enter') {
      event.preventDefault();
      this.customSubmit();
    }
  }
  
  customSave() {
    console.log('Custom save logic');
  }
  
  customSubmit() {
    console.log('Custom submit logic');
  }
}
```

---

#### Q6: How do you implement debouncing for search input?

**Answer**: Use RxJS operators `debounceTime` and `distinctUntilChanged`.

```typescript
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export class AppComponent implements OnInit {
  searchControl = new FormControl('');
  searchResults: any[] = [];
  
  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),           // Wait 300ms after user stops typing
      distinctUntilChanged()       // Only if value changed
    ).subscribe(searchTerm => {
      if (searchTerm && searchTerm.length > 2) {
        this.performSearch(searchTerm);
      }
    });
  }
  
  performSearch(term: string) {
    console.log('Searching for:', term);
    // API call here
  }
}
```

```html
<input [formControl]="searchControl" placeholder="Search...">
<div *ngFor="let result of searchResults">
  {{ result }}
</div>
```

**Benefits**:
- Reduces API calls
- Better performance
- Better user experience

---

#### Q7: How do you listen to keyboard events at the document level?

**Answer**: Use `@HostListener` decorator to listen to document-level events.

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Press any key, Ctrl+S, or Escape</h1>`
})
export class AppComponent {
  
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log('Key pressed globally:', event.key);
    
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.saveDocument();
    }
    
    if (event.key === 'Escape') {
      this.closeAllModals();
    }
  }
  
  saveDocument() {
    console.log('Document saved!');
  }
  
  closeAllModals() {
    console.log('All modals closed!');
  }
}
```

**Use Cases**:
- Global keyboard shortcuts
- Close modals on Escape (anywhere on page)
- Navigation shortcuts

---

#### Q8: What's the difference between `(input)` and `(keyup)` events?

**Answer**:

**`(keyup)`**: Keyboard-specific, fires only on keyboard input
```html
<input (keyup)="onKeyUp($event)">
<!-- Fires only when typing with keyboard -->
```

**`(input)`**: Fires on ANY input change (keyboard, paste, speech-to-text)
```html
<input (input)="onInput($event)">
<!-- Fires on: typing, paste, cut, speech input, autofill -->
```

**Recommendation**: Use `(input)` for detecting value changes, as it's more comprehensive.

```typescript
export class AppComponent {
  onInput(event: any) {
    console.log('Value changed:', event.target.value);
    // Works for all input methods!
  }
}
```

---

#### Q9: How do you get the typed character from a keyboard event?

**Answer**: Use `event.key` property (modern) or `event.target.value` for the full input value.

```typescript
export class AppComponent {
  onKeyPress(event: KeyboardEvent) {
    // Get the specific key pressed
    console.log('Key pressed:', event.key);
    
    // Examples:
    // 'a', 'b', 'Enter', 'Escape', 'ArrowUp', etc.
    
    if (event.key >= 'a' && event.key <= 'z') {
      console.log('Letter pressed:', event.key);
    }
    
    if (event.key >= '0' && event.key <= '9') {
      console.log('Number pressed:', event.key);
    }
  }
  
  onKeyUp(event: any) {
    // Get full input value
    console.log('Full value:', event.target.value);
  }
}
```

```html
<input (keydown)="onKeyPress($event)" (keyup)="onKeyUp($event)">
```

---

#### Q10: How do you implement "Enter to submit, Shift+Enter for new line" like in messaging apps?

**Answer**: Check for both `Enter` key and `shiftKey` modifier.

```typescript
export class AppComponent {
  message: string = '';
  
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Shift + Enter - Allow new line (default behavior)
        return;
      } else {
        // Just Enter - Submit message
        event.preventDefault();
        this.sendMessage();
      }
    }
  }
  
  sendMessage() {
    if (this.message.trim()) {
      console.log('Sending:', this.message);
      this.message = '';  // Clear after sending
    }
  }
}
```

```html
<textarea 
  [(ngModel)]="message"
  (keydown)="onKeyPress($event)"
  placeholder="Type message... (Enter to send, Shift+Enter for new line)"
  rows="3">
</textarea>
<button (click)="sendMessage()">Send</button>
```

---

**All bindings work together!** ✅

---

## 5. Event Object ($event)

### 📖 Definition

**`$event`** is a special Angular variable that represents the **Event Object** generated when an event occurs. It contains detailed information about the event, such as which element triggered it, mouse coordinates, key pressed, input value, and much more.

**In Simple Words**: `$event` is like a package of information that Angular gives you when something happens (click, keypress, input change, etc.). You can open this package to get details about what exactly happened.

**Real-Life Analogy**: Think of clicking "Order Placed" on Amazon - the `$event` contains details like: which button was clicked, at what time, mouse position, device used, etc.

### 📝 What Information Does $event Contain?

#### Common Event Properties

| Property | Description | Example |
|----------|-------------|---------|
| `$event.type` | Type of event | `"click"`, `"keyup"`, `"input"` |
| `$event.target` | Element that triggered event | `<button>`, `<input>` |
| `$event.target.value` | Value of input element | Text from input field |
| `$event.key` | Key pressed (keyboard events) | `"Enter"`, `"a"`, `"Escape"` |
| `$event.keyCode` | Numeric key code (deprecated) | `13` (Enter), `27` (Escape) |
| `$event.ctrlKey` | Was Ctrl pressed? | `true` / `false` |
| `$event.shiftKey` | Was Shift pressed? | `true` / `false` |
| `$event.altKey` | Was Alt pressed? | `true` / `false` |
| `$event.clientX` | Mouse X position | `450` |
| `$event.clientY` | Mouse Y position | `320` |
| `$event.button` | Which mouse button? | `0` (left), `1` (middle), `2` (right) |
| `$event.preventDefault()` | Prevent default behavior | Method |
| `$event.stopPropagation()` | Stop event bubbling | Method |

---

### 📝 Syntax and Examples

#### Example 1: Accessing Input Value

**TypeScript**:
```typescript
export class AppComponent {
  userName: string = '';
  
  onInputChange(event: any) {
    this.userName = event.target.value;
    console.log('User typed:', this.userName);
    console.log('Event type:', event.type);  // "input"
  }
}
```

**HTML**:
```html
<div>
  <label>Enter your name:</label>
  <input 
    type="text" 
    (input)="onInputChange($event)"
    placeholder="Type here...">
  
  <p>Welcome, {{ userName }}!</p>
</div>
```

**Output**: As you type "Rahul", it displays "Welcome, Rahul!"

---

#### Example 2: Mouse Position Tracker

**TypeScript**:
```typescript
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  clickCount: number = 0;
  buttonClicked: string = '';
  
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onClick(event: MouseEvent) {
    this.clickCount++;
    
    // Detect which mouse button was clicked
    if (event.button === 0) {
      this.buttonClicked = 'Left Click';
    } else if (event.button === 1) {
      this.buttonClicked = 'Middle Click';
    } else if (event.button === 2) {
      this.buttonClicked = 'Right Click';
    }
    
    console.log(`Clicked at X: ${event.clientX}, Y: ${event.clientY}`);
  }
}
```

**HTML**:
```html
<div 
  class="mouse-tracker"
  (mousemove)="onMouseMove($event)"
  (click)="onClick($event)"
  style="height: 300px; border: 2px solid blue;">
  
  <h2>Mouse Tracker</h2>
  <p>Mouse Position: X = {{ mouseX }}, Y = {{ mouseY }}</p>
  <p>Click Count: {{ clickCount }}</p>
  <p>Last Button: {{ buttonClicked }}</p>
  <p><em>Move your mouse and click inside this box!</em></p>
</div>
```

---

#### Example 3: Keyboard Event Details

**TypeScript**:
```typescript
export class AppComponent {
  keyPressed: string = '';
  keyCode: number = 0;
  isCtrlPressed: boolean = false;
  isShiftPressed: boolean = false;
  isAltPressed: boolean = false;
  
  onKeyPress(event: KeyboardEvent) {
    this.keyPressed = event.key;
    this.keyCode = event.keyCode;
    this.isCtrlPressed = event.ctrlKey;
    this.isShiftPressed = event.shiftKey;
    this.isAltPressed = event.altKey;
    
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('Ctrl:', event.ctrlKey);
    console.log('Shift:', event.shiftKey);
    console.log('Alt:', event.altKey);
  }
}
```

**HTML**:
```html
<div class="keyboard-demo">
  <h2>Press any key!</h2>
  
  <input 
    type="text" 
    (keydown)="onKeyPress($event)"
    placeholder="Click here and press keys...">
  
  <div class="key-info">
    <p>Key Pressed: <strong>{{ keyPressed }}</strong></p>
    <p>Key Code: <strong>{{ keyCode }}</strong></p>
    <p>Ctrl: <span [style.color]="isCtrlPressed ? 'green' : 'red'">
      {{ isCtrlPressed ? '✅ Yes' : '❌ No' }}
    </span></p>
    <p>Shift: <span [style.color]="isShiftPressed ? 'green' : 'red'">
      {{ isShiftPressed ? '✅ Yes' : '❌ No' }}
    </span></p>
    <p>Alt: <span [style.color]="isAltPressed ? 'green' : 'red'">
      {{ isAltPressed ? '✅ Yes' : '❌ No' }}
    </span></p>
  </div>
</div>
```

---

#### Example 4: Preventing Default Behavior

**TypeScript**:
```typescript
export class AppComponent {
  formData: string = '';
  
  onFormSubmit(event: Event) {
    event.preventDefault();  // ← Prevents page reload!
    console.log('Form submitted without page refresh!');
    console.log('Form data:', this.formData);
    
    // Process form here
    alert('Form submitted: ' + this.formData);
  }
  
  onLinkClick(event: Event) {
    event.preventDefault();  // ← Prevents navigation!
    console.log('Link clicked but navigation prevented');
    alert('You clicked the link, but we prevented navigation!');
  }
}
```

**HTML**:
```html
<div>
  <h2>Prevent Default Demo</h2>
  
  <!-- Form without page reload -->
  <form (submit)="onFormSubmit($event)">
    <input 
      type="text" 
      [(ngModel)]="formData"
      placeholder="Enter something...">
    <button type="submit">Submit (No Reload!)</button>
  </form>
  
  <hr>
  
  <!-- Link without navigation -->
  <a href="https://google.com" (click)="onLinkClick($event)">
    Click me (Won't navigate to Google)
  </a>
</div>
```

---

#### Example 5: Stopping Event Bubbling

**TypeScript**:
```typescript
export class AppComponent {
  parentClicked: boolean = false;
  childClicked: boolean = false;
  
  onParentClick() {
    this.parentClicked = true;
    console.log('Parent div clicked!');
    alert('Parent clicked!');
  }
  
  onChildClick(event: Event) {
    event.stopPropagation();  // ← Stops event from reaching parent!
    this.childClicked = true;
    console.log('Child button clicked!');
    alert('Child clicked! (Parent will not receive this event)');
  }
}
```

**HTML**:
```html
<div class="bubbling-demo">
  <h2>Event Bubbling Demo</h2>
  
  <div 
    (click)="onParentClick()"
    style="padding: 30px; background: lightblue;">
    <p>Parent Div (Click me!)</p>
    
    <button 
      (click)="onChildClick($event)"
      style="padding: 10px;">
      Child Button (Click me - parent won't trigger!)
    </button>
  </div>
  
  <p>Parent clicked: {{ parentClicked ? '✅ Yes' : '❌ No' }}</p>
  <p>Child clicked: {{ childClicked ? '✅ Yes' : '❌ No' }}</p>
</div>
```

**Behavior**:
- **Without `stopPropagation()`**: Both child and parent events fire
- **With `stopPropagation()`**: Only child event fires

---

#### Example 6: Checkbox Checked State

**TypeScript**:
```typescript
export class AppComponent {
  isChecked: boolean = false;
  termsAccepted: boolean = false;
  
  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
    console.log('Checkbox is:', this.isChecked ? 'Checked ✅' : 'Unchecked ❌');
  }
  
  onTermsChange(event: any) {
    this.termsAccepted = event.target.checked;
  }
}
```

**HTML**:
```html
<div class="checkbox-demo">
  <h2>Checkbox Demo</h2>
  
  <label>
    <input 
      type="checkbox" 
      (change)="onCheckboxChange($event)">
    Subscribe to newsletter
  </label>
  <p>Status: {{ isChecked ? '✅ Subscribed' : '❌ Not Subscribed' }}</p>
  
  <hr>
  
  <label>
    <input 
      type="checkbox" 
      (change)="onTermsChange($event)">
    I accept terms and conditions
  </label>
  
  <button [disabled]="!termsAccepted">
    {{ termsAccepted ? 'Submit ✅' : 'Accept Terms First ❌' }}
  </button>
</div>
```

---

### 🎯 Use Cases

1. **Form Handling**: Get input values, checkbox states
2. **Mouse Tracking**: Track mouse position, clicks, drag-and-drop
3. **Keyboard Shortcuts**: Detect Ctrl+S, Ctrl+P, etc.
4. **Preventing Defaults**: Stop form submission, link navigation
5. **Event Bubbling Control**: Stop events from reaching parent elements
6. **Dropdown Selection**: Get selected option value
7. **File Upload**: Access selected files
8. **Custom Events**: Extract data from custom component events

---

### ✅ Best Practices

#### DO's ✅

1. **Use TypeScript Types for Events**
   ```typescript
   // Good ✅
   onClick(event: MouseEvent) {
     console.log(event.clientX, event.clientY);
   }
   
   onKeyPress(event: KeyboardEvent) {
     console.log(event.key);
   }
   
   onChange(event: Event) {
     const target = event.target as HTMLInputElement;
     console.log(target.value);
   }
   ```

2. **Prevent Default When Needed**
   ```typescript
   onSubmit(event: Event) {
     event.preventDefault();  // Prevent page reload
     this.processForm();
   }
   ```

3. **Stop Propagation to Avoid Unwanted Triggers**
   ```typescript
   onChildClick(event: Event) {
     event.stopPropagation();  // Don't trigger parent
     this.handleChild();
   }
   ```

4. **Access Event Properties Safely**
   ```typescript
   onInput(event: Event) {
     const input = event.target as HTMLInputElement;
     if (input && input.value) {
       this.processValue(input.value);
     }
   }
   ```

#### DON'Ts ❌

1. **Don't Use `any` Type Unnecessarily**
   ```typescript
   // Bad ❌
   onClick(event: any) {
     console.log(event.clientX);
   }
   
   // Good ✅
   onClick(event: MouseEvent) {
     console.log(event.clientX);
   }
   ```

2. **Don't Forget to Prevent Defaults**
   ```typescript
   // Bad ❌ - Page will reload
   onFormSubmit(event: Event) {
     this.saveData();
   }
   
   // Good ✅
   onFormSubmit(event: Event) {
     event.preventDefault();  // Prevent reload
     this.saveData();
   }
   ```

3. **Don't Use Deprecated Properties**
   ```typescript
   // Bad ❌
   onKeyPress(event: KeyboardEvent) {
     if (event.keyCode === 13) { }  // keyCode is deprecated
   }
   
   // Good ✅
   onKeyPress(event: KeyboardEvent) {
     if (event.key === 'Enter') { }  // Use 'key' property
   }
   ```

---

### 🔄 Differences

#### $event vs Direct Method Call

| Approach | When to Use | Example |
|----------|------------|---------|
| **With $event** | Need event details | `(click)="handler($event)"` |
| **Without $event** | Simple logic | `(click)="handler()"` |

**Example**:
```typescript
export class AppComponent {
  // Without $event - simple
  incrementCounter() {
    this.counter++;
  }
  
  // With $event - need event info
  handleClick(event: MouseEvent) {
    console.log('Clicked at:', event.clientX, event.clientY);
    this.counter++;
  }
}
```

```html
<!-- Simple - no event details needed -->
<button (click)="incrementCounter()">+1</button>

<!-- Complex - need event details -->
<button (click)="handleClick($event)">Click Here</button>
```

---

### ❓ Interview Questions

#### Q1: What is $event in Angular?

**Answer**: `$event` is a special Angular variable that represents the Event Object generated when an event occurs. It contains information about the event like target element, mouse position, key pressed, etc.

**Example**:
```typescript
export class AppComponent {
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('User typed:', inputElement.value);
    console.log('Event type:', event.type);  // "input"
  }
}
```

```html
<input (input)="onInput($event)" placeholder="Type here">
```

`$event` gives you access to the full Event Object with all its properties and methods.

---

#### Q2: How do you get the value of an input field using $event?

**Answer**: Access `event.target.value` property.

```typescript
export class AppComponent {
  userInput: string = '';
  
  onInputChange(event: any) {
    this.userInput = event.target.value;
    console.log('Current value:', this.userInput);
  }
}
```

```html
<input (input)="onInputChange($event)" placeholder="Type something">
<p>You typed: {{ userInput }}</p>
```

**Typed Version** (Better):
```typescript
onInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
  this.userInput = target.value;
}
```

---

#### Q3: What's the difference between event.preventDefault() and event.stopPropagation()?

**Answer**:

**`event.preventDefault()`**: Prevents the default browser behavior
```typescript
onFormSubmit(event: Event) {
  event.preventDefault();  // Stops page reload on form submit
  this.handleSubmit();
}

onLinkClick(event: Event) {
  event.preventDefault();  // Stops navigation on link click
  this.customNavigation();
}
```

**`event.stopPropagation()`**: Stops event from bubbling up to parent elements
```typescript
onParentClick() {
  console.log('Parent clicked');
}

onChildClick(event: Event) {
  event.stopPropagation();  // Parent's click won't trigger
  console.log('Only child clicked');
}
```

```html
<div (click)="onParentClick()">
  <button (click)="onChildClick($event)">Click (parent won't fire)</button>
</div>
```

---

#### Q4: How do you detect which mouse button was clicked?

**Answer**: Use `event.button` property.

```typescript
export class AppComponent {
  buttonName: string = '';
  
  onMouseClick(event: MouseEvent) {
    switch(event.button) {
      case 0:
        this.buttonName = 'Left Click 🖱️';
        break;
      case 1:
        this.buttonName = 'Middle Click (Scroll) 🖱️';
        break;
      case 2:
        this.buttonName = 'Right Click 🖱️';
        break;
    }
    
    console.log('Button clicked:', this.buttonName);
  }
}
```

```html
<div (click)="onMouseClick($event)">
  Click with any mouse button!
  <p>{{ buttonName }}</p>
</div>
```

**Values**:
- `0` = Left button
- `1` = Middle button (scroll wheel)
- `2` = Right button

---

#### Q5: How do you get mouse coordinates from a click event?

**Answer**: Use `event.clientX` and `event.clientY` properties.

```typescript
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  clickHistory: string[] = [];
  
  onClick(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    
    this.clickHistory.push(`Clicked at (${this.mouseX}, ${this.mouseY})`);
    
    console.log('X:', event.clientX);
    console.log('Y:', event.clientY);
    console.log('Page X:', event.pageX);
    console.log('Page Y:', event.pageY);
  }
}
```

```html
<div 
  (click)="onClick($event)"
  style="height: 400px; border: 2px solid blue;">
  Click anywhere inside this box!
  <p>Last click position: X = {{ mouseX }}, Y = {{ mouseY }}</p>
  
  <ul>
    <li *ngFor="let click of clickHistory">{{ click }}</li>
  </ul>
</div>
```

**Available Properties**:
- `clientX`, `clientY`: Relative to viewport
- `pageX`, `pageY`: Relative to entire document
- `screenX`, `screenY`: Relative to screen
- `offsetX`, `offsetY`: Relative to target element

---

#### Q6: How do you check if Ctrl, Shift, or Alt keys were pressed during a click?

**Answer**: Use `event.ctrlKey`, `event.shiftKey`, and `event.altKey` properties.

```typescript
export class AppComponent {
  message: string = '';
  
  onClick(event: MouseEvent) {
    if (event.ctrlKey) {
      this.message = 'Ctrl + Click detected! 🎯';
    } else if (event.shiftKey) {
      this.message = 'Shift + Click detected! ⬆️';
    } else if (event.altKey) {
      this.message = 'Alt + Click detected! 🔄';
    } else if (event.ctrlKey && event.shiftKey) {
      this.message = 'Ctrl + Shift + Click! 🚀';
    } else {
      this.message = 'Regular click';
    }
  }
}
```

```html
<button (click)="onClick($event)">
  Click with modifier keys (Ctrl, Shift, Alt)
</button>
<p>{{ message }}</p>
```

---

#### Q7: What event properties are available for keyboard events?

**Answer**: 

```typescript
export class AppComponent {
  onKeyPress(event: KeyboardEvent) {
    console.log('Key:', event.key);              // "a", "Enter", "Escape"
    console.log('Code:', event.code);            // "KeyA", "Enter", "Escape"
    console.log('Key Code:', event.keyCode);     // Deprecated!
    console.log('Ctrl:', event.ctrlKey);         // true/false
    console.log('Shift:', event.shiftKey);       // true/false
    console.log('Alt:', event.altKey);           // true/false
    console.log('Meta:', event.metaKey);         // Windows/Command key
    console.log('Repeat:', event.repeat);        // true if key held down
  }
}
```

```html
<input (keydown)="onKeyPress($event)" placeholder="Press any key">
```

**Best Practice**: Use `event.key` instead of deprecated `event.keyCode`.

---

#### Q8: How do you access the target element from an event?

**Answer**: Use `event.target` property and cast it to the appropriate type.

```typescript
export class AppComponent {
  onEvent(event: Event) {
    const element = event.target as HTMLElement;
    console.log('Tag name:', element.tagName);
    console.log('ID:', element.id);
    console.log('Class:', element.className);
    
    // For input elements
    if (element instanceof HTMLInputElement) {
      console.log('Input value:', element.value);
    }
    
    // For select elements
    if (element instanceof HTMLSelectElement) {
      console.log('Selected option:', element.value);
    }
  }
  
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Current value:', input.value);
    console.log('Input type:', input.type);
    console.log('Is disabled:', input.disabled);
  }
}
```

```html
<input (input)="onInputChange($event)" id="myInput" class="form-control">
<select (change)="onEvent($event)">
  <option>Option 1</option>
</select>
```

---

#### Q9: Can you pass both $event and other parameters to a method?

**Answer**: Yes! You can pass `$event` along with other parameters.

```typescript
export class AppComponent {
  handleClick(userName: string, userId: number, event: MouseEvent) {
    console.log('User:', userName);
    console.log('User ID:', userId);
    console.log('Clicked at:', event.clientX, event.clientY);
    
    if (event.ctrlKey) {
      console.log('Ctrl was held!');
    }
  }
  
  logInput(fieldName: string, event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(`${fieldName}:`, input.value);
  }
}
```

```html
<!-- Multiple parameters with $event -->
<button (click)="handleClick('Rahul', 123, $event)">
  Click Me
</button>

<!-- Field name + event -->
<input (input)="logInput('username', $event)" placeholder="Username">
<input (input)="logInput('email', $event)" placeholder="Email">
```

**Important**: `$event` should typically be the last parameter.

---

#### Q10: What's the difference between event.target and event.currentTarget?

**Answer**:

**`event.target`**: The element that triggered the event (can be a child)
**`event.currentTarget`**: The element that the event listener is attached to

```typescript
export class AppComponent {
  showDifference(event: Event) {
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;
    
    console.log('target (clicked element):', target.tagName);
    console.log('currentTarget (listener element):', currentTarget.tagName);
  }
}
```

```html
<div (click)="showDifference($event)" class="parent">
  <p>Paragraph inside div</p>
  <button>Button inside div</button>
</div>
```

**If you click the paragraph**:
- `event.target` = `<p>` (what you clicked)
- `event.currentTarget` = `<div>` (where listener is attached)

**If you click the button**:
- `event.target` = `<button>` (what you clicked)
- `event.currentTarget` = `<div>` (where listener is attached)

---

## 6. Two-Way Data Binding

### 📖 Definition

**Two-Way Data Binding** is a powerful feature that automatically synchronizes data between the component class (TypeScript) and the view (HTML). When the user changes data in the view, it updates the component, and when the component data changes, it updates the view automatically.

**In Simple Words**: Two-way binding creates a connection where changes flow in **both directions** - from component to view AND from view to component. It's like a two-way street! 🔄

**Syntax**: `[(ngModel)]="propertyName"` - Known as **"Banana in a Box"** 🍌📦

**Real-Life Analogy**: Think of a Google Doc - when you type, it automatically saves (view → server), and when someone else types, you see it instantly (server → view). That's two-way binding!

---

### 📝 Why "Banana in a Box"?

```
[( )] - Looks like a banana [(  )] inside a box [  ]!
```

- **`[ ]`** = Property Binding (Component → View)
- **`( )`** = Event Binding (View → Component)
- **`[( )]`** = Two-Way Binding (Both directions!)

---

### 🔧 Setup Required

**Step 1**: Import `FormsModule` in your component

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ← Import this!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // ← Add here!
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = '';
}
```

**For NgModule-based apps**, add to `app.module.ts`:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // ← Add here
  ]
})
export class AppModule { }
```

---

### 📝 Syntax and Examples

#### Example 1: Simple Input Field (Real-time Update)

**TypeScript**:
```typescript
export class AppComponent {
  userName: string = '';
  age: number = 0;
  email: string = '';
}
```

**HTML**:
```html
<div class="user-form">
  <h2>User Registration</h2>
  
  <!-- Two-way binding with ngModel -->
  <label>Enter your name:</label>
  <input type="text" [(ngModel)]="userName" placeholder="Your name">
  
  <label>Enter your age:</label>
  <input type="number" [(ngModel)]="age">
  
  <label>Enter your email:</label>
  <input type="email" [(ngModel)]="email" placeholder="you@example.com">
  
  <hr>
  
  <h3>Live Preview:</h3>
  <p><strong>Name:</strong> {{ userName || 'Not entered yet' }}</p>
  <p><strong>Age:</strong> {{ age }}</p>
  <p><strong>Email:</strong> {{ email || 'Not entered yet' }}</p>
</div>
```

**Output**: As you type in the input fields, the preview updates automatically in real-time!

---

#### Example 2: Checkbox Two-Way Binding

**TypeScript**:
```typescript
export class AppComponent {
  isSubscribed: boolean = false;
  termsAccepted: boolean = false;
  receiveEmails: boolean = true;
  
  get canSubmit(): boolean {
    return this.termsAccepted;
  }
}
```

**HTML**:
```html
<div class="checkbox-demo">
  <h2>Subscription Form</h2>
  
  <label>
    <input type="checkbox" [(ngModel)]="isSubscribed">
    Subscribe to newsletter
  </label>
  <p>Status: {{ isSubscribed ? '✅ Subscribed' : '❌ Not Subscribed' }}</p>
  
  <hr>
  
  <label>
    <input type="checkbox" [(ngModel)]="receiveEmails">
    Receive email notifications
  </label>
  <p>{{ receiveEmails ? '📧 You will receive emails' : '🔕 Emails disabled' }}</p>
  
  <hr>
  
  <label>
    <input type="checkbox" [(ngModel)]="termsAccepted">
    I accept terms and conditions *
  </label>
  
  <button [disabled]="!canSubmit">
    {{ canSubmit ? 'Submit ✅' : 'Please accept terms ❌' }}
  </button>
</div>
```

---

#### Example 3: Radio Buttons (Gender Selection)

**TypeScript**:
```typescript
export class AppComponent {
  selectedGender: string = '';
  
  get genderIcon(): string {
    if (this.selectedGender === 'male') return '👨';
    if (this.selectedGender === 'female') return '👩';
    if (this.selectedGender === 'other') return '🧑';
    return '❓';
  }
}
```

**HTML**:
```html
<div class="gender-selection">
  <h2>Select Gender</h2>
  
  <label>
    <input type="radio" name="gender" value="male" [(ngModel)]="selectedGender">
    Male
  </label>
  
  <label>
    <input type="radio" name="gender" value="female" [(ngModel)]="selectedGender">
    Female
  </label>
  
  <label>
    <input type="radio" name="gender" value="other" [(ngModel)]="selectedGender">
    Other
  </label>
  
  <p>Selected: <strong>{{ selectedGender || 'None' }}</strong> {{ genderIcon }}</p>
</div>
```

---

#### Example 4: Dropdown/Select (Country Selection)

**TypeScript**:
```typescript
export class AppComponent {
  selectedCountry: string = '';
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia', 'Japan'];
  
  selectedColor: string = '#3498db';
}
```

**HTML**:
```html
<div class="dropdown-demo">
  <h2>Select Your Country</h2>
  
  <select [(ngModel)]="selectedCountry">
    <option value="">-- Choose Country --</option>
    <option *ngFor="let country of countries" [value]="country">
      {{ country }}
    </option>
  </select>
  
  <p>You selected: <strong>{{ selectedCountry || 'Nothing yet' }}</strong></p>
  
  <hr>
  
  <h2>Pick a Color</h2>
  <select [(ngModel)]="selectedColor">
    <option value="#3498db">Blue</option>
    <option value="#e74c3c">Red</option>
    <option value="#2ecc71">Green</option>
    <option value="#f39c12">Orange</option>
  </select>
  
  <div [style.background]="selectedColor" style="width: 100px; height: 100px; margin-top: 10px;">
  </div>
  <p>Color: {{ selectedColor }}</p>
</div>
```

---

#### Example 5: Textarea with Character Counter

**TypeScript**:
```typescript
export class AppComponent {
  userMessage: string = '';
  maxLength: number = 200;
  
  get remainingChars(): number {
    return this.maxLength - this.userMessage.length;
  }
  
  get isOverLimit(): boolean {
    return this.userMessage.length > this.maxLength;
  }
}
```

**HTML**:
```html
<div class="textarea-demo">
  <h2>Write a Message (Max {{ maxLength }} chars)</h2>
  
  <textarea 
    [(ngModel)]="userMessage"
    rows="5"
    placeholder="Type your message here..."
    [style.border-color]="isOverLimit ? 'red' : 'green'">
  </textarea>
  
  <p [style.color]="isOverLimit ? 'red' : 'green'">
    {{ remainingChars }} characters remaining
    {{ isOverLimit ? ' ⚠️ Over limit!' : ' ✅' }}
  </p>
  
  <h3>Live Preview:</h3>
  <div class="message-preview">
    {{ userMessage || 'Your message will appear here...' }}
  </div>
</div>
```

---

#### Example 6: Complete Login Form

**TypeScript**:
```typescript
export class AppComponent {
  loginForm = {
    username: '',
    password: '',
    rememberMe: false
  };
  
  onLogin() {
    console.log('Login Data:', this.loginForm);
    
    if (this.loginForm.username && this.loginForm.password) {
      alert(`Welcome, ${this.loginForm.username}!`);
    } else {
      alert('Please fill all fields!');
    }
  }
  
  resetForm() {
    this.loginForm = {
      username: '',
      password: '',
      rememberMe: false
    };
  }
}
```

**HTML**:
```html
<div class="login-form">
  <h2>Login</h2>
  
  <div class="form-group">
    <label>Username:</label>
    <input 
      type="text" 
      [(ngModel)]="loginForm.username"
      placeholder="Enter username">
  </div>
  
  <div class="form-group">
    <label>Password:</label>
    <input 
      type="password" 
      [(ngModel)]="loginForm.password"
      placeholder="Enter password">
  </div>
  
  <label>
    <input type="checkbox" [(ngModel)]="loginForm.rememberMe">
    Remember me
  </label>
  
  <div class="buttons">
    <button (click)="onLogin()">Login</button>
    <button (click)="resetForm()">Reset</button>
  </div>
  
  <hr>
  
  <h3>Form Data (Live):</h3>
  <pre>{{ loginForm | json }}</pre>
</div>
```

---

### 🎯 Use Cases

1. **Forms**: Login, registration, search, feedback
2. **Settings**: Theme toggle, language selection, notifications
3. **Filters**: E-commerce filters, sorting, search
4. **Real-time Preview**: Markdown editors, color pickers
5. **Chat Applications**: Message input
6. **Surveys/Polls**: Questionnaires, feedback forms
7. **Configuration**: User preferences, dashboard settings

---

### ✅ Best Practices

#### DO's ✅

1. **Import FormsModule**
   ```typescript
   import { FormsModule } from '@angular/forms';
   
   @Component({
     imports: [FormsModule]  // Standalone
   })
   ```

2. **Use Meaningful Variable Names**
   ```typescript
   // Good ✅
   userName: string = '';
   userEmail: string = '';
   isSubscribed: boolean = false;
   
   // Bad ❌
   name1: string = '';
   data: any;
   flag: boolean = false;
   ```

3. **Initialize Properties**
   ```typescript
   // Good ✅
   userName: string = '';
   age: number = 0;
   
   // Avoid
   userName: string;  // undefined initially
   ```

4. **Use for Simple Forms**
   ```html
   <!-- Good for simple forms -->
   <input [(ngModel)]="searchQuery">
   ```

#### DON'Ts ❌

1. **Don't Forget FormsModule Import**
   ```typescript
   // ❌ Error: Can't bind to 'ngModel' since it isn't a known property
   // Solution: Import FormsModule!
   ```

2. **Don't Use for Complex Forms**
   ```typescript
   // Bad ❌ - Use Reactive Forms instead for complex validation
   <form>
     <input [(ngModel)]="field1">
     <input [(ngModel)]="field2">
     // ... 50 more fields
   </form>
   
   // Good ✅ - Use Reactive Forms
   import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
   ```

3. **Don't Mix ngModel with Reactive Forms**
   ```html
   <!-- Bad ❌ -->
   <form [formGroup]="myForm">
     <input [(ngModel)]="name">  <!-- Don't mix! -->
   </form>
   ```

---

### 🔄 Differences

#### One-Way vs Two-Way Binding

| Feature | One-Way Binding | Two-Way Binding |
|---------|----------------|-----------------|
| **Syntax** | `[property]` or `(event)` | `[(ngModel)]` |
| **Direction** | Single direction | Both directions |
| **Data Flow** | Component → View OR View → Component | Component ↔ View |
| **Module** | Not required | `FormsModule` required |
| **Use Case** | Display data, handle events | Form inputs, real-time sync |

**One-Way Binding Example**:
```typescript
export class AppComponent {
  name: string = 'John';
  
  updateName(event: any) {
    this.name = event.target.value;
  }
}
```

```html
<!-- Property Binding: Component → View -->
<input [value]="name">

<!-- Event Binding: View → Component -->
<input (input)="updateName($event)">

<!-- Both combined (manual two-way) -->
<input [value]="name" (input)="updateName($event)">
```

**Two-Way Binding Example**:
```html
<!-- Automatic two-way binding -->
<input [(ngModel)]="name">
```

---

#### Template-Driven Forms vs Reactive Forms

| Feature | Template-Driven (ngModel) | Reactive Forms |
|---------|-------------------------|----------------|
| **Syntax** | `[(ngModel)]` | `[formControl]`, `formControlName` |
| **Module** | `FormsModule` | `ReactiveFormsModule` |
| **Validation** | In template | In component class |
| **Complex Logic** | ❌ Difficult | ✅ Easy |
| **Best For** | Simple forms | Complex forms |
| **Testability** | Harder to test | Easier to test |

**Template-Driven**:
```html
<input [(ngModel)]="username" required minlength="3">
```

**Reactive Forms**:
```typescript
username = new FormControl('', [Validators.required, Validators.minLength(3)]);
```

```html
<input [formControl]="username">
```

---

### ❓ Interview Questions

#### Q1: What is two-way data binding in Angular?

**Answer**: Two-way data binding is a mechanism that automatically synchronizes data between the component class and the view. Changes in the view update the component, and changes in the component update the view.

**Syntax**: `[(ngModel)]="propertyName"`

**Example**:
```typescript
export class AppComponent {
  name: string = '';
}
```

```html
<input [(ngModel)]="name" placeholder="Enter name">
<p>Hello, {{ name }}!</p>
```

**Data Flow**: Component ↔ View (bidirectional)

---

#### Q2: Why is `[(ngModel)]` called "Banana in a Box"?

**Answer**: The syntax `[(ngModel)]` visually looks like a banana `()` inside a box `[]`, hence "Banana in a Box"! 🍌📦

**Breakdown**:
- `[]` - Property binding (Component → View)
- `()` - Event binding (View → Component)
- `[()]` - Two-way binding (Both directions)

```html
<!-- Banana in a box! -->
<input [(ngModel)]="username">

<!-- Is equivalent to: -->
<input 
  [ngModel]="username"           ← Property binding []
  (ngModelChange)="username=$event">  ← Event binding ()
```

---

#### Q3: What module is required for `[(ngModel)]` to work?

**Answer**: `FormsModule` must be imported.

**Standalone Component**:
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ← Import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // ← Add here
  template: `<input [(ngModel)]="name">`
})
export class AppComponent {
  name: string = '';
}
```

**NgModule-based App** (app.module.ts):
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule]  // ← Add here
})
export class AppModule { }
```

**Error without FormsModule**:
```
Can't bind to 'ngModel' since it isn't a known property of 'input'.
```

---

#### Q4: What's the difference between `[(ngModel)]` and `[value]`?

**Answer**:

**`[(ngModel)]`**: Two-way binding (bidirectional)
```html
<input [(ngModel)]="name">
<!-- Updates component when user types -->
<!-- Updates view when component changes -->
```

**`[value]`**: One-way property binding (Component → View only)
```html
<input [value]="name">
<!-- Only displays value from component -->
<!-- User typing doesn't update component -->
```

**Example**:
```typescript
export class AppComponent {
  name: string = 'John';
  
  changeName() {
    this.name = 'Jane';
  }
}
```

```html
<!-- ngModel: User can type AND component updates work -->
<input [(ngModel)]="name">

<!-- value: User can type but component doesn't know! -->
<input [value]="name">  <!-- Typing won't update 'name' variable -->

<button (click)="changeName()">Change Name</button>
<p>{{ name }}</p>
```

---

#### Q5: How do you implement two-way binding manually without ngModel?

**Answer**: Combine property binding `[value]` with event binding `(input)`.

**Using ngModel** (Short way):
```html
<input [(ngModel)]="username">
```

**Manual Implementation** (Without ngModel):
```typescript
export class AppComponent {
  username: string = '';
  
  onInputChange(event: any) {
    this.username = event.target.value;
  }
}
```

```html
<input 
  [value]="username"                ← Property binding (Component → View)
  (input)="onInputChange($event)">  ← Event binding (View → Component)

<p>Username: {{ username }}</p>
```

**Both are equivalent!** ngModel is just syntactic sugar that combines `[value]` and `(input)`.

---

#### Q6: Can you use `[(ngModel)]` with checkboxes and radio buttons?

**Answer**: Yes! `[(ngModel)]` works with all form elements.

**Checkboxes** (boolean):
```typescript
export class AppComponent {
  isSubscribed: boolean = false;
  termsAccepted: boolean = false;
}
```

```html
<label>
  <input type="checkbox" [(ngModel)]="isSubscribed">
  Subscribe to newsletter
</label>
<p>{{ isSubscribed ? '✅ Subscribed' : '❌ Not Subscribed' }}</p>

<label>
  <input type="checkbox" [(ngModel)]="termsAccepted">
  Accept terms
</label>
```

**Radio Buttons** (string value):
```typescript
export class AppComponent {
  selectedGender: string = '';
}
```

```html
<label>
  <input type="radio" name="gender" value="male" [(ngModel)]="selectedGender">
  Male
</label>
<label>
  <input type="radio" name="gender" value="female" [(ngModel)]="selectedGender">
  Female
</label>
<p>Selected: {{ selectedGender }}</p>
```

---

#### Q7: When should you use Template-Driven Forms (ngModel) vs Reactive Forms?

**Answer**:

**Use Template-Driven Forms (ngModel)**:
- ✅ Simple forms with few fields
- ✅ Quick prototypes
- ✅ Basic validation
- ✅ Small applications

**Use Reactive Forms**:
- ✅ Complex forms with many fields
- ✅ Dynamic validation
- ✅ Cross-field validation
- ✅ Better testability
- ✅ Enterprise applications

**Template-Driven Example**:
```html
<input [(ngModel)]="email" type="email" required>
```

**Reactive Forms Example**:
```typescript
export class AppComponent {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
}
```

```html
<input [formControl]="emailControl">
```

---

#### Q8: Can you bind to nested object properties with ngModel?

**Answer**: Yes! You can bind to nested properties.

```typescript
export class AppComponent {
  user = {
    name: '',
    address: {
      street: '',
      city: '',
      zip: ''
    },
    contact: {
      email: '',
      phone: ''
    }
  };
}
```

```html
<h2>User Form</h2>

<input [(ngModel)]="user.name" placeholder="Name">

<h3>Address</h3>
<input [(ngModel)]="user.address.street" placeholder="Street">
<input [(ngModel)]="user.address.city" placeholder="City">
<input [(ngModel)]="user.address.zip" placeholder="ZIP">

<h3>Contact</h3>
<input [(ngModel)]="user.contact.email" placeholder="Email">
<input [(ngModel)]="user.contact.phone" placeholder="Phone">

<hr>
<h3>Live Data:</h3>
<pre>{{ user | json }}</pre>
```

---

#### Q9: How do you reset a form bound with ngModel?

**Answer**: Simply reset the bound properties to their initial values.

```typescript
export class AppComponent {
  formData = {
    username: '',
    email: '',
    password: '',
    termsAccepted: false
  };
  
  submitForm() {
    console.log('Form submitted:', this.formData);
    this.resetForm();
  }
  
  resetForm() {
    this.formData = {
      username: '',
      email: '',
      password: '',
      termsAccepted: false
    };
  }
}
```

```html
<form>
  <input [(ngModel)]="formData.username" name="username">
  <input [(ngModel)]="formData.email" name="email">
  <input [(ngModel)]="formData.password" name="password" type="password">
  <input [(ngModel)]="formData.termsAccepted" type="checkbox">
  
  <button type="button" (click)="submitForm()">Submit</button>
  <button type="button" (click)="resetForm()">Reset</button>
</form>
```

---

#### Q10: What are the performance considerations with two-way binding?

**Answer**:

**Advantages**:
- ✅ Simpler code, less boilerplate
- ✅ Automatic synchronization
- ✅ Easier for beginners

**Performance Considerations**:
- ⚠️ Change detection runs on every input event
- ⚠️ Can be slower for very large forms (100+ fields)
- ⚠️ Not ideal for high-frequency updates

**Optimization Tips**:

1. **Use OnPush Change Detection**:
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

2. **Use Reactive Forms for Complex Forms**:
```typescript
// Better performance for large forms
this.form = new FormGroup({
  field1: new FormControl(''),
  field2: new FormControl('')
  // ... many fields
});
```

3. **Debounce Input**:
```typescript
searchControl.valueChanges.pipe(
  debounceTime(300)  // Wait 300ms after user stops typing
).subscribe(value => this.search(value));
```

**Recommendation**: For forms with < 20 fields, `ngModel` performance is perfectly fine. For larger, complex forms, use Reactive Forms.

---

## 7. Angular Directives - Introduction

### 📖 Definition

**Directives** are special instructions in Angular that tell the framework how to transform or manipulate the DOM (Document Object Model). Think of them as commands that control what appears on your webpage and how it behaves.

**In Simple Words**: Directives are like instructions that tell Angular: "Add this element", "Remove that element", "Change this color", or "Apply these styles".

**Real-Life Analogy**: Think of building blocks (Lego). Directives are like instructions that tell you which blocks to add, remove, or how to paint them! 🎨🏗️

---

### 📝 Three Types of Directives

#### 1️⃣ **Structural Directives** (Change the DOM Structure)

**What they do**: Add or remove HTML elements from the DOM  
**Symbol**: Start with asterisk `*`  
**Examples**: `*ngIf`, `*ngFor`, `*ngSwitch`

```html
<div *ngIf="showElement">
  <!-- This entire div will be added/removed from DOM -->
  Content here
</div>
```

**Think of it as**: Adding or removing rooms in a house 🏗️

---

#### 2️⃣ **Attribute Directives** (Change Appearance/Behavior)

**What they do**: Change the appearance or behavior of existing elements (don't add/remove from DOM)  
**Symbol**: No special symbol  
**Examples**: `ngClass`, `ngStyle`, `ngModel`

```html
<div [ngClass]="{'active': isActive}">
  <!-- Element stays in DOM, only CSS class changes -->
  Content here
</div>
```

**Think of it as**: Painting walls or changing furniture in existing rooms 🎨

---

#### 3️⃣ **Component Directives** (Render Components)

**What they do**: Render entire components with their templates  
**Examples**: `<app-header>`, `<app-footer>`, custom components

```html
<app-header></app-header>
<!-- Renders the entire header component -->
```

**Think of it as**: Placing pre-built furniture/modules in your house 🛋️

---

### 📊 Quick Comparison Table

| Type | Symbol | Changes DOM? | Examples |
|------|--------|--------------|----------|
| **Structural** | `*` | ✅ Yes (adds/removes) | `*ngIf`, `*ngFor`, `*ngSwitch` |
| **Attribute** | None | ❌ No (modifies existing) | `ngClass`, `ngStyle`, `ngModel` |
| **Component** | None | ✅ Yes (adds component) | `<app-header>`, `<app-card>` |

---

### 🔄 Structural vs Attribute - Key Difference

#### Structural Directive Example (*ngIf):
```typescript
export class AppComponent {
  showElement: boolean = false;
}
```

```html
<div *ngIf="showElement">
  <!-- If condition is FALSE → Entire div REMOVED from DOM! -->
  This will show or not show based on condition
</div>
```

**What happens**: Element is completely removed from DOM when false.

---

#### Attribute Directive Example (ngClass):
```typescript
export class AppComponent {
  showElement: boolean = false;
}
```

```html
<div [ngClass]="{'hidden': !showElement}">
  <!-- Element ALWAYS in DOM, just CSS class changes -->
  This always exists in DOM, only class changes
</div>
```

```css
.hidden {
  display: none;
}
```

**What happens**: Element stays in DOM, only visibility changes via CSS.

---

### ⚠️ Important Rule: One Structural Directive Per Element

You **cannot** use multiple structural directives on the same element!

**❌ WRONG**:
```html
<!-- Error! Can't use 2 structural directives on same element -->
<div *ngIf="condition" *ngFor="let item of items">
  Content
</div>
```

**✅ CORRECT** (Nested elements):
```html
<div *ngIf="condition">
  <div *ngFor="let item of items">
    {{ item }}
  </div>
</div>
```

**✅ BETTER** (Using `ng-container`):
```html
<!-- ng-container doesn't appear in final DOM -->
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">
    {{ item }}
  </div>
</ng-container>
```

---

### 🎯 Use Cases

1. **Structural Directives**:
   - Show/hide elements based on conditions (*ngIf)
   - Display lists of data (*ngFor)
   - Switch between different views (*ngSwitch)

2. **Attribute Directives**:
   - Dynamic styling (ngStyle)
   - Conditional CSS classes (ngClass)
   - Form input binding (ngModel)

3. **Component Directives**:
   - Reusable UI components
   - Page sections (header, footer, sidebar)
   - Custom widgets

---

### ✅ Best Practices

#### DO's ✅

1. **Use Structural Directives for Show/Hide Logic**
   ```html
   <!-- Good for conditional rendering -->
   <div *ngIf="isLoggedIn">Welcome!</div>
   ```

2. **Use Attribute Directives for Styling**
   ```html
   <!-- Good for dynamic styles -->
   <div [ngClass]="{'active': isActive}">Content</div>
   ```

3. **Use ng-container for Clean Structure**
   ```html
   <!-- Doesn't add extra DOM element -->
   <ng-container *ngIf="condition">
     <p>Content here</p>
   </ng-container>
   ```

#### DON'Ts ❌

1. **Don't Use Multiple Structural Directives on Same Element**
   ```html
   <!-- WRONG ❌ -->
   <div *ngIf="x" *ngFor="let item of items"></div>
   ```

2. **Don't Confuse Structural with Attribute**
   ```html
   <!-- WRONG - ngIf needs * ❌ -->
   <div ngIf="condition"></div>
   
   <!-- CORRECT ✅ -->
   <div *ngIf="condition"></div>
   ```

---

### ❓ Interview Questions

#### Q1: What are directives in Angular?

**Answer**: Directives are instructions that tell Angular how to transform the DOM. There are three types:

1. **Structural Directives** - Add/remove elements (*ngIf, *ngFor, *ngSwitch)
2. **Attribute Directives** - Change appearance/behavior (ngClass, ngStyle, ngModel)
3. **Component Directives** - Components themselves are directives

**Example**:
```typescript
export class AppComponent {
  showMessage: boolean = true;
  items: string[] = ['A', 'B', 'C'];
}
```

```html
<!-- Structural - removes from DOM -->
<p *ngIf="showMessage">Hello!</p>

<!-- Attribute - changes style -->
<p [ngClass]="{'bold': showMessage}">Styled text</p>

<!-- Loop -->
<li *ngFor="let item of items">{{ item }}</li>
```

---

#### Q2: What's the difference between structural and attribute directives?

**Answer**:

**Structural Directives**:
- Start with `*` symbol
- Add/remove elements from DOM
- Examples: *ngIf, *ngFor, *ngSwitch

**Attribute Directives**:
- No special symbol
- Modify existing elements (don't add/remove)
- Examples: ngClass, ngStyle, ngModel

**Example**:
```html
<!-- Structural: Element removed from DOM when false -->
<div *ngIf="show">Content</div>

<!-- Attribute: Element stays in DOM, only class changes -->
<div [ngClass]="{'hidden': !show}">Content</div>
```

---

#### Q3: Can you use multiple structural directives on one element?

**Answer**: No! You can only use **one structural directive per element**.

**❌ WRONG**:
```html
<div *ngIf="condition" *ngFor="let item of items">
  {{ item }}
</div>
```

**✅ CORRECT Solutions**:

**Solution 1** - Nested elements:
```html
<div *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</div>
```

**Solution 2** - Using ng-container (recommended):
```html
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

---

#### Q4: What is ng-container and when to use it?

**Answer**: `ng-container` is a logical container that doesn't render in the final DOM. It's perfect for applying structural directives without adding extra HTML elements.

**Example**:
```typescript
export class AppComponent {
  isLoggedIn: boolean = true;
  users: string[] = ['Alice', 'Bob', 'Charlie'];
}
```

**Without ng-container** (adds extra div):
```html
<div *ngIf="isLoggedIn">
  <li *ngFor="let user of users">{{ user }}</li>
</div>
<!-- Creates: <div><li>Alice</li><li>Bob</li><li>Charlie</li></div> -->
```

**With ng-container** (no extra element):
```html
<ng-container *ngIf="isLoggedIn">
  <li *ngFor="let user of users">{{ user }}</li>
</ng-container>
<!-- Creates: <li>Alice</li><li>Bob</li><li>Charlie</li> (no wrapper!) -->
```

---

#### Q5: What are the most commonly used directives in Angular?

**Answer**:

**Structural Directives**:
1. `*ngIf` - Conditional rendering
2. `*ngFor` - Loop through arrays
3. `*ngSwitch` - Switch-case logic

**Attribute Directives**:
1. `ngClass` - Dynamic CSS classes
2. `ngStyle` - Dynamic inline styles
3. `ngModel` - Two-way data binding

**Example**:
```html
<!-- Most common usage -->
<div *ngIf="isVisible">Visible content</div>
<li *ngFor="let item of items">{{ item }}</li>
<div [ngClass]="{'active': isActive}">Styled div</div>
<input [(ngModel)]="username">
```

---

## 8. *ngIf Directive - Conditional Rendering

### 📖 Definition

**`*ngIf`** is a structural directive that conditionally adds or removes elements from the DOM based on a boolean expression. If the condition is true, the element is rendered; if false, it's completely removed from the DOM.

**In Simple Words**: "If this condition is true, show this element. Otherwise, don't show it (and remove it from DOM completely)."

**Real-Life Analogy**: Like Instagram posts - you only see posts if you follow that person. If you don't follow them, those posts don't exist in your feed! 📱

---

### 📝 Syntax and Examples

#### Basic Syntax
```html
<element *ngIf="condition">Content</element>
```

#### Example 1: Login/Logout Buttons

**TypeScript**:
```typescript
export class AppComponent {
  isLoggedIn: boolean = false;
  userName: string = 'Rahul';
  
  login() {
    this.isLoggedIn = true;
  }
  
  logout() {
    this.isLoggedIn = false;
  }
}
```

**HTML**:
```html
<div class="auth-buttons">
  <button *ngIf="!isLoggedIn" (click)="login()">
    Login 🔐
  </button>
  
  <div *ngIf="isLoggedIn">
    <p>Welcome back, {{ userName }}! 👋</p>
    <button (click)="logout()">Logout</button>
  </div>
</div>
```

**Output**:
- When `isLoggedIn = false`: Shows "Login 🔐" button
- When `isLoggedIn = true`: Shows welcome message and "Logout" button

---

#### Example 2: Loading Spinner (API Calls)

**TypeScript**:
```typescript
export class AppComponent {
  isLoading: boolean = true;
  data: string[] = [];
  
  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
      this.isLoading = false;
    }, 2000);
  }
}
```

**HTML**:
```html
<div class="data-container">
  <!-- Loading state -->
  <div *ngIf="isLoading" class="spinner">
    <p>Loading data... ⏳</p>
    <div class="loading-animation"></div>
  </div>
  
  <!-- Data loaded state -->
  <div *ngIf="!isLoading">
    <h2>Data Loaded Successfully! ✅</h2>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  </div>
</div>
```

---

#### Example 3: Form Validation Errors

**TypeScript**:
```typescript
export class AppComponent {
  email: string = '';
  password: string = '';
  showEmailError: boolean = false;
  showPasswordError: boolean = false;
  
  validateEmail() {
    this.showEmailError = !this.email.includes('@');
  }
  
  validatePassword() {
    this.showPasswordError = this.password.length < 6;
  }
  
  onSubmit() {
    this.validateEmail();
    this.validatePassword();
    
    if (!this.showEmailError && !this.showPasswordError) {
      console.log('Form submitted successfully!');
    }
  }
}
```

**HTML**:
```html
<form (submit)="onSubmit()">
  <div class="form-group">
    <label>Email:</label>
    <input 
      type="email" 
      [(ngModel)]="email"
      (blur)="validateEmail()"
      name="email"
      placeholder="Enter email">
    
    <p *ngIf="showEmailError" class="error">
      ❌ Please enter a valid email address!
    </p>
  </div>
  
  <div class="form-group">
    <label>Password:</label>
    <input 
      type="password" 
      [(ngModel)]="password"
      (blur)="validatePassword()"
      name="password"
      placeholder="Enter password">
    
    <p *ngIf="showPasswordError" class="error">
      ❌ Password must be at least 6 characters!
    </p>
  </div>
  
  <button type="submit">Submit</button>
</form>
```

---

#### Example 4: Complex Conditions

**TypeScript**:
```typescript
export class AppComponent {
  age: number = 20;
  hasLicense: boolean = true;
  hasInsurance: boolean = false;
}
```

**HTML**:
```html
<div class="driving-eligibility">
  <h2>Can You Drive?</h2>
  
  <!-- Multiple conditions with && -->
  <div *ngIf="age >= 18 && hasLicense && hasInsurance">
    ✅ Yes, you can drive legally!
  </div>
  
  <!-- Multiple conditions with || -->
  <div *ngIf="age < 18 || !hasLicense">
    ❌ You cannot drive yet!
  </div>
  
  <!-- Specific condition -->
  <div *ngIf="age >= 18 && hasLicense && !hasInsurance">
    ⚠️ You need insurance to drive!
  </div>
</div>
```

---

#### Example 5: *ngIf with else

**TypeScript**:
```typescript
export class AppComponent {
  hasItems: boolean = true;
  cartItems: string[] = ['Laptop', 'Mouse', 'Keyboard'];
}
```

**HTML**:
```html
<div class="shopping-cart">
  <h2>Your Cart 🛒</h2>
  
  <!-- Using else template -->
  <div *ngIf="hasItems; else emptyCart">
    <p>You have {{ cartItems.length }} items in cart</p>
    <ul>
      <li *ngFor="let item of cartItems">{{ item }}</li>
    </ul>
  </div>
  
  <!-- else template -->
  <ng-template #emptyCart>
    <p>Your cart is empty! 😢</p>
    <button>Start Shopping</button>
  </ng-template>
</div>
```

---

#### Example 6: *ngIf with then/else

**TypeScript**:
```typescript
export class AppComponent {
  isPremiumUser: boolean = true;
}
```

**HTML**:
```html
<div *ngIf="isPremiumUser; then premiumContent; else freeContent"></div>

<!-- Premium user template -->
<ng-template #premiumContent>
  <div class="premium">
    <h3>Premium Member ⭐</h3>
    <p>Enjoy unlimited access to all features!</p>
    <ul>
      <li>Ad-free experience</li>
      <li>HD streaming</li>
      <li>Download offline</li>
    </ul>
  </div>
</ng-template>

<!-- Free user template -->
<ng-template #freeContent>
  <div class="free">
    <h3>Free Member</h3>
    <p>Upgrade to Premium for more features!</p>
    <button>Upgrade Now</button>
  </div>
</ng-template>
```

---

#### Example 7: Storing Value in Variable (as keyword)

**TypeScript**:
```typescript
export class AppComponent {
  getUserData() {
    return {
      name: 'Rahul Kumar',
      age: 24,
      email: 'rahul@example.com',
      city: 'Delhi'
    };
  }
}
```

**HTML (Without 'as')** - Function called multiple times ❌:
```html
<div *ngIf="getUserData()">
  <p>Name: {{ getUserData().name }}</p>
  <p>Age: {{ getUserData().age }}</p>
  <p>Email: {{ getUserData().email }}</p>
  <p>City: {{ getUserData().city }}</p>
  <!-- Function called 4 times! Performance issue! ❌ -->
</div>
```

**HTML (With 'as')** - Function called once ✅:
```html
<div *ngIf="getUserData() as user">
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
  <p>Email: {{ user.email }}</p>
  <p>City: {{ user.city }}</p>
  <!-- Function called only once! ✅ -->
</div>
```

---

### 🎯 *ngIf vs CSS display:none - Critical Difference!

| Feature | *ngIf | CSS display:none |
|---------|-------|------------------|
| **In DOM?** | ❌ Removed from DOM | ✅ Present in DOM |
| **Performance** | ✅ Better (not rendered) | ❌ Worse (rendered but hidden) |
| **Memory Usage** | ✅ Less (removed) | ❌ More (stays in memory) |
| **Re-initialize** | ✅ Yes (when shown again) | ❌ No |
| **Security** | ✅ More secure (truly hidden) | ⚠️ Less secure (still in HTML) |

**CSS Approach** (Not Recommended):
```html
<div [style.display]="showElement ? 'block' : 'none'">
  <!-- Stays in DOM, just hidden with CSS -->
  Sensitive data here (still visible in inspect element!)
</div>
```

**ngIf Approach** (Recommended ✅):
```html
<div *ngIf="showElement">
  <!-- Completely removed from DOM when false -->
  Sensitive data here (truly removed from DOM!)
</div>
```

**When to use CSS display:none**:
- Need animations (fade in/out)
- Frequently toggling (every millisecond)
- Want to preserve component state

**When to use *ngIf**:
- Better performance needed
- Security concern (hide sensitive data)
- Clean DOM structure
- Most cases! ✅

---

### ✅ Best Practices

#### DO's ✅

1. **Use *ngIf for Better Performance**
   ```html
   <!-- Good ✅ -->
   <div *ngIf="isVisible">Content</div>
   ```

2. **Store Complex Logic in Component**
   ```typescript
   // Good ✅
   get canDrive(): boolean {
     return this.age > 18 && this.hasLicense && !this.isSuspended;
   }
   ```
   
   ```html
   <div *ngIf="canDrive">You can drive!</div>
   ```

3. **Use 'as' to Store Values**
   ```html
   <!-- Avoid multiple function calls -->
   <div *ngIf="getData() as data">
     {{ data.name }}
   </div>
   ```

4. **Use ng-template for else Blocks**
   ```html
   <div *ngIf="condition; else elseBlock">True</div>
   <ng-template #elseBlock>False</ng-template>
   ```

#### DON'Ts ❌

1. **Don't Put Complex Logic in Template**
   ```html
   <!-- Bad ❌ -->
   <div *ngIf="age > 18 && age < 65 && hasLicense && !isSuspended && city === 'Delhi'">
     Complex condition
   </div>
   
   <!-- Good ✅ - Move to component -->
   <div *ngIf="canDrive">Simple condition</div>
   ```

2. **Don't Forget the Asterisk**
   ```html
   <!-- Wrong ❌ -->
   <div ngIf="condition">Content</div>
   
   <!-- Correct ✅ -->
   <div *ngIf="condition">Content</div>
   ```

3. **Don't Use for Frequent Toggles**
   ```typescript
   // If toggling 60 times per second, use CSS instead
   // *ngIf recreates component each time (expensive)
   ```

---

### ❓ Interview Questions

#### Q1: What is *ngIf and how does it work?

**Answer**: `*ngIf` is a structural directive that conditionally adds or removes elements from the DOM based on a boolean expression.

**Example**:
```typescript
export class AppComponent {
  showMessage: boolean = true;
}
```

```html
<p *ngIf="showMessage">This message is shown!</p>
<!-- If showMessage is false, <p> is REMOVED from DOM -->
```

**How it works internally**:
- True → Element added to DOM
- False → Element completely removed from DOM (not just hidden)

---

#### Q2: What's the difference between *ngIf and [hidden]?

**Answer**:

**`*ngIf`**: Removes/adds element from DOM
```html
<div *ngIf="show">Content</div>
<!-- False → Element removed from DOM ✅ -->
```

**`[hidden]`**: Hides element with CSS (stays in DOM)
```html
<div [hidden]="!show">Content</div>
<!-- False → Element hidden but still in DOM ❌ -->
```

**Comparison**:

| Feature | *ngIf | [hidden] |
|---------|-------|----------|
| DOM presence | Removed when false | Always present |
| Performance | Better ✅ | Worse ❌ |
| Use case | Most scenarios | Frequent toggles with animations |

**Recommendation**: Use `*ngIf` in most cases for better performance!

---

## 10. *ngFor Directive - Loop Through Arrays

### 📖 Definition

**`*ngFor`** is a structural directive that loops through an array and renders a template for each item. It's like a `for` loop in programming - repeat something for every element in an array.

**In Simple Words**: "For each item in this array, create a copy of this HTML element."

**Real-Life Analogy**: Like displaying all WhatsApp contacts in your list - one card for each contact! 📱

---

### 📝 Syntax and Basic Usage

#### Basic Syntax
```html
<element *ngFor="let item of arrayName">
  {{ item }}
</element>
```

#### Example 1: Product List (E-commerce)

**TypeScript**:
```typescript
export class AppComponent {
  products = [
    { id: 1, name: 'iPhone 15 Pro', price: 134900, category: 'Electronics' },
    { id: 2, name: 'MacBook Air M2', price: 114900, category: 'Computers' },
    { id: 3, name: 'AirPods Pro', price: 24900, category: 'Audio' },
    { id: 4, name: 'Apple Watch Series 9', price: 41900, category: 'Wearables' }
  ];
}
```

**HTML**:
```html
<div class="product-list">
  <h2>Products Available 🛍️</h2>
  
  <div class="product-card" *ngFor="let product of products">
    <h3>{{ product.name }}</h3>
    <p>Category: {{ product.category }}</p>
    <p class="price">₹{{ product.price }}</p>
    <button>Add to Cart 🛒</button>
  </div>
</div>
```

**Output**:
```
Products Available 🛍️

┌─────────────────────────┐
│ iPhone 15 Pro           │
│ Category: Electronics   │
│ ₹134900                 │
│ [Add to Cart 🛒]       │
└─────────────────────────┘

┌─────────────────────────┐
│ MacBook Air M2          │
│ Category: Computers     │
│ ₹114900                 │
│ [Add to Cart 🛒]       │
└─────────────────────────┘

... (and so on for all items)
```

---

#### Example 2: User Directory Table

**TypeScript**:
```typescript
export class AppComponent {
  users = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'Admin' },
    { id: 2, name: 'Priya Singh', email: 'priya@example.com', role: 'User' },
    { id: 3, name: 'Amit Kumar', email: 'amit@example.com', role: 'Manager' },
    { id: 4, name: 'Neha Gupta', email: 'neha@example.com', role: 'User' }
  ];
}
```

**HTML**:
```html
<div class="user-directory">
  <h2>User Directory 👥</h2>
  
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

#### Example 3: Instagram-Style Posts

**TypeScript**:
```typescript
export class AppComponent {
  posts = [
    { id: 1, username: 'travel_lover', image: 'beach.jpg', likes: 1234, caption: 'Beautiful sunset! 🌅' },
    { id: 2, username: 'foodie_delights', image: 'pizza.jpg', likes: 856, caption: 'Best pizza in town! 🍕' },
    { id: 3, username: 'tech_guru', image: 'laptop.jpg', likes: 2341, caption: 'New workspace setup 💻' }
  ];
  
  likePost(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }
}
```

**HTML**:
```html
<div class="feed">
  <h2>Instagram Feed 📸</h2>
  
  <div class="post" *ngFor="let post of posts">
    <div class="post-header">
      <strong>{{ post.username }}</strong>
    </div>
    <img [src]="'assets/images/' + post.image" alt="Post image">
    <div class="post-actions">
      <button (click)="likePost(post.id)">❤️ {{ post.likes }}</button>
      <button>💬 Comment</button>
      <button>📤 Share</button>
    </div>
    <div class="post-caption">
      <strong>{{ post.username }}</strong> {{ post.caption }}
    </div>
  </div>
</div>
```

---

### 🔢 Special Variables in *ngFor

Angular provides special variables you can access inside *ngFor loops:

| Variable | Type | Description | Example Value |
|----------|------|-------------|---------------|
| **index** | number | Current loop position (0, 1, 2...) | 0, 1, 2, 3 |
| **first** | boolean | True if first item | true/false |
| **last** | boolean | True if last item | true/false |
| **even** | boolean | True for even positions (0, 2, 4) | true/false |
| **odd** | boolean | True for odd positions (1, 3, 5) | true/false |
| **count** | number | Total number of items | 10 |

#### Syntax for Variables
```html
<div *ngFor="let item of items; index as i; first as isFirst; last as isLast">
  Item {{ i }}: {{ item }}
</div>
```

---

#### Example 4: Using Index Variable

**TypeScript**:
```typescript
export class AppComponent {
  steps = [
    'Open Angular official website',
    'Install Node.js and npm',
    'Install Angular CLI globally',
    'Create a new Angular project',
    'Start the development server'
  ];
}
```

**HTML**:
```html
<div class="tutorial">
  <h2>Angular Installation Steps 📚</h2>
  
  <ol>
    <li *ngFor="let step of steps; index as i">
      <strong>Step {{ i + 1 }}:</strong> {{ step }}
    </li>
  </ol>
</div>
```

**Output**:
```
Angular Installation Steps 📚

1. Step 1: Open Angular official website
2. Step 2: Install Node.js and npm
3. Step 3: Install Angular CLI globally
4. Step 4: Create a new Angular project
5. Step 5: Start the development server
```

---

#### Example 5: Using first, last, even, odd Variables

**TypeScript**:
```typescript
export class AppComponent {
  tasks = [
    'Complete Angular tutorial',
    'Build a TODO app',
    'Learn TypeScript',
    'Master RxJS',
    'Deploy to production'
  ];
}
```

**HTML**:
```html
<div class="task-list">
  <h2>My Tasks ✅</h2>
  
  <ul>
    <li *ngFor="let task of tasks; 
                 index as i; 
                 first as isFirst; 
                 last as isLast;
                 even as isEven;
                 odd as isOdd"
        [class.first-item]="isFirst"
        [class.last-item]="isLast"
        [class.even-row]="isEven"
        [class.odd-row]="isOdd">
      
      <span class="task-number">{{ i + 1 }}.</span>
      {{ task }}
      
      <span *ngIf="isFirst" class="badge">🔥 TOP PRIORITY</span>
      <span *ngIf="isLast" class="badge">LEAST URGENT</span>
    </li>
  </ul>
</div>
```

**CSS**:
```css
.even-row { background-color: #f0f0f0; }
.odd-row { background-color: #ffffff; }
.first-item { font-weight: bold; border-top: 3px solid green; }
.last-item { border-bottom: 3px solid gray; }
```

---

### ⚡ Performance Optimization - trackBy Function

**⚠️ THE PROBLEM**:
By default, when an array changes (add/delete/update), Angular re-renders the **entire list**! This causes performance issues with large lists (1000+ items).

**✅ THE SOLUTION**: trackBy Function
Tells Angular which unique property to use to identify items, so only changed items get re-rendered.

---

#### Example 6: trackBy Implementation

**TypeScript**:
```typescript
export class AppComponent {
  employees = [
    { id: 1, name: 'Rahul Sharma', salary: 50000 },
    { id: 2, name: 'Priya Singh', salary: 60000 },
    { id: 3, name: 'Amit Kumar', salary: 55000 }
  ];
  
  // trackBy function - tells Angular to track by ID
  trackByEmployeeId(index: number, employee: any): number {
    return employee.id;  // Unique identifier
  }
  
  addEmployee() {
    this.employees.push({ 
      id: 4, 
      name: 'Neha Gupta', 
      salary: 65000 
    });
    // Only NEW item will be rendered, old items won't re-render! ✅
  }
  
  updateSalary() {
    this.employees[0].salary = 55000;
    // Only UPDATED item will be re-rendered! ✅
  }
}
```

**HTML (WITHOUT trackBy - SLOW 🐢)**:
```html
<table>
  <tr *ngFor="let emp of employees">
    <td>{{ emp.name }}</td>
    <td>{{ emp.salary }}</td>
  </tr>
</table>
<!-- ALL items re-render on every change! -->
```

**HTML (WITH trackBy - FAST ⚡)**:
```html
<table>
  <tr *ngFor="let emp of employees; trackBy: trackByEmployeeId">
    <td>{{ emp.name }}</td>
    <td>{{ emp.salary }}</td>
  </tr>
</table>
<!-- Only changed items re-render! -->
```

**How trackBy Works**:
1. Angular checks each item's ID
2. If ID is same → Reuse existing element (no re-render)
3. If ID is new → Create new element
4. If ID is missing → Remove element

---

### 🎯 Nested Loops (Arrays Inside Arrays)

#### Example 7: Categories with Products

**TypeScript**:
```typescript
export class AppComponent {
  categories = [
    {
      name: 'Electronics',
      products: ['Laptop', 'Phone', 'Tablet', 'Smartwatch']
    },
    {
      name: 'Clothing',
      products: ['Shirt', 'Jeans', 'Jacket', 'Shoes']
    },
    {
      name: 'Books',
      products: ['Fiction', 'Non-Fiction', 'Comics', 'Magazines']
    }
  ];
}
```

**HTML**:
```html
<div class="categories">
  <h2>Product Categories 📦</h2>
  
  <div *ngFor="let category of categories" class="category">
    <h3>{{ category.name }}</h3>
    <ul>
      <li *ngFor="let product of category.products">
        {{ product }}
      </li>
    </ul>
  </div>
</div>
```

**Output**:
```
Product Categories 📦

Electronics
• Laptop
• Phone
• Tablet
• Smartwatch

Clothing
• Shirt
• Jeans
• Jacket
• Shoes

Books
• Fiction
• Non-Fiction
• Comics
• Magazines
```

---

### ✅ Best Practices

#### DO's ✅

1. **Use trackBy for Large Lists (100+ items)**
   ```html
   <div *ngFor="let item of items; trackBy: trackById">
     {{ item.name }}
   </div>
   ```

2. **Check for Empty Arrays**
   ```html
   <div *ngIf="items.length > 0; else noItems">
     <div *ngFor="let item of items">{{ item }}</div>
   </div>
   <ng-template #noItems>
     <p>No items found! 🤷‍♂️</p>
   </ng-template>
   ```

3. **Use index + 1 for Display**
   ```html
   <li *ngFor="let item of items; index as i">
     {{ i + 1 }}. {{ item }}
   </li>
   ```

4. **Use Unique IDs for trackBy**
   ```typescript
   trackById(index: number, item: any): number {
     return item.id;  // Database ID is best
   }
   ```

#### DON'Ts ❌

1. **Don't Forget 'let' Keyword**
   ```html
   <!-- Wrong ❌ -->
   <div *ngFor="item of items">{{ item }}</div>
   
   <!-- Correct ✅ -->
   <div *ngFor="let item of items">{{ item }}</div>
   ```

2. **Don't Forget Semicolon for Variables**
   ```html
   <!-- Wrong ❌ -->
   <div *ngFor="let item of items index as i">
   
   <!-- Correct ✅ -->
   <div *ngFor="let item of items; index as i">
   ```

3. **Don't Skip trackBy for Large Lists**
   ```html
   <!-- Bad for 1000+ items ❌ -->
   <div *ngFor="let item of largeArray">
   
   <!-- Good ✅ -->
   <div *ngFor="let item of largeArray; trackBy: trackById">
   ```

---

### ❓ Interview Questions

#### Q1: What is *ngFor and how does it work?

**Answer**: `*ngFor` is a structural directive that loops through an array and creates a template for each item.

**Example**:
```typescript
export class AppComponent {
  fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
}
```

```html
<ul>
  <li *ngFor="let fruit of fruits">{{ fruit }}</li>
</ul>

<!-- Output:
• Apple
• Banana
• Orange
• Mango
-->
```

---

#### Q2: How do you get the index in *ngFor?

**Answer**: Use `index as variableName` syntax.

**Example**:
```typescript
export class AppComponent {
  colors = ['Red', 'Green', 'Blue'];
}
```

```html
<div *ngFor="let color of colors; index as i">
  {{ i + 1 }}. {{ color }}
</div>

<!-- Output:
1. Red
2. Green
3. Blue
-->
```

---

#### Q3: What are the special variables available in *ngFor?

**Answer**: `index`, `first`, `last`, `even`, `odd`, `count`

**Example**:
```typescript
export class AppComponent {
  items = ['A', 'B', 'C', 'D'];
}
```

```html
<div *ngFor="let item of items; 
             index as i; 
             first as isFirst; 
             last as isLast;
             even as isEven">
  <p>
    Item: {{ item }} | 
    Index: {{ i }} | 
    First: {{ isFirst }} | 
    Last: {{ isLast }} | 
    Even: {{ isEven }}
  </p>
</div>

<!-- Output:
Item: A | Index: 0 | First: true | Last: false | Even: true
Item: B | Index: 1 | First: false | Last: false | Even: false
Item: C | Index: 2 | First: false | Last: false | Even: true
Item: D | Index: 3 | First: false | Last: true | Even: false
-->
```

---

#### Q4: What is trackBy and why is it important?

**Answer**: `trackBy` is a function that tells Angular how to identify unique items in a list. It prevents unnecessary re-rendering.

**Without trackBy** (Re-renders everything):
```typescript
export class AppComponent {
  users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' }
  ];
  
  addUser() {
    this.users.push({ id: 3, name: 'Amit' });
    // All 3 items re-render! ❌
  }
}
```

```html
<div *ngFor="let user of users">
  {{ user.name }}
</div>
```

**With trackBy** (Re-renders only new item):
```typescript
export class AppComponent {
  users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' }
  ];
  
  trackByUserId(index: number, user: any): number {
    return user.id;
  }
  
  addUser() {
    this.users.push({ id: 3, name: 'Amit' });
    // Only new item re-renders! ✅
  }
}
```

```html
<div *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</div>
```

**When to use trackBy**:
- ✅ Large lists (100+ items)
- ✅ Frequently updated lists
- ✅ Lists with complex items

---

#### Q5: Can you use multiple *ngFor on the same element?

**Answer**: No! Only one structural directive per element.

**❌ WRONG**:
```html
<div *ngIf="condition" *ngFor="let item of items">
  <!-- Error! Can't use 2 structural directives -->
</div>
```

**✅ CORRECT** (Nested):
```html
<div *ngIf="condition">
  <div *ngFor="let item of items">
    {{ item }}
  </div>
</div>
```

**✅ BETTER** (ng-container):
```html
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">
    {{ item }}
  </div>
</ng-container>
```

---

#### Q6: How do you loop through objects (not arrays)?

**Answer**: Use `keyvalue` pipe to convert object to array.

**Example**:
```typescript
export class AppComponent {
  user = {
    name: 'Rahul Kumar',
    age: 24,
    email: 'rahul@example.com',
    city: 'Delhi'
  };
}
```

```html
<div *ngFor="let item of user | keyvalue">
  <strong>{{ item.key }}:</strong> {{ item.value }}
</div>

<!-- Output:
name: Rahul Kumar
age: 24
email: rahul@example.com
city: Delhi
-->
```

---

#### Q7: How do you handle empty arrays in *ngFor?

**Answer**: Use `*ngIf` to check length first.

**Example**:
```typescript
export class AppComponent {
  products: any[] = [];
}
```

```html
<div *ngIf="products.length > 0; else noProducts">
  <div *ngFor="let product of products">
    {{ product.name }}
  </div>
</div>

<ng-template #noProducts>
  <p>No products available! 🛒</p>
  <button>Add Products</button>
</ng-template>
```

---

#### Q8: What's the difference between index and count?

**Answer**:
- **index**: Current position (0, 1, 2, 3...)
- **count**: Total number of items

**Example**:
```typescript
export class AppComponent {
  items = ['A', 'B', 'C'];
}
```

```html
<div *ngFor="let item of items; index as i; count as total">
  Item {{ i + 1 }} of {{ total }}: {{ item }}
</div>

<!-- Output:
Item 1 of 3: A
Item 2 of 3: B
Item 3 of 3: C
-->
```

---

#### Q9: Can you nest *ngFor loops?

**Answer**: Yes! You can have arrays inside arrays.

**Example**:
```typescript
export class AppComponent {
  students = [
    { name: 'Rahul', subjects: ['Math', 'Science', 'English'] },
    { name: 'Priya', subjects: ['Hindi', 'History', 'Geography'] }
  ];
}
```

```html
<div *ngFor="let student of students">
  <h3>{{ student.name }}</h3>
  <ul>
    <li *ngFor="let subject of student.subjects">
      {{ subject }}
    </li>
  </ul>
</div>

<!-- Output:
Rahul
• Math
• Science
• English

Priya
• Hindi
• History
• Geography
-->
```

---

#### Q10: What are common mistakes with *ngFor?

**Answer**:

**Mistake 1** - Forgetting 'let':
```html
<!-- Wrong ❌ -->
<div *ngFor="item of items">{{ item }}</div>

<!-- Correct ✅ -->
<div *ngFor="let item of items">{{ item }}</div>
```

**Mistake 2** - Wrong array name:
```typescript
// Component
students = ['A', 'B', 'C'];
```

```html
<!-- Wrong ❌ -->
<div *ngFor="let s of student">{{ s }}</div>

<!-- Correct ✅ -->
<div *ngFor="let s of students">{{ s }}</div>
```

**Mistake 3** - Missing semicolon:
```html
<!-- Wrong ❌ -->
<div *ngFor="let item of items index as i">

<!-- Correct ✅ -->
<div *ngFor="let item of items; index as i">
```

**Mistake 4** - Not using trackBy for large lists:
```html
<!-- Bad performance for 1000+ items ❌ -->
<div *ngFor="let item of largeArray">

<!-- Good performance ✅ -->
<div *ngFor="let item of largeArray; trackBy: trackById">
```

---

## 11. @for Control Flow - Modern Loop (Angular 17+)

### 📖 Definition

**`@for`** is the new loop syntax introduced in Angular 17+. It's a modern, cleaner alternative to `*ngFor` with built-in empty state handling. The `track` keyword is **mandatory** for performance optimization.

**In Simple Words**: `@for` is like `*ngFor` but with cleaner syntax and automatic "no data" message support!

**Why the Change?**:
- ⚡ **Better Performance** - Optimized rendering
- 🎯 **Built-in Empty State** - `@empty` block included
- 🔧 **Mandatory Tracking** - Forces best practices
- 🚀 **Cleaner Syntax** - More readable code

---

### 📝 Syntax and Examples

#### Basic Syntax
```html
@for (item of arrayName; track item.id) {
  <!-- Content for each item -->
} @empty {
  <!-- Content when array is empty -->
}
```

**⚠️ IMPORTANT**: `track` keyword is MANDATORY in @for!

---

#### Example 1: Shopping Cart with Empty State

**TypeScript**:
```typescript
export class AppComponent {
  cartItems = [
    { id: 1, name: 'iPhone 15 Pro', price: 134900, quantity: 1 },
    { id: 2, name: 'AirPods Pro', price: 24900, quantity: 2 },
    { id: 3, name: 'Apple Watch', price: 41900, quantity: 1 }
  ];
  
  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
  }
  
  clearCart() {
    this.cartItems = [];
  }
  
  addItem(name: string, price: number) {
    this.cartItems.push({
      id: Date.now(),
      name,
      price,
      quantity: 1
    });
  }
}
```

**HTML**:
```html
<div class="shopping-cart">
  <h2>Your Cart 🛒</h2>
  
  @for (item of cartItems; track item.id) {
    <div class="cart-item">
      <span class="name">{{ item.name }}</span>
      <span class="quantity">Qty: {{ item.quantity }}</span>
      <span class="price">₹{{ item.price * item.quantity }}</span>
    </div>
  } @empty {
    <div class="empty-cart">
      <p>🛒 Your cart is empty!</p>
      <p>Add some items to get started.</p>
      <button>Start Shopping</button>
    </div>
  }
  
  @if (cartItems.length > 0) {
    <div class="cart-total">
      <strong>Total: ₹{{ totalPrice }}</strong>
      <button (click)="clearCart()">Clear Cart</button>
    </div>
  }
</div>
```

---

#### Example 2: Employee Directory

**TypeScript**:
```typescript
export class AppComponent {
  employees = [
    { id: 1, name: 'Rahul Sharma', age: 24, department: 'IT' },
    { id: 2, name: 'Priya Singh', age: 26, department: 'HR' },
    { id: 3, name: 'Amit Kumar', age: 28, department: 'Finance' },
    { id: 4, name: 'Neha Gupta', age: 25, department: 'Marketing' }
  ];
}
```

**HTML**:
```html
<div class="employee-list">
  <h2>Employee Directory 👥</h2>
  
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      @for (emp of employees; track emp.id) {
        <tr>
          <td>{{ emp.id }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.age }}</td>
          <td>{{ emp.department }}</td>
        </tr>
      } @empty {
        <tr>
          <td colspan="4" class="no-data">
            😕 No employees found! Add some employees first.
          </td>
        </tr>
      }
    </tbody>
  </table>
</div>
```

---

#### Example 3: Comments Section (Social Media)

**TypeScript**:
```typescript
export class AppComponent {
  comments: Comment[] = [];
  
  addComment(text: string) {
    if (text.trim()) {
      this.comments.push({
        id: Date.now(),
        author: 'Current User',
        text: text,
        timestamp: new Date()
      });
    }
  }
}

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: Date;
}
```

**HTML**:
```html
<div class="comments-section">
  <h3>Comments 💬</h3>
  
  @for (comment of comments; track comment.id) {
    <div class="comment">
      <strong>{{ comment.author }}</strong>
      <p>{{ comment.text }}</p>
      <small>{{ comment.timestamp | date:'short' }}</small>
    </div>
  } @empty {
    <div class="no-comments">
      <p>😶 No comments yet! Be the first to comment.</p>
    </div>
  }
  
  <div class="add-comment">
    <input #commentInput placeholder="Write a comment..." />
    <button (click)="addComment(commentInput.value); commentInput.value=''">
      Post Comment
    </button>
  </div>
</div>
```

---

#### Example 4: Using $index and Special Variables

**TypeScript**:
```typescript
export class AppComponent {
  todoList = [
    { id: 1, task: 'Complete Angular tutorial', done: false },
    { id: 2, task: 'Build TODO app', done: false },
    { id: 3, task: 'Learn TypeScript', done: true },
    { id: 4, task: 'Master RxJS', done: false }
  ];
}
```

**HTML**:
```html
<div class="todo-app">
  <h2>My Tasks ✅</h2>
  
  @for (todo of todoList; track todo.id; let idx = $index; let isFirst = $first; let isLast = $last) {
    <div class="todo-item" 
         [class.first]="isFirst" 
         [class.last]="isLast"
         [class.completed]="todo.done">
      <span class="number">{{ idx + 1 }}.</span>
      <span class="task">{{ todo.task }}</span>
      
      @if (todo.done) {
        <span class="badge">✅ Done</span>
      }
      
      @if (isFirst) {
        <span class="priority">🔥 HIGH PRIORITY</span>
      }
    </div>
  } @empty {
    <p>🎉 No tasks! You're all done!</p>
  }
</div>
```

---

### 🎯 Special Variables in @for

| Variable | Access As | Type | Meaning |
|----------|-----------|------|---------|
| **index** | `$index` | number | Current position (0, 1, 2...) |
| **count** | `$count` | number | Total items |
| **first** | `$first` | boolean | First item? |
| **last** | `$last` | boolean | Last item? |
| **even** | `$even` | boolean | Even position? (0, 2, 4...) |
| **odd** | `$odd` | boolean | Odd position? (1, 3, 5...) |

#### Syntax for Variables
```html
@for (item of items; track item.id; let i = $index; let isFirst = $first) {
  <!-- Use i and isFirst here -->
}
```

---

### 📊 *ngFor vs @for - Comparison

| Feature | *ngFor (Old) | @for (New) |
|---------|--------------|------------|
| **Syntax** | `*ngFor="let x of items"` | `@for(x of items; track x.id) {}` |
| **Empty state** | Manual with *ngIf | Built-in `@empty` ✅ |
| **Track** | Optional | MANDATORY ⚠️ |
| **Performance** | Good | Better ⚡ |
| **Readability** | Medium | Better ✅ |
| **Version** | All versions | Angular 17+ only |

---

#### Syntax Comparison

**OLD WAY** (*ngFor with empty check):
```html
<div *ngIf="items.length > 0; else noItems">
  <div *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
  </div>
</div>
<ng-template #noItems>
  <p>No items found!</p>
</ng-template>
<!-- Too much code! 😫 -->
```

**NEW WAY** (@for):
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items found!</p>
}
<!-- Clean and simple! 😊 -->
```

---

### ✅ Best Practices

#### DO's ✅

1. **Always Use track**
   ```html
   <!-- track is mandatory! -->
   @for (item of items; track item.id) {
     {{ item.name }}
   }
   ```

2. **Use Unique IDs for Tracking**
   ```html
   <!-- Use database ID (best) -->
   @for (user of users; track user.id) {
     {{ user.name }}
   }
   ```

3. **Use @empty for Better UX**
   ```html
   @for (product of products; track product.id) {
     {{ product.name }}
   } @empty {
     <p>No products available</p>
   }
   ```

4. **Use Special Variables for Styling**
   ```html
   @for (item of items; track item.id; let isFirst = $first; let isLast = $last) {
     <div [class.first]="isFirst" [class.last]="isLast">
       {{ item }}
     </div>
   }
   ```

#### DON'Ts ❌

1. **Don't Forget track**
   ```html
   <!-- Error! track is required ❌ -->
   @for (item of items) {
     {{ item }}
   }
   
   <!-- Correct ✅ -->
   @for (item of items; track item.id) {
     {{ item }}
   }
   ```

2. **Don't Forget Curly Braces**
   ```html
   <!-- Wrong ❌ -->
   @for (item of items; track item.id)
     Content
   
   <!-- Correct ✅ -->
   @for (item of items; track item.id) {
     Content
   }
   ```

3. **Don't Use Old Variable Syntax**
   ```html
   <!-- Wrong ❌ -->
   @for (item of items; track item.id; index as i) {
   
   <!-- Correct ✅ -->
   @for (item of items; track item.id; let i = $index) {
   ```

---

### ❓ Interview Questions

#### Q1: What is @for and how is it different from *ngFor?

**Answer**: `@for` is the new loop syntax in Angular 17+ that replaces `*ngFor`. It has built-in empty state handling and mandatory tracking.

**Differences**:

**@for (New)**:
- ✅ Built-in `@empty` block
- ✅ Mandatory `track` (enforces best practices)
- ✅ Better performance
- ✅ Cleaner syntax

**ngFor (Old)**:
- ⚠️ Manual empty check with *ngIf
- ⚠️ Optional trackBy
- ✅ Works in all Angular versions

**Example**:
```typescript
export class AppComponent {
  items = [1, 2, 3];
}
```

```html
<!-- New way ✅ -->
@for (item of items; track item) {
  {{ item }}
} @empty {
  No items
}

<!-- Old way -->
<div *ngIf="items.length > 0; else noItems">
  <div *ngFor="let item of items">{{ item }}</div>
</div>
<ng-template #noItems>No items</ng-template>
```

---

#### Q2: Why is track mandatory in @for?

**Answer**: `track` is mandatory to enforce performance best practices. It tells Angular how to identify unique items, preventing unnecessary re-renders.

**Example**:
```typescript
export class AppComponent {
  users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' }
  ];
  
  addUser() {
    this.users.push({ id: 3, name: 'Amit' });
    // Only new item renders (because of track)! ✅
  }
}
```

```html
@for (user of users; track user.id) {
  {{ user.name }}
}
```

**Without track** (Error in @for):
```html
<!-- This won't work - Angular will show error ❌ -->
@for (user of users) {
  {{ user.name }}
}
```

---

#### Q3: How do you use special variables like index in @for?

**Answer**: Use `let variableName = $index` syntax.

**Example**:
```typescript
export class AppComponent {
  colors = ['Red', 'Green', 'Blue'];
}
```

```html
@for (color of colors; track color; let i = $index; let isFirst = $first) {
  <div>
    {{ i + 1 }}. {{ color }}
    @if (isFirst) {
      <span>⭐ First!</span>
    }
  </div>
}

<!-- Output:
1. Red ⭐ First!
2. Green
3. Blue
-->
```

---

#### Q4: Can you nest @for loops?

**Answer**: Yes! You can nest @for inside another @for.

**Example**:
```typescript
export class AppComponent {
  categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange']
    },
    {
      name: 'Vegetables',
      items: ['Carrot', 'Potato', 'Tomato']
    }
  ];
}
```

```html
@for (category of categories; track category.name) {
  <div>
    <h3>{{ category.name }}</h3>
    <ul>
      @for (item of category.items; track item) {
        <li>{{ item }}</li>
      }
    </ul>
  </div>
}

<!-- Output:
Fruits
• Apple
• Banana
• Orange

Vegetables
• Carrot
• Potato
• Tomato
-->
```

---

#### Q5: Is @empty block mandatory in @for?

**Answer**: No, `@empty` is optional. You can use `@for` without it.

**With @empty** (Better UX):
```html
@for (item of items; track item.id) {
  {{ item.name }}
} @empty {
  <p>No items available</p>
}
```

**Without @empty** (Also valid):
```html
@for (item of items; track item.id) {
  {{ item.name }}
}
<!-- If array is empty, nothing shows -->
```

---

#### Q6: What can you use for tracking?

**Answer**: You can track by:
1. Unique ID (best)
2. Index (not recommended for dynamic lists)
3. The item itself (for primitive arrays)

**Examples**:
```typescript
export class AppComponent {
  // Array of objects
  users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' }
  ];
  
  // Array of primitives
  numbers = [10, 20, 30];
}
```

```html
<!-- Track by unique ID (best ✅) -->
@for (user of users; track user.id) {
  {{ user.name }}
}

<!-- Track by item itself (OK for primitives) -->
@for (num of numbers; track num) {
  {{ num }}
}

<!-- Track by index (not recommended for dynamic lists ⚠️) -->
@for (user of users; track $index) {
  {{ user.name }}
}
```

---

#### Q7: Does @for work with Angular versions below 17?

**Answer**: No, `@for` only works with Angular 17 and above.

**Versions**:
- Angular < 17: Use `*ngFor`
- Angular 17+: Can use both `*ngFor` and `@for`

**Check version**:
```bash
ng version
```

---

#### Q8: How do you migrate from *ngFor to @for?

**Answer**: Angular provides automatic migration:

**Command**:
```bash
ng generate @angular/core:control-flow
```

**Before** (*ngFor):
```html
<div *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</div>
```

**After** (@for):
```html
@for (item of items; track item.id) {
  {{ item.name }}
}
```

---

#### Q9: What are common mistakes with @for?

**Answer**:

**Mistake 1** - Forgetting track:
```html
<!-- Error ❌ -->
@for (item of items) { }

<!-- Correct ✅ -->
@for (item of items; track item.id) { }
```

**Mistake 2** - Wrong variable syntax:
```html
<!-- Wrong ❌ -->
@for (item of items; track item.id; index as i) { }

<!-- Correct ✅ -->
@for (item of items; track item.id; let i = $index) { }
```

**Mistake 3** - Forgetting curly braces:
```html
<!-- Wrong ❌ -->
@for (item of items; track item.id)
  <div>{{ item }}</div>

<!-- Correct ✅ -->
@for (item of items; track item.id) {
  <div>{{ item }}</div>
}
```

---

#### Q10: When should you use @for vs *ngFor?

**Answer**:

**Use @for when**:
- ✅ New project (Angular 17+)
- ✅ Want built-in empty state
- ✅ Want better performance
- ✅ Want cleaner code

**Use *ngFor when**:
- ⚠️ Old project (Angular < 17)
- ⚠️ Team not familiar with new syntax
- ⚠️ Need backward compatibility

**Recommendation**:
- **New projects**: Use @for
- **Existing projects**: Gradually migrate or keep *ngFor (both work!)

---

## 12. *ngSwitch & @switch - Multiple Conditions

### 📖 *ngSwitch Definition

**`*ngSwitch`** is like a switch-case statement in programming. It displays different content based on a variable's value - perfect for handling multiple fixed options.

**In Simple Words**: "Check this variable's value, and show different content for each possible value."

**Real-Life Analogy**: Like a restaurant menu - show different dishes based on whether customer selects veg/non-veg/jain! 🍽️

---

### 📝 *ngSwitch Syntax and Examples

#### Basic Syntax
```html
<div [ngSwitch]="variable">
  <element *ngSwitchCase="value1">Content 1</element>
  <element *ngSwitchCase="value2">Content 2</element>
  <element *ngSwitchDefault>Default Content</element>
</div>
```

#### Example 1: Order Status Tracker

**TypeScript**:
```typescript
export class AppComponent {
  orderStatus: string = 'shipped'; // pending, confirmed, shipped, delivered, cancelled
  trackingNumber: string = 'TRK123456789';
  estimatedDelivery: string = 'Dec 30, 2025';
}
```

**HTML**:
```html
<div class="order-tracking" [ngSwitch]="orderStatus">
  <div *ngSwitchCase="'pending'">
    <h3>⏳ Order Pending</h3>
    <p>Your order is being processed...</p>
    <div class="progress" style="width: 20%"></div>
  </div>
  
  <div *ngSwitchCase="'confirmed'">
    <h3>✅ Order Confirmed!</h3>
    <p>Your order has been confirmed and will ship soon.</p>
    <div class="progress" style="width: 40%"></div>
  </div>
  
  <div *ngSwitchCase="'shipped'">
    <h3>🚚 Order Shipped!</h3>
    <p>Tracking Number: {{ trackingNumber }}</p>
    <p>Estimated Delivery: {{ estimatedDelivery }}</p>
    <div class="progress" style="width: 70%"></div>
  </div>
  
  <div *ngSwitchCase="'delivered'">
    <h3>🎉 Order Delivered!</h3>
    <p>Your order has been successfully delivered.</p>
    <button>Rate Your Experience</button>
    <div class="progress" style="width: 100%"></div>
  </div>
  
  <div *ngSwitchCase="'cancelled'">
    <h3>❌ Order Cancelled</h3>
    <p>Your order has been cancelled.</p>
    <button>View Refund Status</button>
  </div>
  
  <div *ngSwitchDefault>
    <h3>⚠️ Unknown Status</h3>
    <p>Unable to track order. Please contact support.</p>
  </div>
</div>
```

---

#### Example 2: Payment Method Selection

**TypeScript**:
```typescript
export class AppComponent {
  paymentMethod: string = 'upi'; // upi, card, netbanking, cod
  
  processPayment() {
    console.log('Processing payment via:', this.paymentMethod);
  }
}
```

**HTML**:
```html
<div class="payment-section">
  <h2>Select Payment Method 💳</h2>
  
  <select [(ngModel)]="paymentMethod">
    <option value="upi">UPI</option>
    <option value="card">Credit/Debit Card</option>
    <option value="netbanking">Net Banking</option>
    <option value="cod">Cash on Delivery</option>
  </select>
  
  <div class="payment-form" [ngSwitch]="paymentMethod">
    <div *ngSwitchCase="'upi'">
      <h3>Pay via UPI 📱</h3>
      <input placeholder="Enter UPI ID" type="text" />
      <p>Example: yourname@paytm, 9876543210@ybl</p>
      <button (click)="processPayment()">Pay Now</button>
    </div>
    
    <div *ngSwitchCase="'card'">
      <h3>Pay via Card 💳</h3>
      <input placeholder="Card Number" type="text" />
      <input placeholder="Expiry (MM/YY)" type="text" />
      <input placeholder="CVV" type="password" />
      <button (click)="processPayment()">Pay Securely</button>
    </div>
    
    <div *ngSwitchCase="'netbanking'">
      <h3>Net Banking 🏦</h3>
      <select>
        <option>Select Your Bank</option>
        <option>SBI</option>
        <option>HDFC</option>
        <option>ICICI</option>
        <option>Axis</option>
      </select>
      <button (click)="processPayment()">Proceed to Bank</button>
    </div>
    
    <div *ngSwitchCase="'cod'">
      <h3>Cash on Delivery 💵</h3>
      <p>✅ Pay when you receive the product</p>
      <p>Extra ₹50 will be charged for COD</p>
      <button (click)="processPayment()">Confirm Order</button>
    </div>
    
    <div *ngSwitchDefault>
      <p>Please select a payment method</p>
    </div>
  </div>
</div>
```

---

#### Example 3: User Role Dashboard

**TypeScript**:
```typescript
export class AppComponent {
  userRole: string = 'admin'; // admin, user, guest
}
```

**HTML**:
```html
<div class="dashboard" [ngSwitch]="userRole">
  <div *ngSwitchCase="'admin'">
    <h2>Admin Dashboard 👑</h2>
    <ul>
      <li><button>Manage Users</button></li>
      <li><button>View Analytics</button></li>
      <li><button>System Settings</button></li>
      <li><button>Database Backup</button></li>
    </ul>
  </div>
  
  <div *ngSwitchCase="'user'">
    <h2>User Dashboard 👤</h2>
    <ul>
      <li><button>My Profile</button></li>
      <li><button>My Orders</button></li>
      <li><button>Settings</button></li>
    </ul>
  </div>
  
  <div *ngSwitchCase="'guest'">
    <h2>Guest View 🚪</h2>
    <p>Please login to access full features</p>
    <button>Login</button>
    <button>Sign Up</button>
  </div>
  
  <div *ngSwitchDefault>
    <h2>Unknown Role ⚠️</h2>
    <p>Invalid user role. Contact support.</p>
  </div>
</div>
```

---

### 🎯 *ngSwitch vs Multiple *ngIf

**Using Multiple *ngIf** (Not Recommended ❌):
```html
<div *ngIf="status === 'pending'">Pending...</div>
<div *ngIf="status === 'confirmed'">Confirmed!</div>
<div *ngIf="status === 'shipped'">Shipped!</div>
<div *ngIf="status === 'delivered'">Delivered!</div>
<!-- All conditions checked - inefficient! -->
```

**Using *ngSwitch** (Recommended ✅):
```html
<div [ngSwitch]="status">
  <div *ngSwitchCase="'pending'">Pending...</div>
  <div *ngSwitchCase="'confirmed'">Confirmed!</div>
  <div *ngSwitchCase="'shipped'">Shipped!</div>
  <div *ngSwitchCase="'delivered'">Delivered!</div>
</div>
<!-- Only matching case checked - efficient! -->
```

---

### ⚠️ Important Rules for *ngSwitch

1. **ONE SWITCH CONTAINER**: `[ngSwitch]` only on parent element
2. **NO DUPLICATE CASES**: Can't have same value twice
3. **ONE DEFAULT ONLY**: Only one `*ngSwitchDefault` allowed
4. **STRING VALUES**: Must use quotes `'admin'`
5. **NUMBER VALUES**: No quotes needed `25`

---

### 📖 @switch Definition (Angular 17+)

**`@switch`** is the modern syntax for switch-case introduced in Angular 17+. Cleaner and faster than `*ngSwitch`!

---

### 📝 @switch Syntax and Examples

#### Basic Syntax
```html
@switch (variable) {
  @case (value1) {
    <!-- Content for value1 -->
  }
  @case (value2) {
    <!-- Content for value2 -->
  }
  @default {
    <!-- Default content -->
  }
}
```

#### Example: Weather App

**TypeScript**:
```typescript
export class AppComponent {
  weatherCondition: string = 'sunny'; // sunny, rainy, cloudy, stormy
  temperature: number = 28;
}
```

**HTML**:
```html
<div class="weather-app">
  <h2>Today's Weather 🌤️</h2>
  
  @switch (weatherCondition) {
    @case ('sunny') {
      <div class="weather-card sunny">
        <h3>☀️ Sunny Day!</h3>
        <p>Temperature: {{ temperature }}°C</p>
        <p>Perfect day for outdoor activities!</p>
        <p>💡 Tip: Wear sunscreen and sunglasses</p>
      </div>
    }
    @case ('rainy') {
      <div class="weather-card rainy">
        <h3>🌧️ Rainy Day</h3>
        <p>Temperature: {{ temperature - 5 }}°C</p>
        <p>Better stay indoors today!</p>
        <p>💡 Tip: Don't forget your umbrella! ☔</p>
      </div>
    }
    @case ('cloudy') {
      <div class="weather-card cloudy">
        <h3>☁️ Cloudy Weather</h3>
        <p>Temperature: {{ temperature - 2 }}°C</p>
        <p>Good day for a walk!</p>
      </div>
    }
    @default {
      <div class="weather-card">
        <h3>❓ Unknown Weather</h3>
        <p>Unable to fetch weather data</p>
      </div>
    }
  }
</div>
```

---

### 📊 *ngSwitch vs @switch Comparison

| Feature | *ngSwitch (Old) | @switch (New) |
|---------|-----------------|---------------|
| **Syntax** | `[ngSwitch]="var"` | `@switch (var) {}` |
| **Case syntax** | `*ngSwitchCase="value"` | `@case (value) {}` |
| **Default** | `*ngSwitchDefault` | `@default {}` |
| **Readability** | Good | Better ✅ |
| **Performance** | Good | Better ⚡ |
| **Version** | All versions | Angular 17+ only |

---

### ✅ Best Practices

#### DO's ✅

1. **Use for 3+ Fixed Options**
   ```html
   @switch (status) {
     @case ('option1') { Content 1 }
     @case ('option2') { Content 2 }
     @case ('option3') { Content 3 }
   }
   ```

2. **Always Include @default**
   ```html
   @switch (value) {
     @case ('a') { A }
     @default { Unknown value }
   }
   ```

3. **Use Quotes for Strings**
   ```html
   @case ('admin') { } <!-- Correct ✅ -->
   ```

#### DON'Ts ❌

1. **Don't Forget Quotes for Strings**
   ```html
   @case (admin) { } <!-- Wrong ❌ - treats as variable -->
   @case ('admin') { } <!-- Correct ✅ -->
   ```

2. **Don't Use for Simple true/false**
   ```html
   <!-- Use @if instead -->
   @if (condition) { } @else { }
   ```

---

### ❓ Interview Questions

#### Q1: What is *ngSwitch and when to use it?

**Answer**: `*ngSwitch` is a structural directive that displays different content based on a variable's value. Use it when you have 3+ fixed options.

**Example**:
```typescript
export class AppComponent {
  plan: string = 'premium';
}
```

```html
<div [ngSwitch]="plan">
  <div *ngSwitchCase="'free'">Free Plan</div>
  <div *ngSwitchCase="'premium'">Premium Plan ⭐</div>
  <div *ngSwitchCase="'enterprise'">Enterprise Plan 🏢</div>
  <div *ngSwitchDefault>Unknown Plan</div>
</div>
```

---

#### Q2: What's the difference between @switch and @if?

**Answer**:

**@switch**: Multiple fixed values
```html
@switch (role) {
  @case ('admin') { Admin }
  @case ('user') { User }
  @case ('guest') { Guest }
}
```

**@if**: Boolean conditions
```html
@if (isAdmin) {
  Admin
} @else {
  User
}
```

**Use @switch when**: Multiple fixed options (3+)  
**Use @if when**: Simple true/false or 1-2 conditions

---

#### Q3: Can you use @switch with numbers?

**Answer**: Yes! Don't use quotes for numbers.

**Example**:
```typescript
export class AppComponent {
  age: number = 25;
}
```

```html
@switch (age) {
  @case (18) { Just turned adult! }
  @case (21) { Can drink in US! }
  @case (25) { Quarter century! }
  @default { Age: {{ age }} }
}
```

---

#### Q4: What happens if no case matches and there's no @default?

**Answer**: Nothing renders.

**Example**:
```typescript
export class AppComponent {
  status: string = 'unknown';
}
```

```html
<!-- Without @default -->
@switch (status) {
  @case ('active') { Active }
  @case ('inactive') { Inactive }
}
<!-- If status='unknown', nothing shows! -->

<!-- With @default (better ✅) -->
@switch (status) {
  @case ('active') { Active }
  @case ('inactive') { Inactive }
  @default { Unknown status: {{ status }} }
}
```

---

#### Q5: Can you nest @switch inside @switch?

**Answer**: Yes, but use sparingly.

**Example**:
```typescript
export class AppComponent {
  userType: string = 'customer';
  plan: string = 'premium';
}
```

```html
@switch (userType) {
  @case ('customer') {
    <h3>Customer Portal</h3>
    @switch (plan) {
      @case ('free') { Free features }
      @case ('premium') { Premium features ⭐ }
    }
  }
  @case ('admin') {
    <h3>Admin Portal</h3>
  }
}
```

---

#### Q3: How do you use else with *ngIf?

**Answer**: Use `ng-template` with a template reference variable.

**Syntax**:
```html
<div *ngIf="condition; else elseBlock">
  True content
</div>

<ng-template #elseBlock>
  False content
</ng-template>
```

**Example**:
```typescript
export class AppComponent {
  isOnline: boolean = true;
}
```

```html
<div *ngIf="isOnline; else offline">
  <p>✅ You are online!</p>
</div>

<ng-template #offline>
  <p>❌ You are offline. Check your connection.</p>
</ng-template>
```

---

#### Q4: Can you use then and else together with *ngIf?

**Answer**: Yes! You can use both `then` and `else` clauses.

**Syntax**:
```html
<div *ngIf="condition; then thenBlock; else elseBlock"></div>

<ng-template #thenBlock>Content when true</ng-template>
<ng-template #elseBlock>Content when false</ng-template>
```

**Example**:
```typescript
export class AppComponent {
  hasPermission: boolean = true;
}
```

```html
<div *ngIf="hasPermission; then allowed; else denied"></div>

<ng-template #allowed>
  <div class="success">
    <h3>Access Granted ✅</h3>
    <p>You have permission to view this content.</p>
  </div>
</ng-template>

<ng-template #denied>
  <div class="error">
    <h3>Access Denied ❌</h3>
    <p>You don't have permission to view this content.</p>
  </div>
</ng-template>
```

---

#### Q5: What is the 'as' keyword in *ngIf?

**Answer**: The `as` keyword stores the evaluated value in a local variable, avoiding multiple function calls.

**Without 'as'** (Multiple function calls):
```typescript
export class AppComponent {
  getData() {
    console.log('Function called!');
    return { name: 'Rahul', age: 24 };
  }
}
```

```html
<div *ngIf="getData()">
  <p>{{ getData().name }}</p>  <!-- Function called again! -->
  <p>{{ getData().age }}</p>   <!-- Function called again! -->
</div>
<!-- Function called 3 times total! ❌ -->
```

**With 'as'** (Single function call):
```html
<div *ngIf="getData() as data">
  <p>{{ data.name }}</p>
  <p>{{ data.age }}</p>
</div>
<!-- Function called only once! ✅ -->
```

---

#### Q6: How does *ngIf affect performance compared to CSS hiding?

**Answer**:

**`*ngIf` (Better Performance)**:
- ✅ Removes element from DOM → Less memory
- ✅ Browser doesn't render it → Faster
- ✅ Component destroyed → Resources freed
- ❌ Recreates component when shown again

**CSS `display:none` (Worse Performance)**:
- ❌ Element stays in DOM → More memory
- ❌ Browser still processes it → Slower
- ❌ Component stays alive → Uses resources
- ✅ No recreation needed (faster toggle)

**Example**:
```typescript
export class AppComponent {
  showHeavyComponent: boolean = false;
}
```

```html
<!-- Better for heavy components -->
<app-heavy-component *ngIf="showHeavyComponent"></app-heavy-component>

<!-- Worse - component always in memory -->
<app-heavy-component [style.display]="showHeavyComponent ? 'block' : 'none'">
</app-heavy-component>
```

**Recommendation**: Use `*ngIf` unless you need smooth animations or very frequent toggling.

---

#### Q7: Can you use multiple conditions in *ngIf?

**Answer**: Yes! You can use logical operators (`&&`, `||`, `!`).

**Example**:
```typescript
export class AppComponent {
  age: number = 25;
  hasTicket: boolean = true;
  isVIP: boolean = false;
}
```

```html
<!-- AND operator -->
<div *ngIf="age >= 18 && hasTicket">
  Welcome to the concert! 🎵
</div>

<!-- OR operator -->
<div *ngIf="isVIP || age >= 60">
  You get priority seating! ⭐
</div>

<!-- NOT operator -->
<div *ngIf="!hasTicket">
  Please buy a ticket first! 🎫
</div>

<!-- Complex condition -->
<div *ngIf="(age >= 18 && hasTicket) || isVIP">
  Entry granted! ✅
</div>
```

**Best Practice**: For complex conditions, create a getter:
```typescript
get canEnter(): boolean {
  return (this.age >= 18 && this.hasTicket) || this.isVIP;
}
```

```html
<div *ngIf="canEnter">Entry granted!</div>
```

---

#### Q8: What happens to component lifecycle when *ngIf toggles?

**Answer**: When `*ngIf` becomes false, the component is **destroyed**. When it becomes true again, the component is **recreated** with a fresh lifecycle.

**Example**:
```typescript
@Component({
  selector: 'app-counter',
  template: `<p>Counter: {{ count }}</p>`
})
export class CounterComponent implements OnInit, OnDestroy {
  count: number = 0;
  
  ngOnInit() {
    console.log('Component initialized! 🎉');
    this.count = 10;
  }
  
  ngOnDestroy() {
    console.log('Component destroyed! 💀');
  }
}
```

```typescript
export class AppComponent {
  showCounter: boolean = true;
  
  toggle() {
    this.showCounter = !this.showCounter;
  }
}
```

```html
<button (click)="toggle()">Toggle Counter</button>
<app-counter *ngIf="showCounter"></app-counter>
```

**What happens**:
1. Click toggle → `showCounter = false`
2. `ngOnDestroy()` called → Component destroyed
3. Click toggle again → `showCounter = true`
4. `ngOnInit()` called → Component recreated (count reset to 0, then 10)

**Important**: State is lost when component is destroyed!

---

#### Q9: How do you check for null/undefined with *ngIf?

**Answer**: `*ngIf` automatically checks for null/undefined and falsy values.

**Example**:
```typescript
export class AppComponent {
  user: any = null;  // or undefined
  
  loadUser() {
    setTimeout(() => {
      this.user = {
        name: 'Rahul',
        email: 'rahul@example.com'
      };
    }, 2000);
  }
}
```

```html
<!-- Shows only when user is not null/undefined -->
<div *ngIf="user">
  <h3>User Profile</h3>
  <p>Name: {{ user.name }}</p>
  <p>Email: {{ user.email }}</p>
</div>

<!-- Shows when user is null/undefined -->
<div *ngIf="!user">
  <p>Loading user data... ⏳</p>
</div>
```

**With 'as' keyword** (Store and check):
```html
<div *ngIf="user as userData">
  <!-- userData is guaranteed to be not null here -->
  <p>{{ userData.name }}</p>
</div>
```

---

#### Q10: What are common mistakes with *ngIf?

**Answer**:

**Mistake 1**: Forgetting the asterisk
```html
<!-- Wrong ❌ -->
<div ngIf="condition">Content</div>

<!-- Correct ✅ -->
<div *ngIf="condition">Content</div>
```

**Mistake 2**: Using with [hidden] together
```html
<!-- Redundant ❌ -->
<div *ngIf="show" [hidden]="!show">Content</div>

<!-- Just use *ngIf ✅ -->
<div *ngIf="show">Content</div>
```

**Mistake 3**: Complex logic in template
```html
<!-- Bad ❌ -->
<div *ngIf="user && user.age > 18 && user.hasPermission && user.isActive">
  
<!-- Good ✅ - Move to component -->
<div *ngIf="canAccess">
```

**Mistake 4**: Multiple structural directives
```html
<!-- Wrong ❌ -->
<div *ngIf="condition" *ngFor="let item of items">

<!-- Correct ✅ -->
<ng-container *ngIf="condition">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

---

## 9. @if Directive - Modern Syntax (Angular 17+)

### 📖 Definition

**`@if`** is the new control flow syntax introduced in Angular 17+. It's a modern, cleaner alternative to `*ngIf` with better performance and built-in else support. While `*ngIf` still works, `@if` is the recommended approach for new projects.

**In Simple Words**: `@if` is like `*ngIf` but with a cleaner syntax, better performance, and easier to read!

**Why the Change?**:
- ⚡ **Faster** - Better performance and rendering
- 🎯 **Cleaner** - More readable code
- 🔧 **Built-in** - No need for ng-template for else blocks
- 🚀 **Modern** - Follows modern programming patterns

---

### 📝 Syntax and Examples

#### Basic Syntax
```html
@if (condition) {
  <!-- Content when true -->
} @else {
  <!-- Content when false -->
}
```

#### Example 1: Login Status (Simple if/else)

**TypeScript**:
```typescript
export class AppComponent {
  isLoggedIn: boolean = false;
  userName: string = 'Rahul Kumar';
  
  login() {
    this.isLoggedIn = true;
  }
  
  logout() {
    this.isLoggedIn = false;
  }
}
```

**HTML**:
```html
<div class="auth-section">
  <button (click)="login()">Simulate Login</button>
  <button (click)="logout()">Simulate Logout</button>
  
  @if (isLoggedIn) {
    <div class="welcome">
      <h2>Welcome back, {{ userName }}! 🎉</h2>
      <p>You are successfully logged in.</p>
      <button (click)="logout()">Logout</button>
    </div>
  } @else {
    <div class="login-prompt">
      <h2>Please Login 🔐</h2>
      <p>You need to login to access your account.</p>
      <button (click)="login()">Login Now</button>
    </div>
  }
</div>
```

**Output**:
- `isLoggedIn = true` → Shows welcome message
- `isLoggedIn = false` → Shows login prompt

---

#### Example 2: Loading States (if/else if/else)

**TypeScript**:
```typescript
export class AppComponent {
  dataState: 'loading' | 'success' | 'error' = 'loading';
  data: string[] = [];
  errorMessage: string = '';
  
  loadData() {
    this.dataState = 'loading';
    
    // Simulate API call
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        this.dataState = 'success';
        this.data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
      } else {
        this.dataState = 'error';
        this.errorMessage = 'Failed to fetch data from server';
      }
    }, 2000);
  }
  
  ngOnInit() {
    this.loadData();
  }
}
```

**HTML**:
```html
<div class="data-container">
  <h2>API Data Loading Example</h2>
  <button (click)="loadData()">Reload Data</button>
  
  @if (dataState === 'loading') {
    <div class="loader">
      <p>Loading data... ⏳</p>
      <div class="spinner"></div>
    </div>
  } @else if (dataState === 'success') {
    <div class="success">
      <h3>Data Loaded Successfully! ✅</h3>
      <ul>
        @for (item of data; track item) {
          <li>{{ item }}</li>
        }
      </ul>
      <p>Total items: {{ data.length }}</p>
    </div>
  } @else {
    <div class="error">
      <h3>Error Loading Data ❌</h3>
      <p>{{ errorMessage }}</p>
      <button (click)="loadData()">Try Again</button>
    </div>
  }
</div>
```

---

#### Example 3: User Roles (Nested Conditions)

**TypeScript**:
```typescript
export class AppComponent {
  userRole: 'admin' | 'user' | 'guest' = 'user';
  isPremium: boolean = true;
  userName: string = 'Rahul';
}
```

**HTML**:
```html
<div class="dashboard">
  <h2>Dashboard Access Control</h2>
  
  @if (userRole === 'admin') {
    <div class="admin-panel">
      <h3>Admin Dashboard 👑</h3>
      <p>Welcome Administrator, {{ userName }}</p>
      <ul>
        <li><button>Manage Users</button></li>
        <li><button>View Analytics</button></li>
        <li><button>System Settings</button></li>
        <li><button>Database Backup</button></li>
      </ul>
    </div>
  } @else if (userRole === 'user') {
    <!-- Nested condition -->
    @if (isPremium) {
      <div class="premium-user">
        <h3>Premium User ⭐</h3>
        <p>Hello {{ userName }}, enjoy all premium features!</p>
        <ul>
          <li>✅ Unlimited access</li>
          <li>✅ No advertisements</li>
          <li>✅ Priority support</li>
          <li>✅ HD content</li>
        </ul>
      </div>
    } @else {
      <div class="regular-user">
        <h3>Free User</h3>
        <p>Hello {{ userName }}, you're using the free version.</p>
        <ul>
          <li>⚠️ Limited access</li>
          <li>⚠️ Ads supported</li>
          <li>⚠️ Standard quality</li>
        </ul>
        <button>Upgrade to Premium 🚀</button>
      </div>
    }
  } @else {
    <div class="guest">
      <h3>Guest Mode 👤</h3>
      <p>You are browsing as a guest.</p>
      <button>Sign Up for Free</button>
      <button>Login</button>
    </div>
  }
</div>
```

---

#### Example 4: Shopping Cart Status

**TypeScript**:
```typescript
export class AppComponent {
  cartItems: any[] = [];
  cartTotal: number = 0;
  
  addItem(name: string, price: number) {
    this.cartItems.push({ name, price });
    this.calculateTotal();
  }
  
  clearCart() {
    this.cartItems = [];
    this.cartTotal = 0;
  }
  
  calculateTotal() {
    this.cartTotal = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
```

**HTML**:
```html
<div class="shopping-cart">
  <h2>Shopping Cart 🛒</h2>
  
  <!-- Test buttons -->
  <button (click)="addItem('Laptop', 50000)">Add Laptop</button>
  <button (click)="addItem('Mouse', 500)">Add Mouse</button>
  <button (click)="clearCart()">Clear Cart</button>
  
  @if (cartItems.length > 0) {
    <div class="cart-full">
      <h3>Your Cart ({{ cartItems.length }} items)</h3>
      <ul>
        @for (item of cartItems; track item.name) {
          <li>{{ item.name }} - ₹{{ item.price }}</li>
        }
      </ul>
      <p class="total"><strong>Total: ₹{{ cartTotal }}</strong></p>
      <button class="checkout">Proceed to Checkout</button>
      <button (click)="clearCart()">Clear Cart</button>
    </div>
  } @else {
    <div class="cart-empty">
      <p>Your cart is empty! 😢</p>
      <p>Add some items to get started.</p>
      <button>Start Shopping</button>
    </div>
  }
</div>
```

---

### 🎯 *ngIf vs @if - Comparison

| Feature | *ngIf (Old) | @if (New) |
|---------|-------------|-----------|
| **Syntax** | `*ngIf="condition"` | `@if (condition) { }` |
| **Else support** | Needs ng-template | Built-in `@else` |
| **Readability** | Good | Better ✅ |
| **Performance** | Good | Better ✅ |
| **Angular version** | All versions | 17+ only |
| **Template ref** | Required for else | Not needed ✅ |

---

### 📊 Syntax Comparison

#### OLD WAY (*ngIf):
```html
<div *ngIf="condition; else elseBlock">
  Content when true
</div>

<ng-template #elseBlock>
  Content when false
</ng-template>
```

#### NEW WAY (@if) - CLEANER! ✅:
```html
@if (condition) {
  Content when true
} @else {
  Content when false
}
```

---

#### Multiple Conditions Comparison

**OLD WAY** (*ngIf with ng-template):
```html
<div *ngIf="status === 'loading'; else checkSuccess">
  Loading...
</div>

<ng-template #checkSuccess>
  <div *ngIf="status === 'success'; else showError">
    Success!
  </div>
</ng-template>

<ng-template #showError>
  Error!
</ng-template>
```

**NEW WAY** (@if) - MUCH CLEANER! ✅:
```html
@if (status === 'loading') {
  Loading...
} @else if (status === 'success') {
  Success!
} @else {
  Error!
}
```

---

### ✅ Best Practices

#### DO's ✅

1. **Use @if in New Projects (Angular 17+)**
   ```html
   <!-- Recommended for new projects ✅ -->
   @if (condition) {
     Content
   }
   ```

2. **Use @else if for Multiple Conditions**
   ```html
   @if (score >= 90) {
     Grade A
   } @else if (score >= 75) {
     Grade B
   } @else {
     Grade C
   }
   ```

3. **Nest Conditions When Needed**
   ```html
   @if (isLoggedIn) {
     @if (isPremium) {
       Premium content
     } @else {
       Free content
     }
   }
   ```

4. **Use Parentheses and Curly Braces**
   ```html
   <!-- Always use () and {} ✅ -->
   @if (condition) { content }
   ```

#### DON'Ts ❌

1. **Don't Forget Parentheses**
   ```html
   <!-- Wrong ❌ -->
   @if condition { }
   
   <!-- Correct ✅ -->
   @if (condition) { }
   ```

2. **Don't Forget Curly Braces**
   ```html
   <!-- Wrong ❌ -->
   @if (condition)
     Content
   
   <!-- Correct ✅ -->
   @if (condition) {
     Content
   }
   ```

3. **Don't Mix Old and New Syntax**
   ```html
   <!-- Confusing ❌ -->
   @if (condition1) {
     <div *ngIf="condition2">Content</div>
   }
   
   <!-- Better - consistent ✅ -->
   @if (condition1) {
     @if (condition2) {
       Content
     }
   }
   ```

---

### 🔧 Migration from *ngIf to @if

Angular provides automatic migration tool!

**Command**:
```bash
ng generate @angular/core:control-flow
```

**Before** (*ngIf):
```html
<div *ngIf="isLoggedIn; else loginPrompt">
  Welcome!
</div>
<ng-template #loginPrompt>
  Please login
</ng-template>
```

**After** (@if):
```html
@if (isLoggedIn) {
  Welcome!
} @else {
  Please login
}
```

---

### ❓ Interview Questions

#### Q1: What is @if and how is it different from *ngIf?

**Answer**: `@if` is the new control flow syntax in Angular 17+ that replaces `*ngIf`. It's cleaner, faster, and has built-in else support.

**Differences**:

**@if (New)**:
- ✅ Cleaner syntax with `@if (condition) { }`
- ✅ Built-in `@else` and `@else if`
- ✅ Better performance
- ✅ No ng-template needed

**ngIf (Old)**:
- ⚠️ Requires ng-template for else
- ⚠️ More verbose syntax
- ✅ Works in all Angular versions

**Example**:
```typescript
export class AppComponent {
  isOnline: boolean = true;
}
```

```html
<!-- New way ✅ -->
@if (isOnline) {
  You are online ✅
} @else {
  You are offline ❌
}

<!-- Old way -->
<div *ngIf="isOnline; else offline">You are online ✅</div>
<ng-template #offline>You are offline ❌</ng-template>
```

---

#### Q2: Can you use @else if with @if?

**Answer**: Yes! `@else if` allows multiple conditions, making code much cleaner than nested *ngIf.

**Example**:
```typescript
export class AppComponent {
  temperature: number = 25;
}
```

```html
@if (temperature > 30) {
  <p>It's hot! 🔥 {{ temperature }}°C</p>
} @else if (temperature > 20) {
  <p>Perfect weather! ☀️ {{ temperature }}°C</p>
} @else if (temperature > 10) {
  <p>It's cool! 🌤️ {{ temperature }}°C</p>
} @else {
  <p>It's cold! ❄️ {{ temperature }}°C</p>
}
```

---

#### Q3: How do you migrate from *ngIf to @if?

**Answer**: Angular provides an automatic migration schematic.

**Step 1 - Run migration**:
```bash
ng generate @angular/core:control-flow
```

**Step 2 - Manual conversion** (if needed):

**Before**:
```html
<div *ngIf="hasData; else noData">
  Data: {{ data }}
</div>
<ng-template #noData>
  No data available
</ng-template>
```

**After**:
```html
@if (hasData) {
  Data: {{ data }}
} @else {
  No data available
}
```

---

#### Q4: Which should you use - *ngIf or @if?

**Answer**:

**Use @if when**:
- ✅ New project (Angular 17+)
- ✅ Want better performance
- ✅ Want cleaner code

**Use *ngIf when**:
- ⚠️ Old project (Angular < 17)
- ⚠️ Team not familiar with new syntax yet
- ⚠️ Need backward compatibility

**Recommendation**: 
- **New projects**: Use @if
- **Existing projects**: Gradually migrate or keep *ngIf (both work fine)

---

#### Q5: Can you nest @if conditions?

**Answer**: Yes! You can nest @if inside another @if.

**Example**:
```typescript
export class AppComponent {
  isLoggedIn: boolean = true;
  hasPermission: boolean = true;
  isPremium: boolean = false;
}
```

```html
@if (isLoggedIn) {
  <div>Welcome!</div>
  
  @if (hasPermission) {
    <div>You can view this content</div>
    
    @if (isPremium) {
      <div>Premium features unlocked! ⭐</div>
    } @else {
      <div>Upgrade to premium!</div>
    }
  } @else {
    <div>No permission ❌</div>
  }
} @else {
  <div>Please login</div>
}
```

---

#### Q6: Does @if work with Angular versions below 17?

**Answer**: No, `@if` only works with Angular 17 and above.

**Versions**:
- Angular < 17: Use `*ngIf`
- Angular 17+: Can use both `*ngIf` and `@if`

**Check your version**:
```bash
ng version
```

**If Angular < 17**: Stick with *ngIf
**If Angular >= 17**: Start using @if for new code

---

#### Q7: What are the performance benefits of @if?

**Answer**: `@if` has better performance than `*ngIf` due to:

1. **Optimized rendering** - Faster DOM updates
2. **Less overhead** - No ng-template creation needed
3. **Better tree-shaking** - Smaller bundle size
4. **Improved change detection** - More efficient

**Benchmark example**:
```typescript
// Rendering 1000 items conditionally
items = Array(1000).fill(0).map((_, i) => ({
  id: i,
  show: i % 2 === 0
}));
```

```html
<!-- @if is faster -->
@for (item of items; track item.id) {
  @if (item.show) {
    <div>{{ item.id }}</div>
  }
}

<!-- *ngIf is slower -->
<ng-container *ngFor="let item of items; trackBy: trackById">
  <div *ngIf="item.show">{{ item.id }}</div>
</ng-container>
```

**Result**: @if renders ~15-20% faster in large lists!

---

#### Q8: Can you use @if with async data?

**Answer**: Yes! Works perfectly with observables and async pipes.

**Example**:
```typescript
export class AppComponent {
  user$ = new Observable<any>(observer => {
    setTimeout(() => {
      observer.next({ name: 'Rahul', age: 24 });
    }, 2000);
  });
}
```

```html
@if (user$ | async; as user) {
  <div>
    <h3>User Profile</h3>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
  </div>
} @else {
  <div>Loading user data... ⏳</div>
}
```

---

#### Q9: What are common mistakes with @if?

**Answer**:

**Mistake 1** - Forgetting parentheses:
```html
<!-- Wrong ❌ -->
@if condition { }

<!-- Correct ✅ -->
@if (condition) { }
```

**Mistake 2** - Forgetting curly braces:
```html
<!-- Wrong ❌ -->
@if (condition)
  <div>Content</div>

<!-- Correct ✅ -->
@if (condition) {
  <div>Content</div>
}
```

**Mistake 3** - Missing @else syntax:
```html
<!-- Wrong ❌ -->
@if (condition) { } 
else { }  // 'else' alone doesn't work

<!-- Correct ✅ -->
@if (condition) { }
@else { }  // Must use '@else'
```

**Mistake 4** - Mixing with *ngIf unnecessarily:
```html
<!-- Confusing ❌ -->
@if (condition1) {
  <div *ngIf="condition2">Content</div>
}

<!-- Better ✅ -->
@if (condition1) {
  @if (condition2) {
    Content
  }
}
```

---

#### Q10: Should you refactor all *ngIf to @if in existing projects?

**Answer**: It depends on your project.

**When to refactor**:
- ✅ Already on Angular 17+
- ✅ Active development (not maintenance mode)
- ✅ Team is familiar with new syntax
- ✅ Have good test coverage

**When NOT to refactor**:
- ❌ Old Angular version (< 17)
- ❌ Large legacy codebase with limited tests
- ❌ Team resistance to new syntax
- ❌ Project in maintenance mode

**Best approach**:
1. Use @if for **new features**
2. Gradually migrate **during regular refactoring**
3. Don't rush to change everything at once
4. Both syntaxes work together fine!

**Example of gradual migration**:
```html
<!-- Old feature - keep *ngIf -->
<div *ngIf="oldFeature">...</div>

<!-- New feature - use @if -->
@if (newFeature) {
  ...
}
```

---

## 13. ngClass - Dynamic CSS Classes

### 📖 Definition

**`ngClass`** is an attribute directive that dynamically adds or removes CSS classes based on conditions. It allows you to control styling from TypeScript, making your UI reactive to data changes.

**In Simple Words**: "Add or remove CSS classes based on conditions - like changing button color when clicked or applying dark mode!"

**Real-Life Analogy**: Like Instagram's dark mode toggle - click once and the whole UI changes color! 🌓

---

### 📝 Syntax (4 Different Ways)

#### 1️⃣ String (Single class)
```html
<div [ngClass]="'className'">Content</div>
```

#### 2️⃣ Variable (Class name from TypeScript)
```html
<div [ngClass]="myClass">Content</div>
```

#### 3️⃣ Array (Multiple classes)
```html
<div [ngClass]="['class1', 'class2', 'class3']">Content</div>
```

#### 4️⃣ Object (Conditional classes - Most Common! ⭐)
```html
<div [ngClass]="{'className': condition}">Content</div>
```

---

### 💡 Real-Life Examples

#### Example 1: Dark Mode Toggle (Instagram/Twitter Style)

**TypeScript**:
```typescript
export class AppComponent {
  isDarkMode: boolean = false;
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
```

**HTML**:
```html
<div class="app" [ngClass]="{'dark-mode': isDarkMode, 'light-mode': !isDarkMode}">
  <nav class="navbar">
    <h1>My App</h1>
    <button (click)="toggleDarkMode()">
      {{ isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
    </button>
  </nav>
  
  <main class="content">
    <p>This content changes based on theme!</p>
  </main>
</div>
```

**CSS**:
```css
/* Light Mode */
.light-mode {
  background-color: white;
  color: black;
}

.light-mode .navbar {
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

/* Dark Mode */
.dark-mode {
  background-color: #1a1a1a;
  color: white;
}

.dark-mode .navbar {
  background-color: #2d2d2d;
  border-bottom: 1px solid #444;
}
```

---

#### Example 2: Button States (Active, Disabled, Loading)

**TypeScript**:
```typescript
export class AppComponent {
  isLoading: boolean = false;
  isDisabled: boolean = false;
  isActive: boolean = false;
  
  handleClick() {
    this.isLoading = true;
    this.isDisabled = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.isDisabled = false;
      this.isActive = true;
      alert('Action completed!');
    }, 2000);
  }
}
```

**HTML**:
```html
<button 
  [ngClass]="{
    'btn': true,
    'btn-loading': isLoading,
    'btn-disabled': isDisabled,
    'btn-active': isActive
  }"
  (click)="handleClick()"
  [disabled]="isDisabled">
  
  <span *ngIf="!isLoading">Click Me</span>
  <span *ngIf="isLoading">Loading... ⏳</span>
</button>
```

**CSS**:
```css
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: all 0.3s ease;
}

.btn-loading {
  background-color: #6c757d;
  cursor: wait;
  opacity: 0.7;
}

.btn-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-active {
  background-color: #28a745;
  transform: scale(1.05);
}
```

---

#### Example 3: Alert Messages (Success, Error, Warning, Info)

**TypeScript**:
```typescript
export class AppComponent {
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';
  alertMessage: string = 'This is an info message';
  showAlert: boolean = true;
  
  showSuccess() {
    this.alertType = 'success';
    this.alertMessage = '✅ Your profile has been updated successfully!';
    this.showAlert = true;
  }
  
  showError() {
    this.alertType = 'error';
    this.alertMessage = '❌ Failed to save changes. Please try again.';
    this.showAlert = true;
  }
  
  showWarning() {
    this.alertType = 'warning';
    this.alertMessage = '⚠️ Your session will expire in 5 minutes.';
    this.showAlert = true;
  }
  
  closeAlert() {
    this.showAlert = false;
  }
}
```

**HTML**:
```html
<div class="demo-buttons">
  <button (click)="showSuccess()">Show Success</button>
  <button (click)="showError()">Show Error</button>
  <button (click)="showWarning()">Show Warning</button>
</div>

<div 
  *ngIf="showAlert"
  class="alert"
  [ngClass]="{
    'alert-success': alertType === 'success',
    'alert-error': alertType === 'error',
    'alert-warning': alertType === 'warning',
    'alert-info': alertType === 'info'
  }">
  <span>{{ alertMessage }}</span>
  <button class="close-btn" (click)="closeAlert()">×</button>
</div>
```

**CSS**:
```css
.alert {
  padding: 15px 20px;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slideIn 0.3s ease;
}

.alert-success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.alert-error {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.alert-warning {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
}

.alert-info {
  background-color: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

---

#### Example 4: Product Cards with Hover Effects

**TypeScript**:
```typescript
export class AppComponent {
  hoveredCard: number | null = null;
  
  products = [
    { id: 1, name: 'Laptop', price: 45000, inStock: true },
    { id: 2, name: 'Phone', price: 25000, inStock: false },
    { id: 3, name: 'Tablet', price: 18000, inStock: true }
  ];
  
  onCardHover(id: number) {
    this.hoveredCard = id;
  }
  
  onCardLeave() {
    this.hoveredCard = null;
  }
}
```

**HTML**:
```html
<div class="products-grid">
  <div 
    *ngFor="let product of products"
    class="product-card"
    [ngClass]="{
      'card-hovered': hoveredCard === product.id,
      'out-of-stock': !product.inStock
    }"
    (mouseenter)="onCardHover(product.id)"
    (mouseleave)="onCardLeave()">
    
    <img src="product.jpg" alt="{{ product.name }}">
    <h3>{{ product.name }}</h3>
    <p class="price">₹{{ product.price }}</p>
    
    <span 
      class="stock-badge"
      [ngClass]="{
        'badge-success': product.inStock,
        'badge-danger': !product.inStock
      }">
      {{ product.inStock ? 'In Stock ✅' : 'Out of Stock ❌' }}
    </span>
    
    <button [disabled]="!product.inStock">
      {{ product.inStock ? 'Add to Cart' : 'Notify Me' }}
    </button>
  </div>
</div>
```

**CSS**:
```css
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.card-hovered {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  border-color: #007bff;
}

.out-of-stock {
  opacity: 0.6;
  filter: grayscale(50%);
}

.badge-success {
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}

.badge-danger {
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}
```

---

#### Example 5: Multiple Classes from Array

**TypeScript**:
```typescript
export class AppComponent {
  size: string = 'medium'; // small, medium, large
  theme: string = 'primary'; // primary, secondary, success
  isRounded: boolean = true;
  hasShadow: boolean = true;
  
  get buttonClasses(): string[] {
    const classes = ['btn', `btn-${this.size}`, `btn-${this.theme}`];
    
    if (this.isRounded) {
      classes.push('btn-rounded');
    }
    
    if (this.hasShadow) {
      classes.push('btn-shadow');
    }
    
    return classes;
  }
}
```

**HTML**:
```html
<div class="button-customizer">
  <h3>Customize Button</h3>
  
  <label>
    Size:
    <select [(ngModel)]="size">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  </label>
  
  <label>
    Theme:
    <select [(ngModel)]="theme">
      <option value="primary">Primary</option>
      <option value="secondary">Secondary</option>
      <option value="success">Success</option>
    </select>
  </label>
  
  <label>
    <input type="checkbox" [(ngModel)]="isRounded">
    Rounded Corners
  </label>
  
  <label>
    <input type="checkbox" [(ngModel)]="hasShadow">
    Shadow Effect
  </label>
  
  <button [ngClass]="buttonClasses">
    Preview Button
  </button>
</div>
```

---

### 📊 ngClass Syntax Comparison

| Method | Syntax | Use Case |
|--------|--------|----------|
| **String** | `[ngClass]="'class'"` | Single static class |
| **Variable** | `[ngClass]="className"` | Dynamic single class |
| **Array** | `[ngClass]="['c1', 'c2']"` | Multiple classes |
| **Object** | `[ngClass]="{'c1': true}"` | Conditional (BEST!) ⭐ |
| **Function** | `[ngClass]="getClasses()"` | Complex logic |

---

### ✅ Best Practices

#### DO's ✅

1. **Use Object Syntax for Conditionals**
   ```html
   <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
   ```

2. **Move Complex Logic to Component**
   ```typescript
   get cardClasses() {
     return {
       'premium': this.isPremium,
       'expired': this.isExpired,
       'highlighted': this.isHighlighted
     };
   }
   ```
   
   ```html
   <div [ngClass]="cardClasses">
   ```

3. **Use CSS Classes Over Inline Styles**
   ```html
   <!-- Good ✅ -->
   <div [ngClass]="{'success': isSuccess}">
   
   <!-- Avoid ❌ -->
   <div [style.color]="isSuccess ? 'green' : 'red'">
   ```

#### DON'Ts ❌

1. **Don't Put Complex Logic in Template**
   ```html
   <!-- Bad ❌ -->
   <div [ngClass]="{'class': condition1 && condition2 || condition3}">
   
   <!-- Good ✅ -->
   <div [ngClass]="{'class': shouldApplyClass}">
   ```

2. **Don't Mix Class and ngClass for Same Classes**
   ```html
   <!-- Confusing ❌ -->
   <div class="active" [ngClass]="{'active': isActive}">
   
   <!-- Clear ✅ -->
   <div [ngClass]="{'active': isActive}">
   ```

---

### ❓ Interview Questions

#### Q1: What is ngClass and when to use it?

**Answer**: `ngClass` is an attribute directive that dynamically adds/removes CSS classes based on conditions.

**Example**:
```typescript
export class AppComponent {
  isActive: boolean = true;
  hasError: boolean = false;
}
```

```html
<div [ngClass]="{
  'active': isActive,
  'error': hasError
}">
  Content
</div>

<!-- CSS classes applied:
- .active (because isActive = true)
- Not .error (because hasError = false)
-->
```

---

#### Q2: What are the different ways to use ngClass?

**Answer**: 4 ways:

1. **String**: `[ngClass]="'my-class'"`
2. **Variable**: `[ngClass]="myClassName"`
3. **Array**: `[ngClass]="['class1', 'class2']"`
4. **Object**: `[ngClass]="{'class1': true, 'class2': false}"`

**Example**:
```typescript
export class AppComponent {
  className = 'highlight';
  classes = ['bold', 'italic'];
}
```

```html
<!-- String -->
<div [ngClass]="'highlight'">Text</div>

<!-- Variable -->
<div [ngClass]="className">Text</div>

<!-- Array -->
<div [ngClass]="classes">Text</div>

<!-- Object (most common) -->
<div [ngClass]="{'highlight': true, 'bold': false}">Text</div>
```

---

#### Q3: Can you use multiple classes with ngClass?

**Answer**: Yes! Use array or object syntax.

**Example**:
```typescript
export class AppComponent {
  isPremium: boolean = true;
  isActive: boolean = true;
  hasNotifications: boolean = false;
}
```

```html
<!-- Object syntax (conditional) -->
<div [ngClass]="{
  'premium': isPremium,
  'active': isActive,
  'has-notifications': hasNotifications
}">
  User Card
</div>

<!-- Array syntax (all applied) -->
<div [ngClass]="['card', 'shadow', 'rounded']">
  Card
</div>
```

---

#### Q4: What's the difference between class and ngClass?

**Answer**:

**`class`**: Static classes, always applied
```html
<div class="card shadow">Static classes</div>
```

**`[ngClass]`**: Dynamic classes, conditional
```html
<div [ngClass]="{'active': isActive}">Dynamic classes</div>
```

**Combined** (both work together):
```html
<div class="card" [ngClass]="{'active': isActive, 'premium': isPremium}">
  Both static and dynamic
</div>
```

---

#### Q5: How do you remove a class dynamically with ngClass?

**Answer**: Set condition to `false` in object syntax.

**Example**:
```typescript
export class AppComponent {
  isHighlighted: boolean = true;
  
  removeHighlight() {
    this.isHighlighted = false;  // Class removed!
  }
}
```

```html
<div [ngClass]="{'highlight': isHighlighted}">
  Highlighted content
</div>

<button (click)="removeHighlight()">Remove Highlight</button>

<!-- When isHighlighted = false, 'highlight' class is removed -->
```

---

## 14. ngStyle - Dynamic Inline Styles

### 📖 Definition

**`ngStyle`** is an attribute directive that dynamically applies inline CSS styles based on expressions. Use it when you need truly dynamic values like widths, colors from variables, or calculated positions.

**In Simple Words**: "Control CSS styles directly from TypeScript - like changing progress bar width or color picker values!"

**Real-Life Analogy**: Like a customizable product configurator where users pick colors, sizes, and see changes instantly! 🎨

---

### 📝 Syntax

```html
<div [ngStyle]="{'property': 'value'}">Content</div>
```

**Multiple properties**:
```html
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': bgColor
}">Content</div>
```

---

### 💡 Real-Life Examples

#### Example 1: Progress Bar (Dynamic Width)

**TypeScript**:
```typescript
export class AppComponent {
  progress: number = 0;
  
  startProgress() {
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  }
  
  getProgressColor(): string {
    if (this.progress < 33) return '#dc3545'; // Red
    if (this.progress < 66) return '#ffc107'; // Yellow
    return '#28a745'; // Green
  }
}
```

**HTML**:
```html
<div class="progress-container">
  <h3>Upload Progress: {{ progress }}%</h3>
  
  <div class="progress-bar-bg">
    <div 
      class="progress-bar"
      [ngStyle]="{
        'width': progress + '%',
        'background-color': getProgressColor(),
        'transition': 'all 0.3s ease'
      }">
      {{ progress }}%
    </div>
  </div>
  
  <button (click)="startProgress()" [disabled]="progress > 0">
    Start Upload
  </button>
</div>
```

**CSS**:
```css
.progress-bar-bg {
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
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

---

#### Example 2: Font Size Adjuster (Accessibility Feature)

**TypeScript**:
```typescript
export class AppComponent {
  fontSize: number = 16; // in pixels
  lineHeight: number = 1.5;
  letterSpacing: number = 0;
  
  increaseFontSize() {
    if (this.fontSize < 30) {
      this.fontSize += 2;
    }
  }
  
  decreaseFontSize() {
    if (this.fontSize > 12) {
      this.fontSize -= 2;
    }
  }
  
  resetFontSize() {
    this.fontSize = 16;
    this.lineHeight = 1.5;
    this.letterSpacing = 0;
  }
}
```

**HTML**:
```html
<div class="font-controls">
  <button (click)="decreaseFontSize()">A-</button>
  <button (click)="increaseFontSize()">A+</button>
  <button (click)="resetFontSize()">Reset</button>
  
  <label>
    Line Height: {{ lineHeight }}
    <input type="range" [(ngModel)]="lineHeight" min="1" max="2" step="0.1">
  </label>
  
  <label>
    Letter Spacing: {{ letterSpacing }}px
    <input type="range" [(ngModel)]="letterSpacing" min="0" max="5" step="0.5">
  </label>
</div>

<div 
  class="content"
  [ngStyle]="{
    'font-size': fontSize + 'px',
    'line-height': lineHeight,
    'letter-spacing': letterSpacing + 'px'
  }">
  <h1>This is a heading</h1>
  <p>
    This is sample paragraph text. Adjust the font size, line height,
    and letter spacing using the controls above to see the changes in real-time!
  </p>
</div>
```

---

#### Example 3: Color Picker (Real-time Styling)

**TypeScript**:
```typescript
export class AppComponent {
  backgroundColor: string = '#ffffff';
  textColor: string = '#000000';
  borderColor: string = '#cccccc';
  borderWidth: number = 2;
  borderRadius: number = 8;
  padding: number = 20;
}
```

**HTML**:
```html
<div class="color-picker-panel">
  <h2>Style Customizer 🎨</h2>
  
  <label>
    Background Color:
    <input type="color" [(ngModel)]="backgroundColor">
  </label>
  
  <label>
    Text Color:
    <input type="color" [(ngModel)]="textColor">
  </label>
  
  <label>
    Border Color:
    <input type="color" [(ngModel)]="borderColor">
  </label>
  
  <label>
    Border Width: {{ borderWidth }}px
    <input type="range" [(ngModel)]="borderWidth" min="0" max="10">
  </label>
  
  <label>
    Border Radius: {{ borderRadius }}px
    <input type="range" [(ngModel)]="borderRadius" min="0" max="50">
  </label>
  
  <label>
    Padding: {{ padding }}px
    <input type="range" [(ngModel)]="padding" min="0" max="50">
  </label>
</div>

<div 
  class="preview-box"
  [ngStyle]="{
    'background-color': backgroundColor,
    'color': textColor,
    'border': borderWidth + 'px solid ' + borderColor,
    'border-radius': borderRadius + 'px',
    'padding': padding + 'px'
  }">
  <h3>Live Preview</h3>
  <p>Your customized box looks amazing!</p>
</div>
```

---

### 🎯 ngClass vs ngStyle - When to Use What?

| Use Case | Recommendation |
|----------|----------------|
| **Pre-defined styles** | ngClass ✅ (Better performance) |
| **Multiple properties** | ngClass ✅ (Cleaner code) |
| **Reusable styles** | ngClass ✅ (CSS classes) |
| **Dynamic values** | ngStyle ✅ (e.g., width: 50%) |
| **Calculated properties** | ngStyle ✅ (e.g., color from function) |
| **User customizations** | ngStyle ✅ (color picker, sliders) |

---

### ✅ Best Practices

#### DO's ✅

1. **Use ngClass for Most Cases**
   ```html
   <!-- Better ✅ -->
   <div [ngClass]="{'active': isActive}">
   
   <!-- Avoid ❌ -->
   <div [ngStyle]="{'background-color': isActive ? 'blue' : 'gray'}">
   ```

2. **Use ngStyle for Truly Dynamic Values**
   ```html
   <!-- Good ✅ - User controls value -->
   <div [ngStyle]="{'width': userWidth + '%'}">
   ```

3. **Include Units**
   ```html
   <!-- Correct ✅ -->
   <div [ngStyle]="{'width': '100px'}">
   
   <!-- Wrong ❌ -->
   <div [ngStyle]="{'width': 100}">
   ```

#### DON'Ts ❌

1. **Don't Use Wrong Property Names**
   ```html
   <!-- Wrong ❌ -->
   <div [ngStyle]="{'FontSize': '16px'}">
   
   <!-- Correct ✅ -->
   <div [ngStyle]="{'font-size': '16px'}">
   <!-- or -->
   <div [ngStyle]="{'fontSize': '16px'}">
   ```

2. **Don't Forget Units**
   ```html
   <!-- Missing unit ❌ -->
   <div [ngStyle]="{'width': 100}">
   
   <!-- With unit ✅ -->
   <div [ngStyle]="{'width': '100px'}">
   ```

---

### ❓ Interview Questions

#### Q1: What is ngStyle and when to use it?

**Answer**: `ngStyle` dynamically applies inline CSS styles. Use it for truly dynamic values like widths, colors from variables, or calculated positions.

**Example**:
```typescript
export class AppComponent {
  widthPercent: number = 75;
  color: string = '#ff0000';
}
```

```html
<div [ngStyle]="{
  'width': widthPercent + '%',
  'background-color': color
}">
  Dynamic styling
</div>
```

---

#### Q2: What's the difference between ngStyle and ngClass?

**Answer**:

**ngClass**: Controls CSS classes (pre-defined styles)
```html
<div [ngClass]="{'active': isActive}">
```

**ngStyle**: Controls inline styles (dynamic values)
```html
<div [ngStyle]="{'width': width + 'px'}">
```

**When to use**:
- **ngClass**: Most cases (better performance, reusable)
- **ngStyle**: Dynamic values (user input, calculations)

---

#### Q3: Can you use camelCase or kebab-case for CSS properties in ngStyle?

**Answer**: Both work!

**Example**:
```html
<!-- kebab-case ✅ -->
<div [ngStyle]="{'font-size': '16px', 'background-color': 'blue'}">

<!-- camelCase ✅ -->
<div [ngStyle]="{'fontSize': '16px', 'backgroundColor': 'blue'}">

<!-- Both are valid! -->
```

---

#### Q4: How do you apply multiple styles with ngStyle?

**Answer**: Use object with multiple properties.

**Example**:
```typescript
export class AppComponent {
  boxStyles = {
    'width': '200px',
    'height': '200px',
    'background-color': '#007bff',
    'border-radius': '10px',
    'padding': '20px',
    'color': 'white'
  };
}
```

```html
<div [ngStyle]="boxStyles">
  Styled Box
</div>
```

---

#### Q5: What happens if you forget to include units in ngStyle?

**Answer**: The style won't work correctly (except unitless properties like opacity, z-index).

**Example**:
```html
<!-- Wrong ❌ - No unit -->
<div [ngStyle]="{'width': 200}">
<!-- Browser sees: width: 200 (invalid!) -->

<!-- Correct ✅ - With unit -->
<div [ngStyle]="{'width': '200px'}">
<!-- Browser sees: width: 200px (valid!) -->

<!-- Unitless properties work fine -->
<div [ngStyle]="{'opacity': 0.5, 'z-index': 10}">
```

---

## 15. ng-container & ng-template - Structural Helpers

### 📖 ng-container Definition

**`<ng-container>`** is an invisible wrapper that doesn't appear in the DOM. Use it to group elements for structural directives without adding extra HTML tags.

**In Simple Words**: "A ghost wrapper - does the job but stays invisible in the final HTML!"

**Real-Life Analogy**: Like cling film - keeps things together but you don't see it! 👻

---

### 📝 ng-container Examples

#### Example 1: Multiple Elements with *ngIf

**TypeScript**:
```typescript
export class AppComponent {
  isLoggedIn: boolean = true;
  userName: string = 'Rahul Sharma';
}
```

**❌ WRONG** (Repeating *ngIf):
```html
<h2 *ngIf="isLoggedIn">Welcome, {{ userName }}!</h2>
<p *ngIf="isLoggedIn">Last login: Today</p>
<button *ngIf="isLoggedIn">Logout</button>
<!-- Inefficient - 3 checks! -->
```

**⚠️ WITH DIV** (Works but adds extra tag):
```html
<div *ngIf="isLoggedIn">
  <h2>Welcome, {{ userName }}!</h2>
  <p>Last login: Today</p>
  <button>Logout</button>
</div>
<!-- Extra <div> in DOM - might break CSS! -->
```

**✅ WITH ng-container** (PERFECT):
```html
<ng-container *ngIf="isLoggedIn">
  <h2>Welcome, {{ userName }}!</h2>
  <p>Last login: Today</p>
  <button>Logout</button>
</ng-container>
<!-- No extra tag in DOM! -->
```

---

#### Example 2: Table Rows with *ngFor

**TypeScript**:
```typescript
export class AppComponent {
  users = [
    { id: 1, name: 'Rahul', role: 'Admin' },
    { id: 2, name: 'Priya', role: 'User' },
    { id: 3, name: 'Amit', role: 'User' }
  ];
}
```

**HTML**:
```html
<table>
  <tr>
    <th>Name</th>
    <th>Role</th>
  </tr>
  
  <!-- Each user needs 2 rows -->
  <ng-container *ngFor="let user of users">
    <tr class="user-row">
      <td>{{ user.name }}</td>
      <td>{{ user.role }}</td>
    </tr>
    <tr class="details-row">
      <td colspan="2">User ID: {{ user.id }}</td>
    </tr>
  </ng-container>
</table>

<!-- DOM output: Only <tr> tags, no ng-container! -->
```

---

### 📖 ng-template Definition

**`<ng-template>`** is a blueprint that doesn't render by default. Use it for reusable HTML blocks or conditional rendering with else/then.

**In Simple Words**: "A template blueprint - created but not used until you call it!"

**Real-Life Analogy**: Like an architect's plan - exists but not built until needed! 🏗️

---

### 📝 ng-template Examples

#### Example 1: If-Else with Templates

**TypeScript**:
```typescript
export class AppComponent {
  isAuthenticated: boolean = false;
  userName: string = 'Guest';
}
```

**HTML**:
```html
<div class="header">
  <ng-container *ngIf="isAuthenticated; else guestView">
    <!-- Logged In View -->
    <h2>Welcome back, {{ userName }}! 👋</h2>
    <button>My Profile</button>
    <button>Logout</button>
  </ng-container>
  
  <ng-template #guestView>
    <!-- Guest View -->
    <h2>Welcome, Guest! 🚪</h2>
    <button>Login</button>
    <button>Sign Up</button>
  </ng-template>
</div>
```

---

#### Example 2: Reusable Templates with *ngTemplateOutlet

**TypeScript**:
```typescript
export class AppComponent {
  users = [
    { name: 'Rahul', age: 24, city: 'Delhi' },
    { name: 'Priya', age: 26, city: 'Mumbai' }
  ];
}
```

**HTML**:
```html
<div class="users-list">
  <!-- Render template for each user -->
  <ng-container 
    *ngFor="let user of users"
    *ngTemplateOutlet="userCard; context: {$implicit: user}">
  </ng-container>
</div>

<!-- Reusable Template -->
<ng-template #userCard let-user>
  <div class="card">
    <h3>{{ user.name }} 👤</h3>
    <p>Age: {{ user.age }}</p>
    <p>City: {{ user.city }} 🏙️</p>
  </div>
</ng-template>
```

---

### 📊 ng-container vs ng-template

| Feature | ng-container | ng-template |
|---------|--------------|-------------|
| **Renders by default** | Yes ✅ | No ❌ (needs trigger) |
| **Visible in DOM** | No (invisible) | No (not rendered) |
| **Use case** | Grouping elements | Conditional/Reusable |
| **Reference needed** | No | Yes (#name) |
| **With *ngIf** | Direct use | With else/then |

---

### ✅ Best Practices

#### DO's ✅

1. **Use ng-container for Grouping**
   ```html
   <ng-container *ngIf="condition">
     <h1>Title</h1>
     <p>Content</p>
   </ng-container>
   ```

2. **Use ng-template for Reusable Blocks**
   ```html
   <ng-template #loadingTemplate>
     <div class="spinner">Loading...</div>
   </ng-template>
   ```

3. **Combine Both When Needed**
   ```html
   <ng-container *ngIf="data; else loading">
     Data: {{ data }}
   </ng-container>
   <ng-template #loading>Loading...</ng-template>
   ```

#### DON'Ts ❌

1. **Don't Add Styles to ng-container**
   ```html
   <!-- Won't work ❌ -->
   <ng-container class="my-class">
   
   <!-- Use div instead ✅ -->
   <div class="my-class">
   ```

---

### ❓ Interview Questions

#### Q1: What is ng-container and why use it?

**Answer**: `ng-container` is an invisible wrapper for grouping elements without adding extra DOM nodes.

**Example**:
```html
<!-- Without ng-container (extra div) -->
<div *ngIf="show">
  <h1>Title</h1>
  <p>Content</p>
</div>

<!-- With ng-container (no extra tag) ✅ -->
<ng-container *ngIf="show">
  <h1>Title</h1>
  <p>Content</p>
</ng-container>
```

---

#### Q2: What's the difference between ng-container and ng-template?

**Answer**:

**ng-container**: Renders immediately, invisible wrapper
```html
<ng-container *ngIf="true">
  Shows immediately
</ng-container>
```

**ng-template**: Doesn't render by default, needs trigger
```html
<ng-template #ref>
  Won't show unless referenced
</ng-template>

<ng-container *ngTemplateOutlet="ref"></ng-container>
```

---

#### Q3: Can you apply CSS classes to ng-container?

**Answer**: No! ng-container doesn't appear in DOM, so CSS won't work.

**Example**:
```html
<!-- Won't work ❌ -->
<ng-container class="my-class">
  Content
</ng-container>

<!-- Use regular div ✅ -->
<div class="my-class">
  Content
</div>
```

---

#### Q4: How do you use ng-template with else?

**Answer**: Reference it with #templateName and use in *ngIf.

**Example**:
```html
<div *ngIf="isLoggedIn; else loginPrompt">
  Welcome!
</div>

<ng-template #loginPrompt>
  Please login
</ng-template>
```

---

#### Q5: When should you use ng-container vs regular div?

**Answer**:

**Use ng-container when**:
- Don't want extra DOM element
- Grouping for structural directives
- Protecting CSS layout (flexbox/grid)

**Use div when**:
- Need to apply CSS styles
- Need a semantic container
- Want a clickable area

**Example**:
```html
<!-- ng-container: No styling needed -->
<ng-container *ngIf="show">
  <p>Para 1</p>
  <p>Para 2</p>
</ng-container>

<!-- div: Styling needed -->
<div *ngIf="show" class="card">
  <p>Para 1</p>
  <p>Para 2</p>
</div>
```

---

## 16. Component Lifecycle Hooks - Component's Life Journey 🔄

### 📖 Definition

**Lifecycle Hooks** are special methods that Angular automatically calls at specific stages in a component's life - from creation to destruction. They let you perform actions at the right time!

**In Simple Words**: "Component ki life - Birth → Growth → Updates → Death - har stage pe kuch kaam karo!"

**Real-Life Analogy**: Like a human life - Birth (create component) → School (initialize) → Adult (updates) → Old age (destroy). At each stage, different responsibilities! 👶➡️🧒➡️👨➡️👴

---

### 📊 Complete Lifecycle Order

Angular calls hooks in this specific sequence:

1. **constructor()** - Class instance created
2. **ngOnChanges()** - @Input() properties changed (can run multiple times)
3. **ngOnInit()** - Component initialized (runs ONCE)
4. **ngDoCheck()** - Custom change detection (runs frequently)
5. **ngAfterContentInit()** - Content projection ready (runs ONCE)
6. **ngAfterContentChecked()** - After content checked (runs frequently)
7. **ngAfterViewInit()** - View completely initialized (runs ONCE)
8. **ngAfterViewChecked()** - After view checked (runs frequently)
9. **ngOnDestroy()** - Before component destruction (runs ONCE)

---

### 📋 Lifecycle Hooks Summary Table

| Hook | Runs | Primary Use Case |
|------|------|------------------|
| **constructor()** | Once | Dependency injection only |
| **ngOnChanges()** | Multiple | Track @Input() changes |
| **ngOnInit()** | Once | API calls, initialization |
| **ngDoCheck()** | Multiple | Custom change detection |
| **ngAfterContentInit()** | Once | Access projected content |
| **ngAfterContentChecked()** | Multiple | After content checked |
| **ngAfterViewInit()** | Once | DOM ready, @ViewChild access |
| **ngAfterViewChecked()** | Multiple | After view checked |
| **ngOnDestroy()** | Once | Cleanup, unsubscribe |

---

### 💡 Hook 1: ngOnChanges() - Track @Input() Changes

#### When It Runs
- Before ngOnInit() (first time)
- Whenever @Input() properties change
- Receives `SimpleChanges` object with previous and current values

#### Example 1: User Profile Update Tracker

**Parent Component**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent">
      <h2>Parent Component - User Editor 👨‍💼</h2>
      
      <input [(ngModel)]="userName" placeholder="Enter name">
      <input type="number" [(ngModel)]="userAge" placeholder="Enter age">
      
      <button (click)="updateUser()">Update User Info</button>
      
      <hr>
      <app-user-profile 
        [userName]="userName" 
        [userAge]="userAge">
      </app-user-profile>
    </div>
  `
})
export class AppComponent {
  userName: string = 'Rahul Sharma';
  userAge: number = 24;
  
  updateUser() {
    console.log('User updated in parent!');
  }
}
```

**Child Component**:
```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="child">
      <h3>Child Component - Profile Display 👤</h3>
      <p>Name: {{ userName }}</p>
      <p>Age: {{ userAge }}</p>
      
      <div class="change-log">
        <h4>Change History 📜</h4>
        <div *ngFor="let log of changeLogs">
          {{ log }}
        </div>
      </div>
    </div>
  `
})
export class UserProfileComponent implements OnChanges {
  @Input() userName: string = '';
  @Input() userAge: number = 0;
  
  changeLogs: string[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('🔄 ngOnChanges called!');
    console.log('All changes:', changes);
    
    // Check which property changed
    if (changes['userName']) {
      const nameChange = changes['userName'];
      const log = `Name changed: "${nameChange.previousValue}" → "${nameChange.currentValue}"`;
      this.changeLogs.push(log);
      console.log('👤 Name change detected:', nameChange);
    }
    
    if (changes['userAge']) {
      const ageChange = changes['userAge'];
      const log = `Age changed: ${ageChange.previousValue} → ${ageChange.currentValue}`;
      this.changeLogs.push(log);
      console.log('🎂 Age change detected:', ageChange);
    }
  }
}
```

**Console Output** (when userName changes):
```
🔄 ngOnChanges called!
👤 Name change detected: {previousValue: "Rahul Sharma", currentValue: "Amit Kumar", firstChange: false}
```

#### Example 2: Understanding SimpleChanges Object

```typescript
export class ProductComponent implements OnChanges {
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() inStock: boolean = true;
  
  ngOnChanges(changes: SimpleChanges) {
    // SimpleChanges object structure:
    // {
    //   'propertyName': {
    //     previousValue: old value,
    //     currentValue: new value,
    //     firstChange: boolean (true if first time)
    //   }
    // }
    
    for (const propName in changes) {
      const change = changes[propName];
      
      console.log(`Property: ${propName}`);
      console.log(`Previous: ${change.previousValue}`);
      console.log(`Current: ${change.currentValue}`);
      console.log(`First Change: ${change.firstChange}`);
      
      if (change.firstChange) {
        console.log('✨ Initial value set!');
      } else {
        console.log('🔄 Value updated!');
      }
    }
  }
}
```

#### ⚠️ Important: Object/Array Reference

```typescript
export class AppComponent {
  // SCENARIO 1: Reference change (DETECTED ✅)
  userData = { name: 'Rahul', age: 24 };
  
  changeReference() {
    this.userData = { name: 'Priya', age: 26 };
    // New object reference → ngOnChanges TRIGGERS! ✅
  }
  
  // SCENARIO 2: Content change (NOT DETECTED ❌)
  changeContent() {
    this.userData.name = 'Amit';
    // Same object reference → ngOnChanges NOT TRIGGERED! ❌
    // Use ngDoCheck() for this!
  }
}
```

---

### 💡 Hook 2: ngOnInit() - Component Ready! API Calls Here! 🚀

#### When It Runs
- After first ngOnChanges()
- Runs ONLY ONCE
- Component fully initialized
- @Input() properties are available

#### Example 1: API Data Fetch (Most Common!)

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <div *ngIf="loading">Loading users... ⏳</div>
    
    <div *ngIf="!loading && users.length > 0">
      <h2>Users List 👥</h2>
      <div *ngFor="let user of users" class="user-card">
        <h3>{{ user.name }}</h3>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
  `
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  loading: boolean = false;
  
  constructor(private http: HttpClient) {
    console.log('🏗️ Constructor: Component class created');
    // ❌ API call here is NOT recommended!
  }
  
  ngOnInit() {
    console.log('✅ ngOnInit: Component fully ready!');
    // ✅ API call here!
    this.fetchUsers();
  }
  
  fetchUsers() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data: any) => {
          this.users = data;
          this.loading = false;
          console.log('✅ Users loaded!', this.users);
        },
        error: (error) => {
          console.error('❌ Error loading users:', error);
          this.loading = false;
        }
      });
  }
}
```

#### Example 2: Constructor vs ngOnInit

```typescript
export class ProfileComponent implements OnInit {
  @Input() userId: string = '';
  userData: any;
  
  constructor(private apiService: ApiService) {
    console.log('1️⃣ Constructor called');
    console.log('userId:', this.userId);  
    // OUTPUT: userId: ""  (empty! ❌)
    // @Input() not ready yet!
    
    // ❌ WRONG - API call in constructor
    // this.apiService.getUser(this.userId); // userId is empty!
  }
  
  ngOnInit() {
    console.log('2️⃣ ngOnInit called');
    console.log('userId:', this.userId);  
    // OUTPUT: userId: "123"  (ready! ✅)
    // @Input() is now set!
    
    // ✅ CORRECT - API call in ngOnInit
    if (this.userId) {
      this.apiService.getUser(this.userId).subscribe(data => {
        this.userData = data;
      });
    }
  }
}
```

#### Example 3: Dashboard Initialization

```typescript
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  greeting: string = '';
  userPreferences: any = {};
  
  constructor() {
    console.log('Constructor: Basic setup');
    // Simple initialization is okay
    this.currentDate = new Date();
  }
  
  ngOnInit() {
    console.log('ngOnInit: Full initialization');
    
    // Set greeting based on time
    this.setGreeting();
    
    // Load user preferences from localStorage
    this.loadPreferences();
    
    // Start timers
    this.startClock();
    
    // Fetch dashboard data
    this.loadDashboardData();
  }
  
  setGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning! ☀️';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon! 🌤️';
    } else {
      this.greeting = 'Good Evening! 🌙';
    }
  }
  
  loadPreferences() {
    const saved = localStorage.getItem('userPreferences');
    this.userPreferences = saved ? JSON.parse(saved) : {};
  }
  
  startClock() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  
  loadDashboardData() {
    // API calls here
  }
}
```

#### 🎯 Constructor vs ngOnInit Comparison

| Feature | Constructor | ngOnInit |
|---------|-------------|----------|
| **Purpose** | Class initialization | Component setup |
| **Runs** | Once (class create) | Once (component ready) |
| **@Input() available** | NO ❌ | YES ✅ |
| **Services available** | YES ✅ | YES ✅ |
| **Change detection** | Not setup | Fully setup |
| **API calls** | AVOID ❌ | PERFECT ✅ |
| **DOM access** | NO ❌ | LIMITED |
| **Order** | First | After constructor |

---

### 💡 Hook 3: ngDoCheck() - Custom Change Detection 🔍

#### When It Runs
- Every time Angular runs change detection
- Runs VERY frequently (performance concern!)
- Use for deep object/array change detection

#### Example: Deep Object Change Detection

**Parent**:
```typescript
export class AppComponent {
  userData = { name: 'Rahul', age: 24, city: 'Delhi' };
  
  updateName() {
    this.userData.name = 'Priya';  // Content change
  }
  
  changeWholeObject() {
    this.userData = { name: 'Amit', age: 28, city: 'Mumbai' };  // Reference change
  }
}
```

**Child**:
```typescript
import { Component, Input, DoCheck } from '@angular/core';

export class UserComponent implements DoCheck {
  @Input() userData: any;
  private previousName: string = '';
  
  ngDoCheck() {
    // Custom logic to detect deep changes
    if (this.userData && this.userData.name !== this.previousName) {
      console.log(`🔍 Name changed: ${this.previousName} → ${this.userData.name}`);
      this.previousName = this.userData.name;
      
      // Update UI or perform actions
      this.onNameChange();
    }
  }
  
  onNameChange() {
    console.log('Handling name change...');
  }
}
```

#### ⚠️ Important Rules
1. NEVER use ngOnChanges() and ngDoCheck() together!
2. Keep logic simple - runs VERY frequently!
3. Performance impact possible
4. Most cases don't need ngDoCheck()!

---

### 💡 Hook 4: ngAfterViewInit() - DOM Ready! @ViewChild Available! 🎨

#### When It Runs
- After component's view (template) fully initialized
- Runs ONCE
- @ViewChild() now accessible

#### Example 1: Auto-focus Input Field

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-form">
      <h2>Login</h2>
      <input #usernameInput type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <button>Login</button>
    </div>
  `
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  
  constructor() {
    console.log('Constructor: usernameInput =', this.usernameInput);
    // OUTPUT: undefined ❌
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit: usernameInput =', this.usernameInput);
    // OUTPUT: ElementRef object ✅
    
    // Auto-focus on username field
    this.usernameInput.nativeElement.focus();
    console.log('✅ Input field focused!');
  }
}
```

#### Example 2: Chart Initialization

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  
  ngAfterViewInit() {
    // DOM ready - now safe to initialize chart library
    this.initializeChart();
  }
  
  initializeChart() {
    const canvas = this.chartCanvas.nativeElement;
    console.log('Initializing chart on canvas:', canvas);
    
    // Use chart library (Chart.js, D3, etc.)
    // new Chart(canvas, {...});
  }
}
```

---

### 💡 Hook 5: ngOnDestroy() - Cleanup Time! Unsubscribe! 🧹

#### When It Runs
- RIGHT BEFORE component destruction
- Runs ONCE
- Last chance to prevent memory leaks!

#### Example 1: Unsubscribe from Observables (MUST DO!)

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `
    <div class="timer">
      <h2>Timer: {{ seconds }} seconds</h2>
      <p>Component will cleanup on destroy ✅</p>
    </div>
  `
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds: number = 0;
  private timerSubscription!: Subscription;
  
  ngOnInit() {
    console.log('✅ Timer started');
    
    // Start interval
    this.timerSubscription = interval(1000).subscribe(() => {
      this.seconds++;
      console.log('Tick:', this.seconds);
    });
  }
  
  ngOnDestroy() {
    console.log('🧹 ngOnDestroy: Cleaning up...');
    
    // ⚠️ IMPORTANT: Unsubscribe to prevent memory leak!
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      console.log('✅ Timer subscription unsubscribed');
    }
    
    console.log('✅ Component destroyed safely');
  }
}
```

#### Example 2: Multiple Subscriptions Cleanup

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  template: `<div>Dashboard with multiple data streams</div>`
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();  // Container for all subscriptions
  
  userData: any;
  notifications: any[] = [];
  liveData: any;
  
  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private liveDataService: LiveDataService
  ) {}
  
  ngOnInit() {
    // Add all subscriptions to container
    this.subscriptions.add(
      this.userService.getUser().subscribe(data => {
        this.userData = data;
      })
    );
    
    this.subscriptions.add(
      this.notificationService.getNotifications().subscribe(data => {
        this.notifications = data;
      })
    );
    
    this.subscriptions.add(
      this.liveDataService.getLiveData().subscribe(data => {
        this.liveData = data;
      })
    );
  }
  
  ngOnDestroy() {
    // ✅ Unsubscribe from ALL at once!
    this.subscriptions.unsubscribe();
    console.log('✅ All subscriptions cleaned up!');
  }
}
```

#### Example 3: Clear Timers and Event Listeners

```typescript
export class CountdownComponent implements OnInit, OnDestroy {
  countdown: number = 60;
  private intervalId: any;
  private clickListener: any;
  
  ngOnInit() {
    // Start countdown
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.onCountdownComplete();
      }
    }, 1000);
    
    // Add global event listener
    this.clickListener = this.handleGlobalClick.bind(this);
    document.addEventListener('click', this.clickListener);
  }
  
  ngOnDestroy() {
    console.log('🧹 Cleaning up countdown component...');
    
    // Clear interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('✅ Interval cleared');
    }
    
    // Remove event listener
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
      console.log('✅ Event listener removed');
    }
  }
  
  handleGlobalClick(event: MouseEvent) {
    console.log('Global click detected');
  }
  
  onCountdownComplete() {
    console.log('Countdown finished!');
  }
}
```

---

### 🎯 Cleanup Checklist - What to Do in ngOnDestroy()

✅ Observable subscriptions - unsubscribe
✅ setInterval() / setTimeout() - clear
✅ Event listeners - remove
✅ WebSocket connections - close
✅ Third-party library cleanup
✅ LocalStorage / SessionStorage - save (if needed)
✅ Custom cleanup logic

❌ **Memory Leak Will Happen If**:
- Subscriptions not unsubscribed
- Timers not cleared
- Event listeners not removed
- WebSocket connections left open

---

### ✅ Best Practices

#### DO's ✅

1. **Always unsubscribe in ngOnDestroy()**
   ```typescript
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
   ```

2. **Use Subscription container for multiple subscriptions**
   ```typescript
   private subs = new Subscription();
   
   ngOnInit() {
     this.subs.add(observable1.subscribe());
     this.subs.add(observable2.subscribe());
   }
   
   ngOnDestroy() {
     this.subs.unsubscribe(); // All at once!
   }
   ```

3. **API calls in ngOnInit(), not constructor**
   ```typescript
   ngOnInit() {
     this.loadData(); // ✅ Correct
   }
   ```

4. **Use async pipe for automatic subscription management**
   ```html
   <div>{{ data$ | async }}</div>
   <!-- Auto-subscribes and auto-unsubscribes! -->
   ```

#### DON'Ts ❌

1. **Don't make API calls in constructor**
   ```typescript
   constructor(private http: HttpClient) {
     this.http.get('...').subscribe(); // ❌ Wrong!
   }
   ```

2. **Don't use both ngOnChanges() and ngDoCheck()**
   ```typescript
   // ❌ Never use both together!
   ```

3. **Don't forget to unsubscribe**
   ```typescript
   // ❌ Memory leak!
   ngOnInit() {
     interval(1000).subscribe();
   }
   // No ngOnDestroy cleanup!
   ```

---

### ❓ Interview Questions

#### Q1: What are lifecycle hooks in Angular?

**Answer**: Lifecycle hooks are special methods that Angular automatically calls at specific stages in a component's lifecycle, from creation to destruction.

**Example**:
```typescript
export class MyComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
    // API calls here
  }
  
  ngOnDestroy() {
    console.log('Component about to be destroyed');
    // Cleanup here
  }
}
```

---

#### Q2: What's the difference between constructor and ngOnInit()?

**Answer**:

**Constructor**: 
- TypeScript class initialization
- Dependency injection
- @Input() properties NOT available

**ngOnInit()**:
- Angular component initialization  
- Component fully ready
- @Input() properties ARE available
- Best place for API calls

**Example**:
```typescript
export class ProfileComponent implements OnInit {
  @Input() userId: string = '';
  
  constructor(private api: ApiService) {
    console.log(this.userId); // ❌ Empty!
  }
  
  ngOnInit() {
    console.log(this.userId); // ✅ Has value!
    this.api.getUser(this.userId).subscribe();
  }
}
```

---

#### Q3: When should you use ngOnDestroy()?

**Answer**: Use ngOnDestroy() to clean up resources before component destruction to prevent memory leaks.

**Example**:
```typescript
export class TimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  
  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      console.log('Tick');
    });
  }
  
  ngOnDestroy() {
    // ✅ Prevent memory leak
    this.subscription.unsubscribe();
  }
}
```

---

#### Q4: What is the order of lifecycle hooks?

**Answer**: 
1. constructor()
2. ngOnChanges() (if @Input() exists)
3. ngOnInit()
4. ngDoCheck()
5. ngAfterContentInit()
6. ngAfterContentChecked()
7. ngAfterViewInit()
8. ngAfterViewChecked()
9. ngOnDestroy()

**Example**:
```typescript
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: any;
  
  constructor() {
    console.log('1. Constructor');
  }
  
  ngOnChanges() {
    console.log('2. ngOnChanges');
  }
  
  ngOnInit() {
    console.log('3. ngOnInit');
  }
  
  ngOnDestroy() {
    console.log('9. ngOnDestroy');
  }
}
```

---

#### Q5: When is @ViewChild available?

**Answer**: @ViewChild is available in ngAfterViewInit(), NOT in constructor or ngOnInit().

**Example**:
```typescript
export class MyComponent implements AfterViewInit {
  @ViewChild('myInput') input!: ElementRef;
  
  constructor() {
    console.log(this.input); // ❌ undefined
  }
  
  ngOnInit() {
    console.log(this.input); // ❌ undefined
  }
  
  ngAfterViewInit() {
    console.log(this.input); // ✅ Available!
    this.input.nativeElement.focus();
  }
}
```

---

#### Q6: What's the difference between ngOnChanges() and ngDoCheck()?

**Answer**:

**ngOnChanges()**: 
- Detects @Input() reference changes
- Receives SimpleChanges object
- Doesn't detect deep object changes

**ngDoCheck()**: 
- Custom change detection
- Detects deep object changes
- Runs VERY frequently
- Performance impact

**Example**:
```typescript
// ngOnChanges - Reference change
userData = { name: 'Rahul' };
this.userData = { name: 'Priya' }; // ✅ Detected

// ngOnChanges - Content change
this.userData.name = 'Amit'; // ❌ NOT detected

// ngDoCheck - Can detect both
ngDoCheck() {
  // Custom logic to check deep changes
}
```

---

#### Q7: Why should you unsubscribe in ngOnDestroy()?

**Answer**: To prevent memory leaks. If you don't unsubscribe, the subscription continues even after component destruction, consuming memory.

**Example**:
```typescript
// ❌ BAD - Memory Leak
export class BadComponent implements OnInit {
  ngOnInit() {
    interval(1000).subscribe(() => {
      console.log('Still running!');
    });
  }
  // No cleanup - keeps running forever!
}

// ✅ GOOD - Proper Cleanup
export class GoodComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  
  ngOnInit() {
    this.sub = interval(1000).subscribe(() => {
      console.log('Tick');
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe(); // ✅ Cleaned up!
  }
}
```

---

#### Q8: What hooks run only once vs multiple times?

**Answer**:

**Run ONCE**:
- ngOnInit()
- ngAfterContentInit()
- ngAfterViewInit()
- ngOnDestroy()

**Run MULTIPLE times**:
- ngOnChanges() (when @Input() changes)
- ngDoCheck()
- ngAfterContentChecked()
- ngAfterViewChecked()

---

#### Q9: Can you modify data in ngAfterViewInit()?

**Answer**: Yes, but be careful! Modifying data that affects the view can cause "ExpressionChangedAfterItHasBeenCheckedError".

**Solution**: Use setTimeout() or ChangeDetectorRef.detectChanges()

**Example**:
```typescript
export class MyComponent implements AfterViewInit {
  @ViewChild('myDiv') div!: ElementRef;
  height: number = 0;
  
  ngAfterViewInit() {
    // ❌ May cause error
    this.height = this.div.nativeElement.offsetHeight;
    
    // ✅ Safe approach
    setTimeout(() => {
      this.height = this.div.nativeElement.offsetHeight;
    });
  }
}
```

---

#### Q10: What's the most commonly used lifecycle hook?

**Answer**: **ngOnInit()** - Used in almost every component for:
- API calls
- Initialization logic
- Setting up subscriptions
- Accessing @Input() properties

**Example**:
```typescript
export class UserComponent implements OnInit {
  @Input() userId: string = '';
  user: any;
  
  ngOnInit() {
    // Most common use case
    this.loadUser();
  }
  
  loadUser() {
    this.userService.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
  }
}
```

---

## 17. @Input() - Parent to Child Communication 📤

### 📖 Definition

**`@Input()`** is a property decorator that allows a parent component to pass data to a child component. It creates a one-way data flow from parent to child.

**In Simple Words**: "Parent component sends data to child component - like passing parameters to a function!"

**Real-Life Analogy**: Like WhatsApp group message - Parent (Group Admin) sends message to Child (Group Member)! 📱

---

### 📝 Syntax

```typescript
import { Component, Input } from '@angular/core';

export class ChildComponent {
  @Input() propertyName: dataType;
}
```

**Usage in Parent**:
```html
<app-child [propertyName]="parentData"></app-child>
```

---

### 💡 Real-Life Examples

#### Example 1: User Data Table

**Parent Component (app.component.ts)**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent-container">
      <h1>👨‍👦 Parent Component - User Management</h1>
      
      <div class="user-form">
        <input [(ngModel)]="newName" placeholder="Name">
        <input [(ngModel)]="newAge" type="number" placeholder="Age">
        <button (click)="addUser()">Add User</button>
      </div>
      
      <app-user-table [userdata]="userdata"></app-user-table>
    </div>
  `
})
export class AppComponent {
  userdata = [
    { name: 'Raghav', age: 21, city: 'Delhi' },
    { name: 'Shiv', age: 22, city: 'Mumbai' },
    { name: 'Priya', age: 20, city: 'Bangalore' }
  ];
  
  newName: string = '';
  newAge: number = 0;
  
  addUser() {
    this.userdata.push({
      name: this.newName,
      age: this.newAge,
      city: 'New City'
    });
    this.newName = '';
    this.newAge = 0;
  }
}
```

**Child Component (user-table.component.ts)**:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-table',
  template: `
    <div class="child-container">
      <h3>👶 Child Component - User Table</h3>
      <table class="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userdata; let i = index">
            <td>{{ i + 1 }}. {{ user.name }}</td>
            <td>{{ user.age }} years</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
      <p class="total">Total Users: {{ userdata?.length || 0 }}</p>
    </div>
  `
})
export class UserTableComponent {
  @Input() userdata: any[] = [];  // ✅ Receives data from parent!
}
```

**How It Works**:
```
Parent Component                    Child Component
┌─────────────────┐                ┌─────────────────┐
│ userdata array  │ ──────────────>│ @Input()        │
│ = [{...}]       │ [userdata]="..." │ userdata: any[]│
└─────────────────┘                └─────────────────┘
```

---

#### Example 2: Product Card with Multiple Inputs

**Parent Component**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="product-grid">
      <app-product-card 
        [productName]="'iPhone 15 Pro'"
        [price]="99999"
        [inStock]="true"
        [rating]="4.5"
        [imageUrl]="'assets/iphone.jpg'">
      </app-product-card>
      
      <app-product-card 
        [productName]="'MacBook Pro'"
        [price]="199999"
        [inStock]="false"
        [rating]="4.8"
        [imageUrl]="'assets/macbook.jpg'">
      </app-product-card>
    </div>
  `
})
export class AppComponent { }
```

**Child Component (product-card.component.ts)**:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card" [class.out-of-stock]="!inStock">
      <img [src]="imageUrl" [alt]="productName">
      <h3>{{ productName }}</h3>
      <div class="rating">
        ⭐ {{ rating }} / 5
      </div>
      <p class="price">₹{{ price | number }}</p>
      <span class="stock-status">
        {{ inStock ? '✅ In Stock' : '❌ Out of Stock' }}
      </span>
      <button [disabled]="!inStock" (click)="addToCart()">
        {{ inStock ? 'Add to Cart' : 'Notify Me' }}
      </button>
    </div>
  `
})
export class ProductCardComponent {
  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() inStock: boolean = false;
  @Input() rating: number = 0;
  @Input() imageUrl: string = '';
  
  addToCart() {
    console.log(`Adding ${this.productName} to cart!`);
  }
}
```

---

#### Example 3: Blog Post Component

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="blog-feed">
      <app-blog-post
        *ngFor="let post of posts"
        [title]="post.title"
        [author]="post.author"
        [publishDate]="post.date"
        [content]="post.content"
        [likes]="post.likes">
      </app-blog-post>
    </div>
  `
})
export class AppComponent {
  posts = [
    {
      title: 'Getting Started with Angular',
      author: 'Rahul Kumar',
      date: new Date('2024-01-15'),
      content: 'Angular is a powerful framework...',
      likes: 42
    },
    {
      title: 'Understanding @Input and @Output',
      author: 'Priya Sharma',
      date: new Date('2024-02-20'),
      content: 'Parent-child communication is essential...',
      likes: 38
    }
  ];
}
```

**Child (blog-post.component.ts)**:
```typescript
@Component({
  selector: 'app-blog-post',
  template: `
    <article class="blog-post">
      <h2>{{ title }}</h2>
      <div class="meta">
        <span class="author">👤 {{ author }}</span>
        <span class="date">📅 {{ publishDate | date:'mediumDate' }}</span>
        <span class="likes">❤️ {{ likes }} likes</span>
      </div>
      <p class="content">{{ content }}</p>
      <button (click)="like()">Like</button>
    </article>
  `
})
export class BlogPostComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() publishDate: Date = new Date();
  @Input() content: string = '';
  @Input() likes: number = 0;
  
  like() {
    this.likes++;
    console.log('Post liked!', this.likes);
  }
}
```

---

#### Example 4: Input with Alias

**Child Component**:
```typescript
export class ChildComponent {
  @Input('customName') actualProperty: string = '';
  // Usage: <app-child [customName]="data"></app-child>
}
```

**Example**:
```typescript
@Component({
  selector: 'app-user-card',
  template: `
    <div class="card">
      <h3>{{ userName }}</h3>
      <p>Age: {{ userAge }}</p>
    </div>
  `
})
export class UserCardComponent {
  @Input('name') userName: string = '';  // Alias
  @Input('age') userAge: number = 0;     // Alias
}
```

**Parent Usage**:
```html
<app-user-card [name]="'Rahul'" [age]="25"></app-user-card>
```

---

### ⚠️ Important Notes

1. **Data Flow is One-Way** (Parent → Child only)
   ```typescript
   // Child can read but modifications don't affect parent directly
   @Input() userData: any;
   
   modifyData() {
     this.userData.name = 'New Name'; // ⚠️ Modifies local copy
   }
   ```

2. **Use with Property Binding** `[ ]`
   ```html
   <!-- Correct ✅ -->
   <app-child [data]="parentData"></app-child>
   
   <!-- Wrong ❌ -->
   <app-child data="parentData"></app-child>
   ```

3. **Available in ngOnInit()**, not in constructor
   ```typescript
   constructor() {
     console.log(this.inputData); // ❌ undefined
   }
   
   ngOnInit() {
     console.log(this.inputData); // ✅ Available
   }
   ```

---

## 18. @Output() - Child to Parent Communication 📥

### 📖 Definition

**`@Output()`** is a property decorator that allows a child component to send data/events to a parent component using EventEmitter. It creates upward communication from child to parent.

**In Simple Words**: "Child component sends events to parent component - like a callback function!"

**Real-Life Analogy**: Like a feedback form - Child (Form) sends response to Parent (Dashboard)! 📋

---

### 📝 Syntax

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

export class ChildComponent {
  @Output() eventName = new EventEmitter<dataType>();
  
  someMethod() {
    this.eventName.emit(data);
  }
}
```

**Usage in Parent**:
```html
<app-child (eventName)="parentMethod($event)"></app-child>
```

---

### 💡 Real-Life Examples

#### Example 1: Message from Child to Parent

**Child Component (test.component.ts)**:
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div class="child-messenger">
      <h3>👶 Child Component</h3>
      <input [(ngModel)]="message" placeholder="Type message...">
      <button (click)="sendMessage()">Send to Parent 📤</button>
    </div>
  `
})
export class TestComponent {
  message: string = '';
  
  // ✅ Create EventEmitter to send data!
  @Output() myEvent = new EventEmitter<string>();
  
  sendMessage() {
    // Send data to parent!
    this.myEvent.emit(this.message);
    console.log('Sent to parent:', this.message);
    this.message = '';  // Clear input
  }
}
```

**Parent Component (app.component.ts)**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="parent-receiver">
      <h2>👨‍👦 Parent Component</h2>
      
      <!-- Listen to child event! -->
      <app-test (myEvent)="receiveMessage($event)"></app-test>
      
      <div class="message-display">
        <h3>Received from Child:</h3>
        <p class="message">{{ messageFromChild }}</p>
      </div>
    </div>
  `
})
export class AppComponent {
  messageFromChild: string = 'No message yet...';
  
  // Receive data from child!
  receiveMessage(event: string) {
    console.log('Parent received:', event);
    this.messageFromChild = event;
  }
}
```

**How It Works**:
```
Child Component                     Parent Component
┌─────────────────┐                ┌─────────────────┐
│ @Output()       │                │ receiveMessage()│
│ myEvent         ├───────────────>│ method          │
│ .emit(data)     │ (event)="..." │                 │
└─────────────────┘                └─────────────────┘
```

---

#### Example 2: Add to Cart

**Child (product-card.component.ts)**:
```typescript
@Component({
  selector: 'app-product-card',
  template: `
    <div class="product">
      <h3>{{ productName }}</h3>
      <p>₹{{ price }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductCardComponent {
  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() productId: number = 0;
  
  @Output() productAdded = new EventEmitter<any>();
  
  addToCart() {
    const productData = {
      id: this.productId,
      name: this.productName,
      price: this.price,
      quantity: 1
    };
    
    this.productAdded.emit(productData);
    console.log('Product added to cart:', productData);
  }
}
```

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="product-list">
      <app-product-card
        [productId]="1"
        [productName]="'iPhone 15'"
        [price]="99999"
        (productAdded)="handleAddToCart($event)">
      </app-product-card>
    </div>
    
    <div class="cart">
      <h3>Shopping Cart ({{ cartItems.length }} items)</h3>
      <ul>
        <li *ngFor="let item of cartItems">
          {{ item.name }} - ₹{{ item.price }}
        </li>
      </ul>
      <p>Total: ₹{{ getTotal() }}</p>
    </div>
  `
})
export class AppComponent {
  cartItems: any[] = [];
  
  handleAddToCart(product: any) {
    this.cartItems.push(product);
    console.log('Cart updated:', this.cartItems);
  }
  
  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
```

---

#### Example 3: Form Submission with Validation

**Child (form.component.ts)**:
```typescript
@Component({
  selector: 'app-user-form',
  template: `
    <form>
      <input [(ngModel)]="name" placeholder="Name" name="name">
      <input [(ngModel)]="email" placeholder="Email" name="email">
      <button (click)="submit()">Submit</button>
      <button (click)="cancel()">Cancel</button>
    </form>
  `
})
export class UserFormComponent {
  name: string = '';
  email: string = '';
  
  @Output() formSubmitted = new EventEmitter<{name: string, email: string}>();
  @Output() formCancelled = new EventEmitter<void>();
  
  submit() {
    if (this.name && this.email) {
      this.formSubmitted.emit({
        name: this.name,
        email: this.email
      });
    }
  }
  
  cancel() {
    this.formCancelled.emit();
  }
}
```

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <app-user-form
      (formSubmitted)="saveUser($event)"
      (formCancelled)="closeForm()">
    </app-user-form>
  `
})
export class AppComponent {
  saveUser(userData: any) {
    console.log('Saving user:', userData);
    // API call to save
  }
  
  closeForm() {
    console.log('Form cancelled');
  }
}
```

---

#### Example 4: Counter with Increment Notification

**Child**:
```typescript
@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h3>Count: {{ count }}</h3>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChanged = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
```

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <app-counter 
      [count]="currentCount"
      (countChanged)="onCountChange($event)">
    </app-counter>
    
    <p>Parent knows count is: {{ currentCount }}</p>
  `
})
export class AppComponent {
  currentCount: number = 0;
  
  onCountChange(newCount: number) {
    this.currentCount = newCount;
    console.log('Count changed to:', newCount);
  }
}
```

---

### 🎯 @Input() vs @Output() Comparison

| Feature | @Input() | @Output() |
|---------|----------|-----------|
| **Direction** | Parent → Child | Child → Parent |
| **Purpose** | Pass data down | Send events up |
| **Type** | Property | EventEmitter |
| **Syntax** | `[property]="value"` | `(event)="method($event)"` |
| **Use Case** | Data passing | Event handling |
| **Example** | `<child [data]="x">` | `<child (notify)="fn()">` |

---

### ✅ Best Practices

#### DO's ✅

1. **Use @Input() for Data, @Output() for Events**
   ```typescript
   @Input() userData: any;      // ✅ Data
   @Output() userClicked = new EventEmitter();  // ✅ Event
   ```

2. **Always Use EventEmitter with @Output()**
   ```typescript
   @Output() myEvent = new EventEmitter<string>();
   ```

3. **Specify Generic Type in EventEmitter**
   ```typescript
   @Output() dataChanged = new EventEmitter<{id: number, name: string}>();
   ```

4. **Use $event to Access Emitted Data**
   ```html
   <app-child (myEvent)="handleEvent($event)"></app-child>
   ```

#### DON'Ts ❌

1. **Don't Modify @Input() Data Directly Without Purpose**
   ```typescript
   // ⚠️ Be careful - modifies object reference
   @Input() user: any;
   this.user.name = 'New'; // Changes visible to parent
   ```

2. **Don't Forget to Import EventEmitter**
   ```typescript
   import { Component, Output, EventEmitter } from '@angular/core';
   ```

3. **Don't Use @Output() Without emit()**
   ```typescript
   @Output() myEvent = new EventEmitter();
   
   someMethod() {
     this.myEvent.emit(data); // ✅ Must call emit()
   }
   ```

---

### ❓ Interview Questions

#### Q1: What is @Input() and when to use it?

**Answer**: @Input() is a decorator that allows parent components to pass data to child components.

**Example**:
```typescript
// Child
export class ChildComponent {
  @Input() userName: string = '';
}

// Parent
<app-child [userName]="'Rahul'"></app-child>
```

---

#### Q2: What is @Output() and how does it work?

**Answer**: @Output() is a decorator that allows child components to emit events to parent components using EventEmitter.

**Example**:
```typescript
// Child
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();
  
  send() {
    this.notify.emit('Hello Parent!');
  }
}

// Parent
<app-child (notify)="handleNotify($event)"></app-child>

handleNotify(message: string) {
  console.log(message); // "Hello Parent!"
}
```

---

#### Q3: What's the difference between @Input() and @Output()?

**Answer**:

**@Input()**: Parent → Child (data passing)
```typescript
@Input() data: string;
// <app-child [data]="value"></app-child>
```

**@Output()**: Child → Parent (event emitting)
```typescript
@Output() event = new EventEmitter();
// <app-child (event)="method($event)"></app-child>
```

---

#### Q4: Can you use both @Input() and @Output() together?

**Answer**: Yes! This enables two-way communication.

**Example**:
```typescript
export class ChildComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  
  update() {
    this.value++;
    this.valueChange.emit(this.value);
  }
}

// Parent
<app-child [value]="count" (valueChange)="count = $event"></app-child>
```

---

#### Q5: What is EventEmitter in @Output()?

**Answer**: EventEmitter is a class used with @Output() to emit custom events from child to parent.

**Example**:
```typescript
@Output() myEvent = new EventEmitter<string>();

sendData() {
  this.myEvent.emit('Data from child');
}
```

---

#### Q6: How do you pass multiple values with @Output()?

**Answer**: Emit an object with multiple properties.

**Example**:
```typescript
@Output() dataEmitted = new EventEmitter<{name: string, age: number}>();

send() {
  this.dataEmitted.emit({
    name: 'Rahul',
    age: 25
  });
}

// Parent
handleData(data: {name: string, age: number}) {
  console.log(data.name, data.age);
}
```

---

#### Q7: Can you modify @Input() data in child component?

**Answer**: Yes, but be careful:
- Primitive values: Changes don't affect parent
- Objects/Arrays: Changes affect parent (reference)

**Example**:
```typescript
// Primitive
@Input() count: number = 0;
this.count++; // ✅ Only changes in child

// Object
@Input() user: any;
this.user.name = 'New'; // ⚠️ Changes in parent too!
```

---

#### Q8: What's the difference between @Input() and property binding?

**Answer**: @Input() decorator marks a property to receive data via property binding `[]`.

**Example**:
```typescript
// Child must have @Input()
export class ChildComponent {
  @Input() data: string = ''; // ✅ Required
}

// Parent uses property binding
<app-child [data]="myData"></app-child>
```

---

#### Q9: How do you use alias with @Input() and @Output()?

**Answer**: Pass alias name in decorator.

**Example**:
```typescript
// Child
@Input('displayName') name: string = '';
@Output('notifyParent') notify = new EventEmitter();

// Parent
<app-child 
  [displayName]="userName"
  (notifyParent)="handleNotify($event)">
</app-child>
```

---

#### Q10: When is @Input() data available in child component?

**Answer**: In ngOnInit(), NOT in constructor.

**Example**:
```typescript
export class ChildComponent implements OnInit {
  @Input() data: string = '';
  
  constructor() {
    console.log(this.data); // ❌ undefined
  }
  
  ngOnInit() {
    console.log(this.data); // ✅ Available
  }
}
```

---

## 19. @ViewChild() - Access Template Elements & Child Components 🎯

### 📖 Definition

**`@ViewChild()`** is a property decorator that provides access to child elements, directives, or components referenced in the template. It allows you to manipulate DOM elements and call child component methods from the parent.

**In Simple Words**: "Access and control elements in your template from TypeScript - like a TV remote controlling the TV!"

**Real-Life Analogy**: Like a remote control - You (Component) → Remote (@ViewChild) → TV (Element) control from a distance! 📺

---

### 📝 Syntax

```typescript
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export class MyComponent implements AfterViewInit {
  @ViewChild('referenceName') elementRef!: ElementRef;
  
  ngAfterViewInit() {
    // Element is now available
  }
}
```

---

### ⚠️ Important: @ViewChild Lifecycle

| Hook | @ViewChild Available? | Reason |
|------|----------------------|---------|
| **constructor** | ❌ NO | View not created yet |
| **ngOnInit** | ❌ NO | View not ready yet |
| **ngAfterViewInit** | ✅ YES | View is ready! |

---

### 💡 Real-Life Examples

#### Example 1: Auto-focus Input Field

**TypeScript (login.component.ts)**:
```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-form">
      <h2>🔐 Login</h2>
      <input #usernameInput 
             type="text" 
             placeholder="Username"
             class="form-input">
      <input #passwordInput
             type="password" 
             placeholder="Password"
             class="form-input">
      <button (click)="focusUsername()">Focus Username</button>
      <button (click)="clearAll()">Clear All</button>
    </div>
  `
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  
  constructor() {
    console.log('Constructor: usernameInput =', this.usernameInput);
    // OUTPUT: undefined ❌
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit: usernameInput =', this.usernameInput);
    // OUTPUT: ElementRef object ✅
    
    // Auto-focus on username field when page loads
    this.usernameInput.nativeElement.focus();
    console.log('✅ Username field focused automatically!');
  }
  
  focusUsername() {
    this.usernameInput.nativeElement.focus();
  }
  
  clearAll() {
    this.usernameInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
    this.usernameInput.nativeElement.focus();
  }
}
```

---

#### Example 2: Access Child Component Methods

**Child Component (counter.component.ts)**:
```typescript
@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h3>Counter: {{ counter }}</h3>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `
})
export class CounterComponent {
  counter: number = 0;
  
  increment() {
    this.counter++;
    console.log('Counter incremented:', this.counter);
  }
  
  decrement() {
    this.counter--;
    console.log('Counter decremented:', this.counter);
  }
  
  reset() {
    this.counter = 0;
    console.log('Counter reset!');
  }
}
```

**Parent Component (app.component.ts)**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="parent">
      <h2>👨‍👦 Parent Controls Child Counter</h2>
      
      <div class="controls">
        <button (click)="incrementChildCounter()">
          Increment Child from Parent
        </button>
        <button (click)="resetChildCounter()">
          Reset Child Counter
        </button>
      </div>
      
      <h3>Child Component:</h3>
      <app-counter></app-counter>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CounterComponent) childComponent!: CounterComponent;
  
  ngAfterViewInit() {
    console.log('Child component accessible:', this.childComponent);
  }
  
  incrementChildCounter() {
    // Call child component's method!
    this.childComponent.increment();
  }
  
  resetChildCounter() {
    this.childComponent.reset();
  }
}
```

---

#### Example 3: DOM Manipulation - Button Styling

**TypeScript**:
```typescript
@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
    <button #myButton (click)="handleClick()">
      Original Text
    </button>
    <button (click)="changeButtonText()">
      Change Button Text
    </button>
    <button (click)="styleButton()">
      Style Button
    </button>
  `
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('myButton') buttonRef!: ElementRef<HTMLButtonElement>;
  
  ngAfterViewInit() {
    console.log('Button element:', this.buttonRef.nativeElement);
  }
  
  changeButtonText() {
    this.buttonRef.nativeElement.innerHTML = '✅ Text Changed!';
    this.buttonRef.nativeElement.style.backgroundColor = '#4CAF50';
  }
  
  styleButton() {
    const btn = this.buttonRef.nativeElement;
    btn.style.padding = '15px 30px';
    btn.style.fontSize = '18px';
    btn.style.borderRadius = '8px';
    btn.style.cursor = 'pointer';
    btn.style.backgroundColor = '#2196F3';
    btn.style.color = 'white';
    btn.style.border = 'none';
  }
  
  handleClick() {
    alert('Button clicked!');
  }
}
```

---

#### Example 4: Video Player Control

**TypeScript**:
```typescript
@Component({
  selector: 'app-video-player',
  template: `
    <div class="player-container">
      <video #videoPlayer 
             src="assets/movie.mp4"
             width="640"
             height="360">
      </video>
      
      <div class="controls">
        <button (click)="play()">▶️ Play</button>
        <button (click)="pause()">⏸️ Pause</button>
        <button (click)="stop()">⏹️ Stop</button>
        <button (click)="mute()">🔇 Mute</button>
        <button (click)="unmute()">🔊 Unmute</button>
      </div>
      
      <p>Current Time: {{ currentTime }} seconds</p>
    </div>
  `
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  currentTime: number = 0;
  
  ngAfterViewInit() {
    // Listen to video events
    this.videoPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime = Math.floor(this.videoPlayer.nativeElement.currentTime);
    });
  }
  
  play() {
    this.videoPlayer.nativeElement.play();
  }
  
  pause() {
    this.videoPlayer.nativeElement.pause();
  }
  
  stop() {
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }
  
  mute() {
    this.videoPlayer.nativeElement.muted = true;
  }
  
  unmute() {
    this.videoPlayer.nativeElement.muted = false;
  }
}
```

---

#### Example 5: Multiple ViewChildren

**TypeScript**:
```typescript
@Component({
  selector: 'app-form',
  template: `
    <form>
      <input #nameInput placeholder="Name">
      <input #emailInput placeholder="Email">
      <input #phoneInput placeholder="Phone">
      <button (click)="focusFirst()">Focus First</button>
      <button (click)="clearAll()">Clear All</button>
    </form>
  `
})
export class FormComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  
  ngAfterViewInit() {
    // Auto-focus first input
    this.nameInput.nativeElement.focus();
  }
  
  focusFirst() {
    this.nameInput.nativeElement.focus();
  }
  
  clearAll() {
    this.nameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.phoneInput.nativeElement.value = '';
  }
}
```

---

### ✅ Best Practices

#### DO's ✅

1. **Use in ngAfterViewInit(), not constructor or ngOnInit()**
   ```typescript
   ngAfterViewInit() {
     this.myElement.nativeElement.focus(); // ✅
   }
   ```

2. **Add non-null assertion (!) or optional chaining (?)**
   ```typescript
   @ViewChild('myInput') input!: ElementRef;
   // or
   @ViewChild('myInput') input?: ElementRef;
   ```

3. **Prefer @Input/@Output over @ViewChild for parent-child communication**
   ```typescript
   // Better ✅
   <app-child [data]="value" (notify)="handleEvent()">
   
   // Avoid ❌
   @ViewChild(ChildComponent) child;
   child.data = value;
   ```

#### DON'Ts ❌

1. **Don't access in constructor or ngOnInit()**
   ```typescript
   constructor() {
     this.input.nativeElement.focus(); // ❌ undefined!
   }
   ```

2. **Don't overuse for parent-child communication**
   ```typescript
   // Bad ❌
   @ViewChild(ChildComponent) child;
   child.doSomething();
   
   // Better ✅
   <app-child (action)="handleAction()">
   ```

---

## 20. @ContentChild() - Access Projected Content 📮

### 📖 Definition

**`@ContentChild()`** is a property decorator that provides access to elements, directives, or components projected into the component using `<ng-content>`. It's used for content projection scenarios.

**In Simple Words**: "Access content that parent sends to child via ng-content - like opening a letter from an envelope!"

**Real-Life Analogy**: Like a letter in an envelope - Parent sends content, Child opens and accesses it! 📧

---

### 📝 Syntax

```typescript
import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

export class MyComponent implements AfterContentInit {
  @ContentChild('referenceName') contentRef!: ElementRef;
  
  ngAfterContentInit() {
    // Projected content is now available
  }
}
```

---

### ⚠️ Important: @ContentChild Lifecycle

| Hook | @ContentChild Available? | Reason |
|------|-------------------------|---------|
| **constructor** | ❌ NO | Content not projected yet |
| **ngOnInit** | ❌ NO | Content not ready yet |
| **ngAfterContentInit** | ✅ YES | Content is ready! |

---

### 💡 Real-Life Examples

#### Example 1: Basic Content Projection with Styling

**Parent Component (app.component.ts)**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <h1>👨‍👦 Parent Component</h1>
    <app-card>
      <h2 #cardHeading>Welcome to Angular!</h2>
      <p #cardPara>This content is projected from parent to child.</p>
    </app-card>
  `
})
export class AppComponent { }
```

**Child Component (card.component.ts)**:
```typescript
import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-header">
        <ng-content></ng-content>
      </div>
      <button (click)="highlightContent()">Highlight Content</button>
    </div>
  `
})
export class CardComponent implements AfterContentInit {
  @ContentChild('cardHeading') heading!: ElementRef;
  @ContentChild('cardPara') paragraph!: ElementRef;
  
  ngAfterContentInit() {
    console.log('✅ Projected content is ready!');
    console.log('Heading:', this.heading.nativeElement.textContent);
    console.log('Paragraph:', this.paragraph.nativeElement.textContent);
  }
  
  highlightContent() {
    // Style the heading
    this.heading.nativeElement.style.backgroundColor = 'yellow';
    this.heading.nativeElement.style.padding = '10px';
    this.heading.nativeElement.style.borderRadius = '5px';
    
    // Style the paragraph
    this.paragraph.nativeElement.style.backgroundColor = 'lightblue';
    this.paragraph.nativeElement.style.color = 'darkred';
    this.paragraph.nativeElement.style.padding = '15px';
    this.paragraph.nativeElement.style.fontWeight = 'bold';
  }
}
```

---

#### Example 2: Tab Component with Multiple Content Projections

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <app-tabs>
      <div #tab1 class="tab-item">
        <h3>Home Tab</h3>
        <p>Welcome to the home page!</p>
      </div>
      <div #tab2 class="tab-item">
        <h3>Profile Tab</h3>
        <p>View your profile information.</p>
      </div>
      <div #tab3 class="tab-item">
        <h3>Settings Tab</h3>
        <p>Manage your settings here.</p>
      </div>
    </app-tabs>
  `
})
export class AppComponent { }
```

**Child (tabs.component.ts)**:
```typescript
@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs-container">
      <div class="tab-buttons">
        <button (click)="showTab(1)">Home</button>
        <button (click)="showTab(2)">Profile</button>
        <button (click)="showTab(3)">Settings</button>
      </div>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChild('tab1') tab1!: ElementRef;
  @ContentChild('tab2') tab2!: ElementRef;
  @ContentChild('tab3') tab3!: ElementRef;
  
  ngAfterContentInit() {
    // Initially show only first tab
    this.showTab(1);
  }
  
  showTab(tabNumber: number) {
    // Hide all tabs
    if (this.tab1) this.tab1.nativeElement.style.display = 'none';
    if (this.tab2) this.tab2.nativeElement.style.display = 'none';
    if (this.tab3) this.tab3.nativeElement.style.display = 'none';
    
    // Show selected tab
    switch(tabNumber) {
      case 1:
        this.tab1.nativeElement.style.display = 'block';
        break;
      case 2:
        this.tab2.nativeElement.style.display = 'block';
        break;
      case 3:
        this.tab3.nativeElement.style.display = 'block';
        break;
    }
  }
}
```

---

#### Example 3: Alert Box with Custom Content

**Parent**:
```typescript
@Component({
  selector: 'app-root',
  template: `
    <app-alert>
      <p #alertMessage>⚠️ Warning: Your session will expire in 5 minutes!</p>
      <button #alertButton>Extend Session</button>
    </app-alert>
  `
})
export class AppComponent { }
```

**Child (alert.component.ts)**:
```typescript
@Component({
  selector: 'app-alert',
  template: `
    <div class="alert-box">
      <ng-content></ng-content>
      <button (click)="styleAlert()">Apply Alert Style</button>
    </div>
  `
})
export class AlertComponent implements AfterContentInit {
  @ContentChild('alertMessage') message!: ElementRef;
  @ContentChild('alertButton') button!: ElementRef;
  
  ngAfterContentInit() {
    this.styleAlert();
  }
  
  styleAlert() {
    // Style message
    if (this.message) {
      const msg = this.message.nativeElement;
      msg.style.color = '#d8000c';
      msg.style.backgroundColor = '#ffd2d2';
      msg.style.padding = '15px';
      msg.style.border = '1px solid #d8000c';
      msg.style.borderRadius = '5px';
    }
    
    // Style button
    if (this.button) {
      const btn = this.button.nativeElement;
      btn.style.backgroundColor = '#4CAF50';
      btn.style.color = 'white';
      btn.style.padding = '10px 20px';
      btn.style.border = 'none';
      btn.style.borderRadius = '5px';
      btn.style.cursor = 'pointer';
    }
  }
}
```

---

### 🎯 @ViewChild vs @ContentChild Comparison

| Feature | @ViewChild | @ContentChild |
|---------|-----------|---------------|
| **Accesses** | Own template elements | Projected content |
| **Available In** | ngAfterViewInit() | ngAfterContentInit() |
| **Use Case** | DOM manipulation | Content projection |
| **Scope** | Component's template | Parent's content |
| **Example** | `<input #myInput>` | `<ng-content>` |

---

### 📊 Visual Comparison

**@ViewChild Example**:
```typescript
// Child accesses its OWN template
@Component({
  template: `<input #myInput>`  // ← Own template
})
export class MyComponent {
  @ViewChild('myInput') input!: ElementRef;  // ✅
}
```

**@ContentChild Example**:
```typescript
// Child accesses PROJECTED content from parent
@Component({
  template: `<ng-content></ng-content>`  // ← Projected content
})
export class CardComponent {
  @ContentChild('projectedElement') element!: ElementRef;  // ✅
}

// Parent projects content
<app-card>
  <p #projectedElement>Projected text</p>
</app-card>
```

---

### ✅ Best Practices

#### DO's ✅

1. **Use @ViewChild for own template elements**
   ```typescript
   @ViewChild('myInput') input!: ElementRef;
   ```

2. **Use @ContentChild for projected content**
   ```typescript
   @ContentChild('projectedElement') element!: ElementRef;
   ```

3. **Use ngAfterContentInit() for @ContentChild**
   ```typescript
   ngAfterContentInit() {
     console.log(this.projectedContent); // ✅
   }
   ```

4. **Use ngAfterViewInit() for @ViewChild**
   ```typescript
   ngAfterViewInit() {
     console.log(this.myElement); // ✅
   }
   ```

#### DON'Ts ❌

1. **Don't confuse the two decorators**
   ```typescript
   // Wrong ❌
   @ViewChild('projectedElement') // Won't work for ng-content!
   
   // Correct ✅
   @ContentChild('projectedElement')
   ```

2. **Don't access before lifecycle hook**
   ```typescript
   ngOnInit() {
     console.log(this.contentChild); // ❌ undefined
   }
   ```

---

### ❓ Interview Questions

#### Q1: What is @ViewChild() and when to use it?

**Answer**: @ViewChild() accesses child elements, components, or directives in the component's own template.

**Example**:
```typescript
@Component({
  template: `<input #myInput>`
})
export class MyComponent implements AfterViewInit {
  @ViewChild('myInput') input!: ElementRef;
  
  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}
```

---

#### Q2: What's the difference between @ViewChild() and @ContentChild()?

**Answer**:

**@ViewChild()**: Accesses own template elements
**@ContentChild()**: Accesses projected content via `<ng-content>`

**Example**:
```typescript
// @ViewChild - Own template
@Component({
  template: `<input #myInput>`
})
class ChildComponent {
  @ViewChild('myInput') input!: ElementRef;
}

// @ContentChild - Projected content
@Component({
  template: `<ng-content></ng-content>`
})
class CardComponent {
  @ContentChild('projectedItem') item!: ElementRef;
}

// Usage
<app-card>
  <p #projectedItem>Content</p>
</app-card>
```

---

#### Q3: When is @ViewChild available?

**Answer**: In ngAfterViewInit(), NOT in constructor or ngOnInit().

**Example**:
```typescript
export class MyComponent implements AfterViewInit {
  @ViewChild('myDiv') div!: ElementRef;
  
  constructor() {
    console.log(this.div); // ❌ undefined
  }
  
  ngOnInit() {
    console.log(this.div); // ❌ undefined
  }
  
  ngAfterViewInit() {
    console.log(this.div); // ✅ Available!
  }
}
```

---

#### Q4: How do you access a child component using @ViewChild()?

**Answer**: Use the component class as the selector.

**Example**:
```typescript
// Child Component
@Component({ selector: 'app-counter' })
export class CounterComponent {
  count = 0;
  increment() { this.count++; }
}

// Parent Component
@Component({
  template: `<app-counter></app-counter>`
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(CounterComponent) counter!: CounterComponent;
  
  ngAfterViewInit() {
    this.counter.increment(); // Call child method
  }
}
```

---

#### Q5: What's the purpose of @ContentChild()?

**Answer**: To access elements projected into the component using `<ng-content>`.

**Example**:
```typescript
// Child Component
@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`
})
export class CardComponent implements AfterContentInit {
  @ContentChild('title') title!: ElementRef;
  
  ngAfterContentInit() {
    console.log(this.title.nativeElement.textContent);
  }
}

// Parent Usage
<app-card>
  <h1 #title>My Title</h1>
</app-card>
```

---

#### Q6: Can you have multiple @ViewChild decorators?

**Answer**: Yes! You can have multiple @ViewChild decorators for different elements.

**Example**:
```typescript
@Component({
  template: `
    <input #name>
    <input #email>
    <input #phone>
  `
})
export class FormComponent {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('phone') phoneInput!: ElementRef;
}
```

---

#### Q7: What is the difference between ElementRef and component reference in @ViewChild?

**Answer**:

**ElementRef**: Access to native DOM element
**Component Reference**: Access to component instance and its methods

**Example**:
```typescript
// ElementRef
@ViewChild('myInput') input!: ElementRef;
this.input.nativeElement.focus(); // DOM access

// Component Reference
@ViewChild(ChildComponent) child!: ChildComponent;
this.child.someMethod(); // Component method access
```

---

#### Q8: Why use ! (non-null assertion) with @ViewChild?

**Answer**: To tell TypeScript that the property will be assigned before use, avoiding strict null checks.

**Example**:
```typescript
// With ! (non-null assertion)
@ViewChild('myInput') input!: ElementRef;

// Without ! (must handle undefined)
@ViewChild('myInput') input?: ElementRef;

ngAfterViewInit() {
  this.input?.nativeElement.focus(); // Optional chaining
}
```

---

#### Q9: Can you use @ViewChild with ngIf?

**Answer**: Yes, but be careful! The element may not exist if ngIf is false.

**Example**:
```typescript
@Component({
  template: `
    <div *ngIf="show">
      <input #myInput>
    </div>
  `
})
export class MyComponent {
  show = false;
  @ViewChild('myInput') input?: ElementRef;
  
  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.focus(); // ✅ Safe check
    }
  }
}
```

---

#### Q10: What's the best practice: @ViewChild or @Input/@Output?

**Answer**: Prefer @Input/@Output for parent-child communication. Use @ViewChild only for DOM manipulation or accessing child methods when necessary.

**Example**:
```typescript
// Better ✅ - Using @Input/@Output
<app-child [data]="value" (notify)="handleEvent()">

// Avoid ❌ - Overusing @ViewChild
@ViewChild(ChildComponent) child!: ChildComponent;
child.data = value; // Tight coupling
```

---

## 21. @HostBinding Decorator 🎨

### Definition

`@HostBinding` is a **property decorator** that binds a host element property to a directive/component property. It allows you to dynamically set properties, attributes, classes, or styles on the host element from within the directive.

**Real-Life Analogy:** Think of it as a **remote control** 🎮 - you control the TV (host element) from the remote (directive) without touching the TV directly!

### Syntax

```typescript
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {
  @HostBinding('style.backgroundColor') bgColor = 'yellow';
  @HostBinding('class.active') isActive = true;
  @HostBinding('attr.data-status') status = 'online';
}
```

### What Can You Bind?

| Binding Type | Syntax | Example |
|-------------|---------|---------|
| **Class** | `@HostBinding('class.className')` | Add/remove CSS classes |
| **Style** | `@HostBinding('style.propertyName')` | Set inline styles |
| **Attribute** | `@HostBinding('attr.attributeName')` | Set HTML attributes |
| **Property** | `@HostBinding('propertyName')` | Set DOM properties |

### Example 1: Highlight Directive with Dynamic Color

**DIRECTIVE (highlight.directive.ts):**
```typescript
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';
  
  @HostBinding('style.backgroundColor') bgColor = this.highlightColor;
  @HostBinding('style.padding') padding = '10px';
  @HostBinding('style.borderRadius') borderRadius = '5px';
  @HostBinding('style.transition') transition = 'all 0.3s ease';
  
  constructor() {
    // Set background color after component initialization
    setTimeout(() => {
      this.bgColor = this.highlightColor;
    });
  }
}
```

**USAGE:**
```html
<p appHighlight highlightColor="lightblue">
  This paragraph has a light blue highlight!
</p>
<p appHighlight highlightColor="lightgreen">
  This one has a light green highlight!
</p>
<p appHighlight>
  This uses the default yellow highlight!
</p>
```

**OUTPUT:**
- First paragraph: Light blue background with padding
- Second paragraph: Light green background with padding
- Third paragraph: Yellow background (default) with padding

---

### Example 2: Status Indicator Directive

**DIRECTIVE (status.directive.ts):**
```typescript
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStatus]',
  standalone: true
})
export class StatusDirective {
  @HostBinding('class.active') isActive = true;
  @HostBinding('class.premium') isPremium = false;
  @HostBinding('attr.data-status') status = 'online';
  @HostBinding('style.borderLeft') border = '5px solid green';
  
  constructor() {
    // Simulate status change after 3 seconds
    setTimeout(() => {
      this.isPremium = true;
      this.status = 'premium-user';
      this.border = '5px solid gold';
      console.log('Status upgraded to premium!');
    }, 3000);
  }
}
```

**USAGE:**
```html
<div appStatus class="user-card">
  <h3>User Status Card</h3>
  <p>Watch the status change after 3 seconds!</p>
</div>
```

**CSS:**
```css
.user-card {
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
}

.active {
  border: 2px solid green;
  background: #e8f5e9;
}

.premium {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  font-weight: bold;
  color: #333;
}
```

**OUTPUT:**
- Initially: Green border, light green background
- After 3 seconds: Gold gradient background, gold left border, premium class added

---

### Example 3: Card Shadow Directive

**DIRECTIVE (card-shadow.directive.ts):**
```typescript
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardShadow]',
  standalone: true
})
export class CardShadowDirective {
  @HostBinding('style.boxShadow') shadow = '0 2px 4px rgba(0,0,0,0.1)';
  @HostBinding('style.padding') padding = '20px';
  @HostBinding('style.borderRadius') borderRadius = '10px';
  @HostBinding('style.backgroundColor') bgColor = '#ffffff';
  @HostBinding('style.transition') transition = 'all 0.3s ease';
  @HostBinding('style.border') border = '1px solid #e0e0e0';
}
```

**USAGE:**
```html
<div appCardShadow>
  <h3>Card with Shadow</h3>
  <p>This card has automatic shadow, padding, and rounded corners!</p>
</div>

<div appCardShadow>
  <h3>Product Card</h3>
  <p>Price: $99.99</p>
  <button>Add to Cart</button>
</div>
```

**OUTPUT:**
- Both divs get: Shadow effect, 20px padding, rounded corners, white background, smooth transitions

---

### Use Cases for @HostBinding

1. **Dynamic Styling** - Change element styles based on component state
2. **Theme Switching** - Apply different classes for dark/light mode
3. **Status Indicators** - Visual feedback based on data state
4. **Accessibility** - Set ARIA attributes dynamically
5. **Conditional Classes** - Add/remove CSS classes programmatically

### Best Practices

✅ **DO:**
- Use for dynamic host element styling
- Combine with @HostListener for interactive directives
- Set default values for bindings
- Use for accessibility attributes (aria-*, role)

❌ **DON'T:**
- Overuse for simple static styles (use CSS instead)
- Bind to properties that don't exist on the element
- Forget to import HostBinding from '@angular/core'
- Use complex logic in @HostBinding declarations

---

## 22. @HostListener Decorator 👂

### Definition

`@HostListener` is a **method decorator** that listens to events on the host element and executes the decorated method when those events occur. It's like adding an event listener directly on the element where the directive is applied.

**Real-Life Analogy:** Think of it as a **doorbell** 🔔 - when someone rings (event), you respond (method executes)!

### Syntax

```typescript
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Element clicked!', event);
  }
  
  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse entered!');
  }
}
```

### Common Events to Listen

| Event | Description | Use Case |
|-------|-------------|----------|
| `click` | Mouse click | Button interactions |
| `mouseenter` | Mouse enters element | Hover effects |
| `mouseleave` | Mouse leaves element | Remove hover effects |
| `keydown` | Key pressed | Keyboard shortcuts |
| `scroll` | Element scrolled | Scroll tracking |
| `focus` | Element focused | Input validation |
| `blur` | Element loses focus | Save data on blur |

### Example 1: Interactive Button Directive (Complete)

**DIRECTIVE (interactive-button.directive.ts):**
```typescript
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInteractiveButton]',
  standalone: true
})
export class InteractiveButtonDirective {
  @HostBinding('style.backgroundColor') bgColor = '#3498db';
  @HostBinding('style.color') textColor = 'white';
  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.padding') padding = '12px 24px';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.borderRadius') borderRadius = '5px';
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.transition') transition = 'all 0.3s ease';
  
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = '#2ecc71';
    this.transform = 'scale(1.1)';
    console.log('🎯 Mouse entered button!');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '#3498db';
    this.transform = 'scale(1)';
    console.log('🎯 Mouse left button!');
  }
  
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.bgColor = '#e74c3c';
    console.log('🎯 Button clicked!', event);
    
    // Reset color after animation
    setTimeout(() => {
      this.bgColor = '#3498db';
    }, 200);
  }
  
  @HostListener('mousedown') onMouseDown() {
    this.transform = 'scale(0.95)';
  }
  
  @HostListener('mouseup') onMouseUp() {
    this.transform = 'scale(1.1)';
  }
}
```

**USAGE:**
```html
<button appInteractiveButton>
  Hover and Click Me! 🎨
</button>

<button appInteractiveButton>
  Another Interactive Button
</button>
```

**APP COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveButtonDirective } from './directives/interactive-button.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, InteractiveButtonDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent { }
```

**OUTPUT:**
- Hover: Button turns green, scales to 1.1
- Click: Button flashes red, scales to 0.95 then 1.1
- Leave: Button returns to blue, scale 1

---

### Example 2: Keyboard Shortcuts Directive

**DIRECTIVE (keyboard-shortcuts.directive.ts):**
```typescript
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardShortcuts]',
  standalone: true
})
export class KeyboardShortcutsDirective {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Ctrl + S → Save
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      console.log('💾 Save shortcut pressed (Ctrl+S)');
      this.save();
    }
    
    // Ctrl + P → Print
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
      console.log('🖨️ Print shortcut pressed (Ctrl+P)');
      this.print();
    }
    
    // Escape → Close
    if (event.key === 'Escape') {
      console.log('❌ Escape pressed - Close modal');
      this.closeModal();
    }
    
    // Ctrl + Z → Undo
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      console.log('↩️ Undo shortcut pressed (Ctrl+Z)');
      this.undo();
    }
  }
  
  save() {
    alert('Saving document...');
  }
  
  print() {
    alert('Opening print dialog...');
  }
  
  closeModal() {
    alert('Closing modal...');
  }
  
  undo() {
    alert('Undoing last action...');
  }
}
```

**USAGE:**
```html
<div appKeyboardShortcuts>
  <h2>Keyboard Shortcuts Active!</h2>
  <p>Try these shortcuts:</p>
  <ul>
    <li>Ctrl+S → Save</li>
    <li>Ctrl+P → Print</li>
    <li>Esc → Close</li>
    <li>Ctrl+Z → Undo</li>
  </ul>
</div>
```

**OUTPUT:**
- Ctrl+S: Shows "Saving document..." alert
- Ctrl+P: Shows "Opening print dialog..." alert
- Escape: Shows "Closing modal..." alert
- Ctrl+Z: Shows "Undoing last action..." alert

---

### Example 3: Scroll Tracker Directive

**DIRECTIVE (scroll-tracker.directive.ts):**
```typescript
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]',
  standalone: true
})
export class ScrollTrackerDirective {
  @HostBinding('class.scrolled') isScrolled = false;
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition > 100) {
      this.isScrolled = true;
      console.log('📜 Page scrolled down!', scrollPosition);
    } else {
      this.isScrolled = false;
      console.log('📜 Page at top!');
    }
  }
}
```

**USAGE:**
```html
<nav appScrollTracker>
  <h1>Navigation Bar</h1>
  <p>Scroll down to see style change!</p>
</nav>

<div style="height: 2000px; padding: 20px;">
  <p>Scroll down to see the navbar change!</p>
</div>
```

**CSS:**
```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  padding: 20px;
  transition: all 0.3s ease;
  z-index: 1000;
}

nav.scrolled {
  background: #333;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  padding: 10px;
}
```

**OUTPUT:**
- At top: White background, 20px padding
- Scrolled > 100px: Dark background, white text, shadow, 10px padding

---

### Example 4: Click Outside Directive

**DIRECTIVE (click-outside.directive.ts):**
```typescript
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('[appClickOutside]');
    
    if (!clickedInside) {
      console.log('Clicked outside the element!');
      this.clickOutside.emit();
    }
  }
}
```

**USAGE:**
```html
<div class="container">
  <button (click)="toggleDropdown()">Toggle Menu</button>
  
  <div appClickOutside (clickOutside)="closeDropdown()" class="dropdown" *ngIf="isOpen">
    <ul>
      <li>Profile</li>
      <li>Settings</li>
      <li>Logout</li>
    </ul>
  </div>
</div>
```

**COMPONENT:**
```typescript
export class AppComponent {
  isOpen = false;
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    console.log('Dropdown toggled:', this.isOpen);
  }
  
  closeDropdown() {
    this.isOpen = false;
    console.log('Dropdown closed!');
  }
}
```

**CSS:**
```css
.dropdown {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown li:hover {
  background: #f0f0f0;
}
```

**OUTPUT:**
- Click button: Dropdown opens
- Click outside: Dropdown closes automatically

---

### @HostBinding vs @HostListener Comparison

| Feature | @HostBinding | @HostListener |
|---------|--------------|---------------|
| **Purpose** | Bind host element **properties** | Listen to host element **events** |
| **Type** | Property decorator | Method decorator |
| **Direction** | Component → Host (set values) | Host → Component (receive events) |
| **Use Case** | Dynamic styling, classes, attributes | Event handling, user interactions |
| **Example** | `@HostBinding('class.active')` | `@HostListener('click')` |

### Use Cases for @HostListener

1. **Interactive Directives** - Hover effects, click animations
2. **Keyboard Shortcuts** - Global hotkeys (Ctrl+S, Esc, etc.)
3. **Scroll Tracking** - Fixed headers, lazy loading
4. **Click Outside Detection** - Close dropdowns, modals
5. **Form Validation** - Focus/blur events for inputs
6. **Accessibility** - Keyboard navigation support

### Best Practices

✅ **DO:**
- Use `$event` parameter to access event details
- Prevent default behavior when needed (`event.preventDefault()`)
- Combine with @HostBinding for complete interactivity
- Listen to `document` or `window` for global events
- Clean up event listeners in ngOnDestroy if needed

❌ **DON'T:**
- Add heavy logic inside event handlers
- Forget to prevent default for keyboard shortcuts
- Listen to events that fire too frequently without throttling
- Use @HostListener for static event handling (use template instead)

---

## 23. Angular Pipes 🔄

### Definition

**Pipes** are a template binding feature in Angular that allow data transformation before displaying it in the view. They take data as input, transform it, and return the formatted output.

**Real-Life Analogy:** Think of a pipe as a **water filter** 💧 - raw water (data) goes in, filtered clean water (formatted data) comes out!

### Syntax

```typescript
{{ value | pipeName }}
{{ value | pipeName:parameter1:parameter2 }}
{{ value | pipe1 | pipe2 | pipe3 }}  // Chaining pipes
```

### Built-in Pipes Overview

| Pipe | Purpose | Example |
|------|---------|---------|
| `uppercase` | Converts to uppercase | `{{ 'hello' \| uppercase }}` → HELLO |
| `lowercase` | Converts to lowercase | `{{ 'HELLO' \| lowercase }}` → hello |
| `titlecase` | Converts to title case | `{{ 'hello world' \| titlecase }}` → Hello World |
| `date` | Formats dates | `{{ today \| date:'dd/MM/yyyy' }}` |
| `currency` | Formats currency | `{{ 1000 \| currency:'INR' }}` → ₹1,000.00 |
| `percent` | Formats percentage | `{{ 0.5 \| percent }}` → 50% |
| `number` | Formats numbers | `{{ 1000 \| number:'1.2-3' }}` |
| `json` | Converts to JSON string | `{{ object \| json }}` |
| `slice` | Slices arrays/strings | `{{ 'India' \| slice:0:3 }}` → Ind |
| `async` | Unwraps observables/promises | `{{ data$ \| async }}` |

---

### Example 1: Basic Pipes Usage

**COMPONENT (app.component.ts):**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h2>Basic Pipes Examples</h2>
    
    <p>Original: {{ name }}</p>
    <p>Uppercase: {{ name | uppercase }}</p>
    <p>Titlecase: {{ name | titlecase }}</p>
    
    <p>Today's Date: {{ todayDate | date:'MM/dd/yyyy' }}</p>
    <p>Full Date: {{ todayDate | date:'fullDate' }}</p>
    
    <p>Price: {{ price | currency:'INR' }}</p>
    <p>USD Price: {{ price | currency:'USD' }}</p>
    
    <p>Chained: {{ 'India' | slice:0:3 | uppercase }}</p>
  `,
  standalone: true
})
export class AppComponent {
  name: string = 'raghav mahajan';
  todayDate: Date = new Date();
  price: number = 70000;
}
```

**OUTPUT:**
```
Original: raghav mahajan
Uppercase: RAGHAV MAHAJAN
Titlecase: Raghav Mahajan
Today's Date: 12/27/2025
Full Date: Saturday, December 27, 2025
Price: ₹70,000.00
USD Price: $70,000.00
Chained: IND
```

---

### Example 2: Slice Pipe with Array & String

**COMPONENT:**
```typescript
@Component({
  selector: 'app-slice-demo',
  imports: [CommonModule],
  template: `
    <h2>Slice Pipe Examples</h2>
    
    <h3>String Slicing:</h3>
    <p>Original: {{ country }}</p>
    <p>First 3 chars: {{ country | slice:0:3 }}</p>
    <p>Last 3 chars: {{ country | slice:-3 }}</p>
    <p>From index 2: {{ country | slice:2 }}</p>
    
    <h3>Array Slicing:</h3>
    <p>Full Array: {{ numbers }}</p>
    <p>First 3 items: {{ numbers | slice:0:3 }}</p>
    <p>Last 2 items: {{ numbers | slice:-2 }}</p>
  `,
  standalone: true
})
export class SliceDemoComponent {
  country: string = 'India';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
}
```

**OUTPUT:**
```
String Slicing:
Original: India
First 3 chars: Ind
Last 3 chars: dia
From index 2: dia

Array Slicing:
Full Array: 1,2,3,4,5,6,7,8
First 3 items: 1,2,3
Last 2 items: 7,8
```

---

### Example 3: Pagination with Slice Pipe

**COMPONENT (pagination.component.ts):**
```typescript
@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  template: `
    <h2>User Data Pagination</h2>
    
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userData | slice:startIndex:endIndex">
          <td>{{ user.id }}</td>
          <td>{{ user.name | titlecase }}</td>
          <td>{{ user.DOB | date:'MM-dd-yyyy' }}</td>
          <td>{{ user.salary | currency:'USD' }}</td>
        </tr>
      </tbody>
    </table>
    
    <div>
      <button (click)="goPrevious()" [disabled]="startIndex === 0">
        Previous
      </button>
      <span> Page {{ currentPage }} </span>
      <button (click)="goNext()" [disabled]="endIndex >= userData.length">
        Next
      </button>
    </div>
  `,
  standalone: true
})
export class PaginationComponent {
  userData = [
    { id: 1, name: 'raghav', DOB: new Date('1998-10-10'), salary: 50000 },
    { id: 2, name: 'priya', DOB: new Date('1999-05-15'), salary: 60000 },
    { id: 3, name: 'amit', DOB: new Date('1997-08-20'), salary: 70000 },
    { id: 4, name: 'sneha', DOB: new Date('2000-03-12'), salary: 80000 },
    { id: 5, name: 'rahul', DOB: new Date('1996-11-25'), salary: 90000 }
  ];
  
  startIndex: number = 0;
  pageSize: number = 2;
  endIndex: number = this.pageSize;
  currentPage: number = 1;
  
  goNext() {
    console.log('Next page');
    this.startIndex += this.pageSize;
    this.endIndex += this.pageSize;
    this.currentPage++;
  }
  
  goPrevious() {
    console.log('Previous page');
    this.startIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
    this.currentPage--;
  }
}
```

**OUTPUT:**
- Initial: Shows users 1-2
- Click Next: Shows users 3-4
- Click Next: Shows user 5
- Previous button disabled on first page
- Next button disabled on last page

---

### Example 4: Number Pipe Formatting

**COMPONENT:**
```typescript
@Component({
  selector: 'app-number-demo',
  imports: [CommonModule],
  template: `
    <h2>Number Pipe Examples</h2>
    
    <p>Original: {{ amount }}</p>
    <p>Format '1.2-3': {{ amount | number:'1.2-3' }}</p>
    <p>Format '4.2-2': {{ 1234.5678 | number:'4.2-2' }}</p>
    <p>Format '1.0-0': {{ 1234.5678 | number:'1.0-0' }}</p>
  `,
  standalone: true
})
export class NumberDemoComponent {
  amount: number = 1234.5678;
}
```

**Number Pipe Format:** `'minIntegerDigits.minFractionDigits-maxFractionDigits'`
- `minIntegerDigits`: Minimum digits before decimal
- `minFractionDigits`: Minimum digits after decimal
- `maxFractionDigits`: Maximum digits after decimal

**OUTPUT:**
```
Original: 1234.5678
Format '1.2-3': 1,234.568
Format '4.2-2': 1,234.57
Format '1.0-0': 1,235
```

---

### Example 5: JSON Pipe for Debugging

**COMPONENT:**
```typescript
@Component({
  selector: 'app-json-demo',
  imports: [CommonModule],
  template: `
    <h2>JSON Pipe Example</h2>
    
    <h3>Without JSON Pipe:</h3>
    <p>{{ userJson }}</p>
    
    <h3>With JSON Pipe:</h3>
    <pre>{{ userJson | json }}</pre>
  `,
  standalone: true
})
export class JsonDemoComponent {
  userJson = {
    name: 'Raghav',
    age: 21,
    address: {
      street: 'Street 1',
      city: 'New Delhi',
      country: 'India'
    },
    hobbies: ['Reading', 'Coding', 'Gaming']
  };
}
```

**OUTPUT:**
```
Without JSON Pipe:
[object Object]

With JSON Pipe:
{
  "name": "Raghav",
  "age": 21,
  "address": {
    "street": "Street 1",
    "city": "New Delhi",
    "country": "India"
  },
  "hobbies": [
    "Reading",
    "Coding",
    "Gaming"
  ]
}
```

---

### Example 6: Custom Pipe - Append Suffix

**Create Pipe:**
```bash
ng g pipe pipes/customPipe
```

**PIPE (custom-pipe.pipe.ts):**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {
  transform(value: string, suffix: string = ''): string {
    console.log('CustomPipe called');
    return value + ' ' + suffix;
  }
}
```

**USAGE:**
```typescript
@Component({
  selector: 'app-custom-demo',
  imports: [CommonModule, CustomPipePipe],
  template: `
    <h2>Custom Pipe Example</h2>
    <p>{{ 'Raghav' | customPipe:'Mahajan' }}</p>
    <p>{{ 'Hello' | customPipe:'World' }}</p>
    <p>{{ 'Angular' | customPipe }}</p>
  `,
  standalone: true
})
export class CustomDemoComponent { }
```

**OUTPUT:**
```
Raghav Mahajan
Hello World
Angular
```

---

### Pure vs Impure Pipes

#### Pure Pipe (Default)

- Executes **only when input value changes**
- **Better performance** (fewer executions)
- Default: `pure: true`

```typescript
@Pipe({
  name: 'purePipe',
  pure: true  // Default
})
export class PurePipePipe implements PipeTransform {
  transform(value: string): number {
    console.log('PurePipe called');
    return value.length;
  }
}
```

#### Impure Pipe

- Executes on **every change detection cycle**
- **Lower performance** (frequent executions)
- Use when: Transforming mutable data (arrays, objects)
- Set: `pure: false`

```typescript
@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {
  transform(value: string): number {
    console.log('ImpurePipe called - on every change');
    return value.length;
  }
}
```

---

### Example 7: Impure Pipe for Array Sum

**PIPE (array-sum.pipe.ts):**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySum',
  pure: false,  // Impure to detect array changes
  standalone: true
})
export class ArraySumPipe implements PipeTransform {
  transform(value: number[]): number {
    console.log('ArraySum pipe called');
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum += value[i];
    }
    return sum;
  }
}
```

**COMPONENT:**
```typescript
@Component({
  selector: 'app-impure-demo',
  imports: [CommonModule, ArraySumPipe],
  template: `
    <h2>Impure Pipe - Array Sum</h2>
    
    <p>Array: {{ arrayData }}</p>
    <p>Sum: {{ arrayData | arraySum }}</p>
    
    <button (click)="addValue(10)">Add 10</button>
    <button (click)="addValue(20)">Add 20</button>
  `,
  standalone: true
})
export class ImpureDemoComponent {
  arrayData: number[] = [10, 20, 30, 40, 50];
  
  addValue(val: number) {
    this.arrayData.push(val);
    console.log('Value added:', val);
  }
}
```

**OUTPUT:**
```
Initial Sum: 150
After adding 10: 160
After adding 20: 180
```

**Note:** Pure pipe won't detect `.push()` changes because array reference doesn't change. Impure pipe detects it!

---

### When to Use Impure Pipes

✅ Use impure pipes when:
1. Transforming **mutable data** (arrays, objects)
2. Data changes via `.push()`, `.splice()`, etc.
3. Need to reflect **real-time updates**

⚠️ Caution:
- Impure pipes execute on **every change detection**
- Can impact **performance** if overused
- Use sparingly and optimize transform logic

---

### Pipe Chaining

Pipes can be chained together - output of one pipe becomes input of next:

```typescript
{{ 'india' | slice:0:3 | uppercase }}  // Output: IND
{{ price | currency:'INR' | uppercase }}  // Output: ₹1,000.00 (if applicable)
{{ text | titlecase | slice:0:10 }}
```

**Execution Order:** Left to right

---

### Use Cases for Pipes

1. **Date Formatting** - Display dates in different formats
2. **Currency Display** - Show prices in local currency
3. **Text Transformation** - Uppercase, lowercase, title case
4. **Pagination** - Slice arrays for page display
5. **Debugging** - JSON pipe to inspect objects
6. **Search/Filter** - Custom pipes for filtering lists
7. **Number Formatting** - Decimal places, thousands separators

### Best Practices

✅ **DO:**
- Use pure pipes for better performance
- Chain pipes for complex transformations
- Create custom pipes for reusable logic
- Use async pipe for observables/promises
- Name pipes descriptively

❌ **DON'T:**
- Make impure pipes with heavy logic
- Perform API calls inside pipes
- Modify input data in transform method
- Create pipes for simple one-time transformations (use methods)
- Forget to mark custom pipes as standalone (Angular 16+)

---

### Interview Questions - @HostBinding & @HostListener

**Q1: What is the difference between @HostBinding and @HostListener?**

@HostBinding binds host element **properties** (classes, styles, attributes) from directive. @HostListener listens to host element **events** and executes methods. @HostBinding is for setting values; @HostListener is for receiving events.

**Q2: Can we use multiple @HostListener decorators on the same directive?**

Yes, you can listen to multiple events:
```typescript
@HostListener('click') onClick() { }
@HostListener('mouseenter') onEnter() { }
```

**Q3: How do you access the event object in @HostListener?**

Use `['$event']` parameter:
```typescript
@HostListener('click', ['$event'])
onClick(event: MouseEvent) {
  console.log(event);
}
```

**Q4: What is the difference between binding to 'class' and 'class.className'?**

`@HostBinding('class')` sets entire class string. `@HostBinding('class.active')` toggles specific class based on boolean value.

**Q5: Can @HostListener listen to global events like window or document?**

Yes, use `window:event` or `document:event`:
```typescript
@HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) { }
```

**Q6: When would you use @HostBinding over [ngClass]?**

Use @HostBinding in **custom directives** to encapsulate styling logic. Use [ngClass] in **templates** for component-specific conditional classes.

**Q7: How do you prevent default behavior in @HostListener?**

Call `preventDefault()` on the event object:
```typescript
@HostListener('click', ['$event'])
onClick(event: MouseEvent) {
  event.preventDefault();
}
```

**Q8: Can we combine @HostBinding and @Input?**

Yes, common pattern for configurable directives:
```typescript
@Input() highlightColor = 'yellow';
@HostBinding('style.backgroundColor') get bgColor() {
  return this.highlightColor;
}
```

**Q9: What happens if we don't import HostBinding/HostListener?**

You'll get a compilation error: "Cannot find name 'HostBinding'" or "HostListener". Always import from '@angular/core'.

**Q10: How do you clean up event listeners added with @HostListener?**

Angular automatically cleans up @HostListener events. For manual listeners, implement ngOnDestroy:
```typescript
ngOnDestroy() {
  // Remove manual listeners
}
```

---

### Interview Questions - Pipes

**Q1: What are pipes in Angular?**

Pipes are template features that transform data before display. They take input values, apply transformations, and return formatted output. Syntax: `{{ value | pipeName }}`.

**Q2: What is the difference between pure and impure pipes?**

**Pure pipes** execute only when input value changes (better performance, default). **Impure pipes** execute on every change detection cycle (detect mutable changes, lower performance). Set `pure: false` for impure.

**Q3: How do you create a custom pipe?**

Use `ng g pipe pipeName`, implement `PipeTransform` interface with `transform()` method:
```typescript
@Pipe({ name: 'myPipe', standalone: true })
export class MyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return transformedValue;
  }
}
```

**Q4: Can pipes accept parameters?**

Yes, separate parameters with colons:
```typescript
{{ date | date:'MM/dd/yyyy':'UTC' }}
{{ number | number:'1.2-3' }}
```

**Q5: What is pipe chaining?**

Applying multiple pipes in sequence:
```typescript
{{ 'india' | slice:0:3 | uppercase }}  // IND
```
Execution is left to right.

**Q6: When should you use impure pipes?**

When transforming **mutable data** (arrays/objects modified via .push(), .splice()) that don't change reference. Use sparingly due to performance impact.

**Q7: What is the async pipe?**

Built-in pipe that subscribes to Observables/Promises and automatically unsubscribes:
```typescript
{{ data$ | async }}
```
Prevents memory leaks.

**Q8: How does the number pipe work?**

Formats numbers with `'minIntegerDigits.minFractionDigits-maxFractionDigits'`:
```typescript
{{ 1234.567 | number:'1.2-3' }}  // 1,234.567
```

**Q9: Can pipes modify the original data?**

No, pipes should be **pure functions** without side effects. They return transformed copies, not modify originals.

**Q10: What's the difference between pipes and methods in templates?**

**Pipes** are reusable, cached by Angular (pure pipes). **Methods** execute on every change detection. Prefer pipes for transformations, methods for complex logic.

---

## 24. Angular Services 🛠️

### Definition

**Services** are TypeScript classes used to perform tasks such as fetching data from servers, data manipulation, business logic, and sharing data across components. Services promote code reusability and separation of concerns.

**Real-Life Analogy:** Think of a service as a **restaurant kitchen** 🍳 - multiple waiters (components) can request food (data) from the same kitchen (service) without each waiter needing their own kitchen!

### Creating a Service

**Command:**
```bash
ng g s foldername/servicename
ng g service services/employee
```

### Basic Service Structure

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  
  empData = [
    { id: 1, name: 'Raghav', age: 21, designation: 'Developer' },
    { id: 2, name: 'Shiv', age: 22, designation: 'Tester' },
    { id: 3, name: 'Aman', age: 23, designation: 'Manager' }
  ];
  
  getEmpData() {
    return this.empData;
  }
  
  getEmpDataByID(empID: number) {
    return this.empData.find((e) => e.id === empID);
  }
}
```

### Example 1: Employee Service - Basic Usage

**SERVICE (employee.service.ts):**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}
  
  empData = [
    { id: 1, name: 'Raghav', age: 21, designation: 'Developer' },
    { id: 2, name: 'Shiv', age: 22, designation: 'Tester' },
    { id: 3, name: 'Aman', age: 23, designation: 'Manager' }
  ];
  
  getEmpData() {
    return this.empData;
  }
  
  getEmpDataByID(empID: number) {
    return this.empData.find((e) => e.id === empID);
  }
}
```

**COMPONENT (app.component.html):**
```html
<h1>Employee Details Using Service</h1>
<ul *ngFor="let emp of empData">
  <li>
    Employee Name: {{emp.name}} <br>
    <button (click)="showDetails(emp.id)">Show Details</button>
    <div *ngIf="emp.id === empId">
      <p>empId: {{empDataByID.id}}</p>
      <p>Employee age: {{empDataByID.age}}</p>
      <p>Employee designation: {{empDataByID.designation}}</p>
    </div>
  </li>
</ul>
```

**COMPONENT (app.component.ts):**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  empId: number | undefined;
  empDataByID: any;
  empData: any[] = [];
  
  constructor(private empService: EmployeeService) {
    this.empData = this.empService.getEmpData();
  }
  
  showDetails(empIdFromUI: number) {
    this.empId = empIdFromUI;
    this.empDataByID = this.empService.getEmpDataByID(empIdFromUI);
  }
}
```

**OUTPUT:**
- Displays list of employees
- Click "Show Details" to see full employee information
- Data fetched from centralized service

---

## 25. Dependency Injection (DI) 💉

### Definition

**Dependency Injection** is a design pattern where dependencies (like services) are provided to a component instead of the component creating them. Angular's DI system manages the lifecycle and injection of services.

**Real-Life Analogy:** Think of it as **room service** 🏨 - you don't go to the kitchen to get food, the hotel brings it to your room when you need it!

### Three Levels of Providing Services

| Level | Scope | Syntax | Behavior |
|-------|-------|--------|----------|
| **Root** | Application-wide | `providedIn: 'root'` | Singleton (one instance for entire app) |
| **Module** | Module-wide | `providers: [Service]` in NgModule | One instance per module |
| **Component** | Component-wide | `providers: [Service]` in Component | New instance per component |

### Example 1: Root Level Service (Singleton)

**SERVICE:**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Singleton - shared across entire app
})
export class EmployeeService {
  constructor() {}
  
  empData = [{Name: 'Raghav', Age: 21}, {Name: 'Shiv', Age: 22}];
  
  getEmpData() {
    return this.empData;
  }
}
```

**COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  empData: any[] = [];
  
  // Dependency injection via constructor
  constructor(private empService: EmployeeService) {
    this.empData = this.empService.getEmpData();
  }
}
```

---

### Example 2: Component Level Service (New Instance)

**SERVICE:**
```typescript
import { Injectable } from '@angular/core';

@Injectable()  // No providedIn
export class CounterService {
  count = 0;
  
  increment() {
    this.count++;
  }
}
```

**COMPONENT:**
```typescript
@Component({
  selector: 'app-counter',
  template: `<p>Count: {{service.count}}</p>
             <button (click)="service.increment()">Increment</button>`,
  providers: [CounterService],  // New instance for each component
  standalone: true
})
export class CounterComponent {
  constructor(public service: CounterService) {}
}
```

**USAGE:**
```html
<app-counter></app-counter>  <!-- Count: 0 -->
<app-counter></app-counter>  <!-- Count: 0 (separate instance) -->
```

---

### Example 3: inject() Function (Modern Approach)

**Angular 14+** introduced the `inject()` function for dependency injection without constructor:

**COMPONENT (app.component.html):**
```html
<button (click)="fetchData()">Show Data</button>
<ul *ngFor="let user of empDataArray">
  <li>Name: {{user.Name}}, Age: {{user.Age}}</li>
</ul>
```

**COMPONENT (app.component.ts):**
```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  providers: [EmployeeService],
  standalone: true
})
export class AppComponent {
  empDataArray: any = [];
  
  // Modern inject() function - no constructor needed!
  private empService = inject(EmployeeService);
  
  fetchData() {
    this.empDataArray = this.empService.getEmpData();
  }
}
```

---

## 26. Angular Tokens & Advanced DI 🔑

### Definition

**Tokens** are unique keys used to identify dependencies in Angular's DI system. They allow multiple services to be registered and distinguished from each other.

### Token Syntax

```typescript
providers: [
  { provide: Token, useClass: ServiceClass }
]
```

### Example 1: Class Tokens

**COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="fetchData()">Show Data</button>`,
  providers: [
    { provide: EmployeeService, useClass: EmployeeService },
    { provide: UserService, useClass: UserService }
  ],
  standalone: true
})
export class AppComponent {
  public empService = inject(EmployeeService);
  
  fetchData() {
    this.empService.log();
  }
}
```

---

### Example 2: String Tokens (with @Inject)

**COMPONENT:**
```typescript
import { Component, Inject } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="fetchData()">Show Data</button>`,
  providers: [
    { provide: "StringToken", useClass: EmployeeService }
  ],
  standalone: true
})
export class AppComponent {
  // Use @Inject decorator for string tokens
  constructor(@Inject("StringToken") private empService: EmployeeService) {}
  
  fetchData() {
    this.empService.log();
  }
}
```

---

### Example 3: InjectionToken (Best Practice)

**TOKEN FILE (tokens.ts):**
```typescript
import { InjectionToken } from '@angular/core';
import { EmployeeService } from './services/employee.service';

export const EMP_TOKEN = new InjectionToken<EmployeeService>('Employee Service Token');
```

**COMPONENT:**
```typescript
import { Component, Inject } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { EMP_TOKEN } from './tokens';

@Component({
  selector: 'app-root',
  template: `<button (click)="fetchData()">Show Data</button>`,
  providers: [
    { provide: EMP_TOKEN, useClass: EmployeeService }
  ],
  standalone: true
})
export class AppComponent {
  constructor(@Inject(EMP_TOKEN) private empService: EmployeeService) {}
  
  fetchData() {
    this.empService.log();
  }
}
```

---

### Example 4: useValue (Constants & Configuration)

**TOKEN FILE:**
```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API URL');
```

**COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  template: `<h1>API URL: {{apiUrl}}</h1>`,
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ],
  standalone: true
})
export class AppComponent {
  constructor(@Inject(API_URL) public apiUrl: string) {}
}
```

**OUTPUT:**
```
API URL: https://api.example.com
```

---

### Example 5: useExisting (Aliasing)

**COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  providers: [
    EmployeeService,
    { provide: UserService, useExisting: EmployeeService }
  ]
})
export class AppComponent {
  constructor(private service: EmployeeService) {}
  
  // UserService will use same instance as EmployeeService
}
```

---

### Example 6: useFactory (Dynamic Creation)

**COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  providers: [
    {
      provide: UserService,
      useFactory: () => new UserService()
    }
  ]
})
export class AppComponent {
  constructor(private service: UserService) {}
}
```

---

### Example 7: useFactory with deps

**COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  providers: [
    UserService,
    EmployeeService,
    {
      provide: 'Employee',
      useFactory: (userService: UserService) => userService.returnUser(),
      deps: [UserService]
    }
  ]
})
export class AppComponent {
  constructor(@Inject('Employee') private emp: any) {
    console.log('Employee from factory:', emp);
  }
}
```

---

## 27. Angular Forms 📝

### Two Types of Forms

| Feature | Template-Driven | Reactive |
|---------|----------------|----------|
| **Approach** | Template-based | Code-based |
| **Setup** | FormsModule | ReactiveFormsModule |
| **Validation** | HTML attributes | FormControl validators |
| **Complexity** | Simple forms | Complex forms |
| **Testing** | Harder | Easier |

---

### A. Template-Driven Forms

#### Example 1: Basic Template Form with ngModel

**COMPONENT (app.component.html):**
```html
<form #myform="ngForm" (ngSubmit)="submitForm(myform)">
  <input type="text" name="user" id="name" 
         ngModel #user="ngModel" required>
  
  <input type="password" name="password" id="password" 
         ngModel #password="ngModel" required>
  
  <button type="submit">Submit</button>
  <button type="reset" (click)="resetForm(myform)">Reset</button>
  <button type="button" (click)="showDefaultName(myform)">Set Default</button>
</form>
```

**COMPONENT (app.component.ts):**
```typescript
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  defaultUsername: string = 'Raghav';
  defaultPassword: string = '12345';
  
  submitForm(myform: NgForm) {
    if (myform.valid) {
      console.log("Form Submitted");
      alert(`Username: ${myform.value.user} Password: ${myform.value.password}`);
    }
  }
  
  showDefaultName(myform: NgForm) {
    myform.resetForm({
      user: this.defaultUsername,
      password: this.defaultPassword
    });
  }
  
  resetForm(myform: NgForm) {
    myform.resetForm();
  }
}
```

**OUTPUT:**
- Form validates on submit
- Reset button clears form
- Set Default button fills with predefined values

---

### B. Reactive Forms

#### Example 1: FormControl with Validation

**COMPONENT (app.component.html):**
```html
<form (ngSubmit)="onSubmit()">
  <input type="text" [formControl]="myformControl">
  <button type="submit">SUBMIT</button>
  
  @if(myformControl.invalid && myformControl.touched) {
    <div class="error">
      @if(myformControl.errors?.['required']) {
        <p>Field is required</p>
      }
      @if(myformControl.errors?.['minlength']) {
        <p>Minimum 3 characters required</p>
      }
    </div>
  }
</form>
```

**COMPONENT (app.component.ts):**
```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  myformControl = new FormControl("Default Value", [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('[a-zA-Z ]*')
  ]);
  
  onSubmit() {
    console.log(this.myformControl.value);
    console.log('Valid:', this.myformControl.valid);
    console.log('Errors:', this.myformControl.errors);
  }
}
```

---

#### Example 2: FormGroup with Multiple Controls

**COMPONENT (app.component.html):**
```html
<form [formGroup]="mygroup" (ngSubmit)="onSubmit()">
  <label for="">Name</label>
  <input type="text" formControlName="name">
  
  <label for="">Email</label>
  <input type="email" formControlName="email">
  
  <label for="">Age</label>
  <input type="text" formControlName="age">
  
  <button type="submit" [disabled]="mygroup.invalid">Submit</button>
</form>
```

**COMPONENT (app.component.ts):**
```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  mygroup: FormGroup;
  
  constructor() {
    this.mygroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern("[0-9]+")
      ])
    });
  }
  
  onSubmit() {
    const age = this.mygroup.get('age')?.value;
    if (age < 18) {
      alert("You are not eligible to submit the form");
    } else {
      alert("Form Submitted Successfully");
      console.log(this.mygroup.value);
    }
  }
}
```

---

#### Example 3: Form States - pristine & dirty

**COMPONENT (app.component.html):**
```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  @if(nameControl.value == '' && nameControl.pristine) {
    <label class="error">*Name is Required</label>
  }
  
  <input type="text" formControlName="nameControl">
  <input type="email" formControlName="emailControl">
  
  <p>Name Pristine: {{nameControl.pristine}}</p>
  <p>Name Dirty: {{nameControl.dirty}}</p>
  
  <button type="submit">Submit</button>
</form>
```

**COMPONENT (app.component.ts):**
```typescript
@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  myForm: FormGroup;
  nameControl = new FormControl("", [Validators.required]);
  emailControl = new FormControl("", [Validators.required, Validators.email]);
  
  constructor() {
    this.myForm = new FormGroup({
      nameControl: this.nameControl,
      emailControl: this.emailControl
    });
  }
  
  onSubmit() {
    alert("Form Submitted");
  }
}
```

**Form States:**
- **pristine**: Control has not been changed by user (true initially)
- **dirty**: Control has been changed by user (becomes true on first change)
- **touched**: Control has been visited (focus then blur)
- **untouched**: Control has not been visited

---

#### Example 4: Custom Validator

**VALIDATOR FILE (custom-validator.ts):**
```typescript
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function upperCaseValidator(control: AbstractControl): ValidationErrors | null {
  let userName: string = control.value as string;
  if (userName !== userName.toUpperCase()) {
    control.setValue(userName.toUpperCase());
  }
  return null;
}
```

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { upperCaseValidator } from './validators/custom-validator';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="nameControl">
      <button type="submit">Submit</button>
    </form>
  `,
  standalone: true
})
export class AppComponent {
  myForm: FormGroup;
  nameControl = new FormControl("", [
    Validators.required,
    upperCaseValidator
  ]);
  
  constructor() {
    this.myForm = new FormGroup({
      nameControl: this.nameControl
    });
  }
  
  onSubmit() {
    alert("Form Submitted");
  }
}
```

---

### Use Cases for Forms

1. **Template-Driven:** Login forms, simple contact forms, quick prototypes
2. **Reactive:** Registration forms, dynamic forms, complex validation, testing-heavy apps

### Best Practices

✅ **DO:**
- Use Reactive forms for complex scenarios
- Implement proper validation
- Track form states (pristine, dirty, touched)
- Create reusable custom validators
- Disable submit button when form is invalid

❌ **DON'T:**
- Mix template-driven and reactive in same form
- Skip validation
- Submit invalid forms
- Forget to unsubscribe from form value changes
- Use template-driven for complex dynamic forms

---

### Interview Questions - Services & DI

**Q1: What is the purpose of services in Angular?**

Services are used for reusable business logic, data fetching, and sharing data across components. They promote code reusability and separation of concerns.

**Q2: What does `providedIn: 'root'` mean?**

It creates a singleton service available application-wide. Angular creates one instance shared across all components that inject it.

**Q3: Difference between constructor and inject() function?**

`constructor(private service: Service)` is traditional DI. `inject()` is modern (Angular 14+) function-based injection without constructor parameters.

**Q4: What are the three levels of service providers?**

**Root level** (`providedIn: 'root'`) - singleton for entire app. **Module level** (providers in NgModule) - one instance per module. **Component level** (providers in Component) - new instance per component.

**Q5: What is InjectionToken?**

InjectionToken is a type-safe way to create unique tokens for dependency injection, especially for non-class dependencies like strings or configurations.

**Q6: Difference between useClass, useValue, useExisting, useFactory?**

**useClass**: Provides class instance. **useValue**: Provides static value. **useExisting**: Aliases existing token. **useFactory**: Creates instance via function.

**Q7: When to use component-level providers?**

When you need a fresh service instance for each component instance, like a counter service that maintains separate state.

**Q8: Can you inject services into other services?**

Yes, if the service has `@Injectable()` decorator. Service must be injectable to receive dependencies.

**Q9: What is the deps property in useFactory?**

`deps` specifies dependencies required by the factory function. Angular injects these dependencies when calling the factory.

**Q10: Best practice for dependency injection?**

Use `providedIn: 'root'` for singleton services, inject() function for modern code, InjectionToken for non-class dependencies, component providers for isolated state.

---

### Interview Questions - Forms

**Q1: Difference between Template-Driven and Reactive Forms?**

**Template-Driven**: FormsModule, template-based, simpler, HTML-heavy. **Reactive**: ReactiveFormsModule, code-based, complex validation, easier testing, better for dynamic forms.

**Q2: What is FormControl?**

FormControl represents a single input field in a reactive form. It tracks value, validation status, and user interactions.

**Q3: What is FormGroup?**

FormGroup encapsulates multiple FormControls as a group. It tracks the aggregate value and validation status of all child controls.

**Q4: How do you add validation to reactive forms?**

Pass validators array to FormControl: `new FormControl('', [Validators.required, Validators.email])`

**Q5: What are form states - pristine, dirty, touched?**

**pristine**: Not modified. **dirty**: Modified by user. **touched**: Visited (focused). **untouched**: Not visited.

**Q6: How to create custom validators?**

Create function accepting `AbstractControl` returning `ValidationErrors | null`:
```typescript
export function myValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === 'test' ? null : { myError: true };
}
```

**Q7: What is FormBuilder?**

FormBuilder is a service providing syntactic sugar for creating FormGroup, FormControl, and FormArray instances with less boilerplate code.

**Q8: How to reset a form?**

**Template-Driven**: `myForm.resetForm()`. **Reactive**: `this.myFormGroup.reset()`.

**Q9: Can you use ngModel with reactive forms?**

Not recommended. Mixing approaches creates confusion. Use `formControl` or `formControlName` for reactive forms.

**Q10: When to use FormArray?**

When you need dynamic forms with variable number of controls, like adding/removing multiple phone numbers or addresses.

---

## 28. Angular Routing 🧭

### Definition

**Routing** allows navigation between different views/components in a Single Page Application (SPA) without page reloads. Angular Router manages application navigation.

**Real-Life Analogy:** Think of routing as a **GPS navigation system** 🗺️ - it takes you to different destinations (components) based on the address (URL) you provide!

### Setup

**Routes File (app.routes.ts):**
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route
];
```

**App Config (app.config.ts):**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

---

### Key Routing Concepts

1. **`<router-outlet></router-outlet>`** - Placeholder where routed components are displayed
2. **`routerLink`** - Directive for creating navigation links
3. **`Router` service** - For programmatic navigation
4. **`ActivatedRoute`** - Access route parameters and data

---

### Example 1: Static Routing

**APP COMPONENT (app.component.html):**
```html
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>

<router-outlet></router-outlet>
```

**ROUTES:**
```typescript
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
```

---

### Example 2: Dynamic Routing with Parameters

**ROUTES:**
```typescript
export const routes: Routes = [
  { path: 'login/:id/:name', component: LoginComponent }
];
```

**COMPONENT (login.component.ts):**
```typescript
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  template: `
    <h1>Employee ID: {{id}}</h1>
    <h1>Employee Name: {{name}}</h1>
  `,
  standalone: true
})
export class LoginComponent {
  id: string = '';
  name: string = '';
  
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
  }
}
```

**USAGE:**
```html
<a routerLink="/login/101/Raghav">View Employee</a>
```

---

### Example 3: Query Parameters

**COMPONENT (employee-list.component.html):**
```html
<ul *ngFor="let emp of empData">
  <li>
    <a [routerLink]="['/employee']" 
       [queryParams]="{id: emp.id, name: emp.name}">
      {{emp.name}}
    </a>
  </li>
</ul>
```

**COMPONENT (employee-detail.component.ts):**
```typescript
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h1>Employee ID: {{id}}</h1>
    <h1>Employee Name: {{name}}</h1>
  `,
  standalone: true
})
export class EmployeeDetailComponent {
  id: string = '';
  name: string = '';
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }
}
```

**URL:** `/employee?id=1&name=Raghav`

---

### Example 4: Programmatic Navigation

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h1>Welcome to Login Page</h1>
    <button (click)="navigateAbout()">Go to About</button>
  `,
  standalone: true
})
export class LoginComponent {
  constructor(private router: Router) {}
  
  navigateAbout() {
    this.router.navigate(['/about']);
  }
}
```

---

### Example 5: Wildcard Route (404 Page)

**ROUTES:**
```typescript
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }  // Must be last!
];
```

**PAGE NOT FOUND COMPONENT:**
```typescript
@Component({
  selector: 'app-page-404',
  template: `
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a routerLink="/home">Go Home</a>
  `,
  standalone: true
})
export class PageNotFoundComponent {}
```

---

### Example 6: Nested Routes

**ROUTES:**
```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
```

**DASHBOARD COMPONENT:**
```html
<h1>Dashboard</h1>
<nav>
  <a routerLink="/dashboard/profile">Profile</a>
  <a routerLink="/dashboard/settings">Settings</a>
</nav>

<router-outlet></router-outlet>  <!-- For child routes -->
```

---

## 29. Route Guards 🛡️

### Definition

**Route Guards** are security mechanisms that control access to routes. They check conditions before allowing navigation to proceed.

### Types of Guards

| Guard | Purpose | Method |
|-------|---------|--------|
| **CanActivate** | Prevent access to route | `canActivate()` |
| **CanDeactivate** | Prevent leaving route | `canDeactivate()` |
| **CanActivateChild** | Protect child routes | `canActivateChild()` |
| **CanMatch** | Control route matching | `canMatch()` |

### Create Guard

**Command:**
```bash
ng g guard guards/auth
```

---

### Example 1: CanActivate Guard (Authentication)

**GUARD (auth.guard.ts):**
```typescript
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token');
  
  if (isLoggedIn) {
    return true;
  } else {
    alert('Please login first!');
    return false;
  }
};
```

**ROUTES:**
```typescript
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard]  // Protected route
  }
];
```

---

### Example 2: CanDeactivate Guard (Unsaved Changes)

**GUARD (unsaved-changes.guard.ts):**
```typescript
import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const unsavedChangesGuard: CanDeactivateFn<LoginComponent> = (
  component, 
  currentRoute, 
  currentState, 
  nextState
) => {
  console.log('CanDeactivate Guard', component);
  
  if (component.name.value !== '') {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};
```

**COMPONENT (login.component.ts):**
```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  template: `
    <h1>Welcome to Login Page</h1>
    <form>
      <input type="text" [formControl]="name">
      <input type="password" [formControl]="password">
    </form>
    <button (click)="navigateAbout()">About</button>
  `,
  standalone: true
})
export class LoginComponent {
  name: FormControl = new FormControl("");
  password: FormControl = new FormControl("");
  
  constructor(private router: Router) {}
  
  navigateAbout() {
    this.router.navigate(['/about']);
  }
}
```

**ROUTES:**
```typescript
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  }
];
```

---

### Example 3: CanMatch Guard

**GUARD (role.guard.ts):**
```typescript
import { CanMatchFn } from '@angular/router';

export const adminGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');
  return role === 'admin';
};
```

**ROUTES:**
```typescript
export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    canMatch: [adminGuard] 
  },
  { 
    path: 'login', 
    component: UserLoginComponent 
  }
];
```

---

## 30. Lazy Loading & Preloading 🚀

### Definition

**Lazy Loading** delays loading of modules/components until they're needed, improving initial load time. **Preloading** loads lazy modules in background after initial load.

---

### Example 1: Lazy Loading Components

**ROUTES:**
```typescript
export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) 
  },
  { path: '**', component: PageNotFoundComponent }
];
```

**APP COMPONENT:**
```html
<h1>Lazy Loading Concept</h1>
<button routerLink="/login">Login</button>
<button routerLink="/about">About</button>
<router-outlet></router-outlet>
```

---

### Example 2: PreloadAllModules Strategy

**APP CONFIG (app.config.ts):**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
};
```

---

### Example 3: NoPreloading Strategy

**APP CONFIG:**
```typescript
import { NoPreloading } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(NoPreloading))
  ]
};
```

---

### Example 4: Custom Preloading Strategy

**STRATEGY (custom-preloading.ts):**
```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preloading:', route.path);
      return fn();
    }
    console.log(route.path, 'not preloaded');
    return EMPTY;
  }
}
```

**ROUTES:**
```typescript
export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: { preload: true }  // Will preload
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    data: { preload: false }  // Won't preload
  }
];
```

**APP CONFIG:**
```typescript
import { CustomPreloading } from './strategies/custom-preloading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(CustomPreloading))
  ]
};
```

---

### Example 5: @defer Block (Deferred Loading - Angular 17+)

**Basic @defer:**
```html
<h1>Deferred Loading</h1>

@defer {
  <app-login></app-login>
}
```

**@defer with @placeholder:**
```html
@defer {
  <app-login></app-login>
}
@placeholder (minimum 5s) {
  <h1>Loading will appear after 5 seconds...</h1>
}
```

**@defer with @loading:**
```html
@defer {
  <app-login></app-login>
}
@loading (minimum 2s) {
  <h2>Loading...</h2>
}
```

**@defer with @error:**
```html
@defer {
  <app-login></app-login>
}
@loading (minimum 2s) {
  <h2>Loading...</h2>
}
@error {
  <h3>Error loading component!</h3>
}
```

---

### @defer Triggers

**1. on idle (default):**
```html
@defer (on idle) {
  <app-login></app-login>
}
```

**2. on viewport:**
```html
<div #deferLoad>Scroll here to load component</div>

@defer (on viewport(deferLoad)) {
  <app-login></app-login>
}
```

**3. on interaction:**
```html
<div #deferLoad>Click here to load</div>

@defer (on interaction(deferLoad)) {
  <app-login></app-login>
}
```

**4. on hover:**
```html
<div #deferLoad>Hover here to load</div>

@defer (on hover(deferLoad)) {
  <app-login></app-login>
}
```

**5. on immediate:**
```html
@defer (on immediate) {
  <app-login></app-login>
}
```

**6. on timer:**
```html
@defer (on timer(5s)) {
  <app-login></app-login>
}
```

**7. Custom condition (when):**
```html
<button (click)="showValue = true">Load Component</button>

@defer (when showValue) {
  <app-login></app-login>
}
```

```typescript
export class AppComponent {
  showValue: boolean = false;
}
```

**8. Prefetching:**
```html
<div #deferLoad>Click to load</div>

@defer (on interaction(deferLoad); prefetch on idle) {
  <app-login></app-login>
}
```

---

### Interview Questions - Routing & Guards

**Q1: What is the purpose of `<router-outlet>`?**

`<router-outlet>` is a placeholder directive where Angular dynamically renders the component corresponding to the active route.

**Q2: Difference between routerLink and href?**

`routerLink` enables SPA navigation without page reload. `href` causes full page refresh. Always use `routerLink` in Angular.

**Q3: How to pass parameters in routes?**

**Route params**: `{ path: 'user/:id', component: UserComponent }`. Access via `ActivatedRoute.snapshot.params['id']`.
**Query params**: `[queryParams]="{id: 1}"`. Access via `ActivatedRoute.queryParams.subscribe()`.

**Q4: What is wildcard routing?**

`{ path: '**', component: NotFoundComponent }` catches all unmatched routes. Must be the last route in configuration.

**Q5: Purpose of CanActivate guard?**

CanActivate prevents unauthorized access to routes. Returns true to allow, false to block navigation. Used for authentication.

**Q6: Difference between CanActivate and CanDeactivate?**

**CanActivate**: Checks before entering route. **CanDeactivate**: Checks before leaving route (unsaved changes warning).

**Q7: What is lazy loading?**

Lazy loading loads modules/components only when needed, reducing initial bundle size and improving load time.

**Q8: How to implement lazy loading?**

Use `loadComponent` or `loadChildren` with dynamic imports:
```typescript
{ path: 'admin', loadComponent: () => import('./admin.component').then(m => m.AdminComponent) }
```

**Q9: What are preloading strategies?**

**PreloadAllModules**: Preloads all lazy modules after app loads. **NoPreloading**: Only loads on demand. **Custom**: Selective preloading based on conditions.

**Q10: When to use @defer blocks?**

Use for heavy components loaded conditionally (on viewport, interaction, timer) to improve initial render performance.

---

## 31. Observables & RxJS 🔄

### Definition

**Observables** handle asynchronous operations like HTTP calls, user events, and data streams. **RxJS** (Reactive Extensions for JavaScript) is the library providing Observable functionality.

**Real-Life Analogy:** Think of an Observable as a **Netflix subscription** 📺 - you subscribe to watch episodes (data), and new episodes (data) are delivered over time!

### Basic Observable

```typescript
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed')
});
```

---

### Example 1: Observable with next(), error(), complete()

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<h1>Observable Example</h1>`,
  standalone: true
})
export class AppComponent {
  constructor() {
    const observable = new Observable((observer) => {
      observer.next("Raghav");
      observer.error("Error occurred");  // Comment this to see complete
      observer.complete();
    }).subscribe({
      next(value) {
        console.log("Hello Emitted: " + value);
      },
      error(err) {
        console.log("Error: " + err);
      },
      complete() {
        console.log("Completed");
      }
    });
  }
}
```

**OUTPUT:**
```
Hello Emitted: Raghav
Error: Error occurred
```

---

### Example 2: Unsubscribing from Observable

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<h1>Count: {{count}}</h1>`,
  standalone: true
})
export class AppComponent {
  count = 0;
  
  observable = new Observable<number>((observer) => {
    setInterval(() => {
      observer.next(this.count++);
    }, 500);
  });
  
  constructor() {
    let obs = this.observable.subscribe((data) => {
      console.log(data);
    });
    
    // Unsubscribe after 5 seconds
    setTimeout(() => {
      obs.unsubscribe();
      console.log('Unsubscribed!');
    }, 5000);
  }
}
```

**OUTPUT:**
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Unsubscribed!
```

---

### Example 3: Async Pipe (Best Practice)

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Observable with Async Pipe</h1>
    <h2>Emitted value: {{$values | async}}</h2>
  `,
  standalone: true
})
export class AppComponent {
  $values!: Observable<number>;
  
  constructor() {
    this.$values = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 500);
    });
  }
}
```

**OUTPUT:** Displays incrementing count (0, 1, 2, 3...)
**Benefit:** Async pipe auto-unsubscribes!

---

### Example 4: Cold vs Hot Observables

**Cold Observable (separate values):**
```typescript
const $coldObservable = new Observable<number>((observer) => {
  const rand = Math.floor(Math.random() * 100);
  observer.next(rand);
  observer.complete();
});

$coldObservable.subscribe((value) => {
  console.log("First Subscriber:", value);   // e.g., 42
});

$coldObservable.subscribe((value) => {
  console.log("Second Subscriber:", value);  // e.g., 87 (different!)
});
```

**Hot Observable (shared value):**
```typescript
const rand = Math.floor(Math.random() * 100);

const $hotObservable = new Observable<number>((observer) => {
  observer.next(rand);
  observer.complete();
});

$hotObservable.subscribe((value) => {
  console.log("First Subscriber:", value);   // e.g., 42
});

$hotObservable.subscribe((value) => {
  console.log("Second Subscriber:", value);  // 42 (same!)
});
```

---

## 32. RxJS Operators ⚙️

### Creation Operators

**1. of() - Emit sequence of values:**
```typescript
import { of } from 'rxjs';

const $obs = of(1, 2, {name: 'Angular'}, [3, 4], () => 'Hello');
$obs.subscribe((value) => console.log(value));
```

**OUTPUT:** `1, 2, {name: 'Angular'}, [3, 4], () => 'Hello'`

**2. from() - Convert to Observable:**
```typescript
import { from } from 'rxjs';

const mapValue = new Map<number, string>([
  [1, 'Raghav'],
  [2, 'Shiv']
]);

const $obs = from(mapValue);
$obs.subscribe((value) => console.log(value));
```

**OUTPUT:** `[1, 'Raghav'], [2, 'Shiv']`

**3. interval() - Emit at intervals:**
```typescript
import { interval } from 'rxjs';

const $obs = interval(1000);  // Emits 0, 1, 2, 3... every second
$obs.subscribe((value) => console.log(value));
```

**4. timer() - Delayed intervals:**
```typescript
import { timer } from 'rxjs';

const $obs = timer(1000, 500);  // Wait 1s, then emit every 500ms
$obs.subscribe((value) => console.log(value));
```

**5. EMPTY - Complete immediately:**
```typescript
import { EMPTY } from 'rxjs';

EMPTY.subscribe({
  next: (value) => console.log('Next:', value),
  complete: () => console.log('Completed')
});
```

**OUTPUT:** `Completed` (no values emitted)

---

### Pipeable Operators

**6. map() - Transform values:**
```typescript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const $src = of(1, 2, 3, 4);
const $piped = $src.pipe(
  map(val => val * 2)
);
$piped.subscribe(val => console.log('Val', val));
```

**OUTPUT:** `2, 4, 6, 8`

**7. filter() - Filter values:**
```typescript
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const $obs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const $even = $obs.pipe(filter((data) => data % 2 == 0));
$even.subscribe((data) => console.log(data));
```

**OUTPUT:** `2, 4, 6, 8, 10`

**8. mergeMap() - Flatten nested Observables:**
```typescript
import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const $innerobs = from([1, 2, 3, 4, 5, 6]);
const $outerobs = (val: number) => of(val * 10);

const $flatObs = $innerobs.pipe(
  mergeMap($outerobs)
);
$flatObs.subscribe((val) => console.log(val));
```

**OUTPUT:** `10, 20, 30, 40, 50, 60`

**9. concatMap() - Sequential flattening:**
```typescript
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const $srcobs = of(1, 2, 3);
const $innerobs = of('a', 'b', 'c');

const $outerobs = $srcobs.pipe(
  concatMap((val) => {
    console.log('Source Observable Value:', val);
    return $innerobs;
  })
);
$outerobs.subscribe((res) => {
  console.log('Inner Observable Value:', res);
});
```

**OUTPUT:**
```
Source Observable Value: 1
Inner Observable Value: a, b, c
Source Observable Value: 2
Inner Observable Value: a, b, c
Source Observable Value: 3
Inner Observable Value: a, b, c
```

**10. switchMap() - Cancel previous:**
```typescript
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const $srcobs = of(1, 2, 3);
const $innerobs = of('a', 'b', 'c');

const $outerobs = $srcobs.pipe(
  switchMap((val) => {
    console.log('Source Observable Value:', val);
    return $innerobs;
  })
);
$outerobs.subscribe((res) => {
  console.log('Inner Observable Value:', res);
});
```

---

## 33. HttpClient 🌐

### Setup

**APP CONFIG (app.config.ts):**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};
```

---

### Example 1: GET Request

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <button (click)="showResponse()">Show Posts</button>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      @if($obs | async; as datapost) {
        <tbody>
          @for(data of datapost; track data.id) {
            <tr>
              <td>{{data.userId}}</td>
              <td>{{data.id}}</td>
              <td>{{data.title}}</td>
              <td>{{data.body}}</td>
            </tr>
          }
        </tbody>
      }
    </table>
  `,
  standalone: true
})
export class AppComponent {
  $obs!: Observable<any>;
  
  constructor(private http: HttpClient) {}
  
  showResponse() {
    this.$obs = this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
```

---

### Example 2: POST Request

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <button (click)="postData()">Post User</button>
    <pre>{{responseData | json}}</pre>
  `,
  standalone: true
})
export class AppComponent {
  responseData: any;
  jsonData: {id: number, name: string} = {id: 1, name: 'Raghav'};
  
  constructor(private http: HttpClient) {}
  
  postData() {
    this.http.post("https://jsonplaceholder.typicode.com/users", this.jsonData)
      .subscribe((res) => {
        this.responseData = res;
      });
  }
}
```

---

### Example 3: PUT Request

**COMPONENT:**
```typescript
updateUser() {
  const userId = 1;
  const updatedData = {id: 1, name: 'Updated Name'};
  
  this.http.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedData)
    .subscribe((res) => {
      console.log('User updated:', res);
    });
}
```

---

### Example 4: DELETE Request

**COMPONENT:**
```typescript
deleteUser() {
  const userId = 1;
  
  this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .subscribe((res) => {
      console.log('User deleted:', res);
    });
}
```

---

### JSON Server (Local Development)

**Installation:**
```bash
npm i -g json-server
```

**Create users.json:**
```json
{
  "users": [
    {"id": 1, "name": "Raghav"},
    {"id": 2, "name": "Shiv"},
    {"id": 3, "name": "Aman"}
  ]
}
```

**Start Server:**
```bash
json-server --watch users.json
```

**Use in Component:**
```typescript
this.http.get("http://localhost:3000/users").subscribe(...)
this.http.post("http://localhost:3000/users", data).subscribe(...)
this.http.put("http://localhost:3000/users/1", data).subscribe(...)
this.http.delete("http://localhost:3000/users/1").subscribe(...)
```

---

## 34. Signals (Angular 16+) ⚡

### Definition

**Signals** are Angular's reactive state management system introduced in Angular 16. They provide a simpler alternative to Observables for managing and tracking state changes.

**Real-Life Analogy:** Think of a Signal as a **smart lightbulb** 💡 - when you change it (set/update), everything connected to it (computed values, effects) automatically responds!

### Basic Signal Syntax

```typescript
import { signal } from '@angular/core';

count = signal(0);  // Create signal
count();            // Read value
count.set(5);       // Set value
count.update(v => v + 1);  // Update based on current
```

---

### Example 1: set() Method

**COMPONENT:**
```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Count: {{count()}}</h1>
    <button (click)="increment()">Increment</button>
  `,
  standalone: true
})
export class AppComponent {
  count = signal(0);
  
  increment() {
    this.count.set(this.count() + 1);
  }
}
```

**OUTPUT:** Click button increments count

---

### Example 2: update() Method

**COMPONENT:**
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `<h1>Cart: {{cart() | json}}</h1>`,
  standalone: true
})
export class AppComponent {
  cart = signal({
    name: 'My Cart',
    email: 'test@gmail.com'
  });
  
  constructor() {
    console.log("Before Update", this.cart());
    
    this.cart.update(value => ({
      ...value,
      qty: 1,
      name: 'Updated Cart'
    }));
    
    console.log("After Update", this.cart());
  }
}
```

**OUTPUT:**
```
Before: {name: 'My Cart', email: 'test@gmail.com'}
After: {name: 'Updated Cart', email: 'test@gmail.com', qty: 1}
```

---

### Example 3: computed() Function

**COMPONENT:**
```typescript
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Cart: {{cart() | json}}</h1>
    <h1>Item Count: {{itemCount()}}</h1>
  `,
  standalone: true
})
export class AppComponent {
  cart = signal([1, 2, 3, 4, 5]);
  itemCount = computed(() => this.cart().length);
}
```

**OUTPUT:**
```
Cart: [1, 2, 3, 4, 5]
Item Count: 5
```

---

### Example 4: effect() Function

**COMPONENT:**
```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Cart: {{cart() | json}}</h1>
    <h1>Count: {{itemCount()}}</h1>
  `,
  standalone: true
})
export class AppComponent {
  cart = signal([1, 2, 3]);
  itemCount = computed(() => this.cart().length);
  
  cartEffect = effect(() => {
    console.log("Cart contents:", this.cart(), "Count:", this.itemCount());
  });
  
  constructor() {
    // Effect runs automatically when cart or itemCount changes
    this.cart.set([1, 2, 3, 4, 5]);
  }
}
```

**Console Output:**
```
Cart contents: [1, 2, 3] Count: 3
Cart contents: [1, 2, 3, 4, 5] Count: 5
```

---

### Example 5: untracked() Function

**COMPONENT:**
```typescript
import { Component, signal, effect, untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Count1: {{count1()}}</h1>
    <button (click)="incCount1()">Increment Count1</button>
    <h1>Count2: {{count2()}}</h1>
    <button (click)="incCount2()">Increment Count2</button>
  `,
  standalone: true
})
export class AppComponent {
  count1 = signal(0);
  count2 = signal(0);
  
  incCount1() {
    this.count1.update(() => this.count1() + 1);
  }
  
  incCount2() {
    this.count2.update(() => this.count2() + 1);
  }
  
  counterEffect = effect(() => {
    console.log("Count1:", this.count1());
    console.log("Count2:", untracked(() => this.count2()));  // Not tracked!
  });
}
```

**Behavior:** Effect only runs when count1 changes, not count2

---

### Example 6: linkedSignal() (Angular 19+)

**COMPONENT:**
```typescript
import { Component, signal, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Count1: {{count1()}}</h1>
    <h1>Linked Signal (Count1 * 2): {{linkedSig()}}</h1>
  `,
  standalone: true
})
export class AppComponent {
  count1 = signal(10);
  linkedSig = linkedSignal(() => this.count1() * 2);
  
  constructor() {
    // Can modify linked signal (unlike computed)
    this.linkedSig.set(50);
    console.log('Linked Signal:', this.linkedSig());
  }
}
```

---

### Example 7: toSignal() - Convert Observable to Signal

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  template: `<h1>Signal Data: {{signalData()}}</h1>`,
  standalone: true
})
export class AppComponent {
  obs$ = interval(500).pipe(
    map(data => (data * 10).toString()),
    take(10)
  );
  
  signalData = toSignal(this.obs$, { initialValue: 'Loading...' });
  
  constructor() {
    // No need to subscribe! toSignal handles it
  }
}
```

**OUTPUT:** Displays 0, 10, 20, 30... (converted from Observable)

---

### Signals vs Observables

| Feature | Signals | Observables |
|---------|---------|-------------|
| **Syntax** | `count()` | `count$.subscribe()` |
| **Reactivity** | Synchronous | Asynchronous |
| **Use Case** | State management | Async operations, HTTP, events |
| **Complexity** | Simpler | More powerful |
| **Memory** | Auto cleanup | Manual unsubscribe |

---

### Interview Questions - Observables & RxJS

**Q1: What is an Observable?**

Observable is a data stream that emits values over time. Subscribers receive values via next(), handle errors via error(), and get completion notification via complete().

**Q2: Difference between Observable and Promise?**

**Observable**: Lazy (starts on subscribe), emits multiple values, cancellable (unsubscribe). **Promise**: Eager (starts immediately), single value, not cancellable.

**Q3: What is the purpose of async pipe?**

Async pipe subscribes to Observables in templates and automatically unsubscribes on component destroy, preventing memory leaks.

**Q4: Difference between cold and hot Observables?**

**Cold**: Starts emitting on subscribe, separate values per subscriber. **Hot**: Emits regardless of subscribers, shared values.

**Q5: What are RxJS operators?**

Functions to transform Observable data. **Creation**: of, from, interval. **Transformation**: map, filter. **Combination**: merge, concat. **Utility**: tap, delay.

**Q6: Difference between map, mergeMap, switchMap?**

**map**: Transform values. **mergeMap**: Flatten nested Observables (parallel). **switchMap**: Cancel previous inner Observable (sequential).

**Q7: How to unsubscribe from Observable?**

Store subscription: `let sub = obs.subscribe()`. Call `sub.unsubscribe()` in ngOnDestroy. Or use async pipe for auto-unsubscribe.

**Q8: What is HttpClient?**

Angular service for making HTTP requests. Returns Observables for GET, POST, PUT, DELETE operations.

**Q9: How to handle HTTP errors?**

Use catchError operator or error callback in subscribe:
```typescript
this.http.get(url).pipe(
  catchError(err => of([]))
).subscribe()
```

**Q10: Best practices for Observables?**

Always unsubscribe (or use async pipe), use operators for transformations, handle errors, avoid nested subscribes, prefer switchMap for HTTP requests.

---

### Interview Questions - Signals

**Q1: What are Signals in Angular?**

Signals are reactive state management primitives introduced in Angular 16. They provide simpler, more performant way to track and respond to state changes.

**Q2: How to create and read a Signal?**

Create: `count = signal(0)`. Read: `count()` (call as function).

**Q3: Difference between set() and update()?**

**set()**: Replace value entirely (`count.set(5)`). **update()**: Modify based on current value (`count.update(v => v + 1)`).

**Q4: What is computed()?**

computed() creates derived Signal from other Signals. Auto-updates when dependencies change. Read-only (can't use set/update).

**Q5: What is effect()?**

effect() runs side effects when Signal dependencies change. Auto-tracks Signal reads. Runs automatically on changes.

**Q6: Difference between computed() and effect()?**

**computed()**: Returns value, used in templates, read-only. **effect()**: Performs actions (logging, HTTP), no return value, for side effects.

**Q7: What is untracked()?**

untracked() reads Signal value without creating dependency in effect/computed. Prevents effect from running when that Signal changes.

**Q8: What is toSignal()?**

Converts Observable to Signal. Bridges RxJS and Signals. Auto-unsubscribes on destroy. Requires initial value.

**Q9: When to use Signals vs Observables?**

**Signals**: Local component state, synchronous updates, simpler reactivity. **Observables**: HTTP requests, complex async operations, event streams.

**Q10: What is linkedSignal()?**

linkedSignal() creates Signal linked to another but modifiable (unlike computed). Can use set/update methods. Angular 19+ feature.

---

## 35. HTTP Interceptors 🔐

### Definition

**HTTP Interceptors** are middleware that intercept outgoing HTTP requests and incoming responses. They allow you to modify requests (add headers, tokens) or handle responses globally (logging, error handling).

**Real-Life Analogy:** Think of an interceptor as a **security checkpoint at an airport** 🛂 - every passenger (HTTP request) must pass through it before boarding (reaching server), and every arriving passenger (response) is checked before entering the city!

### Creating an Interceptor

**Command:**
```bash
ng g interceptor interceptors/auth
```

---

### Example 1: Adding Authentication Token to All Requests

**INTERCEPTOR (auth.interceptor.ts):**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get token from localStorage
  const token = localStorage.getItem('authToken');
  
  if (token) {
    // Clone the request and add Authorization header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    
    console.log('Token added to request:', clonedRequest);
    return next(clonedRequest);
  }
  
  // If no token, send original request
  return next(req);
};
```

**APP CONFIG (app.config.ts):**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
```

**USAGE:**
```typescript
// Now ALL HTTP requests will automatically include the token!
this.http.get('https://api.example.com/users').subscribe(...);
// Request headers: { Authorization: 'Bearer abc123...' }
```

---

### Example 2: Global Error Handling

**INTERCEPTOR (error.interceptor.ts):**
```typescript
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        // Server-side error
        switch (error.status) {
          case 401:
            errorMessage = 'Unauthorized - Please login again!';
            // Redirect to login
            break;
          case 403:
            errorMessage = 'Forbidden - You don\'t have permission!';
            break;
          case 404:
            errorMessage = 'Not Found - Resource doesn\'t exist!';
            break;
          case 500:
            errorMessage = 'Server Error - Please try again later!';
            break;
          default:
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      }
      
      console.error('HTTP Error:', errorMessage);
      alert(errorMessage);
      
      return throwError(() => new Error(errorMessage));
    })
  );
};
```

**APP CONFIG:**
```typescript
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor])
    )
  ]
};
```

---

### Example 3: Request/Response Logging

**INTERCEPTOR (logging.interceptor.ts):**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  
  console.log('🚀 Outgoing Request:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body
  });
  
  return next(req).pipe(
    tap({
      next: (response) => {
        const elapsedTime = Date.now() - startTime;
        console.log('✅ Response Received:', {
          url: req.url,
          status: 'Success',
          time: `${elapsedTime}ms`,
          data: response
        });
      },
      error: (error) => {
        const elapsedTime = Date.now() - startTime;
        console.log('❌ Response Error:', {
          url: req.url,
          status: error.status,
          time: `${elapsedTime}ms`,
          message: error.message
        });
      }
    })
  );
};
```

---

### Example 4: Loading Indicator Interceptor

**SERVICE (loading.service.ts):**
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal(false);
  private requestCount = 0;
  
  show() {
    this.requestCount++;
    this.isLoading.set(true);
  }
  
  hide() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.isLoading.set(false);
    }
  }
}
```

**INTERCEPTOR (loading.interceptor.ts):**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  
  loadingService.show();
  
  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
```

**COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    @if(loadingService.isLoading()) {
      <div class="loading-spinner">
        <h2>Loading... ⏳</h2>
      </div>
    }
    <button (click)="fetchData()">Fetch Data</button>
  `,
  standalone: true
})
export class AppComponent {
  loadingService = inject(LoadingService);
  
  constructor(private http: HttpClient) {}
  
  fetchData() {
    this.http.get('https://api.example.com/data').subscribe();
  }
}
```

---

### Example 5: Caching Interceptor

**INTERCEPTOR (cache.interceptor.ts):**
```typescript
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

const cache = new Map<string, HttpResponse<any>>();

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }
  
  // Check if response is in cache
  const cachedResponse = cache.get(req.url);
  if (cachedResponse) {
    console.log('📦 Returning cached response for:', req.url);
    return of(cachedResponse);
  }
  
  // If not cached, make request and cache response
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log('💾 Caching response for:', req.url);
        cache.set(req.url, event);
      }
    })
  );
};
```

---

### Example 6: Custom Headers Interceptor

**INTERCEPTOR (headers.interceptor.ts):**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-App-Version': '1.0.0',
      'X-Custom-Header': 'Angular-App'
    }
  });
  
  return next(modifiedReq);
};
```

---

### Example 7: Retry Failed Requests

**INTERCEPTOR (retry.interceptor.ts):**
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { retry, timer } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry({
      count: 3,  // Retry 3 times
      delay: (error, retryCount) => {
        console.log(`Retry attempt ${retryCount} for ${req.url}`);
        return timer(1000 * retryCount);  // Wait 1s, 2s, 3s
      }
    })
  );
};
```

---

### Interceptor Order

**APP CONFIG:**
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        headersInterceptor,    // 1. Add custom headers
        authInterceptor,        // 2. Add auth token
        loggingInterceptor,     // 3. Log request
        loadingInterceptor,     // 4. Show loading
        cacheInterceptor,       // 5. Check cache
        retryInterceptor,       // 6. Retry on failure
        errorInterceptor        // 7. Handle errors
      ])
    )
  ]
};
```

**Execution Order:**
- **Request**: Top to bottom (1 → 7)
- **Response**: Bottom to top (7 → 1)

---

### Use Cases

1. **Authentication** - Add JWT tokens to all requests
2. **Error Handling** - Global error management
3. **Logging** - Track all HTTP activity
4. **Loading States** - Show/hide spinners automatically
5. **Caching** - Reduce unnecessary API calls
6. **Request Transformation** - Modify request data
7. **Response Transformation** - Modify response data
8. **Retry Logic** - Auto-retry failed requests

---

### Best Practices

**DO's ✅**
- Keep interceptors focused (single responsibility)
- Use multiple interceptors instead of one complex interceptor
- Clone requests before modifying (`req.clone()`)
- Handle errors gracefully
- Log important information for debugging
- Use finalize() for cleanup operations

**DON'Ts ❌**
- Don't mutate the original request directly
- Don't add too many interceptors (performance impact)
- Don't make HTTP calls inside interceptors (infinite loop!)
- Don't store sensitive data in interceptors
- Don't block the main thread with heavy operations

---

### Interview Questions - HTTP Interceptors

**Q1: What is an HTTP Interceptor?**

Interceptor is middleware that intercepts HTTP requests/responses. Used to add headers, handle errors globally, log requests, or show loading indicators.

**Q2: How to create an interceptor in Angular?**

Use `ng g interceptor name` command. Implement `HttpInterceptorFn` function that takes request and next handler, returns modified observable.

**Q3: How to register interceptors?**

In app.config.ts, use `provideHttpClient(withInterceptors([interceptor1, interceptor2]))` to register interceptors.

**Q4: What is the execution order of interceptors?**

**Request**: Top to bottom (first to last in array). **Response**: Bottom to top (reverse order). Like a stack!

**Q5: Can we have multiple interceptors?**

Yes! Multiple interceptors can be chained. Each interceptor processes the request/response in sequence.

**Q6: How to modify request headers in interceptor?**

Clone the request using `req.clone({ setHeaders: { 'Authorization': 'Bearer token' } })`, then pass cloned request to `next()`.

**Q7: How to handle errors globally?**

Use catchError operator in interceptor. Check error.status code and handle accordingly (401 → redirect login, 500 → show error message).

**Q8: Why clone the request?**

HTTP requests are immutable in Angular. To modify them, you must create a clone with changes using `req.clone()`.

**Q9: How to skip interceptor for specific requests?**

Add custom header to request: `req.clone({ headers: req.headers.set('X-Skip-Interceptor', 'true') })`. Check this header in interceptor.

**Q10: What's the difference between tap() and catchError() in interceptors?**

**tap()**: Side effects without modifying stream (logging). Doesn't handle errors. **catchError()**: Catches and handles errors, can transform error into valid response.

---

## 36. Custom Directives 🎨

### Definition

**Custom Directives** are reusable behaviors you can attach to DOM elements. Angular has built-in directives (*ngIf, *ngFor), but you can create your own for specific needs.

**Real-Life Analogy:** Think of directives as **superpowers** 🦸 you give to HTML elements - like giving a button the power to change color on hover, or an input the power to auto-format phone numbers!

### Types of Custom Directives

1. **Attribute Directives** - Change appearance or behavior (e.g., ngClass, ngStyle)
2. **Structural Directives** - Change DOM structure (e.g., *ngIf, *ngFor)

---

### Example 1: Simple Highlight Directive

**Command:**
```bash
ng g directive directives/highlight
```

**DIRECTIVE (highlight.directive.ts):**
```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.transition = 'all 0.3s';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
```

**USAGE:**
```typescript
import { Component } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [HighlightDirective],
  template: `
    <p appHighlight>Hover over me to see highlight! 🎨</p>
    <div appHighlight>This div also highlights!</div>
  `,
  standalone: true
})
export class AppComponent {}
```

---

### Example 2: Configurable Color Directive

**DIRECTIVE (custom-color.directive.ts):**
```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
  standalone: true
})
export class CustomColorDirective {
  @Input() appCustomColor: string = 'lightblue';  // Default color
  @Input() hoverColor: string = 'lightgreen';
  
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appCustomColor;
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.hoverColor;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.appCustomColor;
  }
}
```

**USAGE:**
```html
<p appCustomColor="pink" hoverColor="red">
  Custom colors! 🌈
</p>

<div [appCustomColor]="'lightcoral'" [hoverColor]="'coral'">
  Dynamic colors with property binding!
</div>
```

---

### Example 3: Auto-Focus Directive

**DIRECTIVE (auto-focus.directive.ts):**
```typescript
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements OnInit {
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 0);
  }
}
```

**USAGE:**
```html
<input type="text" appAutoFocus placeholder="Auto-focused on load!">
```

---

### Example 4: Permission-Based Directive (Show/Hide)

**DIRECTIVE (has-permission.directive.ts):**
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
  standalone: true
})
export class HasPermissionDirective {
  @Input() set appHasPermission(permission: string) {
    // Simulate checking user permissions
    const userPermissions = ['read', 'write'];  // From auth service
    
    if (userPermissions.includes(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

**USAGE:**
```html
<button *appHasPermission="'write'">Edit Post</button>
<button *appHasPermission="'delete'">Delete Post</button>
<button *appHasPermission="'admin'">Admin Panel</button>
<!-- Only buttons with matching permissions will show -->
```

---

### Example 5: Click Outside Directive

**DIRECTIVE (click-outside.directive.ts):**
```typescript
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  
  constructor(private elementRef: ElementRef) {}
  
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
```

**USAGE:**
```typescript
@Component({
  selector: 'app-root',
  imports: [ClickOutsideDirective],
  template: `
    <div class="dropdown" 
         appClickOutside 
         (clickOutside)="closeDropdown()">
      <button (click)="toggleDropdown()">Menu</button>
      @if(isOpen) {
        <ul class="dropdown-menu">
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      }
    </div>
  `,
  standalone: true
})
export class AppComponent {
  isOpen = false;
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  
  closeDropdown() {
    this.isOpen = false;
  }
}
```

---

### Example 6: Tooltip Directive

**DIRECTIVE (tooltip.directive.ts):**
```typescript
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() appTooltip: string = '';
  private tooltipElement: HTMLElement | null = null;
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }
  
  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.appTooltip)
    );
    
    this.renderer.appendChild(document.body, this.tooltipElement);
    
    this.renderer.addClass(this.tooltipElement, 'custom-tooltip');
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
    
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipElement, 'top', `${hostPos.bottom + 5}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${hostPos.left}px`);
  }
  
  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
```

**USAGE:**
```html
<button appTooltip="Click to submit form">Submit</button>
<p appTooltip="This is important information">Hover me!</p>
```

---

### Example 7: Copy to Clipboard Directive

**DIRECTIVE (copy-clipboard.directive.ts):**
```typescript
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCopyClipboard]',
  standalone: true
})
export class CopyClipboardDirective {
  @Input() appCopyClipboard: string = '';
  
  @HostListener('click') onClick() {
    navigator.clipboard.writeText(this.appCopyClipboard).then(() => {
      alert('Copied to clipboard: ' + this.appCopyClipboard);
    });
  }
}
```

**USAGE:**
```html
<button [appCopyClipboard]="'https://angular.dev'">
  Copy Link 📋
</button>

<p [appCopyClipboard]="codeSnippet">
  Click to copy code
</p>
```

---

### Structural Directive Example

**DIRECTIVE (unless.directive.ts):**
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

**USAGE:**
```html
<!-- Opposite of *ngIf -->
<p *appUnless="isLoggedIn">Please login to continue</p>
<!-- Shows when isLoggedIn is false -->
```

---

### Interview Questions - Custom Directives

**Q1: What are custom directives?**

Reusable behaviors attached to DOM elements. Two types: attribute directives (change appearance/behavior) and structural directives (change DOM structure).

**Q2: How to create a custom directive?**

Use `ng g directive name`. Add @Directive decorator with selector. Use ElementRef to access DOM, HostListener for events, Input for parameters.

**Q3: Difference between @HostListener and @HostBinding?**

**@HostListener**: Listen to events (click, mouseenter). **@HostBinding**: Bind properties/attributes (class, style, disabled).

**Q4: What is ElementRef?**

ElementRef provides direct access to DOM element. Use `elementRef.nativeElement` to manipulate DOM (use cautiously for XSS security).

**Q5: What is Renderer2?**

Safe way to manipulate DOM (better than ElementRef for SSR). Methods: createElement, setStyle, addClass, appendChild, etc.

**Q6: How to pass data to custom directive?**

Use @Input decorator: `@Input() customColor: string;`. Access in template: `<div [customColor]="'red'">`.

**Q7: What is TemplateRef and ViewContainerRef?**

**TemplateRef**: Reference to template (ng-template). **ViewContainerRef**: Container to create/destroy views dynamically. Used in structural directives.

**Q8: Difference between attribute and structural directives?**

**Attribute**: Changes appearance/behavior, no *, direct on element. **Structural**: Changes DOM structure, uses *, requires TemplateRef/ViewContainerRef.

**Q9: Can directive have multiple selectors?**

Yes! Use comma-separated: `selector: '[appDir1], [appDir2]'` or CSS selectors: `selector: 'button[type=submit]'`.

**Q10: Best practices for custom directives?**

Keep directives focused (single responsibility), use Renderer2 over direct DOM manipulation, make reusable, avoid complex logic, document inputs/outputs.

---

## 37. Change Detection ⚡

### Definition

**Change Detection** is Angular's mechanism to sync component data with the view. When data changes, Angular detects it and updates the DOM automatically.

**Real-Life Analogy:** Think of change detection as a **surveillance camera system** 📹 - constantly monitoring for changes and triggering alerts (DOM updates) when something changes!

### How Change Detection Works

Angular uses **Zone.js** to detect async operations (setTimeout, HTTP calls, events) and triggers change detection.

**Flow:**
```
User Event → Zone.js detects → Change Detection runs → DOM updates
```

---

### Change Detection Strategies

| Strategy | Behavior | Performance |
|----------|----------|-------------|
| **Default** | Checks entire component tree | Slower (checks everything) |
| **OnPush** | Checks only when @Input changes or events occur | Faster (selective checking) |

---

### Example 1: Default Strategy

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  imports: [CommonModule],
  template: `
    <h2>Count: {{count}}</h2>
    <p>Random: {{random}}</p>
    <button (click)="increment()">Increment</button>
  `,
  standalone: true
  // Default strategy (no need to specify)
})
export class DefaultComponent {
  count = 0;
  random = Math.random();
  
  increment() {
    this.count++;
    console.log('Change detection triggered!');
  }
}
```

**Behavior:** Every click triggers change detection for entire component tree.

---

### Example 2: OnPush Strategy

**COMPONENT:**
```typescript
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  template: `
    <div class="card">
      <h3>{{user.name}}</h3>
      <p>Age: {{user.age}}</p>
      <p>Checked at: {{getCurrentTime()}}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,  // OnPush strategy
  standalone: true
})
export class UserCardComponent {
  @Input() user!: { name: string; age: number };
  
  getCurrentTime() {
    console.log('Change detection ran!');
    return new Date().toLocaleTimeString();
  }
}
```

**PARENT COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  imports: [UserCardComponent],
  template: `
    <app-user-card [user]="user"></app-user-card>
    <button (click)="updateAge()">Update Age (Mutation)</button>
    <button (click)="updateUser()">Update User (New Object)</button>
  `,
  standalone: true
})
export class AppComponent {
  user = { name: 'Rahul', age: 25 };
  
  updateAge() {
    // ❌ Won't trigger OnPush (same object reference)
    this.user.age++;
    console.log('Age mutated:', this.user.age);
  }
  
  updateUser() {
    // ✅ Triggers OnPush (new object reference)
    this.user = { ...this.user, age: this.user.age + 1 };
    console.log('User replaced:', this.user);
  }
}
```

**OUTPUT:**
- **Mutation button**: Change detection doesn't run (same reference)
- **New object button**: Change detection runs (new reference)

---

### Example 3: Manual Change Detection with ChangeDetectorRef

**COMPONENT:**
```typescript
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: `
    <h2>Count: {{count}}</h2>
    <p>Updated at: {{updateTime}}</p>
    <button (click)="incrementWithoutDetection()">
      Increment (No Auto-Detection)
    </button>
    <button (click)="incrementWithDetection()">
      Increment (Manual Detection)
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ManualDetectionComponent {
  count = 0;
  updateTime = '';
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  incrementWithoutDetection() {
    // ❌ View won't update (OnPush + no new reference)
    setTimeout(() => {
      this.count++;
      this.updateTime = new Date().toLocaleTimeString();
      console.log('Count updated, but view not refreshed');
    }, 0);
  }
  
  incrementWithDetection() {
    // ✅ Manually trigger change detection
    setTimeout(() => {
      this.count++;
      this.updateTime = new Date().toLocaleTimeString();
      this.cdr.detectChanges();  // Force detection
      console.log('View updated manually!');
    }, 0);
  }
}
```

---

### Example 4: markForCheck() Method

**COMPONENT:**
```typescript
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mark-check',
  template: `
    <h2>Messages: {{messages.length}}</h2>
    <ul>
      @for(msg of messages; track msg) {
        <li>{{msg}}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class MarkCheckComponent {
  messages: string[] = [];
  
  constructor(private cdr: ChangeDetectorRef) {
    // Simulating WebSocket messages
    setInterval(() => {
      this.messages.push(`Message ${this.messages.length + 1}`);
      this.cdr.markForCheck();  // Mark for next change detection
    }, 2000);
  }
}
```

**Difference:**
- **detectChanges()**: Runs change detection immediately
- **markForCheck()**: Marks component dirty, runs in next cycle

---

### Example 5: detach() and reattach()

**COMPONENT:**
```typescript
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detach',
  template: `
    <h2>Counter: {{counter}}</h2>
    <p>Status: {{isDetached ? 'Detached' : 'Attached'}}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="toggle()">Toggle Detection</button>
  `,
  standalone: true
})
export class DetachComponent {
  counter = 0;
  isDetached = false;
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  increment() {
    this.counter++;
  }
  
  toggle() {
    if (this.isDetached) {
      this.cdr.reattach();
      this.isDetached = false;
      console.log('Change detection reattached');
    } else {
      this.cdr.detach();
      this.isDetached = true;
      console.log('Change detection detached');
    }
  }
}
```

**Behavior:**
- When **detached**: Button clicks won't update view
- When **reattached**: Updates work normally

---

### ChangeDetectorRef Methods

| Method | Purpose |
|--------|---------|
| **detectChanges()** | Run change detection immediately for this component |
| **markForCheck()** | Mark component and ancestors for next detection cycle |
| **detach()** | Detach from change detection tree (manual control) |
| **reattach()** | Reattach to change detection tree |
| **checkNoChanges()** | Check if there are no changes (dev mode only) |

---

### Performance Optimization Tips

**DO's ✅**
```typescript
// 1. Use OnPush strategy
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

// 2. Use immutable data (new objects)
updateUser() {
  this.user = { ...this.user, age: 30 };  // ✅
}

// 3. Use trackBy in *ngFor
<div *ngFor="let item of items; trackBy: trackById">

// 4. Use async pipe (auto-subscribes and marks for check)
<div>{{ data$ | async }}</div>

// 5. Avoid heavy computations in templates
// ❌ Bad: {{ calculateTotal() }}
// ✅ Good: {{ total }}
```

**DON'Ts ❌**
```typescript
// 1. Don't mutate objects
this.user.age++;  // ❌ OnPush won't detect

// 2. Don't call functions in templates excessively
{{ getFullName() }}  // Runs on every change detection!

// 3. Don't use Default strategy everywhere
// ❌ Slower for large apps

// 4. Don't forget to unsubscribe
// Memory leaks affect performance
```

---

### Interview Questions - Change Detection

**Q1: What is change detection in Angular?**

Mechanism to sync component data with DOM. Angular detects data changes and updates view automatically using Zone.js.

**Q2: What is Zone.js?**

Library that intercepts async operations (setTimeout, events, HTTP) and notifies Angular to run change detection.

**Q3: Difference between Default and OnPush strategies?**

**Default**: Checks entire component tree on every async event. **OnPush**: Only checks when @Input reference changes or events fire within component.

**Q4: When to use OnPush strategy?**

When component relies on @Input data, uses immutable data patterns, needs better performance, or displays static/rarely-changing data.

**Q5: What is ChangeDetectorRef?**

Service to manually control change detection. Methods: detectChanges(), markForCheck(), detach(), reattach().

**Q6: Difference between detectChanges() and markForCheck()?**

**detectChanges()**: Runs change detection immediately for component and children. **markForCheck()**: Marks component dirty, runs in next change detection cycle.

**Q7: Why OnPush doesn't detect object mutations?**

OnPush checks object **reference**, not properties. Mutation keeps same reference, so Angular thinks nothing changed. Use new object instead.

**Q8: What is the async pipe's advantage?**

Auto-subscribes to Observable, auto-unsubscribes on destroy, automatically calls markForCheck() when value emits. Perfect for OnPush.

**Q9: How to optimize *ngFor performance?**

Use trackBy function to track items by unique ID instead of object reference. Prevents re-rendering unchanged items.

**Q10: What happens when you detach() change detection?**

Component is removed from change detection tree. View won't update automatically. Must manually call detectChanges() or reattach().

---

## 38. RxJS Subjects 📡

### Definition

**Subjects** are special Observables that act as both observer and observable. They can multicast values to multiple subscribers (unlike regular Observables which are unicast).

**Real-Life Analogy:** Think of a Subject as a **YouTube live stream** 📺 - one broadcaster (next) sends data to multiple viewers (subscribers) simultaneously!

### Types of Subjects

| Type | Behavior | Use Case |
|------|----------|----------|
| **Subject** | No initial value, only emits new values | Event bus, notifications |
| **BehaviorSubject** | Has initial value, emits last value to new subscribers | Current state management |
| **ReplaySubject** | Buffers N values, replays to new subscribers | Chat history, undo/redo |
| **AsyncSubject** | Emits only last value on complete() | Final result calculations |

---

### Example 1: Basic Subject

**SERVICE (message.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

**SENDER COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-sender',
  template: `
    <h3>Sender Component</h3>
    <button (click)="send()">Send Message</button>
  `,
  standalone: true
})
export class SenderComponent {
  messageService = inject(MessageService);
  counter = 0;
  
  send() {
    this.counter++;
    this.messageService.sendMessage(`Message ${this.counter}`);
  }
}
```

**RECEIVER COMPONENT:**
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule],
  template: `
    <h3>Receiver Component</h3>
    <ul>
      @for(msg of messages; track msg) {
        <li>{{msg}}</li>
      }
    </ul>
  `,
  standalone: true
})
export class ReceiverComponent implements OnInit {
  messageService = inject(MessageService);
  messages: string[] = [];
  
  ngOnInit() {
    this.messageService.message$.subscribe(msg => {
      this.messages.push(msg);
    });
  }
}
```

---

### Example 2: BehaviorSubject (Current State)

**SERVICE (auth.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Initial value: false (not logged in)
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  
  login(username: string) {
    this.isLoggedInSubject.next(true);
    this.currentUserSubject.next(username);
  }
  
  logout() {
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }
  
  // Get current value synchronously
  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
}
```

**COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-demo',
  imports: [CommonModule],
  template: `
    <div>
      <p>Status: {{ (authService.isLoggedIn$ | async) ? 'Logged In' : 'Logged Out' }}</p>
      <p>User: {{ authService.currentUser$ | async }}</p>
      
      @if(!(authService.isLoggedIn$ | async)) {
        <button (click)="authService.login('Rahul')">Login</button>
      } @else {
        <button (click)="authService.logout()">Logout</button>
      }
    </div>
  `,
  standalone: true
})
export class AuthDemoComponent {
  authService = inject(AuthService);
}
```

**Key Feature:** New subscribers immediately get the last emitted value (current state)!

---

### Example 3: ReplaySubject (History Buffer)

**SERVICE (chat.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Buffer last 5 messages
  private chatSubject = new ReplaySubject<string>(5);
  chat$ = this.chatSubject.asObservable();
  
  sendMessage(message: string) {
    this.chatSubject.next(message);
  }
}
```

**COMPONENT:**
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  template: `
    <h3>Chat Room</h3>
    <div>
      <input #msgInput type="text" placeholder="Type message...">
      <button (click)="send(msgInput.value); msgInput.value=''">Send</button>
    </div>
    
    <h4>Messages:</h4>
    <ul>
      @for(msg of messages; track msg) {
        <li>{{msg}}</li>
      }
    </ul>
    
    <button (click)="joinLate()">Join Late (See Last 5 Messages)</button>
  `,
  standalone: true
})
export class ChatComponent implements OnInit {
  chatService = inject(ChatService);
  messages: string[] = [];
  
  ngOnInit() {
    // Send some initial messages
    this.chatService.sendMessage('Hello!');
    this.chatService.sendMessage('How are you?');
    this.chatService.sendMessage('I am learning RxJS');
    
    // First subscriber sees all messages
    this.chatService.chat$.subscribe(msg => {
      this.messages.push(msg);
    });
  }
  
  send(message: string) {
    if (message.trim()) {
      this.chatService.sendMessage(message);
    }
  }
  
  joinLate() {
    console.log('Late joiner sees last 5 messages:');
    this.chatService.chat$.subscribe(msg => {
      console.log('Late joiner received:', msg);
    });
  }
}
```

---

### Example 4: AsyncSubject (Final Value)

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  template: `
    <h3>Async Subject Example</h3>
    <button (click)="emitValues()">Emit Values</button>
    <button (click)="complete()">Complete</button>
    <p>Check console for output</p>
  `,
  standalone: true
})
export class AsyncSubjectComponent {
  asyncSubject = new AsyncSubject<number>();
  
  constructor() {
    this.asyncSubject.subscribe(value => {
      console.log('Subscriber 1 received:', value);
    });
  }
  
  emitValues() {
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    console.log('Emitted 1, 2, 3 - but subscribers receive nothing yet!');
  }
  
  complete() {
    this.asyncSubject.complete();
    console.log('Completed - subscribers now receive ONLY last value (3)');
    
    // Late subscriber also gets last value
    this.asyncSubject.subscribe(value => {
      console.log('Subscriber 2 (late) received:', value);
    });
  }
}
```

**OUTPUT:**
```
Emitted 1, 2, 3 - but subscribers receive nothing yet!
Completed - subscribers now receive ONLY last value (3)
Subscriber 1 received: 3
Subscriber 2 (late) received: 3
```

---

### Example 5: Component Communication with Subject

**SERVICE (data-sharing.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private cartItemsSubject = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItemsSubject.asObservable();
  
  addToCart() {
    this.cartItemsSubject.next(this.cartItemsSubject.value + 1);
  }
  
  removeFromCart() {
    const current = this.cartItemsSubject.value;
    if (current > 0) {
      this.cartItemsSubject.next(current - 1);
    }
  }
  
  clearCart() {
    this.cartItemsSubject.next(0);
  }
}
```

**HEADER COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { DataSharingService } from './services/data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  template: `
    <header>
      <h2>My Store</h2>
      <div class="cart">
        🛒 Cart: {{ dataService.cartItems$ | async }}
      </div>
    </header>
  `,
  standalone: true
})
export class HeaderComponent {
  dataService = inject(DataSharingService);
}
```

**PRODUCT COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-products',
  template: `
    <div class="products">
      <div class="product">
        <h3>Product 1</h3>
        <button (click)="dataService.addToCart()">Add to Cart</button>
      </div>
      <div class="product">
        <h3>Product 2</h3>
        <button (click)="dataService.addToCart()">Add to Cart</button>
      </div>
      <button (click)="dataService.clearCart()">Clear Cart</button>
    </div>
  `,
  standalone: true
})
export class ProductsComponent {
  dataService = inject(DataSharingService);
}
```

---

### Subject vs BehaviorSubject vs ReplaySubject

**COMPARISON:**
```typescript
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// 1. SUBJECT (No initial value, no replay)
const subject = new Subject<number>();
subject.subscribe(v => console.log('Sub1:', v));
subject.next(1);
subject.next(2);
subject.subscribe(v => console.log('Sub2:', v));  // Won't get 1, 2
subject.next(3);
// Output: Sub1: 1, Sub1: 2, Sub1: 3, Sub2: 3

// 2. BEHAVIORSUBJECT (Initial value, replays last)
const behaviorSubject = new BehaviorSubject<number>(0);  // Initial: 0
behaviorSubject.subscribe(v => console.log('Sub1:', v));  // Gets 0
behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.subscribe(v => console.log('Sub2:', v));  // Gets 2 (last)
behaviorSubject.next(3);
// Output: Sub1: 0, Sub1: 1, Sub1: 2, Sub2: 2, Sub1: 3, Sub2: 3

// 3. REPLAYSUBJECT (Buffers N values)
const replaySubject = new ReplaySubject<number>(2);  // Buffer 2
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(v => console.log('Sub1:', v));  // Gets 2, 3
replaySubject.next(4);
// Output: Sub1: 2, Sub1: 3, Sub1: 4
```

---

### Interview Questions - RxJS Subjects

**Q1: What is a Subject in RxJS?**

Special Observable that acts as both observer and observable. Can multicast values to multiple subscribers simultaneously. Used for cross-component communication.

**Q2: Difference between Observable and Subject?**

**Observable**: Unicast (one subscriber per execution), lazy (starts on subscribe). **Subject**: Multicast (shared execution), can next() values manually.

**Q3: What is BehaviorSubject?**

Subject with initial value. New subscribers immediately receive last emitted value. Used for state management (current logged-in status, theme, etc.).

**Q4: When to use ReplaySubject?**

When new subscribers need historical values (last N emissions). Use cases: chat history, undo/redo, form state history.

**Q5: What is AsyncSubject?**

Emits only the last value and only when complete() is called. Use cases: HTTP requests (final result), calculations.

**Q6: How to get current value from BehaviorSubject?**

Use `.value` property: `const current = behaviorSubject.value;` (synchronous access without subscription).

**Q7: Difference between Subject.next() and Observable.subscribe()?**

**next()**: Pushes value to all subscribers (producer). **subscribe()**: Receives values (consumer). Subject does both!

**Q8: Can multiple components subscribe to same Subject?**

Yes! That's the main advantage. All subscribers receive same values simultaneously (multicast).

**Q9: Do Subjects need to be unsubscribed?**

Yes! Always unsubscribe in ngOnDestroy to prevent memory leaks, or use async pipe for auto-unsubscribe.

**Q10: Best practices for Subjects?**

Keep Subject private, expose as Observable using `.asObservable()`, unsubscribe properly, use BehaviorSubject for state, don't overuse (prefer @Input/@Output for parent-child).

---

## 39. Angular Modules (NgModule) 📦

### Definition

**NgModule** is a container for organizing related components, directives, pipes, and services. Though standalone components are now preferred, modules are still important for libraries and legacy code.

**Real-Life Analogy:** Think of NgModule as a **department in a company** 🏢 - it groups related employees (components), tools (services), and resources together!

### Module Structure

**BASIC MODULE:**
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';

@NgModule({
  declarations: [FeatureComponent],     // Components, directives, pipes
  imports: [CommonModule, FormsModule], // Other modules
  exports: [FeatureComponent],          // Make available to other modules
  providers: [FeatureService]           // Services (prefer providedIn: 'root')
})
export class FeatureModule {}
```

---

### Example 1: Feature Module

**MODULE (user/user.module.ts):**
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserDetailComponent }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserModule {}
```

**APP MODULE (app.module.ts):**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

### Example 2: Shared Module (Reusable Components)

**MODULE (shared/shared.module.ts):**
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingSpinnerComponent } from './loading-spinner.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { HighlightDirective } from './highlight.directive';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    HighlightDirective,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // Export everything so other modules can use
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    HighlightDirective,
    SafeHtmlPipe
  ]
})
export class SharedModule {}
```

**USAGE IN OTHER MODULES:**
```typescript
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [SharedModule]  // Get all shared components/directives/pipes!
})
export class ProductModule {}
```

---

### Example 3: Core Module (Singleton Services)

**MODULE (core/core.module.ts):**
```typescript
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { LoggingService } from './logging.service';
import { AuthInterceptor } from './auth.interceptor';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    AuthService,
    LoggingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  // Prevent importing CoreModule more than once
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule!');
    }
  }
}
```

**APP MODULE:**
```typescript
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,  // Import ONLY in AppModule
    SharedModule
  ]
})
export class AppModule {}
```

---

### Example 4: forRoot() and forChild() Pattern

**MODULE (config/config.module.ts):**
```typescript
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ConfigOptions {
  apiUrl: string;
  apiKey: string;
}

@NgModule({
  imports: [CommonModule]
})
export class ConfigModule {
  static forRoot(config: ConfigOptions): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        { provide: 'API_URL', useValue: config.apiUrl },
        { provide: 'API_KEY', useValue: config.apiKey }
      ]
    };
  }
}
```

**APP MODULE:**
```typescript
@NgModule({
  imports: [
    ConfigModule.forRoot({
      apiUrl: 'https://api.example.com',
      apiKey: 'your-api-key-123'
    })
  ]
})
export class AppModule {}
```

**USAGE:**
```typescript
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-api-client',
  template: `<p>API URL: {{apiUrl}}</p>`
})
export class ApiClientComponent {
  constructor(
    @Inject('API_URL') public apiUrl: string,
    @Inject('API_KEY') private apiKey: string
  ) {
    console.log('Making request to:', apiUrl);
  }
}
```

---

### Module Types Summary

| Module Type | Purpose | Example |
|-------------|---------|---------|
| **App Module** | Root module, bootstrap app | AppModule |
| **Feature Module** | Specific feature (users, products) | UserModule, ProductModule |
| **Shared Module** | Reusable components/pipes/directives | SharedModule |
| **Core Module** | Singleton services, app-wide components | CoreModule |
| **Routing Module** | Route configuration | AppRoutingModule |

---

### Interview Questions - Angular Modules

**Q1: What is NgModule?**

Container for organizing related components, directives, pipes, and services. Configured with @NgModule decorator with declarations, imports, exports, providers.

**Q2: Difference between declarations and imports?**

**declarations**: Components/directives/pipes owned by this module. **imports**: Other modules this module depends on.

**Q3: What is the purpose of exports array?**

Makes components/directives/pipes available to other modules that import this module. Not exported = not accessible outside.

**Q4: Difference between forRoot() and forChild()?**

**forRoot()**: Provides module with services (AppModule only). **forChild()**: Provides module without services (feature modules). Prevents duplicate service instances.

**Q5: What is SharedModule?**

Module containing commonly used components, directives, pipes. Imported by multiple feature modules to avoid duplication.

**Q6: What is CoreModule?**

Module for singleton services and app-wide components (header, footer). Imported only once in AppModule. Guards against re-import.

**Q7: Why not import CoreModule twice?**

Creates duplicate service instances, breaking singleton pattern. Use @Optional and @SkipSelf to throw error if reimported.

**Q8: Can a module import itself?**

No! Causes circular dependency. Use SharedModule or restructure module hierarchy.

**Q9: Difference between providedIn: 'root' and providers array?**

**providedIn: 'root'**: Service available app-wide, tree-shakable. **providers**: Service scoped to module, not tree-shakable. Prefer providedIn.

**Q10: Are modules still relevant with standalone components?**

Yes! Still needed for libraries, legacy code, and advanced dependency injection scenarios. Standalone is preferred for new apps.

---

## 40. Route Resolvers 🔍

### Definition

**Resolvers** pre-fetch data before activating a route. They ensure data is loaded before component is displayed, preventing blank screens or loading spinners in components.

**Real-Life Analogy:** Think of a resolver as a **restaurant host** 🍽️ - they ensure your table is ready and menu is brought BEFORE seating you, not after!

### Creating a Resolver

**Command:**
```bash
ng g resolver resolvers/user
```

---

### Example 1: Basic Resolver (Fetch User Data)

**RESOLVER (user.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const userResolver: ResolveFn<User> = (route, state): Observable<User> => {
  const http = inject(HttpClient);
  const userId = route.paramMap.get('id');
  return http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
};
```

**ROUTES:**
```typescript
import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { userResolver } from './resolvers/user.resolver';

export const routes: Routes = [
  { 
    path: 'user/:id', 
    component: UserDetailComponent,
    resolve: { userData: userResolver }  // Pre-fetch data
  }
];
```

**COMPONENT (user-detail.component.ts):**
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  template: `
    <div class="user-detail">
      <h2>{{user.name}}</h2>
      <p>Email: {{user.email}}</p>
      <p>ID: {{user.id}}</p>
    </div>
  `,
  standalone: true
})
export class UserDetailComponent implements OnInit {
  user: any;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Data is already loaded by resolver!
    this.user = this.route.snapshot.data['userData'];
    console.log('User data:', this.user);
  }
}
```

---

### Example 2: Multiple Resolvers

**RESOLVER (posts.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const postsResolver: ResolveFn<any[]> = () => {
  const http = inject(HttpClient);
  return http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
};
```

**RESOLVER (comments.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const commentsResolver: ResolveFn<any[]> = () => {
  const http = inject(HttpClient);
  return http.get<any[]>('https://jsonplaceholder.typicode.com/comments');
};
```

**ROUTES:**
```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      posts: postsResolver,
      comments: commentsResolver
    }
  }
];
```

**COMPONENT:**
```typescript
@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>Posts: {{posts.length}}</p>
    <p>Comments: {{comments.length}}</p>
  `,
  standalone: true
})
export class DashboardComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.posts = this.route.snapshot.data['posts'];
    this.comments = this.route.snapshot.data['comments'];
  }
}
```

---

### Example 3: Resolver with Error Handling

**RESOLVER (safe-user.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const safeUserResolver: ResolveFn<any> = (route) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const userId = route.paramMap.get('id');
  
  return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
    catchError(error => {
      console.error('Error loading user:', error);
      router.navigate(['/error']);  // Redirect on error
      return of(null);  // Return null instead of error
    })
  );
};
```

---

### Example 4: Conditional Resolver (Cache Check)

**SERVICE (cache.service.ts):**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();
  
  get(key: string): any {
    return this.cache.get(key);
  }
  
  set(key: string, value: any): void {
    this.cache.set(key, value);
  }
  
  has(key: string): boolean {
    return this.cache.has(key);
  }
}
```

**RESOLVER (cached-user.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

export const cachedUserResolver: ResolveFn<any> = (route) => {
  const http = inject(HttpClient);
  const cache = inject(CacheService);
  const userId = route.paramMap.get('id') || '';
  
  // Check cache first
  if (cache.has(userId)) {
    console.log('Returning cached data');
    return of(cache.get(userId));
  }
  
  // Fetch and cache
  console.log('Fetching from API');
  return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
    tap(data => cache.set(userId, data))
  );
};
```

---

### Example 5: Resolver with Loading State

**SERVICE (loading.service.ts):**
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal(false);
}
```

**RESOLVER (loading-user.resolver.ts):**
```typescript
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingUserResolver: ResolveFn<any> = (route) => {
  const http = inject(HttpClient);
  const loading = inject(LoadingService);
  const userId = route.paramMap.get('id');
  
  loading.isLoading.set(true);
  
  return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
    finalize(() => loading.isLoading.set(false))
  );
};
```

---

### Resolver vs Component Data Loading

**WITHOUT RESOLVER (Component loads data):**
```typescript
// ❌ Component shows, then data loads (flash of empty content)
@Component({
  template: `
    @if(loading) {
      <p>Loading...</p>
    } @else {
      <h2>{{user.name}}</h2>
    }
  `
})
export class UserComponent implements OnInit {
  user: any;
  loading = true;
  
  ngOnInit() {
    this.http.get('/api/users/1').subscribe(data => {
      this.user = data;
      this.loading = false;
    });
  }
}
```

**WITH RESOLVER (Data loads first):**
```typescript
// ✅ Data loads BEFORE component renders
@Component({
  template: `<h2>{{user.name}}</h2>`  // Data already available!
})
export class UserComponent implements OnInit {
  user: any;
  
  ngOnInit() {
    this.user = this.route.snapshot.data['userData'];
    // No loading state needed!
  }
}
```

---

### Interview Questions - Route Resolvers

**Q1: What is a Route Resolver?**

Function that pre-fetches data before route activates. Ensures component receives data immediately without loading states.

**Q2: How to create a resolver?**

Implement `ResolveFn<T>` function. Use `inject()` to get services. Return Observable, Promise, or static data.

**Q3: How to use resolver in routes?**

Add to route config: `{ path: 'user/:id', component: UserComponent, resolve: { userData: userResolver } }`.

**Q4: How to access resolved data in component?**

Use ActivatedRoute: `this.route.snapshot.data['userData']` or `this.route.data.subscribe(data => ...)`.

**Q5: Can a route have multiple resolvers?**

Yes! Define multiple in resolve object: `resolve: { user: userResolver, posts: postsResolver }`.

**Q6: What if resolver errors?**

By default, navigation is blocked. Use catchError to handle gracefully and redirect or return fallback data.

**Q7: Difference between resolver and ngOnInit data loading?**

**Resolver**: Loads before navigation, no loading spinner in component. **ngOnInit**: Loads after component renders, needs loading state.

**Q8: When NOT to use resolvers?**

When data loading is slow (blocks navigation), when you want to show partial content, or when using lazy loading with initial loading state.

**Q9: Can resolvers use route parameters?**

Yes! Access via `route.paramMap.get('paramName')` or `route.params`.

**Q10: Best practices for resolvers?**

Keep resolvers fast (<2 seconds), handle errors gracefully, use caching when appropriate, avoid heavy computations, consider user experience with loading indicators.

---

## 41. View Encapsulation 🎭

### Definition

**View Encapsulation** controls how component styles are scoped. Angular provides three strategies to prevent CSS conflicts.

**Real-Life Analogy:** Think of view encapsulation as **privacy settings** 🔒 - you can choose if your styles are private (Emulated), completely isolated (ShadowDom), or public (None)!

### Encapsulation Strategies

| Strategy | Behavior | CSS Scoping |
|----------|----------|-------------|
| **Emulated** (default) | Adds unique attributes to elements | Scoped to component |
| **ShadowDom** | Uses native Shadow DOM | Truly isolated |
| **None** | No encapsulation | Global styles |

---

### Example 1: Emulated (Default)

**COMPONENT:**
```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `
    <h2>Emulated Encapsulation</h2>
    <p class="text">This text is blue in this component only</p>
  `,
  styles: [`
    .text {
      color: blue;
      font-weight: bold;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated,  // Default
  standalone: true
})
export class EmulatedComponent {}
```

**RENDERED HTML:**
```html
<!-- Angular adds unique attributes -->
<app-emulated _nghost-abc123>
  <h2 _ngcontent-abc123>Emulated Encapsulation</h2>
  <p _ngcontent-abc123 class="text">This text is blue...</p>
</app-emulated>
```

**GENERATED CSS:**
```css
/* Angular scopes CSS with attributes */
.text[_ngcontent-abc123] {
  color: blue;
  font-weight: bold;
}
```

---

### Example 2: ShadowDom (True Isolation)

**COMPONENT:**
```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow',
  template: `
    <h2>Shadow DOM Encapsulation</h2>
    <p class="text">Truly isolated styles!</p>
  `,
  styles: [`
    .text {
      color: green;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true
})
export class ShadowComponent {}
```

**RENDERED HTML:**
```html
<app-shadow>
  #shadow-root (open)
    <h2>Shadow DOM Encapsulation</h2>
    <p class="text">Truly isolated styles!</p>
</app-shadow>
```

**Feature:** Styles cannot leak in or out. Completely isolated from global styles.

---

### Example 3: None (No Encapsulation)

**COMPONENT:**
```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `
    <h2>No Encapsulation</h2>
    <p class="global-text">This style affects ALL components!</p>
  `,
  styles: [`
    .global-text {
      color: red;
      text-decoration: underline;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class NoneComponent {}
```

**GENERATED CSS:**
```css
/* No scoping - global styles! */
.global-text {
  color: red;
  text-decoration: underline;
}
```

**Warning:** `.global-text` will affect ALL components in the app!

---

### Example 4: Comparing All Three

**PARENT COMPONENT:**
```typescript
@Component({
  selector: 'app-root',
  imports: [EmulatedComponent, ShadowComponent, NoneComponent],
  template: `
    <h1>View Encapsulation Demo</h1>
    <p class="text">Global paragraph</p>
    
    <app-emulated></app-emulated>
    <app-shadow></app-shadow>
    <app-none></app-none>
    
    <p class="global-text">Affected by None encapsulation</p>
  `,
  standalone: true
})
export class AppComponent {}
```

**Results:**
- `.text` in EmulatedComponent: Only affects that component
- `.text` in ShadowComponent: Truly isolated (Shadow DOM)
- `.global-text` in NoneComponent: Affects ALL elements with that class

---

### Example 5: Piercing Shadow DOM (::ng-deep)

**COMPONENT:**
```typescript
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  template: `
    <app-child></app-child>
  `,
  styles: [`
    /* Won't work - child is encapsulated */
    app-child h2 {
      color: purple;
    }
    
    /* Works - pierces encapsulation (use sparingly!) */
    ::ng-deep app-child h2 {
      color: purple;
    }
  `],
  standalone: true
})
export class ParentComponent {}
```

**Warning:** `::ng-deep` is deprecated but still works. Use cautiously!

---

### Use Cases

**Emulated (Default) ✅**
- Most components
- Prevents style conflicts
- Good performance

**ShadowDom 🎯**
- Web components
- Third-party integrations
- Maximum isolation needed

**None ⚠️**
- Theme components
- Global utility classes
- Modal/dialog overlays

---

### Interview Questions - View Encapsulation

**Q1: What is View Encapsulation?**

Mechanism to control CSS scoping in components. Three strategies: Emulated (default), ShadowDom, None.

**Q2: How does Emulated encapsulation work?**

Angular adds unique attributes to elements and modifies CSS selectors to scope styles to component only.

**Q3: What is ShadowDom encapsulation?**

Uses browser's native Shadow DOM API for true style isolation. Styles cannot leak in or out.

**Q4: When to use ViewEncapsulation.None?**

For global styles (themes, utility classes), modal dialogs, or when intentionally sharing styles across components.

**Q5: What is ::ng-deep?**

Pseudo-selector to pierce component style encapsulation. Deprecated but still works. Use sparingly as it breaks encapsulation.

**Q6: Can global styles affect Shadow DOM?**

No! Shadow DOM is truly isolated. Global styles don't penetrate, and component styles don't leak out.

**Q7: Performance difference between strategies?**

**Emulated**: Fast, adds attributes. **ShadowDom**: Slightly slower (native API). **None**: Fastest but no isolation.

**Q8: How to style child components?**

Use @Input for class names, CSS variables (--custom-property), or ::ng-deep (carefully). Prefer passing styles as inputs.

**Q9: Can you mix encapsulation strategies?**

Yes! Each component can have different strategy. Parent and child can use different modes.

**Q10: Best practice for view encapsulation?**

Use default (Emulated) for most components, ShadowDom for isolated widgets, None only when necessary for global styles.

---

## 42. Dynamic Components 🔧

### Definition

**Dynamic Components** are components created and inserted into the DOM programmatically at runtime, not declared in templates.

**Real-Life Analogy:** Think of dynamic components as **pop-up notifications** 📬 - they appear when needed, not hardcoded in the page!

### Key Concepts

- **ViewContainerRef**: Container to host dynamic components
- **ComponentRef**: Reference to dynamically created component
- **createComponent()**: Method to create component

---

### Example 1: Basic Dynamic Component

**COMPONENT TO LOAD (alert.component.ts):**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert">
      <h3>{{title}}</h3>
      <p>{{message}}</p>
    </div>
  `,
  styles: [`
    .alert {
      padding: 20px;
      background: #ff6b6b;
      color: white;
      border-radius: 8px;
    }
  `],
  standalone: true
})
export class AlertComponent {
  @Input() title = 'Alert!';
  @Input() message = 'This is an alert message';
}
```

**HOST COMPONENT:**
```typescript
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-dynamic-host',
  template: `
    <h2>Dynamic Component Example</h2>
    <button (click)="loadComponent()">Load Alert</button>
    <button (click)="removeComponent()">Remove Alert</button>
    
    <div #container></div>
  `,
  standalone: true
})
export class DynamicHostComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  
  loadComponent() {
    // Clear existing components
    this.container.clear();
    
    // Create component dynamically
    const componentRef = this.container.createComponent(AlertComponent);
    
    // Set inputs
    componentRef.instance.title = 'Dynamic Alert!';
    componentRef.instance.message = 'This alert was created dynamically!';
  }
  
  removeComponent() {
    this.container.clear();
  }
}
```

---

### Example 2: Dynamic Component with Outputs

**MODAL COMPONENT (modal.component.ts):**
```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Confirm Action</h2>
        <p>Are you sure you want to proceed?</p>
        <button (click)="confirm()">Yes</button>
        <button (click)="cancel()">No</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal {
      background: white;
      padding: 30px;
      border-radius: 8px;
    }
  `],
  standalone: true
})
export class ModalComponent {
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  
  confirm() {
    this.confirmed.emit();
  }
  
  cancel() {
    this.cancelled.emit();
  }
}
```

**HOST COMPONENT:**
```typescript
import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="openModal()">Open Modal</button>
    <div #modalContainer></div>
  `,
  standalone: true
})
export class AppComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  modalRef?: ComponentRef<ModalComponent>;
  
  openModal() {
    this.container.clear();
    this.modalRef = this.container.createComponent(ModalComponent);
    
    // Subscribe to outputs
    this.modalRef.instance.confirmed.subscribe(() => {
      console.log('User confirmed!');
      this.closeModal();
    });
    
    this.modalRef.instance.cancelled.subscribe(() => {
      console.log('User cancelled!');
      this.closeModal();
    });
  }
  
  closeModal() {
    this.modalRef?.destroy();
  }
}
```

---

### Example 3: Dynamic Component Service

**SERVICE (dynamic-component.service.ts):**
```typescript
import { Injectable, ViewContainerRef, ComponentRef, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private rootViewContainer!: ViewContainerRef;
  
  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  
  addDynamicComponent<T>(component: Type<T>): ComponentRef<T> {
    const componentRef = this.rootViewContainer.createComponent(component);
    return componentRef;
  }
  
  removeDynamicComponent(componentRef: ComponentRef<any>) {
    componentRef.destroy();
  }
  
  clearAll() {
    this.rootViewContainer.clear();
  }
}
```

**APP COMPONENT:**
```typescript
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicComponentService } from './services/dynamic-component.service';

@Component({
  selector: 'app-root',
  template: `<div #dynamicContainer></div>`,
  standalone: true
})
export class AppComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  
  constructor(private dynamicService: DynamicComponentService) {}
  
  ngOnInit() {
    this.dynamicService.setRootViewContainerRef(this.container);
  }
}
```

**USAGE IN ANY COMPONENT:**
```typescript
@Component({...})
export class SomeComponent {
  constructor(private dynamicService: DynamicComponentService) {}
  
  showAlert() {
    const ref = this.dynamicService.addDynamicComponent(AlertComponent);
    ref.instance.title = 'Hello!';
  }
}
```

---

### Example 4: Dynamic Component with Data Injection

**COMPONENT:**
```typescript
import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from './dialog-tokens';

export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog">
      <h2>{{data.title}}</h2>
      <p>{{data.content}}</p>
      <button (click)="close()">Close</button>
    </div>
  `,
  standalone: true
})
export class DialogComponent {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
  
  close() {
    // Emit close event
  }
}
```

**TOKENS:**
```typescript
import { InjectionToken } from '@angular/core';
import { DialogData } from './dialog.component';

export const DIALOG_DATA = new InjectionToken<DialogData>('DialogData');
```

**CREATING WITH DATA:**
```typescript
loadDialog() {
  const injector = Injector.create({
    providers: [
      { provide: DIALOG_DATA, useValue: { title: 'Warning', content: 'Delete this item?' } }
    ]
  });
  
  const ref = this.container.createComponent(DialogComponent, { injector });
}
```

---

### Interview Questions - Dynamic Components

**Q1: What are dynamic components?**

Components created programmatically at runtime using createComponent(), not declared in templates. Useful for modals, notifications, widgets.

**Q2: What is ViewContainerRef?**

Container that can host dynamically created views/components. Access via @ViewChild with `read: ViewContainerRef`.

**Q3: How to create dynamic component?**

Get ViewContainerRef, call `createComponent(ComponentClass)`, returns ComponentRef to manipulate component instance.

**Q4: How to pass data to dynamic component?**

Set @Input properties: `componentRef.instance.myInput = 'value'` or use dependency injection with InjectionToken.

**Q5: How to handle outputs from dynamic component?**

Subscribe to EventEmitter: `componentRef.instance.myOutput.subscribe(data => ...)`.

**Q6: How to destroy dynamic component?**

Call `componentRef.destroy()` or `viewContainerRef.clear()` to remove all.

**Q7: Difference between createComponent() and ng-template?**

**createComponent()**: Fully dynamic, component class not in template. **ng-template**: Template-driven, requires component in template, controlled by structural directives.

**Q8: Can you inject services into dynamic components?**

Yes! Create custom Injector with providers and pass to createComponent options.

**Q9: When to use dynamic components?**

Modals, toasts, tooltips, dashboards with runtime widgets, A/B testing, plugin systems.

**Q10: Best practices for dynamic components?**

Always destroy when done (memory leaks), handle outputs properly, consider using CDK Portal for advanced cases, document component contracts.

---

## 43. Angular Animations 🎬

### Definition

**Angular Animations** provide smooth transitions and visual effects using the Animation API built on Web Animations API.

**Real-Life Analogy:** Think of animations as **movie transitions** 🎥 - smooth fade-ins, slide-outs, making your app feel alive instead of robotic!

### Setup

**Install (if needed):**
```bash
npm install @angular/animations
```

**APP CONFIG:**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations()]
};
```

---

### Example 1: Basic Fade Animation

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-fade',
  template: `
    <button (click)="toggle()">Toggle</button>
    <div [@fadeAnimation]="isVisible ? 'visible' : 'hidden'" class="box">
      Hello World!
    </div>
  `,
  styles: [`
    .box {
      width: 200px;
      height: 100px;
      background: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('500ms ease-in-out'))
    ])
  ],
  standalone: true
})
export class FadeComponent {
  isVisible = true;
  
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
```

---

### Example 2: Slide Animation

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slide',
  template: `
    <button (click)="toggle()">{{ show ? 'Hide' : 'Show' }}</button>
    <div *ngIf="show" @slideAnimation class="panel">
      <h3>Sliding Panel</h3>
      <p>This panel slides in and out!</p>
    </div>
  `,
  styles: [`
    .panel {
      background: #f0f0f0;
      padding: 20px;
      margin-top: 10px;
    }
  `],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ],
  standalone: true
})
export class SlideComponent {
  show = false;
  
  toggle() {
    this.show = !this.show;
  }
}
```

---

### Example 3: List Animation (stagger)

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  template: `
    <button (click)="addItem()">Add Item</button>
    <ul [@listAnimation]="items.length">
      <li *ngFor="let item of items; let i = index">
        {{ item }}
        <button (click)="removeItem(i)">×</button>
      </li>
    </ul>
  `,
  styles: [`
    li {
      padding: 10px;
      background: lightgreen;
      margin: 5px 0;
      list-style: none;
    }
  `],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  standalone: true
})
export class ListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  counter = 4;
  
  addItem() {
    this.items.push(`Item ${this.counter++}`);
  }
  
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
```

---

### Example 4: Route Animations

**ANIMATION FILE (route-animations.ts):**
```typescript
import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%'
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ])
]);
```

**APP COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [routeAnimations],
  standalone: true
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
```

**ROUTES:**
```typescript
export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } }
];
```

---

### Example 5: Keyframe Animation

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-bounce',
  template: `
    <button (click)="bounce()">Bounce!</button>
    <div [@bounceAnimation]="bounceState" class="box">
      🎾
    </div>
  `,
  styles: [`
    .box {
      width: 100px;
      height: 100px;
      background: yellow;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  `],
  animations: [
    trigger('bounceAnimation', [
      transition('* => bounce', [
        animate('1s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-50px)', offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.5 }),
          style({ transform: 'translateY(-25px)', offset: 0.7 }),
          style({ transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  ],
  standalone: true
})
export class BounceComponent {
  bounceState = '';
  
  bounce() {
    this.bounceState = this.bounceState === 'bounce' ? '' : 'bounce';
  }
}
```

---

### Animation Building Blocks

| Concept | Purpose | Example |
|---------|---------|---------|
| **trigger()** | Define animation name | `trigger('fadeIn', [...])` |
| **state()** | Define end state | `state('open', style({ height: '200px' }))` |
| **style()** | CSS properties | `style({ opacity: 0 })` |
| **transition()** | Define state changes | `transition('open => closed', [...])` |
| **animate()** | Duration & easing | `animate('300ms ease-in')` |
| **keyframes()** | Multi-step animation | `keyframes([...])` |
| **query()** | Select child elements | `query(':enter', [...])` |
| **stagger()** | Delay between items | `stagger(100, [...])` |
| **group()** | Parallel animations | `group([...])` |
| **sequence()** | Sequential animations | `sequence([...])` |

---

### Special Selectors

```typescript
':enter'     // Element being added (*ngIf=true)
':leave'     // Element being removed (*ngIf=false)
'* => *'     // Any state change
'void => *'  // Enter (same as :enter)
'* => void'  // Leave (same as :leave)
```

---

### Interview Questions - Animations

**Q1: What are Angular Animations?**

Declarative API for creating transitions and effects. Built on Web Animations API. Defined in component metadata with triggers, states, transitions.

**Q2: How to enable animations in Angular app?**

Import and provide `provideAnimations()` in app.config.ts. Import animation functions from '@angular/animations'.

**Q3: What is a trigger in animations?**

Named animation attached to element via [@triggerName]. Contains states and transitions.

**Q4: Difference between :enter and :leave?**

**:enter**: Element entering DOM (*ngIf becomes true). **:leave**: Element leaving DOM (*ngIf becomes false).

**Q5: What is the purpose of state()?**

Defines named CSS state. Elements transition between states. Example: open/closed states for accordion.

**Q6: What does animate() function do?**

Defines animation timing (duration, delay, easing). Example: `animate('300ms 100ms ease-in-out')`.

**Q7: What is query() used for?**

Selects child elements to animate. Used with :enter, :leave, or CSS selectors. Enables parent-child coordination.

**Q8: What is stagger()?**

Creates sequential delay between animating multiple elements. Perfect for list animations (items appear one by one).

**Q9: Difference between group() and sequence()?**

**group()**: Runs animations in parallel (same time). **sequence()**: Runs animations one after another (sequential).

**Q10: Best practices for animations?**

Keep animations short (<500ms), use easing functions, animate transform/opacity (better performance), provide fallbacks for slow devices, avoid animating layout properties (width, height).

---

## 44. Error Handling ⚠️

### Definition

**Error Handling** in Angular involves catching and managing errors globally using ErrorHandler service and RxJS operators.

**Real-Life Analogy:** Think of error handling as a **safety net** 🥅 - it catches errors before they crash your app, like a trapeze net catching performers!

---

### Example 1: Global Error Handler

**SERVICE (global-error-handler.service.ts):**
```typescript
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Log to console
    console.error('Global Error:', error);
    
    // Log to external service (e.g., Sentry, LogRocket)
    // this.logService.logError(error);
    
    // Show user-friendly message
    if (error instanceof TypeError) {
      alert('A type error occurred. Please refresh the page.');
    } else if (error instanceof ReferenceError) {
      alert('A reference error occurred.');
    } else {
      alert('An unexpected error occurred. Please try again.');
    }
    
    // Re-throw for debugging (optional)
    // throw error;
  }
}
```

**APP CONFIG:**
```typescript
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './services/global-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};
```

---

### Example 2: HTTP Error Handling

**SERVICE (api.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';
  
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      retry(2),  // Retry failed request 2 times
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
      
      switch (error.status) {
        case 0:
          errorMessage = 'No internet connection';
          break;
        case 400:
          errorMessage = 'Bad Request - Check your input';
          break;
        case 401:
          errorMessage = 'Unauthorized - Please login';
          break;
        case 403:
          errorMessage = 'Forbidden - Access denied';
          break;
        case 404:
          errorMessage = 'Not Found - Resource doesn\'t exist';
          break;
        case 500:
          errorMessage = 'Internal Server Error';
          break;
        case 503:
          errorMessage = 'Service Unavailable';
          break;
      }
    }
    
    console.error('HTTP Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
```

**COMPONENT:**
```typescript
import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  template: `
    @if(loading) {
      <p>Loading...</p>
    }
    @if(error) {
      <div class="error">
        <h3>Error!</h3>
        <p>{{ error }}</p>
        <button (click)="loadUsers()">Retry</button>
      </div>
    }
    @if(users.length > 0) {
      <ul>
        @for(user of users; track user.id) {
          <li>{{user.name}}</li>
        }
      </ul>
    }
  `,
  standalone: true
})
export class UsersComponent {
  apiService = inject(ApiService);
  users: any[] = [];
  loading = false;
  error = '';
  
  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers() {
    this.loading = true;
    this.error = '';
    
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
}
```

---

### Example 3: Form Validation Errors

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-errors',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <input formControlName="email" placeholder="Email">
        @if(email.invalid && (email.dirty || email.touched)) {
          <div class="error-messages">
            @if(email.errors?.['required']) {
              <p>Email is required</p>
            }
            @if(email.errors?.['email']) {
              <p>Please enter a valid email</p>
            }
          </div>
        }
      </div>
      
      <div>
        <input formControlName="password" type="password" placeholder="Password">
        @if(password.invalid && (password.dirty || password.touched)) {
          <div class="error-messages">
            @if(password.errors?.['required']) {
              <p>Password is required</p>
            }
            @if(password.errors?.['minlength']) {
              <p>Password must be at least 6 characters</p>
            }
          </div>
        }
      </div>
      
      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  `,
  styles: [`
    .error-messages {
      color: red;
      font-size: 12px;
    }
  `],
  standalone: true
})
export class FormErrorsComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  get email() {
    return this.userForm.get('email')!;
  }
  
  get password() {
    return this.userForm.get('password')!;
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched();
    }
  }
}
```

---

### Example 4: Async Error Boundary

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-boundary',
  imports: [CommonModule],
  template: `
    @if(!hasError) {
      <ng-content></ng-content>
    } @else {
      <div class="error-boundary">
        <h2>😔 Something went wrong</h2>
        <p>{{ errorMessage }}</p>
        <button (click)="retry()">Try Again</button>
      </div>
    }
  `,
  styles: [`
    .error-boundary {
      padding: 40px;
      background: #ffe6e6;
      border: 2px solid red;
      text-align: center;
    }
  `],
  standalone: true
})
export class ErrorBoundaryComponent {
  hasError = false;
  errorMessage = '';
  
  constructor() {
    window.addEventListener('unhandledrejection', (event) => {
      this.hasError = true;
      this.errorMessage = event.reason;
    });
  }
  
  retry() {
    this.hasError = false;
    this.errorMessage = '';
    window.location.reload();
  }
}
```

---

### Example 5: Logging Service

**SERVICE (logging.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum LogLevel {
  Info = 'INFO',
  Warning = 'WARNING',
  Error = 'ERROR',
  Debug = 'DEBUG'
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private logUrl = 'https://your-logging-service.com/api/logs';
  
  constructor(private http: HttpClient) {}
  
  log(message: string, level: LogLevel = LogLevel.Info, data?: any) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Console log
    console.log(`[${level}]`, message, data);
    
    // Send to server (production only)
    if (this.isProduction()) {
      this.http.post(this.logUrl, logEntry).subscribe({
        error: (err) => console.error('Failed to send log:', err)
      });
    }
  }
  
  info(message: string, data?: any) {
    this.log(message, LogLevel.Info, data);
  }
  
  warn(message: string, data?: any) {
    this.log(message, LogLevel.Warning, data);
  }
  
  error(message: string, data?: any) {
    this.log(message, LogLevel.Error, data);
  }
  
  debug(message: string, data?: any) {
    this.log(message, LogLevel.Debug, data);
  }
  
  private isProduction(): boolean {
    return window.location.hostname !== 'localhost';
  }
}
```

**USAGE:**
```typescript
@Component({...})
export class MyComponent {
  constructor(private logger: LoggingService) {}
  
  loadData() {
    this.logger.info('Loading user data');
    
    this.api.getUsers().subscribe({
      next: (data) => {
        this.logger.info('Users loaded successfully', { count: data.length });
      },
      error: (err) => {
        this.logger.error('Failed to load users', { error: err });
      }
    });
  }
}
```

---

### Interview Questions - Error Handling

**Q1: What is ErrorHandler in Angular?**

Service to handle uncaught errors globally. Implement custom ErrorHandler to log errors, show user messages, or send to monitoring service.

**Q2: How to create global error handler?**

Implement ErrorHandler interface, override handleError(error) method. Provide in app.config: `{ provide: ErrorHandler, useClass: MyErrorHandler }`.

**Q3: How to handle HTTP errors?**

Use catchError operator in RxJS pipe. Check HttpErrorResponse status code, return user-friendly messages with throwError.

**Q4: What is retry() operator?**

RxJS operator that retries failed Observable N times before throwing error. Useful for temporary network failures.

**Q5: Difference between client and server errors?**

**Client**: `error.error instanceof ErrorEvent` (network, browser). **Server**: HTTP status codes 4xx/5xx (bad request, server error).

**Q6: How to display form validation errors?**

Check formControl.errors object. Use formControl.invalid, dirty, touched states. Display specific error messages conditionally.

**Q7: Best practices for error handling?**

Always handle errors (subscribe error callback), provide user-friendly messages, log to external service (production), use retry for transient failures, show retry button.

**Q8: How to handle errors in Observables?**

Use catchError operator, return fallback value with of(), or re-throw with throwError(). Always provide error callback in subscribe.

**Q9: What is the purpose of finalize() operator?**

Executes code when Observable completes or errors (like try-finally). Used for cleanup (hide loading spinner, close connections).

**Q10: How to prevent app crashes from errors?**

Implement global ErrorHandler, use try-catch in critical sections, handle errors in subscribes, use error boundaries (component-level), test edge cases.

---

## 45. Environment Configuration 🔧

### Definition

**Environment Configuration** manages different settings for development, staging, and production environments using environment files.

**Real-Life Analogy:** Think of environments as **different uniforms** 👕 - you wear casual clothes at home (dev), business casual at office (staging), and formal suit for meetings (production)!

---

### Example 1: Environment Files Setup

**FILE STRUCTURE:**
```
src/
  environments/
    environment.ts          # Development
    environment.staging.ts  # Staging
    environment.prod.ts     # Production
```

**environment.ts (Development):**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  apiKey: 'dev-api-key-12345',
  enableLogging: true,
  featureFlags: {
    newDashboard: true,
    darkMode: true
  },
  firebase: {
    apiKey: 'dev-firebase-key',
    authDomain: 'myapp-dev.firebaseapp.com',
    projectId: 'myapp-dev'
  }
};
```

**environment.prod.ts (Production):**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.myapp.com',
  apiKey: 'prod-api-key-67890',
  enableLogging: false,
  featureFlags: {
    newDashboard: false,
    darkMode: false
  },
  firebase: {
    apiKey: 'prod-firebase-key',
    authDomain: 'myapp.firebaseapp.com',
    projectId: 'myapp-prod'
  }
};
```

---

### Example 2: Using Environment in Service

**SERVICE (api.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  
  constructor(private http: HttpClient) {}
  
  getUsers() {
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });
    
    if (environment.enableLogging) {
      console.log('Fetching users from:', this.apiUrl);
    }
    
    return this.http.get(`${this.apiUrl}/users`, { headers });
  }
}
```

---

### Example 3: Feature Flags

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    @if(featureFlags.newDashboard) {
      <div class="new-dashboard">
        <h2>New Dashboard (Beta)</h2>
        <!-- New features -->
      </div>
    } @else {
      <div class="old-dashboard">
        <h2>Classic Dashboard</h2>
        <!-- Old UI -->
      </div>
    }
    
    @if(featureFlags.darkMode) {
      <button (click)="toggleTheme()">🌙 Dark Mode</button>
    }
  `,
  standalone: true
})
export class DashboardComponent {
  featureFlags = environment.featureFlags;
  
  toggleTheme() {
    // Dark mode logic
  }
}
```

---

### Example 4: Angular.json Configuration

**angular.json:**
```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                }
              ]
            },
            "staging": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.staging.ts"
                }
              ]
            }
          }
        }
      }
    }
  }
}
```

**BUILD COMMANDS:**
```bash
# Development (default)
ng build

# Staging
ng build --configuration=staging

# Production
ng build --configuration=production
ng build --prod  # Shorthand
```

---

### Example 5: Runtime Configuration

**assets/config.json:**
```json
{
  "apiUrl": "https://api.myapp.com",
  "timeout": 5000,
  "retryAttempts": 3
}
```

**SERVICE (config.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  
  constructor(private http: HttpClient) {}
  
  async loadConfig(): Promise<void> {
    this.config = await firstValueFrom(
      this.http.get('/assets/config.json')
    );
    console.log('Config loaded:', this.config);
  }
  
  get(key: string): any {
    return this.config?.[key];
  }
}
```

**APP INITIALIZER (app.config.ts):**
```typescript
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services/config.service';

export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }
  ]
};
```

---

### Example 6: Environment-Based Logging

**SERVICE (logger.service.ts):**
```typescript
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string, ...args: any[]) {
    if (environment.enableLogging) {
      console.log(message, ...args);
    }
  }
  
  error(message: string, ...args: any[]) {
    console.error(message, ...args);
    
    if (environment.production) {
      // Send to external logging service
      // this.sendToSentry(message, args);
    }
  }
  
  warn(message: string, ...args: any[]) {
    if (!environment.production) {
      console.warn(message, ...args);
    }
  }
}
```

---

### Interview Questions - Environment Configuration

**Q1: What are environment files?**

TypeScript files containing configuration for different environments (dev, staging, prod). Replaced during build based on configuration.

**Q2: How to use environment variables?**

Import from environment file: `import { environment } from '../environments/environment'`. Access properties: `environment.apiUrl`.

**Q3: How does Angular replace environment files?**

Using fileReplacements in angular.json. Build command replaces environment.ts with environment.prod.ts based on configuration.

**Q4: Difference between build-time and runtime configuration?**

**Build-time**: Environment files, compiled into bundle, cannot change after build. **Runtime**: Config.json loaded on app start, can change without rebuild.

**Q5: What are feature flags?**

Boolean settings to enable/disable features per environment. Allows testing features in dev before production release.

**Q6: How to create custom build configuration?**

Add configuration in angular.json under architect.build.configurations. Use `ng build --configuration=custom`.

**Q7: Best practices for environment files?**

Never commit sensitive keys (use .gitignore), use different API keys per environment, keep structure consistent, document all properties.

**Q8: What is APP_INITIALIZER?**

Token to run code before app starts. Used for loading runtime config, checking auth, preloading data.

**Q9: How to hide API keys in environment files?**

Use environment variables on server, load from backend endpoint, or use Angular proxy configuration for development.

**Q10: Can environment be changed at runtime?**

No for build-time configs (baked into bundle). Yes for runtime configs loaded from JSON file or backend.

---

## 46. Standalone Components Deep Dive 🚀

### Definition

**Standalone Components** are self-contained components that don't need NgModule. They import dependencies directly, simplifying Angular architecture.

**Real-Life Analogy:** Think of standalone components as **independent contractors** 👨‍💻 - they bring their own tools and don't need to join a company (module) to work!

---

### Example 1: Basic Standalone Component

**COMPONENT (user-card.component.ts):**
```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],  // Direct imports!
  template: `
    <div class="card">
      <h3>{{user.name}}</h3>
      <p>Email: {{user.email}}</p>
      @if(user.isActive) {
        <span class="badge">Active</span>
      }
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
    }
    .badge {
      background: green;
      color: white;
      padding: 5px 10px;
    }
  `],
  standalone: true  // Key property!
})
export class UserCardComponent {
  @Input() user!: { name: string; email: string; isActive: boolean };
}
```

**USAGE:**
```typescript
import { Component } from '@angular/core';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent],  // Import component directly
  template: `
    <app-user-card [user]="currentUser"></app-user-card>
  `,
  standalone: true
})
export class AppComponent {
  currentUser = { name: 'Rahul', email: 'rahul@example.com', isActive: true };
}
```

---

### Example 2: Bootstrapping Standalone App

**main.ts:**
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
```

**app.config.ts:**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
};
```

---

### Example 3: Importing NgModule in Standalone

**COMPONENT:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';  // NgModule

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule  // Can import NgModule!
  ],
  template: `
    <form>
      <mat-form-field>
        <input matInput [(ngModel)]="name" placeholder="Name">
      </mat-form-field>
      <button mat-raised-button>Submit</button>
    </form>
  `,
  standalone: true
})
export class FormComponent {
  name = '';
}
```

---

### Example 4: importProvidersFrom (Legacy Modules)

**app.config.ts:**
```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule
    )
  ]
};
```

---

### Example 5: Lazy Loading Standalone Components

**ROUTES (app.routes.ts):**
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'home', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  }
];
```

**CHILD ROUTES (admin/admin.routes.ts):**
```typescript
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users.component';
import { SettingsComponent } from './settings.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];
```

---

### Example 6: Providing Services in Standalone

**SERVICE:**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Preferred (tree-shakable)
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}
```

**COMPONENT-LEVEL PROVIDER:**
```typescript
import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-example',
  providers: [DataService],  // Component-scoped instance
  template: `<p>Data component</p>`,
  standalone: true
})
export class ExampleComponent {
  constructor(private dataService: DataService) {}
}
```

---

### Example 7: Migration from NgModule to Standalone

**BEFORE (Module-based):**
```typescript
// feature.module.ts
@NgModule({
  declarations: [FeatureComponent, ChildComponent],
  imports: [CommonModule, FormsModule],
  exports: [FeatureComponent]
})
export class FeatureModule {}

// feature.component.ts
@Component({
  selector: 'app-feature',
  template: `...`
})
export class FeatureComponent {}
```

**AFTER (Standalone):**
```typescript
// feature.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-feature',
  imports: [CommonModule, FormsModule, ChildComponent],
  template: `...`,
  standalone: true  // ✅
})
export class FeatureComponent {}

// child.component.ts
@Component({
  selector: 'app-child',
  template: `...`,
  standalone: true  // ✅
})
export class ChildComponent {}
```

---

### Standalone vs Module-Based

| Feature | Standalone | NgModule |
|---------|-----------|----------|
| **Boilerplate** | Less (no module files) | More (module + component) |
| **Imports** | Direct in component | In module |
| **Bootstrap** | `bootstrapApplication()` | `platformBrowserDynamic()` |
| **Lazy Loading** | `loadComponent` | `loadChildren` |
| **Tree Shaking** | Better (explicit imports) | Limited |
| **Migration** | Can import NgModules | Cannot import standalone directly |

---

### Interview Questions - Standalone Components

**Q1: What are standalone components?**

Components with `standalone: true` that don't require NgModule. Import dependencies directly in component metadata.

**Q2: How to create standalone component?**

Add `standalone: true` in @Component, add imports array with dependencies (CommonModule, FormsModule, other components).

**Q3: How to bootstrap standalone app?**

Use `bootstrapApplication(AppComponent, appConfig)` in main.ts instead of platformBrowserDynamic().bootstrapModule().

**Q4: Can standalone components import NgModules?**

Yes! Add NgModule to imports array. Useful for third-party libraries still using modules.

**Q5: What is importProvidersFrom?**

Function to extract providers from NgModule for use in standalone app config. For legacy modules that provide services.

**Q6: How to lazy load standalone components?**

Use `loadComponent: () => import('./component').then(m => m.Component)` in routes instead of loadChildren.

**Q7: Can NgModule import standalone components?**

Yes! Add standalone component to imports array of NgModule (not declarations).

**Q8: Advantages of standalone components?**

Less boilerplate, simpler structure, better tree-shaking, easier testing, clearer dependencies, faster compilation.

**Q9: When to still use NgModules?**

Large legacy apps, when using libraries requiring modules, shared feature modules with many components.

**Q10: Best practices for standalone components?**

Use `providedIn: 'root'` for services, import only needed modules, use lazy loading, migrate incrementally (can mix standalone and modules).

---

🎉 **Complete!** All 46 topics finished covering HTTP Interceptors, Custom Directives, Change Detection, RxJS Subjects, Modules, Resolvers, View Encapsulation, Dynamic Components, Animations, Error Handling, Environment Config, and Standalone Components Deep Dive!

---