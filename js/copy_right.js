document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');


var logoPath = 'http://static.sdg-china.com/copyright/';
//var logoPath = '';
var subLogo = logoPath+'pic/woool/logo.png';

if(CopyRightcss.indexOf('black') != -1){
	subLogo = logoPath+'pic/woool/logo_black.png';
}

var _sdgCopyrightLink = 'http://www.shandagames.com/web/company/shulongzs.html';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT">'
//盛大游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo">'
+'			<a href="http://www.shandagames.com/" target="_blank" class="SDGCOPYRIGHT-logo1">盛大游戏</a>'
+'			<a href=" http://chuanshi.sdo.com/" style="padding-top:10px;" target="_blank">'
+'				<img src="'+subLogo+'">'
+'			</a>'
+'		</div>'
//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'
+'		<div style="height:24px; width:460px;" id ="containerDiv"></div>'

//每个项目组自己的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">新广出审[2014]1571号 </span>'
+'				 文网游备字〔2015〕C-RPG 0341 号'
+'			</p>'

//公司统一的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3"><a href="'+_sdgCopyrightLink+'" target="_blank">沪网文（2014）0749-179号</a></span>'
+'				<span class="SDGCOPYRIGHT-pr3"><a href="'+_sdgCopyrightLink+'" target="_blank">ICP：沪B2-20100008</a></span>'
+'				<a href="'+_sdgCopyrightLink+'" target="_blank">新出网证（沪）字026号</a>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">上海数龙科技有限公司</span>'
+'				版权所有'
+'			</p>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="http://sh.cyberpolice.cn/infoCategoryListAction.do?act=initjpg" class="SDGCOPYRIGHT-priv1" target="_blank">网络警察</a>'
+'			<span>'
+'				<a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20111011140737765" target="_blank"><img src="http://static.sdg-china.com/db/pic/bao/other/shgs2.gif" border=0></a>'
+'			</span>'
+'			<a class="SDGCOPYRIGHT-priv3" href="http://www.shjbzx.cn/" target="_blank">举报</a>'
+'			<a href="http://i.sdo.com/report" target="_blank"><img src="http://static.sdg-china.com/copyright/pic/SDG/report.png" border=0></a>'
//+'			<span class="SDGCOPYRIGHT-priv3">举报</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);

//统一官网标签
(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/copyright/js/copyrightcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

//监控代码
(function(d, s) {
  window.config ={
  bw_enabled:false,
  bw_base:"http://static.sdg-china.com/yxzm/pic/",
  siteid:"SDG-08200-01"
};
   var js =d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/yxzm/js/ac.js";
   sc.parentNode.insertBefore(js, sc);
}(document, "script"));