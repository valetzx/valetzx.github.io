if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>a(e,c),l={module:{uri:c},exports:f,require:s};i[c]=Promise.all(d.map((e=>l[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d563c6e24769ae7442a37f9ece7b237b"},{url:"about/index.html",revision:"a9991da69d45a318037bb2dba8148fff"},{url:"archives/2022/02/index.html",revision:"c0aa02ddd785212c90d57170ab6c7358"},{url:"archives/2022/03/index.html",revision:"aa13f55388b36115afd24945b6aa05f1"},{url:"archives/2022/04/index.html",revision:"9e1d58ee6a2f8a12d341da90d4865c77"},{url:"archives/2022/05/index.html",revision:"f0da46613b3c26d3aeed1b3997b21ae6"},{url:"archives/2022/06/index.html",revision:"5e027c53972f5691182287d86eb049d3"},{url:"archives/2022/07/index.html",revision:"4007b1f4ef1b9acf30ffeae49bdfb683"},{url:"archives/2022/08/index.html",revision:"32e49a38cd3b67744c92eee467f62be2"},{url:"archives/2022/index.html",revision:"79d3c17d85c782a6b2b16c68f57101d6"},{url:"archives/2022/page/2/index.html",revision:"d2044196a17bbf7b3e2429dc35133cc3"},{url:"archives/2022/page/3/index.html",revision:"a2a3f66bd61e9ce2898cf8970a864c5f"},{url:"archives/index.html",revision:"901a07bf45adec37a886f52e057a8cc3"},{url:"archives/page/2/index.html",revision:"17541a4999404ab95000681f27120504"},{url:"archives/page/3/index.html",revision:"5b52d13f3b2440d5042852f3c9d7e8e6"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"9e4267f9dd99ef23ac966b6fe4c45c41"},{url:"categories/index.html",revision:"df55dadf2a16158b347e76a302b74689"},{url:"cc/index.html",revision:"27e41498e0062510016bae2879e82189"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"d6c9cfe60ef1c1bc1469409291e09b63"},{url:"gallery/2021/index.html",revision:"7ee3dd861697838238cb6e53695327fe"},{url:"gallery/bing/index.html",revision:"826dd270c01a03c2cfe289d3a547eb3b"},{url:"gallery/index.html",revision:"5a36d2765bf36a1610a0d8484fc39715"},{url:"gallery/snap/index.html",revision:"45432513b191e4872f4de6cd819083ea"},{url:"games/index.html",revision:"41f9402821e93830ab1ec1663a55e0aa"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"4a06fb1dbefc4b300b22971a7b429457"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"d03f678f01263c6b20edc635bbda30df"},{url:"musics/index.html",revision:"2b4ee0461a8702810e730610c32946ff"},{url:"news/index.html",revision:"7f80329aaec42e5264f2da60805c35bb"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"abc1f7f594effa2a25fcad8fb72b4d57"},{url:"p/13bd.html",revision:"70a1434e2c0f20e9dd0d27087caf01ee"},{url:"p/13d3.html",revision:"fc6bcaa52f0b7f834a51b48b849095cc"},{url:"p/15af.html",revision:"984384bc4e322d0120a24aa77aba18f5"},{url:"p/1849.html",revision:"68b6a5a2f197089b581ed2457a8e6489"},{url:"p/3412.html",revision:"34000a77de97bbc279baa26298b38c23"},{url:"p/34c.html",revision:"aa6d11e3bc5f93716708b35b33233be7"},{url:"p/439d.html",revision:"17ec4a2aa283a5237b5b41db236c9593"},{url:"p/799e.html",revision:"71eb560d0eb6111ebd79698f763e5978"},{url:"p/7e53.html",revision:"f43d64b6cf5540f455a3d30db90f0b0b"},{url:"p/98.html",revision:"f0ec0e36222101b50f677eceb2bb22a0"},{url:"p/a4f.html",revision:"d423fe62294e2da8d9e8f389e1f0bb86"},{url:"p/a5af.html",revision:"a71e4519d17a999f46f069139f6548dd"},{url:"p/a7fa.html",revision:"28d4a9d2851ee6b545be7ce075a956b1"},{url:"p/a8f2.html",revision:"9a47516392c6ab14e6b1bac751f3d3b8"},{url:"p/a95e.html",revision:"f104749da9168fe10a48deb845018dd4"},{url:"p/aa4a.html",revision:"7c739e28ccef876c3d48c2b5b50fdd7d"},{url:"p/b147.html",revision:"72a384b79eb32231ff539983fe94ecae"},{url:"p/c99d.html",revision:"ba3d658daffbe28e6f4cf25afe326ec2"},{url:"p/cb20.html",revision:"68e9b8d6955c87c8bf04404604a7c259"},{url:"p/dc3a.html",revision:"bcb0b27658416aaa6e3099254ef64398"},{url:"p/f0c0.html",revision:"1a37cc26dc6716c488a4a399344fdff4"},{url:"page/2/index.html",revision:"4688f53d84a01b0d625189af24efcbc5"},{url:"page/3/index.html",revision:"a54c827a6ec7fa98811619fc4b727ae7"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"ed7c107fe19563750d5c7fbc202697ea"},{url:"tags/Azure/index.html",revision:"6ace1a7d05e871180f1f923e04410460"},{url:"tags/Docker/index.html",revision:"85bdfe5e20916643ca7c6d456c97fabe"},{url:"tags/Github/index.html",revision:"87f30b21bb2035ae133259a7695ca3d9"},{url:"tags/GithubAction/index.html",revision:"965333f3c32af0d533b076827dbbcad4"},{url:"tags/index.html",revision:"77687f78355d43e29cf33c44b2bb22fe"},{url:"tags/OneDrive/index.html",revision:"26286c79f42ee3969cac565de03c5e12"},{url:"tags/Replit/index.html",revision:"87b94f688b3742ef0d05402073469b22"},{url:"tags/SSH/index.html",revision:"07f95cd1300274800f09a8aa12ac55c5"},{url:"tags/ZeroTier/index.html",revision:"688dbac73b56bca6ded207e246f00d57"},{url:"tags/作业/index.html",revision:"b23175f1c39c425659acbe098e537c74"},{url:"tags/图床/index.html",revision:"36678870cc83cf1853d4d8ed989c93f9"},{url:"tags/教程/index.html",revision:"71b49e52da38cf9c028a418794d03c03"},{url:"tags/教程/page/2/index.html",revision:"131797c7ab6a24b2fb0846be8c4ab1a7"},{url:"tags/日常/index.html",revision:"d669bd96d4eebb2a20748abad8d2087c"},{url:"tags/毕设/index.html",revision:"37d498b8912e527979ef7fc3cfd09b62"},{url:"tags/流水账/index.html",revision:"81b16dbc51f04672e948e873b4e54a1f"},{url:"tags/白嫖/index.html",revision:"1065950b62cceb481fe9bb7d616ec30e"},{url:"tags/白嫖/page/2/index.html",revision:"2f5b052a89a06d7a4ca09edb1628d4ac"},{url:"tags/知乎/index.html",revision:"9d025fe9802f23e8e30aa795d0c1f71b"},{url:"tags/网盘/index.html",revision:"dea23510850717c8276d3cbdf392b6dd"},{url:"tags/自动部署/index.html",revision:"ded798dc77104ecd9f67dc5f0276a1f1"},{url:"tags/记录/index.html",revision:"94901f3bb73bad6cb0bbaea619dc963c"},{url:"tags/设计/index.html",revision:"3eae14deabe6880a9e662355d63d0ee8"},{url:"tags/转载/index.html",revision:"68e4e9936d75494c7399251d6cc3c400"},{url:"todo/index.html",revision:"2be2aa1543e42757e2ef6ef651304569"}],{})}));
//# sourceMappingURL=service-worker.js.map
