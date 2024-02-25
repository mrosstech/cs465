const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save().then((ret) => {
        console.log('User created');
        console.log(ret);
        const token = user.generateJwt();
        console.log('Token: ' + token);
        res
        .status(200)
        .json({token: token});
    }).catch((err) => {
        res
        .status(400)
        .json(err);
    })
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
            .status(404)
            .json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res
            .status(200)
            .json({token});
        } else {
            res
            .status(401)
            .json(info);
        }
    })(req, res);
};


module.exports = {
    register,
    login
};