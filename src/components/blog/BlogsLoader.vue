<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 col-md-4 col-lg-4 py"
        v-for="blog in blogs"
        :key="blog.id"
        @click="view(blog.id)"
      >
        <div class="card">
          <img
            class="card-img-top img-responsive img-height"
            :src="blog.image"
            alt="Card image cap"
          />
          <div class="card-body">
            <div class="blog-label">
              {{ blog.category }} -
              <span>{{ new Date(blog.date).toDateString() }}</span>
            </div>
            <div class="blog-title">
              {{ blog.title }}
            </div>

            <!-- <div class="icon"></div> -->
            <!-- <span class="blog-author"
              >Written by: <b>{{ blog.author }}</b></span
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    // methods

    // dispatching

    store.dispatch("loadBlogs");
    const view = (id) => {
      router.push("/blog/" + id);
    };
    const blogs = computed(() => store.getters.getBlogs);
    const haha = computed((date) => {
      return date + "fffgh";
    });
    // console.log(blogs)
    return {
      view,
      blogs,
      haha,
    };
  },
};
</script>
<style scoped>
.py {
  /* padding-top:20px; */
  margin-bottom: 25px;
}
.rounded {
  border-radius: 5px;
}
.card {
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.card-body {
  padding: 10px;
}
.img-height {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.blog-label {
  font-weight: 700;
  font-size: 13px;
  padding: 2px;
  color: black;
  text-transform: capitalize;
}
.blog-label span {
  font-weight: 400;
  font-size: 13px;
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
</style>
