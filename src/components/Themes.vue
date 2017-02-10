<template>
  <transition name="themes">
    <ul class="themes" v-show="active">
      <li class="themes__theme" v-for="theme in store.themes">
        <a href="#" @click.prevent="setActiveTheme(theme.name, $event)">
          <svg class="themes__icon" viewBox="0 0 43.8 43.8" xml:space="preserve">
            <g>
              <g>
                <circle fill="none" stroke="#D7DAE2" stroke-width="4" stroke-miterlimit="10" cx="21.9" cy="21.9" r="18.2"/>
                <path v-bind:fill="theme.background" d="M21.3,36.4c-8,0-14.5-6.5-14.5-14.5S13.3,7.4,21.3,7.4"/>
              </g>
            </g>
          </svg>
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

      store.getTheme(store.state.theme).then((response) => {
        this.spawnColorFade(e.target, response.background)
      })
    },
    spawnColorFade (el, color) {
      var app = document.getElementById('app')
      var temp = document.createElement('div')

      var childPos = el.getBoundingClientRect()
      var parentPos = app.getBoundingClientRect()
      var childOffset = {
        top: childPos.top - parentPos.top,
        left: childPos.left - parentPos.left
      }

      temp.className = 'new-color-animation'
      temp.style.background = color
      temp.style.top = childOffset.top + 'px'
      temp.style.left = childOffset.left + 'px'

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
  // Note the opacity animation makes this lag a bit, change top/left to use transform's instead.
  // I tried it but it was causing some odd jittering.
  transition: height .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              width .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              left .5s cubic-bezier(0.785, 0.135, 0.150, 0.860),
              top .5s cubic-bezier(0.785, 0.135, 0.150, 0.860);
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

  .themes__theme {
    transition: transform .3s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                opacity .3s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  .themes__theme:nth-child(2) {
    transition-delay: .1s
  }

  .themes__theme:nth-child(3) {
    transition-delay: .15s
  }
}

.themes-enter, .themes-leave-to {
  opacity: 0;

  .themes__theme {
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

.themes__theme {
  display: inline-block;
}

.themes__theme + .themes__theme {
  margin-left: 12px;
}

.themes__icon {
  display: block;
  width: 18px;
}

</style>
