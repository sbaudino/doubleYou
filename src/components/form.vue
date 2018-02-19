<template lang="html">
  <div>
    <ul class="sections" @mouseover="displayMenu">
      <li class="border-right">
        <span>Section 1</span>
      </li>
      <li class="border-right">
        <span>Section 2</span>
      </li>
      <li class="border-right">
        <span>Section 3</span>
      </li>
      <li class="login">
        <form @submit.prevent="onSubmit">
          <div class="div-form">
            <span class="form-span">{{rightMessage}}</span>
            <div class="form-content">
              <div v-if="!logged">
                <input type="text" ref="email" placeholder="E-mail">
                <input type="text" ref="password" placeholder="Password">
                <button type="submit" class="btn-submit">OK</button>
              </div>
            </div>
          </div>
        </form>
      </li>
      <li>
        <span>Section 4</span>
      </li>
    </ul>
    <div class="menu" v-if="showMenu && logged">
      <ul>
        <li v-for="dish in dishesToShow">
          <router-link style="color: black" :to="`/dish/${dish.name.split(' ').join('').toLowerCase()}`">{{dish.name}}</router-link>
        </li>
      </ul>
      <a class="menu-button" @click.prevent="toggleMenu">{{buttonText}}</a>
    </div>
  </div>
</template>

<script>
import ajax from 'src/ajax';

export default {
  name: 'form',
  props: ['url', 'message', 'checkData', 'email', 'password', 'logged'],
  data() {
    return {
      showMenu: false,
      dishes: [],
      menuExpanded: false,
    }
  },
  computed: {
    rightMessage() {
      return this.message;
    },
    buttonText() {
      if (this.menuExpanded) {
        return 'Less';
      }
      return 'More';
    },
    dishesToShow() {
      if (this.menuExpanded) {
        return this.dishes;
      }
      return this.dishes.slice(0,6);
    }
  },
  mounted() {
    if(this.logged) {
      ajax('http://localhost:8080/src/server/dishes.txt')
        .then((data) => {
          this.dishes = data.dishes;
        });
    }
  },
  methods: {
    onSubmit() {
      if(this.checkData) {
        if(this.email === this.$refs.email.value && this.password === this.$refs.password.value) {
          ajax(this.url)
            .then((data) => {
              this.$router.push({name: 'home'});
            });
        } else {
          this.message = 'Los datos no coinciden';
        }
      } else {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;
        ajax(this.url)
          .then((data) => {
            this.$router.push({name: 'newcustomer', params: {
              email: email,
              password: password
            }});
          });
      }
    },
    displayMenu() {
      this.showMenu = true;
    },
    toggleMenu() {
      this.menuExpanded = !this.menuExpanded;
    }
  }
}
</script>

<style>
</style>
