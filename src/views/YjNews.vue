<template>
    <div class="container bg_white">
        <div class="banner"  :style="{backgroundImage: 'url(' + news_banner + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}"></div>
        <div class="main width o_h">
            <div class="news_l f_l">
                <el-card class="box-card m_t2" shadow="" :body-style="{ padding: '0' }">
                    <div class="news_l_box box_sizing black_color">
                        <img :src="news_icon" alt="" class="d_b">
                        <p class="m_t2 m_b1 font_20">奕杰动态</p>
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
                    <li class="m_b1 font_18 pointer" v-for="(item, idx) in newList1"
                        :key="idx">
                        <div class="news_img_box f_l o_h">
                            <img class="news_img" :src="item.img" alt="新闻图片">
                        </div>
                        <div class="f_r p_t1 p_b1 box_sizing">
                            <router-link :to="{path: '/newsDetail', query: {id: JSON.stringify(item.id), type: JSON.stringify(item.type)}}">
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
                news_banner: api.ImgUrl + 'news_banner1.png',
                news_icon: api.ImgUrl + 'news_icon.png',
                // newsNav: ['新闻中心', '奕杰动态'],
                show: true,     //当只有一页时隐藏分页
                currentPage: 1, //当前页数
                pageSize: 5,    //每页展示条数
                newList1: [
                    {
                        id: 1,
                        type: 2,
                        img: api.ImgUrl + 'new_jxpx.png',
                        title: '知无涯，学无静-奕杰培训',
                        content: '玉不琢，不成器。人不学，不知义。人生需要不断学习。幼儿教师是幼儿获取知识的源泉，是传承文明的导师，更是以身作则的楷模；教师的一言一行、一颦一笑，都蕴含着教育的力量。为了更好的提高实习生的整体素质水平，2019年11月2日奕杰特请专业培训师对实习生进行培训。',
                    },
                    {
                        id: 2,
                        type: 2,
                        img: api.ImgUrl + 'new_hzdsj1.jpg',
                        title: '怎样走进孩子的世界之如果只给你一天时间去教孩子，你会教他什么？',
                        content: '一、怎样走进孩子的世界？解决：1）放低身价，与孩子打闹成一片。2）尊重孩子的每一个选择。3）学会换位思考。4）适时的肯定孩子。5）多进行角色扮演的游戏。6）遇到问题，学会与幼儿婉转沟通。二、怎样快速记住幼儿名字？解决： 1）看成长档案，先熟悉幼儿名字，照片，特点及家庭情况\n',
                    },
                    {
                        id: 3,
                        type: 2,
                        img: api.ImgUrl + 'new_jxs.png',
                        title: '奕杰接到京实习生',
                        content: '2019年6月18日，实习老师们带着人生的梦想与希望到京参加顶岗实习。希望你们能将自己的梦想放飞，将自己的未来播种，奕杰在等待你们开花结果！ '
                    },
                    {
                        id: 4,
                        type: 2,
                        img: api.ImgUrl + 'new_hfhd1.png',
                        title: '奕杰协河北高校教师进行回访活动',
                        content: '学校为深入了解和掌握学生顶岗实习的情况，解决学生在顶岗实习过程中存在的一些问题，学校加强学生顶岗实习管理，我方积极配合学校进行回访。\n' +
                            '2019年12月20日下午，奕杰相关负责老师协河北高校学前教育负责主任及实习指导老师幼儿园进行了回访并看望了在岗实习的学生。'
                    },
                    {
                        id: 5,
                        type: 2,
                        img: api.ImgUrl + 'new_xj1.png',
                        title: '奕杰阳光幼教—宣讲',
                        content: '奕杰走进河北专校进行宣讲，奕杰老师针对一些情况做了细致的说明，特别是对学生的安全、住宿、待遇、分配以及学习方面做了细致的安排、规划和幼儿园实习工作流程及一些注意事项和遇到的问题该如何第一时间处理等。'
                    },
                ],
            }
        },
        created() {
            // console.log(this.$route.query)
        },
        methods: {
            // newsItem(idx) {
            //     if (this.index === idx) {
            //         return;
            //     }
            //     this.index = idx;
            // },
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