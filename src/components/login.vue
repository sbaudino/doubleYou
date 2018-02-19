<template lang="html">
  <full-form
    url="http://localhost:8080/src/server/login.txt"
    message="Identificate o crea una cuenta nueva aqui mismo"
    checData=false
    email=''
    password=''>
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
