---
layout: default
---

{% assign guides = site.guides %}
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
      <div class="flex__leftCol">
        {% if forloop.index == 1 %}
        <ul class="section__menu">
          <li>Overview</li>
          {% for guide in guides %}
            {% assign guideTitle = guide.title | split: '|' %}
            <li><a href="/docs{{guide.url}}">{{guideTitle[0]}}</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      <div class="flex__mainCol">
        {% if section.Title %}
          <div class="guides__title-wrapper">
            <h2>{{section.Title}}</h2>
            <span data-uri="/docs{{page.url}}#{{section.Title | replace: " ", "-" | downcase}}" class="guides__title-icon js-copy-clipboard">
              {% include shareIcon.html %}
            </span>
          </div>
          {{section.Text | markdownify }}
        {% endif %}
      </div>
      <div class="flex__rightCol"></div>
    </div>
  </section>
{% endfor %}
