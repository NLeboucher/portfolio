<script setup>
useHead({
  title: 'Blog',
})
/*
let classifier = await pipeline('image-classification', 'Xenova/vit-base-patch16-224');
let url = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/tiger.jpg';
let output = await classifier(url, { topk: 3 });
*/
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.blog') }}
      </h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li class="blog-post-item">
        
          <a href="/emnist">

            <figure class="blog-banner-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPEx0nQ67nN7oBcZuKAXLCSl6-HoTFW-_hA&usqp=CAU" alt="ADLink Documentation" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Live demo</p>

                <span class="dot" />

                <time datetime="2023-06-2">June 2, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">Live Image Classifier</h3>

              <p class="blog-text">
                This demo showcases a live image classifier that can take hand-written content on the page and convert it to characters and words. The classifier is trained on a large dataset of handwritten images, and it can recognize a wide variety of characters and words. The demo allows users to draw or write on the page, and the classifier will then convert the image to text in real time. This demo is a great way to show off the power of machine learning and artificial intelligence.
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/cara-install-phpmyadmin-di-android-menggunakan-termux">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685699212595/40c994c9-0d1a-4eba-a82b-76c5da81683f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Cara Install PHPMyAdmin Di Android Menggunakan Termux" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2023-05-21">May 21, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">Cara Install PHPMyAdmin Di Android Menggunakan Termux</h3>

              <p class="blog-text">
                PHPMyAdmin adalah alat yang digunakan untuk mengelola database yang dapat diakses melalui web.


              </p>

            </div>

          </a>
        </li>

      </ul>
    </section>
  </article>
</template>
