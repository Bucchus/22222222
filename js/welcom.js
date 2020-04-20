/**
 * Created by Administrator on 2018/5/16 0016.
 */
var name=localStorage.getItem("name");
var ages=localStorage.getItem("photoh");
var addressDe=localStorage.getItem("addressDe");


http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard
    $.ajax({
        url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard",
        type: 'post',//请求方式
        data:{
            'uname':name

        },
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数

            console.log(result);





        }
    });