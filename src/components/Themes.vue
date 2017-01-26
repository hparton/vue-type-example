<template>
  <transition name="themes">
    <ul class="themes" v-show="active">
      <li class="themes__dark">
        <a href="#" @click.prevent="setActiveTheme('dark', $event)">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
      <li class="themes__grey">
        <a href="#" @click.prevent="setActiveTheme('grey', $event)">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
      <li class="themes__light">
        <a href="#" @click.prevent="setActiveTheme('light', $event)">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'themes',
  props: ['active'],
  data () {
    return {
      store: store.state
    }
  },
  methods: {
    setActiveTheme (theme, e) {
      store.setTheme(theme)

      console.log(e)
      var temp = document.createElement('div')
      temp.className = 'new-color-animation'
      temp.style.top = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - 25 + 'px'
      temp.style.left = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - 75 + 'px'

      store.getTheme(store.state.theme).then((response) => {
        temp.style.background = response.background
      })

      var app = document.getElementById('app')
      app.appendChild(temp)

      setTimeout(() => {
        temp.className += ' expanded'
      }, 1)

      setTimeout(() => {
        temp.remove()
      }, 1000)
    }
  }
}
</script>

<style lang="scss">


.new-color-animation {
  width: 1%;
  height: 1%;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  transition: height .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              width .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              left .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              top .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              opacity .05s ease;
}

.new-color-animation.expanded {
  left: 0 !important;
  top: 0 !important;
  opacity: 1;
  width: 100%;
  height: 100%;
}



.themes-enter-active, .themes-leave-active {
  transition: opacity .7s cubic-bezier(0.165, 0.840, 0.440, 1.000);

  li {
    transition: transform .3s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                opacity .3s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  li:nth-child(2) {
    transition-delay: .1s
  }

  li:nth-child(3) {
    transition-delay: .15s
  }
}

.themes-enter, .themes-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;

  li {
    opacity: 0;
    transform: translateX(-20px);
  }
}

.themes {
  list-style: none;
  padding-left: 0;
  margin: 0;
  width: 10%;
  text-align: left;
}

.themes li {
  display: inline-block;
}

.themes li + li {
  margin-left: 12px;
}

.themes img {
  display: block;
  width: 18px;
}

</style>
