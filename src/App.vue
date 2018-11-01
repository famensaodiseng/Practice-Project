<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="法门扫地僧·项目"></mt-header>

    <!-- 中间路由区域 -->
<transition>
    <router-view></router-view>
</transition>


    <!-- 底部tabbar区域 -->
  	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon mui-icon mui-icon-paperplane"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  
</div>
</template>

<script>

</script>


<style lang="scss" scoped>
 * {
   margin: 0;
   padding: 0;
 }
  .app-container {
    padding-top: 40px;
  }

	.app-container{
  padding-top: 40px;
	overflow-x: hidden; /*隐藏超出屏幕部分*/
}         
.v-enter {
  opacity: 0;
  transform: translateX(100%); /*进入起点在屏幕100%部分,即屏幕最右*/
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%); /*离开的终点在屏幕-100%部分*/
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
} 
</style>

