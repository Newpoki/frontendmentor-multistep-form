export const SUBSCRIPTION_ADDONS_OPTIONS = {
    onlineService: {
        value: 'onlineService',
        label: 'Online service',
        description: 'Access to multiplayer games',
        priceInDollar: {
            monthly: 1,
            yearly: 10,
        },
    },
    largerStorage: {
        value: 'largerStorage',
        label: 'Advanced',
        description: 'Extra 1TB of cloud save',
        priceInDollar: {
            monthly: 2,
            yearly: 20,
        },
    },
    customProfile: {
        value: 'customProfile',
        label: 'Pro',
        description: 'Custom theme on your profile',
        priceInDollar: {
            monthly: 2,
            yearly: 20,
        },
    },
} as const
