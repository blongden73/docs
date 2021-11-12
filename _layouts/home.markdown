---
layout: default
---

{% assign guides = site.guides %}
<section id="pageBanner">
  <div class="flex page--banner" style="background-color:{{page.['Page Banner Colour']}}">
    <div class="flex__leftCol"></div>
    <div class="flex__mainCol">
      <img src="{{page.['Page Banner Image']}}">
    </div>
    <div class="flex__rightCol"></div>
  </div>
</section>
<section id="pageTitle">
  <div class="flex page--title">
    <div class="flex__leftCol"></div>
    <div class="flex__mainCol">
      {% assign pageTitle = page.title | split: '|' %}
      <h1>{{pageTitle[0]}}</h1>
      <h1 class="secondary">{{pageTitle[1]}}</h1>
    </div>
    <div class="flex__rightCol"></div>
  </div>
</section>
<section id="pageDescription">
  <div class="flex">
    <div class="flex__leftCol"></div>
    <div class="flex__mainCol">
      {{page.content | markdownify}}
    </div>
    <div class="flex__rightCol"></div>
  </div>
</section>
{% for guide in guides %}
  <section id="pageGuides">
    <div class="flex page--guides guide--{{guide.Colours}}">
      <div class="flex__leftCol"></div>
      <div class="flex__mainCol">
        {% assign guideTitle = guide.title | split: '|' %}
        <h1>{{guideTitle[0]}}</h1>
        <h1 class="secondary">{{guideTitle[1]}}</h1>
      </div>
      <div class="flex__rightCol"></div>
    </div>
  </section>
{% endfor %}
