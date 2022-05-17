<template>
  <div>
    {{ date }}
  </div>
</template>

<script>
  export default {
    name: "ff",
    data() {
      return {
        naem: "",
      };
    },
    computed: {
      date() {
        return new Date();
      },
    },
  };
</script>

<style>
.di{
  background: rgb(79, 170, 226);
}

</style>
