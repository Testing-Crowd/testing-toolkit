# logger

Simple, extensible logger.
The default logging level is `INFO`, can be changed using an environment variable, `LOG_LEVEL`

### usage example

```js
import { logger } from 'testing-toolkit';

logger.info('Just some info message');

logger.debug({id: 1, likes: 'music'}, 'Also an attached message');

// Example Output (if logging level is debug): 
// {"level":30,"time":1620720006022,"pid":28938,"hostname":"SOME-HOST","msg":"Just some info message"}
// {"level":20,"time":1620720006022,"pid":28938,"hostname":"SOME-HOST","id":1,"likes":"music","msg":"Also an attached message"}
```