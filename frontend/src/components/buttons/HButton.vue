<template>
  <div class="button">
    <slot></slot>  
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
</style>