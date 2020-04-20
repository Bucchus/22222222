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


    //http://192.168.18.117:9001/Shop/MobileGetPersonMessage
    $(".paycount").click(function () {
        var czmoney = $("#add-money").val();

        if(czmoney==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"金额不可为空！"
            });
        }else if(czmoney<=0){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"输入正确的数值！"
            });
        }else{
            $.ajax({
                type: "post",//请求方式
                url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=giveMoney",
                data:{
                    "uname":name,
                    "giveMoney":czmoney,
                    "state":'1'
                },
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){
                    //返回的参数就是 action里面所有的有get和set方法的参数
                    allmsg();
                    console.log(result)
                    window.location.reload();
                    //window.location.href = "udai_shopcart_pay.html";
                }
            });
        }

    });


    //添加开户行
    $(".txnow").click(function () {
        var txname = $("#up-name").val();
        var khh = $("#up-bank").val();
        var banknum = $("#up-number").val();
        var khphone = $("#up-phone").val();

        if(txname==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"姓名不可为空！"
            });
        };
        if(khh==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"开户行不可为空！"
            });
        };
        if(banknum==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"银行账号不可为空！"
            });
        };
        if(khphone==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"手机号不可为空！"
            });
        };

        if(txname!=""&&khh!=""&&banknum!=""&&khphone!=""){
            $.ajax({
                type: "post",//请求方式
                url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=insertCard",
                data:{
                    "uname":name,
                    "cardNumber":banknum,
                    "phone":khphone,
                    "realName":txname,
                    "cardCompany":khh

                },
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){
                    //返回的参数就是 action里面所有的有get和set方法的参数
                    console.log(result);

                    //展示账户信息http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard
                    $.ajax({
                        type: "post",//请求方式
                        url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard",
                        data:{
                            "uname":name

                        },
                        contentType: "application/x-www-form-urlencoded; charset=utf-8",
                        dataType: "json",//数据类型可以为 text xml json  script  jsonp
                        success: function(result){
                            //返回的参数就是 action里面所有的有get和set方法的参数

                            console.log(result);
                            showmsg(result);
                            allmsg();

                        }
                    });


                }
            });
        }


    });




    //展示账户信息http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard
    $.ajax({
        type: "post",//请求方式
        url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard",
        data:{
            "uname":name

        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){
            //返回的参数就是 action里面所有的有get和set方法的参数

            console.log(result);
            showmsg(result);
            allmsg();

        }
    });
    var cdid = 0;
    function showmsg(res) {
        $.each(res.cardList,function (ind,obj) {
            console.log(obj,23232)
            $(".sh02").append(
                "<div class='radio'>" +
                "<lable><input class='xz' type='radio' name='ck' value='op1'>姓名："+obj.realName+"手机号："+obj.phoneMoney+"银行卡号："+obj.giveMoneyCard+"银行："+obj.cardCompany+"</lable><span class='cardid' style='display: none'>"+obj.reverseCardId+"</span>" +
            "</div>"
            )
        });

        $(".sh02").find(".xz").click(function () {
            console.log($(this).parent().parent().find(".cardid").html());
            cdid = $(this).parent().parent().find(".cardid").html();
            console.log(2322);
        })

    }




    $(".txnow02").click(function () {
        var money = $("#up-money").val();
        if(money<=100){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"不能少于100元！"
            });
        }
        var cardid = $(".sh02 input[name='ck']:checked").parent().find(".cardid").html();
        console.log(cardid)
        $.ajax({
            type: "post",//请求方式
            url: "http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=getMoney",
            data:{
                "uname":name,
                "getMoney":money,
                "state":'1',
                "cardId":cdid

            },
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            success: function(result){
                //返回的参数就是 action里面所有的有get和set方法的参数
                allmsgsec();
                console.log(result);
                showmsg(result);
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
                        console.log(result.userAcount,56666666666);
                        eachx(result.userAcount);
                        //window.location.href = "udai_shopcart_pay.html";
                    }
                });

                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"提现成功！"
                });


            }
        });
    })
    $(".pay-method-box label input[type='radio']").click(function () {
        $(this).attr("checked","checked");
        $(this).parent().siblings().find("input[type='radio']").removeAttr("checked");
        $(".payewm img").eq($(this).parent().index()).addClass("disblk").siblings().removeClass("disblk").addClass("disnon");

    });


    //http://192.168.18.117:9001/Shop/MobileRecordServlet?status=listRecord

    allmsg();


    function allmsg() {
        $.ajax({
            type: "post",//请求方式
            url: "http://192.168.18.117:9001/Shop/MobileRecordServlet?status=listRecord",
            data:{
                "uname":name,
                "type": 0

            },
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            success: function(result){
                //返回的参数就是 action里面所有的有get和set方法的参数
                console.log(result,9999);
                getmo(result.listRecord);
                //window.location.href = "udai_shopcart_pay.html";
            }
        });
    }
    allmsgsec();
    function allmsgsec() {
        $.ajax({
            type: "post",//请求方式
            url: "http://192.168.18.117:9001/Shop/MobileRecordServlet?status=listRecord",
            data:{
                "uname":name,
                "type": 1

            },
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            success: function(result){
                //返回的参数就是 action里面所有的有get和set方法的参数
                console.log(result,9999);
                getmo(result.listRecord);
                //window.location.href = "udai_shopcart_pay.html";
            }
        });
    }
    allmsgthi();
    function allmsgthi() {
        $.ajax({
            type: "post",//请求方式
            url: "http://192.168.18.117:9001/Shop/MobileRecordServlet?status=listRecord",
            data:{
                "uname":name,
                "type": 2

            },
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            success: function(result){
                //返回的参数就是 action里面所有的有get和set方法的参数
                console.log(result,9999);
                getmo(result.listRecord);
                //window.location.href = "udai_shopcart_pay.html";
            }
        });
    }
    
    function getmo(res) {

        $.each(res,function (ind,obj) {
            console.log(obj)
            $(".detmsg").append(
            "<tr>"+
            "<td>"+obj.createTime+"</td>"+
            "<td>充值</td>"+
            "<td>"+obj.cashMoney+"</td>"+
            "<td>"+obj.acountLogMessage+"</td>"+
            "<td><span class='text-primary'>完成</span></td>"+
                "<td>—</td>"+
                "</tr>"
            )
        })
    }







})