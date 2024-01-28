<script setup lang="ts">
import { ref } from 'vue';
type News = {
  id: number;
  news: string;
};
const news = ref([]);
const addForm = ref<{ id: number; name: string }>({
  id: Math.random(),
  name: '',
});
function addNews() {
  return news.value.push(addForm.value);
}
</script>

<template>
  <div>
    <ElInput class="input" v-model="addForm.name" @keypress.enter="addNews" />
    <ElButton type="primary" @click="addNews">Add news</ElButton>
  </div>
  {{ news }}
</template>
<style scoped lang="css"></style>
