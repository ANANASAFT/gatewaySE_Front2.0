<template>
    <Steps class="steps" :current="2" direction="vertical">
        <Step title="已完成" content="传感器功能"></Step>
        <Step title="已完成" content="传感器参数"></Step>
        <Step title="进行中" content="传感器工作环境"></Step>
        <Step title="待进行" content="网关参数"></Step>
        <Step title="待进行" content="网关工作环境"></Step>
        <Step title="待进行" content="方案选择"></Step>
    </Steps>
</template>
<script>
    export default {
        name:"MySteps"
    }
</script>

<style scoped>
    .steps{
        font-size: 30px;
    }
</style>