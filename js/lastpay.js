/**
 * Created by Administrator on 2018/5/2 0002.
 */
$(function () {
    $("#sure01").click(function () {

        $("#incre").attr("disabled",'disabled');
        $("#decre").attr("disabled",'disabled');
        cho = 1;
        prebe();

    });
/*
    $("#sure02").click(function () {
        ff = $("#last_price").html();
        console.log(ff);
        $("#incre").attr("disabled",'disabled');
        $("#decre").attr("disabled",'disabled');
        cho = 2;
        prebe();
    });*/
    var ff = 0;

    var ss = 0;

    var cho = 1;

    var case02 = 6;

    var prebe = function () {

        setTimeout(de,3000);

    };

    var de = function () {

       ss = $("#last_price").html();
        console.log(ss);
        $("#incre").removeAttr("disabled");
        $("#decre").removeAttr("disabled");

        if(ss>ff&&cho == 1){
            alert("加价成功！");
            case02 = 0;
            console.log(case02);
        }else if(ss<ff&&cho == 1){
            alert("加价失败!");
            case02 = 1;
            console.log(case02);
        }else if(ss<ff&&cho ==2){
            alert("砍价成功！");
            case02 = 2;
            console.log(case02);
        }else if(ss>ff&&cho ==2){
            alert("砍价失败！");
            case02 = 3;
            console.log(case02);
        }else{
            alert("不变");

        }
    };
    var proNo = $.query.get("proNo");

    //if logined
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");
    var addressDe=localStorage.getItem("addressDe");
    console.log(addressDe,addressDe==null);
    if (name!=""&&name!=undefined)
    {
        $(".username").html(name);
        $(".aftlg").css("display","none");
        $(".userct").css("display","inline");

    }else{
        $(".aftlg").css("display","inline");
        $(".userct").css("display","none");

    };


    $.ajax({
        url:'http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard',
        dataType:'json',
        data:{
            "uname":name
        },
        type:'post',
        success:function(result){
            console.log(result);
            canuse(result);







        }


    });


    function canuse(result) {
        $(".integral-total").append(
            "<div class='fz16'>可用余额</div>"+
            "<b class='num'>"+result.leftMoney+"</b>"
        )
    }
  /*  var oper = 0;
    $("#incre").click(function () {
        oper = 1;
        $(".innerht").html("您确定要加价吗？");
    });
    $("#decre").click(function () {
        oper = 2;
        $(".innerht").html("您确定要砍价吗？");
    });

    $("#sure01").click(function () {

    })
*/



    /* var dynum = function () {
         console.log($("#last_price").html())
     }*/
})