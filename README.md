# 这个README.md文件在 valetzx.github.io/master/README.md 
## valetzx.github.io 存放 Hexo 生成的静态页（public）
## pigeonpig.github.io 存放 VBlog static 资源等 
## 并在 pigeonpig.github.io/pubfile/vblog 部署了 index



# VBlog遇到了一点点问题，这里把原作者[GitHub-Laziji](https://github.com/GitHub-Laziji)的代码删了删，改了改。
## 作者VBlog项目地址：[https://github.com/GitHub-Laziji/VBlog](https://github.com/GitHub-Laziji/vblog)
### 网站读取 `/configuration.json` 文件在 `{网站部署的用户名}.github.io/static/` 目录，`https://pigeonpig.github.io/pubfile/vblog` 需要加载 `pigeonpig.github.io/static/`
### 使用AccessTokens绑定账号后的 系统配置 选项 比如我这里绑 valetzx
### 系统配置 `#/user/configure/main` 需要读取 `{githubUsername}.github.io/static/` 目录，他会写入 `valetzx.github.io/static/` 并且不加载。
### 而不是部署 `pigeonpig.github.io/index.html` 同级目录，希望大家用的时候注意一下
### 我在组织Organizations中创建了非 `{用户名}.github.io` 库，并部署了page绕了一大圈
