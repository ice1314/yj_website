<template>
    <div class="main bg_gray o_h">
        <div class="banner" :style="{backgroundImage: 'url(' + about_us1 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}">
            <div class="about_us_box">
                <h1 class="font_26 m_b2 m_t1">关于我们</h1>
                <span class="font_20">About Us</span>
            </div>
        </div>
        <div class="con_box width p_b2 p_t2 bg_white">
            <h2 class="font_24 red_color">北京奕杰企业管理咨询有限公司</h2>
            <div class="con_item o_h">
                <img class="d_i_b" :src="us_img1" alt="">
                <p class="d_i_b font_18" style="padding-right: 0;">奕杰阳光幼教管理中心经过多年与学校的校企合作、与幼儿园的师资招聘合作，总结北京学前教育专业实习、就业的特点与特色，研发“奕杰平台”将多年经验与互联网大数据相结合。首创学前教育专业实习、就业线上实时对比分析，纵向本校历届学生实习、就业特色分析，横向同级别学校优劣势对比，更深层次将学校人才培养与企业人才需求紧密结合在一起。 “奕杰平台”为学校和学生提供在线合作幼儿园的详情介绍，提供学生实习期间的线上问题提报及处理结果，提供学生实习期间的文字、影像在线分享，提供学生实习的考勤统计、位置签到等管理信息。与此同时，我们还有专业老师辅助学校对学生进行现场回访、问题处理及园所调整等工作。</p>
            </div>
            <div class="con_item o_h">
                <p class="d_i_b font_18" style="padding-left: 0;">“奕杰阳光”与北京、河北、河南、山东、山西、贵州、陕西、甘肃、宁夏、湖北、安徽、吉林、辽宁、黑龙江等多省市地区的国办、民办院校达成长期合作关系，除院校统一安排的大型双选会、专场招聘会合作模式以外，还成立了入学冠名班、实习定向培养班等多种灵活模式，为合作院校大大减轻实习、就业安置难度，并按照院校的要求，结合“奕杰阳光”独有特色为北京实习的学生提供后期回访、关怀等服务，生成统一的实习鉴定报告，减轻合作院校的工作量。</p>
                <img class="d_i_b" :src="us_img2" alt="">
            </div>
            <div class="con_item o_h">
                <img class="d_i_b" :src="us_img3" alt="">
                <p class="d_i_b font_18" style="padding-right: 0;">“奕杰阳光”与北京几百家公立幼儿园、教委委托办园、大型连锁幼儿园、企业民营园、早教机构等长期合作，我们不仅熟知每个合作园所的环境，还与合作园所的园长、人事负责人深度的交流沟通，熟悉各合作园所的办园特色、人才需求等，长期为园所提供校招、社招人才，并配合园所对实习老师进行管理，为合作园所节省大量人事招聘相关成本，成为真正意义的“北京幼儿园联盟”。</p>
            </div>
        </div>
        <div class="contact_us width bg_white">
            <div class="contact_us_title o_h">
                <div class="contact_icon">
                    <div class="contact_img f_l bg_white">
                        <img src="../../src/assets/image/contant.png" alt="">
                    </div>
                    <span class="font_22 bold white_color f_l m_l2">联系我们</span>
                </div>
            </div>
            <div class="contact_us_item">
                <h2 class="font_22 black_color m_b2">市场合作</h2>
                <p class="font_20 gray_color">
                    如果您是教育机构、媒体、出版社、销售渠道或其他单位组织，期望深层的洽谈内容分享、商业合作，请联系：
                    <span class="font_20" style="color: #3366cc;">bjyijie@126.com</span>
                </p>
            </div>
            <div class="contact_us_item">
                <h2 class="font_22 black_color m_b2">产品合作</h2>
                <p class="font_20 gray_color">
                    请联系：
                    <span class="font_20" style="color: #3366cc;">bjyijie@126.com</span>
                </p>
                <p class="font_20 gray_color">
                    QQ：24539286(请备注合作意向)
                </p>
            </div>
            <div class="contact_us_item">
                <h2 class="font_22 black_color m_b2">加入我们</h2>
                <p class="font_20 gray_color">
                    感兴趣的小伙伴快来介入我们吧，请将简历发送至：
                    <span class="font_20" style="color: #3366cc;">bjyijie@126.com</span>
                </p>
            </div>
            <div class="contact_us_item">
                <h2 class="font_22 black_color m_b2">地址</h2>
                <p class="font_20 gray_color">北京市昌平区珠江摩尔大厦5号楼二单元212</p>
                <p class="font_20 gray_color">
                    电话：17710398062
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../api/common_api';

    export default {
        name: "About",
        data() {
            return {
                about_us1: api.ImgUrl + 'about_us1.jpg',
                us_img1: api.ImgUrl + 'us_img1.jpg',
                us_img2: api.ImgUrl + 'us_img2.jpg',
                us_img3: api.ImgUrl + 'us_img3.jpg',
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="stylus">
    .main {
        .banner {
            position relative
            width: 100%;
            height: 260px;

            .about_us_box {
                width 200px
                height 100px
                color #606060
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                margin auto
                text-align center
            }
        }

        .con_box {
            padding 0 100px 20px
            box-sizing border-box

            h2 {
                text-align center
                padding 40px 0
            }

            /*.con_item > img {
                width 500px
            }

            .con_item > p {
                width 600px
            }*/

            .con_item > img, .con_item > p {
                width 500px
                // height 500px
                vertical-align middle
            }
            .con_item > p {
                padding 0 50px
                box-sizing border-box
                line-height 40px
            }
        }
        .contact_us {
            .contact_us_title {
                height 80px
                line-height 80px
                background-color: #f16765; /* 不支持线性的时候显示 */
                background-image: linear-gradient(to right, #f5605e, #ffffff);
                padding 0 100px
                box-sizing border-box
                .contact_img {
                    width 110px
                    height 110px
                    border-radius 50%
                    margin-top -15px
                    text-align center
                    img {
                        width 80px
                        height 80px
                        margin-top: 15px
                    }
                }
            }
            .contact_us_item {
                padding 20px 100px
                box-sizing border-box
            }
        }
    }
</style>