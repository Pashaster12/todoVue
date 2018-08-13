export default {
  name: "TodoList",
  data() {
    return {
      title: "Vue.js todo list",
      items: [
        {
            id: 1,
            text: "First item",
            completed: false
        }
      ],
      itemText: "",
      currentItem: {},
      statusTitle: "Click on this element to change the item status",
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
        else this.items.push({ 
            id: this.items.length + 1, 
            text: this.itemText,
            completed: false
        });
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
    },
    changeStatus: function(item) {
        this.items.forEach((element, index) => {
            if (element.id === item.id) {
              this.items[index].completed = !item.completed;
            }
        });
        this.currentItem = item;
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  },
  watch: {
      items: {
        handler: function(oldValue, newValue) {
            localStorage.setItem('todo-items', JSON.stringify(this.items));
        },
        deep: true
      }
  },
  mounted: function() {
      if (localStorage.getItem('todo-items')) this.items = JSON.parse(localStorage.getItem('todo-items'));
  }
};