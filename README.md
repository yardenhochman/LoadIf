# LoadIf
media query based selective component loading based for React. 
Based off of [React-Media](https://github.com/reacttraining/react-media)


```js
import React from 'react';
import LoadIf from './LoadIf';

export default () => (
  <React.Fragment>
    <h1>Universal Title</h1>
    <LoadIf.Desktop><h2>Desktop Title<h2></LoadIf.Desktop>
    <LoadIf.Portrait><h2>Phone Portrait Title!</h2></LoadIf.Portrait>
  </React.Fragment>
);
```
