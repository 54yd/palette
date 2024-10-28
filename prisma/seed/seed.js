"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seed_1 = require("@snaplet/seed");
var seed = await (0, seed_1.createSeedClient)();
// Truncate all tables in the database
await seed.$resetDatabase();
// Seed the database with 10 users
await seed.user(function (x) { return x(10); });
process.exit();
