<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>

<template>
  <div class="main-menu">
    <div class="menu-description">
      <span class="title upper">Bienvenue sur CHIPS</span>
      <span class="subtitle upper">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, est praesentium eum quibusdam, repellendus perferendis nostrum iure eveniet quos molestias ducimus aliquid voluptatum qui odit ab sed obcaecati ex corrupti?
      </span>
    </div>
    <div class="menu-buttons">
      <router-link to="/Inserer" class="router-link button" draggable="false">
        <i class="fa-sharp fa-solid fa-circle-chevron-right item-button"></i>
        <div class="containt-title">
          <span class="title upper">Insérer</span>
          <span class="subtitle upper">Référence une nouvelle beauté</span>
        </div>
      </router-link>
      <router-link to="/Chercher" class="router-link button" draggable="false">
        <i class="fa-sharp fa-solid fa-circle-chevron-right item-button"></i>
        <div class="containt-title">
          <span class="title upper">Regarder</span>
          <span class="subtitle upper">Viens voir toutes les beautés</span>
        </div>
      </router-link>
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
.title {
  font-family: 'Hagrid Heavy Extrabold';
  margin-bottom: 5px;
}
.subtitle {
  font-family: 'Roboto';
}
.menu-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  height: 30%;
  width: 100%;
}
.menu-buttons {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  width: 100%;
}
.button {
  display: flex;
  justify-content: space-around;
  align-items: center;

  user-select: none;
  cursor: pointer;

  background-color: #f5e6ca;
  color: #343f56;

  width: 300px;
  height: 80px;

  box-shadow: 0 10px 0px #ccbea5;

  transition: 0.05s ease-in-out 0s all;
}
.button:active {
  transform: translate(0, 10px) scaleX(1.05) scaleY(0.95);
  box-shadow: 0 0 0 #ccbea5;
}

.menu-description .title {
  font-size: 4rem;
}
.menu-description .subtitle {
  font-size: 0.9rem;
  text-align: justify;

  width: 65%;
}
.button .title {
  font-size: 1.2rem;
}
.button .subtitle {
  font-size: 0.8rem;
}
.containt-title {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-menu .button .item-button {
    font-size: 1.5em;
    color: #343f56;
    padding: 10px;
}


@media screen and (max-width: 1280px) {
  .main-menu {
    width: 80%;
    height: 80%;
  }
  .menu-buttons {
    flex-direction: column;
    align-items: center;
  }
  .button {
    margin: 20px;
  }
}
</style>
