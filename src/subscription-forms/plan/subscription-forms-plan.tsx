import { useCallback, useEffect } from 'react'
import { Button } from '../../components/button'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'
import {
    SubscriptionWizardContext,
    SubscriptionWizardContextDataPlanFormValues,
    subscriptionWizardPlanSchema,
} from '../use-subcription-wizard'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProvider } from '../../forms/form-provider'
import { twMerge } from 'tailwind-merge'
import { ControlledSwitch } from '../../forms/controlled-switch'
import { SubscriptionFormsPlanField } from './subscription-forms-plan-field'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionFormsPlan = ({ subscriptionWizard }: Props) => {
    const { goToStep, onUpdatePlan } = subscriptionWizard

    const formContext = useForm<SubscriptionWizardContextDataPlanFormValues>({
        defaultValues: subscriptionWizard.wizardState.data.plan,
        shouldUseNativeValidation: false,
        resolver: zodResolver(subscriptionWizardPlanSchema),
    })

    const currentPlanCode = formContext.watch('code')
    const currentIsYearlyBilling = formContext.watch('isYearlyBilling')

    const handleSubmit = useCallback(
        (formValues: SubscriptionWizardContextDataPlanFormValues) => {
            onUpdatePlan(formValues)
            goToStep('addons')
        },
        [goToStep, onUpdatePlan]
    )

    const handleGoBack = useCallback(() => {
        goToStep('personalInfos')
    }, [goToStep])

    useEffect(() => {
        document.title = 'Subscription - Plan'
    }, [])

    return (
        <FormProvider
            className="flex flex-1 flex-col"
            formContext={formContext}
            onSubmit={handleSubmit}
        >
            <SubscriptionFormsStepLayout
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
                actions={
                    <>
                        <Button onClick={handleGoBack} variant="text">
                            go back
                        </Button>
                        <Button>next step</Button>
                    </>
                }
            >
                <ul className="mb-6 flex flex-col gap-3">
                    <li>
                        <SubscriptionFormsPlanField
                            isActive={currentPlanCode === 'arcade'}
                            className="w-full"
                            name="code"
                            value="arcade"
                        />
                    </li>
                    <li>
                        <SubscriptionFormsPlanField
                            isActive={currentPlanCode === 'advanced'}
                            className="w-full"
                            name="code"
                            value="advanced"
                        />
                    </li>
                    <li>
                        <SubscriptionFormsPlanField
                            isActive={currentPlanCode === 'pro'}
                            className="w-full"
                            name="code"
                            value="pro"
                        />
                    </li>
                </ul>

                <label className="flex cursor-pointer items-center justify-center gap-6 rounded-lg bg-grey100 py-4 text-[14px] font-medium leading-none text-grey500">
                    <span
                        className={twMerge(
                            'transition-colors',
                            !currentIsYearlyBilling && 'text-blue800'
                        )}
                    >
                        Monthly
                    </span>

                    <ControlledSwitch name="isYearlyBilling" />

                    <span
                        className={twMerge(
                            'transition-colors',
                            currentIsYearlyBilling && 'text-blue800'
                        )}
                    >
                        Yearly
                    </span>
                </label>
            </SubscriptionFormsStepLayout>
        </FormProvider>
    )
}
