# logger

Simple, extensible logger.
The default logging level is `INFO`, can be changed using an environment variable, `LOG_LEVEL`

### usage example

```js
import { log } from 'testing-toolkit';

log.info('Just some info message');

log.debug({id: 1, likes: 'music'}, 'Also an attached message');

// Example Output (if logging level is debug): 
[2021-05-17 10:38:29.840 +0000] INFO: such info
[2021-05-17 10:38:29.842 +0000] ERROR: oh no
```