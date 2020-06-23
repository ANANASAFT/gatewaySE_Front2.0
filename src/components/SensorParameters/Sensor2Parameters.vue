<template>
    <div>
        <p style=" font-size: 15px;">接口协议：</p>
        <Select v-model="GatewayParametersSelectList" multiple @on-change="getSelect" placeholder="选择协议" style="width:200px" >
            <Option v-for="item in GatewayParametersList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor2Parameters",
        data () {
            return {
                GatewayParametersList: [
                    {value: 0, label: 'Adapter/Slave'}, {value: 1, label: 'CAN'},{value: 2, label: 'CAN-FD'},{value: 3, label: 'CANopen'},
                    {value: 4, label: 'CC-Link'}, {value: 5, label: 'ControlNet'},{value: 6, label: 'DeviceNet'},{value: 7, label: 'DeviceNet'},
                    {value: 8, label: 'Digital I/O'}, {value: 9, label: 'EtherCAT'},{value: 10, label: 'EtherNet/IP'},{value: 11, label: 'FIPIO'},
                    {value: 12, label: 'I2C'}, {value: 13, label: 'IE Field'},{value: 14, label: 'IOLINK'},{value: 15, label: 'LonWorks'},
                    {value: 16, label: 'LVDS'}, {value: 17, label: 'M-Bus'},{value: 18, label: 'MIPI-CSI2'},{value: 19, label: 'Modbus Plus'},
                    {value: 20, label: 'Modbus RTU'}, {value: 21, label: 'Modbus TCP '},{value: 22, label: 'POWERLINK'},{value: 23, label: 'PROFIBUS'},
                    {value: 24, label: 'PROFINET IRT'}, {value: 25, label: 'QSPI'},{value: 26, label: 'RS-232'},{value: 27, label: 'RS-422'},
                    {value: 28, label: 'RS-485'}, {value: 29, label: 'SMBus'},{value: 30, label: 'SPI'},{value: 31, label: 'UART'},],
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