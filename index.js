class FlexWord {
  constructor() {
    this.characterSets = {
      letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+[]{}|;:,.<>?',
      emojis: '😃😂🤣😎😜😍😝😢😭😰😱😳😏😌',
      kaomojis: ['(⌒‿⌒)', '(¬‿¬)', '¯\\_(ツ)_/¯', 'ʕ•ᴥ•ʔ', 'ಠ_ಠ', '(╯°□°）╯︵ ┻━┻'],
    };
  }

  // Helper function to pick a random character from a string
  getRandomChar(set) {
    return set[Math.floor(Math.random() * set.length)];
  }

  // Function to generate a password with specific options
  generatePassword(options = {}) {
    const { length = 12, includeLetters = true, includeNumbers = true, includeSymbols = true, includeEmojis = false, includeKaomojis = false } = options;
    let availableCharacters = '';
    
    // Add characters to available set based on options
    if (includeLetters) availableCharacters += this.characterSets.letters;
    if (includeNumbers) availableCharacters += this.characterSets.numbers;
    if (includeSymbols) availableCharacters += this.characterSets.symbols;
    if (includeEmojis) availableCharacters += this.characterSets.emojis;
    if (includeKaomojis) availableCharacters += this.characterSets.kaomojis.join('');  // Join kaomojis array into a string

    if (availableCharacters.length === 0) {
      throw new Error('At least one character set should be included.');
    }

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
      password += this.getRandomChar(availableCharacters);
    }

    return password;
  }
}

// Export the FlexWord class for usage in other files
module.exports = FlexWord;
