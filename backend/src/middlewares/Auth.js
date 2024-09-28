const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = async function(req, res, next) {
    try {
        const token = req.cookies.token || req.body.token || req.header('Authorization');
        if(!token){
            return res.status(401).json({
                hasError: true,
                message: 'No token provided',
            });
        }
        try {
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decode;
            console.log(req.user);
        } catch (error) {
            return res.status(401).json({
                hasError: true,
                message: 'Token is invalid',
            })
            
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            hasError: true,
            message: 'Failed to authenticate user',
        });
    }
};

exports.isStudent = async function (req, res,next){
    try {
        if (req.user.role !== 'Student') {
            return res.status(401).json({
                hasError: true,
                message: 'User is not a student',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            hasError: true,
            message: 'User is not a student',
        })
    }
}

exports.isTeacher = async function (req, res, next){
    try {
        if (req.user.role!== 'Teacher') {
            return res.status(401).json({
                hasError: true,
                message: 'User is not a teacher',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            hasError: true,
            message: 'User is not a teacher',
        })
    }
}

exports.isAdmin = async function (req, res, next){
    try {
        if (req.user.role!== 'Admin') {
            return res.status(401).json({
                hasError: true,
                message: 'User is not an admin',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            hasError: true,
            message: 'User is not an admin',
        })
    }
}