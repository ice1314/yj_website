<template>
    <div>
        <div class="home p_b2">
            <div class="banner"  :style="{backgroundImage: 'url(' + banner + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}">
                <div class="login_box box_sizing">
                    <div class="login_swith o_h">
                        <div class="login_text font_16 pointer f_l active">密码登录</div>
                        <div class="login_text font_16 pointer f_l">验证码登录</div>
                    </div>
                    <div class="input_box">
                        <el-input class="el_input" placeholder="请输入手机号码" v-model="phone" clearable
                                  maxlength="11"></el-input>
                        <el-input class="el_input" placeholder="请输入密码" v-model="pass" show-password
                                  maxlength="20"></el-input>
                    </div>
                    <div class="btn_box o_h">
                        <el-button class="el_btn1 f_l white_color">登录</el-button>
                        <el-button class="el_btn2 f_r gray_color bg_white">注册</el-button>
                    </div>
                    <div class="reg_box o_h">
                        <img class="wx_icon f_l pointer" :src="wx" alt="wx">
                        <span class="register white_color pointer f_r font_16">注册</span>
                    </div>
                </div>
            </div>
            <div class="main width">
                <ul class="card_box box_sizing bg_white o_h">
                    <li class="f_l box_sizing">
                        <img :src="sch_icon" alt="学校">
                        <div class="li_r">
                            <strong class="font_26 m_b1 d_b">院校</strong>
                            <div class="font_16 gray_color">帮你管理</div>
                            <div class="font_16 gray_color">助你就业</div>
                        </div>
                    </li>
                    <li class="f_l box_sizing">
                        <img :src="gar_icon" alt="企业">
                        <div class="li_r">
                            <strong class="font_26 m_b1 d_b">企业</strong>
                            <div class="font_16 gray_color">帮你求才</div>
                            <div class="font_16 gray_color">助你发展</div>
                        </div>
                    </li>
                    <li class="f_l box_sizing">
                        <img :src="stu_icon" alt="学生">
                        <div class="li_r">
                            <strong class="font_26 m_b1 d_b">学生</strong>
                            <div class="font_16 gray_color">帮你择业</div>
                            <div class="font_16 gray_color">助你成长</div>
                        </div>
                    </li>
                </ul>
                <div class="content o_h">
                    <div class="con_l f_l box_sizing">
                        <div class="use_num bg_white">
                            <span class="gray_color font_20 m_r1">注册用户</span>
<!--                            <sub class="gray_color font_16">注册用户</sub>-->
                            <span class="red_color font_26 m_r1">{{num}}人</span>
                        </div>
                        <div class="about_us bg_white box_sizing">
                            <div class="font_16 bold about_us_text box_sizing">关于我们</div>
<!--                            <a href="/about">-->
                                <div class="about_img_box pointer" @click="routerLink(1, '/about')">
                                    <img class="m_r1" :src="us_img1" alt="奕杰">
                                    <p class="font_14 black_color d_i_b f_r" style="line-height: 20px">奕杰阳光幼教管理中心经过多年与学校的校企合作、与幼儿园的师资招聘合作，总结北京学前教育专业实习、就业的特点与特色，研发“奕杰平台”将多年经验与平台经验与互联网</p>
                                </div>
                            <p class="font_14 black_color d_i_b f_r mr_h" style="-webkit-line-clamp: 4;">大数据相结合。首创学前教育专业实习、就业线上实时对比分析，纵向本校历届学生实习、就业特色分析，横向同级别学校优劣势对比，更深层次将学校人才培养与企业人才需求紧密结合在一起。 “奕杰平台”为学校和学生提供在线合作幼儿园的详情介绍，提供学生实习期间的线上问题提报及处理结果，提供学生实习期间的文字、影像在线分享，提供学生实习的考勤统计、位置签到等管理信息。与此同时，我们还有专业老师辅助学校对学生进行现场回访、问题处理及园所调整等工作。</p>
