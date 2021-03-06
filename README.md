# [express-langs](https://www.npmjs.com/package/express-langs)

[![npm](https://img.shields.io/npm/l/express-langs.svg?style=for-the-badge)](https://www.npmjs.com/package/express-langs)
[![npm version](https://img.shields.io/npm/v/express-langs.svg?style=for-the-badge)](https://www.npmjs.com/package/express-langs)


[![build travis](https://travis-ci.com/Orivoir/express-langs.svg?branch=master)](https://travis-ci.com/Orivoir/express-langs)
[![codecov](https://codecov.io/gh/Orivoir/express-langs/branch/master/graph/badge.svg)](https://codecov.io/gh/Orivoir/express-langs)


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
        console.log( req.langs.items );

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

## or with an **pattern** *e.g* :


```javascript
langs.exists( /en/i ) ; // match with 'en-US'
langs.exists( /en/i ) ; // match with 'en'

langs.exists( /en|fr/i ) ; // match with 'fr'
```

## you can make a `strict test exists` *e.g* :

```javascript
langs.existsStrict('en') ; // not match with 'en-US'
langs.existsStrict('en') ; // match with 'en'
langs.existsStrict('en') ; // not match with 'fr'
```

## `getWith` method get array langs match with you support `pattern`

```javascript
const supportLangs = langs.getWith( /en|fr|es/i ) ; // array[ langs ]

// you can give an string for build an pattern e.g :
const pattern = "en|fr|es" ;
const supportLangs = langs.getWith( pattern ) ; // array[ langs ]
```

#### develop by [Samuel Gaborieau]( https://orivoir.github.io/profil-reactjs/ ) with <3 and NodeJS for *Open Source* and *enjoy* !
