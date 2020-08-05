<template>
  <div id="StatusView">
    <div class="progress-group pa-1">
      <v-progress-linear
        v-for="slide in slides"
        :value="slide.value"
        :key="i"
        color="white"
        class="progress"
        background-color="grey"
        background-opacity="1"
        rounded></v-progress-linear>
    </div>
    <v-carousel
      cycle
      class="status"
      height="100%"
      :show-arrows="false"
      touchless
      @change="call"
      interval="3000"
      hide-delimiters
      >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        >
        <v-sheet
          :color="colors[i]"
          height="100%"
          >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            ite
            >
            <div class="display-3 ma-0 pa-0">
              {{ slide.content }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentnumber: 0,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [{
          value: 0,
          content: 'First'
        },
          {
            value: 0,
            content: 'Second'
          },
          {
            value: 0,
            content: 'Third'
          },
          {
            value: 0,
            content: 'Fourth'
          }],
      }
    },
    methods: {},
    mounted() {
      var i = 0
      const lap = () => {
        this.slides[i].value += 4.25
        if (this.slides[i].value >= 100) {
          i++
          if (i >= this.slides.length) {
            clearInterval(time)
            this.$router.push({
              path: '/list'
            })
          }
        }
      }
      const time = setInterval(lap, 125)
    }
  }
  </script>
  <style scoped>
    .status {
      position: absolute;
      height: 100%;
      top: 0px;
      bottom: 0px;
    }
    .progress-group {
      width: 100%;
      min-width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 0px;
      z-index: 1;
    }
    .progress {
      margin: 2px;
    }

  </style>