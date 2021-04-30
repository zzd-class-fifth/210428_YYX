var baseUrl = 'https://upgrade.building.h5.yscase.com';

// 响应拦截封装
function request({
	url,
	method,
	data,
	success,
	fail,
	complete,
}) {
	uni.request({
		url: baseUrl + url,
		data,
		method,
		complete,
		header: {
			authorization: uni.getStorageSync('authorization'),
		},
		success: (res) => {
			//返回数据及处理
			if (res.statusCode == 200) {
				success && success(res.data);
			} else {
				uni.showToast({
					title: res.errMsg,
					icon: "none",
				})
			}
		},
		fail: () => {
			uni.showToast({
				title: res.errMsg,
				icon: "none",
			})
		}
	})
};

export default {
	is_authorization() {
		uni.login({
			provider: 'weixin',
			success: (res) => {
				this.post_is_authorization(res);
			},
		})
	},
	post_is_authorization(res) {
		let code = res.code;
		request({
			url: '/api/open/is_authorization',
			method: 'POST',
			data: {
				code,
			},
			success: (res) => {
				this.check_authorization(res)
			},
		})
	},
	check_authorization(res) {
		switch (res.code) {
			case 200:
				uni.setStorageSync('authorization', res.data.authorization);

				this.get_user_info();
				break;
			case 2003:
				uni.getUserInfo({
					success: (res) => {
						if (res && res.userInfo) {
							uni.setStorageSync('userInfo', res
								.userInfo);
						}

						uni.$emit('redirectPage', {
							name: 'wcw-login',
						})
					}
				})
				break;
			default:
				uni.showToast({
					title: res.message,
					icon: "none",
				})
				break;
		}
	},
	// 获取省份
	get_province({
		success
	}) {
		request({
			url: '/api/open/get_province',
			success,
		})
	},
	// 获取城市
	get_city({
		success,
		data,
	}) {
		request({
			url: '/api/open/get_city',
			data,
			method: 'POST',
			success,
		})
	},
	// 注册小程序
	authorization({
		data,
		success,
		fail,
		complete,
	}) {
		request({
			url: '/api/open/authorization',
			data,
			success,
			method: 'POST',
		})
	},
	// 获取当前用户信息-基础信息+建筑信息
	get_user_info() {
		request({
			url: '/api/front/get_user_info',
			success: (res) => {
				switch (res.code) {
					case 200:
						let d = res.data;
						if (d) {
							let userInfo = {
								"nickName": d.user.nickname,
								"city": d.user.city_name,
								"province": d.user.province_name,
								"avatarUrl": d.user.avatar,
								upgrade_score: d.user.upgrade_score,
								current_score: d.user.current_score,
							};
							uni.setStorageSync('userInfo', userInfo);

							uni.setStorageSync('gain', d.gain);
						};

						uni.$emit('redirectPage', {
							name: "wcw-main-game",
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
}
