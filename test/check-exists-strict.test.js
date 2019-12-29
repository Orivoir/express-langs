const
    {expect,assert} = require('chai')
    ,checkExistsStrictTest = require('./../lib/check-exists-strict')
;

describe('test module `check-exists-strict`' , () => {

    it('should be an function' , () => {

        assert.isFunction( checkExistsStrictTest ) ;

    } ) ;

    it('should \\thow ReferenceError' , () => {

        const fxThrow = () => checkExistsStrictTest() ;

        expect( fxThrow ).to.throw() ;

    } ) ;

    it('should be return boolean' , () => {

        assert.isBoolean( checkExistsStrictTest.call( {
            items: [{lang:'test'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;

    it('should be return false' , () => {

        assert.isFalse( checkExistsStrictTest.call( {
            items: [{lang:'test'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;

    it('should be return true' , () => {

        assert.isTrue( checkExistsStrictTest.call( {
            items: [{lang:'en'},{lang:'test-2'},{lang:'test-3'}]
        } )) ;

    } ) ;

} ) ;