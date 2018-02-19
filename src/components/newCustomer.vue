<template lang="html">
  <full-form
    url="http://localhost:8080/src/server/join.txt"
    message="Por favor, confirma tus datos"
    checkData=true
    :email=this.$route.params.email
    :password=this.$route.params.password>
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
