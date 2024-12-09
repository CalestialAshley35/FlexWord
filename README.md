# FlexWord
FlexPass is an Package that allows to Generate Powerful Passwords easily it's have features such as: 🎉 
- Powerful passwords: mix of kaomoji, emoji, numbers 🤯 
- Customizable! with custom lengths 😎 
- Easy to use

## Installation 
wrote:
```bash
npm install flexword
```

## How to use 
type:
```js
const FlexWord = require('flexword');  // or './index.js' if you're using a local file

// Create an instance of FlexWord
const flexWord = new FlexWord();

// Define the options for the password generation
const options = {
  length: 16,  // Desired password length
  includeLetters: true,  // Include letters
  includeNumbers: true,  // Include numbers
  includeSymbols: true,  // Include symbols
  includeEmojis: true,  // Include emojis
  includeKaomojis: false  // Do not include kaomojis
};

// Generate the password
const password = flexWord.generatePassword(options);

// Output the password
console.log('Generated Password:', password
