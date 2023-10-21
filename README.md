# https://java-script-practices.vercel.app/

# Square Root Calculator

This is a simple web application for calculating the square root of a given number. The application consists of an HTML interface and a JavaScript function that performs the square root calculation. Below is a README to help you understand the code and its functionality.

## HTML Structure (index.html)

The HTML code defines a user interface for entering a number, calculating its square root, and displaying the result.

- **Container**: The `div` element with the class "square_root" contains the square root calculator. It includes the following elements:
  - `<p>`: A paragraph providing information about the calculator.
  - `<input>`: An input field where the user can enter a number.
  - `<button>`: A button labeled "squareRoot" for triggering the calculation.
  - `<p>`: A paragraph with the `id` "result" where the calculated result will be displayed.

## JavaScript Function (1_SquareRoot.js)

The JavaScript code is responsible for calculating the square root of the number entered by the user and displaying the result.

- **squareRoot Function**: This function is executed when the "squareRoot" button is clicked. It performs the following tasks:
  1. Retrieves the user-entered number from the input field.
  2. Calculates the square root of the number using the `Math.sqrt` function.
  3. Formats the result to three decimal places using the `toFixed(3)` method.
  4. Updates the content of the paragraph with the `id` "result" to display the calculated square root.

- **Event Listener**: The code sets up an event listener on the "squareRoot" button using `addEventListener`. When the button is clicked, it calls the `squareRoot` function to calculate and display the square root.

## Usage

You can use this square root calculator by entering a number in the input field and clicking the "squareRoot" button. The calculated square root will be displayed in the "result" paragraph with three decimal places.

# Triangle Area Calculator

This web application allows users to calculate the area of a triangle based on different input options. The README below will provide an understanding of the code and its functionality.

## HTML Structure (index.html)

The HTML code defines a user interface for calculating the area of a triangle using two different methods, either by specifying the base and height or by entering the lengths of all three sides.

- **Triangle Area Calculator**: The `div` element with the class "area_triangle" contains the triangle area calculator. It includes the following elements:

  - `<p>`: A paragraph providing information about the calculator.
  - `<input>`: Input fields for the base and height of the triangle.
  - `<p>`: A paragraph with the `id` "result1" where the calculated area using base and height will be displayed.
  - Additional `<input>` fields for entering the lengths of all three sides.
  - `<p>`: A paragraph with the `id` "result2" where the calculated area using the side lengths will be displayed.
  - `<button>`: A button labeled "area_triangle" for triggering the calculation.

## JavaScript Function (2_AreaTriangle.js)

The JavaScript code is responsible for calculating the area of a triangle using the specified method and displaying the results.

- **ariaTriangle Function**: This function is executed when the "area_triangle" button is clicked. It performs the following tasks:

  - If the base and height method is selected:
    1. Retrieves the user-entered values for the base and height.
    2. Calculates the area of the triangle using the formula `(base * height) / 2`.
    3. Updates the content of the paragraph with the `id` "result1" to display the calculated area.

  - If the side lengths method is selected:
    1. Retrieves the user-entered values for the lengths of all three sides (a, b, c).
    2. Calculates the semi-perimeter `s` using the formula `(a + b + c) / 2`.
    3. Calculates the area of the triangle using Heron's formula and the side lengths.
    4. Updates the content of the paragraph with the `id` "result2" to display the calculated area.

- **Event Listener**: The code sets up an event listener on the "area_triangle" button using `addEventListener`. When the button is clicked, it calls the `ariaTriangle` function to calculate and display the triangle area.

## Usage

Users can use this triangle area calculator by entering either the base and height of the triangle or the lengths of all three sides. After selecting the desired method, clicking the "area_triangle" button will calculate and display the area.

# Number Swapping

This is a web application that allows users to swap the values of two numbers using a simple and straightforward method. The README below provides an understanding of the code and its functionality.

## HTML Structure (index.html)

The HTML code defines a user interface for swapping numbers. It includes the following elements:

- **Number Swapping**: The `div` element with the class "swap_number" contains the number swapping functionality. It includes the following elements:

  - `<p>`: A paragraph providing information about number swapping.
  - Two `<input>` fields for entering values for 'a' and 'b'.
  - `<p>`: A paragraph with the `id` "swap_result1" where the swapped values of 'a' and 'b' will be displayed.
  - `<button>`: A button labeled "swapNumber" for triggering the swapping process.

## JavaScript Function (3_SwapNumber.js)

