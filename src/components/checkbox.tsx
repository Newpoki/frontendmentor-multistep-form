import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import IconCheckmark from '../assets/icon-checkmark.svg'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, checked, ...others }, ref) => {
        return (
            <label
                className={twMerge(
                    'border-gray-300 flex h-5 w-5 items-center justify-center rounded border transition-colors',
                    checked && 'border-[#483EFF] bg-[#483EFF]',
                    className
                )}
            >
                <IconCheckmark
                    // @ts-expect-error - TS2322 - Property 'className' does not exist on type 'IntrinsicAttributes'
                    className={twMerge('scale-0 transition-transform', checked && 'scale-1')}
                />
                <input {...others} hidden ref={ref} type="checkbox" />
            </label>
        )
    }
)
