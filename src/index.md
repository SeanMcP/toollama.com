---
layout: layouts/home.njk
emoji:
  label: "llama"
  symbol: 🦙
---

{% set items = apps.education %}
{% set sectionTitle = "Education" %}
{% include "partials/tool-section.njk" %}

{% set items = apps.games %}
{% set sectionTitle = "Games" %}
{% include "partials/tool-section.njk" %}

{% set items = apps.life %}
{% set sectionTitle = "Life" %}
{% include "partials/tool-section.njk" %}

{% set items = apps.fun %}
{% set sectionTitle = "Fun" %}
{% include "partials/tool-section.njk" %}