The JavaScript code is responsible for swapping the values of 'a' and 'b' when the "swapNumber" button is clicked.

- **swapNumber Function**: This function is executed when the "swapNumber" button is clicked. It performs the following tasks:

  1. Retrieves the values entered for 'a' and 'b' using `document.getElementById`.
  2. Swaps the values of 'a' and 'b' using a temporary variable `temp`.
  3. Logs the original and swapped values to the console for demonstration purposes.
  4. Updates the content of the paragraph with the `id` "swap_result1" to display the swapped values.

- **Event Listener**: The code sets up an event listener on the "swapNumber" button using `addEventListener`. When the button is clicked, it calls the `swapNumber` function to swap and display the values.

## Usage

Users can use this number swapping application by entering values for 'a' and 'b' in the input fields. Clicking the "swapNumber" button will swap the values of 'a' and 'b', and the swapped values will be displayed on the web page.

## Additional Example (Commented Out)

An additional example for swapping numbers without using a temporary variable is provided but commented out in the code. If you wish to enable this example, you can uncomment the relevant code.

# Kilometers to Miles Converter 

This web application allows users to convert distances from kilometers to miles. The README below will provide an understanding of the code and its functionality.

## HTML Structure (index.html)

The HTML code defines a user interface for converting kilometers to miles. It includes the following elements:

- **Kilometers to Miles Converter**: The `div` element contains the kilometers-to-miles conversion functionality. It includes the following elements:

  - `<p>`: A paragraph providing information about the converter.
  - `<input>`: An input field for entering a distance in kilometers.
  - `<p>`: A paragraph indicating the result in miles.
  - `<button>`: A button labeled "Convert" for triggering the conversion.
  - `<script>`: A script element that links to the JavaScript code for handling the conversion.

## JavaScript Function (4_KmtoMiles.js)

The JavaScript code is responsible for converting a distance from kilometers to miles when the "Convert" button is clicked.

- **convertToMiles Function**: This function is executed when the "Convert" button is clicked. It performs the following tasks:

  1. Retrieves the distance in kilometers entered by the user from the input field using `document.getElementById`.
  2. Multiplies the distance in kilometers by a conversion factor of 0.621371 to convert it to miles.
  3. Formats the result to three decimal places using `.toFixed(3)`.
  4. Updates the content of the paragraph with the `id` "res" to display the converted distance in miles.

- **Event Listener**: The code associates the "convertToMiles" function with the "Convert" button by specifying an `onclick` attribute directly in the HTML.

## Usage

Users can use this kilometers-to-miles converter by entering a distance in kilometers and clicking the "Convert" button. The converted distance in miles will be displayed in the "res" paragraph with three decimal places.

# Positive, Negative, or Zero Checker README

This web application allows users to check if a number is positive, negative, or zero. The README below provides an understanding of the code and its functionality.

## JavaScript Function (6_positiveOrNegative.js)

The JavaScript code is responsible for determining whether a number is positive, negative, or zero based on the user's input.

- **PosOrNeg Function**: This function is executed when the "Check" button is clicked. It performs the following tasks:

  1. Retrieves the user-entered number from the input field with the `id` "PosOrNeg" using `document.getElementById`.
  2. Checks the value of the entered number using a series of conditional statements:
     - If the number is greater than 0, it is considered positive.
     - If the number is equal to 0, it is considered neither negative nor positive (zero).
     - If the number is less than or equal to -1, it is considered negative.
     - If the input is not a valid number, it is considered "not a number."
  3. Updates the content of the paragraph with the `id` "PosorNegResult" to display the result, indicating whether the number is positive, negative, or zero.

## HTML Structure (index.html)

The HTML code defines a user interface for checking if a number is positive, negative, or zero. It includes the following elements:

- **Positive, Negative, or Zero Checker**: The `div` element contains the functionality for checking numbers. It includes the following elements:

  - `<p>`: A paragraph providing information about the checker.
  - `<input>`: An input field for entering a number.
  - `<p>`: A paragraph for displaying the result of the check.
  - `<button>`: A button labeled "Check" for triggering the number check.
  - `<script>`: A script element that links to the JavaScript code for handling the check.

## Usage

Users can use this positive, negative, or zero checker by entering a number in the input field and clicking the "Check" button. The result indicating whether the number is positive, negative, or zero will be displayed in the "PosorNegResult" paragraph.

# Random Number Generator README

This web application allows users to generate a random number between 1 and 100. The README below provides an understanding of the code and its functionality.

