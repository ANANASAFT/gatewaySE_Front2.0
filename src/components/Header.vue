<!--网页头部导航组件-->
<template>
  <Row>
    <i-col span="16">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1" style="font-size: 25px;color: white" >
          智能传感器组网引擎
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          用户管理
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-stats" />
          统计分析
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-construct" />
          综合设置
        </MenuItem>
      </Menu>
    </i-col>
    <i-col span="8">
      <row>
        <i-col span="14">
          <Input style="width: 240px" icon="ios-search-outline" />
        </i-col>
        <i-col span="6">
          <Button type="text" style="background: white">搜索产品</Button>
        </i-col>
        <i-col span="4">
          <Avatar icon="ios-person" />
        </i-col>
      </row>
    </i-col>
  </Row>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>