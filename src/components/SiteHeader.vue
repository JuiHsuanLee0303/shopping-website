<template>
  <div class="site-header">
    <div class="bg-white sticky-top">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
          <div>
            <router-link
              to="/"
              class="navbar-brand position-absolute"
              style="left: 50%; transform: translate(-50%, -50%); top: 50%"
              >Shopping</router-link
            >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/products" class="nav-link ps-0">商品列表</router-link>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <router-link to="/cart"><i class="bi bi-cart-fill"></i></router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

.site-header {
  width: 100%;
}

i {
  color: black;
}

.navbar-custom-scroll::-webkit-scrollbar {
  display: none;
}
.navbar-custom-scroll {
  -ms-overflow-style: none;
}

@include media-breakpoint-down(md) {
  .custom-header-md-open {
    position: absolute;
    top: 100%;
    right: 0px;
    left: 0px;
  }
}
</style>
