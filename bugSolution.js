function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null values encountered. Returning default values.');
    return {a: 0, b:0}; //Or handle as needed
  }
  // ...
}