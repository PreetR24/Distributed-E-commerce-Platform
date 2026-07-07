"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheWrites = exports.cacheMisses = exports.cacheHits = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.cacheHits = new prom_client_1.default.Counter({
    name: "redis_cache_hits_total",
    help: "Redis Cache Hits"
});
exports.cacheMisses = new prom_client_1.default.Counter({
    name: "redis_cache_misses_total",
    help: "Redis Cache Misses"
});
exports.cacheWrites = new prom_client_1.default.Counter({
    name: "redis_cache_writes_total",
    help: "Redis Cache Writes"
});
