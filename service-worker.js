if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const l=e=>a(e,r),b={module:{uri:r},exports:s,require:l};i[r]=Promise.all(d.map((e=>b[e]||l(e)))).then((e=>(c(...e),s)))}}define(["./workbox-bc63f54e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"957c723b055d5f398488b159cc4550d5"},{url:"about/index.html",revision:"7c2d2111f0a5e2e7fa39b18085ada3a6"},{url:"archives/2022/02/index.html",revision:"30d1a0b3141567396597c70fe0771e38"},{url:"archives/2022/03/index.html",revision:"f0638ae05c6bcbbbc64ec8776f02bb3d"},{url:"archives/2022/04/index.html",revision:"e1f670c2c864870b54ad6c8e48adbde3"},{url:"archives/2022/05/index.html",revision:"c57456c0f5bc9c2e9f0d7f97802a9d6b"},{url:"archives/2022/index.html",revision:"9b8b6a19bdf7af78ed22552299d0e676"},{url:"archives/2022/page/2/index.html",revision:"338a31f1452582f605c183cad81f7c7c"},{url:"archives/index.html",revision:"f04c35808b9d1c22c3a5505fb6c4a354"},{url:"archives/page/2/index.html",revision:"2d18beb2d4bb721ad4608f5cf53b94b8"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"ba9706f108902388a2660dfe3ca4d15c"},{url:"categories/index.html",revision:"0235fe0a53e82a16cd3a63d204f55fea"},{url:"cc/index.html",revision:"4bead66df6e30d1d3231af8b4f092d8b"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"13af593ad81bf3be9e4341709be6c8a3"},{url:"gallery/2021/index.html",revision:"bca40a4601b4b404c7a5607cf7b312e6"},{url:"gallery/bing/index.html",revision:"72b527747b0eecef27fac597fbea501d"},{url:"gallery/index.html",revision:"7ace06a1b91319b09fb37c734aa3bcbb"},{url:"gallery/snap/index.html",revision:"771c7769fd48ac090961516e9756e520"},{url:"games/index.html",revision:"78ec47e152a59a78f4e0e3358df8550e"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"32e103d7c35795a986223d810dcb2e17"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"804f9440e28062a5e4368130aa9fce6c"},{url:"musics/index.html",revision:"716b0dfd955ec29a5465c423db3f9fc6"},{url:"p/13bd.html",revision:"c521a3c2e7231dd80a6c76ba5f45f865"},{url:"p/1849.html",revision:"ee46c2418817f6feeda4051cce4261d1"},{url:"p/34c.html",revision:"5aa298ad020a12a618653bf91ed004e9"},{url:"p/439d.html",revision:"6100a3519fc4f5cf9e348e61921f9922"},{url:"p/799e.html",revision:"c6000c9cc8878157367be1970d99d787"},{url:"p/a4f.html",revision:"0417126ac8897ab0a609e062bba941ca"},{url:"p/a5af.html",revision:"09c17b36639024d0acbbca154dec317e"},{url:"p/a7fa.html",revision:"3c9b07ad69c6267de7539594ad15aa94"},{url:"p/a8f2.html",revision:"4e72507d6dd6c9a7b99be8efbbe3ab55"},{url:"p/a95e.html",revision:"2b5560f6587dd62021c7faa67c846289"},{url:"p/aa4a.html",revision:"a01d89ef99ee8a34cb16091f6cac2dd2"},{url:"p/c99d.html",revision:"555647311a36097c85cbcda1dacb6c55"},{url:"p/cb20.html",revision:"20225b3c1ba6e106dbc3d7a5e6a27ebf"},{url:"p/dc3a.html",revision:"ae68008ff17bbfc6e83e5e6a13345d31"},{url:"page/2/index.html",revision:"7f702bfb426f427d9eccea7c8614e29f"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"983f64d7137d734e225ac492f97dd561"},{url:"tags/GithubAction/index.html",revision:"03755c8e563396a6d7e94a5a0ddb5502"},{url:"tags/index.html",revision:"ed5235b761c7f5b33e845b399cac4243"},{url:"tags/OneDrive/index.html",revision:"ca037a6b153ccd76417b909c1f03b17d"},{url:"tags/Replit/index.html",revision:"be941ddc5ad3a8d63f6a7dc6378a2af1"},{url:"tags/SSH/index.html",revision:"f69f674279d03bdfc979eba0899b6b7d"},{url:"tags/ZeroTier/index.html",revision:"573e72ab7737f1539b6be173138549b2"},{url:"tags/作业/index.html",revision:"cc45389cd58e73d77bdcdb15de083d2a"},{url:"tags/图床/index.html",revision:"c33e51a8cb3aed1d96ed1be40537fb2e"},{url:"tags/教程/index.html",revision:"34a892285e18d85ba7574a6ed4ebfea8"},{url:"tags/日常/index.html",revision:"8e8bc0480a5bd07faec74140b992068a"},{url:"tags/毕设/index.html",revision:"d6f95e63bdbd42340023ce43b406febe"},{url:"tags/流水账/index.html",revision:"54619f8ff57aa4a77670dc4ceaa4413c"},{url:"tags/白嫖/index.html",revision:"4e43ba32fa50752c37890a7303f63978"},{url:"tags/网盘/index.html",revision:"4bc2b0834354fdff9307f7e39d7bdbd4"},{url:"tags/自动部署/index.html",revision:"8403ac51db0b797630d68514dca07e06"},{url:"tags/记录/index.html",revision:"1408f5ec856935afebf35bd1947ca58b"},{url:"tags/设计/index.html",revision:"3f3745061ad52865f8e9c72dac51a114"},{url:"todo/index.html",revision:"85f3f3c4b6c8c7b839e64eea0326c927"}],{})}));
//# sourceMappingURL=service-worker.js.map
