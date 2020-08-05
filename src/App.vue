<template>
  <v-app>
    <v-content>
      <v-fade-transition hide-on-leave leave-absolute>
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: () => ({
      //
    }),
  };
  </script>