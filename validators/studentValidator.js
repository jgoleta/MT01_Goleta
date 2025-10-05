export const validateStudent = (req, res, next) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).json({ error: "Name, email, and age are required." });
    }
    next();
};