<template>
  <transition name="themes">
    <ul class="themes" v-show="active">
      <li class="themes__dark">
        <a href="#">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
      <li class="themes__grey">
        <a href="#">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
      <li class="themes__light">
        <a href="#">
          <img src="../assets/theme.svg" alt="">
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'themes',
  props: ['active'],
  data () {
    return {
      msg: 'Themes'
    }
  }
}
</script>

<style lang="scss">
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
