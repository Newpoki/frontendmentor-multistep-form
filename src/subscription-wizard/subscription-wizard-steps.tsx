import { AddonsStep } from './addons/addons-step'
import { GreetingsStep } from './greetings/greetings-step'
import { PersonalInfosStep } from './personal-info/personal-infos-step'
import { PlanStep } from './plan/plan-step'
import { SummaryStep } from './summary/summary-step'
import { SubscriptionWizardContext } from './use-subcription-wizard'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionWizardSteps = ({ subscriptionWizard }: Props) => {
    const { currentStep } = subscriptionWizard.wizardState

    return (
        // hide overflow so when steps slide animation kicks in
        // it does not overflow outside this container
        <div className="flex flex-1 overflow-hidden">
            {currentStep === 'personalInfos' && (
                <PersonalInfosStep subscriptionWizard={subscriptionWizard} />
            )}
            {currentStep === 'plan' && <PlanStep subscriptionWizard={subscriptionWizard} />}
            {currentStep === 'addons' && <AddonsStep subscriptionWizard={subscriptionWizard} />}
            {currentStep === 'summary' && <SummaryStep subscriptionWizard={subscriptionWizard} />}
            {currentStep === 'greetings' && <GreetingsStep />}
        </div>
    )
}
