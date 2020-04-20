/**
 * Created by Administrator on 2018/4/25 0025.
 */
$(function () {
    $("#sureyou").click(function () {
        console.log(56656)
    });

    $('#num01').bind('input propertychange', function() {
        console.log($(this).val());
        console.log($('#Stock').html());
        if($(this).val()>$('#Stock').html()){
            $("#buynow").attr("disabled",'disabled');
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"您输入的数量超过库存上限"
            });
        }else{
            $("#buynow").removeAttr("disabled");
        };
        if($("#single").html()*$(this).val()>$('#moneydollar').html()){
            $("#buynow").attr("disabled",'disabled');
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"积分不足！"
            });
        }else{
            $("#buynow").removeAttr("disabled");
        };


    });

    $(".add").click(function () {
        if($(this).val()>$('#Stock').html()){
            $("#buynow").attr("disabled",'disabled');
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"您输入的数量超过库存上限"
            });
        }else{
            $("#buynow").removeAttr("disabled");
        };
        if($("#single").html()*$(this).val()>$('#moneydollar').html()){
            $("#buynow").attr("disabled",'disabled');
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"积分不足！"
            });
        }else{
            $("#buynow").removeAttr("disabled");
        };
    })

    $("#cm a").click(function () {
        console.log(56);
        $(this).addClass("on").parent().siblings().find("a").removeClass("on");
        console.log($(this).find("span").html());
        var size =$(this).find("span").html();

    });

    $("#ys a").click(function () {
        console.log(56);
        $(this).addClass("on").parent().siblings().find("a").removeClass("on")
    });
    console.log($("#single").html()*2);




    var proNo = $.query.get("proNo");




    //if logined
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");
    var addressDe=localStorage.getItem("addressDe");
    console.log(addressDe,addressDe==null);


    $("#buynow").click(function () {
        if(addressDe==null){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"请先选择地址！"
            });
            setTimeout(function () {
                window.location.href = "udai_address.html"
            },2000)
        }else{

        }


    });

    if (name!=""&&name!=undefined)
    {
        $(".username").html(name);
        $(".aftlg").css("display","none");
        $(".userct").css("display","inline");

    }else{
        $(".aftlg").css("display","inline");
        $(".userct").css("display","none");

    }



    console.log(proNo,name,typeof name);

    var no = 0;
    var proNote = 0;
    var outPri = 0;
    var proPic = 0;


    console.log(name);

    //展示余额
    $.ajax({
        type:'post',
        url:'http://192.168.18.132:8080/Shop/MobilePromotionProduct?status=productDetail',
        dataType:'json',
        data:{
            "proNo":proNo,
            "uname":name
        },

        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(result){
            console.log(result);

            addbox06(result)



        },
        error:function () {
            console.log("error");
        }


    });


    //积分商品详情
    $.ajax({
        type:'post',
        url:'http://192.168.18.132:8080/Shop/IntegralFrontProductServlet?status=findProductDetail',
        dataType:'json',
        data:{
            "proNo":proNo,
            "uname":name
        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(result){
            console.log(result,777);

            addBox(result.iProDetail)



        },
        error:function () {
            console.log("error");
        }


    });







    function addbox06(result) {

      /*  $("#colorhp").append(
            "<li><a href='javascript:;' role='button' data-value='"+result.singleProduct.rewardsMoney+"' aria-disabled='true'>"+
            "<span>"+result.singleProduct.rewardsMoney+"</span>"+
            "</a></li>"
        );*/
        $(".item-action__basket").append(
            "账户余额：<span id='moneydollar'>"+result.leftMoney+"</span>"
        )
    }

    function addBox(result) {
        $(".proname").text(result.pro_name);
        $('.thumb-list .wrapper').append(
            "<li class='item'><img class='cover' src='../upload/"+result.picture+"' alt='商品预览图'></li>"
        );


        $(".kchp").text(result.pro_num);
      /*  $("#pri").append(
            "促销价：<span class='price'>"+result.singleProduct.pro_outPrice+"</span>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;商品活动奖后价：<span class='price'>"+result.singleProduct.pro_outPrice_bonus+"</span>"
        );*/

        $("#pri").append(
            "消耗积分：<span class='price'>"+result.pro_outPrice+"</span>"

        );
        $('.item-detail__info').append(
            "<div class='record'>商品名称："+result.pro_name+"</div>"+
            "<div class='record'>商品描述："+result.pro_note+"</div>"+
            "<div class='record'>商品积分价："+result.pro_outPrice+"</div>"+
            "<div class='record'>商品库存："+result.pro_num+"</div>"
        );

        $("#tit").append(
            "<div class='name ep2'>"+result.pro_name+"</div>"+
            "<div class='sale cr'>"+result.pro_note +"</div>"
        );




    }

    $(".sureyou").click(function () {
        var count = $("#num01").val();
        $.ajax({
            type:'post',
            url:'http://192.168.18.117:9001/Shop/MobilePromotionProduct?status=productOrder',
            dataType:'json',
            data:{
                "proNo":proNo,
                "uname":name,
                "count":count
            },

            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            success:function(result){
                console.log(result);





            },
            error:function () {
                console.log("error");
            }


        });
    })


    //moneydollar余额
})