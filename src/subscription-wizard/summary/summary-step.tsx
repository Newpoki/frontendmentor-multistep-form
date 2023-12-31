import { useCallback, useEffect, useMemo } from 'react'
import { Button } from '../../components/button'
import { SubscriptionWizardContext } from '../use-subcription-wizard'
import { SUBSCRIPTION_PLANS_OPTIONS } from '../plan/plan-step-constants'
import { SUBSCRIPTION_ADDONS_OPTIONS } from '../addons/addons-step-constants'
import { SubscriptionWizardStepLayout } from '../subscription-wizard-step-layout'

type Props = {
    subscriptionWizard: SubscriptionWizardContext
}

export const SummaryStep = ({ subscriptionWizard }: Props) => {
    const { goToStep } = subscriptionWizard
    const { plan, addons } = subscriptionWizard.wizardState.data

    const { isYearlyBilling } = plan
    const planOption = SUBSCRIPTION_PLANS_OPTIONS[plan.code]

    const displayedPlanLabel = useMemo(() => {
        return isYearlyBilling ? `${planOption.label} (Yearly)` : `${planOption.label} (Monthly)`
    }, [isYearlyBilling, planOption.label])

    const displayedPlanPrice = useMemo(() => {
        return isYearlyBilling
            ? `$${planOption.priceInDollar.yearly}/yr`
            : `$${planOption.priceInDollar.monthly}/mo`
    }, [isYearlyBilling, planOption.priceInDollar.monthly, planOption.priceInDollar.yearly])

    const displayedTotalAmount = useMemo(() => {
        const addonsPriceSums = addons.codes.reduce((sum, code) => {
            return (
                SUBSCRIPTION_ADDONS_OPTIONS[code].priceInDollar[
                    isYearlyBilling ? 'yearly' : 'monthly'
                ] + sum
            )
        }, 0)

        return isYearlyBilling
            ? `+$${planOption.priceInDollar.yearly + addonsPriceSums}/yr`
            : `+$${planOption.priceInDollar.monthly + addonsPriceSums}/mo`
    }, [
        addons.codes,
        isYearlyBilling,
        planOption.priceInDollar.monthly,
        planOption.priceInDollar.yearly,
    ])

    const handleConfirm = useCallback(() => {
        goToStep('greetings')
    }, [goToStep])

    const handleGoBack = useCallback(() => {
        goToStep('addons')
    }, [goToStep])

    const handleGoToPlan = useCallback(() => {
        goToStep('plan')
    }, [goToStep])

    useEffect(() => {
        document.title = 'Subscription - Summary'
    }, [])

    return (
        <SubscriptionWizardStepLayout
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
            actions={
                <>
                    <Button onClick={handleGoBack} variant="text">
                        go back
                    </Button>
                    <Button color="secondary" type="button" onClick={handleConfirm}>
                        confirm
                    </Button>
                </>
            }
        >
            <div className="mb-6 flex flex-col rounded-lg bg-grey100 p-4">
                <div className="flex items-center justify-between  leading-none text-blue800">
                    <div className="flex flex-col items-start gap-1 desktop:gap-2">
                        <span className="text-[14px] font-medium desktop:text-[16px]">
                            {displayedPlanLabel}
                        </span>
                        <button
                            className="text-[14px] font-normal text-grey500 underline decoration-grey500 transition-colors hover:text-purple500 hover:decoration-purple500"
                            type="button"
                            onClick={handleGoToPlan}
                        >
                            Change
                        </button>
                    </div>
                    <span className="text-[14px] font-bold desktop:text-[16px]">
                        {displayedPlanPrice}
                    </span>
                </div>

                {addons.codes.length > 0 && (
                    <>
                        <div className="my-3 h-[1px] w-full bg-grey500/20 desktop:mb-4 desktop:mt-6" />

                        <ul className="flex flex-col gap-3 desktop:gap-4">
                            {addons.codes.map((code) => {
                                const addonOption = SUBSCRIPTION_ADDONS_OPTIONS[code]
                                const { monthly, yearly } = addonOption.priceInDollar

                                return (
                                    <li
                                        className="flex items-center justify-between text-[14px] font-normal"
                                        key={code}
                                    >
                                        <span className="text-grey500">{addonOption.label}</span>
                                        <span className="text-blue800">
                                            {isYearlyBilling ? `+$${yearly}/yr` : `+$${monthly}/mo`}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                )}
            </div>

            <p className="flex items-center justify-between">
                <span className="text-[14px] font-normal leading-none text-grey500">
                    Total {isYearlyBilling ? '(per year)' : '(per month)'}
                </span>
                <span className="text-{16px] font-bold leading-none text-purple500 desktop:text-[20px]">
                    {displayedTotalAmount}
                </span>
            </p>
        </SubscriptionWizardStepLayout>
    )
}
