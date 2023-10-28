import { SubscriptionFormsAddons } from './addons/subscription-forms-addons'
import { SubscriptionFormsGreetings } from './greetings/subscription-forms-greetings'
import { SubscriptionFormsPersonalInfos } from './personal-info/subscription-forms-personal-infos'
import { SubscriptionFormsPlan } from './plan/subscription-forms-plan'
import { SubscriptionFormsSummary } from './summary/subscription-forms-step-summary'
import { SubscriptionWizardContext } from './use-subcription-wizard'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionForms = ({ subscriptionWizard }: Props) => {
    const { currentStep } = subscriptionWizard.wizardState

    return (
        // hide overflow so when steps slide animation kicks in
        // it does not overflow outside this container
        <div className="flex flex-1 overflow-hidden">
            {currentStep === 'personalInfos' && (
                <SubscriptionFormsPersonalInfos subscriptionWizard={subscriptionWizard} />
            )}
            {currentStep === 'plan' && (
                <SubscriptionFormsPlan subscriptionWizard={subscriptionWizard} />
            )}
            {currentStep === 'addons' && (
                <SubscriptionFormsAddons subscriptionWizard={subscriptionWizard} />
            )}
            {currentStep === 'summary' && (
                <SubscriptionFormsSummary subscriptionWizard={subscriptionWizard} />
            )}
            {currentStep === 'greetings' && <SubscriptionFormsGreetings />}
        </div>
    )
}
