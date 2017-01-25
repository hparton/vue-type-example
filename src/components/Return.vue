<template>
  <transition name="return">
    <div class="return" v-show="active">
      <img class="return-message__arrow arrow" src="../assets/arrow-left.svg" alt="">
      <div class="return-message">
        <span class="return-message__title">Google Fonts</span>
        <span class="return-message__sub-text">124 Packages-55 Styles</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'return',
  props: ['active'],
  data () {
    return {
      msg: 'Return'
    }
  }
}
</script>

<style lang="scss">
.return-enter-active, .return-leave-active {
  transition: opacity .75s cubic-bezier(0.165, 0.840, 0.440, 1.000);

  .return-message__arrow {
    transition: transform .5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  .return-message__title {
    transition: transform .5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  .return-message__sub-text {
    transition: transform .5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

}
.return-enter, .return-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;

  .return-message__arrow {
    transform: translateX(-20px);
  }

  .return-message__title {
    transform: translateX(40px);
  }

  .return-message__sub-text {
    transform: translateX(20px);
  }
}

.return {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #aaaeb7;
}

.arrow {
  width: 25px;
}

.return-message {
  text-align: left;
}

.return-message__arrow {
  margin-right: 25px;
}

.return-message__title {
  font-weight: bold;
  margin-bottom: 1px;
}

.return-message__title,
.return-message__sub-text {
  display: block;
  font-size: 0.85em;
}

</style>
