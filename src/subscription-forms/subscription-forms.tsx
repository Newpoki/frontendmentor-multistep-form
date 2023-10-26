import { Forms } from '../types'
import { SubscriptionFormsPersonalInfos } from './personal-info/subscription-forms-personal-infos'
import { SubscriptionFormsPlan } from './plan/subscription-forms-plan'

type Props = {
    forms: Forms
    onNextStep: (formValues: Partial<Forms>) => void
}

export const SubscriptionForms = ({ forms, onNextStep }: Props) => {
    switch (forms.currentFormName) {
        case 'personalInfos':
            return <SubscriptionFormsPersonalInfos onNextStep={onNextStep} />

        case 'plan':
            return <SubscriptionFormsPlan />

        // TODO: Must be deleted when all form names are handled
        default:
            throw new Error(`unknown form name: ${forms.currentFormName}`)
    }
}
