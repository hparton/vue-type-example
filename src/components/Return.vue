<template>
  <div class="return">
    <img class="return-message__arrow arrow" src="../assets/arrow-left.svg" alt="">
    <div class="return-message">
      <span class="return-message__title">Google Fonts</span>
      <span class="return-message__sub-text">124 Packages-55 Styles</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'return',
  data () {
    return {
      msg: 'Return'
    }
  }
}
</script>

<style>

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
