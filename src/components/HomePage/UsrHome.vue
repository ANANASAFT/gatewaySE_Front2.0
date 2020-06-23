<template>
  <div>
    <Layout>
      <Header>
        <Row>
          <i-col span="16">
            <Menu mode="horizontal" theme="dark" active-name= "1" @on-select="changeMainpage">
              <MenuItem name = "0" style="font-size: 25px;color: white" >
                智能传感器组网引擎
              </MenuItem>
              <MenuItem name = 1>
                <Icon type="ios-stats" />
                网关中心
              </MenuItem>
              <MenuItem name = 2>
                <Icon type="ios-stats" />
                传感器中心
              </MenuItem>
              <MenuItem name = 3>
                <Icon type="ios-construct" />
                解决方案中心
              </MenuItem>
              <MenuItem name = 4>
                <Icon type="ios-people" />
                用户中心
              </MenuItem>
            </Menu>
          </i-col>
          <i-col span="8">
            <MenuItem name = 5 style="font-size: 25px;color: white">
              您好，{{this.usr_name}}
            </MenuItem>
          </i-col>
        </Row>
      </Header>
      <Layout :style="{padding: '0 10px'}">
        <div :style="{padding: '24px', minHeight: '700px',maxHeight:'800px', background: '#fff'}" >
<!--          <div :style="{display:this.mainpageNav==0?'block':'none'}">-->
<!--            <Index/>-->
<!--          </div>-->

          <div :style="{display:this.mainpageNav==1?'block':'none'}">
            <GatewayCenter/>
          </div>
          <div :style="{display:this.mainpageNav==2?'block':'none'}">
            <SensorCenter/>
          </div>
          <div :style="{display:this.mainpageNav==3?'block':'none'}">
            <Layout>
              <Sider hide-trigger :style="{background: '#fff'}">
                <my-step-nav :current-step="currentStep"/>
              </Sider>
              <Layout :style="{padding: '24px 24px'}">
                <div :style="{padding: '24px', minHeight: '700px', background: '#fff',position:'relative'}">
                  <SelectSensorFunction @on-change="selectSensorFunctionChanged" ref="sensorFunctionSelect" :style="{display:this.currentStep!=0?'none':'block'}"/>
                  <SelectSensorParameters v-if="this.currentStep>=1" :sensor-type="$refs.sensorFunctionSelect.sensorFuncSelect" ref="sensorParametersSelect" :style="{display:this.currentStep!=1?'none':'block'}"/>
                  <SelectSensorWorkingEnvironment  v-if="this.currentStep>=2" ref="sensorWorkingEnvSelect" :style="{display:this.currentStep!=2?'none':'block'}"/>
                  <!--                <SelectGatewayParameters  v-if="this.currentStep>=3" :style="{display:this.currentStep!=3?'none':'block'}"/>-->
                  <SelectGatewayWorkingEnvironment  v-if="this.currentStep>=3" ref="gatewayWorkingEnvSelect" :style="{display:this.currentStep!=3?'none':'block'}"/>
                  <Button v-if="this.currentStep>0&&this.currentStep<=3" :style="{position:'absolute', bottom: '5px' ,left: '5px'}" @click="previousStep">上一步</Button>
                  <Button v-if="this.currentStep<=2" type="primary" :disabled="!ifCanDoNext" :style="{position:'absolute', bottom: '5px',left: '100px'}" @click="nextStep">下一步</Button>
                  <Button v-if="this.currentStep==3"  type="primary"  :style="{position:'absolute', bottom: '5px',left: '100px'}" @click="post">完成</Button>
                </div>
              </Layout>
            </Layout>
          </div>
          <div :style="{display:this.mainpageNav==4?'block':'none'}">
            <UsrCenter/>
          </div>
        </div>
      </Layout>
      <Footer class="layout-footer-center">2020-2021 &copy; ANANASAFT</Footer>
    </Layout>
  </div>
</template>

