<template>
  <ul class="themes">
    <li class="thems__dark">
      <a href="#">
        <img src="../assets/theme.svg" alt="">
      </a>
    </li>
    <li class="thems__grey">
      <a href="#">
        <img src="../assets/theme.svg" alt="">
      </a>
    </li>
    <li class="thems__light">
      <a href="#">
        <img src="../assets/theme.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'themes',
  data () {
    return {
      msg: 'Themes'
    }
  }
}
</script>

<style>

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
