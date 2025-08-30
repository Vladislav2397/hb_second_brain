import { AppError } from './errors'

/**
 * Функция для получения env переменной
 * @throws Error - когда не находит указанную переменную
 */
export const getEnv = (key: keyof EnvKeys): string => {
    if (!(key in import.meta.env)) {
        throw new AppError(`Environment variable \`${key}\` was not settled`)
    }

    return import.meta.env[key]
}

/**
 * Функция для получения текущего ключа сборки
 *  для того что бы единым образом контролировать этот процесс
 *
 * @example
 * if (isAppMode('development')) {
 *   showDebugInfo()
 * }
 */
export const isAppMode = (
    mode: 'development' | 'production' | 'staging',
): boolean => {
    switch (mode) {
        case 'production':
            return import.meta.env.PROD
        case 'staging':
            return import.meta.env.MODE === 'staging'
        default:
            return import.meta.env.DEV
    }
}

export type EnvKeys = Readonly<{
    VITE_APP_TITLE: string
    VITE_API_DOMAIN: string
}>
