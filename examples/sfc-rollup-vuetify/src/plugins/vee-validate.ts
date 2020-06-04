import { ValidationProvider, extend } from 'vee-validate';
interface BaseObject {
  [key: string]: any;
}

const customValidation = {
  params: ['errorMsg'],
  // @ts-ignore
  validate: (value: any, { errorMsg }: BaseObject) => ({
    required: true,
    valid: !errorMsg
  }),
  // @ts-ignore
  message: (field: any, { errorMsg }: any) => errorMsg,
  computesRequired: true
};

export default {
  install(Vue: any) {
    extend('customValidation', customValidation);
    Vue.component('ValidationProvider', ValidationProvider);
  }
};
