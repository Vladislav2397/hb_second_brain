/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
    '*': stagedFiles => [
        `tsc --noEmit`,
        `eslint .`,
        `prettier --write ${stagedFiles.join(' ')}`,
    ],
}
