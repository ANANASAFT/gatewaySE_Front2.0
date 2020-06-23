<template>
  <div>
    <List v-if="this.productList!=[]">
      <ListItem
                v-for="(product,index) in productList"
                :key = index
      >
        <ListItemMeta avatar="https://www.baimatech.com/upfile/2020/1584610100984.png" :title="product.product_name" :description="product.description" />
        <template slot="action">
          <li>
            <a @click="showProductInfo(product)">查看详情</a>
          </li>
          <li>
            <a>收藏</a>
          </li>
        </template>
      </ListItem>
    </List>
    <Modal
            v-model="productModal"
            :title="productInfo.name"
            @on-ok="ok"
            @on-cancel="cancel">
      <p :style="{fontSize:'20px'}">{{productInfo.description}}</p>
      <Divider/>
      <Row>
          工业等级: 消费级
      </Row>
      <br>
      <Row>
        <i-col span="12">
          工作温度: {{productInfo.param1}}
        </i-col>
        <i-col span="12">
          工作电流: {{productInfo.param2}}
        </i-col>
      </Row>
    </Modal>
  </div>
</template>

<script>
    // import {setUsrCookie} from "../../utils/cookie";

    export default {
        name: "gatewayList",
        data(){
            return{
                productModal: false,
                productInfo:{
                    type:Object,
                    default(){
                        return null;
                    }
                },
                productList:[],
            }
        },
        props:{
          // page:{
          //     type: Number,
          //     default() {
          //         return 1;
          //     }
          // }
        },
        methods:{
            showProductInfo(product){
                this.productModal = true
                this.productInfo.name = product.product_name;
                this.productInfo.description = product.description;
                this.productInfo.param1 = product.param1;
                this.productInfo.param2 = product.param2;
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            getProduct(page){
                var _this = this
                this.$axios({
                    url: 'http://localhost:8081/api/get_gateway_test',
                    method: 'post',
                    //发送格式为json
                    data: JSON.stringify({
                        'page_num':page,
                    }),
                    headers:
                        {
                            'Content-Type': 'application/json'
                        }
                }).then(function (return_data) {
                    var retList = return_data.data.data
                    if(retList != null){
                        // console.log("retList",retList)
                        _this.productList = retList
                        // component.$Message.info('登录成功');
                        // // _this.$store.commit("changeLogin",1)
                        // setUsrCookie(component.usr_account,component.usr_password,1)
                        // component.$router.push("/home")
                    }else {
                        // component.$Message.info('用户名或密码错误');
                        // component.loginModal = true;
                    }
                });
    }
        },
        mounted() {
            this.getProduct(1)
        }
    }
</script>

<style scoped>

</style>