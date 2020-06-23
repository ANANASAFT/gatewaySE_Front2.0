<template>
    <div>
        <p style=" font-size: 15px;">量程范围：</p>
        <Select  @on-change="getSelect" placeholder="选择量程范围" style="width:200px " >
            <Option> -0.73-14.5 psi</Option>
        </Select>
        <p style=" font-size: 15px;">精度：</p>
        <Select  @on-change="getSelect" placeholder="选择重复精度" style="width:200px" >
            <Option> ± 0,1</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        name: "Sensor9Parameters"
    }
</script>

<style scoped>

</style>