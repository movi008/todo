<script setup>
import { useTodoStore } from '../stores/TodoStore.js';
const store = useTodoStore();
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <h1 class="text-3xl text-center mb-6">Todo App</h1>
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div class="p-4">
        <div class="flex space-x-2">
          <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task"
            class="flex-1 border rounded-lg py-2 px-3 focus:outline-none focus:ring" />
          <button @click="addTask" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Add Task
          </button>
        </div>
      </div>
      <div class="p-4">
        <div class="space-y-2">
          <div class="text-lg font-semibold">All Tasks</div>
          <ul>
            <li v-for="task in store.Tasks" :key="task.id" class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <input type="checkbox" v-model="task.done" @change="toggleTaskStatus(index)" class="form-checkbox" />
                <span :class="{ 'line-through': task.done }" class="truncate">{{ task.task }}</span>
              </div>
              <button @click="removeTask(index)" class="text-red-500 hover:text-red-600">
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-4">
        <div class="space-y-2">
          <!-- <div class="text-lg font-semibold">Completed Tasks</div> -->
          <!-- <ul>
            <li v-for="(task, index) in completedTasks" :key="index" class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <input type="checkbox" v-model="task.done" @change="toggleTaskStatus(index)" class="form-checkbox" />
                <span :class="{ 'line-through': task.done }" class="truncate">{{ task.name }}</span>
              </div>
              <button @click="removeTask(index)" class="text-red-500 hover:text-red-600">
                Delete
              </button>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>