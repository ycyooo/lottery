<template>
	<view class="content">
		<view class="card">
      <view class="vve-flex">
        <u-avatar :src="src" size="64" class="avatar-border"/>
        <view class="info">
          <view class="info-title">
            名字名字名字名字名字
          </view>
          <image v-for="index of star" :key="index" class="star" src="/static/star.svg"></image>
          <view class="info-text">
            体彩休市安排：五一（5月1日至5月5日）停售，5月6日9:00恢复下单
          </view>
        </view>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        star: 5,
				src: 'https://tvax2.sinaimg.cn/crop.123.96.858.858.180/006IQzGply8gu4xvjohb5j60u00u0ack02.jpg?KID=imgbed,tva&Expires=1679896606&ssig=l1OqQMzD8M'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		padding: 24rpx;
	}
  .card{
    width: auto;
    height: 356rpx;
    color: white;
    padding: 40rpx 40rpx 0;
    border-radius: 20rpx;
    background: linear-gradient(270deg, #F05712 0%, #FE1531 100%);
  }
  .avatar-border{
    border: 4rpx solid #fff;
  }
  .info{
    margin-left: 20rpx;
    &-title{
      font-family: PingFang SC;
      font-size: 32rpx;
    }
    .star{
      width: 30rpx;
      height: 30rpx;
      margin-right: 10rpx;
    }
  }
</style>
