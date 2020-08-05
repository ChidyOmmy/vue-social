<template>
  <div id="Home">
    <div class="icon">
      <v-icon size="100" class="logo">mdi-whatsapp</v-icon>
    </div>
    <v-footer color="white" fixed class="pa-5">
      <div class="mx-auto">
        <p class="lead center grey--text">
          from
        </p>
        <h3 class="lead green--text">FACEBOOK</h3>
      </div>
    </v-footer>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    created() {
      const load = () => {
        this.$router.push({
          path: '/list'
        })
      }
      setTimeout(load, 500)
    }
  }
  </script>
  <style scoped>
    .icon {
      position: fixed;
      top: 10%;
      left: 30%;
    }
    .logo {
      font-size: 300%;
      color: green;
      border-radius: 50%;
      border: 6.5px solid white;
      box-shadow: 0px 0px 3px 2px grey;
    }
    .center {
      text-align: center;
    }

  </style>