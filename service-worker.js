if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>d(e,c),l={module:{uri:c},exports:f,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"af19ef0b66e90827723f0798aec6fcd0"},{url:"about/index.html",revision:"183e5e15a930926ba0c62d8fa2371f79"},{url:"archives/2022/02/index.html",revision:"c581af4d1a796326c22bca84625b0ebd"},{url:"archives/2022/03/index.html",revision:"dcc6b5f464889044f41f80469b118bc8"},{url:"archives/2022/04/index.html",revision:"f957b00b501cc9a7fd087319ea0ce2c1"},{url:"archives/2022/05/index.html",revision:"3624f7ca1718321e7b6f0188a6a342ce"},{url:"archives/2022/06/index.html",revision:"f2171963cb9861c12b9c461146470406"},{url:"archives/2022/07/index.html",revision:"9e0bc232d1edbaacbc8cf4d3732ead40"},{url:"archives/2022/08/index.html",revision:"9ceba1e4ac22357496b60b026ac691f6"},{url:"archives/2022/index.html",revision:"eded478224bfb3d9e21c676d872102cf"},{url:"archives/2022/page/2/index.html",revision:"c62f77191f79172fde4e0ac9b09b6e59"},{url:"archives/2022/page/3/index.html",revision:"58223586ae94bfe4260dc7bd645adfeb"},{url:"archives/index.html",revision:"af3dad1005f126a8134b1ceb4c9a988c"},{url:"archives/page/2/index.html",revision:"f381c8991106f59417728a4948e14c49"},{url:"archives/page/3/index.html",revision:"3b1771189d32c85eef34284d411b9bd8"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"0a1573f183e681946abd0f914893ff4e"},{url:"categories/index.html",revision:"51dcc1aeca9ac5572f5735f1b26682c8"},{url:"cc/index.html",revision:"ca2b7ff4fcb67bf6202d054e8d8f586a"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"9c400822ddb213a44d1b1cd494d9b570"},{url:"gallery/2021/index.html",revision:"d4017da1aeb978dba5c63aee30bc4aae"},{url:"gallery/bing/index.html",revision:"d092e892dd5d26fa399e6f1ae68a0e21"},{url:"gallery/index.html",revision:"b607470bb4087422bef0ec891484ddc0"},{url:"gallery/snap/index.html",revision:"41375d67dd6a81297a1c85e829595fd5"},{url:"games/index.html",revision:"db808f91590468e0062c94b5cdcbd533"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"54e80101bfddc87974aac1fc6d8ede74"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"aabaee4fef3f6c734d48fce5ee65e93f"},{url:"musics/index.html",revision:"b4b2e84efbf838421b996a91e4a96c5c"},{url:"news/index.html",revision:"75d69acfb33b0a3b2b00837aa6f26a18"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"bc506544456dff5fef62177026759aa9"},{url:"p/13bd.html",revision:"e1f2af79c6cf38f213cd73e9dd80aaa5"},{url:"p/13d3.html",revision:"969f5e687a1ff814dcd13fe2f8e96825"},{url:"p/15af.html",revision:"4bf7e4301d47ccde6fe1d05b5b9ad5ef"},{url:"p/1849.html",revision:"85d5c0c16486b2dc114d527cf0fd08e3"},{url:"p/3412.html",revision:"88dc1d1d995ff25ad37cd56d57e87498"},{url:"p/34c.html",revision:"1038b902102a47004501a6196ba74fed"},{url:"p/439d.html",revision:"a9d920740d2477dd9f277b0168653e76"},{url:"p/799e.html",revision:"7e2ab63399217f9686e84c47b255642f"},{url:"p/7e53.html",revision:"94e70a213497588c69831555211a470d"},{url:"p/98.html",revision:"a881673ccf580578f5b1b2f3c610d69c"},{url:"p/a4f.html",revision:"7f1ecacda219d10fb7f7649c0639fa11"},{url:"p/a5af.html",revision:"b8e3292e2cf05780801433204ad5f57c"},{url:"p/a7fa.html",revision:"0640bd5c08c3438716fda148ac412b42"},{url:"p/a8f2.html",revision:"22c38897d1018937358617ccc0b99b80"},{url:"p/a95e.html",revision:"0204e7098d4297620d6c17986254540b"},{url:"p/aa4a.html",revision:"65d0866e9ef3e9a476afd99ad46f911e"},{url:"p/b147.html",revision:"25a2ecb6601a7a91fb0d7742f6b33ab8"},{url:"p/c99d.html",revision:"f4b80341fea4b283406ec50cb813e650"},{url:"p/cb20.html",revision:"3167772d2e6a639aaa3be4f16e14c7fe"},{url:"p/dc3a.html",revision:"e2ed28faa15ee2d23ee11a018da6824c"},{url:"p/f0c0.html",revision:"9962179023764229d18090dc4d9f22ae"},{url:"page/2/index.html",revision:"b3a84148bd9b8d4804e7bc85bd42ce93"},{url:"page/3/index.html",revision:"085188d5671acb36a4d73207f4df7e92"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"fccadfdc13dd7731e01df8bfb235af85"},{url:"tags/Azure/index.html",revision:"ac8318d308abffed6b332ee56636c820"},{url:"tags/Docker/index.html",revision:"a4a9bc641289802c27e3edbefeb1e12e"},{url:"tags/Github/index.html",revision:"26e7c7e3a3d2c806dd58190ee4817a73"},{url:"tags/GithubAction/index.html",revision:"34cb3de5d4d1ba40d09bbb8d80ef2ab9"},{url:"tags/index.html",revision:"9dd315ce93d8b07df704cb673c6f6d2a"},{url:"tags/OneDrive/index.html",revision:"6b504347193080cb45fbc2fd767b8cde"},{url:"tags/Replit/index.html",revision:"36cad8a94932488db53a64eafdea9289"},{url:"tags/SSH/index.html",revision:"bf06b5ec4be6c68d80c4c62d521dc656"},{url:"tags/ZeroTier/index.html",revision:"ce70d8c10683a1ae5f5b957d115d29e0"},{url:"tags/作业/index.html",revision:"256b3493f9420161af2d7154d86a2cfe"},{url:"tags/图床/index.html",revision:"12f236f2f5bddfd41c8d869505055cdd"},{url:"tags/教程/index.html",revision:"c475c9ab595d5877800ff0258120c0b2"},{url:"tags/教程/page/2/index.html",revision:"cc4b10c6eb1fb9aa6402bd4e51269c0b"},{url:"tags/日常/index.html",revision:"bba86d5687a8700d687712fe9b77a813"},{url:"tags/毕设/index.html",revision:"57a58ccbf0c9f82eddb3f17ba1866af6"},{url:"tags/流水账/index.html",revision:"2e84e6c2ae4ec47a3ad31086c845412c"},{url:"tags/白嫖/index.html",revision:"92ab97f96b392684e0bfb760855037f9"},{url:"tags/白嫖/page/2/index.html",revision:"384a2ca708732d4ad7faa5918039c228"},{url:"tags/知乎/index.html",revision:"234808044396b3841caa719444df88f3"},{url:"tags/网盘/index.html",revision:"b6ff282e7b410e0665060a7fa2c27d2c"},{url:"tags/自动部署/index.html",revision:"7b5c79d1af4c77d13b5bade3bd2207e3"},{url:"tags/记录/index.html",revision:"fad0cc5bb9f4975314f9031ed3c7038a"},{url:"tags/设计/index.html",revision:"fd60ed9a94b5c23c13b574aeb5652fc0"},{url:"tags/转载/index.html",revision:"a60673499dda882f7c9f05b02304a4c6"},{url:"todo/index.html",revision:"98531c672127e27cf5acfa51de5aa067"}],{})}));
//# sourceMappingURL=service-worker.js.map
