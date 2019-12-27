/**
 * @export Function test lang or partial lang *e.g* `US` is contains inside langs
 * @param {string} lang val for test exists
 * @return {boolean}
 */
module.exports = function( lang = 'en' ) {

    if( typeof lang !== 'string' ) {
        // error arguments
        throw new TypeError('arg1 bust be an string') ;
    }

    lang = lang.toLocaleLowerCase().trim() ;

    const containsRegexp = require('./build-regexp')( lang , "i" ) ;

    return !!this.items.find( item => (
        containsRegexp.test( item.lang )
    ) ) ;

} ;