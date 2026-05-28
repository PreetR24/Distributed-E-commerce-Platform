export declare class AppError extends Error {
    code: string;
    statusCode: number;
    constructor(code: string, statusCode: number, message: string);
}
