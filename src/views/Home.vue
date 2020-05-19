<template>
	<div class="home">
		<div class="banner_box" style="width: 100%;">
			<el-carousel trigger="click" height="576px" :autoplay="true" :interval="5000" indicator-position="none">
				<el-carousel-item v-for="(item, index) in imgList" :key="index">
					<a href="/certificate" v-if="index == 1"><img :src="item.src" alt="轮播图" /></a>
					<img :src="item.src" alt="轮播图" v-else />
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
			<h1 class="font_20 m_t4 m_b2 t_c">专业解决幼教实习就业招聘问题</h1>
			<p class="label_p m_b4 t_c font_16">
				<span class="m_r1">海量幼教人才</span>
				/
				<span class="m_l1 m_r1">精准匹配</span>
				/
				<span class="m_l1 m_r1">用心服务</span>
				/
				<span class="m_l1">提升工作效率</span>
			</p>
			<ul class="app_section clearfix m_b4">
				<li class="app_desc f_l p2 box_sizing">
					<b class="d_b m_b1 font_16 t_c">线上招聘双选</b>
					<span class="d_b font_14 t_c">数千幼教人才简历与企业精准匹配</span>
					<img src="../assets/image/app_garden.png" alt="" />
				</li>
				<li class="app_desc f_l p2 box_sizing">
					<b class="d_b m_b1 font_16 t_c">APP实习管理</b>
					<span class="d_b font_14 t_c">实习与就业平台管理</span>
					<img src="../assets/image/app_school.png" alt="" />
				</li>
				<li class="app_desc f_l p2 box_sizing">
					<b class="d_b m_b1 font_16 t_c">让实习变的更简单</b>
					<span class="d_b font_14 t_c">专业团队解决你的实习就业问题</span>
					<img src="../assets/image/app_student.png" alt="" />
				</li>
			</ul>
			<div class="hzlc">
				<h1 class="font_20 m_b4 t_c">合作流程</h1>
				<ul class="hzlc_ul clearfix box_sizing">
					<li class="hzlc_li f_l" v-for="(item, index) in hzlcList" :key="index">
						<div class="hzlc_img m_b2" :style="{backgroundImage: 'url(' + item.img + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}"></div>
						<h3 class="font_16 m_b2 t_c">{{item.title}}</h3>
						<p class="font_14" v-if="item.con1">{{item.con1}}</p>
						<p class="font_14" v-if="item.con2">{{item.con2}}</p>
						<p class="font_14" v-if="item.con3">{{item.con3}}</p>
					</li>
				</ul>
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
				}
			],
			hzlcList: [
				{
					// img: '../assets/image/home_hzlc1.png',
					img: require('@/assets/image/home_hzlc1.png'),
					title: "岗前培训",
					con1: '>  培训幼儿园工作时需要注意的内容，如何与家长沟通，如何避免教态问题等；',
					con2: '>  到北京幼儿园工作，需要提前做的准备等。',
					con3: '',
				},
				{
					img: require('../assets/image/home_hzlc2.png'),
					title: "岗前培训",
					con1: '>  线上提交简历，自由选择小伙伴；',
					con2: '>  审核通过后方可进行线上报名。',
					con3: '',
				},
				{
					img: require('../assets/image/home_hzlc3.png'),
					title: "岗前培训",
					con1: '>  学生线上选择幼儿园，向有名额的园所投递简历；',
					con2: '>  幼儿园挑选学生简历；',
					con3: '>  双方线上匹配成功。',
				},
				{
					img: require('../assets/image/home_hzlc4.png'),
					title: "岗前培训",
					con1: '>  由学校统一时间或者学生自主确定时间，到达北京火车站或者指定地点，由奕杰阳光老师和幼儿园老师共同接站，直接入园。',
					con2: '',
					con3: '',
				},
				{
					img: require('../assets/image/home_hzlc5.png'),
					title: "岗前培训",
					con1: '>  奕杰老师辅助学校对学生进行定期回访，配合学校签署三方协议或实习报告等事宜。',
					con2: '',
					con3: '',
				},
				{
					img: require('../assets/image/home_hzlc6.png'),
					title: "岗前培训",
					con1: '>  幼儿园或者学生有问题时随时线上提交问题，由奕杰阳光专业老师协调处理，必要时现场进行核实或者调园，处理结果及时线上反馈。',
					con2: '',
					con3: '',
				},
			],	//合作流程
		};
	},
	created() {},
	methods: {}
};
</script>

<style scoped lang="stylus">
$gray_color = #8c8c8c
.home
	min-height calc(100vh - 283px)
	.banner_box
		position relative
		.home_label
			width 100%
			padding 25px 0
			background-color rgba(0, 0, 0, 0.18)
			position absolute
			bottom 0
			left 0
			z-index 90
			.label
				height 100%
				padding 0 100px
				box-sizing border-box
				.label_item
					border-left 2px solid #fff
				.label_item:nth-child(2)
					margin 0 365px
	.main
		.label_p
			color $gray_color
		.app_section
			.app_desc
				box-shadow 0 0 20px rgba(0, 0, 0, 0.06)
				margin-right 87px
				&:last-child
					margin-right 0
				span
					color $gray_color
				img
					width 300px
					height 300px
		.hzlc
			.hzlc_ul
				padding 0 30px
				.hzlc_li
					width 220px
					height 426px
					margin-right 240px
					&:nth-of-type(3n) {
						margin-right 0
					}
					.hzlc_img {
						width 220px
						height 230px
						background url(../assets/image/home_hzlc1.png) center center no-repeat
						margin-left 18px
					}
					p {
						color $gray_color
					}
</style>
