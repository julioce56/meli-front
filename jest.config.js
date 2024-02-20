module.exports = { 
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js, jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    globals: { fetch } 
};