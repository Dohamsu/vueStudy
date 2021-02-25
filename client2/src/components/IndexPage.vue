<template>
    <div v-if="user">
        <h1>접속한 유저</h1>
        <p>아이디 : {{ user.user_id }} </p>
        <p>비밀번호 : {{ user.password }} </p>
        <p>이름 : {{ user.user_name }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        };
    },
    created() {
        this.$http.get('http://localhost:80/account')
            .then((res) => {
                console.log(res);
                const user = res.data[0];
                if (user) this.user = user;
            })
            .catch((err) => {
                console.error(err);
            });
    }}
</script>

<style></style>