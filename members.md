---
layout: page
title: Members 猫スタッフ紹介
heading: Members
section-id: members
---
<p class="interval">
  当店の猫スタッフたちをご紹介します
  <br>
  ぜひ会いに来てください
</p>
<ul class="card-list">
  {% for member in site.data.members %}
    <li class="card">
      <img src="{{ site.baseurl }}/assets/images/{{ member.img }}" alt="{{ member.name }}" width="{{ member.width }}" height="{{ member.height }}">
      <h3>{{ member.name }}</h3>
      <p class="notebook">
        {{ member.desc_lines | newline_to_br  }}
      </p>
    </li>
  {% endfor %}
</ul>
