if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),l={module:{uri:r},exports:f,require:s};i[r]=Promise.all(c.map((e=>l[e]||s(e)))).then((e=>(a(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4eef573f0d1f6f1054ec6cc6110e9297"},{url:"about/index.html",revision:"a17e79cf551d055edc757b1a21622a55"},{url:"archives/2022/02/index.html",revision:"57631dba8f0619970675dc39aa92dc78"},{url:"archives/2022/03/index.html",revision:"cbbaae486a08b41bae2769d92381d218"},{url:"archives/2022/04/index.html",revision:"439edcdf16d08743001eac4ad770eb8b"},{url:"archives/2022/05/index.html",revision:"ac454fb1b29bc90c8cd8af98dc98a876"},{url:"archives/2022/06/index.html",revision:"3871230405bc5fd5d37bfb4af6ecdae3"},{url:"archives/2022/07/index.html",revision:"1a612675a49b97f93f898ca4c36273d6"},{url:"archives/2022/08/index.html",revision:"acb1e2e6d8e3e3a0dde406927ced724f"},{url:"archives/2022/index.html",revision:"86e2410c5bd2d7a6d903395d9fac0f02"},{url:"archives/2022/page/2/index.html",revision:"f24a16709f0b14a6c2a8cd85795ecc38"},{url:"archives/2022/page/3/index.html",revision:"da0eb902a5d300c8697c40c40598ebca"},{url:"archives/index.html",revision:"2803d155d0f37427fc8c7cef14824154"},{url:"archives/page/2/index.html",revision:"b5a68f3ceb773e567db09d206e66130c"},{url:"archives/page/3/index.html",revision:"01338a88aaf5440f0184191198b3a6cd"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"12fde0cbfbb2b413cb2896838a9a6eb7"},{url:"categories/index.html",revision:"10900f3feefde129c5880a25f905935a"},{url:"cc/index.html",revision:"0f3ca2b3ccd0b7486c30da4561c40227"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"09a09f57d86bf8630e3c72a8fab9be66"},{url:"gallery/2021/index.html",revision:"c11d29f0717619e40b108a92f1d78601"},{url:"gallery/bing/index.html",revision:"450434cb29e13e132de9268b39048a06"},{url:"gallery/index.html",revision:"e62c2cd6064c54d8a8332c3a11b81461"},{url:"gallery/snap/index.html",revision:"74c56b0c44b605817b9a2858197cdf5d"},{url:"games/index.html",revision:"e418f57b49332d8161cffe3e8f0e9fb5"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"7f717ebfe7db43e446679b4e645b4e15"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"1caf8acad5d3ea7325262272b09ade2e"},{url:"musics/index.html",revision:"d85134b58c7fc67df993dd8963721ccc"},{url:"news/index.html",revision:"8a33cc4f85fd9ad0b5e83e29eaec7594"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"4d0040f83af49375093af5683d66297c"},{url:"p/13bd.html",revision:"e502bf50e89c887ee7927268b0c69cca"},{url:"p/13d3.html",revision:"19971e8d3f92506a2766eb426f732e21"},{url:"p/15af.html",revision:"3471cf247a424f0ed142de5998f9293a"},{url:"p/1849.html",revision:"98c22931bdebee321fd8a79e2e0c5b5c"},{url:"p/3412.html",revision:"d3c5c1667c4f536397e628566d50fce3"},{url:"p/34c.html",revision:"68f1cebf2dcb602c6e9b6191ef396165"},{url:"p/439d.html",revision:"35fd0e95e069db17bb07cd36a6685290"},{url:"p/799e.html",revision:"2047283ad45f0df3ca494fde3f8c72ac"},{url:"p/7e53.html",revision:"f02c343bf02793d01a032426241a0b12"},{url:"p/98.html",revision:"1fb372094af62d88354e587d703087b5"},{url:"p/a4f.html",revision:"cd58ccd6f2a39b045840f108aa59a53f"},{url:"p/a5af.html",revision:"f8927a27b3b3f5f20362b5c10bdd17fe"},{url:"p/a7fa.html",revision:"4b77ed7ac8deeafb579389eea08bd36e"},{url:"p/a8f2.html",revision:"b6250f50307db13f58c2ec45e40b75e2"},{url:"p/a95e.html",revision:"4f445d97c0264423181230e63c3d7324"},{url:"p/aa4a.html",revision:"c0fa47a054d4d7506e8794a9b7776dcc"},{url:"p/b147.html",revision:"fbfe6160d0ecc7d65623d47c3098f7af"},{url:"p/c99d.html",revision:"e69799e93f345ff010f331429e09169d"},{url:"p/cb20.html",revision:"5c3d362dd54766ead1379415316e28c9"},{url:"p/dc3a.html",revision:"70b4bd4bf56c85ab0fdd9ed401d6a189"},{url:"p/f0c0.html",revision:"a606592b69cb1516f1312dc54e1a7d60"},{url:"page/2/index.html",revision:"60c4aee2ef7bfc52414659807a97f870"},{url:"page/3/index.html",revision:"07dc4b817a84a6b84e07785cddee6f36"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"bc39eb5131edd5834c237a576b0f5ca7"},{url:"tags/Azure/index.html",revision:"18693ca032bae0e25700bcb59e927537"},{url:"tags/Docker/index.html",revision:"a4788f932ac7a1c260d4eff44194e0a4"},{url:"tags/Github/index.html",revision:"66f3c2058355c9b7ec665243da57bf58"},{url:"tags/GithubAction/index.html",revision:"5ca260c6c15fd966d2a60ff30cc3375d"},{url:"tags/index.html",revision:"ce125bd728cb831541c93c564b8839b2"},{url:"tags/OneDrive/index.html",revision:"31c4ffae8e7aa598bf440b6fc6b4f1eb"},{url:"tags/Replit/index.html",revision:"2330f19381c9cd48e6ca049c8734d8c2"},{url:"tags/SSH/index.html",revision:"be447dda377a77b225bea9f98daf5534"},{url:"tags/ZeroTier/index.html",revision:"1fe9512a687f41ac476cbe0136c47bf1"},{url:"tags/作业/index.html",revision:"a0f8b602420c146fcec767f1db6138ee"},{url:"tags/图床/index.html",revision:"e281335f761cc6ec4b2e825900f9f990"},{url:"tags/教程/index.html",revision:"2e0e58916fe0805f4356a50a3e4f03ef"},{url:"tags/教程/page/2/index.html",revision:"2af24f4dc623f5232b60965a277d92f8"},{url:"tags/日常/index.html",revision:"98533f437bdd078468bfa28a7e088ef7"},{url:"tags/毕设/index.html",revision:"658d08273a13846022e810790d77c0ee"},{url:"tags/流水账/index.html",revision:"d3c268e07cc39221776e690245bd9fbc"},{url:"tags/白嫖/index.html",revision:"ef5c743abb38affe1ac625babe38463f"},{url:"tags/白嫖/page/2/index.html",revision:"ed260175b0977bd6e184510127519c95"},{url:"tags/知乎/index.html",revision:"653704f98461d1ba4263953efcbe82de"},{url:"tags/网盘/index.html",revision:"5b9a23abd80c6f5d84cd285d048b39c0"},{url:"tags/自动部署/index.html",revision:"4e8826cefc04ec81ead7ad2aad121780"},{url:"tags/记录/index.html",revision:"3e8f797ce918b21f9e5ff8b78645dfd6"},{url:"tags/设计/index.html",revision:"4e296c07e0dd33cacba2d46e81759ce4"},{url:"tags/转载/index.html",revision:"5a96ecea1d888c90aa569a2f814801b2"},{url:"todo/index.html",revision:"b7638b3bd5dd78ccfb3183e33c32f595"}],{})}));
//# sourceMappingURL=service-worker.js.map
