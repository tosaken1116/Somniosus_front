module.exports = {
  input: 'src/apis/', // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: './schemas/build/openapi.yml' },
};
