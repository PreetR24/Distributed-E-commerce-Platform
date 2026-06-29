"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrpcProtoPath = void 0;
const path_1 = __importDefault(require("path"));
const getGrpcProtoPath = (proto) => {
    if (process.env.NODE_ENV === 'production') {
        return path_1.default.resolve(process.cwd(), `shared/grpc-protos/${proto}`);
    }
    return path_1.default.resolve(__dirname, `../../../shared/grpc-protos/${proto}`);
};
exports.getGrpcProtoPath = getGrpcProtoPath;
