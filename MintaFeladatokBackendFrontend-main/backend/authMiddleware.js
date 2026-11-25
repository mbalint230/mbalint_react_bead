
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!authHeader?.startsWith("Bearer ") || !token) {
        return res.status(401).json({
            message: "Bejelentkezés szükséges!"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Érvénytelen vagy lejárt token!"
        });
    }
}

function adminMiddleware(req, res, next) {
    if (req.user?.role !== 1) {
        return res.status(403).json({
            message: "Nincs jogosultságod!"
        });
    }

    next();
}

module.exports = {
    authMiddleware,
    adminMiddleware
};
