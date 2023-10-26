import { useTransition, animated } from 'react-spring'
import { SubscriptionFormsPersonalInfos } from './personal-info/subscription-forms-personal-infos'
import { SubscriptionFormsPlan } from './plan/subscription-forms-plan'
import { SubscriptionWizardContext } from './use-subcription-wizard'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionForms = ({ subscriptionWizard }: Props) => {
    const { currentStep } = subscriptionWizard.wizardState

    const transitions = useTransition(currentStep, {
        from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' } as const,
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' } as const,
        leave: {
            opacity: 0,
            transform: 'translate3d(-100vw, 0, 0)',
        } as const,
    })

    return (
        <div className="relative flex flex-1 flex-col overflow-hidden">
            {transitions((props, item) => (
                <animated.div
                    style={props}
                    // absolute is needed here due to how springs works in DOM to animate elements
                    className="absolute bottom-0 left-0 right-0 top-0 flex flex-1 flex-col"
                >
                    {item === 'personalInfos' && (
                        <SubscriptionFormsPersonalInfos subscriptionWizard={subscriptionWizard} />
                    )}
                    {item === 'plan' && (
                        <SubscriptionFormsPlan subscriptionWizard={subscriptionWizard} />
                    )}
                </animated.div>
            ))}
        </div>
    )
}
