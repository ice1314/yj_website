<template>
    <div class="container bg_white">
        <div class="banner"  :style="{backgroundImage: 'url(' + news_banner + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}"></div>
        <div class="main width o_h">
            <div class="news_l f_l">
                <el-card class="box-card m_t2" shadow="" :body-style="{ padding: '0' }">
                    <div class="news_l_box box_sizing black_color">
                        <img :src="news_icon" alt="" class="d_b">
                        <p class="m_t2 m_b1 font_20">新闻中心</p>
                        <p class="font_16">NEWS</p>
                    </div>
                </el-card>
                <!-- <ul class="news_ul m_t1">
                    <li :class="['pointer', {'news_active': index === idx}]" @mouseenter="newsItem(idx)"
                        v-for="(item, idx) in newsNav" :key="idx">{{item}}
                    </li>
                </ul> -->
            </div>
            <div class="news_r f_l p2 box_sizing">
                <ul class="news_r_ul">
                    <li class="m_b1 font_18 pointer" v-for="(item, idx) in newList"
                        :key="idx">
                        <div class="news_img_box f_l o_h">
                            <img class="news_img" :src="item.img" alt="新闻图片">
                        </div>
                        <div class="f_r p_t1 p_b1 box_sizing">
                            <router-link :to="{path: '/newsDetail', query: {id: item.id, type: item.type}}">
                                <h3 class="bold one_h m_b2">{{item.title}}</h3>
                                <p class="gray_color t_i font_16 mr_h">{{item.content}}</p>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="width paging_box m_t1 m_b2">
            <el-pagination
                    :hide-on-single-page="show"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import api from '../api/common_api';

    export default {
        name: "NewsList",
        data() {
            return {
                news_banner: api.ImgUrl + 'news_banner.png',
                news_icon: api.ImgUrl + 'news_icon.png',
                show: true,     //当只有一页时隐藏分页
                currentPage: 1, //当前页数
                pageSize: 5,    //每页展示条数
                newList: [
                    {
                        id: 1,
                        type: 1,
                        img: api.ImgUrl + 'banner1.png',
                        title: '北京市人民政府办公厅印发《关于进一步加强学前教育管理的意见》的通知',
                        content: '为深入贯彻党的十九大关于办好学前教育、在幼有所育上不断取得新进展的精神，认真落实国务院关于学前教育工作的部署和市委、市政府相关要求，进一步加强学前教育管理，提高学前教育质量，保障幼儿健康成长，现提出如下意见。',
                    },
                    {
                        id: 2,
                        type: 1,
                        img: api.ImgUrl + 'new_bsh.png',
                        title: '北京学前教育协会召开“不忘初心、牢记使命”主题教育部署会',
                        content: '2019年9月11日下午，北京学前教育协会召开“不忘初心、牢记使命”主题教育部署会。北京学前教育协会会长秦利国主持并做动员讲话，部分副会长、理事为了参加此次会议专门从外地赶回到北京。秦利国强调要深入学习贯彻习近平总书记在“不忘初心、牢记使命”主题教育工作会议上的重要讲话精神，认清国际、国内形势，提高政治站位，增强“四个意识”，坚定“四个自信”，做到“两个维护”， 切实履行好学前教育工作者的历史使命。',
                    },
                    {
                        id: 3,
                        type: 1,
                        img: api.ImgUrl + 'new_xqjy.png',
                        title: '2020年北京全面普及学前教育',
                        content: '8月1日下午，教育部举行新闻通气会。据会上消息，2018年，按常住人口计算，北京市公办园在园幼儿占比达到67%，普惠性幼儿园覆盖率达到76%；到2020年，北京市将全面普及学前教育，普惠率达到80%以上。',
                    },
                    {
                        id: 4,
                        type: 1,
                        img: api.ImgUrl + 'new_xqjy2.png',
                        title: '2019年北京市新建改建扩建138所幼儿园新增30326个学前学位',
                        content: '2019年，本市新增30326个幼儿园学位，平均每天教育部门和各区都要想办法“挖”出83个新学位。本市已提前完成“增加学前教育学位3万个”的重要民生实事。',
                    },
                ],
            }
        },
        created() {
           
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped lang="stylus">
    .container {
        .banner {
            width: 100%;
            height: 260px;
        }

        .main {
            min-height calc(100vh - 581px)

            .news_l {
                width 20%
                height 240px

                .news_l_box {
                    width 100%
                    height 240px
                    padding 48px 0
                    border 1px solid #bfbfbf

                    img {
                        width 85px
                        height 70px
                        margin 0 auto
                    }

                    p {
                        text-align center
                    }
                }

                .news_ul {
                    border 1px solid #ccc
                    border-top none


                    li {
                        border-top 1px solid #ccc
                        text-align center
                        line-height 40px
                    }
                }

                .news_active {
                    background #8a8a8a
                    color #ffffff
                }
            }

            .news_r {
                width 80%
                min-height 890px

                .news_r_ul {
                    li {
                        height 160px

                        .news_img_box {
                            width 240px
                            height 160px

                            .news_img {
                                &:hover {
                                    transform scale(1.1)
                                    transition all 0.5s
                                }
                            }
                        }

                        div {
                            width 72%

                            p {
                                line-height 32px
                                -webkit-line-clamp: 3

                                &:hover {
                                    color #f16765
                                }
                            }
                        }
                    }
                }
            }
        }

        .paging_box {
            text-align center
        }
    }
</style>