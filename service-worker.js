if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const l=e=>a(e,r),s={module:{uri:r},exports:f,require:l};i[r]=Promise.all(c.map((e=>s[e]||l(e)))).then((e=>(d(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d9686fdc0d21f71ed1aa12b634d452ea"},{url:"about/index.html",revision:"b2340b7e576a54ea4c9cb544fa76a85a"},{url:"archives/2022/02/index.html",revision:"4c54ac33e643d4d21945aacc102125c6"},{url:"archives/2022/03/index.html",revision:"e5b52b6e9683007ac065cea9df5a2d12"},{url:"archives/2022/04/index.html",revision:"61d9a261dc42db6b054df7a16c29814f"},{url:"archives/2022/05/index.html",revision:"9cd3f9d4e979658704cd0d61698be863"},{url:"archives/2022/06/index.html",revision:"4cf06edaebf38ca2034ce7d9d223c722"},{url:"archives/2022/index.html",revision:"451452217607e272bf988681a4dd3642"},{url:"archives/2022/page/2/index.html",revision:"8ceddea2417ce5a8be0444e78b778d52"},{url:"archives/index.html",revision:"88c47894a3181cc4120fab197d30571e"},{url:"archives/page/2/index.html",revision:"b2ac753bcd439478e3fd8ebb6bacafb0"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"e4d5608be21aab4975b0318eb0cecabd"},{url:"categories/index.html",revision:"d3be34deeca4ace378920bf6a6ee1b3c"},{url:"cc/index.html",revision:"776993253cf6af44119e75064190da45"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"4820f2462624cf747e9b147a16ed0466"},{url:"gallery/2021/index.html",revision:"e73259debf0690cbddf37c0611c940b6"},{url:"gallery/bing/index.html",revision:"fa192788ee8d5708020c58b275222ad8"},{url:"gallery/index.html",revision:"5f77a1ed1182bc16134283b99fe7afbf"},{url:"gallery/snap/index.html",revision:"cf090fd4635c80cb90c8a3fc33079ba9"},{url:"games/index.html",revision:"c8c23fc0ee20641548cf85923cbd979f"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"2ff7b120cde605e2c29215c2ea2d4b0e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"9014593a6809bea0eb9be2c0eccfffa7"},{url:"musics/index.html",revision:"77d2f3ddc38386382016f2df6d0e172b"},{url:"p/13bd.html",revision:"2b57f266134eb0b087003dbcfbff651d"},{url:"p/15af.html",revision:"8e8d273cef511b99ed3b972f50dab63b"},{url:"p/1849.html",revision:"59884735c99d79670d4cfc3aa8f55d1a"},{url:"p/3412.html",revision:"929892259436464f5e3953d50ece14ff"},{url:"p/34c.html",revision:"fb620583fab204423cc55cfa5ef53b8a"},{url:"p/439d.html",revision:"55e63cc3306c497bb5ce03c49ea4328f"},{url:"p/799e.html",revision:"a0a110ce0f67991587742a2dccd7086a"},{url:"p/98.html",revision:"5f53aee8ac395b0b09a5f783aff2df41"},{url:"p/a4f.html",revision:"4eb1e027f5829c83050c6769f2fa810e"},{url:"p/a5af.html",revision:"f1b278f633a513f10b56494c3e746338"},{url:"p/a7fa.html",revision:"a235b3a6dccaf92e78f6d2f69ae5b81c"},{url:"p/a8f2.html",revision:"87e55cab40648411af343fe9c220c01c"},{url:"p/a95e.html",revision:"5c8c99b240585e0dcb00e7ad2f1bfead"},{url:"p/aa4a.html",revision:"58efeb019d1d53ed1fba415ea07f068d"},{url:"p/b147.html",revision:"4e047bd50afa9dff9b4c4e1da181943e"},{url:"p/c99d.html",revision:"406852ee55832792e8c6827a1baca97c"},{url:"p/cb20.html",revision:"1f7f5d72a240e6d7adc372a2251f35d4"},{url:"p/dc3a.html",revision:"92c46c3b35a81aa96943d3317d7ec768"},{url:"page/2/index.html",revision:"86b37516fd0db49e3bf8fa7f519418b7"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"e78ebcccb2283652b873e2f26b267ec6"},{url:"tags/Azure/index.html",revision:"7ff810511ab0811a37d5688a706b4cf0"},{url:"tags/Docker/index.html",revision:"02b172873b5948ecc04ccc2635cb3a86"},{url:"tags/Github/index.html",revision:"fb731bcced7cdc43dbbdcc90a24fefe0"},{url:"tags/GithubAction/index.html",revision:"bab1662bcb2c4db1d3b25ef917f3bfd0"},{url:"tags/index.html",revision:"1aa80b5f4c038459416534920cb46a48"},{url:"tags/OneDrive/index.html",revision:"785a831757c283873b4ef26648b73ab6"},{url:"tags/Replit/index.html",revision:"c1e9a2e1359c6d886ca1018d32260c73"},{url:"tags/SSH/index.html",revision:"9a3a5def0c6e9e7ef019d67b13c2e564"},{url:"tags/ZeroTier/index.html",revision:"cc7afff160fdc9d32525ecf4bf30e889"},{url:"tags/作业/index.html",revision:"583da8880018b9140e9aef36ff387ef1"},{url:"tags/图床/index.html",revision:"2481e07ddba76e443264950b2ab1c87c"},{url:"tags/教程/index.html",revision:"73a8483511bd360a4ca2c0a497297dce"},{url:"tags/教程/page/2/index.html",revision:"1782a1fb7ff060542ee7bafbc04af5b3"},{url:"tags/日常/index.html",revision:"c8f956dcf638ecadc92053297b28e406"},{url:"tags/毕设/index.html",revision:"b4e129e3ba8e813324f84ee23cd60744"},{url:"tags/流水账/index.html",revision:"867aa4729bd83bd9c46135c8b04424c1"},{url:"tags/白嫖/index.html",revision:"ad4a63ac8d02b56f8d92f645e03c3a2e"},{url:"tags/白嫖/page/2/index.html",revision:"8c7440c5315da4607fbc36f7e7b9e73c"},{url:"tags/知乎/index.html",revision:"65f646bba5f47b845e11a86f6f73413e"},{url:"tags/网盘/index.html",revision:"1a116add0bb6f0ab9a7566a6ad976a96"},{url:"tags/自动部署/index.html",revision:"fe1a9bb03c4847b3e0c0ca6f48ccdb69"},{url:"tags/记录/index.html",revision:"fa022c2c8010a80343c525a5833e8244"},{url:"tags/设计/index.html",revision:"196334b8b0d43a85079470bb7e26e0c9"},{url:"tags/转载/index.html",revision:"68f0c4056e48bde39e1e1113be3b388c"},{url:"todo/index.html",revision:"c09b395d83e26895f08b053db99c3d77"}],{})}));
//# sourceMappingURL=service-worker.js.map
