<template>
    <div v-if="user">
        <h1> 크롤링 데이터 </h1>
        <p> 타이틀 : {{ crollData.title }} </p>
        <p> 내용 : {{ crollData.summary }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crollData: null,
        };
    },
    created() {
        this.$http.get('http://localhost:80/croll')
            .then((res) => {
                
                console.table(res.data);

                const crollData = res.data[0];
                if (crollData) this.crollData = crollData;
            })
            .catch((err) => {
                console.error(err);
            });
    }}
</script>

<style></style>