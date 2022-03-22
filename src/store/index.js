import { createStore } from "vuex";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  where,
  // startAfter,
} from "firebase/firestore";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    blogs: [],
    files: [],
    trending: [],
    last: "",
  },
  getters: {
    getBlogs(state) {
      return state.blogs;
    },
    getTrending(state) {
      return state.trending;
    },
  },
  mutations: {
    LOAD_FILES(state, payload) {
      state.files = payload;
    },
    LOAD_BLOGS(state, payload) {
      state.blogs = payload;
    },
    PAGINATE_BLOGS(state, payload) {
      state.last = payload;
    },
    LOAD_TRENDING(state, payload) {
      state.trending = payload;
    },
  },
  actions: {
    async loadBlogs({ commit }) {
      try {
        const ref = collection(db, "blogs");
        const q = query(ref, orderBy("date", "desc"), limit(12));
        const documentSnapshots = await getDocs(q);
        const blogs = [];
        documentSnapshots.forEach((doc) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            body: doc.data().body,
            category: doc.data().category,
            date: doc.data().date,
            image: doc.data().image,
          };
          blogs.push(data);
        });
        const lastVisible =
          documentSnapshots.docs[documentSnapshots.docs.length - 1];
        // console.log("last", lastVisible);
        // commiting
        commit("LOAD_BLOGS", blogs);
        commit("PAGINATE_BLOGS", lastVisible);
      } catch (error) {
        console.log(error);
      }
    },
    async loadFiles({ commit }) {
      try {
        const ref = collection(db, "files");
        const documentSnapshots = await getDocs(ref);
        const files = [];
        documentSnapshots.forEach((doc) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            date: doc.data().date,
            file: doc.data().file,
          };
          files.push(data);
        });
        commit("LOAD_FILES", files);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    },
    async loadTrending({ commit }) {
      try {
        const ref = collection(db, "blogs");
        const q = query(ref, where("category", "==", "trending"), limit(3));
        const documentSnapshots = await getDocs(q);
        const blogs = [];
        documentSnapshots.forEach((doc) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            body: doc.data().body,
            category: doc.data().category,
            date: doc.data().date,
            image: doc.data().image,
          };
          blogs.push(data);
          // console.log("trending")
        });

        // commiting
        commit("LOAD_TRENDING", blogs);
        // console.log("hdhdhdh")
      } catch (error) {
        console.log(error);
      }
    },
  },
});
