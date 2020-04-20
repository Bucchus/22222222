/**
 * Created by Administrator on 2018/5/11 0011.
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

            //window.location.href = "udai_shopcart_pay.html";
        }
    });



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
                //console.log(ordernu);
                //console.log(result,00000);

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

                        //console.log(result,1111);

                        showone(result.oDetail);



                    }
                });


            }




        }
    });



    function showone(result) {

        console.log(result,565665)


        $("#showop").append(



            "<tr class='calcumo'>"+
            "<th scope='row'>"+
            "<label class='checked-label'><input type='checkbox'><i></i>"+
            "<div class='img'><img src='"+result.pro.picture+"'  alt='"+result.pro.proNote+"' class='cover'></div>"+
            "</label>"+
            "</th>"+
            "<td>"+
            "<div class='name ep3'>"+result.pro.proNote+"</div>"+
        "<div class='type c9'>颜色分类："+result.odColor+"  尺码："+result.odSize+"</div>"+
        "</td>"+
        "<td>¥"+result.pro.outPrice+"</td>"+
        "<td>"+
            "<div class='cart-num__box'>"+
            "<input type='button' class='sub' value='-'>"+
            "<input type='text' class='val' value='1' maxlength='2'>"+
            "<input type='button' class='add' value='+'>"+
            "</div>"+
            "</td>"+
            "<td class='zongprice'>"+result.odNum*result.pro.outPrice+"</td>"+
        "<td><a href='' class='delhp'>删除</a><span style='display: none;' class='numpro'>"+result.order.orderNo+"</span></td>"+
            "</tr>"



        );



        for(var i = 0; i < res.allOrder.length; i++) {
            $("#showop").append(
                "<li>"+
                "<div class='shop-info'>"+
                "<input type='checkbox' name='ck' class='check goods-check goodsCheck' title='"+res.allOrder[i].acNo+"'>"+
                "<div class='shop-info-img'><a href='#'><img src='images/computer.jpg' title='"+res.allOrder[i].acNo+"' /></a></div>"+
                "<div class='shop-info-text'>"+
                "<h4>" + res.allOrder[i].proName + "</h4>"+
                "<div class='shop-brief'><span>"+res.allOrder[i].proNote+"</span>&nbsp;&nbsp;颜色:<span>"+res.allOrder[i].proColor+"</span>&nbsp;&nbsp;型号:<span>"+res.allOrder[i].proSize+"</span></div>"+
                "<div class='shop-price'>"+
                "<div class='shop-pices'>￥<b class='price'>" + res.allOrder[i].proPrice + "</b></div>"+
                "<div class='shop-arithmetic'>"+
                "<a href='javascript:;' class='minus'>-</a>"+
                "<span class='num' >1</span>"+
                "<a href='javascript:;' class='plus'>+</a>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div></li>"
            )
        }







        var $item_checkboxs = $('.shopcart-form__box tbody input[type="checkbox"]'),
            $check_all = $('.check-all');
        // 全选

        var total_money = 0;



        $check_all.on('change', function() {
            $check_all.prop('checked', $(this).prop('checked'));
            $item_checkboxs.prop('checked', $(this).prop('checked'));

        });
        // 点击选择
        $item_checkboxs.on('change', function() {
            var flag = true;
            $item_checkboxs.each(function() {
                if (!$(this).prop('checked')) { flag = false }
            });
            $check_all.prop('checked', flag);
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parent().parent().parent().find('.zongprice').html());

                total_money += goods;

            }else{
                var goods = parseInt($(this).parent().parent().parent().find('.zongprice').html());

                total_money -= goods;
            }

            $('#allmoney').html('￥'+total_money);

        });

        $('input.val').onlyReg({reg: /[^0-9.]/g});
        // 加减个数
        $('.cart-num__box').on('click', '.sub,.add', function() {
            var value = parseInt($(this).siblings('.val').val());
            if ($(this).hasClass('add')) {
                $(this).siblings('.val').val(Math.min((value += 1),99));
            } else {
                $(this).siblings('.val').val(Math.max((value -= 1),1));
            }
        });



        $(".calBtn").click(function () {
            $("#showop tr").each(function () {
                $(this).find(".zongprice").html();
                console.log($(this).find(".zongprice").html())
            })
        })







  /*      function totalMoney() {
            var total_money = 0;
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parent().parent().parent().find('.zongprice').html());

                total_money += goods;

            }
            console.log(total_money,parseInt($(this).parent().parent().parent().find('.zongprice').html()))
            $('#allmoney').html('￥'+total_money);
            /!* $('.piece_num').html(total_count);*!/

        }*/

      $(".delhp").click(function () {
         var proNo =  $(this).parent().find('.numpro').html();

          $.ajax({
              url: "http://192.168.18.132:8080/Shop/MobileFrontOrderServlet?status=delOrder",
              type: 'post',//请求方式
              contentType: "application/x-www-form-urlencoded; charset=utf-8",
              data:{
                  'uname':name,
                  'cp':'1',
                  'ls':'88',
                  'orderNo':proNo

              },

              dataType: "json",//数据类型可以为 text xml json  script  jsonp
              success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数

                  console.log((result));





              }
          });


      })





    };





    //======================================总计==========================================

    $sonCheckBox = $('.son_check');







})