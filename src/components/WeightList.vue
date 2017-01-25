<template>
  <div class="weight-list">
    <div class="font-info">
      <span class="font-info__name">Karla</span>
      <span class="font-info__styles">8 Styles</span>
      <ul class="font-weights">
        <li class="l">Light</li>
        <li class="l i">Light Italic</li>
        <li class="r">Regular</li>
        <li class="r i">Regular Italic</li>
        <li class="b">Bold</li>
        <li class="b i">Bold Italic</li>
        <li class="b">Heavy</li>
        <li class="b i">Heavy Italic</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weightList',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.font-info {
}

.font-info__name,
.font-info__styles {
  display: block;
}

.font-info__name {
  text-transform: uppercase;
  font-weight: bold;
}

.weight-list {
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 3%;
}

.font-weights {
  margin-top: 75%;
  padding-left: 0;
  list-style: none;
  font-size: 1.5em;
  position: relative;
}

.font-weights:before,
.font-weights:after {
  content: '';
  display: block;
  background: red;
  width: 100%;
  height: 4em;
  position: absolute;
  left: 0;
  right: 0;
}

.font-weights:before {
  top: 0;
  background: linear-gradient(to bottom, rgba(39,49,62,0.85) 32.5%,rgba(0,0,0,0) 100%);
  pointer-events: none;
}

.font-weights:after {
  bottom: 0;
  background: linear-gradient(to top, rgba(39,49,62,0.85) 32.5%,rgba(0,0,0,0) 100%);
  pointer-events: none;
}

.font-weights li {
  margin-bottom: 10px;
}

.l {
  font-weight: lighter;
}

.r {
  font-weight: normal;
}

.b {
  font-weight: bold;
}

.i {
  font-style: italic;
}

</style>
