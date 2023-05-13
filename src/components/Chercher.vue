<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const ActualDate = new Date();
const ActualYear = ActualDate.getFullYear();

const items = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('http://13.38.113.6:3000/donnees');
    const data = response.data;

    data.forEach(item => {
      items.value.push({
        firstname: item.prenom_femme,
        lastname: item.nom_femme,
        age: ActualYear - item.annee_naissance_femme,

        top: item.tete_femme,
        bottom: item.back_femme
      });
    });

    isLoading.value = false;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="main-menu">
    <div class="array-card" v-if="!isLoading">
      <div class="card" v-for="item in items" :key="item.firstname">
        <div class="wrapper-card">
          <div>
            <div class="id">
              <span class="firstname"> {{ item.firstname }} </span>
              <span class="lastname upper"> {{ ' ' + item.lastname }} </span>
            </div>
            <div class="desc">
              <span class="age"> {{ item.age }} ans</span>
            </div>
          </div>
          <div class="rang">
            <span> {{ item.top + item.bottom }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="loading-page" v-else>
      <i class="fa-solid fa-database fa-bounce"></i>
    </div>
  </div>
</template>


<style scoped>
.main-menu {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 60%;
  height: 60%;
}

.loading-page {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 4rem;
}

.card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  width: 300px;
  height: 80px;

  background-color: #f5e6ca;
  color: #343f56;

  user-select: none;
  cursor: pointer;
}

.wrapper-card {
  margin: 10px;

  width: calc(100% - 20px);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card .id span {
  font-family: 'Hagrid Heavy Extrabold';
  font-size: 1rem;
  margin-bottom: 5px;
}

.card .desc span {
  font-family: 'Roboto';
  font-size: .8rem;
}
.card .rang {
  font-family: 'Hagrid Heavy Extrabold';
  font-size: 2rem;

  margin-bottom: 10px;
}

@media screen and (max-width: 1280px) {}</style>
