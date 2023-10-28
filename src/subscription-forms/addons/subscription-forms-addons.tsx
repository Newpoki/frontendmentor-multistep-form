import { useCallback, useEffect } from 'react'
import { Button } from '../../components/button'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'
import {
    SubscriptionWizardContext,
    SubscriptionWizardContextDataAddonsFormValues,
    subscriptionWizardAddonsSchema,
} from '../use-subcription-wizard'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProvider } from '../../forms/form-provider'
import { SubscriptionFormsAddonField } from './subscription-forms-addon-field'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionFormsAddons = ({ subscriptionWizard }: Props) => {
    const { goToStep, onUpdateAddons } = subscriptionWizard

    const formContext = useForm<SubscriptionWizardContextDataAddonsFormValues>({
        defaultValues: subscriptionWizard.wizardState.data.addons,
        shouldUseNativeValidation: false,
        resolver: zodResolver(subscriptionWizardAddonsSchema),
    })

    const { isYearlyBilling } = subscriptionWizard.wizardState.data.plan

    const handleSubmit = useCallback(
        (formValues: SubscriptionWizardContextDataAddonsFormValues) => {
            onUpdateAddons(formValues)
            goToStep('summary')
        },
        [goToStep, onUpdateAddons]
    )

    const handleGoBack = useCallback(() => {
        goToStep('plan')
    }, [goToStep])

    useEffect(() => {
        document.title = 'Subscription - Addons'
    }, [])

    return (
        <FormProvider
            className="flex flex-1 flex-col"
            formContext={formContext}
            onSubmit={handleSubmit}
        >
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
                <ul className="flex flex-col gap-3">
                    <li>
                        <SubscriptionFormsAddonField
                            name="codes"
                            isYearlyBilling={isYearlyBilling}
                            value="onlineService"
                        />
                    </li>
                    <li>
                        <SubscriptionFormsAddonField
                            name="codes"
                            isYearlyBilling={isYearlyBilling}
                            value="largerStorage"
                        />
                    </li>
                    <li>
                        <SubscriptionFormsAddonField
                            name="codes"
                            isYearlyBilling={isYearlyBilling}
                            value="customProfile"
                        />
                    </li>
                </ul>
            </SubscriptionFormsStepLayout>
        </FormProvider>
    )
}
