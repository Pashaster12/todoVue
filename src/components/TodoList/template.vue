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

<script src="./script.js"></script>
<style src="./style.css"></style>