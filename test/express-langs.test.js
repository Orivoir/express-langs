const
    {expect,assert} = require('chai')
    ,middleware = require('./../express-langs')
;

describe('middleware' , () => {

    let reqFactory = {
        headers: {
            "accept-language": "test,test-TEST;q=0.8,TEST-2;q=0.5,en;q=0.3"
        }
    } ;

    const mw = middleware( reqFactory , null , () => {
        console.log('\n\n\t-- free middleware --\n');
    } ) ;

    describe('middleware entry point test' , () => {


        it('should be an function' , () => {

            assert.isFunction( middleware , 'mw() is an function' ) ;
        } ) ;

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

    } ) ;

    describe('exists methods parse' , () => {

        it('should have two exists Functions' , () => {

            assert.isFunction( reqFactory.langs.exists , 'exists is () => boolean' ) ;
            assert.isFunction( reqFactory.langs.existsStrict , 'existsStrict is () => boolean' ) ;

        } ) ;

        it('should be throw TypeError' , () => {

            try {
                expect( reqFactory.langs.exists( 42 ) ).to.throw( TypeError ) ;
            } catch( TypeError ) {
                console.log('have success throw TypeError');
            }

            try {
                expect( reqFactory.langs.existsStrict( 42 ) ).to.throw( TypeError ) ;
            } catch( TypeError ) {
                console.log('have success throw TypeError');
            }


        } ) ;

    } ) ;

    describe('build regexp () => object' , () => {

        const buildRegexpTest = require('./../lib/build-regexp') ;

        const regBuild = buildRegexpTest('correct\-format' , "i" ) ;

        it('should be an Function' , () => {

            assert.isFunction( buildRegexpTest ) ;

        } ) ;

        it('should be have source property' , () => {

            expect( regBuild ).to.have.property( 'source' ) ;

        } ) ;

        it('should \\throw TypeError' , () => {

            try {

                buildRegexpTest() ;

                throw 'have not throw TypeError'
            } catch( TypeError ) {
                //  ok!
            }

            try {

                buildRegexpTest("format" , /invalidoptions/i ) ;

                throw 'have not throw TypeError';
            } catch( TypeError ) {
                //  ok!
            }

        } ) ;

    } ) ;

    describe('test exists with regexp' , () => {

        it('should return boolean' , () => {

            assert.isBoolean(reqFactory.langs.exists( 'fr' ) ) ;
            assert.isBoolean(reqFactory.langs.exists( /FR/i ) ) ;

        } ) ;

        it('should return true' , () => {

            assert.isTrue( reqFactory.langs.exists( 'test' ) ) ;
            assert.isTrue( reqFactory.langs.exists( /Test/i ) ) ;

        } ) ;

    } ) ;

} ) ;
