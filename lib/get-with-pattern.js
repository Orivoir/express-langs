/**
 * @exports Function get **langs** item **match** with an **arg1** `pattern`
 * @param {string|RegExp} pattern test on all langs *name*
 * @throws \\TypeError then **arg1** pattern is not an valid format
 * @test from `get-with-pattern.test.js`
 * @return {array} array[ { <lang:string,strong:number,key:number> } ]
 */
module.exports = function( pattern ) {

    if(
        typeof pattern !== 'string' &&
        !(pattern instanceof RegExp)
    ) {
        throw new TypeError('arg1 bust be an format') ;
    }

    if( typeof pattern === 'string' ) {
        pattern = new RegExp( pattern ) ;
    }

    return this.items.filter( item => (
        pattern.test( item.lang )
    ) ) ;

} ;
