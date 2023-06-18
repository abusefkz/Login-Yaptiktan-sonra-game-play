<template>
    <div class="header">
    <v-container>
        <div  class="navbar navbar-expand-lg">
            <div v-if="_isAuthenticated">
            <a class="navbar-brand" href="#">AnaSayfa</a>
        </div>
            <div v-else class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    
                    <router-link style="text-decoration: none;" :to="{name: 'registerPage'}">
                    <li  class="nav-item">
                        <a  class="nav-link register-login" href="#">Kayıt Ol</a>
                    </li> </router-link>
                    <router-link class="text-decoration-none" :to="{name : 'loginPage'}">
                    <li  class="nav-item ms-2 register-login">
                        <a class="nav-link" href="login" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class=" bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                         <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                            
                            Giriş Yap
                        </a>
                    </li>
                </router-link>
                </ul>
            </div>
        </div>
    </v-container>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default{
        data(){
            return{}
        },
        computed:{
            ...mapGetters(['_isAuthenticated'])
        }
    }
</script>