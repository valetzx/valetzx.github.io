if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>d(e,c),l={module:{uri:c},exports:f,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e8c44f5f352e8951e5e1f266215a3be0"},{url:"about/index.html",revision:"d934f1344cf44fdd95ab56882e7f5755"},{url:"archives/2022/02/index.html",revision:"dcad6f6f2d3fabb92542501859a005ac"},{url:"archives/2022/03/index.html",revision:"dbed26a5f60f28138ee0c7243b640d7b"},{url:"archives/2022/04/index.html",revision:"f7cd95f3504ef248fec557d2f303a937"},{url:"archives/2022/05/index.html",revision:"6dcf13112e3d4ee1e900a149e5a00290"},{url:"archives/2022/index.html",revision:"b208e724e8c1ee8bfa840a8807380658"},{url:"archives/2022/page/2/index.html",revision:"279ae681676a794a09a5cde63527abd8"},{url:"archives/index.html",revision:"01aa967a3df243cc4a38eed4caf78678"},{url:"archives/page/2/index.html",revision:"abfe068e6cf8d1ce26b9503b91a564e0"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"6d7b867fbbb5a27c65d80eb3fb80cd6f"},{url:"categories/index.html",revision:"275dbae7765e1749f90fed76fbfe5831"},{url:"cc/index.html",revision:"8ad5318ae33662385068d0b2b91ccef9"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"56ad2e4fbc964d0127f23ff918dcb9ee"},{url:"gallery/2021/index.html",revision:"b09b71988cfbf85f512e2050d3782eb9"},{url:"gallery/bing/index.html",revision:"5cb87ecf647f17e460313407ca39a4d5"},{url:"gallery/index.html",revision:"020e0a3fe5924be44c4cdfe5dc341db1"},{url:"gallery/snap/index.html",revision:"7cc449361db7c2199a95d92c09185407"},{url:"games/index.html",revision:"35de74d513aa14de13d91bcb2a13aace"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"e74ccd3eadc0abd541bf5f9c50925fa5"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"0cde13da298b944b6eb6567f82d74870"},{url:"musics/index.html",revision:"13ab2c514f3b8360603d43f27fc21985"},{url:"p/13bd.html",revision:"a663be59bccdb82aa1857f59c068014f"},{url:"p/1849.html",revision:"e112f301481a5bf0a7858cbb3e7c56ca"},{url:"p/34c.html",revision:"d4861f4bf027757886f7a909da9bedfc"},{url:"p/439d.html",revision:"de60446223228c83a4c2ce2988600b1c"},{url:"p/799e.html",revision:"d5562e02c25bdad7b5f2993fcb2ac422"},{url:"p/a4f.html",revision:"6da7f0307f354c4b41fafef8750a60c3"},{url:"p/a5af.html",revision:"d5b0d8268075b81c6d5cb4f5c0bf1934"},{url:"p/a7fa.html",revision:"af130318f11e9b81bc22d6f82de7f600"},{url:"p/a8f2.html",revision:"1d02e48033d0b534e3b1c28bc7308e11"},{url:"p/a95e.html",revision:"a6c9e3db03759f1d89ef05bf724b049b"},{url:"p/aa4a.html",revision:"11aa721bb7f376e13eac9400299c441c"},{url:"p/b147.html",revision:"a3589eab4bc95d5cd30aafbbc6e0dd81"},{url:"p/c99d.html",revision:"d31dd061786411b54a4692a9dd5300c7"},{url:"p/cb20.html",revision:"b3320f08ce41e28ad20f6c37f9e7e904"},{url:"p/dc3a.html",revision:"8db1332e74fe2efec7b174f4f0c638a5"},{url:"page/2/index.html",revision:"f4b436f6011221f5d5c696e5e31d0205"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"adf10a3c8edfc5b2e0bd7669f4e3b5b6"},{url:"tags/GithubAction/index.html",revision:"cd5b972b06df338f81928042598a6021"},{url:"tags/index.html",revision:"25a951176ec2c9d62585286fb27592f2"},{url:"tags/OneDrive/index.html",revision:"7616c830c184a2728c1b8913641e9441"},{url:"tags/Replit/index.html",revision:"a7c3af5fb2777c39d7859b417991fb02"},{url:"tags/SSH/index.html",revision:"89986ced88ac212bb251ffeb80e2d2a8"},{url:"tags/ZeroTier/index.html",revision:"76002a6cd98c885901227aa95d14db36"},{url:"tags/作业/index.html",revision:"1818f9cb52ecd1ea315f4b9f5b814594"},{url:"tags/图床/index.html",revision:"965aebfc56abb4fc0b1d0070dde59729"},{url:"tags/教程/index.html",revision:"f5b878feb921d3432721dce995c84c98"},{url:"tags/日常/index.html",revision:"c4d8232eaf32e3adef7ddd45fa621982"},{url:"tags/毕设/index.html",revision:"b8dbd9bc59254ea1a5569dea9ef3d0f4"},{url:"tags/流水账/index.html",revision:"4eb4d7225fe5b0f350b36b61272b3334"},{url:"tags/白嫖/index.html",revision:"c5264e8db93540df58660c51c8971aa3"},{url:"tags/知乎/index.html",revision:"ab47d02eaeb09f23a6d69a67c858c9cb"},{url:"tags/网盘/index.html",revision:"5810617150168cd35f26ee3eb115fc8b"},{url:"tags/自动部署/index.html",revision:"a741573d676f0d34474be0272e245464"},{url:"tags/记录/index.html",revision:"ce4a2971f8ce0b8c0c20ed5b2790905e"},{url:"tags/设计/index.html",revision:"66005018cfd545f1dabfdeab8a38219d"},{url:"tags/转载/index.html",revision:"87db68be210643a8f5441e7e7d123e18"},{url:"todo/index.html",revision:"096b4fb638be44e3969c3464b329c05a"}],{})}));
//# sourceMappingURL=service-worker.js.map
