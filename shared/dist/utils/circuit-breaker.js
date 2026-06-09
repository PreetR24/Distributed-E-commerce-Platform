"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircuitBreaker = void 0;
class CircuitBreaker {
    constructor() {
        this.failures = 0;
        this.isOpen = false;
        this.execute = async (fn) => {
            if (this.isOpen) {
                throw new Error('Circuit Open');
            }
            try {
                const result = await fn();
                this.failures = 0;
                return result;
            }
            catch (error) {
                this.failures++;
                if (this.failures >= 5) {
                    this.isOpen = true;
                    setTimeout(() => {
                        this.isOpen =
                            false;
                        this.failures =
                            0;
                    }, 30000);
                }
                throw error;
            }
        };
    }
}
exports.CircuitBreaker = CircuitBreaker;
