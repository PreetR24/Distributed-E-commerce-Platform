"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestDuration = exports.httpRequestCounter = exports.register = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
prom_client_1.default.collectDefaultMetrics();
exports.register = prom_client_1.default.register;
exports.httpRequestCounter = new prom_client_1.default.Counter({
    name: 'http_requests_total',
    help: 'Total HTTP Requests',
    labelNames: [
        'method',
        'route',
        'status'
    ]
});
exports.requestDuration = new prom_client_1.default.Histogram({
    name: 'http_request_duration_ms',
    help: 'Request Duration',
    labelNames: [
        'method',
        'route'
    ]
});
