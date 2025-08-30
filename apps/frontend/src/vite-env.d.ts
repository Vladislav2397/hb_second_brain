/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />

import type { EnvKeys } from './shared/lib/env'

interface ViteTypeOptions {
    // By adding this line, you can make the type of ImportMetaEnv strict
    // to disallow unknown keys.
    // strictImportMetaEnv: unknown
}

interface ImportMetaEnv extends EnvKeys {
    readonly MODE: 'production' | 'development' | 'staging'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
