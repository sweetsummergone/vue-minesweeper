<template>
  <div class="header">
    <h3 class="logo">Minesweeper.IO</h3>
    <div class="header-right">
      <NewGameModal></NewGameModal>
    </div>
  </div>
</template>

<script>
import NewGameModal from './NewGameModal.vue'
export default {
    name: "Header",
    components: {
        NewGameModal
    },
};
</script>

<style scoped>
.header {
  overflow: hidden;
  background-color: rgba(0,0,0,0);
}

/* Style the header links */
.header h3 {
  float: left;
  color: #ff7f11;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header h3.logo {
  font-size: 25px;
  margin-left: 15px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header h3:hover {
  color: black;
}

/* Float the link section to the right */
.header-right {
  margin-right: 10px;
  margin-top: 20px;
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header h1 {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>