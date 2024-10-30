const express = require("express");
const router = express.Router();
const UserModel = require("../model/UserModel");

router.get('/getUsers', (req, res) => { 
    UserModel.find()
    .then(function(data){
        res.status(200).json({
            userList:data ? data :[]
        })     
    })
    .catch(function(error){
        res.status(500).json({
            success:"Not Added"
        });
    })
});

router.post('/createUser', (req, res) => {
    const {firstName,lastName,middleName,prefix,nickName,addressLine1,addressLine2,zipcode,city,state,country,friends,hobbies} = req.body;
    let List = {};
    List.firstName = firstName;
    List.lastName = lastName;
    List.middleName = middleName;
    List.prefix = prefix;
    List.nickName = nickName;
    List.addressLine1 = addressLine1;
    List.addressLine2 = addressLine2;
    List.zipcode = zipcode;
    List.city = city;
    List.state = state;
    List.country = country;
    List.friends = friends && friends.length !== 0 ? friends.split(","):[];
    List.hobbies = hobbies && hobbies.length !== 0? hobbies.split(","):[];
    console.log(List)
    let userModel = new UserModel(List) 
    userModel.save()
    .then(function(data){
        res.status(200).json({
            success:"List added Successfully"
        })     
     })
     .catch(function(error){
        res.status(500).json({
            success:"Not Added"
        });
     })
});

module.exports = router;
