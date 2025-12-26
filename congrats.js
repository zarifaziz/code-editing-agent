/**
 * ROT13 decode function
 * Replaces each letter with the 13th letter after it in the alphabet
 * @param {string} str - The string to decode
 * @return {string} The decoded string
 */
function rot13Decode(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        // Get the character code
        const code = char.charCodeAt(0);
        
        // Determine if uppercase or lowercase
        const isUpperCase = code >= 65 && code <= 90;
        const base = isUpperCase ? 65 : 97;
        
        // Apply ROT13 transformation and return the new character
        return String.fromCharCode((code - base + 13) % 26 + base);
    });
}

// The encoded string to decode
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

// Decode and print the result
const decodedString = rot13Decode(encodedString);
console.log(decodedString);