import {User} from '../models/user.model.js'
import bcrypt from "bcryptjs"

export const register = async(req, res)=>{
    try {
        const {email, password, name, mobile} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) return res.json({message:"User Already exists, try diffent email or login via password", success:false});

        const hassedPassword = await bcrypt.hash(password, 10);

        await User.create({email, password:hassedPassword, name, mobile});

        return res.status(200).json({
            success: true,
            message: "Account created successfully"
        })

    } catch (error) {
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
}
export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        let user = await User.findOne({email});
        if(!user) return res.send({message:'User not exists', success:false});

        const isPasswordMatched =await bcrypt.compare(password, user.password);
        if(!isPasswordMatched) return res.status(400).json({message:"Incorrect Password"})

        user = {
            _id: user._id,
            email: user.email,
            name: user.name,
            mobile: user.mobile
        }

        return res.status(200).json({
            message: `Welcome ${user.name}`,
            success: true,
            user
        })
        
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
}