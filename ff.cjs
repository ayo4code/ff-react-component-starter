const init = async (context, { generateFiles }) => {
  generateFiles([
    'example',
    'src',
    '.eslintrc',
    '.prettierrc',
    'README.md',
    'tsconfig.json',
    '.gitignore',
    'rollup.config.js',
    'tsconfig.json',
    'type.tsconfig.json',
    'package.json',
  ])
}
exports.init = init