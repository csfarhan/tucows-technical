const asyncHandler = require('express-async-handler')
const User = require("../models/User")

const getUsers = asyncHandler(async(req, res) =>{
    //Return all users in the database
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
});

const deleteUser = asyncHandler(async(req, res) => {
    const {userId} = req.body;
    try{
        await User.deleteOne({userId});
        return res.status(200).send("Deleted");
    }catch(err){
        return res.status(400).send(err.message);
    }
});

const putUsers = asyncHandler(async(req, res) =>{
    const {userId, name, favFood} = req.body;
    try{
        let user = await User.findOne({userId});
        
        if(user){
            user.name = name;
            user.favFood = favFood;
        }
        else{
            user = new User({
                userId: userId,
                name: name,
                favFood: favFood,
            });
        }
        await user.save();
        return res.status(200).send("User Added");
    }catch(err){
        return res.status(400).send(err.message);
    }
});

const deleteAll = asyncHandler(async(req, res) =>{
    try{
        await User.deleteMany({});
        return res.status(200).send("Users Deleted");
    }catch(err){
        return res.status(400).send(err.message);
    }
});


module.exports = {getUsers, putUsers, deleteAll, deleteUser};