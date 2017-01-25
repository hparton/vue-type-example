<template>
  <transition name="fade-up">
    <a href="#" class="cta" v-if="active">
      See it in action
      <img class="arrow" src="../assets/arrow-right.svg" alt="">
    </a>
  </transition>
</template>

<script>
export default {
  name: 'previewLink',
  props: ['active'],
  data () {
    return {

    }
  }
}
</script>

<style>
.fade-up-enter-active, .fade-leave-active {
   transition: transform 1s cubic-bezier(0.165, 0.840, 0.440, 1.000),
                  opacity 1s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}
.fade-up-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
