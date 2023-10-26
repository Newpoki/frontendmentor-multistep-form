import { Controller, useFormContext } from 'react-hook-form'
import { ToggleWrapper, ToggleWrapperProps } from '../../components/toggle-wrapper'
import { SUBSCRIPTION_PLANS_OPTIONS } from './subscription-forms-plan-constants'
import { SubscriptionWizardContextDataPlanFormValues } from '../use-subcription-wizard'
import { twMerge } from 'tailwind-merge'

type Props = Omit<ToggleWrapperProps, 'onChange' | 'onBlur' | 'name' | 'value' | 'type'> & {
    name: string
    value: SubscriptionWizardContextDataPlanFormValues['code']
}

export const SubscriptionFormsPlanField = ({ className, name, value, ...others }: Props) => {
    const { control } = useFormContext()

    const planData = SUBSCRIPTION_PLANS_OPTIONS[value]

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                return (
                    <ToggleWrapper
                        {...others}
                        {...field}
                        name={name}
                        className={twMerge('flex gap-4 px-4 py-5', className)}
                        id={value}
                        type="radio"
                        /** Have to use the value provided as this field is a radio
                         * otherwise, every radio group will have the same value
                         * and it won't works
                         */
                        value={value}
                    >
                        <planData.icon />

                        <div className="flex flex-col items-start gap-2">
                            <span className="text-[16px] font-medium leading-none text-blue800">
                                {planData.label}
                            </span>
                            <span className="text-[14px] font-normal leading-none text-grey500">
                                ${planData.priceInDollar.monthly}/mo
                            </span>
                            <span className="text-[12px] font-normal leading-none text-blue800">
                                2 months free
                            </span>
                        </div>
                    </ToggleWrapper>
                )
            }}
        />
    )
}
