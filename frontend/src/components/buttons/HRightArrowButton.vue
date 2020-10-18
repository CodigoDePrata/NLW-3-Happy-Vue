<template>
  <div class="button">
    <img src="@/assets/images/icons/arrow-right.svg" class="icon" />
  </div>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;
}
.button:hover {
  background: #96feff;
}

.icon {
  opacity: 0.5;
  height: 32px;
  width: 32px;
}
</style>