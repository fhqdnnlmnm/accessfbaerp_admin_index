<style lang="less">
    @import '../../styles/common.less';
</style>
<template>
    <div >
        <Card>
            <p slot="title">
                <Icon type="help-buoy"></Icon>
                 客户列表
            </p>
            <Row>
                <Input v-model="searchConName2" @on-change="handleSearch2" icon="search" placeholder="请输入姓名搜搜..." style="width: 100px" />
                <Input v-model="searchConTel2" @on-change="handleSearch2" icon="search" placeholder="请输入手机号搜搜..." style="width: 100px" />
                <span class="publish-button"><Button @click="addCustomer">添加客户</Button></span>
            </Row>
            <Row class="margin-top-10 searchable-table-con1">
                <Table :columns="columns1" :data="data2"></Table>
            </Row>
        </Card>
    </div>
</template>

<script>
 import * as table from './data/search';
export default {
    name: 'customer',
    data () {
        return {
            searchConName2:'',
            searchConTel2:'',
            columns1:table.columns1,
            data2:[],
            initTable2:[]
        };
    },
    computed: {
      
    },
    methods: {
        init () {
            this.data1 = this.initTable1 = table.searchTable1;
            this.data2 = this.initTable2 = table.searchTable2;
            this.data3 = this.initTable3 = table.searchTable3;
        },
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearch1 () {
            this.data1 = this.initTable1;
            this.data1 = this.search(this.data1, {name: this.searchConName1});
        },
        handleSearch2 () {
            this.data2 = this.initTable2;
            this.data2 = this.search(this.data2, {name: this.searchConName2, tel: this.searchConTel2});
        },
        handleSearch3 () {
            this.data3 = this.initTable3;
            this.data3 = this.search(this.data3, {name: this.searchConName3});
        },
        handleCancel3 () {
            this.data3 = this.initTable3;
        },
        addCustomer(){
            this.$router.push({
                    name: 'add_customer'
                });
        }
    },
    mounted(){
        this.init();
    }
};
</script>
