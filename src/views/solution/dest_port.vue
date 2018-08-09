<style lang="less">
    @import '../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div>
       
            <Card>
                <p slot="title">
                <Icon type="help-buoy"></Icon>
                        起运港管理
                </p>
                <Row>
                    <Input v-model="searchConContry" @on-change="handleSearch" icon="search" placeholder="请输入国家" style="width: 200px" />
                    <Input v-model="searchPortCode" @on-change="handleSearch" icon="search" placeholder="请输入港口搜搜..." style="width: 200px" />
                </Row>
                <div class="edittable-table-height-con margin-top-10">
                        <can-edit-table refs="table" v-model="data" :columns-list="columns"></can-edit-table>
                </div>
             </Card>
    </div>
</template>

<script>
import {fetchList} from '@/api/business/destPort';
import canEditTable from './components/canEditTable.vue';

export default {
    name: 'dest_port',
    components:{
        canEditTable
    },
    data () {
        return {
            listquery:"",
            searchConContry: "",
            searchPortCode: "",
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
                // width:80,
                align:'center'
            },
            {
                key:'country',
                title:'国家',
                //  width:120,
                align:'center'
            },
            {  
                key:'port',
                title:'港口',
                //  width:120,
                align:'center',
                editable:true
            },
            {
                key:'port_code',
                title:'港口代码',
                //  width:80,
                align:'center',
                editable:true
            },
            {
                key:'trade',
                title:'航线',
                //  width:80,
                align:'center',
                editable:true
            },
            {
                key:'handle',
                title:'操作',
                 width:190,
                align:'center',
                handle:['edit','delete']
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
        contry: this.searchConContry,
        port_code: this.searchPortCode
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
