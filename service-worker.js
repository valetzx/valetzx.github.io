if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),l={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6978fa58479692cfd6e8420648cb6de9"},{url:"about/index.html",revision:"9b57202f52cd7a4ab0e74c0dc2d3fd3b"},{url:"archives/2022/02/index.html",revision:"8f05cc3edfdf2e8f5a313a1198ee3a50"},{url:"archives/2022/03/index.html",revision:"317207279f006a676ad34a67ab59978a"},{url:"archives/2022/04/index.html",revision:"15e3cfc2e82515d6476e11cfaa3ccefa"},{url:"archives/2022/05/index.html",revision:"32d22a91015a4689f7cf3c6c4b3abe76"},{url:"archives/2022/06/index.html",revision:"9da9590bb7d3ec155ab8e0c86b418cb6"},{url:"archives/2022/07/index.html",revision:"312262cd81c505b00d9ec95d2791df5f"},{url:"archives/2022/08/index.html",revision:"844939942c6f8c9c70858950b13ca031"},{url:"archives/2022/index.html",revision:"e2f4fb8eacf52aacc6979ded0a96ae38"},{url:"archives/2022/page/2/index.html",revision:"369f62ce0176fc24a674bda89fd9b761"},{url:"archives/2022/page/3/index.html",revision:"94c327c579c93be77ff5ca36fe0e78ef"},{url:"archives/index.html",revision:"add6cf7a06a246f6f1c0d018db9bf759"},{url:"archives/page/2/index.html",revision:"cc705756da38451b4624dd3be6ba7eb7"},{url:"archives/page/3/index.html",revision:"eb8c925f3b39746586e2a29eac176289"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"db95e5707af1e0bfb855524545afa661"},{url:"categories/index.html",revision:"1b813c698a5a45d7f6b2cd1ef313933f"},{url:"cc/index.html",revision:"035223ad2393d57514f2bfebdc69c658"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"25937006c7ab4cece454ef6476d45430"},{url:"gallery/2021/index.html",revision:"3354d76e934c8c6d70747eefce60add4"},{url:"gallery/bing/index.html",revision:"9f9432dc8bf43b8cd2189bfdb3aa746c"},{url:"gallery/index.html",revision:"5b52086395e89968556e9c85c1aad9f2"},{url:"gallery/snap/index.html",revision:"cf51fb7551220393487ecedb9c4a5fb8"},{url:"games/index.html",revision:"6a45630f407be4894de6712a43b72c53"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"3c1b4c56161729c012fd9f72fd6f5a9d"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"e4fd6a24cad3834e4236d2d657983c30"},{url:"musics/index.html",revision:"f4b6048be5511f1aa32abfbf724fdd82"},{url:"news/index.html",revision:"7cf1ce9e8d7435e50bf4589ff6c5a3c3"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"0696ca194d78d3dc55c2addd27d94bf9"},{url:"p/13bd.html",revision:"623bad303d7f681416ab12c114a1fcc1"},{url:"p/13d3.html",revision:"4baac36d38f6ccf12a59f9d25dfc7b58"},{url:"p/15af.html",revision:"af3aba38281eaec762d5a0d577532798"},{url:"p/1849.html",revision:"0bfc4c95dbe1bdf56a136733acab21f6"},{url:"p/3412.html",revision:"494997ae183b53664fcf5397eef44519"},{url:"p/34c.html",revision:"7f24e96301abfdca006a90a51fcff59d"},{url:"p/439d.html",revision:"3712b0d1aacca045c716b80c68526594"},{url:"p/799e.html",revision:"dc09b624039f9e08a45fe6522d012774"},{url:"p/7e53.html",revision:"e1faea2ddb417a01b58524a73f42861e"},{url:"p/98.html",revision:"35cd736558fc80c26a5b38804f4fda2d"},{url:"p/a4f.html",revision:"6a706aeeedbf079617e8c1b73b4c9427"},{url:"p/a5af.html",revision:"d9f41a2160c3139d9104fec642647d36"},{url:"p/a7fa.html",revision:"126ac80964ffbf81b827dcf7c584264a"},{url:"p/a8f2.html",revision:"d37907de63aab62bdc11bf2475d9394e"},{url:"p/a95e.html",revision:"e1d4d73d7697e05518b19e029bb6c17a"},{url:"p/aa4a.html",revision:"5d145636fdd5cb519f126c1384e03d80"},{url:"p/b147.html",revision:"0e2cca18459f2bde8a3714e9e4d89eb0"},{url:"p/c99d.html",revision:"4a4ab23db629821bf23e58e77c115ee9"},{url:"p/cb20.html",revision:"34c076b06e1ddfb3930016ca2b4365fe"},{url:"p/dc3a.html",revision:"44d76aef7b191d271abef21a5234ea19"},{url:"p/f0c0.html",revision:"8c7ed8522258e9187403d78b58fe587b"},{url:"page/2/index.html",revision:"753b29ba58f9217b3b9390426c643bb7"},{url:"page/3/index.html",revision:"0fa7200bec19aa474a25ed98c98cb56a"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"670edeef6a31deb6587cd6fbe982769f"},{url:"tags/Azure/index.html",revision:"4ae788b2818a165ca5970a29b4f60bad"},{url:"tags/Docker/index.html",revision:"1f68eed33de6fbb4e6a7fc35a8614eb0"},{url:"tags/Github/index.html",revision:"d5328b18613313782d46d29c7ce8120d"},{url:"tags/GithubAction/index.html",revision:"48aff785bbb633c38a512769346e0a34"},{url:"tags/index.html",revision:"2877a9e6b95a057ced57c38ed25a61a3"},{url:"tags/OneDrive/index.html",revision:"fe950582584b8688a21903b37cb3f4a9"},{url:"tags/Replit/index.html",revision:"ce4f62ed5589cb2606c356a40ad3d0c4"},{url:"tags/SSH/index.html",revision:"4deb2c942f7ec973e7312f61f92a7cfe"},{url:"tags/ZeroTier/index.html",revision:"55a7d6013ff75a00e79fa481a1d28284"},{url:"tags/作业/index.html",revision:"7a77e1897d6a48f0307438f02bbebdb2"},{url:"tags/图床/index.html",revision:"2c729c982192050cc4fe45f9d5112cd6"},{url:"tags/教程/index.html",revision:"d78ffacd6fcf47e42bba39832aed0c59"},{url:"tags/教程/page/2/index.html",revision:"ffa3e352f9f9bdce89df854fe4ee4e4a"},{url:"tags/日常/index.html",revision:"4698fe8619a9ce4419074fd7854f3765"},{url:"tags/毕设/index.html",revision:"1e6101b745e8539e66558e056715c334"},{url:"tags/流水账/index.html",revision:"f0329c1abf04dfff75487015185c741b"},{url:"tags/白嫖/index.html",revision:"c7cc22ecd8b6ec3e4ceb99214e10b9c4"},{url:"tags/白嫖/page/2/index.html",revision:"294e3a877c2691fcddeeced1768e7442"},{url:"tags/知乎/index.html",revision:"bc4200505819e66e8f970b5d0d5a8bee"},{url:"tags/网盘/index.html",revision:"ad8f68f0a07ad7023fa5be60658f0b0c"},{url:"tags/自动部署/index.html",revision:"1391850dcd2008eb0574040c60330b19"},{url:"tags/记录/index.html",revision:"6ec04f652046162f402dc77e9a78e085"},{url:"tags/设计/index.html",revision:"8570f81e48927c580506a31b58fe8251"},{url:"tags/转载/index.html",revision:"5e356d478657909ab92a47127ffac58e"},{url:"todo/index.html",revision:"d018b158c244ab9642f4eacd1fd5d60d"}],{})}));
//# sourceMappingURL=service-worker.js.map
