/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
    "*.{js,ts,tsx}": stagedFiles => ["npm run format", "npm run lint"],
};
