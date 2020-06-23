<template>
  <div>
    <Sensor0Parameters v-if="this.SensorType==0" ref="sensor0"/>
    <Sensor1Parameters v-if="this.SensorType==1" ref="sensor1"/>
    <Sensor2Parameters v-if="this.SensorType==2" ref="sensor2"/>
    <Sensor3Parameters v-if="this.SensorType==3" ref="sensor3"/>
    <Sensor4Parameters v-if="this.SensorType==4" ref="sensor4"/>
    <Sensor5Parameters v-if="this.SensorType==5" ref="sensor5"/>
    <Sensor6Parameters v-if="this.SensorType==6" ref="sensor6"/>
    <Sensor7Parameters v-if="this.SensorType==7" ref="sensor7"/>
    <Sensor8Parameters v-if="this.SensorType==8" ref="sensor8"/>
    <Sensor9Parameters v-if="this.SensorType==9" ref="sensor9"/>
    <Divider v-if="this.SensorType!=-1"/>
  </div>
</template>

<script>
    import Sensor0Parameters from "../SensorParameters/Sensor0Parameters";
    import Sensor1Parameters from "../SensorParameters/Sensor1Parameters";
    import Sensor2Parameters from "../SensorParameters/Sensor2Parameters";
    import Sensor3Parameters from "../SensorParameters/Sensor3Parameters";
    import Sensor4Parameters from "../SensorParameters/Sensor4Parameters";
    import Sensor5Parameters from "../SensorParameters/Sensor5Parameters";
    import Sensor6Parameters from "../SensorParameters/Sensor6Parameters";
    import Sensor7Parameters from "../SensorParameters/Sensor7Parameters";
    import Sensor8Parameters from "../SensorParameters/Sensor8Parameters";
    import Sensor9Parameters from "../SensorParameters/Sensor9Parameters";
    export default {
        name: "SelectSensorParameters",
        components:{
            Sensor0Parameters,
            Sensor1Parameters,
            Sensor2Parameters,
            Sensor3Parameters,
            Sensor4Parameters,
            Sensor5Parameters,
            Sensor6Parameters,
            Sensor7Parameters,
            Sensor8Parameters,
            Sensor9Parameters,
        },
        props:{
            SensorType:Number,
        }
    }
</script>

<style scoped>

</style>