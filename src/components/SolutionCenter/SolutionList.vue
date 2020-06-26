<template>
  <div>
    <List>
      <ListItem   v-for="(solution,i) in solutionList.slice(0 + solutionPage * 6, 6 + solutionPage * 6)"
                  :key = i
  
      >
        <ListItemMeta avatar="https://cdn0.iconfinder.com/data/icons/education-training-1/33/idea-512.png" :title="'推荐方案'" :description="'网关型号：'+solution.gatewayModel+'' +
         '，网关品牌：'+solution.gatewayBrand+'；传感器型号：'+solution.sensorModel+'，传感器品牌：'+solution.sensorBrand" />
        <template slot="action">
          <li>
            <a @click="showSolutionInfo(i)">查看详情</a>
          </li>
        </template>
      </ListItem>
    </List>
    <Modal
            v-model="solutionModal"
            :title="solutionInfo.name">
<!--      <p :style="{fontSize:'20px'}">{{solutionInfo.description}}</p>-->
<!--      <Divider/>-->
      <Row :style="{fontSize: '20px'}">
        网关：
      </Row>
      <br>
      <Row>
        <i-col span="12">
          网关品牌: {{solutionInfo.gateway_model}}
        </i-col>
        <i-col span="12">
          网关型号: {{solutionInfo.gateway_brand}}
        </i-col>
      </Row>
      <Divider/>
      <Row :style="{fontSize: '20px'}">
        传感器：
      </Row>
      <br>
      <Row>
        <i-col span="12">
          传感器品牌: {{solutionInfo.sensor_model}}
        </i-col>
        <i-col span="12">
          传感器型号: {{solutionInfo.sensor_brand}}
        </i-col>
      </Row>
    </Modal>
    <Page :current = "this.solutionPage" :total="solutionList.length" :page-size="6" simple @on-change="changeListPage" :style="{position:'absolute', bottom: '20px',left:'40%'}"/>
  </div>
</template>

<script>
    export default {
        name: "SolutionList",
        data(){
            return{
                solutionPage:1,
                solutionModal: false,
                solutionInfo:{
                    type:Object,
                    default(){
                        return null;
                    }
                },
            }
        },
        props:{
            solutionList:{
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods:{
            showSolutionInfo(index){
                this.solutionModal = true
                this.solutionInfo.name = '解决方案';
                this.solutionInfo.gateway_model = this.solutionList[index + this.solutionPage * 6].gatewayBrand
                this.solutionInfo.gateway_brand = this.solutionList[index + this.solutionPage * 6].gatewayModel
                this.solutionInfo.sensor_model = this.solutionList[index + this.solutionPage * 6].sensorModel
                this.solutionInfo.sensor_brand = this.solutionList[index + this.solutionPage * 6].sensorBrand
            },
            changeListPage(){
                this.solutionPage += 1
            }
        },
    }
</script>

<style scoped>

</style>