<template>
  <div class="font-preview" ref="wrapper">
    <overlay duration="2">
      <transition name="fade" mode="out-in">
        <transition-group
          v-if="store.selectedWeights.length"
          key="example"
          name="fade"
          tag="ul"
          ref="text"
          v-bind:style="{height: height + 'px'}"
          class="text-overlay-list"
        >
          <li class="text-overlay"
              v-for="(weight, index) in store.selectedWeights"
              v-bind:key="weight.type"
              v-bind:class="{
                i: weight.italic,
                l: weight.light,
                b: weight.bold,
                r: (!weight.italic && !weight.bold),
              }"
          >
            <span v-bind:class="{faint: index > 0}">Aa</span>
          </li>
          </transition-group>
        <img src="../assets/test-new.png" v-else key="preview">
      </transition>
    </overlay>
  </div>
</template>

<script>
import store from '../store'

import Overlay from './Overlay'

export default {
  name: 'fontPreview',
  components: {
    Overlay
  },
  data () {
    return {
      height: null,
      store: store.state
    }
  },
  created () {
    /*
      *==============================================================*
      |=================== TODO: FIX ME PROPERLY  ===================|
      *==============================================================*
      |                                                              |
      |   Need to make sure that height is computed before running   |
      |     right now just waiting 200ms so i can get on with        |
      |                     layout/styling                           |
      |                                                              |
      *==============================================================*
     */
    setTimeout(() => {
      this.$nextTick(() => {
        this.height = this.$refs.wrapper.clientHeight
      })
    }, 200)
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                transform .5s cubic-bezier(0.165, 0.840, 0.440, 1.000)
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: scale(1.1);
  }

  .faint {
    opacity: 0.75;
  }

  .text-overlay-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .text-overlay {
    font-family: Karla;
    font-size: 730px;
    line-height: 0;
    top: 45%;
    width: 100%;
    position: absolute;
  }

  .font-preview {
    height: 100%;
    width: 75%;
    display: table;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
</style>
