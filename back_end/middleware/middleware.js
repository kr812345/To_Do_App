const auth = (req,res,next) => {
    const token = req.header('Authorization').replace('bearer','');
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } 
    catch (e) {
        res.status(401).send('Please authenticate');
    }
};