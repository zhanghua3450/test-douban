<template>
    <div class="sub-nav">
        <ul>
            <li class="one-line" v-if="!islogin">
                <router-link tag="a" :to="{name:'RegisterView'}">登录豆瓣</router-link>
            </li>
            <template v-if="islogin">
                <li>
                    <router-link tag="a" :to="{name:'UserCenter'}">迷途的胖哥</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="{name:'RegisterView'}">退出豆瓣</router-link>
                </li>
            </template>
            <li>
                <a href="#">使用桌面版</a>
            </li>
            <li>
                <a href="##">使用豆瓣APP</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"SubNav",
    data(){
        return {

        }
    },
    computed: {
        islogin:function(){
            return sessionStorage.getItem('userId') ? true:false;
         
        }
    },
}
</script>
<style lang="less" scoped>
.sub-nav{
    margin-top: 2.5rem;
    ul{display: flex; flex-wrap: wrap; overflow: hidden; border-bottom: 1px solid #f3f3f3;}
    li{border-top: 1px solid #f3f3f3;padding: 1.3rem 0; width: 50%; margin-left: -1px; text-align: center;}
    .one-line{width: 100%; }
    a{display: block; border-left: 1px solid #f3f3f3; font-size: 1.5rem; color: #42bd56;}
}
</style>
