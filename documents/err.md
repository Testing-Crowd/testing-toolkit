# err

A wide range of functions are available to provide randomly generated inforamtion.

### err.nowThrow()

```js
import { generate } from 'testing-toolkit';

const errorName = "Whoops!";
const errorDesc = "The variable passed was invalid.";

err.nowThrow(errorName, errorDesc);

// Example Output: Error: Whoops!: The variable passed was invalid.
```
