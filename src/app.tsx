import { useCallback, useState } from 'react'
import { StpeIndicator } from './components/step-indicator'
import { SubscriptionForms } from './subscription-forms/subscription-forms'
import { Forms } from './types'

const getInitialForms = (): Forms => {
    return {
        currentFormName: 'personalInfos',
        data: {
            personalInfos: {
                name: '',
                email: '',
                phone: '',
            },
        },
    }
}

export const App = () => {
    const [forms, setForms] = useState<Forms>(() => getInitialForms())

    const handleGoNextStep = useCallback((updatedValues: Partial<Forms>) => {
        setForms((currentForms) => ({ ...currentForms, ...updatedValues }))
    }, [])

    return (
        <main className="flex flex-1 flex-col desktop:items-center desktop:justify-center">
            <div className="fixed h-[172px] w-full bg-mobile bg-cover desktop:hidden" />

            <div className="relative flex flex-1 flex-col  desktop:m-[105px] desktop:w-[940px] desktop:flex-row desktop:rounded-[15px] desktop:bg-white desktop:shadow-default">
                <header className="flex items-center justify-center gap-4 py-8 desktop:my-4 desktop:ml-4 desktop:w-[274px] desktop:flex-col desktop:items-start desktop:justify-start desktop:gap-8 desktop:rounded-[10px] desktop:bg-desktop desktop:bg-cover desktop:px-8 desktop:py-10">
                    <StpeIndicator stepNumber={1} isCurrentStep title="your info" />
                    <StpeIndicator stepNumber={2} isCurrentStep={false} title="select plan" />
                    <StpeIndicator stepNumber={3} isCurrentStep={false} title="add-ons" />
                    <StpeIndicator stepNumber={4} isCurrentStep={false} title="summary" />
                </header>

                <SubscriptionForms forms={forms} onNextStep={handleGoNextStep} />
            </div>
        </main>
    )
}

export default App
