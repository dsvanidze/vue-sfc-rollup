# ATTENTION
if you use `npm link`, I would advise you to not use it. It causes a lot of problems with vue bundles. Here is the great answer of @vatson, which saved me several hours of effort https://github.com/vatson/rollup-plugin-vuetify/issues/6#issuecomment-638515025. I use `npm pack` and it works great. Here is a good explanation how to use `npm pack` https://rimdev.io/npm-packages-and-tgz-files/.

# How to use this bundle
Before you make your build, please test, if this bundled vue + vuetify + vee-validate component does work for you!

## 1. Step
`git clone https://github.com/dsvanidze/vue-sfc-rollup.git`

## 2. Step
`cd vue-sfc-rollup/examples/sfc-rollup-vuetify`

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
