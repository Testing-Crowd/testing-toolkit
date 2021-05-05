# generate

A wide range of functions are available to provide randomly generated inforamtion.

### generate.user()

```js
import { generate } from 'testing-toolkit';

const userData = generate.user();

console.log('Example Output:', userData);

// Example Output: {
//   id: '90d0360f-2d6f-4cdc-a938-81c42f9e7413',
//   firstName: 'Danny',
//   lastName: 'Hoppe',
//   email: 'test-20210505125153724-284988@testingtoolkit.co.uk',
//   password: '.ejCD2j6tXhmGKFL!',
//   ipAddress: '191.133.18.178',
//   createdAt: 2020-09-16T19:02:54.600Z,
//   expireAt: 2021-06-05T01:25:04.518Z
// }
```

### generate.emailAddress()

```js
import { generate } from 'testing-toolkit';

const emailAddress = generate.emailAddress();

console.log('Example Output:', emailAddress);

// Example Output: test-20210505125230848-245889@testingtoolkit.co.uk
```

### generate.password()

```js
import { generate } from 'testing-toolkit';

const password = generate.password();

console.log('Example Output:', password);

// Example Output: .kA1YWSb0egKb26n!
```

### generate.ipAddress()

```js
import { generate } from 'testing-toolkit';

const ipAddress = generate.ipAddress();

console.log('Example Output:', ipAddress);

// Example Output: 245.126.71.106
```

### generate.pastDate()

```js
import { generate } from 'testing-toolkit';

const pastDate = generate.pastDate();

console.log('Example Output:', pastDate);

// Todays Date: 2021-05-05
// Example Output: 2020-10-11T04:15:02.358Z
```

### generate.recentDate()

```js
import { generate } from 'testing-toolkit';

const recentDate = generate.recentDate();

console.log('Example Output:', recentDate);

// Todays Date: 2021-05-05
// Example Output: 2021-05-04T15:19:36.950Z
```

### generate.futureDate()

```js
import { generate } from 'testing-toolkit';

const futureDate = generate.futureDate();

console.log('Example Output:', futureDate);

// Todays Date: 2021-05-05
// Example Output: 2021-06-13T05:10:06.810Z
```

### generate.dateAsNumber()

```js
import { generate } from 'testing-toolkit';

const dateAsNumber = generate.dateAsNumber();

console.log('Example Output:', dateAsNumber);

// Now: 2021-05-05T13:57Z
// Example Output: 20210505125802673
```

### generate.randomNumber()

```js
import { generate } from 'testing-toolkit';

const randomNumber = generate.randomNumber();

console.log('Example Output:', randomNumber);

// Example Output: 258713
```

### generate.randomString()

```js
import { generate } from 'testing-toolkit';

const randomString = generate.randomString();

console.log('Example Output:', randomString);

// Example Output: program
```
