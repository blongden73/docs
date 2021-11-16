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
      <span class="js-guide-icons inview">
        {{page.Icon}}
      </span>
    </div>
  </div>
</section>
{% for section in sections %}
  <section id="{{section.Title | replace: " ", "-" | downcase}}" class="guides__container">
    <div class="flex guides--content">
      <div class="flex__leftCol">
        {% if forloop.index == 1 %}
        <div class="section__menu-anchor"></div>
        <ul class="section__menu">
          <li><a href="/docs/">Overview</a></li>
          {% for guide in guides %}
            {% assign guideTitle = guide.title | split: '|' %}
            <li {% if guide.title == page.title %} class="active" {% endif %}>
              <a href="/docs{{guide.url}}">{{guideTitle[0]}}</a>
              {% if guide.title == page.title %}
                <ul class="section__menu-sub">
                  {% assign submenu = sections %}
                  {% for items in submenu %}
                    <li><a href="#{{items.Title | replace: " ", "-" | downcase}}">{{items.Title}}</a></li>
                  {% endfor %}
                </ul>
              {% endif %}
            </li>
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
      <div class="flex__rightCol">
      </div>
    </div>
  </section>
{% endfor %}
