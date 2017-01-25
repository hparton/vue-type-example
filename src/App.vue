<template>
  <div id="app" @click="toggle">
    <div class="top">
        <return :active="showReturn"></return>
    </div>
    <div class="middle">
      <font-preview></font-preview>
      <weight-list :active="showWeightList"></weight-list>
    </div>
    <div class="bottom">
      <themes :active="showThemes"></themes>
      <selected :active="showSelected"></selected>
      <preview-link :active="showPreviewLink"></preview-link>
    </div>
  </div>
</template>

<script>
import Return from './components/Return'
import Selected from './components/Selected'
import WeightList from './components/WeightList'
import Themes from './components/Themes'
import FontPreview from './components/FontPreview'
import PreviewLink from './components/PreviewLink'

export default {
  name: 'app',
  components: {
    Return,
    Selected,
    WeightList,
    Themes,
    FontPreview,
    PreviewLink
  },
  data () {
    return {
      showReturn: false,
      showFontPreview: false,
      showWeightList: false,
      showThemes: false,
      showSelected: false,
      showPreviewLink: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showThemes = !this.showThemes
      this.showReturn = !this.showReturn

      setTimeout(() => {
        this.showSelected = !this.showSelected
        this.showWeightList = !this.showWeightList

        setTimeout(() => {
          this.showPreviewLink = !this.showPreviewLink
        }, 1150)
      }, 300)
    }, 800)
  },
  methods: {
    toggle () {
      // this.showThemes = !this.showThemes
      // this.showReturn = !this.showReturn
      // this.showFontPreview = !this.showFontPreview
      // this.showWeightList = !this.showWeightList
      // this.showSelected = !this.showSelected
      // this.showPreviewLink = !this.showPreviewLink
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
  min-height: 75px; /* Temp style to fix the fontPreview illustration from jittering */
  flex-grow: 1;
}

.middle,
.bottom {
  display: flex;
  flex-grow: 1;
}

.bottom {
  min-height: 22px; /* Temp style to fix the fontPreview illustration from jittering */
  margin-bottom: 20px;
  align-items: center;
}
</style>
