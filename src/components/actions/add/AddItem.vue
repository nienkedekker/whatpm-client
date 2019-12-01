<template>
  <section class="content">
    <div class="tab-container">
      <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab">
        {{ tab }}
      </button>
    </div>
    <Component
        :is="currentTabComponent"
        class="tab">
    </Component>
  </section>
</template>

<script>
import AddBook from './AddBook';
import AddMovie from './AddMovie';
import AddShow from './AddShow';

export default {
  name: 'AddItem',
  components: { AddBook, AddMovie, AddShow },
  data() {
    return {
      currentTab: 'Book',
      tabs: ['Book', 'Movie', 'Show'],
    };
  },
  computed: {
    currentTabComponent() {
      return `Add${this.currentTab}`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../assets/css/variables";

  .tab-container {
    width: 100%;
    margin: 0 auto;
    @media (min-width: $mq-desktop) {
      width: $item-form-width;
    }
  }

  .tab-button {
    font-size: 16px;
    padding: 10px 25px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: #e0e0e0;
    margin-bottom: -1px;
    margin-right: -1px;
    margin-left: 0; // safari fix
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: #fafafa;
    border-bottom: 1px solid #fafafa;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
