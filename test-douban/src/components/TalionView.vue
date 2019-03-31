<template>
    <div class="talion-view">
        <div class="header-bar">
            <span class="close-talion" @click="closeTalion">关闭</span>
            <form class="search" onsubmit = "return false">
                <input type="search" name="query"  v-model="queryStr" @keyup.enter = "goSearch">
            </form>
        </div>

        <div class="has-header">
            <ul class="search-nav-list">
                <li v-for="(item,index) in searchNavList" :key="index">
                    <a :href="item.link">
                        <strong :style="{color:item.title1_color}">{{item.title1}}</strong>
                        <span>{{item.title2}}</span>
                    </a>
                </li>
                
            </ul>
            <sub-nav></sub-nav>
        </div>
    </div>
</template>

<script>
import SubNav from './SubNav'
export default {
    name:'TalionView',
    components:{SubNav},
    data(){
        return {
            queryStr:'',
            searchNavList:[{
                link:'#',
                title1:'电影',
                title2:'影院热映',
                title1_color:'rgb(35, 132, 232)'
            },{
                link:'#',
                title1:'电视',
                title2:'正在热播',
                title1_color:'rgb(122, 106, 219)'
            },{
                link:'#',
                title1:'图书',
                title2:'畅销排行',
                title1_color:'rgb(159, 120, 96)'
            },{
                link:'#',
                title1:'同城',
                title2:'周末活动',
                title1_color:'rgb(230, 70, 126)'
            },{
                link:'#',
                title1:'小组',
                title2:'志趣相投',
                title1_color:'rgb(42, 184, 204)'
            },{
                link:'#',
                title1:'音乐',
                title2:'新碟榜',
                title1_color:'rgb(244, 143, 46)'
            },{
                link:'#',
                title1:'阅读',
                title2:'电子书',
                title1_color:'rgb(159, 120, 96)'
            },{
                link:'#',
                title1:'游戏',
                title2:'虚拟世界',
                title1_color:'rgb(87, 116, 197)'
            },{
                link:'#',
                title1:'应用',
                title2:'玩手机',
                title1_color:'rgb(89, 108, 221)'
            },{
                link:'#',
                title1:'东西',
                title2:'心爱之物',
                title1_color:'rgb(225, 100, 77)'
            },{
                link:'#',
                title1:'FM',
                title2:'红心歌单',
                title1_color:'rgb(64, 207, 169)'
            },{
                link:'#',
                title1:'市集',
                title2:'购买原创',
                title1_color:'rgb(66, 189, 86)'
            }]
        }
    },
    methods: {
        closeTalion:function(){
            this.$emit('closeTalion')
        },
        goSearch:function(){
            this.$emit('closeTalion');
            // this.$router.push({
            //     name:'SearchView',
            //     params:{
            //         q:this.queryStr
            //     }
            // })
        }
    },
}
</script>

<style lang="less" scoped>
.talion-view{
    position: fixed; top:0; left:0; width:100%; height: 100%; background-color: #fff; z-index: 3; 
}
.close-talion{
    color: #42bd56; font-size: 1.6rem;
}
.search{
    flex: 1; margin-left: 1rem;
    input{
        width: 100%; background-color: #f3f3f3; box-sizing: border-box; padding: .8rem; height: 3.2rem; line-height: 3.2rem; border-radius: .3rem; border: 0; outline: none;  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;background-size: 1.73rem;
    }
}
.search-nav-list{
  
   display: flex;
  
  flex-wrap: wrap;
    li{width: 33.33%; text-align: center; padding-top: 2.5rem;}
    a{color: #999;}
    strong{display: block;font-size: 2.4rem; line-height: 2.8rem; font-weight: 400;}
}
</style>
