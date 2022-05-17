module.exports = {
  // cache: false,
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  huawei: true,
  title: "Aavin's blog",
  // description: "记录，成为更好的自己。",
  // dest: "public",
  noFoundPageByTencent: false,
  head: [
    ["link", { rel: "icon", href: "/egg.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "Aavin,博客,conimi,nico" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxxx"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },

      // 多级导航
      {
        text: "文档",
        icon: "reco-document",
        items: [
          { text: "前端文档", link: "/documents/frontend" },
          { text: "后端文档", link: "/documents/backend" },
        ],
      },
      { text: "面试", link: "", icon: "reco-blog" },
      // { text: "网站", link: "/notes-other/website", icon: "reco-coding" },

      // {
      //   text: "工具",
      //   icon: "reco-other",
      //   items: [
      //     { text: "图片工具", link: "/notes-other/tool-2" },
      //     { text: "摸鱼必备", link: "/notes-other/tool-3" },
      //     { text: "其他工具", link: "/notes-other/tool-1" },
      //   ],
      // },

      { text: "归档", link: "/timeline/", icon: "reco-date" },

      { text: "留言", link: "/pages/msg", icon: "reco-suggestion" },
      {
        text: "Github",
        link: "https://github.com/Aaving",
        icon: "reco-github",
      },

      { text: "测试", link: "/pages/test", icon: "reco-faq" },
      { text: "关于", link: "/pages/about", icon: "reco-account" },
    ],

    type: "blog",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
      socialLinks: [
        { icon: "reco-github", link: "https://github.com/Aaving" },
        {
          icon: "reco-zhihu",
          link: "https://www.zhihu.com/people/zhong-guo-80-2",
        },
        { icon: "reco-wechat", link: "/wechat.jpg" },
        {
          icon: "reco-bilibili",
          link: "https://space.bilibili.com/352909077?spm_id_from=333.976.0.0",
        },
      ],
    },
    valineConfig: {
      appId: "9nxxqF0t2qyVlwzwriobo05n-gzGzoHsz",
      appKey: "632N1yIpRm8udbOmmr3HDyft",
    },
    // port: 9000,
    // mode: "dark",
    logo: "/egg.png",
    authorAvatar: "/avatar.jpg",
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: "auto",
    sidebarDepth: 6,
    lastUpdated: "上次更新",
    author: "Aavin",
    record: "京备C-12334",
    startYear: "2021",
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        link: "https://www.recoluan.com",
      },
      {
        title: "Torrk's Blog",
        desc: "记录，成为更好的自己。",
        logo: "https://conimi.com/files/images/i.jpg",
        link: "https://conimi.com",
      },
    ],

    // codeTheme: "solarizedlight",
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
  },
  plugins: [
    // 更新刷新插件
    // [
    //   "@vuepress/pwa",
    //   {
    //     serviceWorker: true,
    //     updatePopup: {
    //       message: "发现新内容可用",
    //       buttonText: "刷新",
    //     },
    //   },
    // ],
    // 代码复制弹窗插件
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toUTCString();
          //或者用下面这段
          // const moment = require('moment')
          // moment.locale(lang)
          // return moment(timestamp).toLocaleString()
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 20,
      },
    ],
    // [
    //   "vuepress-plugin-sitemap",
    //   {
    //     hostname: "https://conimi.com",
    //   },
    // ],
    // ["@vuepress-reco/vuepress-plugin-loading-page"],

    // 修改光标
    [
      "cursor-effects",
      {
        size: 3, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],

    // 音乐播放器
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "LOSER",
            artist: "米津玄師",
            url: "https://www.ytmp3.cn/down/73654.mp3",
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "10px", "z-index": "999999" },
      },
    ],

    // 名言名句  在md插入<Boxx/>即可
    ["vuepress-plugin-boxx"],

    // 将echartjs引入
    ["vuepress-plugin-chart"],

    [
      "@vuepress-reco/vuepress-plugin-bulletin-popover",
      {
        width: "100px", // 默认 260px
        title: "公告",
        body: [
          {
            type: "title",
            content: "欢迎光临！",
            style: "text-aligin: center;",
          },
          {
            type: "text",
            content:
              "🎉🎉🎉 Test! Tess! Test!🎉🎉🎉 reco 主题 2.x 已经发布 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了",
          },
        ],
        footer: [
          {
            type: "button",
            text: "留言",
            link: "/pages/msg",
          },
        ],
      },
    ],

    // 看板娘
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat", "whiteCat"], //['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
        clean: true,
        modelStyle: { right: "30px", bottom: "-20px", opacity: "0.8" },
        width: 80,
        height: 150,
      },
    ],

    // 丝带
    [
      "ribbon",
      {
        size: 50, // width of the ribbon, default: 90
        opacity: 0.3, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],
  ],
};
