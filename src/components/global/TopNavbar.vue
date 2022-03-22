<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-light top-nav-collapse">
    <div class="container">
      <!-- Text Logo - Use this if you don't have a graphic logo -->
      <router-link class="navbar-brand logo-text page-scroll" to="/"
        >BAZU</router-link
      >

      <!-- Image Logo -->
      <!--  <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>-->

      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link page-scroll" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link page-scroll" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link page-scroll" to="/blogs"
              >Blogs</router-link
            >
          </li>

          <span class="nav-item">
            <router-link class="btn-solid-sm page-scroll" to="contact"
              >Contact</router-link
            >
          </span>
        </ul>
      </div>
      <!-- end of navbar-collapse -->
    </div>
    <!-- end of container -->
  </nav>
  <!-- end of navbar -->
  <!-- end of navigation -->
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    // function openMenu() {
    onMounted(() => {
      document
        .querySelector(".navbar-toggler-icon")
        .addEventListener("click", () => {
          var someElement = document.getElementById("navbarsExampleDefault");
          someElement.classList.add("open");
          // element.classList.remove('class');
          const el = document.querySelector(".nav-link");
          el.addEventListener("click", () => {
            var someElement = document.getElementById("navbarsExampleDefault");
            someElement.classList.remove("open");
          });
        });
    });

    // }
    return {
      // openMenu,
    };
  },
};
</script>

<style scoped></style>
