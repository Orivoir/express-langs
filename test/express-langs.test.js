const
    {before} = require('mocha')
    ,{expect,assert} = require('chai')
    ,middleware = require('./../express-langs')
;

describe('middleware' , () => {

    describe('request handler create' , () => {

        let mw = null ;

        let reqFactory = {
            headers: {
                "accept-language": "test,test-TEST;q=0.8,TEST-2;q=0.5,en;q=0.3"
            }
        } ;

        before( () => {

            mw = middleware( reqFactory , null , () => {
                console.log('\n\n\t-- free middleware --\n');
            } ) ;

        } ) ;

        it('should be an function' , () => {

            assert.isFunction( middleware , 'mw() is an function' ) ;
        } ) ;


        describe('test parse langs' , () => {

            it('`request.langs` should be an object' , () => {

                assert.isObject( reqFactory.langs , 'langs is object' ) ;

            } ) ;

            it('should have an attribute items array[object] ' , () => {

                expect( reqFactory.langs ).to.have.property( 'items' ) ;

                expect( reqFactory.langs.items ).to.be.an( 'array' ) ;

            } ) ;

            it('should have 3 langs founds' , () => {

                expect( reqFactory.langs.items ).lengthOf( 3 ) ;

            } ) ;

            describe('should have exists methods' , () => {

                it('should have two exists Functions' , () => {

                    assert.isFunction( reqFactory.langs.exists , 'exists is () => boolean' ) ;
                    assert.isFunction( reqFactory.langs.existsStrict , 'existsStrict is () => boolean' ) ;

                } ) ;



            } ) ;

        } ) ;


    } ) ;

} ) ;
