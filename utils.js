const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const pkg = readPkgUp.sync() || {};

export const pkgJsonContains = (dep) => {
  return (
    dotProp.get(pkg, `packageJson.dependencies.${dependency}`) ||
    dotProp.get(pkg, `packageJson.devDependencies.${dependency}`)
  );
};
