<template fluid>
<div class="col">
  <v-container>
    <v-card-title>
      <v-card-text><div class="tit">Category</div></v-card-text>
      
    </v-card-title>
    <v-row> 
      
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
        
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="pink lighten-3"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Fashion</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/dress.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
         </div>
      </v-col>
      
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="orange lighten-2"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Travel</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/travel.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
        </div>
      </v-col>
      
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="orange"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Entertaiment</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/television.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
        </div>
      </v-col>
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="blue darken-1"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Electronics</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/device.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
        </div>
      </v-col>
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="yellow accent-2"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Home</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/home.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
        </div>
      </v-col>
      <v-col cols="10" md="2" sm="4" xs="5">
        <div class="sub">
        <router-link style="text-decoration: none" to="/travel">
          <v-card
            class="travel"
            max-height="150"
            max-width="120"
            color="cyan accent-3"
          >
            <v-card-text class="text-xs-center">
              <div class="category">Other</div>
              <v-img
                max-height="90"
                max-width="90"
                src="..//assets/more.png"
              ></v-img>
            </v-card-text>
          </v-card>
        </router-link>
        </div>
      </v-col>
      
    </v-row>

    <v-divider></v-divider>
    <v-divider></v-divider>
    
  </v-container>

  <v-container>
    
    <v-row> 
      
     
    </v-row>

    <v-divider></v-divider>
  </v-container>
  </div>
  
</template>

<style>
.tit{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
font-size: 50px;
}
.category {
  text-align: center;
  color: black;
 
}
.sub:hover {
  color: orange;
   transform: translate(0, -10px);
   
}
.col{
  align-content: center;
}
</style>
