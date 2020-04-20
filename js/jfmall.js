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
        console.log("00000012");
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
        url:'http://192.168.18.117:9001/Shop/MobilePromotionProduct?status=listPromotionProduct',
        dataType:'json',
        data:{
            'uname':name

        },
        type:'post',
        success:function(result){
            console.log(result);


            addBox(result.ppList)




        }


    });


    function addBox(result){
        //result是一个集合,所以需要先遍历
        $.each(result,function(index,obj){
            /* console.log(index,obj.brand.brandName,555555555);
             console.log(index,obj.name);*/
            $(".item-list__area").append(


                "<a href='jifen_item.html?proNo="+obj.pro_no+"' class='floor-item'>"+
                "<div class='item-img hot-img'>"+
                "<img src='"+obj.picture+"' alt='"+obj.pro_name+"' class='cover'>"+
                "</div>"+
                "<div class='price clearfix'>"+
                "<span class='pull-left cr fz16'>"+obj.pro_outPrice+"积分</span>"+
                "<span class='pull-right c6'>00</span>"+
                "</div>"+
                "<div class='name ep' title='"+obj.pro_note+"'>"+obj.pro_note+"</div>"+
                "</a>"


            );




        });
    }





});