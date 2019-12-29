const
    {expect,assert} = require('chai')
    ,getWithTest = require('./../lib/get-with-pattern')
;

describe('test module `get-with-pattern`' , () => {

    it('should be an function' , () => {

        assert.isFunction( getWithTest ) ;

    } ) ;

    it('should \\throw TypeError' , () => {

        const fxThrow = () => getWithTest() ;

        expect( fxThrow ).to.have.throw( TypeError ) ;

    } ) ;

    it('should return array' , () => {

        assert.isArray( getWithTest.call( {
            items: [{ lang: 'test' } ,{ lang: 'fr' } , { lang: 'en' } , ]
        } , /en|fr/ ) ) ;

    } ) ;

    it('should return an array of size 2' , () => {

        expect( getWithTest.call( {
            items: [{ lang: 'test' } ,{ lang: 'fr' } , { lang: 'en-US' } , ]
        } , /en|fr/ ) ).to.have.lengthOf( 2 ) ;

    } ) ;

    it('should return an array of object' , () => {

        const back = getWithTest.call( {
            items: [{ lang: 'test' } ,{ lang: 'fr' } , { lang: 'en' } , ]
        } , "en|fr" );

        assert.isObject( back[0] ) ;

    } ) ;

} ) ;
