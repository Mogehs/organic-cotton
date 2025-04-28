import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    phone: { type: String },
    address: { type: String },

    role: {
      type: String,
      enum: ["customer", "student", "admin", "instructor"],
      default: "customer",
    },

    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiresAt: { type: Date },

    resetToken: { type: String },
    resetTokenExpires: { type: Date },

    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
