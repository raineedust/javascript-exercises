# Exercise 07 - tempConversion

Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `ftoc(100)` should return `37.8` and not `37.77777777777778`.

This exercise asks you to create more than one function so the `module.exports` section of the spec file looks a little different this time. Nothing to worry about, we're just packaging both functions into a single object to be exported.

## Hints

- You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).

## Resources

- [javascript - How to round to at most 2 decimal places, if necessary - Stack Overflow](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)
- [How To Create a Temperature Converter With HTML and JavaScript](https://www.w3schools.com/howto/howto_js_temperature_converter.asp)
