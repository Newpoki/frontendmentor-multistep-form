import { useFormContext, useWatch } from 'react-hook-form'
import { ToggleWrapper, ToggleWrapperProps } from '../../components/toggle-wrapper'
import { SubscriptionWizardContextDataAddonsFormValues } from '../use-subcription-wizard'
import { twMerge } from 'tailwind-merge'
import { useMemo } from 'react'
import { SUBSCRIPTION_ADDONS_OPTIONS } from './subscription-forms-addons-constants'
import { Checkbox } from '../../components/checkbox'

type Props = Omit<ToggleWrapperProps, 'onChange' | 'onBlur' | 'name' | 'value' | 'type'> & {
    name: keyof SubscriptionWizardContextDataAddonsFormValues
    value: SubscriptionWizardContextDataAddonsFormValues['codes'][number]
    isYearlyBilling: boolean
}

export const SubscriptionFormsAddonField = ({
    className,
    isYearlyBilling,
    name,
    value,
    ...others
}: Props) => {
    const { control, register } = useFormContext<SubscriptionWizardContextDataAddonsFormValues>()

    const codes = useWatch({ control, name: 'codes' })

    const planData = SUBSCRIPTION_ADDONS_OPTIONS[value]

    const displayedPrice = useMemo(() => {
        return isYearlyBilling
            ? `+$${planData.priceInDollar.yearly}/yr`
            : `+$${planData.priceInDollar.monthly}/mo`
    }, [isYearlyBilling, planData.priceInDollar.monthly, planData.priceInDollar.yearly])

    const isAddonChecked = codes.includes(value)

    return (
        <ToggleWrapper
            {...others}
            {...register('codes')}
            name={name}
            className={twMerge('flex items-center gap-4 px-4 py-3', className)}
            id={value}
            type="checkbox"
            isActive={isAddonChecked}
            /** Have to use the value provided as this field is a radio
             * otherwise, every radio group will have the same value
             * and it won't works
             */
            value={value}
        >
            <Checkbox checked={isAddonChecked} />
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium leading-none text-blue800">
                        {planData.label}
                    </span>
                    <span className="text-[12px] font-normal leading-none text-grey500">
                        {planData.description}
                    </span>
                </div>
                <span className="text-[12px] font-normal leading-none text-purple500">
                    {displayedPrice}
                </span>
            </div>
        </ToggleWrapper>
        //         )
        //     }}
        // />
    )
}
