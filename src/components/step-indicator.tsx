import { twMerge } from 'tailwind-merge'

type StepIndicatorProps = React.HTMLAttributes<HTMLSpanElement> & {
    isCurrentStep: boolean
}

export const StpeIndicator = ({ className, isCurrentStep, ...others }: StepIndicatorProps) => {
    return (
        <span
            className={twMerge(
                'border-white text-grey100 border-1 flex h-8 w-8 items-center justify-center rounded-full border-solid text-[14px] font-bold uppercase leading-none',
                isCurrentStep && 'text-blue800 bg-blue100 border-blue100',
                className
            )}
            {...others}
        />
    )
}