## JavaScript Function (7_RandomNo.js)

The JavaScript code is responsible for generating a random number and displaying it when the "random number" button is clicked.

- **genrandom Function**: This function is executed when the "random number" button is clicked. It performs the following tasks:

  1. Generates a random decimal number using `Math.random()`, which produces a value between 0 and 1.
  2. Multiplies the random number by 100 to scale it up to the desired range (1 to 100).
  3. Uses `Math.floor()` to round down the decimal value to the nearest integer.
  4. Updates the content of the paragraph with the `id` "randomresult" to display the generated random number with the message "your random value."

## HTML Structure (index.html)

The HTML code defines a user interface for generating random numbers. It includes the following elements:

- **Random Number Generator**: The `div` element contains the random number generation functionality. It includes the following elements:

  - `<p>`: A paragraph providing information about the random number generator.
  - `<button>`: A button labeled "random number" for triggering the random number generation.
  - `<p>`: A paragraph with the `id` "randomresult" where the generated random number will be displayed.
  - `<script>`: A script element that links to the JavaScript code for handling the random number generation.

## Usage

Users can use this random number generator by clicking the "random number" button. The application will generate a random number between 1 and 100 and display it in the "randomresult" paragraph with the message "your random value."

# Odd or Even Number Checker README

This web application allows users to check whether a number is odd or even. The README below provides an understanding of the code and its functionality.

## JavaScript Function (8_OddEven.js)

The JavaScript code is responsible for checking if a given number is odd or even and displaying the result.

- **OddEven Function**: This function is executed when the "Check" button is clicked. It performs the following tasks:

  1. Retrieves the user input from the input field with the `id` "OddEven."
  2. Checks if the input number is even or odd using a ternary operator.
  3. Updates the content of the paragraph with the `id` "OddEvenresult" to display the result, along with the input number.

## HTML Structure (index.html)

The HTML code defines a user interface for checking if a number is odd or even. It includes the following elements:

- **Number Checker**: The `div` element contains the number checking functionality. It includes the following elements:

  - `<p>`: A paragraph providing information about the number checker.
  - `<input>`: An input field with the `id` "OddEven" where users can enter a number to check.
  - `<button>`: A button labeled "Check" for triggering the number check.
  - `<p>`: A paragraph with the `id` "OddEvenresult" where the result of the number check will be displayed.
  - `<script>`: A script element that links to the JavaScript code for handling the number check.

## Usage

Users can use this number checker by entering a number in the input field and clicking the "Check" button. The application will determine if the number is odd or even and display the result in the "OddEvenresult" paragraph.

# Prime Number Checker README

This web application allows users to check whether a given number is a prime number. The README below provides an understanding of the code and its functionality.

## JavaScript Function (9_PrimeNo.js)

The JavaScript code is responsible for determining whether a given number is prime or not and displaying the result.

- **primeNo Function**: This function is executed when the "Check" button is clicked. It performs the following tasks:

  1. Retrieves the user input from the input field with the `id` "prime."
  2. Checks if the input number is less than or equal to 1, and if so, indicates that it is not a prime number.
  3. Implements a loop to check for factors of the input number from 2 to one less than the input number.
  4. If a factor is found, it indicates that the input number is not prime and breaks out of the loop.
  5. If no factors are found, it concludes that the input number is prime.
  6. Updates the content of the paragraph with the `id` "primeresult" to display the result.

## HTML Structure (index.html)

The HTML code defines a user interface for checking if a number is prime. It includes the following elements:

- **Prime Number Checker**: The `div` element contains the prime number checking functionality. It includes the following elements:

  - `<p>`: A paragraph providing information about the prime number checker.
  - `<input>`: An input field with the `id` "prime" where users can enter a number to check.
  - `<button>`: A button labeled "Check" for triggering the prime number check.
  - `<p>`: A paragraph with the `id` "primeresult" where the result of the prime number check will be displayed.
  - `<script>`: A script element that links to the JavaScript code for handling the prime number check.

## Usage

Users can use this prime number checker by entering a number in the input field and clicking the "Check" button. The application will determine if the number is prime and display the result in the "primeresult" paragraph.

# Maximum Value Finder README

This web application is designed to find the maximum value among three input numbers provided by the user. The README below provides insights into the code and its functionality.

## JavaScript Function (10_Maxmin.js)

The JavaScript code defines a function that identifies the maximum value among three input numbers and displays the result.

