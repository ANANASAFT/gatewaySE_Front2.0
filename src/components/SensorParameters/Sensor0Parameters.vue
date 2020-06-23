<template>
    <div>
        <Row>
            接口协议：
            <Select v-model="sensorProtocolSelectList" multiple placeholder="选择协议" style="width:200px" >
                <Option v-for="item in protocolList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Row>
        <br>
        <Row>
            <i-col span="12">
                <div>
                    发射端口数：
                    <Input v-model="transmittingPorts" type="number" placeholder="最低频率" style="width: 100px" />
                </div>
            </i-col>
            <i-col span="12">
                <div>
                    接收端口数：
                    <Input v-model="receivingPorts" type="number" placeholder="最低频率" style="width: 100px" />
                </div>
            </i-col>
        </Row>
        <br>
        <Row>
            <i-col span="12">
            <div>
                覆盖频率范围：
                <Input v-model="frequencyLow" type="number" placeholder="最低频率" style="width: 100px" />
                GHz~
                <Input v-model="frequencyHigh" type="number" placeholder="最高频率" style="width: 100px" />
                GHz
            </div>
            </i-col>
            <i-col span="12">
                <div>
                    发射功率：
                    <Input v-model="powerLow" type="number" placeholder="最低功率" style="width: 100px" />
                    dBm~
                    <Input v-model="powerHigh" type="number" placeholder="最高功率" style="width: 100px" />
                    dBm
                </div>
            </i-col>
        </Row>
        <br>
        <Row>
            接收噪声系数：
            <Input v-model="noiseLow" type="number" placeholder="最低系数" style="width: 100px" />
            dBm~
            <Input v-model="noiseHigh" type="number" placeholder="最高系数" style="width: 100px" />
            dBm
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Sensor0Parameters",
        data () {
            return {
                protocolList: [
                    {value: 0, label: 'Adapter/Slave'}, {value: 1, label: 'CAN'},{value: 2, label: 'CAN-FD'},{value: 3, label: 'CANopen'},
                    {value: 4, label: 'CC-Link'}, {value: 5, label: 'ControlNet'},{value: 6, label: 'DeviceNet'},{value: 7, label: 'DeviceNet'},
                    {value: 8, label: 'Digital I/O'}, {value: 9, label: 'EtherCAT'},{value: 10, label: 'EtherNet/IP'},{value: 11, label: 'FIPIO'},
                    {value: 12, label: 'I2C'}, {value: 13, label: 'IE Field'},{value: 14, label: 'IOLINK'},{value: 15, label: 'LonWorks'},
                    {value: 16, label: 'LVDS'}, {value: 17, label: 'M-Bus'},{value: 18, label: 'MIPI-CSI2'},{value: 19, label: 'Modbus Plus'},
                    {value: 20, label: 'Modbus RTU'}, {value: 21, label: 'Modbus TCP '},{value: 22, label: 'POWERLINK'},{value: 23, label: 'PROFIBUS'},
                    {value: 24, label: 'PROFINET IRT'}, {value: 25, label: 'QSPI'},{value: 26, label: 'RS-232'},{value: 27, label: 'RS-422'},
                    {value: 28, label: 'RS-485'}, {value: 29, label: 'SMBus'},{value: 30, label: 'SPI'},{value: 31, label: 'UART'},],
                sensorProtocolSelectList: [],
                transmittingPorts:'',
                receivingPorts:'',
                frequencyLow:'',
                frequencyHigh:'',
                powerLow:'',
                powerHigh:'',
                noiseLow:'',
                noiseHigh:'',
            }
        },
        computed:{

        },
        props: {

        },
        methods: {
            
        }
    }

</script>

<style scoped>

</style>