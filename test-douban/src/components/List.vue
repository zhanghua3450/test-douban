<template>
    <div class="home-list">
        <template v-for="item in items" >
            <router-link :to="{name:'DetailView',params:{id:item.id}}" :key="item.id">
                <div class="content">
                    <img :src="item.image_hlarge">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content | subStr}}</p>
                </div>
                <div class="author">
                    <span class="name">{{item.category_name}}</span>
                    <span class="label" v-if="item.subcategory_name">
                        本活动来自栏目 {{item.subcategory_name}}
                    </span>
                </div>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name:'list',
    data(){
        return{}
    },
    props:{
        mold:{
            type:String,
            default:'basic'
        },
        items:{
            type:Array,
            required:true
        }
    },
    filters:{
       subStr: function (value) {
            value.replace(/<.+>|\s/, '')
            return value.slice(0, 30)
        } 
    }
}
</script>

<style>

</style>
