import { useCallback } from 'react'
import { Button } from '../../components/button'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'
import {
    SubscriptionWizardContext,
    SubscriptionWizardContextDataAddonsFormValues,
    subscriptionWizardPlanSchema,
} from '../use-subcription-wizard'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProvider } from '../../forms/form-provider'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionFormsAddons = ({ subscriptionWizard }: Props) => {
    const { goToStep, onUpdateAddons } = subscriptionWizard

    const formContext = useForm<SubscriptionWizardContextDataAddonsFormValues>({
        defaultValues: subscriptionWizard.wizardState.data.addons,
        shouldUseNativeValidation: false,
        resolver: zodResolver(subscriptionWizardPlanSchema),
    })

    const handleSubmit = useCallback(
        (formValues: SubscriptionWizardContextDataAddonsFormValues) => {
            onUpdateAddons(formValues)
        },
        [onUpdateAddons]
    )

    const handleGoBack = useCallback(() => {
        goToStep('plan')
    }, [goToStep])

    return (
        <SubscriptionFormsStepLayout
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience."
            actions={
                <>
                    <Button onClick={handleGoBack} variant="text">
                        go back
                    </Button>
                    <Button>next step</Button>
                </>
            }
        >
            <FormProvider
                className="flex flex-1 flex-col"
                formContext={formContext}
                onSubmit={handleSubmit}
            >
                <p>pouet</p>
            </FormProvider>
        </SubscriptionFormsStepLayout>
    )
}
