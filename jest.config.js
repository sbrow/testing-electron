const moduleFileExtensions = ["ts","tsx","js","jsx","json"];

transform: {
".tsx?": "ts-jest",
},

module.exports = {
    collectCoverageFrom: [`src/**/*.${moduleFileExtensions}`]
};
