<template>
	<view class="wcw-pop-management pop common_pg" v-show="isShowPop">
		<wcw-pop-build-info v-show="isShow('wcw-pop-build-info')"></wcw-pop-build-info>
		<wcw-pop-rule v-show="isShow('wcw-pop-rule')"></wcw-pop-rule>
	</view>
</template>

<script>
	export default {
		name: "wcw-pop-management",
		data() {
			return {
				popList: [],
				isShowPop: false,
			};
		},
		methods: {
			isShow(name) {
				return this.popList.indexOf(name) != -1;
			},
			showPop({
				name,
				param
			}) {
				this.popList.push(name);
			},
			hidePop({
				name,
				param
			}) {
				if (name) {
					this.popList.splice(this.popList.indexOf(name), 1);
				} else {
					this.popList.pop();
				}
			}
		},
		mounted() {
			uni.$on('showPop', this.showPop);
			uni.$on('hidePop', this.hidePop);
		},
		destroyed() {
			uni.$off('showPop', this.showPop);
			uni.$off('hidePop', this.hidePop);
		},
		watch: {
			popList() {
				console.log('123');
				console.log(this.popList);
				this.isShowPop = this.popList.length > 0;
			}
		}
	}
</script>

<style lang="less">
	.pop {
		background-color: rgba(0, 0, 0, 0.75);

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
