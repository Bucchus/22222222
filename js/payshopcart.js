/**
 * Created by Administrator on 2018/5/9 0009.
 */
$(function () {
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");
    var addressDe=localStorage.getItem("addressDe");
    var allnum = 1;
    if (name!=""&&name!=undefined)
    {
        $(".username").html(name);
        $(".aftlg").css("display","none");
        $(".userct").css("display","inline");
        console.log(name)
    }else{
        $(".aftlg").css("display","inline");
        $(".userct").css("display","none");
        console.log("111111")
    };



    //展示地址
    $.ajax({
        url: "http://192.168.18.132:8080/Shop/MobileMemberServlet?status=AddrePre",
        type: 'post',//请求方式
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data:{
            'uname':name
        },

        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数

            console.log(result.list,111);
            addBox(result.list);



        }
    });

    //展示个人信息
    $.ajax({
        type: "post",//请求方式
        url: "http://192.168.18.117:9001/Shop/MobileGetPersonMessage",
        data:{
            "uname":name

        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){
            //返回的参数就是 action里面所有的有get和set方法的参数
            console.log(result);
            console.log(result.userAcount);
            eachx(result.userAcount);
            //window.location.href = "udai_shopcart_pay.html";
        }
    });
    var allnum = 1;

    var eachx =function (result) {
        $('#yue').text(result.acountLeftMoney)
    };

    //展示购买的商品

    $.ajax({
        url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=listOrderByMemId",
        type: 'post',//请求方式
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data:{
            'uname':name,
            'cp':'1',
            'ls':'88'

        },

        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
            var orderno = result.AllOrder;
            for(var i = 0; i < orderno.length; i++) {
                var ordernu = orderno[i].orderNo;
                console.log(ordernu);
            console.log(result,00000);

            $.ajax({
                url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=listByMemId",
                type: 'post',//请求方式
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data:{
                    'uname':name,
                  'orderNo':ordernu

                },

                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数

                    console.log(result,1111);
                    console.log(result.oDetail,222);
                    console.log(result.oDetail.pro,333);

                    showone(result.oDetail);



                }
            });


        }




    }
    });



    function showone(result) {
        console.log(result,result.addr,result.pro.outPrice);



        $("#showde").append(
            "<tr>" +
            "<th scope='row'><a href='item_show.html'><div class='img'><img src='"+result.pro.picture+"' alt='' class='cover'></div></a></th>"+
            "<td>"+
            "<div class='name ep3'>"+result.pro.proNote+"</div>"+
            "<div class='type c9'>颜色分类："+result.odColor+"  尺码："+result.odSize+"</div>"+
            "</td>"+
            "<td>¥"+result.pro.outPrice+"</td>"+
            "<td>"+result.odNum+"</td>"+
            "<td></td>"+
            "<td class='ap'>"+result.odNum*result.pro.outPrice+"</td>"+
            "</tr>"
        );

        $(".tt").html(result.odNum*result.pro.outPrice);

        var all = 0;

        for(var i = 0 ; i<= $("#showde tr").length;i++){
            all += parseInt( $("#showde tr").find('.ap').html())
        }
        console.log(all)

        /*var lth = $("#showde tr");*/
 /*       var allcoun = parseInt("0");
        for(var i = 0; i <= lth.length; i++){
            allcoun += parseInt(lth.find('.ap').html());
            console.log(parseInt(lth.find('.ap').html()))
        }

        console.log(allcoun,lth.length);*/
       /* $(".tt").html(allcoun);*/


    }

    function addBox(result) {
        //result是一个集合,所以需要先遍历
        $.each(result, function (index, obj) {
            console.log(index, obj.addBase);
            var adddet = obj.addBase.split("-");


            $(".addr-radio").append(
            "<div class='radio-line radio-box'>"+
                "<label class='radio-label ep' title=''>"+
                "<input name='addr' value='0' autocomplete='off' type='radio'><i class='iconfont icon-radio'></i>"+
                    "<span class='alltext'>"+adddet[0]+'省&nbsp;'+adddet[1]+'&nbsp;'+adddet[2]+'&nbsp;'+obj.addDetail+obj.takeGoods+'&nbsp;'+obj.takeTel+"</span>"+"<span class='bm' style='display: none' >"+obj.addNo+"</span>"+
                "</label>"+
                "<a href='javascript:;' class='default setdef'>设为默认</a>"+
                "<a href='udai_address_edit.html' class='edit'>修改</a>"+
            "</div>"
            );



        });


        $(".addr-radio").find(".radio-box").eq(0).addClass('active').find('.setdef').text("默认地址");
        $(".addr-radio").find(".radio-box").eq(0).find("input[name='addr']").attr("checked","");


        var defaltadd = $(".addr-radio").find(".radio-box").eq(0).find(".alltext").text();

    /*   localStorage.setItem("addressDe",defaltadd);
        console.log(defaltadd);*/

        $('.setdef').click(function () {



            var nu = $(this).parent().find(".bm").text();

            console.log(nu);
            $(this).text("默认地址");
            $(this).parent().siblings().find('.setdef').text("设为默认");
            $.ajax({
                url: "http://192.168.18.132:8080/Shop/MobileMemberServlet?status=changeAddre",
                type: 'post',//请求方式
                data:{
                    'uname':name,
                    'radio1':nu

                },
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数

                    console.log(result,result.msg);
                    window.location.reload();

                    if(result.msg=="更换成功!"){
                        return DJMask.open({
                            width:"300px",
                            height:"100px",
                            content:"更换成功！"
                        });
                    };



                }
            });
        });


    }



})