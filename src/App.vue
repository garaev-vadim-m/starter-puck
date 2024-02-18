<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed, defineAsyncComponent, watch, ref } from 'vue';
const route = useRoute();
const layoutName = ref<string>('MainLayout');

watch(
  () => route.meta.layout,
  (newVal) => {
    if (typeof newVal === 'string' && layoutName.value !== newVal) {
      layoutName.value = newVal;
    }
  },
);

const Layout = computed(() => {
  const layoutNameValue = layoutName.value;

  return defineAsyncComponent(() => import(`@/widgets/layouts/${layoutNameValue}.vue`));
});
</script>

<template>
  <Layout>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </Layout>
</template>
