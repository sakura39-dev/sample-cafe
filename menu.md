---
layout: page
title: Menu メニュー
heading: Menu
section-id: menu
---
<p class="interval">
  ラストオーダーは19:00<br>
  全て税込み価格です
</p>
{% for category in site.data.menu %}
  {% assign cat_data = category[1] %}
  <div class="dl-container {% if cat_data.reverse %}reverse{% endif %}">
    <dl class="category">
      <dt>{{ cat_data.name }}</dt>
      <dd>
        <dl>
          {% for item in cat_data.items %}
            <div class="row">
              <dt>{{ item.name }}</dt>
              <dd>{{ item.price }}円</dd>
            </div>
          {% endfor %}
        </dl>
      </dd>
    </dl>
    <figure>
      <img src="{{ site.baseurl }}/assets/images/{{ cat_data.img }}" alt="{{ cat_data.img_alt }}" width="{{ cat_data.img_width }}" height="{{ cat_data.img_height }}">
      <figcaption {% unless cat_data.reverse %}class="md-right"{% endunless %}>{{ cat_data.img_alt }}</figcaption>
    </figure>
  </div>
{% endfor %}
