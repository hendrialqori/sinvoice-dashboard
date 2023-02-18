<script setup lang="ts">
import { computed, ref, watch } from "vue";

const imageValue = ref();

const alertImage = ref(false);

const isDragZone = ref(false);

function handleImage(e: Event) {
  const images = e.target as typeof e.target & { files: number[] };
  imageValue.value = images.files[0];
}

function toggleDragZone() {
  isDragZone.value = !isDragZone.value;
}

function handeDropFile(e: DragEvent) {
  imageValue.value = e.dataTransfer?.files[0];
  isDragZone.value = false;
}

watch(imageValue, (current, prev) => {
  const validation = ["image/jpeg", "image/jpg", "image/png"];
  if (!validation.includes(current.type)) {
    alertImage.value = true;
    imageValue.value = "";
  } else {
    alertImage.value = false;
  }
});

const imagePreview = computed(() => {
  return URL.createObjectURL(imageValue.value);
});
</script>

<template>
  <main>
    <section aria-label="main-content">
      <h1 class="text-2xl font-semibold">Create Invoices</h1>
      <div class="rounded-2xl p-6 bg-blue-50/60 w-full mt-10">
        <div class="flex items-center gap-2">
          <mdicon name="image-plus-outline" size="18" class="text-sky-500" />
          <p class="text-sm text-gray-600">Add Logo Invoice</p>
        </div>
        <div
          :class="`border-dashed border-2 border-sky-200 rounded-2xl bg-sky-100 mt-5 p-5 ${
            isDragZone ? 'drag-active' : ''
          }`"
          draggable="true"
          @dragenter.prevent="toggleDragZone"
          @dragleave.prevent="toggleDragZone"
          @dragover.prevent
          @drop.prevent="handeDropFile"
        >
          <figure class="flex flex-col items-center gap-3">
            <mdicon
              v-if="!imageValue"
              name="image-plus"
              size="40"
              class="text-gray-400 h-20 flex items-center justify-center"
            />
            <img
              v-else
              class="h-20 w-20 rounded-lg object-contain"
              :src="imagePreview"
              alt="image-preview"
            />
            <input
              id="images"
              type="file"
              @change="handleImage"
              class="hidden"
            />
            <figcaption class="text-center">
              <p class="text-[.85rem] tracking-tight">
                Drop your image here, or
                <label
                  for="images"
                  class="text-sky-600 underline cursor-pointer"
                >
                  Browse
                </label>
              </p>
              <p class="text-[.65rem] font-light text-gray-500">
                <span :class="alertImage ? 'active' : ''"
                  >Supports : JPG, PNG, JPEG</span
                >
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.active {
  color: red !important;
}

.drag-active {
  background-color: rgb(165, 226, 255);
}
</style>
