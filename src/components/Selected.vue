<template>
  <div class="wrap">
    <div class="selected-fonts">
    </div>
    <a href="#" class="cta">
      See it in action
      <img class="arrow" src="../assets/arrow-right.svg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'selectedFonts',
  data () {
    return {
      msg: 'Selected Fonts'
    }
  }
}
</script>

<style>

.cta {
  display: inline-block;
  color: #ed4949;
  text-decoration: none;
  margin-left: 25px;
}

.cta .arrow {
  margin-left: 15px;
}

.wrap {
  width: 100%;
  align-self: flex-start;
  display: flex;
}
.selected-fonts {
  border-bottom: 1px solid #aaaeb7;
  align-self: center;

  width: 70%;
}
</style>
