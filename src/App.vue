<template>
  <div id="app">
    <div class="top">
      <return></return>
    </div>
    <div class="mid">
      <overlay duration="2" color="#27313e">
        <font-preview></font-preview>
      </overlay>

      <weight-list></weight-list>
    </div>

    <div class="bot">
      <themes></themes>
      <selected></selected>
    </div>
  </div>
</template>

<script>
import Overlay from './components/Overlay'
import Return from './components/Return'
import Selected from './components/Selected'
import WeightList from './components/WeightList'
import Themes from './components/Themes'
import FontPreview from './components/FontPreview'

export default {
  name: 'app',
  components: {
    Overlay,
    Return,
    Selected,
    WeightList,
    Themes,
    FontPreview
  },
  methods: {
    bleet () {
      console.log('cake')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  position: relative;
}

img {
  max-width: 100%;
}
</style>
