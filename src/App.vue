<template>
  <div id="app">
    <div class="top">
      <return v-show="show"></return>
    </div>
    <div class="middle">
      <font-preview></font-preview>
      <weight-list v-show="show"></weight-list>
    </div>
    <div class="bottom">
      <themes v-show="show"></themes>
      <selected v-show="show"></selected>
    </div>
  </div>
</template>

<script>
import Return from './components/Return'
import Selected from './components/Selected'
import WeightList from './components/WeightList'
import Themes from './components/Themes'
import FontPreview from './components/FontPreview'

export default {
  name: 'app',
  components: {
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

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

#app {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  width: 1400px;
  height: 850px;
  padding: 1% 3%;
  background: #27313e;
  color: #e5e5ea;
  border-radius: 5px;
  overflow:  hidden;
  display: flex;
  flex-direction: column;
}

.top {
  flex-grow: 1;
}

.middle,
.bottom {
  display: flex;
  flex-grow: 1;

}
</style>
