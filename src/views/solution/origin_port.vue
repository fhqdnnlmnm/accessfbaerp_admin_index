<style lang="less">
@import "../../styles/common.less";
@import "./components/table.less";
</style>

<template>
    <div>
            <Card>
                <p slot="title">
                <Icon type="help-buoy"></Icon>
                        目的港管理
                </p>
                <Row>
                    <Input v-model="searchConName" @on-change="handleSearch" icon="search" placeholder="请输入国家" style="width: 200px" />
                    <Input v-model="searchConTel" @on-change="handleSearch" icon="search" placeholder="请输入港口搜搜..." style="width: 200px" />
                </Row>
                <Row class="margin-top-10 searchable-table-con1">
                        <Table :columns="columns" :data="data"></Table>
                </Row>
             </Card>
    </div>
</template>

<script>
import { fetchList } from "@/api/business/originPort";
export default {
  name: "origin_port",
  data() {
    return {
        listquery:"",
        searchConName: "",
        searchConTel: "",
        columns: [],
        data: [],
        initTable: []
    };
  },
  methods: {
    init() {
      fetchList(this.listquery).then(response => {
        this.data = this.initTable = response.data;
        this.columns=[
            {
                key:'id',
                title:'编号',
            },
            {
                key:'country',
                title:'国家',
            },
            {  
                key:'province',
                title:'省份'
            },
            {
                key:'city',
                title:'城市'
            },
            {
                key:'port',
                title:'港口',
            },
            {
                key:'wareaddress',
                title:'仓库地址'
            },
            {
                key:'type',
                title:'仓库类型'
            },
            {
                key:''
            }
        ];
        })
    },
    search(data, argumentObj) {
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
    handleSearch() {
      this.data = this.initTable;
      this.data = this.search(this.data, {
        contry: this.searchConName,
        port: this.searchConTel
      });
    },
    handleCancel3() {
      this.data3 = this.initTable3;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
