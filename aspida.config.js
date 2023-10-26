module.exports = {
  input: 'api',
  outputEachDir: true,
  openapi: {
    inputFile: './schema/build/openapi.yml',
    outputDir: 'src/api',
  },
};
