/**
 * Created by Administrator on 2018/5/3 0003.
 */



$(function () {

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

    }



    console.log(proNo,name,typeof name);

    var no = 0;
    var proNote = 0;
    var outPri = 0;
    var proPic = 0;
//商品详情
    $.ajax({
        url:'http://192.168.18.117:9001/Shop/MobileFrontProductServlet?status=proDetail',
        dataType:'json',
        data:{
            "proNo":'1',
            "uname":'15517575607'
        },
        type:'post',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(result){
            console.log(result);



        }


    });
/*
    function addBox(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            /!* console.log(index,obj.brand.brandName,555555555);
             console.log(index,obj.name);*!/
            //console.log(index,obj)
            $("#colorhp").append(
                "<li><a href='javascript:;' role='button' data-value='"+obj.colorName+"' aria-disabled='true'>"+
                "<span>"+obj.colorName+"</span>"+
                "</a></li>"
            );

            $("#colorhp li:first").find('a').addClass("on");

            $("#colorhp li").click(function () {
                $(this).find('a').addClass('on');
                $(this).siblings().find('a').removeClass('on');
            })


        });
    };
    function addBox02(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            $("#sizehp").append(
                "<li><a href='javascript:;' role='button' data-value='"+obj.psName+"' aria-disabled='true'>"+
                "<span>"+obj.psName+"</span>"+
                "</a></li>"
            );

            $("#sizehp li:first").find('a').addClass("on");

            $("#sizehp li").click(function () {
                $(this).find('a').addClass('on');
                $(this).siblings().find('a').removeClass('on');
            })


        });
    };

    function  addBox03(result) {
        console.log(result.inPrice,565656,result.proName);
        proPic = result.picture;
        $("#salep").append(
            "售价：<span class='price'>"+result.outPrice+"<s class='fz16 c9'>"+result.inPrice+"</s></span>"
        );
        $(".namehp02").append(
            "<div class='name ep2 namehp'>"+result.proName+"</div>"+
            "<div class='sale cr'>"+result.proNote+"</div>"
        );

        proNote = result.proNote;
        outPri = result.outPrice;

        //Stock库存 <b id="Stock">1000</b> 件
        $('#kc').append(
            "库存 <b id='Stock'>"+result.proCount+"</b> 件"
        );

        $('.item-detail__info').append(
            "<div class='record'>商品名称："+result.proName+"</div>"+
            "<div class='record'>商品描述："+result.proNote+"</div>"+
            "<div class='record'>商品编号："+result.proNo+"</div>"+
            "<div class='record'>商品库存："+result.proCount+"</div>"
        );
        console.log(result.fi.fiFour);

        var tte = 0;

        $.each(result.fi,function (ind,obj) {
            console.log(obj);
            $('.thumb-list .wrapper').append(
                "<li class='item' data-src="+obj+"><img class='cover' src="+obj+" alt='商品预览图'></li>"
            );

            $('.small-box').append(
                "<img class='cover' src="+obj+" style='width: 360px; height: 360px; display: none;' alt='重回汉唐 旧忆 原创设计日常汉服女款绣花长褙子吊带改良宋裤春夏'>"
            );


        });
        $('.thumb-list .wrapper').find(".item").eq(0).addClass("active");
        $('.small-box').find(".cover").eq(0).css('display','inline');
        $('.thumb-list .wrapper').find(".item").click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            tte =$(this).index()  ;
            console.log(tte);
            $('.small-box').find(".cover").eq(tte).css('display','inline').siblings().css('display','none');
        });


        //$('.thumb-list .wrapper').find(".item").eq(0).addClass("active");
        no = result.proNo;
    };



    $('#num01').bind('input propertychange', function() {
        console.log($(this).val(),parseInt($(this).val()));

        var ipt = parseInt($(this).val());
        var kc = parseInt($('#Stock').html());

        console.log(parseInt($(this).val())>parseInt($('#Stock').html()),$('#Stock').html(),parseInt($('#Stock').html()));
        if(ipt>kc){
            console.log("cgl");
            $(".item-action__buy").attr("disabled",'disabled');
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"您输入的数量超过库存上限"
            });
        }else{
            console.log("nocgl");
            $(".item-action__buy").removeAttr("disabled");

        };



    });

    $('.item-action__buy').click(function () {

        var cl = $("#colorhp li .on span").html();
        var sz = $("#sizehp li .on span").html();
        var num = $("#num01").val();
        var nom = no;
        console.log(cl,sz,num,no,proNo,addressDe,proPic,proNote,outPri);

        if(addressDe!=null&&addressDe!=""){


            $.ajax({
                type: "post",//请求方式
                url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=orderInsert",
                data:{
                    "proNo":proNo,
                    "proCount":num,
                    "proColor":cl,
                    "proSize":sz,
                    "address":addressDe,
                    "proNote":proNote,
                    "proOutPrice":outPri,
                    "proPicture": proPic,
                    "qianqian":'nowBuy',
                    "uname":name
                },
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){
                    //返回的参数就是 action里面所有的有get和set方法的参数
                    console.log(result)

                    //window.location.href = "udai_shopcart_pay.html";
                }
            });
            window.location.href = "udai_shopcart_pay.html";

        }else{
            window.location.href = "udai_address_edit.html";


        }



    });


    $(".item-action__basket").click(function () {
        var cl = $("#colorhp li .on span").html();
        var sz = $("#sizehp li .on span").html();
        var num = $("#num01").val();
        var nom = no;
        console.log(cl,sz,num,no,proNo,addressDe,proPic,proNote,outPri);

        if(addressDe!=null){

            //window.location.href = "udai_shopcart_pay.html";
            $.ajax({
                type: "post",//请求方式
                url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=orderInsert",
                data:{
                    "proNo":proNo,
                    "proCount":num,
                    "proColor":cl,
                    "proSize":sz,
                    "address":addressDe,
                    "proNote":proNote,
                    "proOutPrice":outPri,
                    "proPicture": proPic,
                    "qianqian":'nowBuy',
                    "uname":name
                },
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){
                    //返回的参数就是 action里面所有的有get和set方法的参数
                    console.log(result)

                    //window.location.href = "udai_shopcart_pay.html";
                }
            });

            window.location.href = "udai_shopcart_pay.html";

        }else{
            window.location.href = "udai_address_edit.html";


        }
    })*/





















})