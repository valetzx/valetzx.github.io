let kk={showRightMenu:function(e,n=0,t=0){let o=$("#rightMenu");o.css("top",n+"px").css("left",t+"px"),e?o.show():o.hide()}},rmWidth=$("#rightMenu").width(),rmHeight=$("#rightMenu").height(),domhref="";function RemoveRightMenu(){kk.showRightMenu(!1),$("#rightmenu-mask").attr("style","display: none")}window.oncontextmenu=function(e){let n=e.clientX+10,t=e.clientY;return n+rmWidth>window.innerWidth&&(n-=rmWidth),t+rmHeight>window.innerHeight&&(t-=rmHeight),domhref=e.target.href,domhref?$("#menu-sharelink").html('<i class="fa fa-link"></i><span>复制链接</span>'):$("#menu-sharelink").html('<i class="fa fa-share"></i><span>分享本页</span>'),kk.showRightMenu(!0,t,n),$("#rightmenu-mask").attr("style","display: flex"),!1},$("#menu-backward").on("click",(function(){window.history.back()})),$("#menu-forward").on("click",(function(){window.history.forward()})),$("#menu-refresh").on("click",(function(){window.location.reload()})),kk.switchDarkMode=function(){RemoveRightMenu();"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},$("#menu-darkmode").on("click",kk.switchDarkMode),$("#menu-home").on("click",(function(){window.location.href=window.location.origin})),document.addEventListener&&document.addEventListener("DOMMouseScroll",RemoveRightMenu,!1),window.onmousewheel=document.onmousewheel=RemoveRightMenu,document.getElementById("post-comment")&&$("#menu-msg").attr("href","#post-comment"),kk.copyPageUrl=function(){var e=window.location.href;kk.copyUrl(e),btf.snackbarShow("<span class='note success'>复制本页地址成功</span>"),RemoveRightMenu()},kk.copyUrl=function(e){$("body").after("<input id='copyVal'></input>");var n=e,t=document.getElementById("copyVal");t.value=n,t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),$("#copyVal").remove()},$("#menu-newwindow").on("click",(function(){window.open(domhref),RemoveRightMenu()})),$("#menu-sharelink").on("click",(function(){domhref?(kk.copyUrl(domhref),btf.snackbarShow("<span class='note success'>复制超链接成功</span>"),RemoveRightMenu()):kk.copyPageUrl()}));