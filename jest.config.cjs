module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!(genericsuite|bson|react-syntax-highlighter|react-markdown|refractor|hastscript|hast-.*|unist-.*|unified|bail|is-plain-obj|is-.*|trough|vfile|vfile-message|comma-separated-tokens|property-information|space-separated-tokens|web-namespaces|parse-entities|character-entities.*|character-reference-invalid|micromark.*|decode-named-character-reference|ccount|escape-string-regexp|markdown-table|remark.*|rehype.*|mdast.*|devlop|longest-streak|trim-lines|zwitch)/)",
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "<rootDir>/src/lib/test-helpers/styleMock.js",
    },
};