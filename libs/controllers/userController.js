exports.createUser = (req, res)=>{
    const {userName, email, password, pwd}= req.body;
    res.send(`Welcome ${userName}! we shall connect with you using email: ${email}`);
}