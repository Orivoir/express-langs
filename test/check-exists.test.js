const
    {expect,assert} = require('chai')
    ,checkExistsTest = require('./../lib/check-exists')
;


describe('test module `check-exists`' , () => {

    it('should be an function' , () => {

        assert.isFunction( checkExistsTest ) ;

    } ) ;

    it('should \\thow ReferenceError' , () => {

        const fxThrow = () => checkExistsTest() ;

        expect( fxThrow ).to.throw() ;

    } ) ;

    it('should be return boolean' , () => {

        assert.isBoolean( checkExistsTest.call( {
            items: [{lang:'test'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;

    it('should be return false' , () => {

        assert.isFalse( checkExistsTest.call( {
            items: [{lang:'test'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;

    it('should be return true' , () => {

        assert.isTrue( checkExistsTest.call( {
            items: [{lang:'en'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;


} );
