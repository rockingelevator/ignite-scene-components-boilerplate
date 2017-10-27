// Ignite CLI plugin for SceneComponentsBoilerplate
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()


const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  

  // Example of copying templates/SceneComponentsBoilerplate to App/SceneComponentsBoilerplate
  // if (!filesystem.exists(`${APP_PATH}/App/SceneComponentsBoilerplate`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/SceneComponentsBoilerplate`, `${APP_PATH}/App/SceneComponentsBoilerplate`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../SceneComponentsBoilerplate/SceneComponentsBoilerplate'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  

  // Example of removing App/SceneComponentsBoilerplate folder
  // const removeSceneComponentsBoilerplate = await context.prompt.confirm(
  //   'Do you want to remove App/SceneComponentsBoilerplate?'
  // )
  // if (removeSceneComponentsBoilerplate) { filesystem.remove(`${APP_PATH}/App/SceneComponentsBoilerplate`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../SceneComponentsBoilerplate/SceneComponentsBoilerplate'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

