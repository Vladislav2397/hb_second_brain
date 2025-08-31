import * as path from 'node:path'
import * as process from 'node:process'

import { generateApi } from 'swagger-typescript-api'

const TEMPLATE_PATH = './src/shared/api/templates'

function getPath(pathToFile) {
    return path.resolve(process.cwd(), pathToFile)
}

generateApi({
    input: getPath('./swagger.json'),
    output: getPath('./src/shared/api'),
    httpClientType: 'axios',
    fileName: 'api.ts',
    templatePaths: {
        base: getPath(`${TEMPLATE_PATH}/base`),
        default: getPath(`${TEMPLATE_PATH}/default`),
    },
    // Включаем валидацию контрактов
    unwrapResponseData: false,
    generateClient: true,
    debug: true,
    generateRouteTypes: false,
    generateResponses: true,
    modular: false,
    prettier: {
        printWidth: 120,
        tabWidth: 4,
        trailingComma: 'all',
        parser: 'typescript',
    },
})
