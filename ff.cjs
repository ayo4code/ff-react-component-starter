const init = async (context, { generateFiles }) => {
  generateFiles([
    'example',
    'src',
    '.eslintrc.js',
    '.prettierrc.js',
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