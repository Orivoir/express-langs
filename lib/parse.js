/**
 * @exports Function parse lang algorythm
 * @returns {array<object>} array lang parse with **strong** value
 */
module.exports = function( langs ) {

    return langs
        .split(',')
        .filter( lang => lang.indexOf(';') !== -1 )
        .map( lang => {

            const  [l,val] = lang.split(';') ;

            return {
                lang: l,
                val: parseFloat(val.split('=')[1])
            } ;

    } ) ;

} ;
