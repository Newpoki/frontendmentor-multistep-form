import { useCallback, useMemo, useState } from 'react'
import z from 'zod'

export const subscriptionWizardPersonalInfosStepSchema = z.object({
    email: z.string().min(1, 'This field is required').email('This is not a valid email'),
    name: z.string().min(1, 'This field is required'),
    phone: z
        .string()
        .min(1, 'This field is required')
        .regex(
            /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
            'This is not a valid french number'
        ),
})

export const subscriptionWizardPlanStepSchema = z.object({
    code: z.union([z.literal('arcade'), z.literal('advanced'), z.literal('pro')]),
    isYearlyBilling: z.boolean(),
})

export const subscriptionWizardAddonsStepSchema = z.object({
    codes: z.array(
        z.union([
            z.literal('onlineService'),
            z.literal('largerStorage'),
            z.literal('customProfile'),
        ])
    ),
})

export type SubscriptionWizardContextDataPersonalInfosFormValues = z.infer<
    typeof subscriptionWizardPersonalInfosStepSchema
>

export type SubscriptionWizardContextDataPlanFormValues = z.infer<
    typeof subscriptionWizardPlanStepSchema
>

export type SubscriptionWizardContextDataAddonsFormValues = z.infer<
    typeof subscriptionWizardAddonsStepSchema
>

type SubscriptionWizardContextData = {
    personalInfos: SubscriptionWizardContextDataPersonalInfosFormValues
    plan: SubscriptionWizardContextDataPlanFormValues
    addons: SubscriptionWizardContextDataAddonsFormValues
    summary: null
    greetings: null
}

type SubscriptionWizardStepsNames = keyof SubscriptionWizardContextData

type SubscriptionWizardState = {
    data: SubscriptionWizardContextData
    currentStep: SubscriptionWizardStepsNames
}

export type SubscriptionWizardContext = {
    wizardState: SubscriptionWizardState
    onUpdatePersonalInfos: (
        updatedPersonalInfosData: SubscriptionWizardContextDataPersonalInfosFormValues
    ) => void
    onUpdatePlan: (updatedPlanData: SubscriptionWizardContextDataPlanFormValues) => void
    onUpdateAddons: (updatedAddonsData: SubscriptionWizardContextDataAddonsFormValues) => void
    goToStep: (newStep: SubscriptionWizardStepsNames) => void
}

const defaultWizardStateData: SubscriptionWizardContextData = {
    personalInfos: {
        name: '',
        email: '',
        phone: '',
    },
    plan: {
        code: 'arcade',
        isYearlyBilling: false,
    },
    addons: {
        codes: [],
    },
    summary: null,
    greetings: null,
}

const defaultWizardState: SubscriptionWizardState = {
    currentStep: 'personalInfos',
    data: defaultWizardStateData,
}

export const useSubscriptionWizard = (): SubscriptionWizardContext => {
    const [wizardState, setWizardState] = useState<SubscriptionWizardState>(defaultWizardState)

    const handleUpdatePersonalInfos = useCallback(
        (updatedPersonalInfosData: SubscriptionWizardContextDataPersonalInfosFormValues) => {
            setWizardState((currentState) => ({
                ...currentState,
                data: {
                    ...currentState.data,
                    personalInfos: updatedPersonalInfosData,
                },
            }))
        },
        []
    )

    const handleUpdatePlan = useCallback(
        (updatedPlanData: SubscriptionWizardContextDataPlanFormValues) => {
            setWizardState((currentState) => ({
                ...currentState,
                data: {
                    ...currentState.data,
                    plan: updatedPlanData,
                },
            }))
        },
        []
    )

    const handleUpdateAddons = useCallback(
        (updatedPlanData: SubscriptionWizardContextDataAddonsFormValues) => {
            setWizardState((currentState) => ({
                ...currentState,
                data: {
                    ...currentState.data,
                    addons: updatedPlanData,
                },
            }))
        },
        []
    )

    const handleGoToStep = useCallback((newCurrentStep: SubscriptionWizardStepsNames) => {
        setWizardState((currentState) => ({
            ...currentState,
            currentStep: newCurrentStep,
        }))
    }, [])

    return useMemo(
        () => ({
            wizardState,
            onUpdatePersonalInfos: handleUpdatePersonalInfos,
            onUpdatePlan: handleUpdatePlan,
            onUpdateAddons: handleUpdateAddons,
            goToStep: handleGoToStep,
        }),
        [
            handleGoToStep,
            handleUpdateAddons,
            handleUpdatePersonalInfos,
            handleUpdatePlan,
            wizardState,
        ]
    )
}
