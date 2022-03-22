<template>
  <div class="home">
    <!-- header -->
    <!-- Header -->
    <header id="header" class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="text-container">
              <h1 class="h1-large">ELIJAH KEEN NAINI</h1>
              <p class="p-large">"Be The Change You Want To See"</p>

              <a class="btn-outline-lg page-scroll" href="#intro">Discover</a>
            </div>
            <!-- end of text-container -->
          </div>
          <!-- end of col -->
          <div class="col-lg-7">
            <div class="image-container">
              <img
                class="img-fluid"
                src="@/assets/vectors/logo1.jpg"
                alt="alternative"
              />
            </div>
            <!-- end of image-container -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </header>
    <!-- end of header -->
    <!-- end of header -->
    <!-- Introduction -->
    <div id="intro" class="basic-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <img
              class="img-fluid"
              src="@/assets/vectors/bazuu.png"
              alt="alternative"
            />
          </div>
          <!-- end of col -->
          <div class="col-lg-5">
            <div class="text-container">
              <h2>"Changing lifes for a better tomorrow"</h2>
              <p>
                Elijah Keen Naini also refered to as 'The Bazu' believes in
                changing the lives of his community members for a better future;
                He has swapped around the lives of Olgulului Olalarashi Group
                Ranch members through a peaceful subdivision of about 150,000
                acres of Ranch Land and is currently fast tracking the
                processing of land title deeds for the 90% of members who have
                been allocated their share of the Ranch land.
              </p>
              <a class="btn-solid-reg" @click="go('about')">Read More</a>
            </div>
            <!-- end of text-container -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of basic-1 -->
    <!-- end of introduction -->

    <!-- trending section -->
    <section class="main">
      <h2 class="heading">The bazu impact</h2>
      <!-- <div class="subheading">hot stories on our headlines today</div> -->
      <!-- <hr class="container" /> -->
      <div class="container trending">
        <div class="row">
          <div
            class="col-sm-12 col-md-4 col-lg-4 py"
            v-for="trend in trending"
            :key="trend.id"
            @click="view(trend.id)"
          >
            <div class="card">
              <img
                class="card-img-top rounded img-responsive img-height"
                :src="trend.image"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="blog-label">
                  {{ trend.category }} -
                  <span>{{ new Date(trend.date).toDateString() }}</span>
                </div>
                <div class="blog-title">
                  {{ trend.title }}
                </div>

                <!-- <div class="icon"></div> -->
                <!-- <span class="blog-author"
                  >Written by: <b>{{ trend.author }}</b></span
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- more blogs -->
    <div class="center">
      <button @click="go('blogs')" class="btn-solid-reg">See more blogs</button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    // methods
    const go = (route) => {
      router.push("/" + route);
    };
    // dispatching
    const view = (id) => {
      router.push("/blog/" + id);
    };
    const trending = computed(() => store.state.trending);
    // store.dispatch("loadTrending");

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        const trending = entries[0];
        if (trending.isIntersecting) {
          // Do something cool here
          // console.log("loading the trending posts");
        }
      });
      const trending = document.querySelector(".trending");
      observer.observe(trending);
    });
    return {
      go,
      view,
      trending,
    };
  },
};
</script>

<style scoped>
.home {
  /* min-height: 100vh; */
  /* margin-top: 50px;
  margin-bottom: 55px; */
}

.center {
  text-align: center;
  padding: 25px;
}
.landing {
  border-radius: 180px;
  width: 350px;
  margin-top: 100px;
  border: 5px white solid;
  box-shadow: 1px 5px 15px 1px grey;
}
.img-height {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.header-text span {
  color: rgb(230, 5, 5);
  font-weight: 600;
  /* border-bottom: 8px dotted; */
}

.heading {
  letter-spacing: 2px;
  text-transform: capitalize;
  text-align: center;
  /* font-size: 36px; */
  /* font-weight: 600; */
}
.subheading {
  letter-spacing: 7px;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
}
/* hr {
  padding-bottom: 50px;
} */
.rounded {
  border-radius: 5px;
}
.card {
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.card-title {
  padding-left: 20px;
  padding-top: 15px;
  font-size: 16px;
  font-weight: 700;
}
.card-body {
  padding: 10px;
  font-size: 16px;
}
span {
  text-decoration: none;
}
.blog-label {
  font-weight: 700;
  font-size: 12px;
  padding: 2px;
  color: black;
  text-transform: capitalize;
}
.blog-label span {
  font-weight: 400;
  font-size: 12px;
  padding: 2px;
  color: grey;
}
.blog-title {
  font-weight: 700;
  font-size: 20px;
  padding: 2px;
  color: black;
  text-transform: capitalize;
}
.blog-author {
  display: inline;
  font-size: 12px;
  text-transform: capitalize;
}
.icon {
  width: 10px;
  height: 10px;
  background-color: grey;
  border-radius: 50px;
  display: inline-block;
  padding-top: 3px;
}
.py {
  /* padding-top:20px; */
  margin-bottom: 25px;
}
p {
  font-size: 16px;
}
.center {
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
  /* margin-bottom: 45px; */
}
.outline {
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  /* box-shadow: 1px 2px 3px 2px black; */
}
@media only screen and (max-width: 576px) {
  .header-text {
    padding-top: 150px;
    padding-left: 25px;
    font-size: 44px;
    text-transform: capitalize;
    font-weight: 600;
  }
  .header-text span {
    color: rgb(230, 5, 5);
    font-weight: 600;
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
