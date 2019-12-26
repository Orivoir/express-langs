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

## you can use `methods` *test* `exists langs`

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

        const langs = req.langs ;

        if( langs.exists( 'fr' ) ) {


            res.send( 'salut le monde !' ) ;

        } else {

            res.send('hello world') ;
        }

    } )
;

server.listen( 80 , () => console.log('server run ...') ) ;

```

## `exists` methods make a relative test with langs found *e.g* :

```javascript
langs.exists('en') ; // match with 'en-US'
langs.exists('en') ; // match with 'en'
langs.exists('en') ; // not match with 'fr'
```

## you can make a `strict test exists` *e.g* :

```javascript
langs.existsStrict('en') ; // not match with 'en-US'
langs.existsStrict('en') ; // match with 'en'
langs.existsStrict('en') ; // not match with 'fr'
```

#### develop by [Samuel Gaborieau]( https://orivoir.github.io/profil-reactjs/ ) with <3 and NodeJS for *Open Source* and *enjoy* !
