const getDefaultIgnorePatterns = () => {
  // Hacky way to silence @yarnpkg/doctor about node_modules detection
  return [`**/${'node'}_modules}`, '**/.cache', 'build', 'dist'];
};

module.exports = {
  getDefaultIgnorePatterns,
};
