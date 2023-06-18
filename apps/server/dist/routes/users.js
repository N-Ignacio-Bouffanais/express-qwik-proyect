"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_router = void 0;
const users_1 = require("../controllers/users");
const express_1 = require("express");
const users_router = (0, express_1.Router)();
exports.users_router = users_router;
users_router.get("/", users_1.welcome);
//# sourceMappingURL=users.js.map