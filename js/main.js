/**
 * Created by yanghu.palol on 2015/10/22.
 */

//--------------------向左滑动内容显示
//最外层显示最大高度
var _showHeight = 556;
//最外层显示最小高度
var _hideHeight = 70;
//判断是否正在移动
var _isMove = false;

$(function () {
    $('#test li').click(function () {
        //判断是否正在移动,如果是的话。就不动。防止重复点击。
        if (!_isMove) {
            //标记位开启。此时再点就无效了。
            _isMove = true;
            //获取点击的对象上是否有testShow这个css
            var _isShow = $(this).hasClass('testShow');

            //如果有此标记时。就不能再次点击
            if (!_isShow) {
                //把之前显示的对象缩小
                $('.testShow').stop().animate({
                    width: _hideHeight
                }, 700, function () {
                    //当动画结束时改变状态
                    $('.testShow').removeClass('testShow');

                    _isMove = false;
                });

                //把当前点击的放大
                $(this).stop().animate({

                    width: _showHeight
                }, 700, function () {
                    //当动画结束时改变状态
                    $(this).addClass('testShow');
                    $(".title").removeClass('hover');
                    $(this).find(".title").addClass('hover');
                    _isMove = false;
                });

            } else {
                _isMove = false;
            }
        }

    });

});

//---------------轻松修真
var tab_div = $(".tab_div a"),
    btn_div = $(".btn_div a"),
    m = 0;

$(btn_div).each(function (m) {
    $(this).click(function () {
        $(tab_div).hide();
        $(tab_div).eq(m).css("display", "block");
        $(btn_div).removeClass("on");
        $(btn_div).eq(m).addClass("on");
    })
})


//---------------预注册赢豪礼
var page04_jz = $(".page04_jz a"),
    page04_btn = $(".page04_btn a"),
    y = 0;

$(page04_btn).each(function (y) {
    $(this).click(function () {
        $(page04_jz).hide();
        $(page04_jz).eq(y).stop(true, true).show();
    })
})

//------------人物切换
var ren_wh = $(".ren_wh a"),
    i = 0;

function prev_ren() {
    i--;
    if (i < 0) {
        i = $(ren_wh).length - 1
    }
    $(ren_wh).hide();
    $(ren_wh).eq(i).fadeIn();
}
function next_ren() {
    i++;
    if (i > $(ren_wh).length - 1) {
        i = 0
    }
    $(ren_wh).hide();
    $(ren_wh).eq(i).fadeIn();
}
function img_change() {
    i++;
    if (i > $(ren_wh).length - 1) {
        i = 0;
    }
    $(ren_wh).hide();
    $(ren_wh).eq(i).fadeIn();
}
gap = setInterval(img_change, 3000)

$(".next_ren,.prev_ren,.ren_wh a").mouseover(function () {
    clearInterval(gap);
}).mouseout(function () {
    gap = setInterval(img_change, 3000);
})


function show_layer(name) {
    $(".mydiv").fadeOut(500);
    $("." + name.toString()).hide().fadeIn(500)
    $(".bg").show(0, function () {
        $(this).animate({"opacity": 0.85}, 500);
    })
}
function close_layer() {
    $(".mydiv").fadeOut(500);
    $(".bg").animate({"opacity": 0}, 500, function () {
        $(this).hide();
    });
}


$(function () {
    var pos = [], posFix = [];
    $(".page").each(function (i, item) {
        pos.push([parseInt($(item).css("left")), parseInt($(item).css("top"))])
    })

    function setPos() {
        var w = $(window).width(),
            h = $(window).height(),
            offsetX = (w - 1000) / 2;
        posFix = [];
        for (i = 0; i < pos.length; i++) {
            posFix.push([pos[i][0] - offsetX, pos[i][1]]);
        }
        //console.table(posFix);
        $(".wrap").css({left: -posFix[0][0], top: -posFix[0][1]});
    };
    $(window).resize(function () {
        setPos();
    })
    setPos();

    $(".bottom_nav li").click(function () {
        var i = $(this).index() + 1;
        $(".bottom_nav li a").removeClass("on");
        $(this).find("a").addClass("on");
        $(".page").fadeOut(200);

        //$(".wrapBg").addClass("blur");
        $(".wrap").stop(true).animate({left: -posFix[i][0], top: -posFix[i][1]}, 1000, 'easeInOutQuart', function () {
            //$(".wrapBg").removeClass("blur");
            $(".page").eq(i).fadeIn(500);
        });

    });

    $(".video-title li").click(function () {
        var i = $(this).index();

        $(".video-title li a").removeClass("on");
        $(this).find("a").addClass("on");

        $(".video-js").hide();
        $(".video-js").eq(i).show();

    });

   window.onload = function () {
        // var dg = new Drag('wrap');
   };
   function Drag(obj) {
        this.oDiv = document.getElementById(obj);
        this.x = 0;
        this.y = 0;
        this.cx = 0;
        this.cy = 0;
        var _this = this;
        this.oDiv.onmousedown = function (ev) {
            _this.move(ev);
            return false;
        };
    };
    Drag.prototype.move = function (ev) {
        var oEvent = ev || event;
        var _this = this;
        this.cx = oEvent.clientX;
        this.cy = oEvent.clientY;
        this.x = this.oDiv.offsetLeft;
        this.y = this.oDiv.offsetTop;
        //$(".wrapBg").addClass("blur");

        document.onmousemove = function (ev) {
            _this.moveSide(ev);
        };
        document.onmouseup = function () {
            _this.moveUp();
        };
        document.onmouseout = function () {
               _this.moveUp();
        };

    };
    Drag.prototype.moveSide = function (ev) {
        var oEvent = ev || event;
        var outX = oEvent.clientX - this.cx + this.x;
        var outY = oEvent.clientY - this.cy + this.y;
        if (outX >= 0) {
            outX = 0;
        } else if (outX < document.documentElement.clientWidth - this.oDiv.offsetWidth) {
            outX = document.documentElement.clientWidth - this.oDiv.offsetWidth;
        }
        ;
        if (outY >= 0) {
            outY = 0;
        } else if (outY < document.documentElement.clientHeight - this.oDiv.offsetHeight) {
            outY = document.documentElement.clientHeight - this.oDiv.offsetHeight;
        }
        ;
        for (i = 0; i < posFix.length; i++) {
            if (-outX >= pos[i][0] - 100 && -outX < pos[i][0] + 200 && -outY >= pos[i][1] - 50 && -outY < pos[i][1] + 200) {
                if ($(".page").eq(i).is(":hidden")) {
                    $(".page").eq(i).fadeIn(500).siblings(".page").hide();
                }
            }
        }

        this.oDiv.style.left = outX + 'px';
        this.oDiv.style.top = outY + 'px';
    };
    Drag.prototype.moveUp = function (ev) {
        document.onmousemove = null;
        document.onmouseout = null;
        //$(".wrapBg").removeClass("blur");

    };

});
