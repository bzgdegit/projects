$(function(){
	Navigationbar();
	Close();
	Input();
})
	
function Navigationbar(){
	$("li").has("div").mousemove(function(){
		$(this).children("a").addClass("u_dropdown_hover");
		$(this).children("div").css("display","block");
	}).mouseout(function(){
		$(this).children("a").removeClass("u_dropdown_hover");
		$(this).children("div").css("display","none");
	})
	$("#i1").focus(function(){
		$("label").css("display","none")
	}).blur(function(){
		$("label").css("display","block")
	})
	$(".u_sc_dropdown").click(function(){
		$('.u_sc_dd').css("display","block");
	}).mouseleave(function(){
		$('.u_sc_dd').css("display","none");
	})
	
	
	
}
function Close(){
	$(".ad_close").click(function(){
		$(".g_ad").css("display","none");
	})
	$(".u_qrclose").click(function(){
		$(".u_qrcode").addClass("hide");
	})
	var $li=$(".u_tab_ele").children("li");
	var $div=$(".m_tab_all").children("ul");
//	$("u_tab_ele").children("li").mouseenter(function(){
//		
//	})
	$li.on('click', function() {
		var index = $li.index($(this));
		$li.removeClass('current');
		$(this).addClass('current');
		$div.addClass('hide');
		$div.eq(index).removeClass('hide');
	})
	$(".m_shopList").children("li").mouseover(function(){
		$(".m_lnShowlist").removeClass("hide");
	})
//	var Listate={};
//	var Dstate={};
//	Listate.prototype.state=1;
//	Dstate.prototype.state=1;
//	$(".m_shopList").children("li").mouseover(function(){
//		Listate.state=0;
//	}).mouseup(function(){
//		Listate.state=1;
//	})
//	$(".m_lnShowlist").mouseover(function(){
//		Dstate.state=0;
//	}).mouseup(function(){
//		Dstate.state=1;
//	})
//	if(Dstate.state==1&&Listate.state==1){
//		$(".m_lnShowlist").addClass("hide");
//	}
//	for(var i=0;i<$li.length;i++){
//		console.log($li[i]);
//		$li[i].click(function(){
//			for(var n=0;n<$li.length;n++){
//				$li[n].className="";
//				$div[n].className="u_tab_item clearfix hide";
//			}
//			this.className="current";
//			$div[this.index].className="u_tab_item clearfix";
//			
//		})
//	}
//	var First=document.getElementsByClassName("u_tab_ele");
//	var Li=document.First.getElementsByTagName("li");
//	var Div =document.getElementsByClassName("m_tab_all").children("ul");
//	for(var i=0;i<Li.length;i++){
//		Li[i].index=i;
//		Li[i].index.onClick=function(){
//			for(var n=0;n<Li.length;n++){
//				Li[n].className="";
//				Div[n].className="u_tab_item clearfix hide";
//			}
//			this.className="current";
//			Div[this.index].className="u_tab_item clearfix";
//		}
//	}
}

function Input(){
	var oInput = document.getElementById('i1');
	var oLabel = document.getElementById('label');
	oInput.onkeyup = function(){
		if(oInput.value != ''){
			oLabel. style.display = 'none';
		}else{
			 oLabel. style.display = 'block';
			}
	}
}
var index=0;
function Imove(){
	if(index==5){
		index=0;
	}
	var leftmargin=index?(index*-520):0;
	$(".u_move").animate({
						"marginLeft":leftmargin+"px"
					},2000);
	index++;
	
}
setInterval(Imove,1000);
