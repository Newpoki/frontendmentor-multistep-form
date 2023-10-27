import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import IconCheckmark from '../assets/icon-checkmark.svg'

export type CheckboxProps = React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
    ({ className, checked = false, ...others }, ref) => {
        return (
            <div
                {...others}
                className={twMerge(
                    'border-gray-300 flex aspect-square h-5 w-5 items-center justify-center rounded border transition-colors',
                    checked && 'border-[#483EFF] bg-[#483EFF]',
                    className
                )}
                ref={ref}
            >
                <IconCheckmark
                    // @ts-expect-error - TS2322 - Property 'className' does not exist on type 'IntrinsicAttributes'
                    className={twMerge('scale-0 transition-transform', checked && 'scale-1')}
                />
            </div>
        )
    }
)
