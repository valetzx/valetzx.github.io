if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const f=e=>d(e,c),s={module:{uri:c},exports:b,require:f};i[c]=Promise.all(a.map((e=>s[e]||f(e)))).then((e=>(r(...e),b)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"24d3fc3a9307febfad0a73e5bcbb23bb"},{url:"about/index.html",revision:"00830d359823ac65653cd3ebbed83657"},{url:"archives/2022/02/index.html",revision:"d0f7145820b54df73950ef0335c70ae1"},{url:"archives/2022/03/index.html",revision:"2ae077428d71a698eb266b074b6b9769"},{url:"archives/2022/04/index.html",revision:"0ccd5245d79954560a4b4c828bd5d246"},{url:"archives/2022/05/index.html",revision:"63180aa8f30bcccbd739d69ff09bca52"},{url:"archives/2022/06/index.html",revision:"69658a201005ecd88f36bb4501c7cbaa"},{url:"archives/2022/07/index.html",revision:"35be127c5b9bb584940e54c49f33d51b"},{url:"archives/2022/08/index.html",revision:"80bce69d605f8405abdc1f5154a89ba2"},{url:"archives/2022/index.html",revision:"e5f9920b253c85168ded2b730833ec51"},{url:"archives/2022/page/2/index.html",revision:"bc586457be14bbae51105615b36371b8"},{url:"archives/2022/page/3/index.html",revision:"6fb1562f615f037cc2147123d519372e"},{url:"archives/index.html",revision:"7e468c59bd3bac8b034dc708a15df74c"},{url:"archives/page/2/index.html",revision:"7f6c279cb8cd1b42ab68ef73ff9b9343"},{url:"archives/page/3/index.html",revision:"bed6b8ee0b58d91dbfa4d9ae85218731"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"62e56ce475bf2381fdc755ccd69b0f41"},{url:"categories/index.html",revision:"bae230f6d0256176004635654ff13d9c"},{url:"cc/index.html",revision:"8d2e23d8eb07b2d7a8ae7049366f546d"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"2de15a462d5127c864c12435d811c635"},{url:"gallery/2021/index.html",revision:"5ae3e4af52625d645b2a155d9b74e8b9"},{url:"gallery/bing/index.html",revision:"05adee0e38dfb35977092a194208af31"},{url:"gallery/index.html",revision:"e0d18170e956e7db029f2ce064db6b6f"},{url:"gallery/snap/index.html",revision:"95a169d2de46afb647e2377dd5695472"},{url:"games/index.html",revision:"056a18c5ef8c20326d0bcb6150930b97"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"108a1a475c21ef8d8d5e74dd4644902a"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"d38c4a738be87dfcccb2bfabf351577e"},{url:"musics/index.html",revision:"1b06251a83cf918e747fcf391940d5e7"},{url:"news/index.html",revision:"e18b4f6fe067264744fbb98e1e88b655"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"b94c6080e6f43aa0ddabb9308a185b52"},{url:"p/13bd.html",revision:"eb307c6a54767e803d084cabff400e08"},{url:"p/13d3.html",revision:"9f9480c48e2e784f6db51a74632d658d"},{url:"p/15af.html",revision:"e40f6b550650b6a8faef4cf72fc4a68f"},{url:"p/1849.html",revision:"94f8804a79c83c26c90041e6accd149f"},{url:"p/3412.html",revision:"335f7574e35d2c618065c330c5fa76b1"},{url:"p/34c.html",revision:"291b9e62718eaa2470c676daf88a2336"},{url:"p/439d.html",revision:"c4387c507cf0fd3243c8ad0eaf72f954"},{url:"p/799e.html",revision:"055f6213eae99559a120d6e44d2aca06"},{url:"p/7e53.html",revision:"7f0b18946f6d854b58cf9c08813d83bb"},{url:"p/98.html",revision:"3304166725428759147ecab72b31a289"},{url:"p/a4f.html",revision:"3796cc44810a3cda202b5bf8e5a0e495"},{url:"p/a5af.html",revision:"9509fc1611d293486c7fe34733c1f863"},{url:"p/a7fa.html",revision:"cbb259f7d6ef27e41a59c49c4c1c77bf"},{url:"p/a8f2.html",revision:"c95db4ccdbd791d8fbf88058b5f6d98b"},{url:"p/a95e.html",revision:"c77cb986d9ec62118190c5d47806213c"},{url:"p/aa4a.html",revision:"369963866a304d824b43bf9e4eb2f812"},{url:"p/b147.html",revision:"1af471b2fd254d5dd96a2900e137859e"},{url:"p/c99d.html",revision:"99f3b19dff16348d0d1cd73fb0a38f9e"},{url:"p/cb20.html",revision:"c1656d6ad27e73ce14a335bfc8f1d480"},{url:"p/dc3a.html",revision:"31b9169ab90f8b42e3bf595266d7c172"},{url:"p/f0c0.html",revision:"be3bbeefb23f44adf5d6938aedfc51dd"},{url:"page/2/index.html",revision:"7345eac0e6edb9db7f873073a73c6247"},{url:"page/3/index.html",revision:"610469bb25074ee760ed159b114e2090"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"e427ab77b0ae6caf9d221f1923d134c1"},{url:"tags/Azure/index.html",revision:"1fbf1e3d3850931b81e086bb28b8ff99"},{url:"tags/Docker/index.html",revision:"15511192f1986d350a8f4f5e8fab7234"},{url:"tags/Github/index.html",revision:"78c56c64f63017ac9da4f2554a8b3fdb"},{url:"tags/GithubAction/index.html",revision:"d92d24fb806a67f23d204108ac97c229"},{url:"tags/index.html",revision:"5a7c737529cc3a7cdc7f95090b22e534"},{url:"tags/OneDrive/index.html",revision:"1fc9d16afb54e970f0675398e439453f"},{url:"tags/Replit/index.html",revision:"e841490514e8de136d9925401aaa9412"},{url:"tags/SSH/index.html",revision:"83ba80b468661b88e0e718fb4c8e0b39"},{url:"tags/ZeroTier/index.html",revision:"db54888a055a12d828b3ca3e83551e30"},{url:"tags/作业/index.html",revision:"c825c52e3b90172a1a52aaeee780ec38"},{url:"tags/图床/index.html",revision:"f9becb4e5ef305cdeaad8d22a543c364"},{url:"tags/教程/index.html",revision:"b6589a5b3a9aac1b5c0ad8c33a7e75b1"},{url:"tags/教程/page/2/index.html",revision:"47ea074f3ae84da35e9ad15586865917"},{url:"tags/日常/index.html",revision:"4e49c5258cf616bb577227927bcfc525"},{url:"tags/毕设/index.html",revision:"abfb41fe16a3db7abba7d7f4316287ae"},{url:"tags/流水账/index.html",revision:"d4c1fb07cb93951f6c2234a0aa9f92cd"},{url:"tags/白嫖/index.html",revision:"7c449c22aed2c45e77fbec457524133f"},{url:"tags/白嫖/page/2/index.html",revision:"81cb442935e4d243cd54b8e61f1eac13"},{url:"tags/知乎/index.html",revision:"79c7ac01c2cc48aebf93cd189f02dfa2"},{url:"tags/网盘/index.html",revision:"64b7475bee6049bee73a22701cbae721"},{url:"tags/自动部署/index.html",revision:"aab7b70d32d489b788d3fbb03cec8b9d"},{url:"tags/记录/index.html",revision:"a7738cfe1db6f2dddb3e0f45d5ba722b"},{url:"tags/设计/index.html",revision:"ae4fd6276c01fb5afff07c5345e2b847"},{url:"tags/转载/index.html",revision:"741d79a63cac97078811f548ee8fcf4e"},{url:"todo/index.html",revision:"9d09961d8abceccd12b356b803aceadf"}],{})}));
//# sourceMappingURL=service-worker.js.map
