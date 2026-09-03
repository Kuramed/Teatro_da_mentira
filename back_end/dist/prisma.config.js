"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@prisma/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = (0, config_1.defineConfig)({
    datasource: {
        url: process.env.DATABASE_URL || 'file:./dev.db',
    },
});
//# sourceMappingURL=prisma.config.js.map