- **check Function**: This function is executed when the "Find" button is clicked. It performs the following tasks:

  1. Retrieves user input from three input fields with the `id` values "firstno," "secondno," and "thirdno."
  2. Declares a variable `maxresult` to store the maximum value.
  3. Compares the three input values to identify the maximum value.
  4. Updates the content of the paragraph with the `id` "max" to display the maximum value.

## HTML Structure (index.html)

The HTML code creates a user interface for users to enter three numbers and find the maximum value among them. It includes the following elements:

- **Maximum Value Finder**: The `div` element contains the functionality to find the maximum value. It includes the following elements:

  - `<p>`: A paragraph providing information about the maximum value finder.
  - Three `<input>` fields where users can enter their numbers, each with a unique `id` ("firstno," "secondno," and "thirdno").
  - `<button>`: A button labeled "Find" to trigger the process of identifying the maximum value.
  - `<p>`: A paragraph with the `id` "max" where the result will be displayed.
  - `<script>`: A script element that links to the JavaScript code for finding the maximum value.

## Usage

Users can utilize this application by entering three numbers into the input fields and clicking the "Find" button. The application will determine the maximum value among the provided numbers and display the result in the "max" paragraph.

# Palindrome Checker README

This web application allows users to check whether a provided word is a palindrome or not. The README below provides insights into the code and its functionality.

## JavaScript Function (11_palindromeChecker.js)

The JavaScript code provides three different ways to check if a given word is a palindrome and displays the result.

- **usingifelse Function**: This function is executed when the "Check If Else" button is clicked. It performs the following tasks:

  1. Retrieves user input from the input field with the `id` "palindromeword."
  2. Reverses the input word and stores it in the variable `reversedName`.
  3. Compares the original input with the reversed input to determine if it's a palindrome.
  4. Updates the content of the paragraph with the `id` "palindromeresult3" to display whether the word is a palindrome or not.

## HTML Structure (index.html)

The HTML code creates a user interface for users to enter a word and check if it's a palindrome. It includes the following elements:

- **Palindrome Checker**: The `div` element contains the functionality to check if a word is a palindrome. It includes the following elements:

  - `<p>`: A paragraph providing information about the palindrome checker.
  - An `<input>` field where users can enter a word, with the `id` "palindromeword."
  - `<p>`: A paragraph with the `id` "palindromeresult3" where the result will be displayed.
  - `<button>`: A button labeled "Check If Else" to trigger the palindrome checking process.
  - `<script>`: A script element that links to the JavaScript code for checking if the word is a palindrome.

## Usage

Users can utilize this application by entering a word into the input field and clicking the "Check If Else" button. The application will determine if the provided word is a palindrome and display the result in the "palindromeresult3" paragraph.

You can choose to comment out the unused functions (e.g., `palindromeforloop`, `optimisedforloop`) or modify the code according to your preferences.

# Vowel Counter README

This web application allows users to count the number of vowels in a given word. The README below provides insights into the code and its functionality.

## JavaScript Function (12_countVowels.js)

The JavaScript code defines a function that counts the number of vowels in a given word when the "Vowel Counter" button is clicked.

- **vowelsCounter1 Function**: This function is executed when the "Vowel Counter" button is clicked. It performs the following tasks:

  1. Retrieves user input from the input field with the `id` "vowelsCounter."
  2. Converts the input to lowercase to perform case-insensitive comparisons.
  3. Loops through each character in the input word.
  4. Checks if the character is a vowel (a, e, i, o, u).
  5. Increments the `count` variable for each vowel found.
  6. Displays the total count of vowels in the "vowelsCounterresult1" paragraph.

## HTML Structure (index.html)

The HTML code creates a user interface for users to enter a word and count the number of vowels. It includes the following elements:

- **Vowel Counter**: The `div` element contains the functionality to count vowels. It includes the following elements:

  - `<p>`: A paragraph providing information about the vowel counter.
  - An `<input>` field where users can enter a word, with the `id` "vowelsCounter."
  - `<p>`: A paragraph with the `id` "vowelsCounterresult1" where the vowel count will be displayed.
  - `<button>`: A button labeled "Vowel Counter" to trigger the vowel counting process.
  - `<script>`: A script element that links to the JavaScript code for counting vowels.

## Usage

Users can utilize this application by entering a word into the input field and clicking the "Vowel Counter" button. The application will count and display the number of vowels (a, e, i, o, u) in the "vowelsCounterresult1" paragraph.

