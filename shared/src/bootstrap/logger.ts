export const bootstrapLog = (
    message: string
) => {

    console.log(
        `[Bootstrap] ${message}`
    );
};

export const bootstrapSuccess = (
    message: string
) => {

    console.log(
        `✅ [Bootstrap] ${message}`
    );
};

export const bootstrapWarning = (
    message: string
) => {

    console.log(
        `⚠️ [Bootstrap] ${message}`
    );
};

export const bootstrapError = (
    message: string
) => {

    console.log(
        `❌ [Bootstrap] ${message}`
    );
};