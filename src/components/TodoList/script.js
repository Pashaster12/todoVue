export default {
  name: "TodoList",
  data() {
    return {
      title: "Vue.js todo list",
      items: [
        { id: 1, text: "First item" }
      ],
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