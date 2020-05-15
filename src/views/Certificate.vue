<template>
    <div class="container bg_gray">
        <div class="width bg_white">
            <!-- banner图 -->
            <div class="banner_box">
                <img class="d_b" :src="stu_enter_detail_banner"></img>
                <div class="hotline black_color">咨询电话：{{phone}}</div>
            </div>

            <div class="banner_box">
                <img class="d_b" :src="stu_nurse"></img>
            </div>

            <div class="title red_color">本月 免学免考 快速取证 名额预定30人</div>

            <div class="main_box">

                <div class="desc_one font_26">1、报名条件：年满16周岁；</div>
                <div class="desc_one1 font_26">2、报名提交资料:</div>

                <div class="desc_two font_20 m_b2">
                    姓名
                    <el-input class="el_input m_l2" placeholder="请输入姓名" v-model="inputName" clearable></el-input>
                </div>
                <div class="desc_two font_20 m_b2">
                    电话
                    <el-input class="el_input m_l2" placeholder="请输入电话" v-model="inputTel" clearable></el-input>
                </div>

                <div class="img_box m_b2">
                    <p class="font_20 m_b2">身份证正反面照片(各一张)</p>
                    <el-upload
                            :action="img_action"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :auto-upload="false"
                            :limit="2"
                            accept="image/*"
                            :disabled="disabled"
                            :http-request="uploadImg"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>

                <div class="img_box m_b2">
                    <p class="font_20 m_b2">电子版蓝底照片(一张二寸)</p>
                    <el-upload
                            :action="img_action"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :auto-upload="false"
                            :limit="1"
                            accept="image/*"
                            :disabled="disabled"
                            :http-request="uploadImg"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>

                <el-button class="bg_red btn m_b2">提交</el-button>

                <p class="m_t2 m_b2 font_20">咨询电话：13031145150</p>

                <div class="m_b2 font_20">
                    <span class="m_r2">微信：15321323893</span>
                    <span class="m_l2">QQ：2746090217</span>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import api from '../api/common_api';

    export default {
        name: "certificate",
        data() {
            return {
                stu_enter_detail_banner: api.ImgUrl + 'stu_enter_detail_banner.png',
                stu_nurse: api.ImgUrl + 'stu_nurse.png',
                img_action: 'https://iservice.bjyijie.com.cn/upload/upload',
                phone: '13031145150',
                wx: '15321323893',
                qq: '2746090217',
                idPhotoImg: [], //证件照片
                elePhotoImg: [], //电子照片
                idShow: true, //证件照添加按钮是否显示
                eleShow: true, //电子照添加按钮是否显示
                inputName: '', //输入的姓名
                inputTel: '', //输入的电话
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadImg() {

            },
        },
    }
</script>

<style scoped lang="stylus">
    .container {

        .banner_box {
            position: relative;
            width: 1080px;
            /*height: 555px;*/
            margin 0 auto
        }

        .hotline {
            position: absolute;
            bottom: 35px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: 60%;
            font-size: 28px;
            text-align: center;
            border-radius: 12px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.7);
        }

        .title {
            width: 90%;
            margin: 0 auto;
            padding: 20px 0;
            font-size: 36px;
            text-align: center;
            font-weight: bold;
        }

        .main_box {
            width: 600px;
            margin: 0 auto;
            padding-top: 36px;
            box-sizing: border-box;

            .desc_one {
                margin-bottom: 32px;
            }

            .desc_one1 {
                margin-bottom: 30px;
            }

            .el_input {
                width: 400px;
                color: #333;
            }

            .btn {
                width 300px
                margin-left 25%
                color #fff

                &:hover {
                    background #f16765
                }

                &:active {
                    border-color #f16765
                }

                &:focus {
                    background #f16765
                }
            }
        }

    }
</style>