<template>
    <div>
        <p style=" font-size: 15px;">参数一量程范围：</p>
        <Select  @on-change="getSelect" placeholder="选择量程范围" style="width:200px " >
            <Option>分辨率：1~10000</Option>
            <Option>开关点SP [Hz]：-166.6~166.7</Option>
            <Option>复原点rP [Hz]：-166.7~166.6</Option>
            <Option>计数器预设点： 1~9999</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor6Parameters"
    }
</script>

<style scoped>

</style>