if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const s=e=>a(e,f),l={module:{uri:f},exports:c,require:s};i[f]=Promise.all(d.map((e=>l[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"313067ec6473757525f2540f032d1b9b"},{url:"about/index.html",revision:"2dd57401ed9931a40d7b4cda2ac530a0"},{url:"archives/2022/02/index.html",revision:"f391b977002f70ee14cc1e9318d61183"},{url:"archives/2022/03/index.html",revision:"f9c12649f45c6d01ba4a41df6f1deeab"},{url:"archives/2022/04/index.html",revision:"6f6102e6b966270a65c9fa4c354863bd"},{url:"archives/2022/05/index.html",revision:"94eb3768694f4b285e061774e17c428d"},{url:"archives/2022/06/index.html",revision:"bf2e96de787f778f9f4bbae72e73ff36"},{url:"archives/2022/07/index.html",revision:"e610942017b23227f952282fe7f7acdf"},{url:"archives/2022/08/index.html",revision:"1eb6923e3e0806aa6a7c5214c60426af"},{url:"archives/2022/index.html",revision:"b91448a357a657a5a13b0db46f480331"},{url:"archives/2022/page/2/index.html",revision:"6eb9197a1cb1e11b20064eb6f8814e05"},{url:"archives/2022/page/3/index.html",revision:"8e3d4b08b23e7c4313209859976c10c2"},{url:"archives/index.html",revision:"7e8478d1ca0d84aa6fb9070dd940fdb8"},{url:"archives/page/2/index.html",revision:"311a5582bc9cf9d0fbebd626aaeed354"},{url:"archives/page/3/index.html",revision:"a3d900e35100a9e59425dbf181d74d5c"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"b4513516e97a7fa8bd7e185cbf0721e1"},{url:"categories/index.html",revision:"074306eec1458cf586eaa91a97398d7a"},{url:"cc/index.html",revision:"cf36acf721c7f003d339c4eb5ee048b2"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"fc19032efc54d51a357a6ff8fcd0d584"},{url:"gallery/2021/index.html",revision:"76f018c39b29815b964b551a74fde32f"},{url:"gallery/bing/index.html",revision:"b675509d10b00b6083aa353ef3595ab1"},{url:"gallery/index.html",revision:"42ee26bd382a32ec1266561bc46272a3"},{url:"gallery/snap/index.html",revision:"9c94b23b11d040d50d1e21394821cb72"},{url:"games/index.html",revision:"958780bb4a3c047cfc1ac293f51aea7e"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"ab1ee7106bd02067f98c40a24bb2a34d"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"d528aea17a6a157f53f9e1d4b252d844"},{url:"musics/index.html",revision:"c9f6700dd1703affbfe820e510ad93d5"},{url:"news/index.html",revision:"61d708799f13b068dd7bac950e0dba92"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"03f9cd443666c43d03e20a79d84dcd17"},{url:"p/13bd.html",revision:"ed73c75e672867b664d153e28b01da78"},{url:"p/13d3.html",revision:"9f62533a216d29a3f228ad2f42f95a2e"},{url:"p/15af.html",revision:"5c8bfdf581f4a201913b5a82f141f95c"},{url:"p/1849.html",revision:"96c666af3c408540f80ef2b721e0eb5c"},{url:"p/3412.html",revision:"52dae3f768a7ab6157c7756815d0196e"},{url:"p/34c.html",revision:"8acc39363622eda5acd328c3c3a661f7"},{url:"p/439d.html",revision:"1ada3217a4fb9776f2dd2b9798acc19a"},{url:"p/799e.html",revision:"ae3d2989fea766ee86d5e5c59b6af850"},{url:"p/7e53.html",revision:"1ca4dd5129e936fc578352ba1889d55b"},{url:"p/98.html",revision:"38db25f9184588a5a09eafdc63e3f757"},{url:"p/a4f.html",revision:"2b90918c1820d1639ea4c3318e240731"},{url:"p/a5af.html",revision:"b1f6a3013f0427d2407e61529278f207"},{url:"p/a7fa.html",revision:"5c18dc1b11963eee596225a5be442a40"},{url:"p/a8f2.html",revision:"a5fa0a2c2e307b61229716cd6d89e506"},{url:"p/a95e.html",revision:"305b3d4b479859e95263e95ff2544add"},{url:"p/aa4a.html",revision:"dd150e751683169d2017cf6e7230fb67"},{url:"p/b147.html",revision:"1c0917e8b647c82d2a12cb671e4061b0"},{url:"p/c99d.html",revision:"a1fc8db8cf3f6efa283ab2bbe6af85d1"},{url:"p/cb20.html",revision:"c3c5444a4782e3d72b39d7b45e21bfba"},{url:"p/dc3a.html",revision:"329e83abf1919ca928a60101ae3f467b"},{url:"p/f0c0.html",revision:"ae715d74d7e10defdce98c8a1e1855eb"},{url:"page/2/index.html",revision:"6292c53719f4484a41570b26446b2bed"},{url:"page/3/index.html",revision:"d6cb7ac9863575f7ab8ca663557082f3"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"26ca458d8f2231ff9e52b22219b9b702"},{url:"tags/Azure/index.html",revision:"6f37757a7c58df2b6e0482ee75d8c92d"},{url:"tags/Docker/index.html",revision:"b5ea5cc6a1172e8e1e1a1f3564af125c"},{url:"tags/Github/index.html",revision:"c7c0a071cfc941786dcfc600d559e40e"},{url:"tags/GithubAction/index.html",revision:"bd17a603e478fd9c44f68f3669d36be3"},{url:"tags/index.html",revision:"44545dc729016e5e6ef775ebf55712cd"},{url:"tags/OneDrive/index.html",revision:"bf8b8e34680ac0a079c3e88fc24c0050"},{url:"tags/Replit/index.html",revision:"17ae60a7a1afa12be997d9b362a3c3e4"},{url:"tags/SSH/index.html",revision:"7d33f772dffa70d8d551dd092f6cfae9"},{url:"tags/ZeroTier/index.html",revision:"fbf3ff7e999a4ed69b62a7beff3681a2"},{url:"tags/作业/index.html",revision:"8512f31b4f7ac3233ba743f9dc72a97d"},{url:"tags/图床/index.html",revision:"e5bd52c7f16c1e7066422b5e1987fc1e"},{url:"tags/教程/index.html",revision:"1d2b1406edfcb49c8516c419e120ec1a"},{url:"tags/教程/page/2/index.html",revision:"145e4a28bdfbd50faeee5f035c322962"},{url:"tags/日常/index.html",revision:"c9bd070ada4e6bf126dab78707f96899"},{url:"tags/毕设/index.html",revision:"2adfff90c65bf4917ba7027b551303e3"},{url:"tags/流水账/index.html",revision:"88e7fedd28039eacdf912b27db7e1a7b"},{url:"tags/白嫖/index.html",revision:"3d6844e48109bf236265fbb4f1b6578b"},{url:"tags/白嫖/page/2/index.html",revision:"118ca9b44beb8fcd73992813fe909cb2"},{url:"tags/知乎/index.html",revision:"023939e9f9a9cdf35055b6d92cfb0ab4"},{url:"tags/网盘/index.html",revision:"250aca1b5396034aa5475207a17ed697"},{url:"tags/自动部署/index.html",revision:"ad4906169a2490177d5f6dfae6350874"},{url:"tags/记录/index.html",revision:"48c533a9c68771d44630065a7ae8eb16"},{url:"tags/设计/index.html",revision:"064332996e2601a5d0fec0f047761035"},{url:"tags/转载/index.html",revision:"be49960149d7d0002f6d7f7d60708279"},{url:"todo/index.html",revision:"6b84f95b758be7ae169e989ac38b12c6"}],{})}));
//# sourceMappingURL=service-worker.js.map
