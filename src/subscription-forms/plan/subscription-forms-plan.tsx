import { Button } from '../../components/button'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'

export const SubscriptionFormsPlan = () => {
    return (
        <SubscriptionFormsStepLayout
            title="Select your plan"
            description="You have the option of monthly or yearly billing."
            actions={
                <>
                    <Button variant="text">go back</Button>
                    <Button>next step</Button>
                </>
            }
        >
            pouet
        </SubscriptionFormsStepLayout>
    )
}
