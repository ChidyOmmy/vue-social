<template>
  <div id="Header">
    <div class="header text-light w-100 ">
     <i class="fa fa-camera-retro fa-3x"></i>
     <h1>SocialApp</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
  .header{
    background-color: blue;
    display: flex;
   justify-content:flex-start;
   padding:10px;
   margin-top: 0;
  }
  .fa-camera-retro{
    margin-right: 5px;
  }
</style>