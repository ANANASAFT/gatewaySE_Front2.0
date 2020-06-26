<template>
  <div>
    <List v-if="this.productList!=[]">
      <ListItem
                v-for="(product,index) in productList"
                :key = index
      >
        <ListItemMeta avatar="https://www.baimatech.com/upfile/2020/1584610100984.png" :title="product.model" :description="product.description" />
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
        <i-col span="12">
          品牌: {{productInfo.brand}}
        </i-col>
        <i-col span="12">
          工业等级: {{productInfo.industrialGrade}}
        </i-col>
      </Row>
      <br>
      <Row>
        <i-col span="12">
          工作温度: {{productInfo.temperatureLow}} °C ~ {{productInfo.temperatureHigh}} °C
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
                if(product.industrialGrade==0)
                  this.productInfo.industrialGrade = "工业普通级"
                if(product.industrialGrade==1)
                    this.productInfo.industrialGrade = "工业严苛级"
                this.productInfo.name = product.model;
                this.productInfo.brand = product.brand;
                this.productInfo.description = product.description;
                this.productInfo.temperatureHigh = product.temperatureHigh;
                this.productInfo.temperatureLow = product.temperatureLow;
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
                    url: 'http://localhost:8081/api//gateway/all/'+ page,
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
                        console.log("retList",retList)
                        _this.productList = retList
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