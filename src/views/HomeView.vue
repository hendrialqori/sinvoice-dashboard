<script setup lang="ts">
import { tw } from "@/utils/tailwindClass";
</script>

<template>
  <main>
    <section aria-label="main-content">
      <h1 class="text-2xl font-semibold">Hello Hendri</h1>
      <div class="flex items-center gap-4 mt-12" aria-label="balances">
        <figure class="bg-purple-100 rounded-md px-6 py-6 flex-1">
          <div
            class="border-2 rounded-full p-2 border-black/50 border-l-black/5 transform rotate-[45deg] h-10 w-10 flex justify-center items-center"
          >
            <mdicon name="cash-100" />
          </div>
          <figcaption class="mt-5">
            <h2 class="text-[1.05rem] font-medium mb-1">Balance</h2>
            <p class="text-[.75rem] tracking-tight mb-2 font-light">
              November 2022
            </p>
            <h3 class="text-xl font-bold tracking-tight">$ 18.345</h3>
          </figcaption>
        </figure>
        <figure class="bg-green-50 rounded-md px-6 py-6 flex-1">
          <div
            class="border-2 rounded-full p-2 border-black/50 border-l-black/10 transform rotate-[45deg] h-10 w-10 flex justify-center items-center"
          >
            <mdicon name="cash-100" />
          </div>
          <figcaption class="mt-5">
            <h2 class="text-[1.05rem] font-medium mb-1">Balance</h2>
            <p class="text-[.75rem] tracking-tight mb-2 font-light">
              November 2022
            </p>
            <h3 class="text-xl font-bold tracking-tight">$ 15.645</h3>
          </figcaption>
        </figure>
        <figure class="bg-rose-200 rounded-md px-6 py-6 flex-1">
          <div
            class="border-2 rounded-full p-2 border-black/50 border-l-black/10 transform rotate-[45deg] h-10 w-10 flex justify-center items-center"
          >
            <mdicon name="cash-100" />
          </div>
          <figcaption class="mt-5">
            <h2 class="text-[1.05rem] font-medium mb-1">Balance</h2>
            <p class="text-[.75rem] tracking-tight mb-2 font-light">
              November 2022
            </p>
            <h3 class="text-xl font-bold tracking-tight">$ 12.115</h3>
          </figcaption>
        </figure>
      </div>
      <div class="mt-7" aria-label="transaction">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold tracking-wide">Create Invoice</h3>
          <button class="bg-gray-100 rounded-md py-2 px-4 active:bg-gray-200">
            <mdicon name="plus" size="22" />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
