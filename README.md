## How

```
$ ignite new MyAwesomeApp -b scene-components-boilerplate
```

## What

It's a fork of [ignite-ir-boilerplate](https://github.com/infinitered/ignite-ir-boilerplate) with some tuning.

## Why

Components tree:

```
Components
|__common
   |__MyComponent
      |__MyComponent.js
      |__styles.js
      |__package.json
      |__MyComponents.story.js
```
You can use generators to create scenes, components, redux related files and sagas.
You can put scene or component to a custom folder.
Creates components and scenes as packages.


## Generators
**Component**
```
$ ignite g component MyAwesomeComponent
```
or put it to some folder inside Components directory, this works too:
```
$ ignite g component common/MyAwesomeComponent
```

**Scene**
```
$ ignite g scene MyAwesomeScene
```

**Redux**
(copied from [ignite-ir-boilerplate](https://github.com/infinitered/ignite-ir-boilerplate))
```
$ ignite g redux someRedux
```

**Saga**
(copied from [ignite-ir-boilerplate](https://github.com/infinitered/ignite-ir-boilerplate))
```
$ ignite g saga someSaga
```
