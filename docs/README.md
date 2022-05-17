## 搭建并部署
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

#### (1) 部署到github pages
在github创建仓库：`<USERNAME>.github.io`，添加本地ssh公匙
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

#### (2) 修改deploy.sh
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
#### (3) 推送项目到github
在项目根目录打开Git bash输入：`npm run deploy` 执行该脚本，

若执行 deploy.sh 出错，先打包完项目`npm run docs:build`，

注释掉deploy.sh的`npm run docs:build`，

再在 git bash 执行deploy.sh

#### (4) 博客地址
```
https://<USERNAME>.github.io
```
