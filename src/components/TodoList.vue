<template>
  <div>
    <h1>{{ title }}</h1>
    <input 
      v-model="itemText"
      @keydown.enter="saveItem()"
      placeholder="Add or edit the todo item text..."
    >

    <h4>For saving todo item text just press Enter button...</h4>

    <p 
      v-show="!items.length"
      :style="pstyle"
    >
      Todo list is empty :(
    </p>

    <ol>
      <li
        v-for="item in items"
        :key="item.id"
      >
        {{ item.text }}
        <span class="item-controls">
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      title: "Vue.js todo list",
      items: [{ id: 1, text: "First item" }],
      itemText: "",
      currentItem: {},
      pstyle: { "text-align": "center" }
    };
  },
  methods: {
    saveItem: function() {
      if(this.itemText)
      {
        if (Object.keys(this.currentItem).length != 0) {
          this.items.forEach((element, index) => {
            if (element.id === this.currentItem.id && this.itemText !== this.currentItem.text) {
              this.items[index].text = this.itemText;
              this.currentItem = {};
            }
          });
        }
        else this.items.push({ id: this.items.length + 1, text: this.itemText });
        this.itemText = "";
      }
      else alert('The todo item name can not be empty!');
    },
    deleteItem: function(itemId) {
      this.items = this.items.filter(todo => {
        return todo.id !== itemId;
      });

      this.items.forEach((element, index) => {
        this.items[index].id = index + 1;
      });
    },
    editItem: function(item) {
      this.itemText = item.text;
      this.currentItem = item;
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #000;
}
li {
  padding-bottom: 10px;
}
.item-controls {
  float: right;
}
</style>
