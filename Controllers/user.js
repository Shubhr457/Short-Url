const User = require('../Models/user')

async function handleUserSignup(req,res){
    const {name , email , password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/")}

async function handleUserLogin(req,res){
    const {name ,email , password} = req.body;
    const user=await User.findOne({name,email,password})
    if(!user) return res.render('login',{
        error:"Invalid username or password"
    })
    return res.redirect("/")
}

module.exports = {
    handleUserLogin,
    handleUserSignup
};