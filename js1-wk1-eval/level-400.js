let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
// There are 2 function calls in this file: `replaceAll` and `repeat`.
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// The expression `confession.replaceAll(secret,'x'.repeat(secret.length));` is replacing all occurrences of the string stored in the variable
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// `secret` in the `confession` string with a string of 'x' characters, where the number of 'x' characters is equal to the length of the `secret` string.
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// We pass 1 input to `repeat` when we call it, which is `secret.length`. We can tell because `repeat` is called with a single argument that specifies how many times the string 'x' should be repeated.
// e) What kind of statement is on line 7?
// Line 7 is an assignment statement. It assigns the result of the `replaceAll` method to the variable `confession`, effectively updating its value.