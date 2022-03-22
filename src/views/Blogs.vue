<template>
  <!-- header -->
  <!-- <section class="header">
    <div class="header-text">hot topics<br /><span>& stories.</span></div>
  </section> -->

  <!-- trending section -->
  <section class="main">
    <h2 class="heading">blogs</h2>
    <!-- <div class="subheading">read news from within and outside the county</div> -->
    <!-- <hr class="container" /> -->
    <BloagsLoader />
  </section>
  <div class="loadingblogs"></div>
  <!-- <div class="loader">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
</template>

<script>
import { defineAsyncComponent, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
const BloagsLoader = defineAsyncComponent(() =>
  import("../components/blog/BlogsLoader.vue")
);
export default {
  components: { BloagsLoader },
  setup() {
    const router = useRouter();
    const go = (id) => {
      router.push("/blog/" + id);
    };
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        const loadingblogs = entries[0];
        if (loadingblogs.isIntersecting) {
          // Do something cool here
          console.log("loading the loadingblogs posts");
        }
      });
      const loadingblogs = document.querySelector(".loadingblogs");
      observer.observe(loadingblogs);
    });
    return {
      go,
    };
  },
};
</script>

<style scoped>
.header {
  height: 100vh;
  background-image: url("../assets/vectors/background.png");

  background-size: cover;
  background-position: 0 0;
  background-attachment: fixed;
  background-color: rgb(235, 233, 233);
}
.header-text {
  padding-top: 190px;
  padding-left: 150px;
  font-size: 120px;
  text-transform: capitalize;
  font-weight: 600;
}
.header-text span {
  color: rgb(236, 24, 70);
  font-weight: 300;
  border-bottom: 8px dotted;
}
.main {
  padding-top: 55px;
  padding-bottom: 50px;
  min-height: 100vh;
}
.heading {
  letter-spacing: 2px;
  text-transform: capitalize;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
}
.subheading {
  letter-spacing: 7px;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
}
hr {
  padding-bottom: 50px;
}

.center {
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
  padding-bottom: 45px;
}
.outline {
  padding: 12px 15px;
  background-color: #000;
  color: white;
  border: none;
  box-shadow: 1px 2px 3px 2px black;
}
@media only screen and (max-width: 576px) {
  .header-text {
    padding-top: 200px;
    padding-left: 25px;
    font-size: 60px;
    text-transform: capitalize;
    font-weight: 600;
  }
  .header-text span {
    color: rgb(236, 24, 70);
    font-weight: 500;
    border-bottom: 8px dotted;
    font-weight: 300;
  }
  .heading {
    letter-spacing: 2px;
    text-transform: capitalize;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
  .subheading {
    letter-spacing: 7px;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
  }
}
</style>
