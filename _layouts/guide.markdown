---
layout: default
---

{% assign sections = page.Sections %}
<section id="guideHeader">
  <div class="flex page--guides guide--{{page.Colours}}">
    <div class="flex__leftCol"></div>
    <div class="flex__mainCol">
      <div class="guide__inner-content">
      {% assign guideTitle = page.title | split: '|' %}
      <h1>{{guideTitle[0]}}</h1>
      <h1 class="secondary">{{guideTitle[1]}}</h1>
      </div>
    </div>
    <div class="flex__rightCol">
      {{page.Icon}}
    </div>
  </div>
</section>
{% for section in sections %}
  <section id="{{section.Title | replace: " ", "-" | downcase}}">
    <div class="flex guides--content">
      <div class="flex__leftCol"></div>
      <div class="flex__mainCol">
        {% if section.Title %}
          <h2>{{section.Title}}</h2>
          {{section.Text | markdownify }}
        {% endif %}
      </div>
      <div class="flex__rightCol"></div>
    </div>
  </section>
{% endfor %}
