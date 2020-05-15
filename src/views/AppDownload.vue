<template>
    <div class="bg_gray">
        <div class="width o_h">
            <div class="main o_h box_sizing bg_white" v-if="type == 1">
                <h1 class="font_26 bold">院校APP下载</h1>
                <ul>
                    <li class="f_l">
                        <img class="m_b1" :src="Android_school" alt="">
                        <a class="font_16 pointer" href="https://bjyijie.com.cn/yijie/upload/app-apk/学校.apk">安卓下载</a>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="ios_school" alt="">
                        <span class="font_16">苹果下载</span>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="wx_code" alt="">
                        <span class="font_16">小程序</span>
                    </li>
                </ul>

            </div>
            <div class="main o_h box_sizing bg_white" v-if="type == 2">
                <h1 class="font_26 bold">企业APP下载</h1>
                <ul>
                    <li class="f_l">
                        <img class="m_b1" :src="Android_garden" alt="">
                        <a class="font_16 pointer" href="http://bjyijie.com.cn/yijie/upload/app-apk/园所.apk">安卓下载</a>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="ios_garden" alt="">
                        <span class="font_16">苹果下载</span>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="wx_code" alt="">
                        <span class="font_16">小程序</span>
                    </li>
                </ul>

            </div>
            <div class="main o_h box_sizing bg_white" v-if="type == 3">
                <h1 class="font_26 bold">学生APP下载</h1>
                <ul>
                    <li class="f_l">
                        <img class="m_b1" :src="Android_student" alt="">
                        <a class="font_16 pointer" href="https://bjyijie.com.cn/yijie/upload/app-apk/学生.apk">安卓下载</a>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="ios_student" alt="">
                        <span class="font_16">苹果下载</span>
                    </li>
                    <li class="f_l">
                        <img class="m_b1" :src="wx_code" alt="">
                        <span class="font_16">小程序</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import util from '@/assets/js/common.js'
    import api from '../api/common_api';

    export default {
        name: "AppDownload",
        data() {
            return {
                type: null,
                Android_garden: api.ImgUrl + 'Android_garden.png',
                Android_school: api.ImgUrl + 'Android_school.png',
                Android_student: api.ImgUrl + 'Android_student.png',
                ios_garden: api.ImgUrl + 'ios_garden.png',
                ios_school: api.ImgUrl + 'ios_school.png',
                ios_student: api.ImgUrl + 'ios_student.png',
                wx_code: api.ImgUrl + 'wx_code.jpg',
            }
        },
        mounted() {
            if (util.getQueryParams('type')) {
                this.type = util.getQueryParams('type');
            }
        },
        methods: {}
    }
</script>

<style scoped lang="stylus">
    .main {
        min-height calc(100vh - 299px)
        /*background #f2f2f2*/
        padding 80px 40px
        margin 2px 0

        h1 {
            text-align center
            margin-bottom 80px
        }

        li {
            width 200px
            height 200px
            text-align center
            margin-right: 260px;

            &:last-child {
                margin-right 0
            }

            a:hover {
                color #f16765
            }
        }
    }

</style>