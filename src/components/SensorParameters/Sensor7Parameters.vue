<template>
    <div>
        <p style=" font-size: 15px;">参数一量程范围：</p>
        <Select  @on-change="getSelect" placeholder="选择量程范围" style="width:200px " >
            <Option> ± 180°</Option>
        </Select>
        <p style=" font-size: 15px;">参数二精度：</p>
        <Select  @on-change="getSelect" placeholder="选择重复精度" style="width:200px" >
            <Option> ≤ ± 0.5°</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor7Parameters"
    }
</script>

<style scoped>

</style>