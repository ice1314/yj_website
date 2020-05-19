<template>
    <div>
		<!-- PC端 -->
        <div class="navBar shadow_b bg_white black_color fixed" v-if="isPc">
            <div class="nav width box_sizing">
                <a href="/">
                    <img class="logo m_t1 m_r1 f_l pointer" :src="logo" alt="logo">
                    <img class="yjpt m_t2 f_l pointer" :src="yjpt" alt="奕杰平台">
                </a>
                <!--<h1 class="f_l pointer font_16">奕杰平台</h1>-->
                <ul class="nav_item f_l">
                    <li class="item pointer p_l2 p_r2" v-for="(item, index) in navList" :key="index"
                        @click="index != 1 ? routerLink(index, item.path) : ''" @mouseenter="enter(index)" @mouseleave="leave(index)">
                        <p :class="navIndex === index ? 'active' : 'black_color'">{{item.text}}</p>
						<ul class="chfw_ul bg_white p_t1 p_b1 box_sizing" v-if="show && index == 1">
							<div class="tri_t"></div>
							<li><a class="font_14" :class="{red_color: serviceIdx == 1}" href="/productService?type=1">院校服务</a></li>
							<li><a class="font_14" :class="{red_color: serviceIdx == 2}" href="/productService?type=2">企业服务</a></li>
							<li><a class="font_14" :class="{red_color: serviceIdx == 3}" href="/productService?type=3">学生服务</a></li>
						</ul>
                    </li>
                </ul>
                <span class="fwrx f_r pointer">服务热线：<span class="bold red_color">17710398062</span></span>
                <el-dropdown class="f_r m_r4 pointer el_dropdown">
                    <span class="el-dropdown-link">
                        App下载<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el_menu" style="min-width: 98px;">
                        <el-dropdown-item class="el_item">
                            <a class="a_item" href="/download?type=1">院校下载</a>
                        </el-dropdown-item>
                        <el-dropdown-item class="el_item">
                            <a class="a_item" href="/download?type=2">企业下载</a>
                        </el-dropdown-item>
                        <el-dropdown-item class="el_item">
                            <a class="a_item" href="/download?type=3">学生下载</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
		<!-- 移动端 -->
        <div class="webapp_header" v-if="!isPc">
            <div class="navBar_webapp fixed" @click="navClick" v-if="webappShow"></div>
            <ul class="ul_webapp bg_gray" v-if="webappShow1">
                <li class="li_webapp p_app_t1 p_app_b1" v-for="(item, index) in navList" :key="index"
                    @click="routerLink(index, item.path)">
                    <p :class="['font_app_20',{'active': navIndex === index}, {'black_color': navIndex !== index}]">{{item.text}}</p>
                </li>
                <div class="close_webapp bg_gray black_color font_app_20" @click="close">X</div>
            </ul>
        </div>
    </div>

</template>

<script>
    import api from '../api/common_api'

    export default {
        name: "NavBar",
        data() {
            return {
                logo: api.ImgUrl + 'logo.png',
                yjpt: api.ImgUrl + 'yjpt.png',
                navIndex: -1,
                navList: [
                    {
                        path: '/',
                        text: '首页'
                    },
					{
					    path: '/productService',
					    text: '产品服务'
					},
					{
					    path: '/newsList',
					    text: '新闻中心'
					},
					{
					    path: '/yjNews',
					    text: '奕杰动态'
					},
                    {
                        path: '/about',
                        text: '关于我们'
                    },
                ],
				show: false,	//是否显示产品服务下拉
				serviceIdx: 0,	//产品服务下拉下标
				
                isPc: this.IsPcOrNot,   //是否是PC,true-是 false-不是
                webappShow: true,  //是否显示导航,移动端
                webappShow1: false,  //是否显示导航,移动端
            }
        },
        created() {
            this.routerInit()
        },
        watch: {
            '$route'(to, from) {
                this.navIndex = 0;
                this.routerInit()
            }
        },
        methods: {
            /**
             * 路由初始化判断
             */
            routerInit() {
                let _path = this.$route.path,
                    _index = -1;
				// console.log(_path)
                for (let i = 0, _navList = this.navList; i < _navList.length; i++) {
                    if (_navList[i].path.includes(_path)) {
                        _index = i;
                        break;
                    }
                }
                this.navIndex = _index;
            },
			
			// 产品服务移入
			enter(idx) {
				if (idx == 1) this.show = true;
			},
			
			// 产品服务移出
			leave(idx) {
				if (idx == 1) this.show = false;
			},

            /**
             * 导航点击
             */
            routerLink(index, path) {
                if (index === this.navIndex) {
                    return;
                }
                // 点击哪个路由就赋值给自定义的下下标
                this.navIndex = index;
                // 路由跳转
                this.$router.push(path)
            },
            /**
             * 移动端导航点击
             */
            navClick() {
                this.webappShow = !this.webappShow;
                this.webappShow1 = !this.webappShow1;
            },
            /**
             * 关闭导航
             */
            close() {
              this.webappShow = true;
              this.webappShow1 = false;
            },
        },
    }
</script>

<style scoped lang="stylus">
    .navBar {
        width: 100%
        height 60px

        .nav {
            height 100%
            /*padding: 5px 0;*/
            font-size 16px

            .logo {
                width: 40px;
                height: 40px;
            }

            .yjpt {
                width 107px
                height 23px
            }

            h1 {
                margin-left: 20px;
                margin-right: 30px;
                line-height: 60px;
            }

            .nav_item > li {
                display: inline-block;
                margin-right 20px;
				position relative;

                &:hover p {
                    color #f16765
                    border-bottom 2px solid #f16765
                }
				
				&:hover .chfw_ul {
					color #333333
				}

                .active {
                    color #f16765;
                    border-bottom 2px solid #f16765;
                }

                &:first-child {
                    margin-left 20px
                }
				
				.chfw_ul {
					width 100px
					position absolute
					top 62px
					left 0
					border-radius 4px
					
					& > div {
						position absolute
						top -3px
						right 30px
						border-color transparent transparent #fff
						border-width 0 3px 3px
					}
					
					& > li {
						width 100%
						line-height 36px
						text-align center
						
						&:hover a {
							color #F16765
						}
					}
				}
            }

            .nav_item .red_color {
                a {
                    color #f16765
                }
            }

            .nav_item .item {
                line-height: 60px;
            }

            .nav_item .item, .app_pop > li, .app_pop > li > a {
                &:hover {
                    color: #f16765
                }
            }

            .fwrx {
                line-height: 60px;
            }


            >>> .el_dropdown {
                height 30px
                margin-top 20px
            }
			
			>>> .el_menu {
				background-color #F16765
			}

            .app_pop {
                position absolute
                top 60px
                /*right 200px*/
                right 0
                z-index 10

                li {
                    min-width 80px
                    padding 5px 12px
                    box-sizing border-box
                }
            }

        }
    }


    .webapp_header {
        .navBar_webapp {
            width 1rem
            height 1rem
            background red
        }

        .ul_webapp {
            width 3rem
            position relative
            .li_webapp {
                text-align center
                .active {
                    color #f16765
                }
            }
            .close_webapp {
                width 0.5rem
                height 0.5rem
                position absolute
                top 0
                right -0.5rem
                text-align center
                line-height 0.5rem
            }
        }
    }

</style>