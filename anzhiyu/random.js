var posts=["2026/05/13/hello-world/","2026/05/13/edgetunnel2-blog/","2026/05/13/hexo-blog-setup/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };