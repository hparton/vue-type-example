<template>
  <transition name="selected">
    <div class="selected-fonts-wrap" v-show="active">
      <transition-group name="fade-in-up" tag="ul" class="selected-fonts">
        <li class="selected-fonts__font" v-for="weight in store.selectedWeights" v-bind:key="weight.type">
          {{ weight.type }}
          <img @click="removeWeight(weight)" class="selected-fonts__remove" src="../assets/cross.svg" alt="">
        </li>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'selectedFonts',
  props: ['active'],
  data () {
    return {
      store: store.state
    }
  },
  methods: {
    removeWeight (weight) {
      store.removeSelectedWeight(weight)
    }
  }
}
</script>

<style lang="scss">
.selected-enter-active, .selected-leave-active {
  transition: opacity .1s, visibility 1.5s;

  .selected-fonts {
    transition: width 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }
}

.selected-enter, .selected-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;

  .selected-fonts {
    width: 0%;
  }
}

.fade-in-up-enter-active, .fade-in-up-leave-active {
  transition: transform .5s cubic-bezier(0.165, 0.840, 0.440, 1.000),
              opacity .3s cubic-bezier(0.165, 0.840, 0.440, 1.000);

  .selected-fonts__remove {
    transition: transform .4s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                opacity .3s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }
}

.fade-in-up-enter, .fade-in-up-leave-to {
  opacity: 0;
  transform: translateY(12px);

  .selected-fonts__remove {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.selected-fonts-wrap {
  width: 62.5%;
  display: flex;
}

.selected-fonts__font + .selected-fonts__font {
  margin-left: 15px;
}

.selected-fonts__font {
  display: inline-block;
  font-weight: bold;
}

.selected-fonts__remove {
  width: 10px;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
}

.selected-fonts {
  border-bottom: 1px solid #aaaeb7;
  padding-bottom: 5px;
  padding-left: 0;
  margin: 0;
  list-style: none;
  align-self: center;
  width: 100%;
  min-height: 24px; // Temp style to fix jitter when no fonts selected.
  text-align: left;
}
</style>
