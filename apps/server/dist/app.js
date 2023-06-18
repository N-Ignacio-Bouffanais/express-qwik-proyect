"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const users_1 = require("./routes/users");
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.static(__dirname + '../../client/dist'));
app.use("/api", users_1.users_router);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
//# sourceMappingURL=app.js.map