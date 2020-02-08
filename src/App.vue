<template>
  <div class="layout" id="app">
    <Layout>
      <Header>
        <MyHeader/>
      </Header>
      <Layout :style="{padding: '0 10px'}">
        <MyBreadcrumb/>
        <Content :style="{padding: '24px', minHeight: '700px',maxHeight:'800px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <my-steps/>
            </Sider>
              <Layout :style="{padding: '24px 24px'}">
                  <Content :style="{padding: '24px', minHeight: '700px', background: '#fff'}">
                      Content
                  </Content>
              </Layout>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2019-2020 &copy; ANANASAFT</Footer>
    </Layout>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from './components/Header.vue'
import MySteps from './components/Steps'
export default {
  name: 'App',
  components: {
    MyHeader,
    MySteps
  }
}
</script>

<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
