if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),l={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"dafc8aea33de25570ba013b1c50449e0"},{url:"about/index.html",revision:"34127f28e9a6c4eac05317786c8446e7"},{url:"archives/2022/02/index.html",revision:"d1d8ca7ea1c4ae5b4a17ec090f15bdaf"},{url:"archives/2022/03/index.html",revision:"56a385d3a988434006f6ef31effbea6d"},{url:"archives/2022/04/index.html",revision:"2d7e9c9985f1e0d2d7791a126f31b6a6"},{url:"archives/2022/05/index.html",revision:"6ecf075b6b9be5faf19d3d16715a64f2"},{url:"archives/2022/06/index.html",revision:"d24d9fb4743c0367a4d69e1f5e759ccf"},{url:"archives/2022/07/index.html",revision:"c9148177307f3f7c6de58c3d76973a8f"},{url:"archives/2022/08/index.html",revision:"f939948058c1ded5c59277280cbc44b6"},{url:"archives/2022/index.html",revision:"9a6fee196233d6c086a07b9c126f693e"},{url:"archives/2022/page/2/index.html",revision:"db202a88ba360e0071c059c310cebbdb"},{url:"archives/2022/page/3/index.html",revision:"fb6a0ce4ac98ee997a3a3d7e2f41351e"},{url:"archives/index.html",revision:"80848e03077c72b9563c0412540b8f94"},{url:"archives/page/2/index.html",revision:"00a1bc27ae303e59f938370416961d9e"},{url:"archives/page/3/index.html",revision:"45fc8ecb48adea5db08dd889559c7bc2"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"02e0bfce9a876f607c91b7dd6054ed6d"},{url:"categories/index.html",revision:"fcd4ac8c7c2e11b96a9e3506997f4b9a"},{url:"cc/index.html",revision:"bd75d8d3597fa51521f8ab7b926f86a6"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"587750640e84b5af6c9794cef2455e7e"},{url:"gallery/2021/index.html",revision:"b4cc2a3e2bc9759aef7139553d7c523b"},{url:"gallery/bing/index.html",revision:"4d90b868daf8984b3e68c3adb7ceb243"},{url:"gallery/index.html",revision:"8af2120b80f72a63d21c9cced9ceb238"},{url:"gallery/snap/index.html",revision:"03fcaa7db91d5839e2a445e167180339"},{url:"games/index.html",revision:"ca74e1f3e0eb5a8ebe4c52882ed4a820"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"ce0c3b52eea3f9264b9355bc806c611c"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"1f902d763b4c55d2db6a206bc2230fec"},{url:"musics/index.html",revision:"afe7f9dfdda3665a44b0c3b0d3846d91"},{url:"news/index.html",revision:"4603c8d3ad85854e6409624f80d94898"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"fbc30573769110994c7333fff5cf840a"},{url:"p/13bd.html",revision:"a6a8aa6d7ab961cb97eab6da15ff56c8"},{url:"p/13d3.html",revision:"e8191149cc03711252e34b903770acf7"},{url:"p/15af.html",revision:"ff26308089c69a54381497ab5570cbac"},{url:"p/1849.html",revision:"b869ff1b213e79d1d6914d3e2f1a5e3a"},{url:"p/3412.html",revision:"7717c2827eec3bd6cc375768e548b9f8"},{url:"p/34c.html",revision:"1d3747915654c7f0db800f2b7ff982f8"},{url:"p/439d.html",revision:"5a3eac8092a7c2c61ccf8a131f9b9116"},{url:"p/799e.html",revision:"f18670ebe6d716e9bc3ed3e30382a837"},{url:"p/7e53.html",revision:"67cc7f131e1613b3ac19e7c72c088c63"},{url:"p/98.html",revision:"2a5daf48eca5abc540aefb5402bfc496"},{url:"p/a4f.html",revision:"94c407c7c035c6c08046fe737ef74967"},{url:"p/a5af.html",revision:"7cb2a2716a1db4ad74a0252a8cb2bcf6"},{url:"p/a7fa.html",revision:"9560aec37d39faca0ec7d53f24f201f5"},{url:"p/a8f2.html",revision:"6b9a050219bbc05de58f4d3478e3155c"},{url:"p/a95e.html",revision:"6ea8f12e9d71b0bf4dd065af6508ed05"},{url:"p/aa4a.html",revision:"11669197c4e6f27e1f7e5ba16eb67992"},{url:"p/b147.html",revision:"e110f7157000d7b2c73388e5865fee72"},{url:"p/c99d.html",revision:"5f965d66e4e3ccbd419a94a7614869cd"},{url:"p/cb20.html",revision:"fad0f97519854df7593527e971f74877"},{url:"p/dc3a.html",revision:"d31876d90c7e48836dc9caf31e37206f"},{url:"p/f0c0.html",revision:"262115380bb88d3068695f9cf1f015eb"},{url:"page/2/index.html",revision:"e5327098e23454e04b37db6abeebbe64"},{url:"page/3/index.html",revision:"fd4dd0fc7954e05b746b85311a5baf7b"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"d19b1e19f25e4bdb91f2cb1ebe5d028b"},{url:"tags/Azure/index.html",revision:"38faf38e3c51e3b8c22cf78c712be7b5"},{url:"tags/Docker/index.html",revision:"d5df562b0e9ce28d75f41721eecd6609"},{url:"tags/Github/index.html",revision:"2097479df7f11ae17f79bebb10161101"},{url:"tags/GithubAction/index.html",revision:"af61cde5762af0ebb03e1b99db63503e"},{url:"tags/index.html",revision:"bd25cc42aa7e2656cef34cb94075773b"},{url:"tags/OneDrive/index.html",revision:"f96536da74105e5285a2e686d1149ef1"},{url:"tags/Replit/index.html",revision:"82af5b7a42e5550ae80e5d2d980a0463"},{url:"tags/SSH/index.html",revision:"266df6e8b08fff546a1f3c3b491586e5"},{url:"tags/ZeroTier/index.html",revision:"db4d4f9020dec972ab76be30777ed8d5"},{url:"tags/作业/index.html",revision:"9f3694ecb51d684579f5bf59885b2e28"},{url:"tags/图床/index.html",revision:"ef9268f416aa0052b04bd862e3b3a98a"},{url:"tags/教程/index.html",revision:"c56d1820b25f2519d71bbcb2c36c33f2"},{url:"tags/教程/page/2/index.html",revision:"a6ce267ee62a6e83a62f53b9af762ab2"},{url:"tags/日常/index.html",revision:"60f0528ea78bbbc97c2af4505f00e922"},{url:"tags/毕设/index.html",revision:"0b33d0145b319b9d19c45092f08494ba"},{url:"tags/流水账/index.html",revision:"bc06060e70535a2ef76456999621b3d2"},{url:"tags/白嫖/index.html",revision:"b04c16995c66878b119e0f4175618ecd"},{url:"tags/白嫖/page/2/index.html",revision:"16a39d164f50fd21f0acf88c7770a947"},{url:"tags/知乎/index.html",revision:"be5fde04fcef86860237eedea6e6eb54"},{url:"tags/网盘/index.html",revision:"6491cc039cdbf51643e480b749363b2a"},{url:"tags/自动部署/index.html",revision:"87de727711fcdf0b7c72846eeb83b941"},{url:"tags/记录/index.html",revision:"731c83aed126582ce6ff3c3bbf150ccb"},{url:"tags/设计/index.html",revision:"35313e595c1be62dc322abd10edd1989"},{url:"tags/转载/index.html",revision:"ca399288043c606942106f9cb08e49c0"},{url:"todo/index.html",revision:"9f05afee3978153ca8a5e118c6f4623e"}],{})}));
//# sourceMappingURL=service-worker.js.map
