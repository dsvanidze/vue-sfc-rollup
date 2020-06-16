# ATTENTION
if you use `npm link`, I would advise you to not use it. It causes a lot of problems with vue bundles. Here is the great answer of @vatson, which saved me several hours of effort https://github.com/vatson/rollup-plugin-vuetify/issues/6#issuecomment-638515025. I use `npm pack` and it works great. Here is a good explanation how to use `npm pack` https://rimdev.io/npm-packages-and-tgz-files/.

# How to use this repository locally

## 1. Step
`git clone https://github.com/dsvanidze/vue-sfc-rollup.git`

## 2. Step
navigate to the folder, where the example is

`cd vue-sfc-rollup/examples/sfc-rollup-vuetify`

# How to use this bundle
**Before you make your build, please test, if this bundled vue + vuetify + vee-validate component does work for you! If not, it makes no sense to build your bundle, because it won't work either.**

## 3. Step 
`pwd` or equivalent for windows to get your current absolute path. For UNIX it will look like this: **/...somepath.../vue-sfc-rollup/examples/sfc-rollup-vuetify**.

## 4. Step
Copy the path from 3. Step and then go to your project, where you want to use (test) this component. 

## 5. Step
In your project: `npm install /...somepath.../vue-sfc-rollup/examples/sfc-rollup-vuetify/sfc-rollup-vuetify-1.0.0.tgz`. **sfc-rollup-vuetify-1.0.0.tgz** is the vue component bundled as an npm package. 

It is possible that you see some npm peer-dependency warnings while installing the package, but it is not a problem! Everything should still work well.

After the package is installed as a normal npm package you can use it in your project.

## 6. Step
```js
// some-of-your-vue-files.vue
...
// import vue component
import { SfcRollupVuetifySample } from 'sfc-rollup-vuetify'
...

...
// use it as a local component as usual in vue/nuxt applications.
components: {
  SfcRollupVuetifySample
}
...
```


# How to build a bundle

## 7. Step
If all steps worked, go back to sfc-rollup-vuetify folder and install all npm dependencies 

`npm install`

## 8. Step
Run build process, which will create *sfc-rollup-vuetify.esm.js*, *sfc-rollup-vuetify.min.js*, *sfc-rollup-vuetify.ssr.js* in the /dist/ folder and *sfc-rollup-vuetify-1.0.0.tgz* in the root folder.

`npm run buid`

# How to build your bundle
If all steps above worked for you then you should be able to bundle your components. You need to take a look at several files in this project and copy & adjust them in your existing vue project. If you change several lines, it should work.

Copy *build/rollup.config.js* in your project

Copy & adjust these files to your project: 
1. *sfc-rollup-vuetify.d.ts*
2. *tsconfig.json*
3. *package.json*
4. *src/entry.ts*
5. *src/lib-components/index.ts*
6. *src/lib-components/sfc-rollup-vuetify-sample.vue*
