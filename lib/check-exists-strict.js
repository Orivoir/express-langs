/**
 * @export Function test lang exists
 * @param {string} lang val for test exists
 * @return {boolean}
 */
module.exports = function( lang = 'en' ) {

    if( typeof lang !== 'string' ) {
        // error arguments
        throw new TypeError('arg1 bust be an string or') ;
    }

    lang = lang.toLocaleLowerCase().trim() ;

    return !!this.items.find( item => (
        item.lang.toLocaleLowerCase() === lang
    ) ) ;

} ;
