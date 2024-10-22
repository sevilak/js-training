function isNumberInRange(number, min, max) {
    return number >= min && number <= max; // Überprüfen, ob die Zahl im Bereich liegt
}

// Testen der Funktion mit Beispielen
console.log(isNumberInRange(2, 0, 5));      // ➞ true
console.log(isNumberInRange(10, 0, 5));     // ➞ false
console.log(isNumberInRange(100, 50, 500));  // ➞ true
console.log(isNumberInRange(-1, -50, 50));   // ➞ true
console.log(isNumberInRange(0, -50, 50));    // ➞ true

/// task 2

function endsWithIng(str) {
    return str.toLowerCase().trim().endsWith("ing"); // Überprüfen, ob der String mit "ing" endet
}

// Testen der Funktion mit Beispielen
console.log(endsWithIng("hello"));          // ➞ false
console.log(endsWithIng("going"));          // ➞ true
console.log(endsWithIng("ALAN TURING"));    // ➞ true
console.log(endsWithIng("ding ding"));      // ➞ true
console.log(endsWithIng("making of"));      // ➞ false

// task 3

function startsWithThe(str) {
    return str.toLowerCase().trim().startsWith("the"); // Überprüfen, ob der String mit "the" beginnt
}

// Testen der Funktion mit Beispielen
console.log(startsWithThe("hello"));        // ➞ false
console.log(startsWithThe("theremin"));     // ➞ true
console.log(startsWithThe("The Clash"));    // ➞ true
console.log(startsWithThe("ding ding"));    // ➞ false
console.log(startsWithThe("making of"));    // ➞ false


// task 4

function isFirstLetterLowercase(str) {
    if (str.length === 0) {
        return false; // Rückgabe false für einen leeren String
    }
    const firstChar = str.charAt(0); // Erster Buchstabe des Strings
    return firstChar === firstChar.toLowerCase(); // Überprüfen, ob der erste Buchstabe klein ist
}

// Testen der Funktion mit Beispielen
console.log(isFirstLetterLowercase("hello")); // ➞ true
console.log(isFirstLetterLowercase("Hello")); // ➞ false
console.log(isFirstLetterLowercase("Bianca")); // ➞ false
console.log(isFirstLetterLowercase("jim")); // ➞ true
console.log(isFirstLetterLowercase("")); // ➞ false
console.log(isFirstLetterLowercase("A")); // ➞ false

// task 5

function cheaperThan(prices, maxPrice) {
    return prices.filter(price => price < maxPrice); // Filtern der Preise, die kleiner sind als maxPrice
}

// Testen der Funktion mit Beispielen
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20)); // ➞ [19.99, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90)); // ➞ [19.99, 29.87, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0)); // ➞ []
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5)); // ➞ [2.90]

// task 6

function wordsThatEndWithIng(words) {
    return words.filter(word => word.toLowerCase().endsWith("ing")); // Filtern der Wörter, die mit "ing" enden
}

// Testen der Funktion mit Beispielen
console.log(wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])); // ➞ ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // ➞ []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ➞ ["walking", "ing"]

// task 7

function numbersDivisibleBy3(numbers) {
    return numbers.filter(number => number % 3 === 0); // Filtern der Zahlen, die durch 3 teilbar sind
}

// Testen der Funktion mit Beispielen
console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [3, 6, 9]
console.log(numbersDivisibleBy3([2, 4, 8])); // ➞ []
console.log(numbersDivisibleBy3([9])); // ➞ [9]