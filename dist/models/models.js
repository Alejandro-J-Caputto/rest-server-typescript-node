"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
class Server {
    constructor() {
        this.apiPathsEndpoint = {
            users: '/api/ts/v1/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        //Important methods which have preference in the middleware stack
        this.middlewares();
        //My routes 
        this.routes();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('./public'));
    }
    routes() {
        this.app.use(this.apiPathsEndpoint.users, userRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
}
exports.Server = Server;
exports.default = Server;
//# sourceMappingURL=models.js.map