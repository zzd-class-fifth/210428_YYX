<template>
	<view class="loading common_bg common_pg">
		<view class="wrap">
			<image class="loading_title" src="@/static/img/loding_title.png" mode="widthFix"></image>
			<image class="loding_dase" src="@/static/img/loding_dase.png" mode="widthFix"></image>
			<view class="content">
				<image class="loding_text" src="@/static/img/loding_text.png" mode="widthFix"></image>
				<view class="box">
					<image class="loding_d" src="../../static/img/loding_d.png" mode="widthFix"
						v-for="(item,index) in dots" :key="index" :style="'opacity:' + (index>showDotIndex?0:1)"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dots: [{}, {}, {}],
				showDotIndex: 0,
				dealtyDot: null,
			}
		},
		methods: {

		},
		onLoad() {
			this.dealtyDot = setInterval(() => {
				this.showDotIndex = (this.showDotIndex + 1) % this.dots.length;
				console.log(this.showDotIndex);
			}, 1000);
		},
		beforeDestroy() {
			if (this.dealtyDot) {
				clearInterval(this.dealtyDot);
				this.dealtyDot = null;
			}
		}
	}
</script>

<style>
	.loading {
		display: flex;
		align-items: center;
	}

	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		width: 100%;
		height: 1000rpx;
	}

	.loading_title {
		width: 325rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		height: 40rpx;
	}

	.loding_dase {
		width: 265rpx;
	}

	.loding_text {
		width: 156rpx;
	}

	.box {
		display: flex;
		justify-content: space-around;
		width: 100rpx;
	}

	.loding_d {
		width: 5rpx;
	}
</style>
