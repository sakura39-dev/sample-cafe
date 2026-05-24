---
layout: default
title: 猫と会えるカフェで やさしいひとときを
---
<section id="main-visual">
  <div class="wrap">
    <div class="container">
      <h2>猫と会えるカフェで<br>やさしいひとときを</h2>
      <p>
        保護猫と過ごせる猫広場と<br>
        ゆっくりお茶を楽しめるティールーム
      </p>
      <div class="btns">
        <a href="#plan-and-menu" class="btn">プランを見る</a>
        <a href="saving-cats.html" class="btn sub">保護活動について</a>
      </div>
    </div>
  </div>
  <div class="cat"><img src="{{ site.baseurl }}/assets/images/cat.png" alt="" width="1177" height="652"></div>
</section>

<div id="about" class="container d-flex">
  <img src="{{ site.baseurl }}/assets/images/logo-ol.svg" alt="SakuRa Cafe ロゴ" width="232" height="150" class="fade-in">
  <p class="text-center">
    架空の猫カフェ SakuRa Cafe のWebサイトです。<br>
    こんなカフェいいなという妄想をお送りします。
  </p>
</div>

<section id="concept">
  <h2>Concept</h2>
  <div class="container">
    <ul class="card-list">
      {% for concept in site.data.concepts %}
        <li class="card">
          <h3>{{ concept.title }}</h3>
          <p>
            {{ concept.desc_lines | newline_to_br  }}
          </p>
          {% if concept.link_text and concept.link %}
            <a href="{{ site.baseurl }}{{ concept.link }}" class="text-link">{{ concept.link_text }}<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="{{ site.baseurl }}/assets/images/cat-member1.jpg" alt="" width="1280" height="853"></div>
      <div class="swiper-slide"><img src="{{ site.baseurl }}/assets/images/cat-member2.jpg" alt="" width="1566" height="1030"></div>
      <div class="swiper-slide"><img src="{{ site.baseurl }}/assets/images/cat-member3.jpg" alt="" width="1920" height="2880"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</section>

<section id="plan-and-menu">
  <h2>Plan &amp; Menu</h2>
  <div class="container">
    <div class="desc">
      <p>
        猫広場とティールームに分かれており、どちらをご利用いただくか、ご入店時にお選びいただきます。<br>
        猫広場のご利用料金にはフリードリンク代が含まれますが、ティールームのメニューとは異なります。
      </p>
      <img src="{{ site.baseurl }}/assets/images/floor_plan.svg" alt="間取り図" width="627" height="530">
    </div>
    <section class="plan">
      <h3 class="icon-cat">猫広場ご利用プラン</h3>
      <ul class="card-list">
        {% for plan in site.data.plans %}
          <li class="card">
            <h4>{{ plan.name }}</h4>
            <div class="fee">
              <div class="time"><span>{{ plan.time }}</span>分</div>
              <div class="price"><span>{{ plan.price }}</span>円</div>
            </div>
            <p>
              {{ plan.desc_lines | newline_to_br }}
            </p>
          </li>
        {% endfor %}
      </ul>
      <div class="annotation">
        <p><i class="fa fa-asterisk" aria-hidden="true"></i>価格は税込みです。</p>
        <p><i class="fa fa-asterisk" aria-hidden="true"></i>猫広場のご利用料金にはフリードリンク代が含まれます。</p>
      </div>
    </section>
    <section class="cafe-menu">
      <h3 class="icon-cup">メニュー</h3>
      <dl class="d-flex column">
        {% for item in site.data.menu.drinks.items limit: 4 %}
          <div class="row">
            <dt>{{ item.name }}</dt>
            <dd>{{ item.price }}円</dd>
          </div>
        {% endfor %}
      </dl>
      <div class="d-flex">
        <div class="annotation">
          <p><i class="fa fa-asterisk" aria-hidden="true"></i>価格は税込みです。</p>
          <p><i class="fa fa-asterisk" aria-hidden="true"></i>上記メニューは一例です。</p>
        </div>
        <div class="text-right"><a href="menu.html" class="btn sub">メニューを見る</a></div>
      </div>
    </section>
  </div>

</section>

<section id="shop-info">
  <div class="container">
    <h2>Shop Info</h2>
    <div class="d-flex">
      <div class="shop-card">
        <p class="name">{{ site.data.shop-info.name }}</p>
        <p><i class="fa-regular fa-clock"></i>{{ site.data.shop-info.open_hours }}　{{ site.data.shop-info.closed_days }}</p>
        <strong>{{ site.data.shop-info.caution }}</strong>
        <address>
          <p><i class="fa-solid fa-location-dot"></i>{{ site.data.shop-info.location }}</p>
          <p><i class="fa-solid fa-phone"></i>{{ site.data.shop-info.phone }}</p>
        </address>
      </div>
      {{ site.data.shop-info.map_html | safe }}
    </div>
  </div>
</section>
