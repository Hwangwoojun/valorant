<script setup>
/* eslint-disable */
import { ref } from "vue";

const players = ref([
  {
    name: "Xeppaa",
    role: "척후대",
    country: "미국",
    image: require("../../../assets/제퍼.webp"),
  },
  {
    name: "OXY",
    role: "타격대",
    country: "미국",
    image: require("../../../assets/옥시.jpg"),
  },
  {
    name: "vanity",
    role: "연막",
    country: "미국",
    image: require("../../../assets/배너티.jpg"),
  },
  {
    name: "moose",
    role: "감시자",
    country: "캐나다",
    image: require("../../../assets/무스.webp"),
  },
  {
    name: "runi",
    role: "척후대, 연막",
    country: "미국",
    image: require("../../../assets/루니.webp"),
  },
]);
</script>

<template>
  <div class="container">
    <div class="header">
      <img src="../../../assets/c9.png" alt="100T Logo" class="team-logo" />
    </div>
    <div class="players">
      <router-link
        v-for="(player, index) in players"
        :key="player.name"
        :to="`/${player.name.toLowerCase()}`"
        class="player-card"
        :style="{ animationDelay: `${(index + 2) * 0.5}s` }"
      >
        <div class="player-info">
          <img :src="player.image" :alt="player.name" class="player-image" />
          <h2>{{ player.name }}</h2>
          <p><strong>역할:</strong> {{ player.role }}</p>
          <p><strong>나라:</strong> {{ player.country }}</p>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logoFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.container {
  padding-top: 1%;
  padding-bottom: 3%;
  text-align: center;
  background: linear-gradient(to right, #fd9696, #ffffff);
}

.header {
  margin-bottom: 40px;
}

.team-logo {
  width: 420px; /* Adjust the size as needed */
  animation: logoFadeIn 1s ease forwards;
  animation-delay: 0s;
}

.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.player-card {
  text-decoration: none;
  color: inherit;
  opacity: 0; /* Initially hidden */
  animation: fadeIn 1s ease forwards;
}

.player-info {
  background: white;
  border: 2px solid #bcbcbc;
  border-radius: 10px;
  width: 300px;
  height: 340px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.player-info:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.player-image {
  width: 100%;
  height: 190px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.player-info h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.player-info p {
  margin: 5px 0;
}
</style>
