<template lang="html">
  <div class="">
    <full-form
    url=""
    message="¡Bienvenido!"
    checData=false
    email=''
    password=''
    logged=true>
    </full-form>
    <div>
      <div class="images">
        <ul class="images">
          <li v-for="img in dishData.imgs">
            <img :src="`http://localhost:8080/src/assets/${img.url}`" :alt="img.alt">
          </li>
        </ul>
      </div>
      <div class="data">
        <h2>{{dishData.title}}</h2>
        <span class="recommended">Recommended by {{dishData.recommended}} people</span>
        <br>
        <p class="text">{{dishData.text[0]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import fullForm from 'components/form';
import ajax from 'src/ajax';

export default {
  name: 'Login',
  data() {
    return {
      dishData: {}
    }
  },
  components: {
    fullForm
  },
  mounted() {
    ajax(`http://localhost:8080/src/server/content/${this.$route.params.dishUrl}.txt`)
      .then((data) => {
        this.dishData = data;
      });
  }
}
</script>

<style lang="css">
</style>
