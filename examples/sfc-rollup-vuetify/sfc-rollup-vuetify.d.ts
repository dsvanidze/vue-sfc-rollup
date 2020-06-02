import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const SfcRollupVuetify: { install: InstallFunction };
export default SfcRollupVuetify;

export const SfcRollupVuetifySample: VueConstructor<Vue>;
