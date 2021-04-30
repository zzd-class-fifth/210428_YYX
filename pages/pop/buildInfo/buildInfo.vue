<template>
	<view class="buildInfo common_pr">
		<image class="blue_maskBg common_pop_bg_blue" :src="getImgUrl('blue_maskBg.png')" mode="widthFix"></image>

		<view class="content_box">
			<view class="title_box">
				<text class="title_1">解锁建筑</text>
				<text class="title_2" space="ensp">消耗 5000 云值</text>
			</view>
			<image class="imgBuild" :src="getImgUrl('5g5.png')" mode="aspectFit"></image>

			<view class="star_box">
				<image class="up_mask_1" :src="getImgUrl('up_mask_1.png')" mode="widthFix"
					v-for="(item,index) in starList" :key="index"></image>
			</view>

			<view class="info_box">
				<image class="up_mask_3" :src="getImgUrl('up_mask_3.png')" mode="widthFix"></image>
				<text class="level">1级</text>
				<text class="name">云计算中心</text>
			</view>

			<view class="des_box">
				<text>云计算中心收入增加20%</text>
				<text>收入：2云值/秒</text>
			</view>

			<view class="button_box">
				<wcw-common-button>{{buttonDes}}</wcw-common-button>
			</view>
		</view>

		<image class="close common_pop_close_button" :src="getImgUrl('close.png')" mode="widthFix"
			@click="onClickClose"></image>
	</view>
</template>

<script>
	export default {
		data: () => {
			return {
				starList: [{}, {}, {}, {}, {}],
				buttonDes: '建 造',
			}
		},
		methods: {
			onClickClose() {
				uni.$emit('hidePop', '');
			}
		}
	}
</script>

<style lang="less">
	.content_box {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		align-items: center;

		.title_box {
			color: #FFFFFF;
			margin-top: 70rpx;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.imgBuild {
			width: 100%;
			height: 300rpx;
			margin: 20rpx auto;
		}

		.star_box {
			display: flex;

			.up_mask_1 {
				width: 33rpx;
				margin: 5rpx;
			}
		}

		.info_box {
			position: relative;
			margin: 30rpx auto;

			.level {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 95rpx;

				display: flex;
				justify-content: center;
				align-items: center;
			}

			.name {
				position: absolute;
				top: 0;
				right: 0;
				width: 200rpx;
				height: 100%;

				display: flex;
				justify-content: center;
				align-items: center;
			}

			.up_mask_3 {
				width: 293rpx;
			}
		}

		.des_box {
			>text {
				color: #e4ee2a;
				font-size: 30rpx;
			}

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.button_box {
			margin-top: 60rpx;
		}
	}
</style>
