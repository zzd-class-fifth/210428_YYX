<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {},
		data() {
			return {}
		}
	}
</script>

<style>
	/*每个页面公共css */
	image {
		display: block;
	}

	view {
		overflow: auto;
	}

	text {
		color: #FFFFFF;
	}

	.common_pg {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.common_bg {
		background: -webkit-linear-gradient(top, #0496FF, #A078FF);
	}

	.common_pr {
		position: relative;
	}

	.common_head_border {
		border: 4rpx solid rgba(255, 255, 255, 0.5);
	}

	.common_pop_bg_blue,
	.common_pop_bg_white {
		width: 616rpx;
		margin: 30rpx;
	}

	.common_pop_close_button {
		width: 89rpx;

		position: absolute;
		top: 0;
		right: 0rpx;
	}

	.common_button_bg_yellow {
		width: 287rpx;
	}
</style>
