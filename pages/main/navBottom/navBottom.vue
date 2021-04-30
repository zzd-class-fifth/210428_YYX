<template>
	<view>
		<image class="p3_8" src="@/static/img/p3_8.png" mode="widthFix"></image>
		
		<view class="icon_box">
			<image class="rank" src="@/static/img/rank.png" mode="widthFix"></image>
			<image class="share" src="@/static/img/share.png" mode="widthFix"></image>
			<image class="sing" src="@/static/img/sing.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.p3_8{
	position: absolute;
	bottom: 0;
	width: 751rpx;
}
.icon_box{
	position: relative;
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin-bottom: 20rpx;
	
	.rank{
		width: 158rpx;
	}
	.share{
		width: 183rpx;
	}
	.sing{
		width: 171rpx;
	}
}
</style>
