<template>
  <div id="app" @click="toggle" v-bind:class="'theme-' + store.theme">
    <info-pane :active="showInfoPane"></info-pane>
    <div class="top">
        <return :active="showReturn"></return>
    </div>
    <div class="middle">
      <font-preview :active="showFontPreview"></font-preview>
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
import store from './store'

import Return from './components/Return'
import Selected from './components/Selected'
import WeightList from './components/WeightList'
import Themes from './components/Themes'
import FontPreview from './components/FontPreview'
import PreviewLink from './components/PreviewLink'
import InfoPane from './components/InfoPane'

export default {
  name: 'app',
  components: {
    Return,
    Selected,
    WeightList,
    Themes,
    FontPreview,
    PreviewLink,
    InfoPane
  },
  data () {
    return {
      store: store.state,
      showReturn: false,
      showFontPreview: false,
      showWeightList: false,
      showThemes: false,
      showSelected: false,
      showPreviewLink: false,
      showInfoPane: false
    }
  },
  mounted () {
    this.showFontPreview = !this.showFontPreview

    setTimeout(() => {
      this.showThemes = !this.showThemes
      this.showReturn = !this.showReturn

      setTimeout(() => {
        this.showSelected = !this.showSelected
        this.showWeightList = !this.showWeightList

        setTimeout(() => {
          this.showPreviewLink = !this.showPreviewLink
        }, 1150)
      }, 320)
    }, 1550)
  },
  methods: {
    toggle () {
      // this.showThemes = !this.showThemes
      // this.showReturn = !this.showReturn
      // this.showFontPreview = !this.showFontPreview
      // this.showWeightList = !this.showWeightList
      // this.showSelected = !this.showSelected
      // this.showPreviewLink = !this.showPreviewLink
      // this.showInfoPane = !this.showInfoPane
    }
  }
}
</script>

<style>

html {
  background: #1b232a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*, *:before, *:after {
  box-sizing: border-box;
}

[v-cloak] {
  display: none
}

#app {
  display: flex;
  flex-direction: column;
  height: 850px;
  width: 1400px;
  padding: 20px 60px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translate(-50%, -50%);
  overflow:  hidden;
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  transition: color .3s cubic-bezier(0.165, 0.840, 0.440, 1.000),
              background .7s .3s cubic-bezier(0.785, 0.135, 0.150, 0.860);
}

#app.theme-dark {
  background: #27313e;
  color: #e5e5ea;
}

#app.theme-white {
  background: #ffffff;
  color: #27313e;
}

#app.theme-light {
  background: #e8e9df;
  color: #27313e;
}

.top,
.bottom,
.middle {
  position: relative;
  z-index: 1;
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

.middle {
  min-height: 620px;
}

.bottom {
  min-height: 22px; /* Temp style to fix the fontPreview illustration from jittering */
  margin-bottom: 20px;
  align-items: center;
}
</style>
