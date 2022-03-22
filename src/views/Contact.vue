<template>
  <div class="contact">
    <div class="container">
      <h2 class="heading">send us an email</h2>

      <!-- <hr class="container" /> -->
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <form>
            <input
              required
              type="text"
              class="form-control"
              placeholder="name"
              aria-describedby="basic-addon1"
            />

            <br />

            <input
              required
              type="email"
              class="form-control"
              placeholder="email"
              aria-describedby="basic-addon1"
            />

            <br />

            <input
              required
              type="text"
              class="form-control"
              placeholder="subject"
              aria-describedby="basic-addon1"
            />

            <br />

            <textarea
              required
              type="text"
              style="resize: none"
              class="form-control"
              placeholder="message"
              aria-describedby="basic-addon1"
              rows="8"
            />

            <br />

            <button required class="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.material-icons {
  font-size: 16px;
  padding-right: 10px;
}
a {
  text-decoration: none;
  font-size: 16px;
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
  padding-bottom: 20px;
}
.contact {
  min-height: 100vh;
  margin-top: 55px;
  margin-bottom: 55px;
}
</style>