The provided JavaScript function counts vowels in a case-insensitive manner. Users can customize the list of vowels or expand the code to count vowels in different languages as needed.

# Copy to Clipboard README

This web application allows users to copy text to the clipboard using three different methods. Below, you'll find explanations for each method along with how to use them.

## First Way (Using `navigator.clipboard.writeText`)

The first method provides a straightforward way to copy text to the clipboard.

- **loremIpsumGene Function**: This function is called when the "Copy" button is clicked. It performs the following tasks:
  1. Retrieves the input text from the element with the `id` "text."
  2. Uses `navigator.clipboard.writeText` to write the input text to the clipboard.

## Second Way (Using `navigator.clipboard.writeText` with an `async` Function)

The second method is similar to the first but uses an `async` function.

- **loremIpsumGene Function**: This `async` function is executed when the "Copy" button is clicked. It performs the following tasks:
  1. Retrieves the input text from the element with the `id` "text."
  2. Uses `navigator.clipboard.writeText` to write the input text to the clipboard.
  3. Displays a "Text copied!" message for a brief period after copying.

## Third Way (Using `execCommand`)

The third method involves selecting text in an input element and copying it to the clipboard using `execCommand`.

- **copyText Function**: This function is called when the "Copy" button is clicked. It performs the following tasks:
  1. Prevents the default behavior of the button.
  2. Selects the text in the input element.
  3. Uses `document.execCommand("copy")` to copy the selected text to the clipboard.
  4. Changes the button text to "Copied!!!" briefly, indicating a successful copy.

## HTML Structure (index.html)

The HTML code creates a user interface for users to enter text and copy it to the clipboard. It includes the following elements:

- **Copy to Clipboard**: The `div` element contains three methods to copy text.
- **Input Field**: An `<input>` field with the `id` "text" where users can enter text.
- **Copy Button**: A `<button>` labeled "Copy" to trigger the copying process.
- `<script>`: A script element that links to the JavaScript code for copying text.

## Usage

Users can utilize this application to quickly copy text to their clipboard using any of the three available methods. Simply enter the desired text in the input field and click the "Copy" button associated with the desired method.

Each method provides a different approach to copying text, and users can choose the one that suits their needs. The second method provides feedback by displaying a "Text copied!" message after copying.

# Input Value Counter README

This simple web application allows you to count the number of characters in an input field. When you type or edit text in the input field, the character count is automatically updated and displayed.

## Features

- **Input Field**: An input field where you can type or paste text.
- **Character Count Display**: A counter that dynamically shows the number of characters in the input field as you type or edit the content.
- **Automatic Update**: The character count is updated in real-time as you interact with the input field.

## How to Use

1. Open the web page with the input field and character count display.
2. Click inside the input field or use the keyboard to start typing or editing text.
3. As you type or modify the content, the character count is automatically updated and displayed in the "Character Count Display" area.

## Code Explanation

The JavaScript code in the `<script>` tag listens for the `keyup` event on the input field. When you type or release a key, the event is triggered, and the following actions occur:

- The `input_count` element is selected using `document.getElementById("input_count")`.
- The `countvalue` element is selected using `document.getElementById("countvalue")`.
- An event listener is added to `input_count` to listen for the `keyup` event.

When a `keyup` event occurs:

- The length of the text in the `input_count` element is determined using `input_count.value.length`.
- The `countvalue` element's text is updated to display the character count.

## Usage

This web application is handy for scenarios where you need to monitor the character count of user-generated content. It can be integrated into forms, surveys, or any application where character limits are relevant.

# First Letter Capitalization README

This web application allows you to convert the first letter of a given word or text to uppercase. It's a useful feature for standardizing the capitalization of text, especially when dealing with user-generated content.

## Features

- **Input Field**: An input field where you can enter the word or text you want to convert.
- **Conversion Button**: A button that, when clicked, capitalizes the first letter of the entered text.
- **Result Display**: A section where the converted text is displayed, or a message indicating that the first letter is already in uppercase.

## How to Use

1. Open the web page with the input field and conversion button.
2. In the "Input Field," enter the word or text you want to convert.
3. Click the "Convert to Uppercase" button.
4. The converted text, with the first letter in uppercase, is displayed in the "Result Display" area.

## Code Explanation

The JavaScript code in the `<script>` tag listens for a click event on the "Convert to Uppercase" button. When you click the button, the following actions occur:

