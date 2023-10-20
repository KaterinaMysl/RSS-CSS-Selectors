module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
};
