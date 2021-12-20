<template>
  <div class="hello">
    <h3>{{ msg }}</h3>


    <template class="cardRow">
      <v-row
        class="blue"

      
      >
        <v-col
        sm="6"

        >
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            빚지고 런던
          </div>
        </v-col>
           <v-col>
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            dd
          </div>
        </v-col>
           <v-col>
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            dd
          </div>
        </v-col>



      </v-row>


    </template>











  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>