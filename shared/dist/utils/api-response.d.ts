export declare const successResponse: (message: string, data?: unknown) => {
    success: boolean;
    message: string;
    data: unknown;
};
export declare const errorResponse: (message: string) => {
    success: boolean;
    message: string;
};
