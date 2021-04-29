var baseUrl = 'https://upgrade.building.h5.yscase.com/'
export default {
	is_authorization() {
		uni.login({
			provider: 'weixin',
			success(res) {
				console.log(res);
				let code = res.code;

				uni.request({
					url: baseUrl + '/api/open/is_authorization',
					method: 'POST',
					data: {
						code: code
					},
					success(res) {
						console.log(res);
					}
				})
			}
		})
	}
}
