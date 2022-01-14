<template>
  <v-card
      max-width="450"
      class="mx-auto mt-15 mb-5"
  >   
      <v-list three-line>
      <template v-for="(item, index) in items">
          <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
          ></v-subheader>

          <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
          ></v-divider>

          <v-list-item
          v-else
          :key="item.title"
          >
          <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
      </template>
      </v-list>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      items: [
        { header: '홈페이지 사용 기술' },
        {
          avatar: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568683636/noticon/hkuhbyocl2mx2keas7ng.png',
          title: 'Vue.js',
          subtitle: `웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립트 프레임워크`,
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg',
            title: 'Vuetify',
            subtitle: 'Vue.js를 위한 컴포넌트 라이브러리이며,  Material Design Framework',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568175385/noticon/iodu1jssf0kwe4oie2dt.png',
          title: 'Docker',
          subtitle: `애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png',
          title: 'Node.js',
          subtitle: '확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼',
        },
        { divider: true, inset: true },
        { header: '보유 기술 스택' },
         {
          avatar: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128552/noticon/mksvojnxnqtvdwrhttce.png',
          title: 'jQuery',
          subtitle: `선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공하는 자바스크립트 라이브러리`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570946287/noticon/qgdiv5ctkcneujidjuv1.png',
          title: 'JavaScript',
          subtitle: '',
        },
        
      ],
    }),
  }
</script>