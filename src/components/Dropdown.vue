// TODO : checkbox styling color #FF8B28, add bootstrap
// TODO : borders between items
// TODO : Modal for alert
// TODO : Close on click outside

<template>
  <div :id="dropdownName + '_dropdown'">
    <div class="dropdown" @click="toggleExpansion(); validateChecks();">
      <div>
        <h1>{{ dropdownName }}</h1>
      </div>
      <div>
        <h1 class="marked-number">{{ markedItems }}</h1>
      </div>
      <div>
        <h1>▼</h1>
      </div>
    </div>
    <div class="droplist" :class="{ expanded: isExpanded }">
      <ul>
        <li v-for="item in dropListItems" :key="item">
          <input type="checkbox" :name="item" v-on:change="checkboxsCounter()" />
          <label :for="item">{{ item }}</label>
        </li>
      </ul>
    </div>
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
      markedItems: "-",
      isExpanded: false
    };
  },
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },
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
.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: lightgray;
  width: 200px;
  border-radius: 15px;
}

.marked-number {
  background: gray;
  border-radius: 15px;
  padding: 10px;
}

.droplist {
  width: 200px;
  display: none;
}

ul {
  box-shadow: 0px 0px 5px;
  border-radius: 15px;
  text-align: left;
  list-style-type: none;
}

.expanded {
  display: block;
}
</style>