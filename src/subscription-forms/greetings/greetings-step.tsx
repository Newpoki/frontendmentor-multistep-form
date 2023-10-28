import IconCheck from '../../assets/icon-check.svg'
import { useEffect } from 'react'
import { SubscriptionWizardStepLayout } from '../subscription-wizard-step-layout'

export const GreetingsStep = () => {
    useEffect(() => {
        document.title = 'Subscription - Thank you !'
    }, [])

    return (
        <SubscriptionWizardStepLayout className="flex flex-col items-center py-20 desktop:flex-1 desktop:justify-center">
            {/* @ts-expect-error - TS2322 - Property 'className' does not exist on type 'IntrinsicAttributes' */}
            <IconCheck className="mb-6 w-14 desktop:mb-8 desktop:w-20" />
            <h1 className="mb-2 text-[24px] font-bold leading-none text-blue800 desktop:mb-3 desktop:text-[32px]">
                Thank you!
            </h1>
            <p className="mb-5 text-center text-body-l text-grey500 desktop:mb-9">
                Thanks for confirming your subscription! We hope you have fun using our platform. If
                you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </SubscriptionWizardStepLayout>
    )
}
