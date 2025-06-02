// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// export const register = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ msg: "User already exists" });

//     const hashedPw = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPw, role });

//     const token = generateToken(user);
//     res.status(201).json({ user: { id: user._id, name, email, role }, token });
//   } catch (err) {
//     res.status(500).json({ msg: "Registration failed", err });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ msg: "Invalid credentials" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match)
//       return res.status(400).json({ msg: "Invalid credentials" });

//     const token = generateToken(user);
//     res.status(200).json({
//       user: { id: user._id, name: user.name, email, role: user.role },
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ msg: "Login failed", err });
//   }
// };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Generate JWT
const generateToken = (user) => {
return jwt.sign(
{ id: user._id, role: user.role },
process.env.JWT_SECRET,
{ expiresIn: "7d" }
);
};

// Register Controller
export const register = async (req, res) => {
const { name, email, password, role } = req.body;

try {
// Check if the user already exists
const userExists = await User.findOne({ email });
if (userExists) {
return res.status(400).json({ msg: "User already exists" });
}
// Hash the password
const hashedPassword = await bcrypt.hash(password, 10);

// Create new user instance and save to MongoDB
const newUser = new User({
  name,
  email,
  password: hashedPassword,
  role,
});

await newUser.save(); // Saves to MongoDB

// Generate JWT token
const token = generateToken(newUser);

// Send response
res.status(201).json({
  user: {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  },
  token,
});
} catch (err) {
console.error("Registration error:", err);
res.status(500).json({ msg: "Registration failed", error: err.message });
}
};

// Login Controller
export const login = async (req, res) => {
const { email, password } = req.body;

try {
// Find user
const user = await User.findOne({ email });
if (!user) {
return res.status(400).json({ msg: "Invalid credentials" });
}
// Compare password
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  return res.status(400).json({ msg: "Invalid credentials" });
}

// Generate JWT
const token = generateToken(user);

// Send response
res.status(200).json({
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
  token,
});
} catch (err) {
console.error("Login error:", err);
res.status(500).json({ msg: "Login failed", error: err.message });
}
};
