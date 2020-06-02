import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.green.darken3,
        accent: colors.grey.darken1,
        error: colors.green.accent2,
        info: colors.blue.base,
        success: colors.green.base,
        warning: colors.amber.base,
        primary_text: colors.grey.darken4,
        secondary_text: colors.grey.darken2,
        divider: "#B6B6B6"
      }
    }
  }
});
