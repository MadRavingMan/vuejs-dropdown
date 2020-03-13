<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="3" offset="4">
          <Dropdown dropdownName="Tag" :dropListItems="TagDropdownItems" />
        </b-col>
      </b-row>
    </b-container>
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
