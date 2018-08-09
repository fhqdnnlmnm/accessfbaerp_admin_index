<template>
    <div>
        <Card>
            <p slot="title">
                <Icon type="paper-airplane"></Icon>
                添加客户
            </p>
            <Form :label-width="80">
                <Card>
                    <p slot="title" style="backcolor:gray">主要信息</p>
                    <Row>
                        <Col span="8" offset="2">
                            <FormItem label="客户名称">
                                <Input v-model="customer.name" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="客户代码">
                                <Input v-model="customer.code" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8" offset="2">
                            <FormItem label="账期">
                                <Select v-model="customer.account_period" style="width:200px" icon="android-list">
                                    <Option v-for="item in account_period" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="支付方式">
                                <Select v-model="customer.pay_type" style="width:200px" icon="android-list">
                                    <Option v-for="item in pay_type" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                     <Row>
                         <Col offset="2">
                         <FormItem label="公司地址">
                                <Input v-model="customer.address" icon="android-list"/>
                        </FormItem>
                        </Col>
                    </Row>
                     <Row>
                        <Col span="8" offset="2">
                            <FormItem label="客户来源">
                                <Input v-model="customer.origin" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="客户行业">
                                <Input v-model="customer.industry" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <p slot="title" style="backcolor:gray">首要联系人信息</p>
                     <Row>
                        <Col span="8" offset="2">
                            <FormItem label="姓名">
                                <Input v-model="customer.origin" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="性别">
                                <Input v-model="customer.industry" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8" offset="2">
                            <FormItem label="部门">
                                <Input v-model="customer.origin" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="岗位">
                                <Input v-model="customer.industry" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8" offset="2">
                            <FormItem label="尊称">
                                <Input v-model="customer.origin" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="邮箱">
                                <Input v-model="customer.industry" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8" offset="2">
                            <FormItem label="QQ">
                                <Input v-model="customer.origin" icon="android-list"/>
                            </FormItem>
                        </Col>
                        <Col span="8" offset="4">
                            <FormItem label="微信">
                                <Input v-model="customer.industry" icon="android-list"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                         <Col offset="2">
                         <FormItem label="地址">
                                <Input v-model="customer.address" icon="android-list"/>
                        </FormItem>
                        </Col>
                    </Row>
                </Card>
                 <Card>
                    <p slot="title" style="backcolor:gray">附加信息</p>
                </Card>
                <!-- <FormItem label="文章标题" :error="articleError">
                    <Input v-model="articleTitle" @on-blur="handleArticletitleBlur" icon="android-list"/>
                </FormItem>
                <div class="article-link-con">
                    <transition name="fixed-link">
                        <FormItem v-show="showLink" label="固定链接">
                        <span>
                            <span key="pathfixedtext">{{ fixedLink }}</span><span key="pathText" v-if="!editLink">{{ articlePath }}</span>
                                <Input key="pathInput" v-model="articlePath" style="display:inline-block;width:auto"  v-else/>
                            </span>
                            <span style="float:right;">
                                <Button :type="editPathButtonType" @click="editArticlePath">{{ editPathButtonText }}</Button>
                            </span>
                        </FormItem>
                    </transition>
                </div> -->
            </Form>
        </Card>
    </div>
</template>

<script>
export default {
  name: "addCustomer",
  data() {
    return {
        account_period:[
            {
                value:0,
                label:"票结"
            },
            {
                value:1,
                label:"月结"
            }
        ],
        pay_type:[
            {
                value:0,
                label:"公账"
            },
            {
                value:1,
                label:"私账"
            }
        ],
        customer:{}
    };
  }
};
</script>
