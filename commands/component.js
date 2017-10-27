// @cliDescription  Genereates component

const APP_PATH = process.cwd()

module.exports = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings

  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate component <name>\n`)
    print.info('A name is required.')
    return
  }

  const path = parameters.first
  const name = path.split('/').slice(-1)[0]
  //name = pascalCase(name)
  const props = { name, path }

  // Copies the `component.js.ejs` in your plugin's templates folder
  // into App/Things/${name}.js.
  const jobs = [
    {
      template: 'component.js.ejs',
      target: `App/Components/${path}/${name}.js`
    },
    {
      template: 'styles.js.ejs',
      target: `App/Components/${path}/styles.js`
    },
    {
      template: 'package.json.ejs',
      target: `App/Components/${path}/package.json`
    },
    {
      template: 'component.story.js.ejs',
      target: `App/Components/${path}/${name}.story.js`
    }
  ]

  ignite.patchInFile(`${APP_PATH}/App/Components/index.js`, {
    insert: `import ${name} from './${path}'`,
    before: `export {`
  })

  ignite.patchInFile(`${APP_PATH}/App/Components/index.js`, {
    insert: `  ${name},`,
    after: `export {`
  })

  ignite.patchInFile(`${APP_PATH}/App/Components/Stories.js`, {
    insert: `import './${path}.story'`,
    after: ''
  })

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props)
}
