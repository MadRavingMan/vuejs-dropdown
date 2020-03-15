// TODO : styling
// TODO : Modal for alert

<template>
  <div :id="dropdownName + '_dropdown'">
    <b-dropdown size="lg" variant="secondary text-dark" offset="-22" @hide="validateChecks()">
      <template v-slot:button-content>
        {{ dropdownName }}
        <span class="marked-number">{{ markedItems }}</span>
      </template>
      <b-dropdown-text v-for="item in dropListItems" :key="item">
        <p-check class="p-svg p-curve" color="warning" @change="checkboxsCounter()">
          <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
            <path
              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
              style="stroke: white;fill:white"
            />
          </svg>
          {{ item }}
        </p-check>
      </b-dropdown-text>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    dropdownName: String,
    dropListItems: Array
  },
  data() {
    return {
      markedItems: "-"
    };
  },
  methods: {
    checkboxsCounter() {
      var container = document.querySelector(
        "#" + this.dropdownName + "_dropdown"
      );
      this.markedItems = container.querySelectorAll(
        "input[type='checkbox']:checked"
      ).length;
    },
    validateChecks() {
      if (!this.isExpanded && this.markedItems === 0) {
        alert("Please, pick one item from " + this.dropdownName + " dropdown");
      }
    }
  }
};
</script>

<style scoped>
.dropdownbtn {
  background-color: lightgray !important;
}
.marked-number {
  background: gray;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
}
</style>