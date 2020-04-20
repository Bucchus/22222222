/**
 * Created by Administrator on 2018/5/3 0003.
 */
$(function () {
    //if logined
    /* var name=getCookie("name");
     var ages = getCookie("photoh");*/
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");

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


    var prov = $(".addr-linkage select[name='province']").val();
    var city = $(".addr-linkage select[name='city']").val();
    console.log(city);
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

    //展示信息
    function addBox(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            console.log(index,obj.addBase);

            $(".addr-list").append(
                "<div class='addr-item'>"+
                "<div class='tdf1 getname'>"+obj.takeGoods+"</div>"+
                "<div class='tdf2 tdt-a_l getare'>"+obj.addBase+"</div>"+
                "<div class='tdf3 tdt-a_l getdet'>"+obj.addDetail+"</div>"+
                "<div class='tdf1 gettel'>"+obj.takeTel+"</div>"+
                "<div class='tdf1 order'>"+
                "<a href='javascript:void(0)' class='changeme' data-toggle='modal' data-target='#myModal'>修改</a><a href='' class='delhp'>删除</a>"+
                "</div>"+
                "<div class='tdf1'>"+
                "<a href='javascript:void(0)' class='default dzhp'>设为默认<span class='numhhhh' style='display: none'>"+obj.addNo+"</span><span class='numpppp' style='display: none'>"+obj.addZipcode+"</span></a>"+
                "</div>"+
                "</div>"
            );



        });


        var addDe = $(".addr-item .getare").eq(0).html()+$(".addr-item .getdet").eq(0).html()+$(".addr-item .getname").eq(0).html()+$(".addr-item .gettel").eq(0).html();
        console.log(addDe);


        $('.addr-list').find('.addr-item').eq(0).find('.dzhp').addClass('active').text("默认地址");
        localStorage.setItem("addressDe",addDe);


        $('.dzhp').click(function () {

            console.log($(this));
            var nu = $(this).find('.numhhhh').text();

            $(this).addClass('active').text("默认地址");
            $(this).parent().parent().siblings().find('.dzhp').removeClass('active').text("设为默认");
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
                    }
                }
            });
        });

        $(".changeme").click(function () {


            var changepp = $(this).parent().parent().find('.numpppp').text();
            var nu = $(this).parent().parent().find('.numhhhh').text();
            console.log(changepp);
            $('.addno').val(nu);

            console.log($(this).parent().parent().find('.getname').text());

            var newnm = $(this).parent().parent().find('.getname').text();
            var newdq = $(this).parent().parent().find('.getare').text();
            var newdet = $(this).parent().parent().find('.getdet').text();
            var newtel = $(this).parent().parent().find('.gettel').text();
            console.log(newdq.split("-")[0]);
            $("#city_5").citySelect({
                prov:newdq.split("-")[0],
                city:newdq.split("-")[1],
                dist:newdq.split("-")[2],
                nodata:"none"
            });

            $("#name02").val(newnm);
            //$("select[name='province']").val();
            //var city = $("select[name='city']").val();
            $("#details02").val(newdet);
            /*   var town = $("select[name='area']").val();
             var typer = $(".add_bc").prop("name");
             var email = $("#code").val(changepp);*/
            $("#code02").val(changepp);


            var phon = $("#mobile02").val(newtel);


        });


        $("#yeswe").click(function () {
            //http://192.168.18.133:8080/Shop/MobileMemberServlet?status=addupdate
            var addNo =  $('.addno').val();
            var getname = $("#name02").val();
            var prov = $("select[name='province02']").val();
            var city = $("select[name='city02']").val();
            var area = $("#details02").val();
            var town = $("select[name='area02']").val();
            var typer = $(".add_bc02").prop("name");

            var uBase = [prov,city,town].join("-");
            console.log(uBase);

            var email = $("#code02").val();
            var phon = $("#mobile02").val();
            //$('#test option:selected').val();

            if(getname==""){
                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"收货人姓名不能为空！"
                });
            };
            if(area==""){
                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"地址不可为空！"
                });
            }

            if(email==""){
                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"地区编码不能为空！"
                });
            };

            if(phon==""){


                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"手机号不可为空！"
                });
            }else if(!te.test(phon)){
                return DJMask.open({
                    width:"300px",
                    height:"100px",
                    content:"手机号不正确！"
                });
            }

            console.log(getname,4522,uBase,name,addNo,area,phon,email,name);


            /*   if(ck){
             //如果勾选则走这里

             }else{

             }*/

            //如果未勾选则走这里
            $.ajax({
                url: "http://192.168.18.132:8080/Shop/MobileMemberServlet?status=addupdate",
                type: 'post',//请求方式
                data:{
                    'uName':getname,
                    'uBase':uBase,
                    'uname':name,
                    'addNo': addNo,
                    'uDetail':area,
                    'uTel':phon,
                    'uEmail':email
                },
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
                    window.location.reload();
                    console.log(result,555);
                }
            });


        });


        //删除
        $('.delhp').click(function () {
            var nu = $(this).parent().parent().find('.numhhhh').text();
            $.ajax({
                url: "http://192.168.18.132:8080/Shop/MobileMemberServlet?status=delAddre",
                type: 'post',//请求方式
                data:{
                    'addNo': nu
                },
                dataType: "json",//数据类型可以为 text xml json  script  jsonp
                success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
                    return DJMask.open({
                        width:"300px",
                        height:"100px",
                        content:"删除成功！"
                    });


                }
            });
        })


    };



    $("#code").blur(function () {
        if($(this).val()==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"地区编码不能为空！"
            });
        }
    });
    $("#name").blur(function () {
        if($(this).val()==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"收货人姓名不能为空！"
            });
        }
    });

    $("#details").blur(function () {
        if($(this).val()==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"地址不可为空！"
            });
        }
    });

    var te = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;



    $("#mobile").blur(function () {

        console.log(te.test($("#mobile").val()))

        if($(this).val()==""){


            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"手机号不可为空！"
            });
        }else if(!te.test($("#mobile").val())){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"手机号不正确！"
            });
        }
    });

    $(".keep").click(function () {
        var getname = $("#name").val();
        var prov = $("select[name='province']").val();
        var city = $("select[name='city']").val();
        var area = $("#details").val();
        var town = $("select[name='area']").val();
        var typer = $(".add_bc").prop("name");
        var email = $("#code").val();
        var phon = $("#mobile").val();
        //$('#test option:selected').val();

        if(getname==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"收货人姓名不能为空！"
            });
        };
        if(area==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"地址不可为空！"
            });
        }

        if(email==""){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"地区编码不能为空！"
            });
        };

        if(phon==""){


            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"手机号不可为空！"
            });
        }else if(!te.test(phon)){
            return DJMask.open({
                width:"300px",
                height:"100px",
                content:"手机号不正确！"
            });
        }

        console.log(prov,name,4545,town,typer,email,getname,city,area,phon,name);

        var ck = $('#ckhp').is(':checked');
        console.log(ck);

        /*   if(ck){
         //如果勾选则走这里

         }else{

         }*/

        //如果未勾选则走这里
        $.ajax({
            url: "http://192.168.18.132:8080/Shop/MobileMemberServlet?status=insertAddPre",
            type: 'post',//请求方式
            data:{
                'type':typer,
                'takeGoods':getname,
                'userName':name,
                's_province':prov,
                's_city':city,
                's_county':town,
                'detail':area,
                'tel':phon,
                'email':email
            },
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
                window.location.reload();
                console.log(result,232);
            }
        });


    })






})