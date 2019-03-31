<template>
    <div class="quick-nav">
        <ul>
            <li>
                <router-link tag="a" :to="{name:'movie'}">影院热映</router-link>
                
            </li>
            <li>
                <router-link tag="a" :to="{name:'status'}">欧美新碟榜</router-link>
            </li>
            <li>
                <router-link tag="a" :to="{name:'register'}">欧美新碟榜</router-link>
            </li>
             <li>
                <router-link tag="a" :to="{name:'login'}">登录豆瓣</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'QuickNav',
    data(){
        return {}
    }
}
</script>

<style lang="less" scoped>
.quick-nav{
    padding-top: 2rem; 
    ul{display: flex; flex-wrap: wrap;}
    li{width: 50%; box-sizing: border-box; padding: .3rem;}
    a{display: block; padding: 1.2rem 0; line-height: 2rem; text-align: center; background-color: #f6f6f6; color: #494949; font-size: 1.5rem;}
}
</style>