<!--                            </a>-->
                        </div>
                    </div>
                    <div class="con_r f_r bg_white">
                        <el-carousel trigger="click" height="400px" :autoplay="true">
                            <el-carousel-item v-for="(item,index) in imgList" :key="index">
                                <a href="/certificate" v-if="index == 1">
                                    <img :src="item.src" alt="轮播图">
                                </a>
                                <img :src="item.src" alt="轮播图" v-else>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="news_box m_b2 m_t2">
                    <el-card class="news_item f_l" shadow="hover" :body-style="{padding: '0 20px 20px'}">
                        <div slot="header" class="clearfix">
                            <span class="font_16 bold black_color">新闻中心</span>
                            <el-button style="float: right; padding: 3px 0" type="text">
                                <router-link class="more gray_color" :to="{path: '/newsList', query: {type: 1, index: 0}}">更多>></router-link>
                            </el-button>
                        </div>
                        <div class="hot_news m_b1 news_con f_l pointer">
                            <img class="f_l" :src="new_xqjy" alt="新闻中心">
                            <router-link :to="{path: '/newsDetail', query: {id: 1, type: 1}}">
                                <p class="f_r  black_color mr_h">北京市人民政府办公厅印发《关于进一步加强学前教育管理的意见》的通知</p>
<!--                            <span class="f_r  black_color mr_h">来自-今日头条</span>-->
                            </router-link>
                        </div>
                        <div class="hot_news m_b1 news_con f_r pointer">
                            <img class="f_l" :src="new_bsh" alt="新闻中心">
                            <router-link :to="{path: '/newsDetail', query: {id: 2, type: 1}}">
                                <p class="f_r  black_color mr_h">北京学前教育协会召开 “不忘初心、牢记使命”主题教育部署会</p>
<!--                            <span class="f_r  black_color mr_h">来自-今日头条</span>-->
                            </router-link>
                        </div>
                    </el-card>
                    <el-card class="news_item f_r" shadow="hover" :body-style="{padding: '0 20px 20px'}">
                        <div slot="header" class="clearfix">
                            <span class="font_16 bold black_color">奕杰动态</span>
                            <el-button style="float: right; padding: 3px 0" type="text">
                                <router-link class="more gray_color" :to="{path: '/newsList', query: {type: 2, index: 1}}">更多>></router-link>
                            </el-button>
                        </div>
                        <div class="news_con f_l pointer">
                            <router-link :to="{path: '/newsDetail', query: {id: 1, type: 2}}">
                                <img class="m_b1" :src="new_jxpx" alt="奕杰动态">
                                <span class=" black_color mr_h">知无涯，学无静-奕杰培训</span>
                            </router-link>
                        </div>
                        <div class="news_con f_r pointer">
                            <router-link :to="{path: '/newsDetail', query: {id: 2, type: 2}}">
                                <img class="m_b1" :src="new_jtsm" alt="奕杰动态">
                                <span class=" black_color mr_h">走进孩子的世界之如果只给你一天时间去教孩子，你会教他什么？</span>
                            </router-link>
                        </div>
                    </el-card>
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
                wx: api.ImgUrl + 'wx.png',
                sch_icon: api.ImgUrl + 'sch_icon.png',
                gar_icon: api.ImgUrl + 'gar_icon.png',
                stu_icon: api.ImgUrl + 'stu_icon.png',
                us_img1: api.ImgUrl + 'us_img1.jpg',
                new_xqjy: api.ImgUrl + 'new_xqjy.png',
                new_bsh: api.ImgUrl + 'new_bsh.png',
                new_jxpx: api.ImgUrl + 'new_jxpx.png',
                new_jtsm: api.ImgUrl + 'new_jtsm.png',

                num: 5212,
                phone: '',
                pass: '',
                imgList: [
                    {
                        src: api.ImgUrl + 'banner1.png'
                    },
                    {
                        src: api.ImgUrl + 'banner2.png'
                    },
                    {
                        src: api.ImgUrl + 'banner3.png'
                    },
                    {
                        src: api.ImgUrl + 'banner4.png'
                    },
                    {
                        src: api.ImgUrl + 'banner5.png'
                    },
                ],
            }
        },
        created() {
            this.time();
        },
        methods: {
            routerLink(index, path) {
                // 路由跳转
                this.$router.push(path)
            },
            time() {
                setInterval(() => {
                    this.num += 67;
                }, 24*60*60*1000)
            },
        },
    }
