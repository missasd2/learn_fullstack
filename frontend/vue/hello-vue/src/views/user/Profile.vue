<template>
<!-- 所有地元素，必须不能直接在根节点下-->
   <div>
     <h1>个人信息</h1>
     {{ $route.params.id}}
     {{id}}
   </div>
</template>

<script>
    export default {
      props: ['id'],
        name: "UserProfile",
      beforeRouteEnter: (to, from, next)=> {
        console.log("进入路由之前"); // 进入页面之前加载数据

        next(vm => {
          vm.getData(); // 进入路由之前执行方法
        });
      },
      beforeRouteLeave: (to, from, next)=> {
        console.log("进入路由之后");
        next();

      },
      methods: {
        getData: function () {
          this.axios({
              method: "GET",
              url: "http://localhost:8083/static/mock/data.json",
          }).then(function (response) {
            console.log(response);
          });
        },
      },

    }
</script>

<style scoped>

</style>
