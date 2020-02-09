<template>
    <Steps class="steps" :current=this.currentStep direction="vertical">
        <Step :title="currentStep>0?this.stepTitles[0]:this.stepTitles[1]" content="传感器功能"></Step>
        <Step :title="currentStep>1?this.stepTitles[0]:
                        currentStep<1?this.stepTitles[2]:this.stepTitles[1]"
              content="传感器参数"></Step>
        <Step :title="currentStep>2?this.stepTitles[0]:
                        currentStep<2?this.stepTitles[2]:this.stepTitles[1]" 
              content="传感器工作环境"></Step>
        <Step :title="currentStep>3?this.stepTitles[0]:
                        currentStep<3?this.stepTitles[2]:this.stepTitles[1]" 
              content="网关参数"></Step>
        <Step :title="currentStep>4?this.stepTitles[0]:
                        currentStep<4?this.stepTitles[2]:this.stepTitles[1]" 
              content="网关工作环境"></Step>
        <Step :title="currentStep>5?this.stepTitles[0]:
                        currentStep<5?this.stepTitles[2]:this.stepTitles[1]" 
              content="方案选择"></Step>
    </Steps>
</template>
<script>
    export default {
        name:"MySteps",
        data(){
            return {
                stepTitles: ["已完成","进行中","将进行"],
            }
        },
        props: {
            currentStep: {
                type: Number,
                default() {
                    return 0;
                }
            }
        }
    }
</script>

<style scoped>
    .steps{
        font-size: 30px;
    }
</style>