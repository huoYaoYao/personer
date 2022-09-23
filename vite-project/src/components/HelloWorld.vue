<script setup lang="ts">
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import { login } from '../api/user'

  const store = useStore()
  const count = computed(() => {
    return store.state.count
  })
  const onClick = () => {
    store.commit('increment')
  }

  onMounted(() => {
    login({ account: 'admin', password: '123456' }).then(res => {
      console.log(res)
    })
  })
</script>

<template>
  <button type="button" @click="onClick">count is: {{ count }}</button>
</template>

<style scoped></style>
