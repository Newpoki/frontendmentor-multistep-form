import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type ToggleWrapperProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    isActive?: boolean
}

export const ToggleWrapper = forwardRef<HTMLButtonElement, ToggleWrapperProps>(
    ({ className, isActive = false, ...others }, ref) => {
        return (
            <button
                {...others}
                className={twMerge(
                    'rounded-lg border-1 border-solid border-grey300 bg-transparent',
                    isActive && 'border-purple500 bg-grey100',
                    className
                )}
                ref={ref}
                type="button"
            />
        )
    }
)
