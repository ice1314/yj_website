<template>
    <div class="footerBar bg_gray">
        <div class="footerBar_con width clearfix black_color">
            <div class="contact_us_box f_l box_sizing">
                <div class="title bold box_sizing">联系我们</div>
                <ul class="contact_us_ul">
                    <li class="">北京奕杰企业管理咨询有限公司</li>
                    <li class="">电话：010-80765778</li>
                    <li class="">邮箱：85876313@qq.com</li>
                    <li class="">地址：北京市昌平区珠江摩尔大厦5号楼二单元212</li>
                </ul>
            </div>
            <div class="app_download_box f_r box_sizing">
                <div class="title bold  box_sizing">APP下载</div>
                <div class="ios_box f_l" style="margin-right: 32px">
<!--                    <div class=" m_b2">小程序</div>-->
                    <ul class="clearfix">
                        <li class="download">
                            <a class="black_color" href="/download?type=1">院校下载</a>
                        </li>
                        <li class="download">
                            <a class="black_color" href="/download?type=2">企业下载</a>
                        </li>
                        <li class="download">
                            <a class="black_color" href="/download?type=3">学生下载</a>
                        </li>
                    </ul>
                </div>

                <div class="ios_box f_l" style="margin-left: 31%">
                    <ul class="clearfix" style="margin-top: -50px;padding: 16px 16px 2px;background: #fff">
                        <li class="f_l" style="margin-right: 0">
                            <img class="d_b m_b1" :src="wx_gzh" alt="企业版">
                            <span class="">微信公众号</span>
                        </li>
                    </ul>
                </div>

                <div class="ios_box f_l" style="margin-left: 20%">
<!--                    <div class=" m_b2">小程序</div>-->
                    <ul class="clearfix" style="margin-top: -50px;padding: 16px 16px 2px;background: #fff">
                        <li class="f_l" style="margin-right: 0">
                            <img class="d_b m_b1" :src="wx_code3" alt="企业版">
                            <span class="">奕杰注册</span>
                        </li>
                    </ul>
<!--                    <img src="../assets/image/wx_code3.jpg" alt="" style="width: 127px;height: 144px">-->
                </div>

                <!--<div class="ios_box f_l" style="margin-right: 32px">
                    <div class=" m_b2">iOS下载</div>
                    <ul class="clearfix">
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/ios_school.png" alt="院校版">
                            <span class="">院校版</span>
                        </li>
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/ios_garden.png" alt="企业版">
                            <span class="">企业版</span>
                        </li>
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/ios_student.png" alt="学生版">
                            <span class="">学生版</span>
                        </li>
                    </ul>
                </div>-->

                <!--<div class="android_box f_l">
                    <div class=" m_b2">Android下载</div>
                    <ul class="clearfix">
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/Android_school.png" alt="院校版">
                            <span class="">院校版</span>
                        </li>
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/Android_garden.png" alt="企业版">
                            <span class="">企业版</span>
                        </li>
                        <li class="f_l">
                            <img class="d_b m_b1" src="../assets/image/Android_student.png" alt="学生版">
                            <span class="">学生版</span>
                        </li>
                    </ul>
                </div>-->
            </div>
        </div>
        <div class="file_info width p_b1 black_color">
            <a class="font_10 black_color" href="http://www.beian.miit.gov.cn" target="_blank">
                <img class="img" :src="ba" alt="备案">京ICP备18053323号
            </a>
            <div class="font_10 m_l1">Copyright © bjyijie.com.cn  版权所有</div>
        </div>
    </div>
</template>

<script>
    import api from '../api/common_api';

    export default {
        name: "footerBar",
        data() {
            return {
                wx_gzh: api.ImgUrl + 'wx_gzh.jpg',
                wx_code3: api.ImgUrl + 'wx_code3.jpg',
                ba: api.ImgUrl + 'ba.png',

            }
        },
    }
</script>

<style scoped lang="stylus">
    .footerBar {
        width: 100%
        .footerBar_con {
            height: 100%
            .contact_us_box, .app_download_box {
                height: 100%
                padding: 0 0 0 20px
                .title {
                    padding: 30px 0 10px
                }
            }
            .contact_us_box {
                width: 30%
                .title {
                    margin-bottom: 20px
                }
                .contact_us_ul {
                    li {
                        margin-bottom 6px
                    }
                }
            }
            .app_download_box {
                width: 70%
                .title {
                    margin-bottom: 20px
                }
                .ios_box, .android_box {
                    ul li {
                        text-align center
                        margin-right 32px
                        margin-bottom 6px
                        img {
                            width: 86px
                            height: 86px
                        }
                        a {
                            color #333333
                        }
                        a:hover {
                            color #f16765
                        }
                        /*&:last-child {
                            margin-right: 0
                        }*/
                    }
                }
            }
        }
        .file_info {
            text-align: center
            a:hover {
                color: #f16765
            }
            .img {
                width: 20px
                height: 20px
                margin-right: 2px
                vertical-align: -5px
            }
        }

    }
</style>