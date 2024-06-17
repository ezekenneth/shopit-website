//url not found error handler

const notFound = (req, res , next) => {
    const error = new Error('url not found :'+ (req.originalUrl));
    res.status(404);
    next(error);

};

//api error Handler
const errorHandler = (err , req , res , next) =>{
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        message : err?.message,
        stack : err?.stack,
          });
};



module.exports = {errorHandler , notFound };



