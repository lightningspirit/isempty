# isempty

A tiny dependency-free TS library to test for emptiness of any value.
This is a missing type-safe feature for JavaScript/TypeScript.

## Installation
```
npm i @lightningspirit/isempty
```

## Basic Usage
```ts
import isempty from '@lightningspirit/isempty';

const object = {};

console.log(
  isempty(object) ? "Object is empty" : "Not empty"
);
```

## Usage where false can be empty
```ts
isempty(false) // false
isempty(false, {
  falseIsEmpty: true
}) // true
```

## Test if a value is boolean false
```ts
isempty.false(0) // false
isempty.false('') // false
isempty.false(false) // true
```

## Considerations

### What is considered to be empty:
- `null`, `undefined`, `''` are **empty** values.
- `{}` is an **empty** object.
- `[]` is an **empty** array.
- `Map`, `Array`, `Set`, `Object` without members are **empty**.

### What is **not** empty:
- `false` is not empty, it holds a boolean value (see below for the reason).
- `Infinity`, `NaN` are not empty, they both have values.
- `new Error()`, `new Function()` are not empty objects, they have their semantic and are treated diferently.
- `0` is not empty, it is an integer with a value (see below the reason).
- `' '` is not empty, has a space character.

## Questions:

### Why is `0` not considered empty?

1. In mathematics, zero is a number in the set of real numbers with empty magnitude while `null` is a term used to denote the empty nature of a quantity or an entity.
2. Many bugs occur because most dynamic languages consider `0` as null/false. Take the following example:
```js
const position = "The lazy fox".indexOf("The"); // 0
isempty(position) // false
```

### Why is `false` not considered empty by default?

While `false` is the negation of *something being true*, the value itself does state nothing.

It can either be considered true has it holds a meaning value or false as a result of a conditional statement.

In mathematics and logic, these kind of conditions are often called **vacuous truth**. We considered `false` as a universal statement, which means it exists and is not empty, and the programmer must give it the semantics.

If you want to override this behaviour you can pass the `falseIsEmpty` option to the function as such:
```ts
isempty(false, {
  falseIsEmpty: true
}) // true
```