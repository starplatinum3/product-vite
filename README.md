# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

发布商品的请求 URL 是：http://82.156.200.100:82/item/publishpromo?id=1（最后的 id 根据你在链接上看到的自己来就行）

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

vue add element-plus

git  add .
git commit -m "publishpromo"
git push origin master

⚓  Running completion hooks...
 ERROR  TypeError: Cannot read property 'replace' of undefined
TypeError: Cannot read property 'replace' of undefined
    at D:\proj\vue\vite-project\node_modules\vue-cli-plugin-element-plus\generator\index.js:45:45
    at runGenerator (D:\npm\prefix\node_modules\@vue\cli\lib\invoke.js:132:13)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async invoke (D:\npm\prefix\node_modules\@vue\cli\lib\invoke.js:92:3)


    
Debugger attached.
failed to load config from D:\proj\vue\vite-project\vite.config.ts
error when starting dev server:
Error: The package "esbuild-windows-64" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" flag. The "optionalDependencies" package.json feature is used
by esbuild to install the correct binary executable for your current platform.
    at generateBinPath (D:\proj\vue\vite-project\node_modules\esbuild\lib\main.js:1816:15)
    at esbuildCommandAndArgs (D:\proj\vue\vite-project\node_modules\esbuild\lib\main.js:1872:31)
    at ensureServiceIsRunning (D:\proj\vue\vite-project\node_modules\esbuild\lib\main.js:2034:25)
    at Object.build (D:\proj\vue\vite-project\node_modules\esbuild\lib\main.js:1927:26)
    at bundleConfigFile (D:\proj\vue\vite-project\node_modules\vite\dist\node\chunks\dep-59dc6e00.js:61872:34)
    at loadConfigFromFile (D:\proj\vue\vite-project\node_modules\vite\dist\node\chunks\dep-59dc6e00.js:61849:35)
    at resolveConfig (D:\proj\vue\vite-project\node_modules\vite\dist\node\chunks\dep-59dc6e00.js:61376:34)
    at createServer (D:\proj\vue\vite-project\node_modules\vite\dist\node\chunks\dep-59dc6e00.js:59783:26)
    at CAC.<anonymous> (D:\proj\vue\vite-project\node_modules\vite\dist\node\cli.js:688:30)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
Waiting for the debugger to disconnect...
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vite-project@0.0.0 dev: `vite`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vite-project@0.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     D:\npm\cache\_logs\2022-06-29T01_50_55_417Z-debug.log
Waiting for the debugger to disconnect...
