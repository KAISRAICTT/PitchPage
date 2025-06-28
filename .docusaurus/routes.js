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
    component: ComponentCreator('/', 'ea9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e22'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/',
        component: ComponentCreator('/business/', '149'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/',
        component: ComponentCreator('/business/gtm/', 'ffd'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/final',
        component: ComponentCreator('/business/gtm/final', '4bd'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/phase0',
        component: ComponentCreator('/business/gtm/phase0', '903'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/phase1',
        component: ComponentCreator('/business/gtm/phase1', '31b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/phase2',
        component: ComponentCreator('/business/gtm/phase2', '637'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/gtm/phase3',
        component: ComponentCreator('/business/gtm/phase3', '8d7'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/',
        component: ComponentCreator('/business/monetization/', '04b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/ads',
        component: ComponentCreator('/business/monetization/ads', 'a17'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/creator-brand-deals-commissions',
        component: ComponentCreator('/business/monetization/creator-brand-deals-commissions', 'dc4'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/developer-app-commissions',
        component: ComponentCreator('/business/monetization/developer-app-commissions', '64f'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/geofencing',
        component: ComponentCreator('/business/monetization/geofencing', '76b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/monetization/others',
        component: ComponentCreator('/business/monetization/others', 'a49'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/business/tam',
        component: ComponentCreator('/business/tam', '4c9'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/',
        component: ComponentCreator('/competition/', 'fb0'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/apple',
        component: ComponentCreator('/competition/apple', '404'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/bytedance',
        component: ComponentCreator('/competition/bytedance', '136'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/google',
        component: ComponentCreator('/competition/google', '236'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/meta',
        component: ComponentCreator('/competition/meta', 'c24'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/niantic-labs',
        component: ComponentCreator('/competition/niantic-labs', '8df'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/competition/snap',
        component: ComponentCreator('/competition/snap', '88b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/features/',
        component: ComponentCreator('/concept/features/', '3c8'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/features/aichat',
        component: ComponentCreator('/concept/features/aichat', '276'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/features/clone',
        component: ComponentCreator('/concept/features/clone', 'eda'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/features/explore',
        component: ComponentCreator('/concept/features/explore', 'a43'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/features/post',
        component: ComponentCreator('/concept/features/post', 'aa8'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/impact',
        component: ComponentCreator('/concept/impact', '37c'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/concept/what',
        component: ComponentCreator('/concept/what', 'e2a'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/core-technology/',
        component: ComponentCreator('/core-technology/', 'eb6'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/core-technology/ar-anchoring',
        component: ComponentCreator('/core-technology/ar-anchoring', 'c70'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/core-technology/edge-computation',
        component: ComponentCreator('/core-technology/edge-computation', '7d0'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/core-technology/generative-ai',
        component: ComponentCreator('/core-technology/generative-ai', '453'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/core-technology/reality-graph',
        component: ComponentCreator('/core-technology/reality-graph', '53d'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/extras/concept/loop',
        component: ComponentCreator('/extras/concept/loop', '342'),
        exact: true
      },
      {
        path: '/extras/go-to-market/strategy',
        component: ComponentCreator('/extras/go-to-market/strategy', 'b07'),
        exact: true
      },
      {
        path: '/extras/monetization/',
        component: ComponentCreator('/extras/monetization/', 'e8e'),
        exact: true
      },
      {
        path: '/extras/pitch/founder',
        component: ComponentCreator('/extras/pitch/founder', '3b5'),
        exact: true
      },
      {
        path: '/extras/product/cloning',
        component: ComponentCreator('/extras/product/cloning', '5f0'),
        exact: true
      },
      {
        path: '/extras/tech/',
        component: ComponentCreator('/extras/tech/', '1dd'),
        exact: true
      },
      {
        path: '/extras/tech/architecture',
        component: ComponentCreator('/extras/tech/architecture', '9ca'),
        exact: true
      },
      {
        path: '/precautions/',
        component: ComponentCreator('/precautions/', '448'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/precautions/content-moderation-policy',
        component: ComponentCreator('/precautions/content-moderation-policy', 'abd'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/precautions/data-privacy-policy',
        component: ComponentCreator('/precautions/data-privacy-policy', '5df'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/precautions/no-gimmick-policy',
        component: ComponentCreator('/precautions/no-gimmick-policy', '3c4'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/precautions/sps-policy',
        component: ComponentCreator('/precautions/sps-policy', '79b'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/psychology/',
        component: ComponentCreator('/psychology/', 'da1'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/psychology/habit-loop',
        component: ComponentCreator('/psychology/habit-loop', '72d'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/psychology/hook-like-slot-machine',
        component: ComponentCreator('/psychology/hook-like-slot-machine', 'efb'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/psychology/no-gimmick-policy',
        component: ComponentCreator('/psychology/no-gimmick-policy', 'c31'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/psychology/why-tiktok-works',
        component: ComponentCreator('/psychology/why-tiktok-works', '9e1'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/',
        component: ComponentCreator('/why/', 'e7f'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/history',
        component: ComponentCreator('/why/history', 'c97'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/key-insights',
        component: ComponentCreator('/why/key-insights', '8bb'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/me',
        component: ComponentCreator('/why/me', '11d'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/now',
        component: ComponentCreator('/why/now', '932'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/why-for-consumers',
        component: ComponentCreator('/why/why-for-consumers', '381'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/why/why-for-creators',
        component: ComponentCreator('/why/why-for-creators', '989'),
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