- The text entered in the "Input Field" is extracted and stored in the `string` variable.
- An event listener is added to the "Convert to Uppercase" button.
- When the button is clicked, the `convertusingLoop` function is called.

Inside the `convertusingLoop` function:

- The first character of the input text is checked to see if it's already in uppercase.
- If not, it is converted to uppercase, and the rest of the text is concatenated.
- The converted text is then displayed in the "Result Display" area.

## Usage

This code can be used in various scenarios where you need to ensure consistent capitalization of text. For example, you can incorporate it into forms or applications where user-generated content should always start with a capital letter.

# Set Operations - Union and Intersection

This code demonstrates how to perform set operations, specifically the union and intersection of two arrays. A set operation allows you to work with collections of unique elements, ensuring that there are no duplicate values.

## Features

- **Union of Sets**: The code calculates the union of two sets (arrays) by merging the elements from both arrays while removing any duplicates.
- **Intersection of Sets**: The code also shows an example of finding the intersection of two sets, which includes the elements that exist in both sets.

## How to Use

1. You will find a button labeled "Show Result" at the bottom of the page.
2. Click the "Show Result" button to execute the set operations.

## Code Explanation

- The code defines two arrays `a` and `b`, each containing a list of elements.
- When you click the "Show Result" button, the `showResult` function is executed.

In the `showResult` function:

- The arrays `a` and `b` are merged into a new array `c` using the spread operator.
- The `c` array is converted into a set to remove any duplicate elements.
- The resulting set, which is the union of sets `a` and `b`, is displayed in the "Union Result" section.

## Usage

This code can be used to calculate the union of sets, which is a common operation in various programming scenarios. It is particularly useful when working with unique elements and ensuring that there are no duplicates. You can integrate this code into your projects where set operations are required.

Additionally, the code provides examples of finding the intersection of sets, which can be useful in other scenarios where you need to identify common elements between two sets.

# Start and End with Certain Characters

This code allows you to check whether two input words or strings begin with a specific character and end with another specific character. The code demonstrates how to use JavaScript to verify these conditions and provide corresponding feedback.

## Features

- **Start and End Verification**: The code checks if the first input word starts with the letter "K" and if the second input word ends with the letter "L".

## How to Use

1. Enter the first word or string in the input field labeled "Start With."
2. Enter the second word or string in the input field labeled "End With."
3. Click the "Find Start End" button to execute the verification.

## Code Explanation

- The code defines two input fields, one for the start and the other for the end of a word or string.
- When you click the "Find Start End" button, the `findStartEnd` function is executed.

In the `findStartEnd` function:

- The code retrieves the input values from the "Start With" and "End With" input fields.
- The `startsWith` method is used to check if the first word starts with the letter "K".
- The `endsWith` method is used to check if the second word ends with the letter "L".
- The results of these checks are used to display appropriate messages indicating whether the conditions are met.

## Usage

This code can be used to verify if words or strings start and end with specific characters. It provides a clear example of how to use JavaScript methods to check conditions and provide user-friendly feedback based on the results. You can integrate this code into your applications where you need to validate or verify specific patterns in input text.

# Character Occurrence Counter

This JavaScript code allows you to count the number of occurrences of a specific character within a given string. It provides a straightforward way to find and display how many times a particular character appears within a text.

## Features

- **Character Occurrence Count**: Enter a string and a specific character, then click "Find" to see how many times the character appears within the text.

## How to Use

1. Enter the string or text in the "Enter Your Characters" input field.
2. Enter the character you want to find in the "Enter Letter You Want to Find" input field.
3. Click the "Find" button to initiate the search.

The code will count the occurrences of the specified character in the provided text and display the result.

## Code Explanation

- The code takes two input values: one for the text (characterInputs) and another for the character to be found (letterInputs).
- It uses the `split` method to separate the characters in the input text into an array for easy analysis.
- The code then iterates through each character in the array, checking if it matches the character to be found.
- The code maintains a count of how many times the character is found (stored in the 'store' variable).
- The final count is displayed as the result.

## Usage

This code can be employed in various applications where you need to determine the occurrence of a specific character in a given text. You can use it for tasks such as counting the number of vowels, consonants, or any character in a given sentence.

Feel free to integrate or adapt this code into your projects, and modify it to meet your specific requirements. You can extend its functionality by adding more features, such as case insensitivity or counting occurrences of multiple characters simultaneously.

By providing a user-friendly way to count character occurrences, this code is a useful tool for various text-processing tasks.
