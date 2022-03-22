<template>
  <TopNavbar />
  <router-view v-slot="{ Component }" class="body">
    <transition name="fadeIn">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
  <BottomNav />
</template>
<script>
import Footer from "./components/global/Footer.vue";
import BottomNav from "./components/global/BottomNav.vue";
import TopNavbar from "./components/global/TopNavbar.vue";
import { useStore } from "vuex";
export default {
  components: {
    Footer,
    BottomNav,
    TopNavbar,
  },
  setup() {
    const store = useStore();
    store.dispatch("loadTrending");
    store.dispatch("loadBlogs");
  },
};
</script>
<style>
* {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
/* .body {
  background-color: #f8f9fa;
} */
/* @font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/Raleway-VariableFont_wght.ttf");
} */

* {
  /* font-family: "Raleway", sans-serif;
   */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeIn-enter-active {
  animation: fadeIn 0.6s ease-out;
}

.fadeIn-leave-active {
  animation: fadeOut 0s ease-in delay 0.2s;
}
</style>
