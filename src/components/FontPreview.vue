<template>
  <div class="font-preview" ref="wrapper">
      <overlay duration="2" :visible="active">
        <transition name="fade" mode="out-in">
          <transition-group
            v-if="store.selectedWeights.length"
            key="example"
            name="fade"
            tag="ul"
            ref="text"
            class="text-overlay-list"
          >
            <li class="text-overlay"
                v-for="(weight, index) in store.selectedWeights"
                v-bind:key="weight.type"
                v-bind:class="{
                  i: weight.italic,
                  l: weight.light,
                  b: weight.bold,
                  r: (!weight.light && !weight.bold),
                }"
            >
              <span class="text-overlay__chars" v-bind:class="{faint: index > 0}">Aa</span>
            </li>
            </transition-group>
          <img src="../assets/test-new.png" class="font-placeholder" v-else key="preview">
        </transition>
      </overlay>
    </transition>
  </div>
</template>

<script>
import store from '../store'

import Overlay from './Overlay'

export default {
  name: 'fontPreview',
  props: ['active'],
  components: {
    Overlay
  },
  data () {
    return {
      store: store.state
    }
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

  .font-placeholder {
    margin: 0 auto;
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
    font-size: 730px;
    width: 100%;
    position: absolute;
  }

  .text-overlay__chars {
    margin-top: -0.2em;
    display: block;
  }

  .font-preview {
    height: 620px;
    width: 75%;
    display: table;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
</style>
