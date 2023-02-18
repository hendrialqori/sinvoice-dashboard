<script setup lang="ts">
import SeachIcon from "@/components/icon/SeachIcon.vue";
</script>
<template>
  <main>
    <section aria-label="main-content">
      <h1 class="text-2xl font-semibold">Transaction</h1>
      <div class="rounded-md mt-10" aria-label="table-wrapper">
        <div class="flex items-center justify-between" aria-label="top">
          <div class="flex items-center gap-3 bg-gray-50 w-5/12 p-3 rounded-md">
            <div>
              <SeachIcon />
            </div>
            <input
              type="text"
              class="text-xs placeholder:font-light tracking-wide bg-gray-50 outline-none w-full"
              placeholder="search for transaction"
            />
          </div>
          <div
            class="bg-gray-100/50 rounded-md p-[.35rem] flex items-center gap-5"
          >
            <button
              class="bg-white text-xs p-2 rounded-md tracking-wide ml-2 px-3"
              id="btn-week"
            >
              This week
            </button>
            <mdicon name="calendar-month-outline" size="13" />
          </div>
        </div>
        <table class="w-full mt-8">
          <thead>
            <tr class="border-b-[1px] border-gray-100">
              <th class="text-xs font-normal w-5/12 text-left pb-4 pl-4">
                Type
              </th>
              <th class="text-xs font-normal w-3/12 text-left pb-4">Amount</th>
              <th class="text-xs font-normal w-3/12 text-left pb-4">Date</th>
              <th class="text-xs font-normal w-2/12 text-left pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b-[1px] border-gray-100">
              <td class="pl-4 py-5">
                <figure class="flex items-center gap-6">
                  <div class="bg-gray-100 rounded-full w-fit p-2">
                    <mdicon name="apple" size="15" />
                  </div>
                  <figcaption class="text-[.78rem] font-normal">
                    Apple service
                  </figcaption>
                </figure>
              </td>
              <td class="text-sm font-extrabold">+ $180,00</td>
              <td class="text-[.73rem] text-gray-400">Dec 09 11:21</td>
              <td>
                <span
                  class="bg-green-100 text-green-700 text-xs font-semibold py-1 px-3 rounded-2xl"
                  >Paid</span
                >
              </td>
            </tr>
            <tr class="border-b-[1px] border-gray-100">
              <td class="pl-4 py-5">
                <figure class="flex items-center gap-6">
                  <div class="bg-gray-100 rounded-full w-fit p-2">
                    <mdicon name="google" size="15" />
                  </div>
                  <figcaption class="text-[.78rem] font-normal">
                    Google service
                  </figcaption>
                </figure>
              </td>
              <td class="text-sm font-extrabold">+ $1610,00</td>
              <td class="text-[.73rem] text-gray-400">Dec 09 11:21</td>
              <td>
                <span
                  class="bg-yellow-100 text-yellow-700 text-xs font-semibold py-1 px-3 rounded-2xl"
                  >Pending</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<style scoped>
#btn-week {
  box-shadow: 0px 2px 3px rgba(88, 88, 88, 0.1);
}
</style>
