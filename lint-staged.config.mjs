/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
    "*.{js,ts,tsx}": ["npm run format", "npm run lint"],
};
