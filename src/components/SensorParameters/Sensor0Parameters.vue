<template>
    <div>
        <p style=" font-size: 15px;">参数一接口协议：</p>
        <Select v-model="GatewayParametersSelectList" multiple @on-change="getSelect" placeholder="选择协议" style="width:200px" >
            <Option v-for="item in GatewayParametersList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <p style=" font-size: 15px;">参数二发射端口：</p>
        <Select  @on-change="getSelect" placeholder="选择发射端口" style="width:200px " >
            <Option>2</Option>
            <Option>3</Option>
        </Select>
        <p style=" font-size: 15px;">参数三接收端口：</p>
        <Select  @on-change="getSelect" placeholder="选择接收端口" style="width:200px" >
            <Option>4</Option>
        </Select>
        <p style=" font-size: 15px;">参数四覆盖频率范围：</p>
        <Select  @on-change="getSelect" placeholder="选择频率范围" style="width:200px" >
            <Option>60-64Ghz</Option>
            <Option>76-81Ghz</Option>
        </Select>
        <p style=" font-size: 15px;">参数五发射频率：</p>
        <Select  @on-change="getSelect" placeholder="选择发射频率" style="width:200px" >
            <Option>10dBm</Option>
            <Option>12dBm</Option>
            <Option>12.5dBm</Option>
        </Select>
        <p style=" font-size: 15px;">参数六接收噪声系数：</p>
        <Select  @on-change="getSelect" placeholder="选择噪声系数" style="width:200px" >
            <Option>14dBm</Option>
            <Option>15dBm</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor0Parameters",
        data () {
            return {
                GatewayParametersList: [
                    {
                        value: 0,
                        label: 'Adapter/Slave'
                    },
                    {
                        value: 1,
                        label: 'CAN '
                    },
                    {
                        value: 2,
                        label: 'CAN-FD'
                    },
                    {
                        value: 3,
                        label: 'CANopen'
                    },
                    {
                        value: 4,
                        label: 'CC-Link '
                    },
                    {
                        value: 5,
                        label: 'ControlNet'
                    },
                    {
                        value: 6,
                        label: 'DeviceNet'
                    },
                    {
                        value: 7,
                        label: 'DeviceNet'
                    },
                    {
                        value: 8,
                        label: 'Digital I/O'
                    },
                    {
                        value: 9,
                        label: 'EtherCAT'
                    },
                    {
                        value: 10,
                        label: 'EtherNet/IP'
                    },
                    {
                        value: 11,
                        label: 'FIPIO '
                    },
                    {
                        value: 12,
                        label: 'I2C'
                    },
                    {
                        value: 13,
                        label: 'IE Field'
                    },
                    {
                        value: 14,
                        label: 'IOLINK '
                    },
                    {
                        value: 15,
                        label: 'LonWorks'
                    },
                    {
                        value: 16,
                        label: 'LVDS'
                    },
                    {
                        value: 17,
                        label: 'M-Bus'
                    },
                    {
                        value: 18,
                        label: 'MIPI-CSI2'
                    },
                    {
                        value: 19,
                        label: 'Modbus Plus'
                    },
                    {
                        value: 20,
                        label: 'Modbus RTU'
                    },
                    {
                        value: 21,
                        label: 'Modbus TCP '
                    },
                    {
                        value: 22,
                        label: 'POWERLINK'
                    },
                    {
                        value: 23,
                        label: 'PROFIBUS'
                    },
                    {
                        value: 24,
                        label: 'PROFINET IRT '
                    },
                    {
                        value: 25,
                        label: 'QSPI'
                    },
                    {
                        value: 26,
                        label: 'RS-232'
                    },
                    {
                        value:27,
                        label: 'RS-422'
                    },
                    {
                        value: 28,
                        label: 'RS-485'
                    },
                    {
                        value: 29,
                        label: 'SMBus'
                    },
                    {
                        value: 30,
                        label: 'SPI'
                    },
                    {
                        value: 31,
                        label: 'UART '
                    },
                ],
                GatewayParametersSelectList: []
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