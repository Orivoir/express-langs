/**
 * @author S.Gaborieau
 *
 * @package [npm] <https://www.npmjs.com/package/express-langs>
 * @version 0.2.0 `stable version`
 *
 * @git <https://github.com/Orivoir/express-langs/blob/master/README.md>
 * @npm <https://www.npmjs.com/package/express-langs>
 *
 * @summary express middleware parse langs user from headers `Accept`
 */

module.exports =
/**
 * @exports Function middleware express
 *
 * @description resolve langagues header accept in **request** get `array` langagues with `request.langs`
 */
function (req , skip , next) {

    const langs = req.headers["accept-language"] ;

    req.langs = {
        items: require('./lib/parse')( langs )
        ,existsStrict: require('./lib/check-exists-strict')
        ,exists: require('./lib/check-exists')
    } ;

    next() ;

} ;
