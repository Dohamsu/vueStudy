<template>

    <transition name="fade"
     v-if="popupOpend">
            <v-overlay
            :z-index="zIndex"
            :value="overlay"
            >
                <v-alert
                 v-if="popupType"
                 type="error"
                >
                {{alertMsg}}
                </v-alert>
                 <v-alert
                  v-if="!popupType"
                  type="success"
                 
                >
                {{alertMsg}}
                </v-alert>
            </v-overlay>
    </transition>
    
</template>

<style scoped>
    .fade-leave-active {
    transition: opacity .3s;
    }
    .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0.1;
    }
</style>


<script>

export default {

  name: 'alert',
//   props: ['msg'],

  data: () => ({

    overlay: true,
    zIndex: 999,
    alertMsg : "",
    popupType : true,
    popupOpend : false,
  
  }),
      components :{
             
      },

  methods : {
      applyMsg(msg,type){
        this.popupOpend = true,
        this.alertMsg   = msg;
        this.popupType  = type !=null && type !="" ? true : false
        setTimeout(() => {
        this.popupOpend = false;
      }, 1000);
      }

  },
  computed : {
  },
  watch:{


  },
  mounted(){}

};
</script>
