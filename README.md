# [express-langs](https://www.npmjs.com/package/express-langs)

[![npm](https://img.shields.io/npm/l/express-langs.svg?style=for-the-badge)](https://www.npmjs.com/package/express-langs)
[![npm version](https://img.shields.io/npm/v/express-langs.svg?style=for-the-badge)](https://www.npmjs.com/package/express-langs)

## parse langs from `request` for easier use with *express*

![screen shot demo](./screen-demo.png)

> resolve langagues **accept** in header `request` get `array` langagues with `request.langs`

### Installation

```npm install express-langs --save```

```yarn add express-langs```

server.js

```javascript
const
    exp = require('express')
    ,app  =exp()
    ,server = require('http').Server( app )
    ,langs = require('express-langs')
;

app
    // ... , you other middleware
    .use( langs )
    // you other middleware ... ,
;


app
    .get('/' , (req,res) => {

        /**
         * array<object>
         *  {
         *      lang: string
         *      ,val: float
         *  }
         */
        console.log( req.langs );

        res.send( 'hello world !' ) ;

    } )
;

server.listen( 80 , () => console.log('server run ...') ) ;

```

#### develop by [Samuel Gaborieau]( https://orivoir.github.io/profil-reactjs/ ) with <3 and NodeJS for *Open Source* and *enjoy* !
