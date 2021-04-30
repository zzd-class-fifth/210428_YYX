<template>
	<view class="game common_pg">
		<view class="wrap">
			<movable-area class="movable_area">
				<movable-view class="movable_view" direction="all" :inertia="true">
					<image :src="getImgUrl('Cartoonscene_backgrounp1.png')" class="cartoonscene" mode="widthFix">
					</image>

					<!-- 顶部建筑群 -->
					<image class="top_build" :src="getImgUrl('1.png')" mode="widthFix"></image>
					<!-- AI建筑 -->
					<image class="build_ai" :src="getImgUrl('ai0.png')" mode="widthFix" @click="onClickBuild(1)">
					</image>
					<!-- 五G建筑 -->
					<image class="build_5g" :src="getImgUrl('5g0.png')" mode="widthFix" @click="onClickBuild(2)">
					</image>
					<!-- 大数据中心 -->
					<image class="build_big_data" :src="getImgUrl('big_data_center0.png')" mode="widthFix"
						@click="onClickBuild(3)"></image>
					<!-- 云計算建筑 -->
					<image class="build_no" :src="getImgUrl('no0.png')" mode="widthFix" @click="onClickBuild(4)">
					</image>
				</movable-view>
			</movable-area>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			onClickBuild(id) {
				uni.$emit('showPop', {
					name: "wcw-pop-build-info",
					param: {
						id,
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 140rpx;
		left: 0;

		.movable_area {
			width: 100%;
			height: 100%;

			.movable_view {
				width: 1630rpx;
				height: 1630rpx;

				.cartoonscene {
					width: 1630rpx;
				}

				.top_build {
					width: 1178rpx;
					position: absolute;
					top: 118rpx;
					left: 312rpx;
				}

				.build_5g {
					width: 269rpx;
					position: absolute;
					top: 1296rpx;
					left: 848rpx;
				}

				.build_ai {
					width: 435rpx;
					position: absolute;
					top: 1170rpx;
					left: 400rpx;
				}

				.build_big_data {
					width: 364rpx;
					position: absolute;
					top: 850rpx;
					left: 440rpx;
				}

				.build_no {
					width: 374rpx;
					position: absolute;
					top: 1070rpx;
					left: 700rpx;
				}
			}
		}
	}
</style>
