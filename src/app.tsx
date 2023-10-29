import { StpeIndicator } from './components/step-indicator'
import { SubscriptionWizardSteps } from './subscription-wizard/subscription-wizard-steps'
import { useSubscriptionWizard } from './subscription-wizard/use-subcription-wizard'

export const App = () => {
    const subscriptionWizard = useSubscriptionWizard()

    const { currentStep } = subscriptionWizard.wizardState

    return (
        <main className="flex flex-1 flex-col desktop:items-center desktop:justify-center">
            <div className="fixed h-[172px] w-full bg-mobile bg-cover desktop:hidden" />

            <div className="relative flex flex-1 flex-col  desktop:m-[105px] desktop:w-[940px] desktop:flex-row desktop:rounded-[15px] desktop:bg-white desktop:shadow-default">
                <header className="flex items-center justify-center gap-4 py-8 desktop:my-4 desktop:ml-4 desktop:w-[274px] desktop:flex-col desktop:items-start desktop:justify-start desktop:gap-8 desktop:rounded-[10px] desktop:bg-desktop desktop:bg-cover desktop:px-8 desktop:py-10">
                    <StpeIndicator
                        stepNumber={1}
                        isCurrentStep={currentStep === 'personalInfos'}
                        title="your info"
                    />
                    <StpeIndicator
                        stepNumber={2}
                        isCurrentStep={currentStep === 'plan'}
                        title="select plan"
                    />
                    <StpeIndicator
                        stepNumber={3}
                        isCurrentStep={currentStep === 'addons'}
                        title="add-ons"
                    />
                    <StpeIndicator
                        stepNumber={4}
                        isCurrentStep={currentStep === 'summary' || currentStep === 'greetings'}
                        title="summary"
                    />
                </header>

                <SubscriptionWizardSteps subscriptionWizard={subscriptionWizard} />
            </div>
        </main>
    )
}

export default App
