<template>
  <div>
    <Row :gutter="16">
      <i-Col span="6">
        工业等级：
        <Select v-model="industrialGradeSelect" placeholder="选择工业等级" style="width:200px" >
          <Option v-for="item in industrialGradeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </i-Col>
    </Row>
    <br>
    <Row>
<!--      <i-col span="6">-->
<!--        <div>-->
<!--          工作电压：-->
<!--          <Input v-model="voltageLow" type="number" placeholder="最低电压" style="width: 100px" />-->
<!--          V-->
<!--          ~-->
<!--          <Input v-model="voltageHigh" type="number" placeholder="最高电压" style="width: 100px" />-->
<!--          VDC-->
<!--        </div>-->
<!--      </i-col>-->
      <i-col span="6">
        <div>
          工作电流：
          <Input v-model="currentValue" type="number" placeholder="工作电流" style="width: 100px" />
          mA
        </div>
      </i-col>
    </Row>
    <br>
    <Row>
      <i-col span="6">
        <div>
          工作温度：
          <Input v-model="temperatureLow" type="number" placeholder="最低温度" style="width: 100px" />
          °C
          ~
          <Input v-model="temperatureHigh" type="number" placeholder="最高温度" style="width: 100px" />
          °C
        </div>
      </i-col>
<!--      <i-col span="6">-->
<!--        <div>-->
<!--          工作频率：-->
<!--          <Input v-model="frequencyLow" type="number" placeholder="最低频率" style="width: 100px" />-->
<!--          kHZ-->
<!--          ~-->
<!--          <Input v-model="frequencyHigh" type="number" placeholder="最高频率" style="width: 100px" />-->
<!--          kHZ-->
<!--        </div>-->
<!--      </i-col>-->
    </Row>
  </div>
</template>

<script>
    export default {
        name: "SelectGatewayWorkingEnvironment",
        data () {
            return {
                industrialGradeList: [
                    {
                        value: 0,
                        label: '消费级'
                    },
                    {
                        value: 1,
                        label: '工业普通级'
                    },
                    {
                        value: 2,
                        label: '工业严苛级'
                    }
                ],
                industrialGradeSelect: -1,
                // voltageHigh:'',
                // voltageLow:'',
                currentValue:'',
                temperatureLow:'',
                temperatureHigh:'',
                // frequencyLow:'',
                // frequencyHigh:''
            }
        },
    }
</script>

<style scoped>

</style>