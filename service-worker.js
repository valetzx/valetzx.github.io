if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const s=e=>d(e,f),l={module:{uri:f},exports:c,require:s};i[f]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b5da8c394b3c6da7f12c2824635b69cf"},{url:"about/index.html",revision:"f2674fd80bf946555c67ecab71d702c7"},{url:"archives/2022/02/index.html",revision:"21e3d88f0b0c0eb15fd3f203f86f75eb"},{url:"archives/2022/03/index.html",revision:"c6919ae3656201a9ae2d9ab207e41211"},{url:"archives/2022/04/index.html",revision:"f6478a1bc6ab14ef11c9061bb8b674f6"},{url:"archives/2022/05/index.html",revision:"79f5892aac8804e90a3b42fd98ec9769"},{url:"archives/2022/06/index.html",revision:"3b4996fa0e1ac4f5b6e6a0376a728f3c"},{url:"archives/2022/07/index.html",revision:"b2c2cf901589a740d2cc8a1432fcb938"},{url:"archives/2022/08/index.html",revision:"f1220b144d3c18f55135704ab103df83"},{url:"archives/2022/index.html",revision:"7909fc233ef32a53168fd49be6f4f5f6"},{url:"archives/2022/page/2/index.html",revision:"509aaef68fc0b45f8c93d198c711f6d1"},{url:"archives/2022/page/3/index.html",revision:"6488697fee05326a3a1f1a9acaeacf87"},{url:"archives/index.html",revision:"e1ac0dd444c96a45bd2468a5b7114f8e"},{url:"archives/page/2/index.html",revision:"674dc2ba63ec208a725c35917de9a642"},{url:"archives/page/3/index.html",revision:"c3add25288e48f1723ce2808d8fe46ae"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"c2952fe02d96c84ce754d20351b74732"},{url:"categories/index.html",revision:"90588eafdee7a6ae755b2b322deee3ce"},{url:"cc/index.html",revision:"bca33e64e2dfbdddc4b5e9362d50bf90"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"2b660da0fd767c6adbb96eccadb9912b"},{url:"gallery/2021/index.html",revision:"32b6a5525953169621eae3bf5ef60588"},{url:"gallery/bing/index.html",revision:"5389f255ffcc787d742ce0e760fe39a1"},{url:"gallery/index.html",revision:"ef651d06d1a30f405f537d16a0f76f66"},{url:"gallery/snap/index.html",revision:"f225c180a127e5d775e9aae8656ce4a0"},{url:"games/index.html",revision:"9815d4ca1c5de28f69be8cfe96d5cda8"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"802f46cf0124b560baef418eef22e629"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"643bdbf0f12dd341cfdf38ad84bf1dd8"},{url:"musics/index.html",revision:"5ecd01ddc62be79d33e2a474d637d81c"},{url:"news/index.html",revision:"9c4679a5196986294a8cc5fa66f2bf68"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"07715a9c157ab963a7e8c485eeae23e1"},{url:"p/13bd.html",revision:"ccec00507989b45f50d3d282391250cc"},{url:"p/13d3.html",revision:"e88d8752b434851ab9389e345f10378e"},{url:"p/15af.html",revision:"523a50a3b9809d258a341b5084a42aa7"},{url:"p/1849.html",revision:"154b34e8d4cd4c634dd1a338c65da40f"},{url:"p/3412.html",revision:"41cfda043333c8684a0714b88de92b7f"},{url:"p/34c.html",revision:"85fe18352b7951767f274f9fbcff3e7d"},{url:"p/439d.html",revision:"afbf3387d08e132274832fa6d1d96737"},{url:"p/799e.html",revision:"0e45319d3808a4ccc3e0f71f6d51d21d"},{url:"p/7e53.html",revision:"f5fb3b716a157b8ad19414ca9472a23b"},{url:"p/98.html",revision:"bb82b00e6df3c8f520913af9ec44e175"},{url:"p/a4f.html",revision:"bfde2f1ede5c2ee7e5d0da60abac8307"},{url:"p/a5af.html",revision:"67abf476806f84ed6bbcc75733b5ae08"},{url:"p/a7fa.html",revision:"fccf7ae0861e0061437df4c5d0d5b24b"},{url:"p/a8f2.html",revision:"e894fa84e7323c7e6bc83bd6f08b9413"},{url:"p/a95e.html",revision:"e5edda9d57c0ed6a6409be3e6a328e7a"},{url:"p/aa4a.html",revision:"de45405618675e7cdf7094316f15eecf"},{url:"p/b147.html",revision:"ed761b325007e21a958eeec6f35edd1f"},{url:"p/c99d.html",revision:"3e064ce8eae1209c72c26e2f311a8bdc"},{url:"p/cb20.html",revision:"780455920a774a5c94139e87ba8b4b6c"},{url:"p/dc3a.html",revision:"3d0824633e3413db0f7e0d4f8dbf9352"},{url:"p/f0c0.html",revision:"2808227529f3b238eebf156cb8e8ebda"},{url:"page/2/index.html",revision:"f39dad07dfb991a5d0c667a8a27f095e"},{url:"page/3/index.html",revision:"7e348cd0f24500465f0a9ccc0b1f4c06"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"2f9625953b0faa9a97a41d24200ad0b2"},{url:"tags/Azure/index.html",revision:"421d41e2d5a7b28c2869a53b361a2255"},{url:"tags/Docker/index.html",revision:"50cc2e87417268c6ab05718e585a585d"},{url:"tags/Github/index.html",revision:"503725ac9d7234fd39bb0b4fe6fab852"},{url:"tags/GithubAction/index.html",revision:"6b491befa0321809e825e8fc02d70e2e"},{url:"tags/index.html",revision:"1ed8779f8ee8f8e82d2e80099f6294c4"},{url:"tags/OneDrive/index.html",revision:"071477db7eb81a223df37085622b6305"},{url:"tags/Replit/index.html",revision:"bfcefe5f8530801f1f2a983118b34dba"},{url:"tags/SSH/index.html",revision:"57d062c2592784951533307fc364f111"},{url:"tags/ZeroTier/index.html",revision:"2bc496c01dfa03a98dbb5b269efb3b76"},{url:"tags/作业/index.html",revision:"fe4c6e6e2f5c6e41d4385397d51b8f96"},{url:"tags/图床/index.html",revision:"24157c3d2339ad05f53125b18150ed5f"},{url:"tags/教程/index.html",revision:"c6753e51056ba906590a5bca5ef0fad8"},{url:"tags/教程/page/2/index.html",revision:"28bd457b51f41d0267ec3f6d5c51a8fa"},{url:"tags/日常/index.html",revision:"eb8ab1201eab5f1756284803cbbf4a9c"},{url:"tags/毕设/index.html",revision:"b98e502b77aac24338af41f4f8908ee2"},{url:"tags/流水账/index.html",revision:"5ff986336df5dbc26f90e6006137ca25"},{url:"tags/白嫖/index.html",revision:"15b55832225789ae46d459588e61aae2"},{url:"tags/白嫖/page/2/index.html",revision:"f17cee611b69c7077be2e6af7ebc880c"},{url:"tags/知乎/index.html",revision:"15a331c9dcb7c7e5ade06f73ebb1dc00"},{url:"tags/网盘/index.html",revision:"0613607d1c61bfae3cb3efa064928990"},{url:"tags/自动部署/index.html",revision:"ae6157aea0ea9cf4795c8f727461a6f6"},{url:"tags/记录/index.html",revision:"cfbcb857f0bcb2abcb2da17b85624d74"},{url:"tags/设计/index.html",revision:"ec3385a9034ff3cb41191bf95e717897"},{url:"tags/转载/index.html",revision:"7697f79592e563a710eb75de89b13166"},{url:"todo/index.html",revision:"1f76090798c2a6d81e99486b7241588a"}],{})}));
//# sourceMappingURL=service-worker.js.map
