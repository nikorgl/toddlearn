<template>
  <english-words :category="'listening'" :typing-check="'word'" />
</template>
<script>
import EnglishWords from "../../components/english/EnglishWords";
export default {
  components: {
    EnglishWords,
  },
};
</script>
