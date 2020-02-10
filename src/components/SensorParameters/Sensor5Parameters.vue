<template>
    <div>
        <p style=" font-size: 15px;">参数一量程范围：</p>
        <Select  @on-change="getSelect" placeholder="选择量程范围" style="width:200px " >
            <Option>开关点IO-Link(mm):1.4~7</Option>
            <Option>测量范围IO-Link(mm):0.75~7.5</Option>
        </Select>
        <p style=" font-size: 15px;">参数二精度：</p>
        <Select  @on-change="getSelect" placeholder="选择重复精度" style="width:200px" >
            <Option>IO-Link:±1%</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor5Parameters"
    }
</script>

<style scoped>

</style>