import { SubscriptionFormsPersonalInfos } from './personal-info/subscription-forms-personal-infos'
import { SubscriptionFormsPlan } from './plan/subscription-forms-plan'
import { SubscriptionWizardContext } from './use-subcription-wizard'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionForms = ({ subscriptionWizard }: Props) => {
    switch (subscriptionWizard.wizardState.currentStep) {
        case 'personalInfos':
            return <SubscriptionFormsPersonalInfos subscriptionWizard={subscriptionWizard} />

        case 'plan':
            return <SubscriptionFormsPlan subscriptionWizard={subscriptionWizard} />

        // TODO: Must be deleted when all form names are handled
        default:
            throw new Error(`unknown form name: ${subscriptionWizard.wizardState.currentStep}`)
    }
}
