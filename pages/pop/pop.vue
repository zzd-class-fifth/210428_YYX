<template>
	<view class="pop common_pg" v-show="componentName!=''">
		<buildInfo v-show="componentName=='buildInfo'"></buildInfo>
		<rule v-show="componentName=='rule'"></rule>
	</view>
</template>

<script>
	import buildInfo from './buildInfo/buildInfo.vue';
	import rule from './rule/rule.vue';

	export default {
		data() {
			return {
				componentName: '',
			}
		},
		methods: {
			showPop({
				name,
				param,
			}) {
				this.componentName = name;
			},
			hidePop({
				name,
				param,
			}) {
				this.componentName = name;
			}
		},
		components: {
			buildInfo,
			rule,
		},
		mounted() {
			uni.$on('showPop', this.showPop);
			uni.$on('hidePop', this.hidePop);
		},
		destroyed() {
			uni.$off('showPop', this.showPop);
			uni.$off('hidePop', this.hidePop);
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
