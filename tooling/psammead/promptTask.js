const { prompt } = require('enquirer');

const promptPackagesSelect = require('./promptPackagesSelect');

module.exports = ({ task }) => {
  const isVersioning = task.includes('version package(s)');
  const action = isVersioning ? 'to version' : 'changelogs to update';
  const message = isVersioning
    ? "Made some sweet changes, eh? OK, let's sort the versioning."
    : "OK, let's update the changelogs!";

  return prompt({
    message,
    type: 'select',
    name: 'pkgSelectMethod',
    choices: [
      `Select package(s) ${action} (changed packages will be pre-selected)`,
      `Enter package(s) ${action} (comes with auto-complete)`,
    ],
  })
    .then(promptPackagesSelect)
    .then(packages => ({
      task: isVersioning ? 'versioning' : 'changelogs',
      packages,
    }));
};