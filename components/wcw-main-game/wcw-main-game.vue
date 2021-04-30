<template>
	<view class="common_pg">
		<game class="common_pg"></game>

		<navButton class="navButton"></navButton>

		<infoTop class="infoTop"></infoTop>
	</view>
</template>

<script>
	import game from "./game/game.vue";
	import navButton from "./navBottom/navBottom.vue";
	import infoTop from "./infoTop/infoTop.vue";

	export default {
		name: "wcw-main-game",
		data() {
			return {

			};
		},
		components: {
			game,
			navButton,
			infoTop,
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
