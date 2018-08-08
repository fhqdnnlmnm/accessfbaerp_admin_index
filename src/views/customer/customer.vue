<template>
    <div class="access">
        <p>当前正在进行第 {{ current + 1 }} 步</p>
        <Steps :current="current">
            <Step title="步骤1"></Step>
            <Step title="步骤2"></Step>
            <Step title="步骤3"></Step>
            <Step title="步骤4"></Step>
            <Step title="步骤4"></Step>
            <Step title="步骤4"></Step>
            <Step title="步骤4"></Step>
            <Step title="步骤4"></Step>
        </Steps>
        <Button type="primary" @click="next">下一步</Button>
    </div>
</template>

<script>
export default {
    name: 'customer',
    data () {
        return {
            current:0
           
        };
    },
    computed: {
       
    },
    methods: {
        next(){
            if (this.current == 7) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
        }
    }
};
</script>
