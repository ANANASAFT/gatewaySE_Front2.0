<!--网页头部导航组件-->
<template>
  <Row>
    <i-col span="16">
      <Menu mode="horizontal" theme="dark" :active-name = "mainpageNav" >
        <MenuItem name = "title" style="font-size: 25px;color: white" >
          智能传感器组网引擎
        </MenuItem>
        <MenuItem name = 0 on>
          <Icon type="ios-people" />
          用户管理
        </MenuItem>
        <MenuItem name = 1>
          <Icon type="ios-stats" />
          网关中心
        </MenuItem>
        <MenuItem name = 2>
          <Icon type="ios-stats" />
          传感器中心
        </MenuItem>
        <MenuItem name = 3>
          <Icon type="ios-construct" />
          解决方案中心
        </MenuItem>
      </Menu>
    </i-col>
  </Row>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                mainpageNav: {
                    type: String,
                    default() {
                        return "0";
                    }
                }
              }
          },
        props: {

        }
      }
</script>

<style scoped>

</style>