module.exports = {
  title: 'Hualy',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {
        text: '前端',
        link: '/'
      },
      {
        text: '计算机基础',
        link: '/baseinfo/'
      },
      { text: 'GitHub', link: 'https://github.com/hualy' },
      { text: 'ProcessOn', link: 'https://www.processon.com/u/568e2443e4b06d7935106a8e/profile' },
    ],
    sidebar: {
      '/baseinfo/': ['', 'algorithms']
    },
  },
  lastUpdated: '上次更新',
  smoothScroll: true
}