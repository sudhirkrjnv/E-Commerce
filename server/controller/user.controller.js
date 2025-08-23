import {User} from '../models/user.model.js'

export const register = async(req, res)=>{
    try {
        const {email, password} = req.body;
        
        const existingUser = await User.findOne({email});
        if(existingUser) return res.json({message:"User Already exists, try diffent email or login via password", success:false});

        await User.create({email, password});

        return res.status(200).json({
            success: true,
            message: "Account created successfully"
        })

    } catch (error) {
        console.error(error);
    }
}
export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        let user = await User.findOne({email});
        if(!user) return res.send({message:'User not exists', success:'false'});
        const isPasswordMatched = user.password === password
        if(!isPasswordMatched) return res.status(400).json({message:"Incorrect Password"})

        user = {
            _id: user._id,
            email: user.email,
        }

        return res.status(200).json({
            message: `Welcome ${user.email}`,
            success: false
        })
    } catch (error) {
        console.error(error);
    }
}