"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const requireRole = (...roles) => {
    return (req, res, next) => {
        const role = req.headers['x-user-role'];
        console.log(`Checking role: ${role} against allowed roles: ${roles.join(', ')}`);
        if (!role ||
            !roles.includes(role)) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden'
            });
        }
        next();
    };
};
exports.requireRole = requireRole;
