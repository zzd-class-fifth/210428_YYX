<template>
	<view class="common_bg login common_pg">
		<view class="wrap">
			<view class="head_box">
				<image class="head_img" mode="center"></image>
			</view>

			<text class="userName">{{userName}}</text>

			<view class="place_box">
				<text>选择您的区域</text>
				<view class="common_pr picker_content">
					<image class="p1_1" src="@/static/img/p1_1.png" mode="widthFix"></image>
					<picker class="picker_provinces" :range="provincesList">省份</picker>
				</view>
				<text>所在城市</text>
				<view class="common_pr picker_content">
					<image class="p1_1" src="@/static/img/p1_1.png" mode="widthFix"></image>
					<picker class="picker_city" :range="cityList">市区</picker>
				</view>
			</view>
			
			<image class="p1_2" src="@/static/img/p1_2.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '玩家名称',
				provincesList: ['1', '2', '3'],
				cityList: ['1', '2', '3'],
			};
		}
	}
</script>

<style lang="less">
	.login {
		color: #FFFFFF;
		font-size: 36rpx;

		.wrap {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.head_box {
				margin-top: 100rpx;

				.head_img {
					width: 260rpx;
					height: 260rpx;
					border-radius: 100%;
					border: 4rpx solid rgba(255, 255, 255, 0.5);
				}
			}

			.userName {
				margin-top: 40rpx;
			}

			.place_box {
				display: flex;
				flex-direction: column;
				align-items: center;

				margin-top: 100rpx;

				.picker_content {
					background-color: #FFFFFF;
					color: #000000;
					border-radius: 16rpx;
					width: 400rpx;
					height: 60rpx;

					display: flex;
					justify-content: center;
					align-items: center;

					margin: 20rpx 0;

					picker {
						width: 100%;
						height: 100%;
						
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.p1_1 {
						width: 48rpx;

						position: absolute;
						right: 10rpx;
						top: 6rpx;
					}
				}

			}
			.p1_2{
				margin-top: 50rpx;
				width: 287rpx;
			}
		}
	}
</style>