<script>
    var _this = {}
    // import Index from "../IndexPage/index";
    import GatewayCenter from "../GatewayCenter/gatewayManagement";
    import SensorCenter from "../SensorCenter/sensorManagement";
    import UsrCenter from "../UsrCenter/UsrManagement";
    import MyStepNav from "../StepNav";
    import SelectSensorFunction from "../Steps/SelectSensorFunction";
    import SelectSensorParameters from "../Steps/SelectSensorParameters";
    import SelectSensorWorkingEnvironment from "../Steps/SelectSensorWorkingEnvironment";
    import SelectGatewayWorkingEnvironment from "../Steps/SelectGatewayWorkingEnvironment";

    import {getUsrCookie} from "../../utils/cookie";

    export default {
        name: 'UsrHome',
        components: {
            GatewayCenter,
            SensorCenter,
            UsrCenter,
            MyStepNav,
            SelectSensorFunction,
            SelectSensorParameters,
            SelectSensorWorkingEnvironment,
            SelectGatewayWorkingEnvironment,
            // SelectGatewayParameters
        },
        data(){
            return {
                currentStep: 0,
                ifCanDoNext:false,
                mainpageNav:"1",
                usr_name:"",
                sensorParameters: {
                    type:Object,
                    default(){
                        return null;
                    }
                },
                sensorWorkingEnv:{
                    type:Object,
                    default(){
                        return null;
                    }
                },
                gatewayWorkingEnv:{
                    type:Object,
                    default(){
                        return null;
                    }
                },
            }
        },
        methods: {
            changeMainpage(value){
                if(value!=0)
                  this.mainpageNav = value
            },
            ifEnableNextStep(){
                switch (this.currentStep) {
                    case 0:
                        // console.log(this.$refs.step0.currentSelect)
                        if(this.$refs.sensorFunctionSelect.sensorFuncSelect!==-1){
                            this.ifCanDoNext = true;
                        }else {
                            this.ifCanDoNext = false;
                        }
                        break;
                }
            },
            selectSensorFunctionChanged(){
                this.ifEnableNextStep()
            },
            previousStep() {
                if(this.currentStep>0) {
                    this.currentStep -= 1
                }
            },
            nextStep() {
                if(this.currentStep<5) {
                    this.currentStep += 1
                }
            },
            setSensorFunc(){
                this.$set(this.sensorParameters,'sensorFunc',this.$refs.sensorFunctionSelect.sensorFuncSelect)
            },
            setSensorParameters(){
                var sensorType = this.$refs.sensorFunctionSelect.sensorFuncSelect
                switch (sensorType) {
                    case 0:
                        this.$set(this.sensorParameters,'InterfaceProtocolSelect',this.$refs.sensorParametersSelect.$refs.sensor0.sensorProtocolSelectList)
                        this.$set(this.sensorParameters,'transmittingPorts',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.transmittingPorts))
                        this.$set(this.sensorParameters,'receivingPorts',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.receivingPorts))
                        this.$set(this.sensorParameters,'frequencyLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.frequencyLow))
                        this.$set(this.sensorParameters,'frequencyHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.frequencyHigh))
                        this.$set(this.sensorParameters,'powerLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.powerLow))
                        this.$set(this.sensorParameters,'powerHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.powerHigh))
                        this.$set(this.sensorParameters,'noiseLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.noiseLow))
                        this.$set(this.sensorParameters,'noiseHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.noiseHigh))
                        break
                }
            },
            setSensorWorkingEnv(){
                this.$set(this.sensorWorkingEnv,'currentLow',parseFloat(this.$refs.sensorWorkingEnvSelect.currentLow))
                this.$set(this.sensorWorkingEnv,'currentHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.currentHigh))
                this.$set(this.sensorWorkingEnv,'temperatureLow',parseFloat(this.$refs.sensorWorkingEnvSelect.temperatureLow))
                this.$set(this.sensorWorkingEnv,'temperatureHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.temperatureHigh))
                this.$set(this.sensorWorkingEnv,'voltageLow',parseFloat(this.$refs.sensorWorkingEnvSelect.voltageLow))
                this.$set(this.sensorWorkingEnv,'voltageHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.voltageHigh))
                this.$set(this.sensorWorkingEnv,'frequencyLow',parseFloat(this.$refs.sensorWorkingEnvSelect.frequencyLow))
                this.$set(this.sensorWorkingEnv,'frequencyHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.frequencyHigh))
                this.$set(this.sensorWorkingEnv,'industrialGrade',this.$refs.sensorWorkingEnvSelect.industrialGradeSelect)
            },
            // setGatewayParameters(){
            //
            // },
            setGatewayWorkingEnv(){
                this.$set(this.gatewayWorkingEnv,'currentLow',parseFloat(this.$refs.gatewayWorkingEnvSelect.currentLow))
                this.$set(this.gatewayWorkingEnv,'currentHigh',parseFloat(this.$refs.gatewayWorkingEnvSelect.currentHigh))
                this.$set(this.gatewayWorkingEnv,'temperatureLow',parseFloat(this.$refs.gatewayWorkingEnvSelect.temperatureLow))
                this.$set(this.gatewayWorkingEnv,'temperatureHigh',parseFloat(this.$refs.gatewayWorkingEnvSelect.temperatureHigh))
                this.$set(this.gatewayWorkingEnv,'industrialGrade',this.$refs.gatewayWorkingEnvSelect.industrialGradeSelect)
            },
            post() {
                this.setSensorFunc()
                this.setSensorParameters()
                this.setSensorWorkingEnv()
                // this.setGatewayParameters()
                this.setGatewayWorkingEnv()
                this.$axios({
                    url: 'http://localhost:8081/api/test',
                    method: 'post',
                    //发送格式为json
                    data: JSON.stringify({
                        'test':'123213',
                        'sensorParameters':this.sensorParameters,
                        'gatewayWorkingEnv':this.gatewayWorkingEnv,
                        'sensorWorkingEnv':this.sensorWorkingEnv
                    }),
                    headers:
                        {
                            'Content-Type': 'application/json'
                        }
                }).then(function (return_data) {
                    console.log(return_data)
                    // alert(return_data)
                });
            }
        },
        beforeCreate() {
            getUsrCookie()
            _this = this
        },
        mounted() {
            this.ifEnableNextStep()
            this.usr_name = _this.$store.state.usr_name
        }
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>