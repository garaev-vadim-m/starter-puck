<script setup lang="ts">
import { ref } from 'vue';
type News = {
  id: number;
  name: string;
};
const news = ref<News[]>([]);
const addForm = ref<News>({
  id: 0,
  name: '',
});
const inputRef = ref();
function addNews() {
  addForm.value.id++;
  news.value.push(addForm.value);
  addForm.value = {
    id: Math.random(),
    name: '',
  };
  return (inputRef.value.value = '');
}
</script>

<template>
  <div>
    <ElInput class="input" v-model="addForm.name" ref="inputRef" />
    <ElButton type="primary" @click="addNews">Add news</ElButton>
  </div>
  <div v-for="(item, index) in news" :key="item.id">
    <p id="1">{{ item.name }}</p>
  </div>
</template>
<style scoped lang="css"></style>
