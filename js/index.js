/**
 * Created by Administrator on 2018/4/28 0028.
 */


$(function () {
    //if logined
    //var name=getCookie("name");
    var name=localStorage.getItem("name");
    var ages=localStorage.getItem("photoh");
    //var ages = getCookie("photoh");
    if (name!=""&&name!=undefined)
    {
        $(".username").html(name);
        $(".aftlg").css("display","none");
        $(".userct").css("display","inline");
        console.log(name);
    }else{
        $(".aftlg").css("display","inline");
        $(".userct").css("display","none");
        console.log("111111");
        $("a").not(".aftlg").click(function (e) {
            alert("请先登录！");
            return false
        })
    }






    //商品详情
    $.ajax({
        url:'http://192.168.18.132:8080/Shop/MobileFrontProductServlet?status=list',
        dataType:'json',
        data:{},
        type:'post',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(result){
            console.log(result);
            addBox(result.allProduct)
            addBox05(result.allProduct)

        }

    });
    //积分商品详情
    $.ajax({
        url:'http://192.168.18.132:8080/Shop/IntegralFrontProductServlet?status=findAllIProduct',
        dataType:'json',
        data:{},
        type:'post',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(result){

           /* addBox02(result.allProduct)*/
            addBox02(result.list);
            addBox04(result.list);

        }

    });

    $.ajax({
        //	积分商品展示
        type: "post",
        url: "http://192.168.18.133:9001/inLove/ClassifyDetail/listMemberByclassId?classId=1",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function(res) {
            console.log(res,777777777777777777)

        }
    });

    //个人余额等
    $.ajax({
        url: 'https://hq.sinajs.cn/etag.php?_=1531204462510&list=sh601006',
        dataType: 'json',
        data: {
            "uname": name
        },
        type: 'get',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {



        }
    });


//http://192.168.18.117:9001/Shop/MobileMoneyServlet?status=listCard
    //商品
    function addBox(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
           /* console.log(index,obj.brand.brandName,555555555);
            console.log(obj.picture,obj.name);*/

            $("#box").append(


                "<a href='item_show.html?proNo="+obj.proNo+"' class='floor-item'>"+
                "<div class='item-img hot-img'>"+
                "<img src='../upload/"+obj.picture+"' alt='"+obj.proName+"' class='cover'>"+
                "</div>"+
                "<div class='price clearfix'>"+
                "<span class='pull-left cr fz16'>￥"+obj.outPrice+"</span>"+
                "<span class='pull-right c6'>售价</span>"+
                "</div>"+
                "<div class='name ep' title='"+obj.proNote+"'>"+obj.proNote+"</div>"+
                "</a>"


            );




        });
    }

    //积分商品
    function addBox02(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            /* console.log(index,obj.brand.brandName,555555555);
             console.log(obj.picture,obj.name);*/


            $("#box02").append(


                "<a href='jifen_item.html?proNo="+obj.pro_no+"' class='floor-item'>"+
                "<div class='item-img hot-img'>"+
                "<img src='../upload/"+obj.picture+"' alt='"+obj.pro_name+"' class='cover'>"+
                "</div>"+
                "<div class='price clearfix'>"+
                "<span class='pull-left cr fz16'>"+obj.pro_outPrice+"</span>"+
                "<span class='pull-right c6'>积分</span>"+
                "</div>"+
                "<div class='name ep' title='"+obj.pro_note+"'>"+obj.pro_name+"</div>"+
                "</a>"


            );




        });
    }

    //积分商品全部
    function addBox04(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            /* console.log(index,obj.brand.brandName,555555555);
             console.log(obj.picture,obj.name);*/


            $("#box04").append(



                "<div class='item-card' style='width: 240px;'>"+
                "<a href='jifen_item.html?proNo="+ obj.pro_no +"' class='photo'>"+
                "<img src='../upload/"+obj.picture+"' alt='"+obj.pro_name+"' class='cover'>"+
                "<div class='name'>"+obj.pro_name+"</div></a>"+
            "<div class='middle'>"+
                "<div class='price'><small></small>积分价："+obj.pro_outPrice+"</div>"+
                "</div>"+
                "</div>"






            );




        });

        $("#count").text(result.length);

    }

    //商品全部
    function addBox05(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            /* console.log(index,obj.brand.brandName,555555555);
             console.log(obj.picture,obj.name);*/

            $("#box05").append(

                "<div class='item-card' style='width: 240px;'>"+
                "<a href='item_show.html?proNo="+obj.proNo+"' class='photo'>"+
                "<img src='../upload/"+obj.picture+"' alt='"+obj.proName+"' class='cover'>"+
                "<div class='name'>"+obj.proName+"</div></a>"+
                "<div class='middle'>"+
                "<div class='price'><small></small>￥："+obj.outPrice+"</div>"+
                "</div>"+
                "</div>"






            );




        });

        $("#count").text(result.length);
        console.log(result.length)



    }

});