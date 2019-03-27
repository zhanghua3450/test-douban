<template>
	<div class="pages-view">
		<header-bar @showTalion="open"></header-bar>
    	<router-view></router-view>
    	<talion-view v-show="talion" @closeTalion="close"></talion-view>
	</div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import TalionView from '../components/TalionView'
export default {
	name:'pages-view',
	data(){
		return {
			talion:''
		}
	},
	components:{HeaderBar,TalionView},
	methods:{
		open:()=>{
			this.talion = 'open';
		},
		close:()=>{
			this.talion = '';
		}
	}
}
</script>

<style>

</style>
