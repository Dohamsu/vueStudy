# FROM 
# 베이스 이미지 지정. 필수값
FROM node:12-alpine 
FROM mongo-express

#WORKDIR 
# RUN, CMD, ADD, COPY 등이 이루어질 기본 디렉토리를 설정. 
# 각 명령어의 현재 디렉토리는 한줄 한줄마다 초기화되기 때문에 RUN cd /path를 하더라도 위치가 초기화됨
# 같은 디렉토리에서 계속 작업하기 위해 WORKDIR을 사용 
WORKDIR /source

#COPY 
# 파일이나 디렉토리를 이미지로 복사. 일반적으로 소스를 복사하는 데 사용
COPY . .

#RUN
# 명령어 실행 - 내부적으로 /bin/sh -c 뒤에 명령어를 실행하는 방식
RUN npm install
RUN npm install pg
RUN npm install cors
RUN npm install axios
RUN npm install cheerio
RUN npm install -g nodemon

#CMD 
# 도커 컨테이너가 실행되었을 때 실행되는 명령어 정의
# 여러개의 CMD가 존재할 경우 마지막 CM만 실행됨
CMD ["nodemon", "-L", "app.js"]

#EXPOSE 
# 도커 컨테이너가 실행되었을 때 요청을 기다리고 있는(Listen) 포트 지정. 여러개 지정 가능
#EXPOSE 3000