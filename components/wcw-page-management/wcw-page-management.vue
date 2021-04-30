<template>
	<view>
		<wcw-loading v-show="isShow('wcw-loading')"></wcw-loading>
		<wcw-login v-show="isShow('wcw-login')"></wcw-login>
		<wcw-main-game v-show="isShow('wcw-main-game')"></wcw-main-game>
	</view>
</template>

<script>
	export default {
		name: "wcw-page-management",
		data() {
			return {
				pageList: [],
			};
		},
		methods: {
			isShow(name) {
				return this.pageList.indexOf(name) != -1;
			},
			showPage({
				name,
				param
			}) {
				if (name) {
					this.pageList.push(name);
				} else {
					// this.pageList.pop();
				}
			},
			hidePage({
				name,
				param
			}) {
				if (name) {
					this.pageList.splice(this.pageList.indexOf(name), 1);
				} else {
					this.pageList.pop();
				}
			},
			redirectPage({
				name,
				param
			}) {
				this.pageList.pop();
				this.showPage({
					name,
					param
				});
			}
		},
		mounted() {
			uni.$on('showPage', this.showPage);
			uni.$on('hidePage', this.hidePage);
			uni.$on('redirectPage', this.redirectPage);

			this.pageList.push('wcw-loading');
		},
		destroyed() {
			uni.$off('showPage', this.showPage);
			uni.$off('hidePage', this.hidePage);
			uni.$off('redirectPage', this.redirectPage);
		}
	}
</script>

<style lang="less">

</style>
