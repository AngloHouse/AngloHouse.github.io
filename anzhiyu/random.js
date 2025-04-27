var posts=["2025/04/26/hello-world/","2025/04/27/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };