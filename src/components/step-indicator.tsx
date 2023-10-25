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
        <section className="desktop:flex desktop:items-center desktop:gap-4 uppercase">
            <span
                className={twMerge(
                    'border-white text-grey100 border-1 flex h-8 w-8 items-center justify-center rounded-full border-solid text-[14px] font-bold leading-none',
                    isCurrentStep && 'text-blue800 bg-blue100 border-blue100',
                    className
                )}
                {...others}
            >
                {stepNumber}
            </span>

            <div className="desktop:flex desktop:flex-col hidden">
                <h2 className="text-blue300 text-[12px] font-normal leading-none">
                    step {stepNumber}
                </h2>
                <h3 className="text-white text-[14px] font-bold leading-normal tracking-[1px]">
                    {title}
                </h3>
            </div>
        </section>
    )
}
