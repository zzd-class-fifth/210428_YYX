<template>
	<view class="common_bg login common_pg">
		<view class="wrap">
			<view class="head_box">
				<image class="head_img common_head_border" mode="center" :src="userHeadUrl"></image>
			</view>

			<text class="userName">{{userName}}</text>

			<view class="place_box">
				<text>选择您的区域</text>
				<view class="common_pr picker_content">
					<image class="p1_1" :src="getImgUrl('p1_1.png')" mode="widthFix"></image>
					<picker class="picker_provinces" :range="provincesList" range-key="name" @change="onChangeProvince">
						{{curPro}}
					</picker>
				</view>
				<text>所在城市</text>
				<view class="common_pr picker_content">
					<image class="p1_1" :src="getImgUrl('p1_1.png')" mode="widthFix"></image>
					<picker class="picker_city" :range="cityList" :disabled="curPro==defaultPro"
						@click="onClickCityList" range-key="name" @change="onChangeCity">
						{{curCity}}
					</picker>
				</view>
			</view>

			<view class="button_login" @click="onClickLogin">
				<wcw-common-button>确 定</wcw-common-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '玩家名称',
				userHeadUrl: '',

				defaultPro: '省份',
				provincesList: [],
				curPro: '',
				curProId: 0,

				defaultCity: '城市',
				cityList: [],
				curCity: '',
				curCityId: 0,

				isTest: false,
			};
		},
		onLoad() {
			this.curPro = this.defaultPro;
			this.curCity = this.defaultCity;

			let userInfo = uni.getStorageSync('userInfo');
			this.userName = userInfo.nickName;
			this.userHeadUrl = userInfo.avatarUrl;

			// #ifndef H5
			uni.hideHomeButton();
			// #endif

			// uni.showLoading({
			// 	mask: true,
			// });

			this.request.get_province({
				success: (res) => {
					switch (res.code) {
						case 200:
							this.provincesList = res.data;
							break;
						default:
							uni.showToast({
								title: res.message,
							})
							break;
					}
				}
			});
		},
		methods: {
			refCityList(city) {
				this.curCity = this.defaultCity;
				this.curCityId = 0;

				this.request.get_city({
					data: {
						province_id: this.curProId,
					},
					success: (res) => {
						switch (res.code) {
							case 200:
								this.cityList = res.data;
								break;
							default:
								uni.showToast({
									title: res.message,
									icon: "none",
								})
								break;
						}
					}
				});
			},
			onChangeProvince(e) {
				let index = e.detail.value;
				if (index) {
					this.curProId = this.provincesList[index].id;
					this.curPro = this.provincesList[index].name;
					this.refCityList();
				}
			},
			onChangeCity(e) {
				let index = e.detail.value;
				if (index) {
					this.curCity = this.cityList[index].name;
					this.curCityId = this.cityList[index].id;
				}
			},
			onClickCityList() {
				if (this.curPro == this.defaultPro) {
					uni.showToast({
						title: '请先选择省份',
						icon: 'none',
					})
				}
			},
			onClickLogin() {
				if (this.isTest) {
					uni.redirectTo({
						url: "../main/main",
					});
					return;
				}

				if (this.curProId == 0) {
					uni.showToast({
						title: "请选择城市",
						icon: "none",
					});
					return;
				}

				if (this.curCityId == 0) {
					uni.showToast({
						title: "请选择城市",
						icon: "none",
					});
					return;
				}

				uni.login({
					success: (res) => {
						console.log(this);
						let code = res.code;
						this.requestLogin(code);
					}
				})
			},
			requestLogin(code) {
				let userInfo = uni.getStorageSync('userInfo');
				let data = {
					code: code,
					nickname: userInfo.nickName,
					avatar: userInfo.avatarUrl,
					province_id: this.curProId,
					city_id: this.curCityId,
				};
				console.log(data);
				this.request.authorization({
					data,
					success: (res) => {
						switch (res.code) {
							case 200:
								// console.log(res);
								uni.reLaunch({
									url: "../main/main",
								})
								break;
							default:
								uni.showToast({
									title: res.message,
									icon: "none",
								})
								break;
						}
					}
				})
			}
		},
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

			.button_login {
				margin-top: 50rpx;
			}
		}
	}
</style>
