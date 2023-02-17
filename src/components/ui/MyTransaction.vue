<script setup lang="ts">
import TinderIcon from "@/components/icon/TinderIcon.vue";
</script>

<template>
  <aside class="flex-[0.50] px-3 pt-6 h-screen overflow-auto">
    <div class="flex items-center gap-2" aria-label="top">
      <div
        class="relative flex items-center bg-gray-100/70 flex-1 p-2 py-3 rounded-md gap-2 pl-5"
      >
        <mdicon name="magnify" size="20" class="translate-y-[.1rem]" />
        <input
          type="text"
          class="text-sm bg-gray-100/70 outline-none placeholder:font-light"
          placeholder="search..."
        />
      </div>
      <button
        class="flex-[0.20] flex items-center justify-center bg-gray-100/70 py-3 rounded-md"
      >
        <mdicon name="bell-outline" size="18" />
      </button>
    </div>
    <div
      class="bg-gray-100/70 mt-8 pt-3 pb-14 px-5 rounded-md"
      aria-label="middle credit-card"
    >
      <div class="flex items-center justify-between">
        <h2 class="font-medium tracking-tight">My Cards</h2>
        <button class="bg-white rounded-md py-2 px-3 active:bg-gray-200">
          <mdicon name="plus" size="22" />
        </button>
      </div>
      <div class="mt-5">
        <figure
          class="bg-black/90 rounded-2xl text-white p-5 grid gap-5"
          aria-label="credit-card"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-[.9rem]">Hendri Alqori</h3>
            <mdicon name="credit-card-chip" class="text-yellow-500" />
          </div>
          <span class="font-semibold text-2xl">$ 34.856.00</span>
          <div class="flex items-center justify-between text-[.7rem] mt-5">
            <p>3496 **** **** 777</p>
            <p>12/12 - 124</p>
          </div>
        </figure>
      </div>
    </div>
    <div
      class="bg-gray-100/70 mt-8 pt-7 pb-2 px-5 mb-8 rounded-md"
      aria-label="bottom transaction-history"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-medium tracking-tight">Transaction History</h3>
        <button class="text-[.65rem]">View All</button>
      </div>
      <div class="mt-3 grid gap-2">
        <figure class="flex items-center gap-2 border-b-[1px] py-3">
          <TinderIcon />
          <figcaption class="leading-4 flex-1">
            <h4 class="text-[.75rem] font-semibold">Tinder</h4>
            <p class="text-[.60rem] text-gray-500">
              2 November 2022 at 10.21 am
            </p>
          </figcaption>
          <p class="text-[.80rem] font-semibold">$180.00</p>
        </figure>
        <figure class="flex items-center gap-2 border-b-[1px] py-3">
          <TinderIcon />
          <figcaption class="leading-4 flex-1">
            <h4 class="text-[.75rem] font-semibold">Tinder</h4>
            <p class="text-[.60rem] text-gray-500">
              2 November 2022 at 10.21 am
            </p>
          </figcaption>
          <p class="text-[.80rem] font-semibold">$180.00</p>
        </figure>
        <figure class="flex items-center gap-2 border-b-[1px] py-3">
          <TinderIcon />
          <figcaption class="leading-4 flex-1">
            <h4 class="text-[.75rem] font-semibold">Tinder</h4>
            <p class="text-[.60rem] text-gray-500">
              2 November 2022 at 10.21 am
            </p>
          </figcaption>
          <p class="text-[.80rem] font-semibold">$180.00</p>
        </figure>
        <figure class="flex items-center gap-2 border-b-[1px] py-3">
          <TinderIcon />
          <figcaption class="leading-4 flex-1">
            <h4 class="text-[.75rem] font-semibold">Tinder</h4>
            <p class="text-[.60rem] text-gray-500">
              2 November 2022 at 10.21 am
            </p>
          </figcaption>
          <p class="text-[.80rem] font-semibold">$180.00</p>
        </figure>
      </div>
    </div>
  </aside>
</template>

<style scoped>
[aria-label="credit-card"] {
  box-shadow: 0 15px 30px 1px rgba(0, 0, 0, 0.3);
}
</style>
