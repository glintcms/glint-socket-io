# glint-socket-io

socket io module for express and browser. this module needs to be installed an used as middleware on the main express app.

# install

```bash
npm install glint-socket-io
```

# use

> This Module is part of [glintcms](http://glintcms.com/).
> Please see the [documentation](https://github.com/glintcms/glintcms) for more info.


## use on main express server

```js
var Adapter = require('glint-adapter');
var fsa = require('glint-adapter-fs')();
var sessionAdapter = Adapter(fsa).db('glint').type('session');
var sessionStore = require('glint-session')(app, sessionAdapter);
var io = require('glint-socket-io')(server, sessionStore);
```

## use in browser

```js
var io = window.io = require('glint-socket-io').io;
var socket = window.socket = require('glint-socket-io')();
```


# test

```bash
npm test
```

# license

MIT

> sponsored by [intesso](http://intesso.com)
