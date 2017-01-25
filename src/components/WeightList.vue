<template>
  <transition name="weights">
    <div class="weight-list" v-show="active">
      <div class="font-info">
        <span class="font-info__name">Karla</span>
        <span class="font-info__styles">8 Styles</span>
        <ul class="font-weights">
          <li v-for="weight in this.weights" v-bind:class="{
            i: weight.italic,
            l: weight.light,
            b: weight.bold,
            r: (!weight.italic && !weight.bold)
          }">{{ weight.type }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'weightList',
  props: ['active'],
  data () {
    return {
      weights: [
        {
          type: 'Light',
          light: true,
          italic: false,
          bold: false
        },
        {
          type: 'Light Italic',
          light: true,
          italic: true,
          bold: false
        },
        {
          type: 'Regular',
          light: false,
          italic: false,
          bold: false
        },
        {
          type: 'Regular Italic',
          light: false,
          italic: true,
          bold: false
        },
        {
          type: 'Bold',
          light: false,
          italic: false,
          bold: true
        },
        {
          type: 'Bold Italic',
          light: false,
          italic: true,
          bold: true
        },
        {
          type: 'Heavy',
          light: false,
          italic: false,
          bold: true
        },
        {
          type: 'Heavy Italic',
          light: false,
          italic: true,
          bold: true
        }

      ]
    }
  }
}
</script>

<style lang="scss">
.weights-enter-active, .weights-leave-active {
  transition: opacity 3s, visibility 4s;


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

.font-info {
}

.font-info__name,
.font-info__styles {
  display: block;
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
  margin-top: 75%;
  padding-left: 0;
  list-style: none;
  font-size: 1.5em;
  position: relative;
}

.font-weights:before,
.font-weights:after {
  content: '';
  display: block;
  background: red;
  width: 100%;
  height: 4em;
  position: absolute;
  left: 0;
  right: 0;
}

.font-weights:before {
  top: 0;
  background: linear-gradient(to bottom, rgba(39,49,62,0.85) 32.5%,rgba(0,0,0,0) 100%);
  pointer-events: none;
}

.font-weights:after {
  bottom: 0;
  background: linear-gradient(to top, rgba(39,49,62,0.85) 32.5%,rgba(0,0,0,0) 100%);
  pointer-events: none;
}

.font-weights li {
  margin-bottom: 10px;
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
