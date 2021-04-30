<template>
	<view class="infoTop">
		<view class="top_box">
			<image class="imgUserHead common_head_border" :src="userHeadUrl" mode="widthFix"></image>

			<view class="money_box">
				<image class="p3_3" src="@/static/img/p3_3.png" mode="widthFix"></image>
				<text class="money_text">{{money | formatNumber}}</text>
			</view>

			<view class="yMoney_box">
				<image class="p3_4" src="@/static/img/p3_4.png" mode="widthFix"></image>
				<text class="yMoney_text">城市总云值{{yMoney | formatNumber}}</text>
			</view>
		</view>

		<view class="navRight">
			<image class="p3_2" :src="getImgUrl('p3_2.png')" mode="widthFix"></image>
			<image class="p3_1" :src="getImgUrl('p3_1.png')" mode="widthFix" @click="onClickShowRule"></image>
			<image class="once" :src="getImgUrl('once.png')" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userHeadUrl: '',
				money: '',
				yMoney: '',
			};
		},
		created() {
			let info = uni.getStorageSync('userInfo');
			this.userHeadUrl = info.avatarUrl;
			this.money = info.current_score;
			this.yMoney = info.upgrade_score;

			let gain = uni.getStorageSync('gain');
			let cityData = gain.city;
			let digital = gain.digital;
		},
		methods: {
			onClickShowRule() {
				uni.$emit('showPop', {
					name: 'rule'
				});
			}
		}
	}
</script>

<style lang="less">
	.top_box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;

		font-size: 24rpx;
		color: #FFFFFF;

		.imgUserHead {
			width: 110rpx;
			border-radius: 100%;
		}

		.p3_3 {
			width: 199rpx;
		}

		.p3_4 {
			width: 350rpx;
		}

		.money_box,
		.yMoney_box {
			position: relative;

			.money_text,
			.yMoney_text {
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 50rpx;

				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.navRight {
		position: absolute;
		right: 10rpx;
		top: 110rpx;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		margin-right: 10rpx;
		height: 350rpx;

		.p3_1,
		.p3_2,
		.once {
			width: 103rpx;
		}
	}
</style>
