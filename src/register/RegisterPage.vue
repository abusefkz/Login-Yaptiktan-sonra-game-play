<template>
    <navbarPageVue />
    <v-container class="mt-5">
        <div class="row ">
            <div class="col-md-6 offset-md-3 card">
                <div>
                    <label class="form-label" for="user">Adınızı Giriniz</label>
                    <input v-model="userList.user" class="form-control" placeholder="İsminizi Giriniz"  type="text" id="user">
                </div>
                <div>
                <label class="form-label mt-2" for="username">Kullanıcı Adı</label>
                <input v-model="userList.username" class="form-control" type="text" placeholder="Kullanıcı Adınızı Giriniz" id="username">
            </div>
            <div>
                <label class="form-label mt-2" for="password">Şifreniz</label>
                <input v-model="userList.password" class="form-control mb-4" type="password" placeholder="Şifrenizi Giriniz" id="password">
            </div>

            <div  class="d-flex justify-content-center mb-3">
                <button @click="pushList(userList)" class="btn btn-success ">Kayıt Ol</button>
            </div>
            <h6  class="text-sm text-center">Üyeliğiniz Var mı?
                <span style="cursor: pointer; color: rgba(65, 1, 1, 0.918); text-decoration: underline;"  @click="pushList()">Giriş Yap</span></h6>
            </div>
           
        </div>
    </v-container>
</template>

<script>
    import axios from "axios"
  
    import CryptoJS from "crypto-js"

    export default{
        data(){
            return{
                userList:{
                    user: null,
                    username: null,
                    password:null
                }
            }
        },
        methods:{
            pushList(){
                const password = CryptoJS.SHA256(this.userList.password, this.$store.getters._saltKey).toString()
                axios.post(`http://localhost:3000/user`, {...this.userList, password}).then(post_response => {
                    console.log('post_response :>> ', post_response);
                    this.$router.push({name: 'loginPage'})
                })
            }
        },
       
    }
</script>