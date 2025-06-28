module.exports = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Concept (What?)',
      items: [
        'concept/what',
        {
          type: 'category',
          label: 'Features',
          link: { type: 'doc', id: 'concept/features/index' },
          items: [
            'concept/features/post',
            'concept/features/clone',
            'concept/features/explore',
            'concept/features/aichat',
          ],
        },
        'concept/impact',
      ],
    },
    {
      type: 'category',
      label: 'Why?',
      link: { type: 'doc', id: 'why/index' },
      items: [
        'why/me',
        'why/now',
        'why/why-for-creators',
        'why/why-for-consumers',
        'why/key-insights',
        'why/history',
      ],
    },
    {
      type: 'category',
      label: 'Technology',
      link: { type: 'doc', id: 'core-technology/index' },
      items: [
        'core-technology/ar-anchoring',
        'core-technology/reality-graph',
        'core-technology/generative-ai',
        'core-technology/edge-computation',
      ],
    },
    {
      type: 'category',
      label: 'Psychology',
      link: { type: 'doc', id: 'psychology/index' },
      items: [
        'psychology/habit-loop',
        'psychology/why-tiktok-works',
        'psychology/hook-like-slot-machine',
      ],
    },
    {
      type: 'category',
      label: 'Business',
      link: { type: 'doc', id: 'business/index' },
      items: [
        'business/tam',
        {
          type: 'category',
          label: 'Monetization Avenues',
          link: { type: 'doc', id: 'business/monetization/index' },
          items: [
            'business/monetization/ads',
            'business/monetization/creator-brand-deals-commissions',
            'business/monetization/geofencing',
            'business/monetization/developer-app-commissions',
            'business/monetization/others',
          ],
        },
        {
          type: 'category',
          label: 'GTM & Growth Strategy',
          link: { type: 'doc', id: 'business/gtm/index' },
          items: [
            'business/gtm/phase0',
            'business/gtm/phase1',
            'business/gtm/phase2',
            'business/gtm/phase3',
            'business/gtm/final',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Competition',
      link: { type: 'doc', id: 'competition/index' },
      items: [
        'competition/meta',
        'competition/bytedance',
        'competition/snap',
        'competition/google',
        'competition/niantic-labs',
        'competition/apple',
      ],
    },
  ],
};
