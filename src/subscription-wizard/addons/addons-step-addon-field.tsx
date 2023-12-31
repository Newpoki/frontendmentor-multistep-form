import { useFormContext, useWatch } from 'react-hook-form'
import { ToggleWrapper, ToggleWrapperProps } from '../../components/toggle-wrapper'
import { SubscriptionWizardContextDataAddonsFormValues } from '../use-subcription-wizard'
import { twMerge } from 'tailwind-merge'
import { useMemo } from 'react'
import { Checkbox } from '../../components/checkbox'
import { SUBSCRIPTION_ADDONS_OPTIONS } from './addons-step-constants'

type Props = Omit<ToggleWrapperProps, 'onChange' | 'onBlur' | 'name' | 'value' | 'type'> & {
    name: keyof SubscriptionWizardContextDataAddonsFormValues
    value: SubscriptionWizardContextDataAddonsFormValues['codes'][number]
    isYearlyBilling: boolean
}

export const AddonsFormAddonField = ({
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
            className={twMerge(
                'flex items-center gap-4 px-4 py-3 desktop:px-6 desktop:py-5',
                className
            )}
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
                <div className="flex flex-col gap-1 desktop:gap-2">
                    <span className="text-[14px] font-medium leading-none text-blue800 desktop:text-[16px]">
                        {planData.label}
                    </span>
                    <span className="text-[12px] font-normal leading-none text-grey500 desktop:text-[16px]">
                        {planData.description}
                    </span>
                </div>
                <span className="text-[12px] font-normal leading-none text-purple500 desktop:text-[14px]">
                    {displayedPrice}
                </span>
            </div>
        </ToggleWrapper>
    )
}
