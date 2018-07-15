<template>
  <div>
    <div>This is the homepage</div>
    <font-awesome-icon icon="coffee"></font-awesome-icon>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
      }
    },
    created(){
      axios({
        method: 'post',
        url: '/api/auth/login',
        data: {
          email: 'admin@mail.com',
          password: 'password',
        }
      }).then(function(response) {
        console.log(response.data);
      });
    },
  }
</script>
