<template>
  <div>
    <template v-if="$store.getters.isLoggedIn === true">
      <div class="page-wrapper">
        <router-view :key="$route.path" name="header"></router-view>

        <div class="page-container">
          <router-view :key="$route.path" name="sidebar"></router-view>
          <div class="page-content-wrapper">
            <router-view :key="$route.fullPath" ></router-view>
          </div>
        </div>

        <router-view :key="$route.path" name="footer"></router-view>
      </div>
    </template>

    <template v-else>
      <router-view :key="$route.fullPath" ></router-view>
    </template>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>
