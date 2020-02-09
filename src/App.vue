<template>
  <div class="layout" id="app">
    <Layout>
      <Header>
        <MyHeader/>
      </Header>
      <Layout :style="{padding: '0 10px'}">
<!--        <MyBreadcrumb/>-->
        <div :style="{padding: '24px', minHeight: '700px',maxHeight:'800px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <my-steps :current-step="currentStep"/>
            </Sider>
              <Layout :style="{padding: '24px 24px'}">
                  <div :style="{padding: '24px', minHeight: '700px', background: '#fff',position:'relative'}">
                      <select-sensor-function :style="{display:this.currentStep!=0?'none':'block'}"/>
                    <Button v-if="this.currentStep>0" style="position:absolute; bottom: 5px;left: 5px" @click="previousStep">上一步</Button>
                    <Button v-if="this.currentStep<5" type="primary" style="position:absolute; bottom: 5px;left: 100px" @click="nextStep">下一步</Button>
                  </div>
              </Layout>
          </Layout>
        </div>
      </Layout>
      <Footer class="layout-footer-center">2019-2020 &copy; ANANASAFT</Footer>
    </Layout>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
import MySteps from './components/Steps'
import SelectSensorFunction from "./components/SelectSensorFunction";
export default {
  name: 'App',
  components: {
    MyHeader,
    MySteps,
    SelectSensorFunction
  },
  data(){
    return {
      currentStep: 0
    }
  },
  methods: {
    previousStep() {
      if(this.currentStep>0) {
        this.currentStep -= 1
      }
    },
    nextStep() {
      if(this.currentStep<5) {
        this.currentStep += 1
      }
    }
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
