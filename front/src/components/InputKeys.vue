<template>
  <div class="keys">
    <div v-for="n in keys" :key="n" @click="type(n)">
      {{ caps ? n.toUpperCase() : n }}
    </div>
    <div v-if="backspace" @click="type('Backspace')">←</div>
  </div>
</template>
<script>
import { mappedKey } from "../plugins/lang.js";
export default {
  props: {
    value: String,
    keys: Array,
    caps: Boolean,
    backspace: Boolean,
  },
  created() {
    document.addEventListener("keydown", this.dispatchType);
  },
  destroyed() {
    document.removeEventListener("keydown", this.dispatchType);
  },
  methods: {
    type(n) {
      if (n === "Backspace") this.$emit("input", this.value.slice(0, -1));
      else if (n.length === 1) this.$emit("input", this.value + n);
    },
    dispatchType({ key }) {
      this.type(mappedKey(key, this.keys));
    },
  },
};
</script>
