---
layout: default
---

{% assign guides = site.api %}
<section id="pageBanner">
  <div class="flex page--banner" style="background-color:{{page.['Page Banner Colour']}}">
    <div class="flex__leftCol"></div>
    <div class="flex__mainCol">
      <img src="/docs/{{page.['Page Banner Image']}}">
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
    <div class="flex__leftCol">
      <ul class="section__menu">
        <li class="active"><a href="/docs/">Overview</a></li>
        {% for guide in guides %}
          {% assign guideTitle = guide.title | split: '|' %}
          <li><a href="/docs{{guide.url}}">{{guideTitle[0]}}</a></li>
        {% endfor %}
      </ul>
    </div>
    <div class="flex__mainCol overview--introduction">
      {{page.content | markdownify}}
    </div>
    <div class="flex__rightCol"></div>
  </div>
</section>
{% for guide in guides %}
  <section id="pageGuides">
    <div class="flex page--guides guide--{{guide.Colours}}">
      <a class="guide__link window__link" href="/docs{{guide.url}}"></a>
      <div class="flex__leftCol"></div>
      <div class="flex__mainCol">
        <div class="guide__inner-content">
        {% assign guideTitle = guide.title | split: '|' %}
        <h1>{{guideTitle[0]}}</h1>
        <h1 class="secondary">{{guideTitle[1]}}</h1>
        <p>{{guide.['Overview Description']}}</p>
        {% include button.html buttonText="Read More" %}
        </div>
      </div>
      <div class="flex__rightCol">
        <span class="js-guide-icons">
          {{guide.Icon}}
        </span>
      </div>
    </div>
  </section>
{% endfor %}
