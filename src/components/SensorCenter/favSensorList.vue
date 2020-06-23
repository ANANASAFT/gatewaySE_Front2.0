<template>
  <div>
    <List>
      <ListItem v-for="i in 5"
                :key = i

      >
        <ListItemMeta avatar="http://www.zc-sensor.com/uploads/DSC07791.jpg" :title="'产品'+i" description="产品描述" />
        <template slot="action">
          <li>
            <a @click="showProductInfo(i)">查看详情</a>
          </li>
          <li>
            <a>删除</a>
          </li>
        </template>
      </ListItem>
    </List>
    <Modal
            v-model="productModal"
            :title="'产品'+ productInfo.id"
            @on-ok="ok"
            @on-cancel="cancel">
      <p>{{productInfo.description}}</p>
    </Modal>
  </div>
</template>

<script>
    export default {
        name: "favSensorList",
        data(){
            return{
                productModal: false,
                productInfo:{
                    type:Object,
                    default(){
                        return null;
                    }
                },
            }
        },
        methods:{
            showProductInfo(index){
                this.productModal = true
                this.productInfo.id = index;
                this.productInfo.description = "产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述"
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

<style scoped>

</style>