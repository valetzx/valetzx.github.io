if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const f=e=>d(e,c),l={module:{uri:c},exports:s,require:f};i[c]=Promise.all(a.map((e=>l[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6246be2084abe8f09620ac75f3355555"},{url:"about/index.html",revision:"d2af29218b33b0c9ee0f6c88c1bffc21"},{url:"archives/2022/02/index.html",revision:"cd9f9c701e0f26a22ed54ec49dc018d9"},{url:"archives/2022/03/index.html",revision:"a7a98760cf70fc19dc92444cf9e474f8"},{url:"archives/2022/04/index.html",revision:"29bdb680131c29aeb2a7d7357c556de4"},{url:"archives/2022/05/index.html",revision:"8bde53f09244802ef3e236b1a94bef8d"},{url:"archives/2022/06/index.html",revision:"8f55a651620164733cc95f586a7bc884"},{url:"archives/2022/07/index.html",revision:"7a6c3e31ab064ba2583583ce5e403f10"},{url:"archives/2022/index.html",revision:"1a93f62e65afc764d581c00ea0c1ba03"},{url:"archives/2022/page/2/index.html",revision:"ece6ecdace89c7272e81ed091732affb"},{url:"archives/index.html",revision:"b1cea61f7c6413fd52a0eeff68af5781"},{url:"archives/page/2/index.html",revision:"3f3522aee26185d64ba10d3b4c77a34d"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"2a5e5d9c6159aa01078ec460d4d93133"},{url:"categories/index.html",revision:"aa46fb3b2f2738dd0a604fa34e0c2a2c"},{url:"cc/index.html",revision:"8ef2ac2709c894f1480a74e69e3eff32"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"b02623f3bbcc761e61624289c193bb32"},{url:"gallery/2021/index.html",revision:"cd911ee14ed2a3407fe1a07b6d5f465d"},{url:"gallery/bing/index.html",revision:"839109a3d796be59603ddbefeb2e9602"},{url:"gallery/index.html",revision:"f1e7e185638040cf594dccbf0698b7bc"},{url:"gallery/snap/index.html",revision:"5a0fb132f987d06c616c38eaa4cc6b32"},{url:"games/index.html",revision:"4003a43b88bd3d0a3b38e993e25aabf9"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"a57d9dca5ad0687ac86cc894bbcb7198"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"0a2362f2fe477208fcce1243648a0202"},{url:"musics/index.html",revision:"2c5a54162d0689edc1893ce1de449e06"},{url:"news/index.html",revision:"a2ec41420dfc4542f18aac7929c528c5"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"e215851bcfb18ed66a73d71601cf1057"},{url:"p/13bd.html",revision:"34fdb3747dc43526d5ec5d7a9bc14eda"},{url:"p/15af.html",revision:"41e0afaa2d7dc4effc0a6ae0b175074c"},{url:"p/1849.html",revision:"136d2596d5824b23546695b4ac3dea39"},{url:"p/3412.html",revision:"10eace521b728a14456f44f6d0efe8a2"},{url:"p/34c.html",revision:"d623abf58d7dee76a01c947a909798f5"},{url:"p/439d.html",revision:"f80820680e79c66b4cafe9af868dda79"},{url:"p/799e.html",revision:"037d83a29e9ac953d9d1d6f9ec3da84d"},{url:"p/7e53.html",revision:"7df8a82f4e07b8c784a3388a831b24b5"},{url:"p/98.html",revision:"9471ddf208e45a96f0cd3fbe157e23f3"},{url:"p/a4f.html",revision:"9f89e7c2a7d59930f70c84b98d898438"},{url:"p/a5af.html",revision:"d521624e9f9515b941141205dbdf1552"},{url:"p/a7fa.html",revision:"aaf03f61798b479548318990aede4d3b"},{url:"p/a8f2.html",revision:"d6938ec690dc238237c8ddfd7f7b136e"},{url:"p/a95e.html",revision:"196749d3eadd23f7aa6a07ad4d6c8345"},{url:"p/aa4a.html",revision:"bc9708efea92023bd63c38250708018c"},{url:"p/b147.html",revision:"54a0ad934c6d3c1436e1291cc6aacb1c"},{url:"p/c99d.html",revision:"6c90ef987d8685f9a4fa47d161b83671"},{url:"p/cb20.html",revision:"cfade0db00b1c91ca28b51a6bb8e0840"},{url:"p/dc3a.html",revision:"e6823d23bc7e982703d9cd962663df15"},{url:"p/f0c0.html",revision:"92d364f711eb28085039478169ce4ba7"},{url:"page/2/index.html",revision:"0413385c8dd389105e89d06b4dcb20d9"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"0b1b0f43ec6ecf0fd3e6a94e36f9511b"},{url:"tags/Azure/index.html",revision:"ca717df836e340074e169e3a920e4bdd"},{url:"tags/Docker/index.html",revision:"da49544af5c5a3ac8f7986a639b6a2a8"},{url:"tags/Github/index.html",revision:"d4e4e3e16011e720fa9620e721bc6e6f"},{url:"tags/GithubAction/index.html",revision:"06e8add4928dd8caeb7d4431f204f213"},{url:"tags/index.html",revision:"4e1c52755b47ad7c03109984577339cd"},{url:"tags/OneDrive/index.html",revision:"72e894aa9fa003caa5b801c5a46ab2fe"},{url:"tags/Replit/index.html",revision:"fd341036e775d463c8148f37718396f7"},{url:"tags/SSH/index.html",revision:"1536dd67c4b87b693bee6ca3169c5202"},{url:"tags/ZeroTier/index.html",revision:"89560e5a8edaab02f68d516b2b962b51"},{url:"tags/作业/index.html",revision:"5400849909e67b9a235688af1d534337"},{url:"tags/图床/index.html",revision:"6c785f51ffe0fc2fc0239f90b6187625"},{url:"tags/教程/index.html",revision:"25c0814f2c9839efa08b66ea30c52615"},{url:"tags/教程/page/2/index.html",revision:"8e8c7d5402d2f54c1d12cc79c9b4dfbd"},{url:"tags/日常/index.html",revision:"4e92c69bf4363884e45e0119a25cbd85"},{url:"tags/毕设/index.html",revision:"9344b910ee9d0b8c11ebcf77a6abb7d3"},{url:"tags/流水账/index.html",revision:"63c35492342b5de52140ff323bf03383"},{url:"tags/白嫖/index.html",revision:"eb2e8164eb2d6f1000ee12a5a601ed09"},{url:"tags/白嫖/page/2/index.html",revision:"870a974a7fc2087e3de5fd509ed1b148"},{url:"tags/知乎/index.html",revision:"e57b74af76272a020213573069d70fc5"},{url:"tags/网盘/index.html",revision:"2f22768eafb9b51c332e9c22203dc64e"},{url:"tags/自动部署/index.html",revision:"a87a52a9ae72dfdd2671830bbfba74d1"},{url:"tags/记录/index.html",revision:"2979f7d17279121e4bd95977003602a4"},{url:"tags/设计/index.html",revision:"232bba4dcf988240d9c5ee2cd92118dd"},{url:"tags/转载/index.html",revision:"988a07bdd97112eb073e414839dd2afa"},{url:"todo/index.html",revision:"2ed8b15541403393e884cd9239ab915c"}],{})}));
//# sourceMappingURL=service-worker.js.map
