'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Vue=_interopDefault(require('vue')),veeValidate=require('vee-validate'),lib=require('vuetify/lib');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var customValidation = {
  params: ['errorMsg'],
  // @ts-ignore
  validate: function validate(value, _ref) {
    var errorMsg = _ref.errorMsg;
    return {
      required: true,
      valid: !errorMsg
    };
  },
  // @ts-ignore
  message: function message(field, _ref2) {
    var errorMsg = _ref2.errorMsg;
    return errorMsg;
  },
  computesRequired: true
};
var VeeValidate = {
  install: function install(Vue) {
    veeValidate.extend('customValidation', customValidation);
    Vue.component('ValidationProvider', veeValidate.ValidationProvider);
  }
};var script = Vue.extend({
  components: {
    VTextField: lib.VTextField,
    VCol: lib.VCol,
    VRow: lib.VRow
  },

  name: 'ChildOne',

  props: {
    value: String,
    validation: Object
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-row', [_c('v-col', [_c('ValidationProvider', {
    attrs: {
      "rules": _vm.validation
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var errors = ref.errors;
        return [_c('v-text-field', {
          attrs: {
            "label": "Child One (changes parent's label)",
            "value": _vm.value,
            "error-messages": errors[0]
          },
          on: {
            "input": function input($event) {
              return _vm.$emit('input', $event);
            }
          }
        })];
      }
    }])
  })], 1)], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-6b9633ea";
/* module identifier */

var __vue_module_identifier__ = "data-v-6b9633ea";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var script$1 = Vue.extend({
  components: {
    VTextField: lib.VTextField,
    VCol: lib.VCol,
    VRow: lib.VRow
  },

  name: 'ChildTwo',

  props: {
    value: String,
    validation: Object
  }
});/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-row', [_c('v-col', [_c('ValidationProvider', {
    attrs: {
      "rules": _vm.validation
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var errors = ref.errors;
        return [_c('v-text-field', {
          attrs: {
            "label": "Child Two (changes parent's color)",
            "value": _vm.value,
            "error-messages": errors[0]
          },
          on: {
            "input": function input($event) {
              return _vm.$emit('input', $event);
            }
          }
        })];
      }
    }])
  })], 1)], 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = "data-v-b20cdeea";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-b20cdeea";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var script$2 = Vue.extend({
  name: 'SfcRollupVuetifySample',
  // vue component name
  components: {
    ChildOne: __vue_component__,
    ChildTwo: __vue_component__$1,
    VTextarea: lib.VTextarea,
    VCol: lib.VCol,
    VRow: lib.VRow
  },
  props: {
    value: String,
    validation: Object
  },
  data: function data() {
    return {
      label: 'Sfc Rollup Vuetify Sample (Parent)',
      color: 'red'
    };
  }
});function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-row', [_c('v-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "sfc-rollup-vuetify-sample"
  }, [_c('ValidationProvider', {
    attrs: {
      "rules": _vm.validation
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var errors = ref.errors;
        return [_c('v-textarea', {
          attrs: {
            "value": _vm.value,
            "error-messages": errors[0],
            "label": _vm.label,
            "color": _vm.color
          },
          on: {
            "input": function input($event) {
              return _vm.$emit('input', $event);
            }
          }
        })];
      }
    }])
  }), _vm._v(" "), _c('child-one', {
    attrs: {
      "validation": {
        customValidation: {
          errorMsg: ''
        }
      }
    },
    model: {
      value: _vm.label,
      callback: function callback($$v) {
        _vm.label = $$v;
      },
      expression: "label"
    }
  }), _vm._v(" "), _c('child-two', {
    attrs: {
      "validation": {
        customValidation: {
          errorMsg: ''
        }
      }
    },
    model: {
      value: _vm.color,
      callback: function callback($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  })], 1)])], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0e70a8ff_0", {
    source: ".sfc-rollup-vuetify-sample[data-v-0e70a8ff]{max-width:700px;margin:0 auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-0e70a8ff";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-0e70a8ff";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,SfcRollupVuetifySample: __vue_component__$2});Vue.use(VeeValidate); // Import vue components
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installSfcRollupVuetify(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.SfcRollupVuetifySample=__vue_component__$2;exports.default=plugin;