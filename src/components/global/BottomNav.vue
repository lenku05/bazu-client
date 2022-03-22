<template>
  <nav class="nav-bottom hide-sm hide-md hide-lg">
    <router-link to="/" class="nav__link">
      <i class="material-icons nav__icon">home</i>
      <span class="nav__text">Home</span>
    </router-link>
    <router-link to="/about" class="nav__link">
      <i class="material-icons nav__icon">help</i>
      <span class="nav__text">About</span>
    </router-link>
    <router-link to="/blogs" class="nav__link">
      <i class="material-icons nav__icon">book</i>
      <span class="nav__text">Blogs</span>
    </router-link>
    <router-link to="/contact" class="nav__link">
      <i class="material-icons nav__icon">phone</i>
      <span class="nav__text">Contact</span>
    </router-link>

    <!-- <a href="#" class="nav__link">
      <i class="material-icons nav__icon">lock</i>
      <span class="nav__text">Privacy</span>
    </a> -->
    <!-- <router-link to="/login" class="nav__link">
      <i class="material-icons nav__icon">settings</i>
      <span class="nav__text">Settings</span>
    </router-link> -->
  </nav>
</template>

<script>
export default {};
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

@media only screen and (min-width: 576px) {
  .nav-bottom {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .nav-bottom {
    position: fixed;
    min-height: 56px;
    bottom: 0;
    width: 100%;
    height: 3.3rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
  }

  .nav__link {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none !important;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
  }

  .nav__link:hover {
    background-color: #eeeeee;
  }

  .nav__icon {
    font-size: 18px;
  }

  .router-link-exact-active {
    color: #4a4ae4;
  }

  @media only screen and (max-width: 41rem) {
    body {
      margin: 0 0 0 0;
    }
  }
  @media only screen and (min-width: 41rem) {
    body {
      margin: 0 0 0 0;
    }
  }
}
</style>
