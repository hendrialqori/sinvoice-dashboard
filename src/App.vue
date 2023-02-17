<script setup lang="ts">
import { RouterView } from "vue-router";
import MyTransaction from "@/components/ui/MyTransaction.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
</script>

<template>
  <div class="flex mx-auto">
    <Sidebar />
    <div class="flex w-full border-l-[1px] border-gray-100">
      <RouterView class="flex-1 px-6 py-5 h-screen overflow-y-auto" />
      <MyTransaction />
    </div>
  </div>
</template>
