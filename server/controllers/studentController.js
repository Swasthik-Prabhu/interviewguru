import User from "../models/User.js";

export const getStudentProfile = async (req, res) => {
try {
const user = await User.findById(req.user.id).select("-password");
res.json(user);
} catch (err) {
res.status(500).json({ msg: "Failed to fetch profile", error: err.message });
}
};