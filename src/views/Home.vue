<template>
	<div class="home">
		<div class="banner_box" style="width: 100%;">
		    <el-carousel trigger="click" height="576px" :autoplay="true" :interval="5000" indicator-position="none">
		        <el-carousel-item v-for="(item,index) in imgList" :key="index">
		            <a href="/certificate" v-if="index == 1">
		                <img :src="item.src" alt="轮播图">
		            </a>
		            <img :src="item.src" alt="轮播图" v-else>
		        </el-carousel-item>
		    </el-carousel>
			<div class="home_label">
				<div class="label width">
					<div class="label_item white_color p_l2 f_l">
						<span class="font_14">用户量</span>
						<h4 class="bold font_26">5600+</h4>
					</div>
					<div class="label_item white_color p_l2 f_l">
						<span class="font_14">企业入驻</span>
						<h4 class="bold font_26">1000+</h4>
					</div>
					<div class="label_item white_color p_l2 f_r">
						<span class="font_14">合作院校</span>
						<h4 class="bold font_26">60+</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="main width">
			<h1 class="font_20 m_t2 m_b2 t_c">专业解决幼教实习就业招聘问题</h1>
			<p class="m_b4 t_c font_16">
				<span class="m_r1">海量幼教人才</span>/
				<span class="m_l1 m_r1">精准匹配</span>/
				<span class="m_l1 m_r1">用心服务</span>/
				<span class="m_l1">提升工作效率</span>
			</p>
			<ul class="app_section clearfix m_b4">
				<li class="app_desc f_l border p2 box_sizing">
					<b class="d_b m_b1 font_16">线上招聘双选</b>
					<span class="d_b font_14">数千幼教人才简历与企业精准匹配</span>
					<img src="../assets/image/app_garden.png" alt="">
				</li>
				<li class="app_desc f_l border p2 box_sizing">
					<b class="d_b m_b1 font_16">APP实习管理</b>
					<span class="d_b font_14">实习与就业平台管理</span>
					<img src="../assets/image/app_school.png" alt="">
				</li>
				<li class="app_desc f_l border p2 box_sizing">
					<b class="d_b m_b1 font_16">让实习变的更简单</b>
					<span class="d_b font_14">专业团队解决你的实习就业问题</span>
					<img src="../assets/image/app_student.png" alt="">
				</li>
			</ul>
			<div class="yxfw">
				<h1 class="font_20 m_b4 t_c">院校服务</h1>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_l f_l">
						<img class="" src="../assets/image/home_xsjygl.png" alt="">
					</div>
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">实习生就业管理</h1>
						<p class="font_16">奕杰平台主要为各中职类、大专及本科院校提供实习前期学生与实习单位的线上双选，和实习过程中学校对学生的全程管理为主要功能。奕杰平台支持Android、IOS系统共包含4个独立APP，分别对应用户是学校、企业、学生和奕杰内部人员，各大功能模块在4个独立APP中以不同权限和应用场景存在。</p>
					</div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">掌握实习生安全动态</h1>
						<p class="font_16">系统的安全签到管理，通过签到时的位置、图片信息采集，为学校和企业管理人员对学生安全的确认主动提供参照依据。</p>
					</div>
					<div class="yxfw_list_l f_l">
						<img class="" src="../assets/image/home_xsaqdt.png" alt="">
					</div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_l f_l">
						<img class="" src="../assets/image/home_qjsp.png" alt="">
					</div>
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">请假审批快速高效</h1>
						<p class="font_16">学生可选择请假类别并上传照片等依据提交请假，并同时发送给学校、企业管理人员等，通过多方确认完成审批，以确保学生请假的真实性，并自动计入学生考勤。</p>
					</div>
				</div>
				<div class="yxfw_list m_b4 clearfix">
					<div class="yxfw_list_r f_l">
						<h1 class="font_20 m_b2">日志随时阅览</h1>
						<p class="font_16">根据学校的要求，可以对要求学生提交的日志模板进行设置，分为日志、周报、月报等，学校指定辅导员可以线上对学生提交的日志进行评分评价及实习指导和督促工作。</p>
					</div>
					<div class="yxfw_list_l f_l">
						<img class="" src="../assets/image/home_rzyl.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    // @ is an alias to /src
    // import NavBar from '@/components/Header.vue'
    import api from '../api/common_api';

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                banner: api.ImgUrl + 'banner.png',
				imgList: [
				    {
				        src: require('@/assets/image/banner.png')
				    },
				    {
				        src: api.ImgUrl + 'banner2.png'
				    },
				],
            }
        },
        created() {
            
        },
        methods: {
            
        },
    }
</script>

<style scoped lang="stylus">
    .home {
        min-height calc(100vh - 283px)
		
		.banner_box {
			position relative
			
			.home_label {
				width 100%
				padding 25px 0
				background-color rgba(0, 0, 0, 0.18)
				position absolute
				bottom 0
				left 0
				z-index 90
				.label {
					height 100%
					padding 0 100px
					box-sizing border-box
					.label_item {
						border-left 2px solid #fff
					}
					.label_item:nth-child(2) {
						margin 0 365px
					}
				}
			}
		}

		.main {
			.app_section {
				.app_desc {
					border-color #bababa
					margin-right 87px
					&:last-child {
						margin-right 0
					}
					img {
						width 300px
						height 300px
					}
				}
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
    }
</style>
