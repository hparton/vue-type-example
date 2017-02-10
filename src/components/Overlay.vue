<template>
  <transition>
    <div v-show="visible" class="overlay-wrapper" ref="overlayWrapper">
        <canvas class="overlay" ref="overlay"></canvas>
        <div v-show="loaded" ref="content">
          <slot></slot>
        </div>
    </div>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'overlay',
  props: ['duration', 'visible'],
  data () {
    return {
      open: true,
      canvas: null,
      loaded: false,
      color: null,
      ctx: null,
      anim: {
        start: 0,
        end: 0,
        iteration: 0
      },
      points: [],
      store: store.state
    }
  },
  computed: {
    totalIterations () {
      return this.duration * 60
    }
  },
  mounted () {
    store.getTheme(this.store.theme).then((response) => {
      this.color = response.background
    })

    setTimeout(() => {
      this.canvas = this.$refs.overlay
      console.log(this.canvas)
      this.ctx = this.canvas.getContext('2d')
      this.anim.start = this.canvas.width * 2
      this.sizeCanvas()
      this.run()
    }, 1000)
  },
  methods: {
    sizeCanvas () {
      this.canvas.height = this.$refs.overlay.clientHeight
      this.canvas.width = this.$refs.overlay.clientWidth
    },
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    seedCircles () {
      let points = 15

      for (var i = 0; i < points; i++) {
        let point = {
          x: randomNumber(0, this.canvas.width),
          y: randomNumber(0, this.canvas.height),
          size: this.anim.start
        }

        this.points.push(point)
      }
    },
    reduceCircleSize () {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].size = easeOutCubic(this.anim.iteration, this.anim.start, this.anim.end - this.anim.start, this.totalIterations)
      }
    },
    run () {
      this.seedCircles()
      this.step()
      this.loaded = true
    },
    step () {
      // Do Stuff
      this.clearCanvas()
      this.reduceCircleSize()
      this.draw()

      this.anim.iteration++

      if (this.anim.iteration <= this.totalIterations) {
        window.requestAnimationFrame(this.step)
      } else {
        this.$emit('completed')
      }
    },
    draw () {
      const ctx = this.ctx

      for (var i = 0; i < this.points.length; i++) {
        let point = this.points[i]
        if (point.size > 0) {
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI, false)
          ctx.fillStyle = this.color
          ctx.fill()
        }
      }
    }
  }
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * max) + min
}

function easeOutCubic (currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue
}
</script>

<style>
.overlay-wrapper {
  position: relative;
  height: inherit;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  height: 100%;
  width: 100%;
}
</style>
