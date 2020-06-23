<template>
  <div class="layout" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import MyHeader from './components/Header.vue'
// import MyStepNav from './components/StepNav'
// import SelectSensorFunction from "./components/Steps/SelectSensorFunction";
// import SelectSensorParameters from "./components/Steps/SelectSensorParameters";
// import SelectSensorWorkingEnvironment from "./components/Steps/SelectSensorWorkingEnvironment";
// import SelectGatewayWorkingEnvironment from "./components/Steps/SelectGatewayWorkingEnvironment";
// import Index from "./components/IndexPage/index"
// import GatewayCenter from "./components/GatewayCenter/gatewayManagement"
// import SensorCenter from "./components/SensorCenter/sensorManagement"
// import SelectGatewayParameters from "./components/Steps/SelectGatewayParameters";
export default {
  name: 'App',
  // components: {
  //   Index,
  //   GatewayCenter,
  //   SensorCenter,
  //   MyStepNav,
  //   SelectSensorFunction,
  //   SelectSensorParameters,
  //   SelectSensorWorkingEnvironment,
  //   SelectGatewayWorkingEnvironment,
  //   SelectGatewayParameters
  // },
  // data(){
  //   return {
  //     currentStep: 0,
  //     ifCanDoNext:false,
  //     mainpageNav:"0",
  //     sensorParameters: {
  //       type:Object,
  //       default(){
  //           return null;
  //       }
  //     },
  //     sensorWorkingEnv:{
  //         type:Object,
  //         default(){
  //             return null;
  //         }
  //     },
  //     gatewayWorkingEnv:{
  //         type:Object,
  //         default(){
  //             return null;
  //         }
  //     },
  //   }
  // },
  // methods: {
  //   changeMainpage(value){
  //     this.mainpageNav = value
  //   },
  //   ifEnableNextStep(){
  //     switch (this.currentStep) {
  //       case 0:
  //         // console.log(this.$refs.step0.currentSelect)
  //         if(this.$refs.sensorFunctionSelect.sensorFuncSelect!==-1){
  //           this.ifCanDoNext = true;
  //         }else {
  //           this.ifCanDoNext = false;
  //         }
  //         break;
  //     }
  //   },
  //   selectSensorFunctionChanged(){
  //     this.ifEnableNextStep()
  //   },
  //   previousStep() {
  //     if(this.currentStep>0) {
  //       this.currentStep -= 1
  //     }
  //   },
  //   nextStep() {
  //     if(this.currentStep<5) {
  //       this.currentStep += 1
  //     }
  //   },
  //   setSensorFunc(){
  //       this.$set(this.sensorParameters,'sensorFunc',this.$refs.sensorFunctionSelect.sensorFuncSelect)
  //   },
  //   setSensorParameters(){
  //     var sensorType = this.$refs.sensorFunctionSelect.sensorFuncSelect
  //     switch (sensorType) {
  //       case 0:
  //         this.$set(this.sensorParameters,'InterfaceProtocolSelect',this.$refs.sensorParametersSelect.$refs.sensor0.sensorProtocolSelectList)
  //         this.$set(this.sensorParameters,'transmittingPorts',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.transmittingPorts))
  //         this.$set(this.sensorParameters,'receivingPorts',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.receivingPorts))
  //         this.$set(this.sensorParameters,'frequencyLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.frequencyLow))
  //         this.$set(this.sensorParameters,'frequencyHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.frequencyHigh))
  //         this.$set(this.sensorParameters,'powerLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.powerLow))
  //         this.$set(this.sensorParameters,'powerHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.powerHigh))
  //         this.$set(this.sensorParameters,'noiseLow',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.noiseLow))
  //         this.$set(this.sensorParameters,'noiseHigh',parseFloat(this.$refs.sensorParametersSelect.$refs.sensor0.noiseHigh))
  //         break
  //     }
  //   },
  //   setSensorWorkingEnv(){
  //     this.$set(this.sensorWorkingEnv,'currentLow',parseFloat(this.$refs.sensorWorkingEnvSelect.currentLow))
  //     this.$set(this.sensorWorkingEnv,'currentHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.currentHigh))
  //     this.$set(this.sensorWorkingEnv,'temperatureLow',parseFloat(this.$refs.sensorWorkingEnvSelect.temperatureLow))
  //     this.$set(this.sensorWorkingEnv,'temperatureHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.temperatureHigh))
  //     this.$set(this.sensorWorkingEnv,'voltageLow',parseFloat(this.$refs.sensorWorkingEnvSelect.voltageLow))
  //     this.$set(this.sensorWorkingEnv,'voltageHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.voltageHigh))
  //     this.$set(this.sensorWorkingEnv,'frequencyLow',parseFloat(this.$refs.sensorWorkingEnvSelect.frequencyLow))
  //     this.$set(this.sensorWorkingEnv,'frequencyHigh',parseFloat(this.$refs.sensorWorkingEnvSelect.frequencyHigh))
  //     this.$set(this.sensorWorkingEnv,'industrialGrade',this.$refs.sensorWorkingEnvSelect.industrialGradeSelect)
  //   },
  //   // setGatewayParameters(){
  //   //
  //   // },
  //   setGatewayWorkingEnv(){
  //     this.$set(this.gatewayWorkingEnv,'currentLow',parseFloat(this.$refs.gatewayWorkingEnvSelect.currentLow))
  //     this.$set(this.gatewayWorkingEnv,'currentHigh',parseFloat(this.$refs.gatewayWorkingEnvSelect.currentHigh))
  //     this.$set(this.gatewayWorkingEnv,'temperatureLow',parseFloat(this.$refs.gatewayWorkingEnvSelect.temperatureLow))
  //     this.$set(this.gatewayWorkingEnv,'temperatureHigh',parseFloat(this.$refs.gatewayWorkingEnvSelect.temperatureHigh))
  //     this.$set(this.gatewayWorkingEnv,'industrialGrade',this.$refs.gatewayWorkingEnvSelect.industrialGradeSelect)
  //   },
  //   post() {
  //     this.setSensorFunc()
  //     this.setSensorParameters()
  //     this.setSensorWorkingEnv()
  //     // this.setGatewayParameters()
  //     this.setGatewayWorkingEnv()
  //     this.$axios({
  //         url: 'http://localhost:8081/api/test',
  //         method: 'post',
  //         //发送格式为json
  //         data: JSON.stringify({
  //             // 'test':'123213',
  //             'sensorParameters':this.sensorParameters,
  //             'gatewayWorkingEnv':this.gatewayWorkingEnv,
  //             'sensorWorkingEnv':this.sensorWorkingEnv
  //         }),
  //         headers:
  //                {
  //                  'Content-Type': 'application/json'
  //                }
  //     }).then(function (return_data) {
  //         console.log(return_data)
  //         // alert(return_data)
  //     });
  //   }
  // },
    methods:{
    },
  mounted() {
    // this.ifEnableNextStep()
    //   this.getCookie();
  }
}
</script>

<style>
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
