const jwt = require('jsonwebtoken') ;

const isLoggedIn = (req , res , next) => {
    const token = (req.cookies && req.cookies.token) || null ;
    if(!token){
        return res.status(401).json({
            success : false ,
            message : "you need to signin to access this route"
        })
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET) ;
    req.user = decoded ;
    next() ;
}

const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "ADMIN") {
        return res.status(403).json({
            success : false ,
            message : "You are not authorized to access this route"
        })
    }
    next() ;
};

module.exports = {isLoggedIn , isAdmin} ;