<template>
  <div v-if="active">
    Hi
    Made by me based on a dribble shot.

    Vue.JS + css transitions
  </div>
</template>

<script>
export default {
  name: 'infoPane',
  props: ['active'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
