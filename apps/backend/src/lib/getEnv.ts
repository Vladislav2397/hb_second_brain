export const ENV_KEYS = {
    NODE_ENV: 'NODE_ENV',
} as const

export const getEnv = (key: keyof typeof ENV_KEYS) => {
    const validKey = ENV_KEYS[key]

    if (!validKey) {
        throw new Error(`Environment variable ${key} is not set`)
    }

    const value = process.env[validKey]

    if (!value) {
        throw new Error(`Environment variable ${key} is not set`)
    }

    return value
}

export const printEnvs = () => {
    const str = Object.keys(ENV_KEYS).map(
        (key) => `${key}: ${getEnv(key as keyof typeof ENV_KEYS)}`,
    )

    return JSON.stringify(str, null, 2)
}
