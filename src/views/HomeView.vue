<script setup lang="ts">
import { ref } from "vue";
import ModalAdd from "@/components/modal/Add.vue";

const isOpen = ref(false);
</script>

<template>
  <main>
    <Teleport to="#modal">
      <ModalAdd :is-open="isOpen" @close="isOpen = false" />
    </Teleport>
    <section aria-label="main-content">
      <h1 class="text-2xl font-semibold">Hello Alqori :)</h1>
      <div
        class="flex items-center flex-wrap gap-4 mt-12"
        aria-label="balances-income-expenses"
      >
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
            <h2 class="text-[1.05rem] font-medium mb-1">Income</h2>
            <p class="text-[.75rem] tracking-tight mb-2 font-light">
              November 2022
            </p>
            <h3 class="text-xl font-bold tracking-tight">$ 100.645</h3>
          </figcaption>
        </figure>
        <figure class="bg-rose-200 rounded-md px-6 py-6 flex-1">
          <div
            class="border-2 rounded-full p-2 border-black/50 border-l-black/10 transform rotate-[45deg] h-10 w-10 flex justify-center items-center"
          >
            <mdicon name="cash-100" />
          </div>
          <figcaption class="mt-5">
            <h2 class="text-[1.05rem] font-medium mb-1">Expenses</h2>
            <p class="text-[.75rem] tracking-tight mb-2 font-light">
              November 2022
            </p>
            <h3 class="text-xl font-bold tracking-tight">$ 12.115</h3>
          </figcaption>
        </figure>
      </div>
      <div class="mt-7" aria-label="transaction">
        <div
          class="flex items-center justify-between"
          aria-label="create-invoice"
        >
          <h3 class="text-xl font-semibold tracking-wide">Create Invoice</h3>
          <button
            @click="isOpen = true"
            class="bg-gray-100 rounded-md py-2 px-4 active:bg-gray-200"
          >
            <mdicon name="plus" size="22" />
          </button>
        </div>
        <div class="mt-3" aria-label="latest-transaction">
          <h3 class="text-gray-400 text-sm font-medium mb-2 tracking-tight">
            Latest transaction
          </h3>
          <div class="flex items-center gap-3">
            <figure
              class="flex items-center gap-2 bg-gray-100/70 rounded-lg py-2 pl-2 pr-9 flex-1"
              aria-label="profile-badge"
            >
              <img
                src="/avatar.jpeg"
                alt="avatar"
                class="w-9 h-9 rounded-full object-cover"
                loading="lazy"
              />
              <figcaption class="text-[.70rem]">
                <h2 class="font-[500]">Hendri Alqori</h2>
                <p class="text-[.60rem]">hendri.vue@gmail.com</p>
              </figcaption>
            </figure>
            <figure
              class="flex items-center gap-2 bg-gray-100/70 rounded-lg py-2 pl-2 pr-9 flex-1"
              aria-label="profile-badge"
            >
              <img
                src="/avatar.jpeg"
                alt="avatar"
                class="w-9 h-9 rounded-full object-cover"
                loading="lazy"
              />
              <figcaption class="text-[.70rem]">
                <h2 class="font-[500]">Hendri Alqori</h2>
                <p class="text-[.60rem]">hendri.vue@gmail.com</p>
              </figcaption>
            </figure>
            <figure
              class="flex items-center gap-2 bg-gray-100/70 rounded-lg py-2 pl-2 pr-9 flex-1"
              aria-label="profile-badge"
            >
              <img
                src="/avatar.jpeg"
                alt="avatar"
                class="w-9 h-9 rounded-full object-cover"
                loading="lazy"
              />
              <figcaption class="text-[.70rem]">
                <h2 class="font-[500]">Hendri Alqori</h2>
                <p class="text-[.60rem]">hendri.vue@gmail.com</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="h-[0.5px] bg-gray-200 w-full my-8" />
      <form class="grid gap-5" aria-label="sending-money">
        <div class="border-b-[1px] border-black flex items-center gap-3 py-2">
          <label for="name" class="text-sm font-medium">Customer name</label>
          <input
            class="flex-1 border-l-[1px] border-black px-3 text-sm outline-none"
            type="text"
            id="names"
            required
            placeholder="Enter customner name"
          />
          <mdicon
            id="account-name"
            name="account-outline"
            size="26"
            class="text-gray-400"
          />
        </div>
        <div class="border-b-[1px] border-black flex items-center gap-3 py-2">
          <label for="email" class="text-sm font-medium">Customer email</label>
          <input
            class="flex-1 border-l-[1px] border-black px-3 text-sm outline-none"
            type="text"
            id="email"
            required
            placeholder="Enter customer email"
          />
          <mdicon
            id="email-name"
            name="email-outline"
            size="24"
            class="text-gray-400"
          />
        </div>
        <div class="flex items-center gap-3">
          <div
            class="border-b-[1px] border-black flex items-center gap-3 py-2 flex-1"
          >
            <label for="item-name" class="text-sm font-medium mr-[2.15rem]"
              >Item name</label
            >
            <input
              class="flex-1 border-l-[1px] border-black px-3 text-sm outline-none"
              type="text"
              id="item-name"
              required
              placeholder="Item name"
            />
          </div>
          <div
            class="border-b-[1px] border-black flex items-center gap-3 py-[0.45rem] flex-1"
          >
            <label for="item-account" class="text-sm font-medium mr-8"
              >Item account</label
            >
            <select
              class="flex-1 border-l-[1px] border-black px-3 text-gray-400 font-light text-sm"
              id="item-account"
            >
              <option selected disabled class="text-gray-">Amout</option>
              <option value="10000">Rp 15.0000</option>
              <option value="10000">Rp 25.0000</option>
              <option value="10000">Rp 35.0000</option>
            </select>
          </div>
        </div>
        <div class="flex items-center gap-3 mt-5">
          <button
            class="flex-1 text-center bg-gray-200 text-sm py-5 rounded-md font-medium"
            type="submit"
          >
            Add more details
          </button>
          <button
            class="flex-1 text-center bg-black text-white text-sm py-5 rounded-md font-medium"
            type="submit"
          >
            Send money
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
input[type="text"]#names:focus + #account-name {
  color: black;
}

input[type="text"]#email:focus + #email-name {
  color: black;
}
</style>
