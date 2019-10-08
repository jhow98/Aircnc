const User = require('../models/User')
//index, show, store, update, destroy

module.exports = {
    async store(req, res){
       const { email } = req.body;

       let user = await User.findOne({email})

       if(user){
         return res.json({ "Error": "User alrealy exists" });
         }
         user = await User.create({ email });
       return res.json(user);
    }
}