export class AppError extends Error {
    constructor(message: string) {
        console.debug(
            `%c[AppError]\n${message}`,
            'color: red; font-weight: bold; padding: 6px',
        )
        super(`${message}`)
        this.name = 'AppError'
    }
}
