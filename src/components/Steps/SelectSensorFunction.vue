<template>
  <Select v-model="currentSelect" @on-change="getSelect" placeholder="选择需要的传感器功能" style="width:200px" >
    <Option v-for="item in funcList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>

<script>
    export default {
        name: "SelectSensorFunction",
        data () {
            return {
                funcList: [
                    {
                        value: 0,
                        label: '毫米波传感器'
                    },
                    {
                        value: 1,
                        label: '环境光传感器'
                    },
                    {
                        value: 2,
                        label: '数字温度传感器'
                    },
                    {
                        value: 3,
                        label: '温湿度传感器'
                    },
                    {
                        value: 4,
                        label: '电感式接近开关'
                    },
                    {
                        value: 5,
                        label: '运动控制传感器'
                    },
                    {
                        value: 6,
                        label: '倾角传感器'
                    },
                    {
                        value: 7,
                        label: '流量传感器'
                    },
                    {
                        value: 8,
                        label: '液位传感器'
                    },
                    {
                        value: 9,
                        label: '压力传感器'
                    },
                ],
                currentSelect: -1
            }
        },
        computed:{

        },
        props: {

        },
        methods: {
            getSelect(){
                this.$emit('on-change');    //产生回调事件
            }
        }
    }
</script>

<style scoped>

</style>