<template>
    <navbarPageVue/>
    <v-container class="mt-5">
        <div class="row ">
            <div class="col-md-6 offset-md-3 card">

                <div>
                <label class="form-label mt-2" for="">Kullanıcı Adı</label>
                <input v-model="todoList.username" class="form-control" type="text" placeholder="Kullanıcı Adınızı Giriniz">
            </div>
            <div>
                <label class="form-label mt-2" for="">Şifreniz</label>
                <input v-model="todoList.password" class="form-control mb-4" type="password" placeholder="Şifrenizi Giriniz">
            </div>

            <div class="d-flex justify-content-end">
                <button @click="goHome()" class="btn btn-success ">Giriş Yap</button>
            </div>
            </div>
           
        </div>
    </v-container>
</template>

<script>
        import axios from "axios"
        import cryptoJs from "crypto-js"
        export default{
            data(){
                return{
                    todoList:{
                        username: null,
                        password:null
                    }
                }
            },
            methods:{
                goHome(){

                
                const password = cryptoJs.SHA256(this.todoList.password, this.$store.getters._saltKey).toString()
                axios.get(`http://localhost:3000/user?username=${this.todoList.username}&password=${password}`,).then(get_response => {
                    console.log('get_response :>> ', get_response);
                    if(get_response?.data?.length > 0){
                       this.$store.commit('userPush', get_response?.data[0])
                       this.$router.push({name : 'homePage'})
                    }else{
                        alert('Gidemezsin')
                    }
                })
            }
            }
        }
</script>

