import { twMerge } from 'tailwind-merge'

type StepIndicatorProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> & {
    stepNumber: 1 | 2 | 3 | 4
    isCurrentStep: boolean
    title: string
}

export const StpeIndicator = ({
    className,
    stepNumber,
    isCurrentStep,
    title,
    ...others
}: StepIndicatorProps) => {
    return (
        <section className="uppercase desktop:flex desktop:items-center desktop:gap-4">
            <span
                className={twMerge(
                    'flex h-8 w-8 items-center justify-center rounded-full border-1 border-solid border-white text-[14px] font-bold leading-none text-grey100 transition-colors',
                    isCurrentStep && 'border-blue100 bg-blue100 text-blue800',
                    className
                )}
                {...others}
            >
                {stepNumber}
            </span>

            <div className="hidden desktop:flex desktop:flex-col">
                <h2 className="text-[12px] font-normal leading-none text-blue300">
                    step {stepNumber}
                </h2>
                <h3 className="text-[14px] font-bold leading-normal tracking-[1px] text-white">
                    {title}
                </h3>
            </div>
        </section>
    )
}
