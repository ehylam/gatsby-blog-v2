---
title: Installing JS libraries
date: 2020-08-30T03:33:12.918Z
description: use useEffect and gsap.registerPlugin or something similar..
---
With the way GatsbyJS generates the static website, it attempts to remove any unused JS imports (before DOM creation?), which causes issues the third party JS libraries that are used after the DOM is created - aka tree shaking, therefore we need to prevent the JS library from beening shook off during build!