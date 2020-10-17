You can import individual components, it will work.
 
To get all the bootstrap class utilities and use a different theme, you must install `bt-styled-provider` package.

```bash
npm install --save bt-styled-provider
```

Wrap your react application into it.

```js static
import React from 'react';
import { render } from 'react-dom';
import BootstrapProvider from 'bt-styled-provider';

render(document.getElementById('app'), (
  <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
    <Button color="danger">Accomplish my wish</Button>
  </BootstrapProvider>
));
```


