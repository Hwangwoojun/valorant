<script setup>
/* eslint-disable */
import { ref } from "vue";

const player = ref({
  name: "크로니클",
  nationality: "러시아",
  born: "August 16, 2002 (age 21)",
  status: "활성화",
  yearsActive: "2020년부터 ~",
  role: "In-game leader",
  team: "Fnatic",
  totalWinnings: "$253,727",
  signatureAgents: ["소바", "바이퍼", "스카이"],
  image: require("../../../assets/아스나.jpg"),
});
</script>

<template>
  <div class="dnwns">
    <div class="player-info">
      <div class="header">
        <img
          :src="require(`../../../assets/${player.name.toLowerCase()}.jpg`)"
          :alt="player.name"
          class="player-header-image"
        />
        <h1>Chronicle</h1>
        <p class="player-subtitle">In-game leader | Fnatic</p>
      </div>
      <div class="details">
        <div class="detail-section">
          <h2>개인 정보</h2>
          <p><strong>국적 : </strong> {{ player.nationality }}</p>
          <p><strong>나이 : </strong> {{ player.born }}</p>
          <p><strong>상태 : </strong> {{ player.status }}</p>
          <p><strong>데뷔 : </strong> {{ player.yearsActive }}</p>
        </div>
        <div class="detail-section">
          <h2>성과</h2>
          <h3><strong>총 상금 :</strong> {{ player.totalWinnings }}</h3>
          <p>
            <strong>주로 많이하는 챔피언 : </strong>
            {{ player.signatureAgents.join(", ") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.dnwns {
  background: linear-gradient(to right, #fd9696, #ffffff);
  height: 100%;
  padding-top: 2.5%;
  padding-bottom: 5%;
}

.player-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.5s;
  background: linear-gradient(to right, #fd9696, #ffffff);
}

.header {
  text-align: center;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1s;
}
.player-header-image {
  width: 550px;
  height: auto;
  border-radius: 5%;
  border: 4px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1.5s;
}

.player-info h1 {
  font-size: 2.5em;
  margin-bottom: 5px;
  color: black;
  font-size: 45px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 2s;
}

.player-subtitle {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1s;
}

.details {
  display: flex;
  justify-content: space-around;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1s;
}

.detail-section {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 2s;
}

.detail-section h2 {
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1.5s;
}

.detail-section p {
  margin: 5px 0;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1.5s;
}
</style>