</script>

<style scoped lang="stylus">
    .home {
        background #f2f2f2
        min-height calc(100vh - 299px)

        .banner {
            position: relative;
            width: 100%;
            height: 260px;
            /*background: url("../assets/image/banner.png") center center no-repeat;*/

            .login_box {
                width: 220px;
                position: absolute;
                top: 50%;
                right: 50%;
                margin-right: -580px;
                margin-top: -135px;
                padding: 30px 0;

                .login_swith {
                    margin-bottom: 18px

                    .login_text {
                        color: #fff;
                        opacity: 0.6;
                    }

                    .active {
                        opacity: 1
                        color: #fff
                    }

                    .login_text:first-child {
                        margin-right: 40px;
                    }
                }

                .input_box {
                    .el_input {
                        margin-bottom: 10px

                        >>> .el-input__inner {
                            -webkit-border-radius: 3px
                            -moz-border-radius: 3px
                            border-radius: 3px
                            height 30px
                        }
                    }
                }

                .btn_box {
                    margin-bottom: 10px

                    .el_btn1, .el_btn2 {
                        width: 47%
                        height 30px
                        padding-top 0;
                        padding-bottom 0;
                        border: none
                        -webkit-border-radius: 3px
                        -moz-border-radius: 3px
                        border-radius: 3px
                    }

                    .el_btn1 {
                        background: #F75F05
                        color: #fff
                    }

                    .el_btn2 {
                        color: #999
                    }
                }

                .reg_box {
                    img {
                        width: 22px
                        height: 22px
                    }

                    span {
                        opacity: 0.6;
                    }
                }
            }
        }

        .main {
            .card_box {
                width: 1000px
                margin: 0 auto
                margin-top: 20px
                margin-bottom: 20px
                padding: 30px 0
                -webkit-border-radius: 10px
                -moz-border-radius: 10px
                border-radius: 10px

                li {
                    width: (@width / 3)
                    border-right: 1px solid #ddd
                    text-align: center

                    &:last-child {
                        border-right: none
                    }

                    img {
                        width: 80px
                        height: 80px
                        margin-right: 20px
                        vertical-align: center
                        display: inline-block
                    }

                    .li_r {
                        vertical-align: center
                        text-align: left
                        display: inline-block
                    }
                }
            }
            .content {
                height: 400px

                .con_l {
                    width: 30%
                    height: 100%
                    .use_num {
                        height: 100px
                        text-align: center
                        line-height: 100px
                        /*margin-bottom: 20px*/
                    }
                    .about_us {
                        height: 280px
                        margin-top: 20px
                        padding: 0 20px 20px
                        &:hover p {
                            color #f16765
                        }
                        .about_us_text {
                            padding: 18px 0
                        }
                        .about_img_box {
                            img {
                                width: 120px
                                height: 120px
                            }
                            p {
                                width: 182px
                                &:hover {
                                    color: #f16765
                                }
                            }
                        }
                    }
                }
                .con_r {
                    width: 68%
                    height: 100%
                    .el-carousel__item:nth-child(2n) {
                        background-color: #99a9bf;
                    }

                    .el-carousel__item:nth-child(2n+1) {
                        background-color: #d3dce6;
                    }
                }
            }
            .news_box {
                height: 280px
                .news_item {
                    width: 49%
                    height: 100%
                    >>> .el-card__header {
                        border-bottom: none
                    }
                    .more:hover {
                        color #f16765
                    }
                    .news_con {
                        width: 48%
                        height: 152px
                        span:hover, p:hover {
                            color: #f16765
                        }
                    }
                    .hot_news {
                        width: 100%
                        height: 90px
                        img {
                            width: 160px
                        }
                        p, span {
                            width: 68%
                            line-height: 21px
                        }
                        p {
                            height: 63px
                            -webkit-line-clamp: 3
                            margin-bottom: 6px
                        }
                    }
                }

            }
        }
    }
</style>
