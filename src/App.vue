<template>
  <div id="app">
    <Dropdown dropdownName="Tag" :dropListItems="TagDropdownItems" />
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";

export default {
  name: "App",
  components: {
    Dropdown
  },
  data() {
    return {
      TagDropdownItems: ["Customers", "VIP", "OLDtimer", "Remove"]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
