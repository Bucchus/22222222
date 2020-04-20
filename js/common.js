/**
 * Created by Administrator on 2018/5/3 0003.
 */
$(function () {
    //if logined
   /* var name=getCookie("name");
    var ages = getCookie("photoh");*/
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");
    var addressDe=localStorage.getItem("addressDe");


    var allnum = 1;
    if (name!=""&&name!=undefined)
    {
        $(".username").html(name);
        $(".aftlg").css("display","none");
        $(".userct").css("display","inline");
        console.log(name,typeof (name))
    }else{
        $(".aftlg").css("display","inline");
        $(".userct").css("display","none");
        console.log("111111")
    };



    //http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard
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



        //展示购物车
    $.ajax({
        type: "post",
        url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=orderNum",
        dataType: "json",
        data: {uname: name},
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (res) {

            var numk = res.number;
            $.ajax({
                type: "post",
                url: "http://192.168.18.132:8080/Shop/IntegralFrontOrderServlet?status=orderNum",
                dataType: "json",
                data: {uname: name},
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (res) {

                    console.log(res);

                    var allnum = parseInt(res.number) + parseInt(numk);
                    console.log(allnum,89898);
                    $(".cartnum").text(allnum);
                    $(".cccnum").append(
                        "<i class='iconfont icon-cart' data-badge='"+allnum+"'></i>"+
                        "<div class='r-tip__box'><span class='r-tip-text'>购物车</span></div>"
                    )


                }
            })



        }
    })












})