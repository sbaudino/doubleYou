<template lang="html">
  <full-form
    url=""
    message="¡Bienvenido!"
    checData=false
    email=''
    password=''
    logged=true>
  </full-form>
</template>

<script>
import fullForm from 'components/form';

export default {
  name: 'Login',
  components: {
    fullForm
  }
}
</script>

<style lang="css">
</style>
