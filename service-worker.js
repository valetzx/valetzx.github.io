if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const s=e=>d(e,c),f={module:{uri:c},exports:b,require:s};i[c]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(r(...e),b)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bd52c7504d0ee3cd959db429b93ee9b2"},{url:"about/index.html",revision:"fc5896e067ec987ef0146c6475af66e6"},{url:"archives/2022/02/index.html",revision:"ad3d557db6ea505b6dce1d2dc8f46e23"},{url:"archives/2022/03/index.html",revision:"617fbe444e63652c4bd1ee5e66147028"},{url:"archives/2022/04/index.html",revision:"302cd59b56c28272d2f4c39fa3fc3a54"},{url:"archives/2022/05/index.html",revision:"c80a89fe1794ce25873efa8a0f3f472c"},{url:"archives/2022/index.html",revision:"05bb54aa4d3545dfad8ae6cd1b65171f"},{url:"archives/2022/page/2/index.html",revision:"5ece58e7b9d17fa97cf3cc3ddbdf88db"},{url:"archives/index.html",revision:"e07108e48fa546c018bfaa9105c146c8"},{url:"archives/page/2/index.html",revision:"5f090f879de752dff0dd5981f25447bb"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"b8fa64ca98a11baad0b5f87bab9a3950"},{url:"categories/index.html",revision:"611b9ab79f949d96fc3fda951152cd47"},{url:"cc/index.html",revision:"1ffe235e548a51329d40d074c1f468c7"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"49827542eaffb2ee261d6b46a006be56"},{url:"gallery/2021/index.html",revision:"c1330daaa7a1402f92a0e902ff2983d8"},{url:"gallery/bing/index.html",revision:"fd3b534d5572b82535e0f0db45f887a1"},{url:"gallery/index.html",revision:"78d716d22e3c9a1090eae5463787682a"},{url:"gallery/snap/index.html",revision:"cf032ce03b9fd0d03bbce6a1124d7eeb"},{url:"games/index.html",revision:"471ebb60a2819da49167e568f37aca4e"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"c9ba5fc55d3d40a56d71c48861fe8d2b"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"381b8f91a953cbc53797199d516453aa"},{url:"musics/index.html",revision:"bb0b8cc7a346db083ebfb3a5b750a19d"},{url:"p/13bd.html",revision:"ae199442561ec9b450c5c99450dd2a53"},{url:"p/1849.html",revision:"87ad2f598d2f328e004387eb5e28d254"},{url:"p/34c.html",revision:"8e92f5ffed8948e3e281cacb5a6d9c9b"},{url:"p/439d.html",revision:"2c3d08ab53a64783fc0f61d6fbcf959c"},{url:"p/799e.html",revision:"03adae9702ad533b356dc124ad873374"},{url:"p/a4f.html",revision:"858285e66774785958b527e79606ff2e"},{url:"p/a5af.html",revision:"80097117b50e95ab583da03aa7709aab"},{url:"p/a7fa.html",revision:"7caab29852bf22f04944c1c5fb92c69a"},{url:"p/a8f2.html",revision:"367acdc171131cb65e23d26b7782ddf4"},{url:"p/a95e.html",revision:"16898949c5698d4f7769cd981c93b1cd"},{url:"p/aa4a.html",revision:"8e4d1a5803b0dd6a12e3c4b0fdf86bbb"},{url:"p/b147.html",revision:"7012942b763974c165966bb82fb63070"},{url:"p/c99d.html",revision:"40a68aaaf9aabeb91f25f3f5db9e0178"},{url:"p/cb20.html",revision:"0dd20536fb0daa72b30243782211bced"},{url:"p/dc3a.html",revision:"505cef83cc5b02591000fbabe5a46d00"},{url:"page/2/index.html",revision:"91738bbf2d257580cca081d0f1ba8cb6"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"860044e30f70bfb2f9463803eba35fad"},{url:"tags/GithubAction/index.html",revision:"b044c54186afdc596633f8f2203085fe"},{url:"tags/index.html",revision:"fc8439638d1e0e84049632b03136f62c"},{url:"tags/OneDrive/index.html",revision:"424379ce2391fa808febee3156ff1b86"},{url:"tags/Replit/index.html",revision:"36d142a575a1c237c232a3389b2e5d18"},{url:"tags/SSH/index.html",revision:"21ae172d2e15f65edb4b9a1ba4eb0b34"},{url:"tags/ZeroTier/index.html",revision:"77c2bd69d33817464454aa74e364fe33"},{url:"tags/作业/index.html",revision:"c76742bdda3be0ba3ceb570b03937863"},{url:"tags/图床/index.html",revision:"2e54bf02385da67d64e1bd5e81d7e2ae"},{url:"tags/教程/index.html",revision:"98f815377cc35f559627f9422f3e9c55"},{url:"tags/日常/index.html",revision:"c25e90c49f72255dc599cf09eaf68430"},{url:"tags/毕设/index.html",revision:"44a087698ee73160803f3877adf87368"},{url:"tags/流水账/index.html",revision:"878810c095ea4b7f4af434351f4db9d7"},{url:"tags/白嫖/index.html",revision:"41e29812a5313c115bb65911bdb1f008"},{url:"tags/知乎/index.html",revision:"74f74b9bf5021795e3110bfdb5c12699"},{url:"tags/网盘/index.html",revision:"fe3cdd23e832317b891912aebea3b167"},{url:"tags/自动部署/index.html",revision:"87ce09e4b0cc72892581275b8ab4802f"},{url:"tags/记录/index.html",revision:"d7dca8ef81e30fd79be97dc4281b2459"},{url:"tags/设计/index.html",revision:"6bc821ba1c4c7ca8393ce9ce775b656c"},{url:"tags/转载/index.html",revision:"80e40dca27316017721b0b02f8045e38"},{url:"todo/index.html",revision:"cabc49b78dc9292418617eee4682b5e1"}],{})}));
//# sourceMappingURL=service-worker.js.map
