---
layout: layouts/home.njk
emoji:
  label: "llama"
  symbol: 🦙
---

{% set items = apps.education %}
{% set sectionTitle = "Education" %}
{% include "partials/section.html" %}

{% set items = apps.life %}
{% set sectionTitle = "Life" %}
{% include "partials/section.html" %}

{% set items = apps.fun %}
{% set sectionTitle = "Fun" %}
{% include "partials/section.html" %}
