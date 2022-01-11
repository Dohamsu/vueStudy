<template>
  <v-row align="center"
  class="mt-3 mb-3 ml-3 mr-3">
    <v-item-group
      v-model="window"
      class="shrink mr-3"
      mandatory
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
        <v-card>
        <v-card-title>프로젝트 이력</v-card-title>
            <v-card-text>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>아모레 퍼시픽</v-list-item-title>
                        <v-list-item-subtitle>
                        아모스 온, 아윤채 온, 아모스 TV(web)
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        방판 기반 앱. 기본적인 공지사항, 제품 조회 부터 KICC연동으로 구매 까지 구현 <br> 아모스 TV의 경우 커스텀 동영상 플레이어를 js로 구현함
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>풀무원</v-list-item-title>
                        <v-list-item-subtitle>
                        풀무원 영업대표 App, 가맹점주 App, 소매점 판촉 App
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        영업사원 및 실 납품업자 사용 앱. 풀무원 식품 DB 연동으로 가맹점 별 소매점 납품 및 납품 계획, 상품 정보 조회 앱
                        <br> 로컬 DB를 활용하여 마스터DB의 데이터를 가공, js단에서 sql문을 통해 꺼내어 씀
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>유니베라</v-list-item-title>
                        <v-list-item-subtitle>
                        유니베라 유피앱
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                         방판 기반 앱으로 회원 관리 시스템(마일리지, 출석체크 등), kicc 연동을 통한 구매 기능 있음
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>버거킹 JP</v-list-item-title>
                        <v-list-item-subtitle>
                        버거킹 JP App, 버거킹 JP 홈페이지
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        한국 버거킹의 일본 버전, 회원 관리 및 버거 정보 및 주문 기능
                        홈페이지의 경우 vue로 구현됨
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>ADT</v-list-item-title>
                        <v-list-item-subtitle>
                        ADT 캡스 POI
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        다른 ADT 캡스 App과 연동을 위한 기초 앱. 지도 기반 App으로 위치 정보 및 사진 등록을 통한 DB 저장용 앱
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>건설 기술 연구원</v-list-item-title>
                        <v-list-item-subtitle>
                        건설 기술 연구원공기질 관리 시스템(web)
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        건설 기술 연구원에서 진행한 국가 프로젝트. 
                        각 지역 건물에 설치한 센서와 연동하여 web에서 조회 및 센서 컨트롤 하는 web
                        MQTT 프로토콜을 사용. 
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>




<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
    }),
  }
</script>