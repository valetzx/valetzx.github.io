if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const b=e=>d(e,f),s={module:{uri:f},exports:c,require:b};i[f]=Promise.all(a.map((e=>s[e]||b(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d8ae0c2056a7456c978e2a2f4bb46dbb"},{url:"about/index.html",revision:"36c84b017f856c961f3e9f9c710ed77d"},{url:"archives/2022/02/index.html",revision:"72fd3b060297a69d6d28393626462d93"},{url:"archives/2022/03/index.html",revision:"49c12cb739cc8b4c6e0e617254e1002a"},{url:"archives/2022/04/index.html",revision:"9523306200210a66df0bfbccdbf12faa"},{url:"archives/2022/05/index.html",revision:"96f6f080022bc4b0d226d4fd8302df19"},{url:"archives/2022/06/index.html",revision:"a2f7ca2d8451b4bd6f252ed9b802e4d9"},{url:"archives/2022/07/index.html",revision:"656502bc812c8fe45c8f9c2bd5b9b74d"},{url:"archives/2022/index.html",revision:"2f80e23cf4f2e626c6e701f733d0d1cd"},{url:"archives/2022/page/2/index.html",revision:"9a271b5022e167f4eb8bc90eb5f0f0d9"},{url:"archives/index.html",revision:"19feb50c94418238c2710ad0d18ed1ca"},{url:"archives/page/2/index.html",revision:"64a0a8623f9e4f68b731abc655bbdcbd"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"521acbd9e7d1f01745d021e96f66b114"},{url:"categories/index.html",revision:"f9a293182e232ab2f9e78be43a36a3ea"},{url:"cc/index.html",revision:"b948be078c0f5e9caa94c31eb3d47fd8"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"dd50fbf460a67590e788e86934f514b0"},{url:"gallery/2021/index.html",revision:"c876f3154bd37040e5ae6f642ba2ba3c"},{url:"gallery/bing/index.html",revision:"2b9ed5294d8aa4436d57cb2a51e8c53d"},{url:"gallery/index.html",revision:"12d87745ddd3ac5b164197337a305c46"},{url:"gallery/snap/index.html",revision:"dfd8461b8f44dfe2b542779197b5e571"},{url:"games/index.html",revision:"954ff571d9da091901c956466f00c81c"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"f158a64382a2a6082965221ccc3db2d8"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"33e8a49da589340e2aadc781acc53721"},{url:"musics/index.html",revision:"84e173a68975755bef8455e49dcf0193"},{url:"news/index.html",revision:"679bd93f58cd53c4bb1f6f2ea7469523"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"22907e7d14d3b73c525bf0e0f6f64d80"},{url:"p/13bd.html",revision:"284963082f5b374786fbf82dbd1c2872"},{url:"p/15af.html",revision:"cdb38cacc0a21e04fe06dee0d6f8021f"},{url:"p/1849.html",revision:"7d0f471d637bb86228f664b33546096d"},{url:"p/3412.html",revision:"d03b4ced4a008511fbe2e4b42a4d7410"},{url:"p/34c.html",revision:"da77b59af62a81d25986ac1bdf15b045"},{url:"p/439d.html",revision:"cc5ac88c484a6d31c0b840df3db2ddb6"},{url:"p/799e.html",revision:"06676882bfa41c38c1e27ffe6ee0e7df"},{url:"p/98.html",revision:"6b94fd4b7a9b736856016d3bf4361a80"},{url:"p/a4f.html",revision:"86b1aaf1c92b844d7f3187f1ff16b7eb"},{url:"p/a5af.html",revision:"5e282f8305a126e86e3e118c86f9f2e9"},{url:"p/a7fa.html",revision:"f8a917788947972d28d6cf222e2f4c59"},{url:"p/a8f2.html",revision:"935296d3e2f081f710f30bb7b637d524"},{url:"p/a95e.html",revision:"f798bd422c15cf6574a1b099ea659fe1"},{url:"p/aa4a.html",revision:"65a2c25bd8c6c434667e3134cd7a63cb"},{url:"p/b147.html",revision:"1970b983c6cadda92408f863a514a00e"},{url:"p/c99d.html",revision:"ad3a642999702dcca8cf0f974b24567c"},{url:"p/cb20.html",revision:"4380b558eab1b5a1d8ecae070035b257"},{url:"p/dc3a.html",revision:"e96779d8ef54c4d2ab4c73230c6bfef7"},{url:"p/f0c0.html",revision:"15157227d6bb9dd23f14041e4c3f8ab9"},{url:"page/2/index.html",revision:"81f8b02ce5a4b84e131a5629a0098453"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"1882ba81f734ca8215e999eab3134930"},{url:"tags/Azure/index.html",revision:"547efbfbbf5268eb0567ba2af3025131"},{url:"tags/Docker/index.html",revision:"c4c9643842cda42f3dbcbf6d82b4d17f"},{url:"tags/Github/index.html",revision:"8dc82d05611c4e577f7811bf04687f0a"},{url:"tags/GithubAction/index.html",revision:"c6774eb0238b2b2ea437e49b27a469fa"},{url:"tags/index.html",revision:"3cf9369fe0c5e2f3ad373b0f4cebcedd"},{url:"tags/OneDrive/index.html",revision:"f0347ff52b334f70e84094ccc39ad975"},{url:"tags/Replit/index.html",revision:"f133e1f238f97cb69c4acdf9bb22ed21"},{url:"tags/SSH/index.html",revision:"cd9636bbaddb0aefabe5e0e7d07ad262"},{url:"tags/ZeroTier/index.html",revision:"0d4273ef7d08752afbc83faed8f5533a"},{url:"tags/作业/index.html",revision:"e706f0bcd45a379ccb1cde518aba4783"},{url:"tags/图床/index.html",revision:"055085d8cc90962350ae0bf38ef9951a"},{url:"tags/教程/index.html",revision:"5061a9f471ca331f4a9af9e1a6df2e83"},{url:"tags/教程/page/2/index.html",revision:"1e22bbdd0161d733fb1b7e83b77125f3"},{url:"tags/日常/index.html",revision:"d428306f71b841762b27c92aa5c574f4"},{url:"tags/毕设/index.html",revision:"dbe84634e503f01020d1adcb1bf2df61"},{url:"tags/流水账/index.html",revision:"bbebebdf1cbb15e182603ac07c93779f"},{url:"tags/白嫖/index.html",revision:"485da3e3d2c76b303fb4cefb52216285"},{url:"tags/白嫖/page/2/index.html",revision:"d1eb10825c1c95f8e39be79fd0711886"},{url:"tags/知乎/index.html",revision:"c0d597c0d112841851785b0eb2c97957"},{url:"tags/网盘/index.html",revision:"ebabf9f8115fab1066f0c2c23edeb46e"},{url:"tags/自动部署/index.html",revision:"8cf09b799de32662eeed68f03f6224e6"},{url:"tags/记录/index.html",revision:"786b413226fc4a7aec0f4128e8890334"},{url:"tags/设计/index.html",revision:"e6da508adf3f0590a9e7a278d69b5314"},{url:"tags/转载/index.html",revision:"4d2e8d8e732ea35f812f2b0f0fbf3708"},{url:"todo/index.html",revision:"f7eb09cad328bfad3f83148e7a85c5d4"}],{})}));
//# sourceMappingURL=service-worker.js.map
