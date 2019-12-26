/**
 * @exports Function parse lang algorythm
 * @returns {array<object>} array lang parse with **strong** value and **key** associate
 */
module.exports = function( langs ) {

    return langs
        .split(',')
        .filter( lang => lang.indexOf(';') !== -1 )
        .map( (lang,key) => {

            const  [l,val] = lang.split(';') ;

            return {
                lang: l,
                strong: parseFloat(val.split('=')[1]),
                key: key
            } ;

    } ) ;

} ;
