<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#fff'}">
      <Menu active-name="1" width="200 px" @on-select="changePage">
        <MenuItem name=1>
          <Icon type="ios-apps" />
          产品目录
        </MenuItem>
        <MenuItem name=2>
          <Icon type="ios-star" />
          收藏管理
        </MenuItem>
      </Menu>
    </Sider>
    <Layout :style="{padding: '24px 24px'}">
      <div  :style="{padding: '24px', minHeight: '700px', background: '#fff',position:'relative'}">
        <div :style="{display:this.pageNav==1?'block':'none'}">
          <Button type="primary" shape="circle" @click="filter = true" :style="{position:'absolute',top:'0px',right:'0px'}">筛选</Button>
            <Modal
                    v-model="filter"
                    title="网关筛选"
                    fullscreen
                    @on-ok="ok"
                    @on-cancel="cancel">
              <SelectGatewayWorkingEnvironment/>
            </Modal>
            <gateway-list ref="gatewayList"/>
            <Page :current = "this.gatewayListPage" :total="50" simple @on-change="changeListPage" :style="{position:'absolute', bottom: '5px',left:'40%'}"/>
        </div>
        <div :style="{display:this.pageNav==2?'block':'none'}">
          <favGatewayList/>
        </div>
      </div>
    </Layout>
  </Layout>
</template>

<script>
    import SelectGatewayWorkingEnvironment from "../Steps/SelectGatewayWorkingEnvironment";
    import gatewayList from "./gatewayList";
    import favGatewayList from "./favGatewayList";
    export default {
        name: "gatewayManagement",
        components: {
            favGatewayList,
            SelectGatewayWorkingEnvironment,
            gatewayList
        },
        data () {
            return {
                filter: false,
                sensorType:-1,
                pageNav:1,
                gatewayListPage:1
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            changePage(value){
                this.pageNav = value
            },
            changeListPage(value){
                this.gatewayListPage = value
                this.$refs.gatewayList.getProduct(this.gatewayListPage)
            }
        }
    }
</script>

<style scoped>

</style>