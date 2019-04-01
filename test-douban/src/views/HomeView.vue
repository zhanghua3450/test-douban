<template>
	<div class="has-header">
		<div class="card">
			<quick-nav></quick-nav>
			<list :items="listData"></list>
		</div>
	</div>
</template>
<script>
import QuickNav from '../components/QuickNav';
import List from '../components/List'
export default {
	name:'HomeView',
	data(){
		return {
			listData:[]
		}
	},
	components:{QuickNav,List}
}
</script>
<style lang="less" scoped>
.card{
	padding: 0 1.8rem;
}
</style>
