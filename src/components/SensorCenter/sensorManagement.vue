<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#fff'}">
      <Menu active-name=1 width="200 px" @on-select="changePage">
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
      <div :style="{padding: '24px', minHeight: '700px', background: '#fff',position:'relative'}">
        <div :style="{display:this.pageNav==1?'block':'none'}">
          <Button type="primary" shape="circle"  @click="filter = true" :style="{position:'absolute',top:'0px',right:'0px'}">筛选</Button>
          <Modal
                  v-model="filter"
                  title="传感器筛选"
                  fullscreen
                  @on-ok="ok"
                  @on-cancel="cancel">
            <span>传感器功能:</span><SelectSensorFunction @on-change="changeSensorType"/>
            <Divider></Divider>
            <SelectSensorParameters :sensor-type="sensorType"/>
            <SelectSensorWorkingEnvironment/>
          </Modal>
          <sensor-list ref="sensorList"/>
          <Page :current = "this.sensorListPage" :page-size="6" :total="50" simple @on-change="changeListPage" :style="{position:'absolute', bottom: '5px',left:'40%'}"/>
        </div>
        <div :style="{display:this.pageNav==2?'block':'none'}">
          <favSensorList/>
        </div>
      </div>
    </Layout>
  </Layout>
</template>

<script>
    import SelectSensorFunction from "../Steps/SelectSensorFunction";
    import SelectSensorParameters from "../Steps/SelectSensorParameters";
    import SelectSensorWorkingEnvironment from "../Steps/SelectSensorWorkingEnvironment";

    import sensorList from "./sensorList";
    import favSensorList from "./favSensorList";
    export default {
        name: "sensorManagement",
        components: {
            SelectSensorFunction,
            SelectSensorParameters,
            SelectSensorWorkingEnvironment,
            sensorList,
            favSensorList,
        },
        data () {
            return {
                filter: false,
                sensorType:-1,
                pageNav:1,
                sensorListPage:1
            }
        },
        methods: {
            changeSensorType(value){
                this.sensorType = value
            },
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
                this.sensorListPage = value
                this.$refs.sensorList.getProduct(this.sensorListPage)
            }
        }
    }
</script>

<style scoped>

</style>