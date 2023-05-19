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
            responsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        aspectRatio
        alt
        title
        base64
      }
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
    <section class="bg-cream-primary px-3">
        <div class="max-w-[330px] md:max-w-content-width mx-auto">
            <h2>MØD HOLDET BAG BAREN</h2>
            <p class=" text-black-primary max-w-[685px] mb-4">Vores personale står klar til enhver tid at give dig en personlig betjening. Herunder ser du vores faste personale som du kan være sikker på at møde i baren når du kommer.</p>
            <div class=" flex flex-wrap w-full gap-3 justify-center md:grid md:grid-cols-4">

                  <div class="w-[261px] h-[410px] bg-brown-primary p-[10px] box-border"  v-for="employee in ting" :key="employee.id">
                    <div class="w-fit mx-auto">
                        <datocms-image class="border-solid border-[4px] border-border-white mb-2 object-cover" :data="employee.employeeImage.responsiveImage" />
                        <div class="w-full">
                          <p class="team-name mb-[-4px]">{{ employee.employeeName }}</p>
                          <p class="team-nickname">{{ employee.employeeNickname }}</p>
                        </div>
                    </div>  
                  </div>

            </div>
        </div>
    </section>
</template>