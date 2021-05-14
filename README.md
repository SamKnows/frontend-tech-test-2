# SamKnows Front-End Technical Test

Thank you for your application. Here's a short technical test before we invite
you in for a face-to-face interview.

There are two parts to the test:

1. Currency Converter App (this should take no longer than an hour and a half)
2. Refactor flatten.js (this shouldn't take long)

If you don't complete the test, don't worry about it - just send the test back	
with as much as you've done. Also, it would be nice if you could say what you	
would change if you had more time.

Please fork this repo before starting so you can work there.

## Part one: A currency conversion app

The task is to create a currency conversion app using Vue or React that looks
like the `currency-converter.png` image.
Please write your own CSS/SCSS rather than using a framework.

If you'd like to improve on the design, please go ahead but no
worries if you can't — this is the front-end test, not the design test!

For getting the conversion rates, please use this API: https://exchangeratesapi.io

##### User stores:
- When the base currency is changed, the application should fetch new conversion rates
- When the 'switch' button is pressed, the values of the base and target are swapped
- When an amount is entered into the input, a converted amount is displayed

##### We're looking for:
- Functionality: it should work.
- Design: it looks like the design (or better).
- Code quality: code should be readable and maintainable.


## Part two: Refactoring

There's a file in this directory called `flatten.js`. It contains a function to
flatten an array or an object (discarding the keys).

```js
flatten([1, 2, [3, [[4], 5]], 6]); // [1, 2, 3, 4, 5, 6]
flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] }); // [1, 2, 3, 4]
```

Non-object values like strings and numbers should just be passed through.

It's an okay function, but it could be a lot cleaner, and a lot shorter: this
function is written using only ES3, and because we don't support old versions
of Internet Explorer and we use Babel, you can use ES5 and ES2016 if you want.

*Note*: Please do not use `Array.prototype.flat()` introduced in ES2019, the goal is to see your way of doing it.

##### We're looking for:
- It should work. Other than that, there isn't really a wrong answer. Just curious
to see what you'll do.


## When you're finished

Add `atrunelle` to your private GitHub repo so we can see your code.

Thank you and good luck!
