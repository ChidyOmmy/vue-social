<template>
  <div id="ChatList">
    <v-app-bar fixed color="teal darken-2" dark app>
      <app-bar-title>WhatsApp</app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension class="ma-0 pa-0 menu">
        <v-btn icon class="ma-0">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-tabs class="ma-0">
          <v-tab @click="list = 'chat' ">Chat</v-tab>
          <v-tab @click="list = 'status' ">Status</v-tab>
          <v-tab @click="list = 'calls' ">Calls</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-list>
      <v-slide-x-transition>
        <v-list-item-group v-if="list == 'chat' ">
          <v-list-item two-lines outlined to="/chat" v-for="i in 17" :key="i">
            <v-list-item-avatar>
              <v-avatar x-large color="grey">
                <v-img avatar src="https://scontent.fdar2-1.fna.fbcdn.net/v/t1.0-9/98090947_108915614166364_5026416452895244288_n.png?_nc_cat=105&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_eui2=AeEhm3lA7CoHh1RUdPz4HCl6xoc0VY_WB6PGhzRVj9YHozhvblsorJda7dx-tTKgMQDo3_vZFPF8WKG5pYLkWDhiP20yHVMslR3pmXM6JjDLgiErD8m8N5OUl2D-aKQ5MAg&_nc_ohc=kqaTeoDKnQsAX_baBS3&_nc_pt=5&_nc_eh=4e9ce21f98aa5256dcd47387a44007e1&_nc_ht=scontent.fdar2-1.fna&oh=7edf7a032555cfc9f62bbcc77a14ce57&oe=5F4D308E"></v-img>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Chidy</v-list-item-title>
              <v-list-item-subtitle>Are you there
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-badge color="green" content="2" bottom></v-badge>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-slide-x-transition>
      <v-slide-x-transition>
        <v-list-item-group v-if="list == 'status' ">
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar color="grey">
                <v-img avatar src="https://scontent.fdar2-1.fna.fbcdn.net/v/t1.0-9/98090947_108915614166364_5026416452895244288_n.png?_nc_cat=105&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_eui2=AeEhm3lA7CoHh1RUdPz4HCl6xoc0VY_WB6PGhzRVj9YHozhvblsorJda7dx-tTKgMQDo3_vZFPF8WKG5pYLkWDhiP20yHVMslR3pmXM6JjDLgiErD8m8N5OUl2D-aKQ5MAg&_nc_ohc=kqaTeoDKnQsAX_baBS3&_nc_pt=5&_nc_eh=4e9ce21f98aa5256dcd47387a44007e1&_nc_ht=scontent.fdar2-1.fna&oh=7edf7a032555cfc9f62bbcc77a14ce57&oe=5F4D308E"></v-img>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>My status</v-list-item-title>
              <v-list-item-subtitle>yesterday 23:59</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inline></v-divider>
          <v-subheader>Contacts</v-subheader>
          <v-list-item v-for="i in 5" :key="i" to="/status">
            <v-list-item-avatar class="white--text statusborder">
              <v-avatar x-large color="error" class="statusborder">
                <v-img src="https://scontent.fdar3-1.fna.fbcdn.net/v/t1.0-9/98104098_108915637499695_8258357335722819584_n.png?_nc_cat=106&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_eui2=AeFOMuKPAr778HaRB9B6KKQ5Weo8DwBdc4xZ6jwPAF1zjArl3f9OcU8SHnsdp30zg3qwvlwGoBqp5cO4jdm4sfjQ7Urv7DFUilS0w6quFMFeO5FLflSEBxjslV2sisj_XH4&_nc_ohc=viAkrpEVDd4AX8lI87v&_nc_pt=5&_nc_eh=4e9ce21f98aa5256dcd47387a44007e1&_nc_ht=scontent.fdar3-1.fna&oh=a4b6f5457b6354d68d1ffe1c0c47d8da&oe=5F4D60AE"></v-img>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Ciara</v-list-item-title>
              <v-list-item-subtitle>now</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-slide-x-transition>
      <v-slide-x-transition>
        <v-list-item-group v-if="list == 'calls' ">
          <v-list-item v-for="i in 5" :key="i">
            <v-list-item-avatar color="green accent-4">
              <v-avatar color="green accent-4">
                <v-img src="https://scontent.fdar3-1.fna.fbcdn.net/v/t1.0-9/98114792_106616724396253_6122820568753373184_n.png?_nc_cat=108&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_eui2=AeEe2tJ8bfr2VxLJvpykai848SyTgmMPCaTxLJOCYw8JpJfu-cXlFnhVprbujv9M4l1JJwsk7gOpyLwgxL1KMuD_-hnMyPZWUc81LDg-zUFDsQvEk-moAzLgHxuC2Q5blPQ&_nc_ohc=Ijo7hzsbeNgAX_rBgcs&_nc_pt=5&_nc_eh=4e9ce21f98aa5256dcd47387a44007e1&_nc_ht=scontent.fdar3-1.fna&oh=41d1c62a7db1c52fd00196ccf378558f&oe=5F4D67B2"></v-img>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Mary Jackson</v-list-item-title>
              <v-list-item-subtitle>
                <v-icon small color="error">mdi-arrow-bottom-left</v-icon>
                yesterday 23: 51
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-actions>
              <v-btn icon>
                <v-icon color="success">mdi-phone</v-icon>
              </v-btn>
            </v-list-item-actions>
          </v-list-item>
        </v-list-item-group>
      </v-slide-x-transition>
    </v-list>
    <v-slide-y-reverse-transition reverse>
      <v-btn small fab fixed bottom right app class="mb-16 mr-2" v-if="list == 'status' ">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-slide-y-reverse-transition>
    <v-fab-transition>
      <v-btn fab bottom right fixed dark color="green darken-1">
        <v-icon v-if="list == 'chat' ">mdi-message</v-icon>
        <v-icon v-if="list == 'status' ">mdi-camera</v-icon>
        <v-icon v-if="list == 'calls' ">mdi-phone</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
  export default {
    name: 'Chatlist',
    data() {
      return {
        list: 'chat'
      }
    }
  }
  </script>

  <style scoped>
    .menu {
      position: sticky;
      top: 0;
    }
    .statusborder {
      border: 2px solid #00d1d1;
    }
  </style>