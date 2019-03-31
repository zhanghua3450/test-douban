<template>
	<div class="has-header">
		<div class="card">
			<quick-nav></quick-nav>
		</div>
	</div>
</template>
<script>
import QuickNav from '../components/QuickNav'
export default {
	name:'HomeView',
	data(){
		return {}
	},
	components:{QuickNav}
}
</script>
<style lang="less" scoped>
.card{
	padding: 0 1.8rem;
}
</style>
