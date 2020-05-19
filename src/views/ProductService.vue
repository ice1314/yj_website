<template>
	<div class="container">
		<div class="banner">
			<img class="banner_img1" v-if="type === 1" src="../assets/image/home_banner3.png" alt="院校服务" />
			<img class="banner_img2" v-if="type === 2" src="../assets/image/home_banner1.png" alt="企业服务" />
			<img class="banner_img3" v-if="type === 3" src="../assets/image/home_banner2.png" alt="学生服务" />
		</div>
		<div class="main width">
			<!--服务优势-->
			<div class="fwys">
				<h1 class="font_22 t_c m_t4 m_b4">服务优势</h1>
				<ul class="fwys_ul clearfix p_lr3 box_sizing">
					<li class="f_l">
						<div class="fwys_img"></div>
						<div class="font_20 t_c m_b1">安全签到</div>
						<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
					</li>
					<li class="f_l">
						<div class="fwys_img"></div>
						<div class="font_20 t_c m_b1">实习日志</div>
						<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
					</li>
					<li class="f_l">
						<div class="fwys_img"></div>
						<div class="font_20 t_c m_b1">请假审批</div>
						<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
					</li>
					<li class="f_l">
						<div class="fwys_img"></div>
						<div class="font_20 t_c m_b1">实习回访</div>
						<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
					</li>
				</ul>
			</div>
			<!--首页介绍-->
			<div class="syjs clearfix">
				<h1 class="font_22 t_c m_b4">首页介绍</h1>
				<div class="syjs_l f_l">
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">实习回访</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
						<div class="syjs_l_item_img m_l2 f_l"></div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
						<div class="syjs_l_item_img m_l2 f_l"></div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">实习回访</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
						<div class="syjs_l_item_img m_l2 f_l"></div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
						<div class="syjs_l_item_img m_l2 f_l"></div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">实习回访</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
						<div class="syjs_l_item_img m_l2 f_l"></div>
					</div>
				</div>
				<div class="syjs_img f_l"></div>
				<div class="syjs_r f_l">
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item_img m_r2 f_l"></div>
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">实习回访</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item_img m_r2 f_l"></div>
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item_img m_r2 f_l"></div>
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item_img m_r2 f_l"></div>
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
					</div>
					<div class="syjs_l_item clearfix m_b4">
						<div class="syjs_l_item_img m_r2 f_l"></div>
						<div class="syjs_l_item1 f_l">
							<div class="font_20 m_b1">请假审批</div>
							<p class="font_18">学校要求的实习三方协议由学校、幼儿园、学生直接签署；</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--关注的问题-->
		<div class="problem_img"></div>
	</div>
</template>

<script>
export default {
	name: 'ProductService',
	data() {
		return {
			type: 0
		};
	},
	created() {
		console.log(this.$route.query);
		this.type = Number(this.$route.query.type);
	}
};
</script>

<style scoped lang="stylus">
	$black_color = #1e2629;
	$gray_color = #4f646a;
.container {
	.banner {
		font-size 0
	}
	.fwys {
		.fwys_ul {
			margin-bottom 100px
			li {
				width 200px
				margin-right 113px
				.fwys_img {
					width 126px
					height 126px
					background pink
					margin 0 auto
					margin-bottom 20px
				}
				div {
					color $black_color
				}
				p {
					color $gray_color
					line-height 25px
				}
				&:last-child {
					margin-right 0
				}
			}
		}
	}
	.syjs {
		margin-bottom 100px
		.syjs_l, .syjs_r {
			margin-top 20px
			.syjs_l_item {
				width 400px
				.syjs_l_item1 {
					width 284px
					margin-top 5px
					div {
						color $black_color
					}
					p {
						color $gray_color
						line-height 25px
					}
				}
				.syjs_l_item_img {
					width 96px
					height 96px
					border-radius 50%
					background red
				}
			}
		}
		.syjs_img {
			width 400px
			height 700px
			background orange
		}
	}
	.problem_img {
		width 100%
		height 644px
		background url("../assets/image/yxfw_bg.png") center center no-repeat
		margin-bottom 100px
	}
}
</style>
