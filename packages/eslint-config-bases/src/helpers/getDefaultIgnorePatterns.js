const getDefaultIgnorePatterns = () => {
  return ['**/node_modules', '**/.cache', 'build', 'dist'];
};

module.exports = {
  getDefaultIgnorePatterns,
};
