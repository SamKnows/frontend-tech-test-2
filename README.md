# TODO / TOIMPROVE

Unit testing (no time in one hour)
Add cucumber(no time in one hour)
Manage message error if http://api.fixer.io/ is down or have some troubles
Refactoring to make the code cleaner and separate business from view

## Part two: refactoring

> This shouldn't take long.

There's a file in this directory called `flatten.js`. It contains a function to
flatten an array or an object (discarding the keys).

```js
flatten([1, 2, [3, [[4], 5]], 6]); // [1, 2, 3, 4, 5, 6]

flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] }); // [1, 2, 3, 4]
```

Non-object values like strings and numbers should just be passed through.

It's an okay function, but it could be a lot cleaner, and a lot shorter: this
function is written using only ES3, and because we don't support old versions
of Internet Explorer and we use Babel, we can use ES5 and ES2016.

The task is to improve the function. This is entirely subjective and there's
basically nothing you can do wrong - just curious!
