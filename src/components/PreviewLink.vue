<template>
  <transition name="fade-up">
    <a href="#" class="preview-link" v-if="active">
      See it in action
      <img class="preview-link__arrow arrow" src="../assets/arrow-right.svg" alt="">
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

.preview-link {
  display: inline-block;
  color: #ed4949;
  text-decoration: none;
  margin-left: 25px;
}

.preview-link__arrow {
  margin-left: 15px;
}

</style>
