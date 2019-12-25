module.exports =
/**
 * @param {string} _default - default country code return if not found with request
 * @return void
 * @description resolve langagues header accept in **request** get `array` langagues with `request.langs`
 */
function ( _default = "en" ) {

    return (req , skip , next) => {

        req.langs = [];

        const langs = req.headers["accept-language"] ;

        if( !langs ) {
            req.langs.push( _default ) ;
            next();
        }

        langs
        .split(';')
        .forEach( element => {

            let code = element.split(',')[1] ;

            if( code ) {

                if(
                    code.indexOf('-') != -1 &&
                    !req.langs.find( lang => code === lang )
                )
                    req.langs.push( code ) ;
            }
        } ) ;

        next() ;
    } ;

}
