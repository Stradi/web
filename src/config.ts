export interface IConfig {
  site: {
    name: string;
    url: string;
    image: string;
    defaultSeo: TPageSeo;
  };
  navigation: {
    items: {
      label: string;
      href: string;
      icon?: string;
    }[];
  };
}

export default {
  site: {
    name: 'Batın Evirgen',
    url: 'https://www.batin.sh',
    image: '',
    defaultSeo: {
      title: 'Batın Evirgen',
      titleTemplate: '%s | Batın Evirgen',
      description: 'Developer & Designer.',
      noindex: false,
      nofollow: false,
      twitter: {
        cardType: 'summary_large_image',
        site: '@_stradi',
        handle: '@_stradi',
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
      },
    },
  },
  navigation: {
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Search',
        href: '/search',
      },
    ],
  },
} as IConfig;
