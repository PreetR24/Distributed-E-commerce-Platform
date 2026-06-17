"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsFailedCounter = exports.paymentsSuccessCounter = exports.ordersCreatedCounter = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.ordersCreatedCounter = new prom_client_1.default.Counter({
    name: 'orders_created_total',
    help: 'Total Orders Created'
});
exports.paymentsSuccessCounter = new prom_client_1.default.Counter({
    name: 'payments_success_total',
    help: 'Successful Payments'
});
exports.paymentsFailedCounter = new prom_client_1.default.Counter({
    name: 'payments_failed_total',
    help: 'Failed Payments'
});
