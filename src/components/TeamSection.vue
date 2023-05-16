<!-- Emil Skriver -->

<script setup>

import { ref } from 'vue'
import { request } from "../datocms";
import { Image as DatocmsImage } from "vue-datocms";

const data = ref(null);
const error = ref(null);
const loading = ref(true);
const ting = ref(null);

const EMPLOYEE_QUERY = `
  query Employees {
    employee {
      employees {
        id
        employeeImage {
          id
        }
        employeeName
        employeeNickname
      }
    }
  }
`;

request({ query: EMPLOYEE_QUERY }).then(result => {
  data.value = result;
  ting.value = data.value.employee.employees;
  console.log(ting.value);
}).catch(e => {
  error.value = e;
}).finally(() => {
  loading.value = false;
});

</script>

<template>
    <section class="bg-cream-primary">
        <div class="max-w-sm px-4 md:max-w-content-width mx-auto">
            <h2>MØD HOLDET BAG BAREN</h2>
            <p class=" text-black-primary max-w-[685px] mb-4">Vores personale står klar til enhver tid at give dig en personlig betjening. Herunder ser du vores faste personale som du kan være sikker på at møde i baren når du kommer.</p>
            <div class=" flex flex-wrap w-full justify-center md:grid md:grid-cols-4">

                <div class="w-[261px] h-[410px] bg-brown-primary p-2"  v-for="employee in ting" :key="employee.id">
                    <!-- <img class="border-solid border-[2px] border-border-white mb-2" :src="ting.employeeImage.url" :alt="employee.employeeName"> -->
                    <div class="w-full">
                      <p class="team-name mb-[-4px]">{{ ting.employeeName }}</p>
                      <p class="team-nickname">{{ ting.employeeNickname }}</p>
                    </div>
                  </div>

            </div>
        </div>
    </section>
</template>