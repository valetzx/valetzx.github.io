if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),l={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7330538e85e7ef7c1f9a718a44b55315"},{url:"about/index.html",revision:"d533771053c12caf5c0cbf4d9dfc1c73"},{url:"archives/2022/02/index.html",revision:"645be30d8faf126a624d357b57b6d5e6"},{url:"archives/2022/03/index.html",revision:"0cc984cb2e7171fef7d10540faad60c8"},{url:"archives/2022/04/index.html",revision:"70032bcf7abf0b533c9ba46f0f7f39c9"},{url:"archives/2022/05/index.html",revision:"f26fd0e6f6a495d3228ae0972c91c648"},{url:"archives/2022/index.html",revision:"2bbd1d45bce4a7286c9392e74de61ad6"},{url:"archives/2022/page/2/index.html",revision:"ac24d1f7f04dc01af3145cac9c82e8f9"},{url:"archives/index.html",revision:"726814e93d16ad53d1b8b6584f473b92"},{url:"archives/page/2/index.html",revision:"b69b87d7bc0bb75217dda4ed5c933830"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"6a97862f90e5d0892123ea2c0f2a0934"},{url:"categories/index.html",revision:"d2b63c0e5b95e6ebbff503da06283cd7"},{url:"cc/index.html",revision:"7ce68df88c6202de2b4706d1d2e226b9"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"a2bd30a99afb1177d894859b1c82b6ee"},{url:"gallery/2021/index.html",revision:"1227f1a3508e217588cf5636f18070d8"},{url:"gallery/bing/index.html",revision:"ba506e4a5c6a67aaaadefb99fedc64ee"},{url:"gallery/index.html",revision:"7f41b10a5de7644b639c7cb0ca049551"},{url:"gallery/snap/index.html",revision:"4589936ef91d1724a0e2a0cfe790a97e"},{url:"games/index.html",revision:"71013f7429ddf2da88c3eab6c97b6bf9"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"3b95abb4114af1ee0ddfd40b25a7b6ae"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"4ef214dc56e10d0ee7206a391a70c44d"},{url:"musics/index.html",revision:"ac3f1b111d30539f51a5e09562cb906e"},{url:"p/13bd.html",revision:"c33ae8c06f990a1087dac68723c359ec"},{url:"p/1849.html",revision:"727c103a2c8485ff4639d418c0431c18"},{url:"p/34c.html",revision:"44939f89564e36ca0bf6eab53514df48"},{url:"p/439d.html",revision:"55275caa2e5509bebe7e558aebe1c89d"},{url:"p/799e.html",revision:"b9cfc9aaa129c4beac3779617cbc2040"},{url:"p/a4f.html",revision:"21190e49776f86b8dc6b74945e531719"},{url:"p/a5af.html",revision:"ea6ebef876f3f188349ad9a45d882264"},{url:"p/a7fa.html",revision:"6204021875b8cc314c860ebc6c9d2621"},{url:"p/a8f2.html",revision:"abc73d22eb3acb4fe1ba26688620a4f8"},{url:"p/a95e.html",revision:"ce9875f1ab937aa4bfc93a0b5cc39975"},{url:"p/aa4a.html",revision:"a207c205236c0d77465a0620beaa5445"},{url:"p/b147.html",revision:"4648e0e295d0813b47edd18ab6549e87"},{url:"p/c99d.html",revision:"9fe0babb9ac4ac11d904329283dec87c"},{url:"p/cb20.html",revision:"eee2eab2cd3aef135e245fab4a253fa5"},{url:"p/dc3a.html",revision:"c8835286fd34258e93fef01870f0e9e6"},{url:"page/2/index.html",revision:"0c35741648e47b659f649997f8c2c30f"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"f767bfc4220e849062e356bef09cd091"},{url:"tags/GithubAction/index.html",revision:"f911a54477e94a9dfe452bfaca49b015"},{url:"tags/index.html",revision:"e29561a64f90841328ace7b09fdc5275"},{url:"tags/OneDrive/index.html",revision:"a520f4969cf8b90fd178b2dfe4d40e0a"},{url:"tags/Replit/index.html",revision:"1eefde03294d334553143e26e67c4d91"},{url:"tags/SSH/index.html",revision:"608014b614fdc5cca2c9cade849b7ff6"},{url:"tags/ZeroTier/index.html",revision:"48f94ec8bac78fdc67ea06685a67f91d"},{url:"tags/作业/index.html",revision:"693e05dfef9ee940ba9d38cb3ae4f773"},{url:"tags/图床/index.html",revision:"4a1986bd5c2a971f4f2573446f36ded5"},{url:"tags/教程/index.html",revision:"b9fccd0df3b38df7786e5feb9f7feec9"},{url:"tags/日常/index.html",revision:"9b89e6f019dd44d61badeb5436c1849f"},{url:"tags/毕设/index.html",revision:"f28f74d08837b0107ea2db525e5d7862"},{url:"tags/流水账/index.html",revision:"f17a376cd64a76baa7f38340e210c9a0"},{url:"tags/白嫖/index.html",revision:"3075d944cd47903e5d4b179b1c614b79"},{url:"tags/知乎/index.html",revision:"181b7d04d076a2ae9e23170ea42232c2"},{url:"tags/网盘/index.html",revision:"701f56c9cbc3c101d409f54e1c6d5485"},{url:"tags/自动部署/index.html",revision:"b57f078a599a91d236ffbfbb8fce7dd9"},{url:"tags/记录/index.html",revision:"ba52b14e68004c7d61e67fa2400cd664"},{url:"tags/设计/index.html",revision:"cfe7f22d817b237d0deacdbce5e27fb9"},{url:"tags/转载/index.html",revision:"3c016e7bee4dc2ca874f9521cdb9d3f9"},{url:"todo/index.html",revision:"6a381891d7c67da12c990f56234228e6"}],{})}));
//# sourceMappingURL=service-worker.js.map
