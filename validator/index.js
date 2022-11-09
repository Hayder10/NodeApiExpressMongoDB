exports.createPostValidator =  (req,res,next) => {
    //Title Checking
    req.check("title","There must be a Title!").notEmpty();
    req.check("title","Title must be between 4 to 150 characters!").isLength({
        min: 4,
        max: 150
    })
    //Body Checking
    req.check("body","There must be a Body!").notEmpty();
    req.check("body","Body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 150
    })
    //Error checking besides the other ones in the last section
    const errors = req.validationErrors();
    //if there is an error , show the first one as they appear
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //Proceed to next middleware, doing this prevents the server to Halt!
    next();
}