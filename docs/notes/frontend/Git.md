---
title: Git
date: 2022-4-30
author: Aavin
categories: 
 - 前端笔记
tags: 
 - Git
 - 前端工程化
---
### 1.版本控制

- 集中式SVN

  svn因为每次存的都是差异 需要的硬盘空间会相对的小一点  可是回滚的速度会很慢

  优点:

  代码存放在单一的服务器上 便于项目的管理

  缺点:

  服务器宕机: 员工写的代码得不到保障

  服务器炸了: 整个项目的历史记录都会丢失
- 分布式Git

  git每次存的都是项目的完整快照 需要的硬盘空间会相对大一点

  (Git团队对代码做了极致的压缩 最终需要的实际空间比svn多不了太多 可是Git的回滚速度极快)

  优点: 完全的分布式

  缺点: 学习起来比SVN陡峭

### 2.Git配置

Git提供了一个叫做git config的命令来配置或读取相应的工作环境变量而正是由这些环境变量，决定了Git在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方:

/etc/gitconfag文件: 系统中对所有用户都普遍适用的配置。若使用git
config 时用 --system 选项，读写的就是这个文件。

~/.gitconfig文件: 用户目录下的配置文件只适用于该用户。若使用gitconfig时用 --globa1 选项，读写的就是这个文件。

.git/config 文件: 当前项目的 Git目录中的配置文件（也就是工作目录中的 .git/config 文件）这里的配置仅仅针对当前项目有效。

```bash
# 查看git版本
git --version

# git config 配置信息
# 用户信息  可以再次执行修改用户信息
git config --global user.name "ljr"
git config --global user.email gdutcs2@163.com

# 检查配置信息
git config --list
```

### 3.基本概念

- 区域

  工作区：程序员新增文件修改文件删除文件，git 不管

  暂存区：把一系列操作暂存起来

  版本库：暂存区文件提交到这
- 对象

  Git对象：创建一个文件夹，然后 `git init` 初始化，生成Git对象

  ```
  .git 文件夹下的文件
  	hooks 目录包含客户端或服务端的钩子脚本
      info 包含一个全局性排除文件（里面的文件不需要git管理）
      logs 保存日志信息
      objects 目录存储所有数据内容;
      refs 目录存储指向威据(分支)的提交对象的指针
      config 文件包含项目特有的配置选项
      description 用来显示对仓库的描述信息
      HEAD 文件指示目前被检出的分支
      index 文件保存暂存区信息
  ```
  树对象

  提交对象
