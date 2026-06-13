import chalk from 'chalk';

export const success =
(
    message: string
) => {

    console.log(
        chalk.green(
            `✓ ${message}`
        )
    );
};

export const failure =
(
    message: string
) => {

    console.log(
        chalk.red(
            `✗ ${message}`
        )
    );
};

export const info =
(
    message: string
) => {

    console.log(
        chalk.blue(
            message
        )
    );
};