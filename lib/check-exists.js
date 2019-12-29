/**
 * @export Function test lang or partial lang *e.g* `US` is contains inside langs found in `request`
 * @param {string} lang val for test exists default `en`
 * @return {boolean}
 */
module.exports = function( lang = 'en' ) {

    let containsRegexp = null;

    if( typeof lang !== 'string' && ( typeof lang !== "object" || !lang.source ) ) {
        // error arguments
        throw new TypeError('arg1 bust be an string') ;
    }
    if( typeof lang === 'string' ) {

        lang = lang.toLocaleLowerCase().trim() ;
        containsRegexp = require('./build-regexp')( lang , "i" ) ;

    } else {
        containsRegexp = lang ;
    }

    return !!this.items.find( item => (
        containsRegexp.test( item.lang )
    ) ) ;

} ;
