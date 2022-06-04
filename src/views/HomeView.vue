<template>
  <div class="home w-1/2 mx-auto">
    <section class="m-auto flex flex-row justify-between p-2">
      <button class="rounded bg-green-700 p-2" @click="increaseDay">
        <span class="text-white">Speed Date</span>
      </button>
      <button class="rounded bg-red-700 p-2" disabled>
        <span class="text-white">{{ day }}</span>
      </button>
    </section>

    <section class="m-auto flex flex-col p-2">
      <input
        type="text"
        class="appearance-none border border-b px-3 py-2"
        placeholder="Enter a name"
        v-model="username"
      />
      <input
        type="number"
        class="appearance-none border border-b px-3 py-2"
        placeholder="Enter amount to save"
        v-model="amount"
      />
      <select v-model="selVal" class="my-1" @change="showInfo">
        <option v-for="tier in tiers" :key="tier.ROI">
          {{ tier.tier }}
        </option>
      </select>
      <button class="rounded bg-red-400 p-2" @click="verify">
        <span class="text-white">Invest</span>
      </button>
    </section>
    <section class="m-auto flex flex-col p-2" v-if="selVal != null">
      Amount - {{ showInfo().money }}: {{ showInfo().ROI }}% per week
    </section>
    <section class="m-auto flex flex-col p-2" v-if="riders.length > 0">
      <table class="w-full text-left flex flex-col" id="method">
        <tbody>
          <tr
            class="flex justify-between"
            v-for="(rider, i) in riders"
            :key="i"
          >
            <td scope="row">
              {{ rider.name }}
            </td>
            <td scope="row">
              {{ rider.daySaved }}
            </td>
            <td scope="row">
              {{ rider.tier }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
  name: "HomeView",
  setup() {
    const store = useStore();
    const tiers = ref(null);
    const selVal = ref(null);
    const username = ref(null);
    const riders = ref([]);
    const day = ref(0);
    const amount = ref();

    onMounted(() => {
      tiers.value = store.state.tiers;
      // loadRiders()
    });

    function verify() {
      if (selVal.value != null && username.value.trim() != null) {
        let getTier = Array.from(tiers.value).filter((tier) => {
          return tier.tier == selVal.value;
        });

        if (amount.value != getTier[0].money) {
          alert(`amount must be ${getTier[0].money}`)
        } else {
          const newRider = {
          name: username.value.trim(),
          tier: selVal.value,
          daySaved: day.value,
          amountSaved: day.value,
        };

        riders.value.push(newRider);
        }
      }
    }

    function showInfo() {
      return Array.from(tiers.value).filter((tier) => {
        return tier.tier == selVal.value;
      })[0];
    }

    function increaseDay() {
      day.value += 1;
    }

    // function loadRiders() {
    //   if(JSON.parse(localStorage.getItem("riders")) != null) {
    //     riders.value = JSON.parse(localStorage.getItem("riders"));
    //   }
    // }

    return {
      tiers,
      verify,
      selVal,
      username,
      showInfo,
      riders,
      day,
      increaseDay,
      amount,
    };
  },
};
</script>
