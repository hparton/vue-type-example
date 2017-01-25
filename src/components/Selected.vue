<template>
  <transition name="selected">
    <div class="selected-fonts-wrap" v-show="active">
      <div class="selected-fonts"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'selectedFonts',
  props: ['active'],
  data () {
    return {
      msg: 'Selected Fonts'
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

.cta {
  display: inline-block;
  color: #ed4949;
  text-decoration: none;
  margin-left: 25px;
}

.cta .arrow {
  margin-left: 15px;
}

.selected-fonts-wrap {
  width: 62.5%;
  display: flex;
}

.selected-fonts {
  border-bottom: 1px solid #aaaeb7;
  align-self: center;
  width: 100%;
}
</style>
