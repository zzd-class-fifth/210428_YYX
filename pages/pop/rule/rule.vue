<template>
	<view class="rule">
		<view class="wrap">
			<image class="winner_list_bg common_pop_bg_white" :src="getImgUrl('winner_list_bg.png')" mode="widthFix">
			</image>

			<view class="box">
				<image class="rule_title" :src="getImgUrl('rule_title.png')" mode="widthFix"></image>
				<view class="text_box">
					<image class="rule_text" :src="getImgUrl('rule_text.png')" mode="widthFix"></image>
				</view>
			</view>

			<image class="close" :src="getImgUrl('close.png')" mode="widthFix" @click="onClickClose"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			onClickClose() {
				uni.$emit('hidePop', '');
			}
		}
	}
</script>

<style lang="less">
	.wrap {
		position: relative;
		overflow: auto;
	}

	.rule_title {
		width: 456rpx;
	}

	.text_box {
		background-color: #ffffff;
		border: 4rpx solid #f7f7fc;
		height: 800rpx;
		width: 550rpx;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-top: 20rpx;

		.rule_text {
			width: 493rpx;
		}
	}

	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;

		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
