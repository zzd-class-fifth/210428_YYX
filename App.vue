<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.common_pg{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.common_bg{
		background: -webkit-linear-gradient(top, #0496FF, #A078FF);
	}
	.common_pr{
		position: relative;
	}
</style>
