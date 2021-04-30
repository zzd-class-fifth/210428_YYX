<template>
	<view class="common_pg">
		<game class="common_pg"></game>

		<navButton class="navButton"></navButton>

		<infoTop class="infoTop"></infoTop>

		<pop></pop>
	</view>
</template>

<script>
	import game from "@/pages/main/game/game.vue";
	import navButton from "@/pages/main/navBottom/navBottom.vue";
	import infoTop from "@/pages/main/infoTop/infoTop.vue";

	import pop from '@/pages/pop/pop.vue';

	export default {
		data() {
			return {
			}
		},
		onLoad() {
			// #ifndef H5
			uni.hideHomeButton();
			// #endif
		},
		methods: {

		},
		components: {
			game,
			navButton,
			infoTop,
			pop,
		}
	}
</script>

<style lang="less">
	.navButton {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.infoTop {
		position: absolute;
		top: 20rpx;
		right: 0;
		left: 0;
	}
</style>
