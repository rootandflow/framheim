---
layout: page
title: Test
---

### Env Test

#### Site Config variables

+ site.env - upcase: {{ site.env | upcase }}
+ site.title - downcase: {{ site.title | downcase }}
+ jekyll.environment: **{{ jekyll.environment }}**
+ jekyll.environment - remove 'ment': {{ jekyll.environment | remove: 'ment' }}
+ jekyll.environment - truncated 3: {{ jekyll.environment | truncate: 3, '' }}
+ site.env.prd: {{ site.env.prd }}
+ site.env.stg: {{ site.env.stg }}
+ site.env.dev: {{ site.env.dev }}
+ site.env is NIL: {% if site.env.dev == NIL %}True{% else %}False{% endif %}
+ site.env is equal to Repo name: {% if site.env.dev == site.github.repository_name %}True{% else %}False{% endif %}

#### Data variables

#### Holder.js image placeholders

<img data-src="holder.js/300x200?outline=yes&theme=lava">

##### Site.Github.Versions

+ site.github.versions: {{ site.github.versions }}
+ site.github.versions.jekyll: {{ site.github.versions.jekyll }}
+ site.github.versions.kramdown: {{ site.github.versions.kramdown }}
+ site.github.versions.liquid: {{ site.github.versions.liquid }}
+ site.github.versions.maruku: {{ site.github.versions.maruku }}
+ site.github.versions.rdiscount: {{ site.github.versions.rdiscount }}
+ site.github.versions.redcarpet: {{ site.github.versions.redcarpet }}
+ site.github.versions.RedCloth: {{ site.github.versions.RedCloth }}
+ site.github.versions.jemoji: {{ site.github.versions.jemoji }}
+ site.github.versions.jekyll-mentions: {{ site.github.versions.jekyll-mentions }}
+ site.github.versions.jekyll-redirect-from: {{ site.github.versions.jekyll-redirect-from }}
+ site.github.versions.jekyll-sitemap: {{ site.github.versions.jekyll-sitemap }}
+ site.github.versions.github-pages: {{ site.github.versions.github-pages }}
+ site.github.versions.ruby: {{ site.github.versions.ruby }}

#### Site.Github variables

+ site.github.hostname: {{ site.github.hostname }}
+ site.github.pages_hostname: {{ site.github.pages_hostname }}
+ site.github.api_url: {{ site.github.api_url }}
+ site.github.environment: {{ site.github.environment }}
+ site.github.organization_members: {{ site.github.organization_members }}
+ site.github.build_revision: {{ site.github.build_revision }}
+ site.github.project_title: {{ site.github.project_title }}
+ site.github.project_tagline: {{ site.github.project_tagline }}
+ site.github.owner_name: {{ site.github.owner_name }}
+ site.github.owner_url: {{ site.github.owner_url }}
+ site.github.owner_gravatar_url: {{ site.github.owner_gravatar_url }}
+ site.github.repository_url: {{ site.github.repository_url }}
+ site.github.repository_nwo: {{ site.github.repository_nwo }}
+ site.github.repository_name: {{ site.github.repository_name }}
+ site.github.zip_url: {{ site.github.zip_url }}
+ site.github.tar_url: {{ site.github.tar_url }}
+ site.github.clone_url: {{ site.github.clone_url }}
+ site.github.releases_url: {{ site.github.releases_url }}
+ site.github.issues_url: {{ site.github.issues_url }}
+ site.github.wiki_url: {{ site.github.wiki_url }}
+ site.github.language: {{ site.github.language }}
+ site.github.is_user_page: {{ site.github.is_user_page }}
+ site.github.is_project_page: {{ site.github.is_project_page }}
+ site.github.show_downloads: {{ site.github.show_downloads }}
+ site.github.url: {{ site.github.url }}
+ site.github.contributors: {{ site.github.contributors }}
+ site.github.releases: {{ site.github.releases }}
+ site.github.public_repositories: {{ site.github.public_repositories }}

