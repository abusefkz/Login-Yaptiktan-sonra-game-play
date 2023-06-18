<template>
        <div class="container mt-5">
            <div class="row card">
                <div>
                    <h3 class="text-center text-white">60 Saniyede Kaç Kelime Yazabilirsin?</h3>
                </div>
                <div class="text-center mt-4">
                   
                    <button @click="start = !start ? disabled : []" class="btn mb-4">BAŞLA</button>
                </div>
                <div v-if="start==false">
                <div >
                   <p class="text-black">Toplam Girilen Kelime: {{ tgk }}</p> 
                    Doğru Sayısı: <h6 class="text-danger fw-bold">{{ numberTrue }}</h6>
                    <br>
                    Yanlış Sayısı: <h6 class="text-danger fw-bold">{{ numberFalse }}</h6>
                    <br>
                    
                </div>
                <div v-if="this.time ===0" class="alert alert-warning mt-3">
                    <h3>OYUN BİTTİ</h3>
                </div>
                <div v-else>
                <div  class="card mt-3">
                  <div  class="card-body" >
                      <span  v-for="(word,key) in words" :key="key"
                        v-bind:class="key!=0  || ifsoWord "
                        class="ml-2 words text-black">
                          {{ word }}
                      </span>
                      
                  </div>
              </div>
            
              
                <div  class="input-group mt-5 mb-5"> 
                    <input v-model="wordsİnput" type="text" class="form-control" style="font-size: 20px;" >
                    <div class="input-group-append">
                        <button class="btn bg-white btn-outline-secondary ml-2" type="button">{{time}}.sn</button>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default{
       
        data(){
            return{
                words:[],
                wordsİnput: null,
                start: true,
                isTrue: true,
                numberTrue: 0,
                numberFalse: 0,
                time : 60,
                interval: false,
                isRunnig: false,


            }
        },
        created(){
            axios.get('http://localhost:3000/name').then(axios_response => {
                this.words = axios_response?.data || []
            })
        },
        watch:{
            wordsİnput(val){
                if(!this.isRunnig)this.timeInterval()
            
                const words = this.words[0].slice(0,val.length)
                const wordİnput = val.replace(" ","")
                this.isTrue = wordİnput === words

                if(val.indexOf(" ")!== -1){
                    return this.isTrue ? this.numberTrue++ : this.numberFalse++,
                    this.wordsİnput = "",
                    this.words.splice(0,1)
                }
            }
        },
        computed:{
            tgk(){
                return 56 - this.words.length
            },
            ifsoWord(){
               return this.isTrue ? 'cssWord' : 'cssWord bg-danger'
            }
        },
        methods:{
            timeInterval(){
                this.isRunnig=true
                this.interval = setInterval(this.timeCount, 1000)
            },

            timeCount(){
                if(this.time === 0){
                    clearInterval(this.interval)
                    return
                }
                this.time--
            }
        }
    }
</script>