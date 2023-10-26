import { Button } from '../../components/button'
import { Textfield } from '../../components/textfield'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'

export const SubscriptionFormsPersonalInfos = () => {
    return (
        <SubscriptionFormsStepLayout
            title="Personal info"
            description="Please provide your name, email address, and phone number"
            actions={
                <>
                    <Button variant="text">go back</Button>
                    <Button>next step</Button>
                </>
            }
        >
            <div className="flex flex-col gap-4 desktop:gap-6">
                <Textfield label="name" placeholder="e.g. Stephen King" />
                <Textfield label="email" placeholder="e.g. stephenking@lorem.com" />
                <Textfield label="phone number" placeholder="e.g. +33 6 12 34 56 78" />
            </div>
        </SubscriptionFormsStepLayout>
    )
}
