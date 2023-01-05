<template>
  <div class="loading bg-secondary">
    <div class="logo">
      <img src="~assets/logo-light.png" />
    </div>
    <q-circular-progress indeterminate rounded size="50px" color="primary" class="q-ma-md" />
  </div>
</template>


<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & img {
    width: 200px;
    height: auto;
    margin-bottom: 30px;
  }
}
</style>
