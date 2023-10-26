import { useCallback } from 'react'
import { Button } from '../../components/button'
import { FormProvider } from '../../forms/form-provider'
import { SubscriptionFormsStepLayout } from '../subscription-forms-step-layout'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledTextfield } from '../../forms/controlled-textfield'
import { Forms } from '../../types'

const personalInfosSchema = z.object({
    email: z.string().min(1, 'This field is required').email('This is not a valid email'),
    name: z.string().min(1, 'This field is required'),
    phone: z.string().min(1, 'This field is required'),
})

type PersonalInfosFormValues = z.infer<typeof personalInfosSchema>

const personalInfosFormDefaultValues: PersonalInfosFormValues = {
    email: '',
    name: '',
    phone: '',
}

type Props = {
    onNextStep: (formValues: Partial<Forms>) => void
}

export const SubscriptionFormsPersonalInfos = ({ onNextStep }: Props) => {
    const formContext = useForm<PersonalInfosFormValues>({
        defaultValues: personalInfosFormDefaultValues,
        shouldUseNativeValidation: false,
        resolver: zodResolver(personalInfosSchema),
    })

    const handleGoToNextStep = useCallback((formValues: PersonalInfosFormValues) => {
        console.log({ formValues })
        onNextStep({ currentFormName: 'plan' })
    }, [])

    return (
        <FormProvider
            className="flex flex-1 flex-col"
            formContext={formContext}
            onSubmit={handleGoToNextStep}
        >
            <SubscriptionFormsStepLayout
                title="Personal info"
                description="Please provide your name, email address, and phone number"
                actions={
                    <>
                        <Button type="button" variant="text">
                            go back
                        </Button>
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
