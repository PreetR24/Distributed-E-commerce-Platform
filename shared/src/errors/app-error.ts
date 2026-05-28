export class AppError extends Error {

    public code: string;

    public statusCode: number;

    constructor(
        code: string,
        statusCode: number,
        message: string
    ) {

        super(message);

        this.code = code;

        this.statusCode = statusCode;

        Error.captureStackTrace(
            this,
            this.constructor
        );
    }
}