import IconArcade from '../../assets/icon-arcade.svg'
import IconAdvanced from '../../assets/icon-advanced.svg'
import IconPro from '../../assets/icon-pro.svg'

export const SUBSCRIPTION_PLANS_OPTIONS = {
    arcade: {
        value: 'arcade',
        label: 'Arcade',
        icon: IconArcade,
        priceInDollar: {
            monthly: 9,
            yearly: 90,
        },
    },
    advanced: {
        value: 'advanced',
        label: 'Advanced',
        icon: IconAdvanced,
        priceInDollar: {
            monthly: 12,
            yearly: 120,
        },
    },
    pro: {
        value: 'pro',
        label: 'Pro',
        icon: IconPro,
        priceInDollar: {
            monthly: 15,
            yearly: 150,
        },
    },
} as const
