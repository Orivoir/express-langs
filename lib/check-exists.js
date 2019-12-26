/**
 * @export Function test lang or partial lang *e.g* `US` is contains inside langs
 * @param {string} lang val for test exists
 * @return {boolean}
 */
module.exports = function( lang = 'en' ) {

    if( typeof lang !== 'string' ) {
        // error arguments
    }

    lang = lang.toLocaleLowerCase().trim() ;

    const containsRegexp = new RegExp( lang , "i" ) ;

    return !!this.items.find( item => (
        containsRegexp.test( item.lang )
    ) ) ;

} ;