import { useCallback } from 'react'
import { Button } from '../../components/button'
import { FormProvider } from '../../forms/form-provider'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledTextfield } from '../../forms/controlled-textfield'
import {
    SubscriptionWizardContext,
    SubscriptionWizardContextDataPersonalInfosFormValues,
    subscriptionWizardPersonalInfosSchema,
} from '../use-subcription-wizard'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SubscriptionFormsPersonalInfos = ({ subscriptionWizard }: Props) => {
    const { goToStep, onUpdatePersonalInfos } = subscriptionWizard

    const formContext = useForm<SubscriptionWizardContextDataPersonalInfosFormValues>({
        defaultValues: subscriptionWizard.wizardState.data.personalInfos,
        shouldUseNativeValidation: false,
        resolver: zodResolver(subscriptionWizardPersonalInfosSchema),
    })

    const handleSubmit = useCallback(
        (formValues: SubscriptionWizardContextDataPersonalInfosFormValues) => {
            onUpdatePersonalInfos(formValues)
            goToStep('plan')
        },
        [goToStep, onUpdatePersonalInfos]
    )

    return (
        <FormProvider
            className="flex flex-1 flex-col"
            formContext={formContext}
            onSubmit={handleSubmit}
        >
            <SubscriptionFormsStepLayout
                title="Personal info"
                description="Please provide your name, email address, and phone number"
                actions={
                    <>
                        <Button>next step</Button>
                    </>
                }
            >
                <div className="flex flex-col gap-4 desktop:gap-6">
                    <ControlledTextfield name="name" label="name" placeholder="e.g. Stephen King" />
                    <ControlledTextfield
                        name="email"
                        label="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                    <ControlledTextfield
                        name="phone"
                        label="phone number"
                        placeholder="e.g. +33 6 12 34 56 78"
                    />
                </div>
            </SubscriptionFormsStepLayout>
        </FormProvider>
    )
}
