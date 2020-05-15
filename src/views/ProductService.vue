<template>
	<div class="container">
		<div class="banner">
			<img v-if="type == 1" src="../assets/image/home_banner3.png" alt="院校服务" />
			<img v-if="type == 2" src="../assets/image/home_banner1.png" alt="企业服务" />
			<img v-if="type == 3" src="../assets/image/home_banner2.png" alt="学生服务" />
		</div>
		<div class="main width">
			<div class="yxfw">
				<h1 class="font_20 m_b4 m_t4 t_c" v-if="type == 1">院校服务</h1>
				<h1 class="font_20 m_b4 m_t4 t_c" v-if="type == 2">企业服务</h1>
				<h1 class="font_20 m_b4 m_t4 t_c" v-if="type == 3">学生服务</h1>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_l f_l"><img class="" src="../assets/image/home_xsjygl.png" alt="" /></div>
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">实习生就业管理</h1>
						<p class="font_16">
							奕杰平台主要为各中职类、大专及本科院校提供实习前期学生与实习单位的线上双选，和实习过程中学校对学生的全程管理为主要功能。奕杰平台支持Android、IOS系统共包含4个独立APP，分别对应用户是学校、企业、学生和奕杰内部人员，各大功能模块在4个独立APP中以不同权限和应用场景存在。
						</p>
					</div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">掌握实习生安全动态</h1>
						<p class="font_16">系统的安全签到管理，通过签到时的位置、图片信息采集，为学校和企业管理人员对学生安全的确认主动提供参照依据。</p>
					</div>
					<div class="yxfw_list_l f_l"><img class="" src="../assets/image/home_xsaqdt.png" alt="" /></div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_l f_l"><img class="" src="../assets/image/home_qjsp.png" alt="" /></div>
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">请假审批快速高效</h1>
						<p class="font_16">
							学生可选择请假类别并上传照片等依据提交请假，并同时发送给学校、企业管理人员等，通过多方确认完成审批，以确保学生请假的真实性，并自动计入学生考勤。
						</p>
					</div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">日志随时阅览</h1>
						<p class="font_16">
							根据学校的要求，可以对要求学生提交的日志模板进行设置，分为日志、周报、月报等，学校指定辅导员可以线上对学生提交的日志进行评分评价及实习指导和督促工作。
						</p>
					</div>
					<div class="yxfw_list_l f_l"><img class="" src="../assets/image/home_rzyl.png" alt="" /></div>
				</div>
			</div>
		</div>
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
		this.type = this.$route.query.type;
	}
};
</script>

<style scoped lang="stylus">
.container {
	.banner {
		font-size 0
	}
	.yxfw {
		.yxfw_list_l {
			padding 0 100px
			box-sizing border-box
		}
		.yxfw_list_l, .yxfw_list_r {
			width 50%
		}
		.yxfw_list_l > img {
			width 400px
		}
		.yxfw_list_r {
			padding 0 150px
			box-sizing border-box
			transform translateY(209px)
			> p {
				text-align justify
			}
		}
	}
}
</style>
