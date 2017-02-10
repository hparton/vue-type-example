<template>
  <transition name="weights">
    <div class="weight-list" v-bind:class="'theme-' + store.theme" v-show="active">
      <div class="font-info">
        <span class="font-info__name">{{ store.currentFont }}</span>
        <span class="font-info__styles">{{ weights.length }} Styles</span>
        <ul class="font-weights">
          <li class="font-weights__weight" v-for="weight in weights" @click="toggleSelectedWeight(weight)" v-bind:class="{
            i: weight.italic,
            l: weight.light,
            b: weight.bold,
            r: (!weight.italic && !weight.bold),
            selected: weight.selected
          }">{{ weight.type }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'weightList',
  props: ['active'],
  data () {
    return {
      store: store.state
    }
  },
  computed: {
    weights () {
      let weights = []

      for (var i = 0; i < this.store.availableWeights.length; i++) {
        let weight = this.store.availableWeights[i]
        weight.selected = false

        for (var j = 0; j < this.store.selectedWeights.length; j++) {
          if (this.store.availableWeights[i].type === this.store.selectedWeights[j].type) {
            weight.selected = true
          }
        }

        weights.push(weight)
      }

      return weights
    }
  },
  methods: {
    toggleSelectedWeight (weight) {
      if (!weight.selected) {
        this.addSelectedWeight(weight)
      } else {
        this.removeSelectedWeight(weight)
      }
    },
    addSelectedWeight (weight) {
      store.addSelectedWeight(weight)
    },
    removeSelectedWeight (weight) {
      store.removeSelectedWeight(weight)
    }
  }
}
</script>

<style lang="scss">
.weights-enter-active, .weights-leave-active {
  transition: opacity 1s, visibility 1s;


  .font-info__name,
  .font-info__styles,
  .font-weights li {
    transition: transform 1s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                opacity 1s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  .font-info__styles {
    transition-delay: 0.2s
  }

  @for $i from 1 through 20 {
      .font-weights li:nth-child(#{$i}){
         transition-delay: (#{0.3 + $i * .075}s);
      }
  }
}

.weights-enter, .weights-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;

  .font-info__name,
  .font-info__styles,
  .font-weights li {
    transform: translateY(10px);
    opacity: 0;
  }
}

.font-info__name,
.font-info__styles {
  display: block;
  transition: color .2s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

.font-info__name {
  text-transform: uppercase;
  font-weight: bold;
}

.weight-list {
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 3%;
}

.font-weights {
  margin-top: 65%;
  padding-left: 0;
  list-style: none;
  font-size: 1.5em;
  position: relative;
}


.font-weights__weight {
  margin-bottom: 10px;
  cursor: pointer;
  transition: color .3s cubic-bezier(0.165, 0.840, 0.440, 1.000),
              transform .3s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

.selected {
  color: #ed4949;
  transform: translateX(-15px);
}

.l {
  font-weight: lighter;
}

.r {
  font-weight: normal;
}

.b {
  font-weight: bold;
}

.i {
  font-style: italic;
}

</style>
