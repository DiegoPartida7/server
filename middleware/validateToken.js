const {TOKEN} = require('./../config');

function validateToken( req, res, next ){
    console.log(TOKEN);

    let token = req.headers.authorization;

    if( !token ){
        res.statusMessage = "You need to send the 'authorization' token.";
        return res.status( 401 ).end();
    }

    if( token !== `Bearer ${TOKEN}` ){
        res.statusMessage = "The 'authorization' TOKEN is invalid.";
        return res.status( 401 ).end();
    }

    next();

}

module.exports = validateToken;