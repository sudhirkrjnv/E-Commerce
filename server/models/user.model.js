import moongoose from "mongoose";

const userSchema = new moongoose.Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, required: true, trim: true },
        password: { type: String, required: true, trim: true },
        name: { type: String, required: true, trim: true },
        mobile: { type: String, required: true, trim: true },
    },
    { timestamps: true }
)
export const User = moongoose.model("User", userSchema);