# 这里把原作者GitHub-Laziji的代码删了删，改了改。
## 作者VBlog项目地址：https://github.com/GitHub-Laziji/VBlog
### 网站读取 /configuration.json  文件在 {网站部署的用户名}.github.io/static/ 目录
### 使用AccessTokens绑定账号后的 系统配置 选项
### 系统配置 `#/user/configure/main` 需要读取 {githubUsername}.github.io/static/ 目录
### 而不是部署index.html同级目录，希望大家用的时候注意一下
### 我在组织Organizations中创建了非 {用户名}.github.io 库，并部署了page绕了一大圈
