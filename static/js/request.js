var baseUrl = 'https://upgrade.building.h5.yscase.com/';

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
		success: (res) => {
			//返回数据及处理
			if (res.statusCode == 200) {
				success && success(res.data);
			} else {
				uni.showToast({
					title: res.errMsg,
				})
			}
		},
		fail: () => {
			uni.showToast({
				title: res.errMsg,
			})
		}
	})
};

export default {
	is_authorization({
		success,
		fail,
		complete,
	}) {
		uni.login({
			provider: 'weixin',
			success: (res) => {
				let code = res.code;
				request({
					url: '/api/open/is_authorization',
					method: 'POST',
					data: {
						code: code
					},
					success: (res) => {
						success && success(res);
						switch (res.code) {
							case 2003:
								uni.getUserInfo({
									success: (res) => {
										if (res && res.userInfo) {
											res.userInfo.code = code;
											uni.setStorageSync('userInfo', res
												.userInfo);
										}
									}
								})
								break;
							default:
								uni.showToast({
									title: res.message,
								})
								break;
						}
					},
				})
			}
		})
	},
	// 获取省份
	get_province({
		success
	}) {
		request({
			url: '/api/open/get_province',
			success(res) {
				success && success(res);

			}
		})
	},
	// 获取城市
	get_city({
		success
	}) {
		request({
			url: '/api/open/get_city',
			success(res) {
				success && success(res);
			}
		})
	},
	// 注册小程序
	authorization({
		code,
		nickname,
		avatar,
		province_id,
		city_id,
		share_id,
	}) {

	}
}
