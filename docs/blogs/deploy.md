---
title: 博客部署
date: 2021-12-1
author: Aavin
categories:
  - 博客搭建
tags:
  - 博客部署
---
### 1.安装依赖

```
npm i
```

### 2.启动项目

```
npm run docs:dev
```

### 3.打包项目

```
npm run docs:build
```

### 4.部署项目

#### (1) 部署到 github pages

在 github 创建仓库：`<USERNAME>.github.io`，添加本地 ssh 公匙

```
# 本地打开git bash
# 找公匙
cd ~/.ssh
# 若出现bash: .../.ssh: No such file or directory，则表示没有公匙

# 若没有公匙，则建公匙
ssh-keygen -t rsa -C "username@email.com"

# 查看公匙
cat ~/.ssh/id_rsa.pub

# 复制下面的公匙
ssh-rsa ...

# 进到github/个人/settings/ssh...添加公匙
```

#### (2) 修改 deploy.sh

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@gitee.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# git push -f git@gitee.com:Aavin/Aavin.gitee.io.git master
git push -f git@github.com:Vueu/Vueu.github.io.git master

# 删除dist
cd ../ && rm -rf dist
```

#### (3) 推送项目到 github

在项目根目录打开 Git bash 输入：`npm run deploy` 执行该脚本，

若执行 deploy.sh 出错，先打包完项目 `npm run docs:build`，

注释掉 deploy.sh 的 `npm run docs:build`，

再在 git bash 执行 deploy.sh

![img]()

#### (4) 博客地址

```
https://<USERNAME>.github.io
```
