<template>
  <div class="overlay-wrapper">
    <canvas class="overlay" ref="overlay"></canvas>
    <slot></slot>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'overlay',
  props: ['duration'],
  data () {
    return {
      open: true,
      canvas: null,
      color: null,
      ctx: null,
      start: null,
      end: 0,
      iteration: 0,
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
        this.canvas = this.$refs.overlay
        this.ctx = this.canvas.getContext('2d')
        this.start = this.canvas.width * 2
        this.run()
      })
    }, 200)
  },
  methods: {
    sizeCanvas () {
      this.canvas.height = this.canvas.clientHeight
      this.canvas.width = this.canvas.clientWidth
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
          size: this.start
        }

        this.points.push(point)
      }
    },
    reduceCircleSize () {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].size = easeOutCubic(this.iteration, this.start, this.end - this.start, this.totalIterations)
      }
    },
    run () {
      this.sizeCanvas()
      this.seedCircles()
      this.step()
    },
    step () {
      // Do Stuff
      this.clearCanvas()

      this.reduceCircleSize()

      this.draw()

      this.iteration++

      if (this.iteration <= this.totalIterations) {
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
  height: 100%;
  width: 100%;
}
</style>
