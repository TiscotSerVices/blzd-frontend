import { MenuEntry } from '@blzd-dev/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'BLZD to xBLZD',
    icon: 'TradeIcon',
    href: '/xBLZD',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'CaveIcon',
    href: '/caves',
  },
  {
    label: 'Blizzard',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'LibreSwap',
        href: 'https://pancakeswap.info/token/0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/TiscotSerVices',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://medium.com/@libreswap',
    external: true,
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    external: true,
    href: 'https://github.com/blzd-dev/blzd-frontend/blob/master/public/files/gemzAudit.pdf',
  },
]

export default config
