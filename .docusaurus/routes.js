import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '7ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '55e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '44c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ab7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '24b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e22'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/loop',
        component: ComponentCreator('/concept/loop', '1b3'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/go-to-market/strategy',
        component: ComponentCreator('/go-to-market/strategy', 'd7d'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/monetization/',
        component: ComponentCreator('/monetization/', '2d4'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/pitch/founder',
        component: ComponentCreator('/pitch/founder', 'bd5'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/product/cloning',
        component: ComponentCreator('/product/cloning', '4b8'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/tech/',
        component: ComponentCreator('/tech/', 'e4b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/tech/architecture',
        component: ComponentCreator('/tech/architecture', 'ae5'),
        exact: true,
        sidebar: "mainSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
