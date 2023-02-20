<script setup lang="ts">
import TinderIcon from "@/components/icon/TinderIcon.vue";
import StackIcon from "@/components/icon/StackIcon.vue";
import InvoiceIcon from "@/components/icon/InvoiceIcon.vue";
import TransactionIcon from "@/components/icon/TransactionIcon.vue";
import PaymentIcon from "@/components/icon/PaymentIcon.vue";
import SettingIcon from "@/components/icon/SettingIcon.vue";
import SupportIcon from "@/components/icon/SupportIcon.vue";
import CommunityIcon from "@/components/icon/CommunityIcon.vue";
import { tw } from "@/utils/tailwindClass";
import { ref } from "vue";

const appearceNavbar = ref(false);
</script>

<template>
  <div id="close-btn-wrapper" class="fixed p-1 bg-black">
    <button class="flex flex-col gap-[.2rem]" @click="appearceNavbar = true">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
  </div>
  <aside
    :class="[
      'w-[300px] lg:w-[20%] bg-white py-6 pl-4 flex flex-col justify-between fixed lg:relative top-0 bottom-0 z-[10] shadow-md min-h-screen transition-[left] ease-in-out duration-300',
      appearceNavbar ? 'left-0' : '-left-[3000px] lg:left-0',
    ]"
  >
    <div class="flex flex-col gap-10" aria-label="top-side">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1" aria-label="logo">
          <TinderIcon />
          <h1 class="text-lg font-bold tracking-wide text-black/70">
            Sinvoice
          </h1>
        </div>
        <button @click="appearceNavbar = false" class="mr-6 lg:hidden">
          <mdicon name="close" size="20" />
        </button>
      </div>
      <figure
        :class="
          tw(
            'flex items-center gap-2 bg-gray-100/70 rounded-lg py-2 pl-2 pr-9 w-fit'
          )
        "
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
      <nav class="grid gap-y-3">
        <RouterLink to="/" class="unactive" active-class="active">
          <StackIcon />
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/invoice" class="unactive" active-class="active">
          <InvoiceIcon />
          <span>Invoice</span>
        </RouterLink>
        <RouterLink to="/transaction" class="unactive" active-class="active">
          <TransactionIcon />
          <span>Transaction</span>
        </RouterLink>
        <RouterLink to="/payment" class="unactive" active-class="active">
          <PaymentIcon />
          <span>Payment</span>
        </RouterLink>
        <RouterLink to="/setting" class="unactive" active-class="active">
          <SettingIcon />
          <span>Setting</span>
        </RouterLink>
      </nav>
    </div>
    <nav class="grid gap-y-2">
      <RouterLink to="/support" class="unactive" active-class="active">
        <SupportIcon />
        <span>Support</span>
      </RouterLink>
      <RouterLink to="/community" class="unactive" active-class="active">
        <CommunityIcon />
        <span>Community</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.active,
.unactive {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 300;
  font-size: 0.92rem;
}
.active,
.active svg {
  opacity: 1 !important;
}

.unactive,
.unactive svg {
  opacity: 0.5;
}

#close-btn-wrapper {
  border-radius: 0 0 7px 0;
}
.bar {
  height: 3px;
  width: 16px;
  background-color: white;
  border-radius: 5px;
}
</style>
