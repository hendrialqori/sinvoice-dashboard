<script setup lang="ts">
import { ref } from "vue";
import Online from "@/components/tab/transaction/Online.vue";
import Offline from "@/components/tab/transaction/Offline.vue";

type Tabs = "Online" | "Offline";

const currentTab = ref<Tabs>("Online");

const tab = {
  Online,
  Offline,
} as Record<Tabs, any>;

function moveTab(v: Tabs) {
  currentTab.value = v;
}
</script>
<template>
  <main>
    <section aria-label="main-content">
      <h1 class="text-2xl font-semibold">Transaction</h1>
      <div
        class="w-max flex items-center bg-gray-100 p-1 rounded-md gap-3 mt-5"
      >
        <button
          @click="moveTab('Online')"
          :class="`text-xs rounded-md p-2 tracking-wide ${
            currentTab === 'Online' && 'activeTab'
          }`"
        >
          Online
        </button>
        <button
          @click="moveTab('Offline')"
          :class="`text-xs rounded-md p-2 tracking-wide ${
            currentTab === 'Offline' && 'activeTab'
          }`"
        >
          Offline
        </button>
      </div>
      <component :is="tab[currentTab]" />
    </section>
  </main>
</template>

<style scoped>
#btn-week {
  box-shadow: 0px 2px 3px rgba(88, 88, 88, 0.1);
}

.activeTab {
  background-color: white;
}
</style>
