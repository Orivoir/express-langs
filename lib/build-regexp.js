module.exports = function( stringFormat , opt = "" ) {

    if( typeof opt !== 'string' ) {
        // error arguments
        throw new TypeError('arg2 bust be an string') ;
    }
    if( typeof stringFormat != "string" ) {
        // error arguments
        throw new TypeError('arg1 bust be an string') ;
    }

    return new RegExp( stringFormat , opt ) ;
} ;