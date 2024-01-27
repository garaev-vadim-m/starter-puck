<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { apiSpaAnalytics } from '@/entities/AnalyticsCounter/api/apiSpaAnalytics';

const counters = reactive({
  userId: 0,
  counterId: 0,
});
const route = useRoute();
watch(
  () => route.params,
  async () => {
    try {
      if (import.meta.env.VITE_IS_ANALYTIC_COUNTER_ENABLED === 'true') {
        const { data } = await apiSpaAnalytics();
        counters.counterId = data.counterId;
        counters.userId = data.userId;

        window.gpnSpaUrl = '//spa-back.gazprom-neft.local/events';
        window.gpnCounterId = counters.counterId;
        window.userId = counters.userId;
        window.apiVersion = '1.0';
        const headEl = document.getElementsByTagName('head')[0];
        const counterLoadingScript = document.createElement('script');
        counterLoadingScript.async = true;
        counterLoadingScript.src = '//spa-back.gazprom-neft.local/static/counter.js';
        headEl.appendChild(counterLoadingScript);
        if (counters.userId) {
          counterLoadingScript.onload = () => {
            window.gpnAnalytics &&
              window.gpnAnalytics.sendEvent(3, {
                componentid: 'user_login',
                constaeventtype: 'undefined',
                component: 'OTHER',
                customparams: [{ as_user_id: true, value: counters.userId }],
              });
          };
        }
      }
    } catch (error) {}
  },
  { immediate: true, deep: true },
);
</script>
<template>
  <div />
</template>
