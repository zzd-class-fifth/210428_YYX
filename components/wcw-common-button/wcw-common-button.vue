<template>
	<view class="wcw-common-button common_pr">
		<image class="common_button_bg_yellow" :src="getImgUrl('common_button_bg_yellow.png')" mode="widthFix"></image>
		<text class="show_text" space="ensp">
			<slot></slot>
		</text>
	</view>
</template>

<script>
	export default {
		name: "wcw-common-button",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.wcw-common-button {

		.common_button_bg_yellow {
			width: 287rpx;
		}

		.show_text {
			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: 0;
			right: 0;
			bottom: 10rpx;
			left: 0;

			font-size: 40rpx;
			font-weight: 500;
			color: #185bd2;
		}
	}
</style>
