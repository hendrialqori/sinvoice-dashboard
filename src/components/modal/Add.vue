<script setup lang="ts">
import Wrapper from "./Wrapper.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import type { VNodeRef } from "vue";

type Props = {
  isOpen: boolean;
};

defineProps<Props>();

const emit = defineEmits(["close"]);

const modalWrapper = ref<VNodeRef | null>(null);

onClickOutside(modalWrapper, (e: Event) => {
  e.stopPropagation();
  emit("close");
});
</script>

<template>
  <Wrapper>
    <div
      :ref="modalWrapper"
      v-if="isOpen"
      class="modal-wrapper"
      @click="$emit('close')"
    >
      <div class="w-4/12 mx-auto rounded-lg bg-white p-5">
        <header class="flex justify-between items-start mb-4">
          <div class="flex gap-1">
            <mdicon name="flag-outline" class="rotate-[-23deg]" />
            <div class="leading-3">
              <h2 class="text-lg font-bold">Create Invoice</h2>
              <p class="text-sm text-gray-500 tracking-tight">
                Share where you've worked on your profile
              </p>
            </div>
          </div>
          <button @click="$emit('toggle')">
            <mdicon name="close" size="17" />
          </button>
        </header>
        <form class="grid gap-2">
          <div>
            <label for="title" class="text-xs font-semibold">Title*</label>
            <input
              type="text"
              id="title"
              class="w-full rounded-md outline-purple-400 px-3 py-2 border-[1px] border-gray-300 mt-1 text-sm"
            />
          </div>
          <div class="flex items-center gap-3">
            <div>
              <label for="title" class="text-xs font-semibold">Company*</label>
              <input
                type="text"
                id="title"
                class="w-full rounded-md outline-purple-400 px-3 py-2 border-[1px] border-gray-300 mt-1 text-sm"
                placeholder="seach for company"
              />
            </div>
            <div>
              <label for="title" class="text-xs font-semibold">Website*</label>
              <div
                class="flex items-center border-[1px] border-gray-300 rounded-md h-[2.4rem] mt-1"
              >
                <div
                  class="text-[.8rem] px-2 border-r-[1px] h-full flex items-center"
                >
                  https://
                </div>
                <input
                  type="text"
                  id="title"
                  class="w-full outline-purple-400 px-3 text-sm h-full placeholder:text-xs"
                  placeholder="www.example.com"
                />
              </div>
            </div>
          </div>
          <div class="flex items-end gap-3">
            <div class="flex-1">
              <label for="title" class="text-xs font-semibold">Location*</label>
              <input
                type="text"
                id="title"
                class="w-full rounded-md outline-purple-400 px-3 py-2 border-[1px] border-gray-300 mt-1 text-sm"
                placeholder="seach for location"
              />
            </div>
            <div class="flex-1 flex flex-col">
              <label for="employment" class="text-[.7rem] font-semibold"
                >Employment*</label
              >
              <select
                class="text-sm font-medium py-2 rounded-md border-[1px] mt-1 outline-purple-400"
                name=""
                id="employment"
              >
                <option value="" selected>Full time</option>
                <option value="" selected>Freelance</option>
              </select>
            </div>
          </div>
          <div class="grid gap-2">
            <label for="desc" class="text-xs font-semibold">Description*</label>
            <textarea
              class="outline-purple-400 rounded-md p-2 text-sm border-[1px] border-gray-300"
              id="desc"
              cols="30"
              rows="4"
              minlength="10"
              maxlength="400"
            ></textarea>
            <span class="text-xs text-gray-500">400 character length</span>
          </div>
          <button
            class="bg-purple-500 rounded-md py-2 text-sm text-white w-6/12 ml-auto mr-0"
          >
            Save Invoice
          </button>
        </form>
      </div>
    </div>
  </Wrapper>
</template>
