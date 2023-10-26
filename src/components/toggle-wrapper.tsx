import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type ToggleWrapperProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isActive?: boolean
}

export const ToggleWrapper = forwardRef<HTMLInputElement, ToggleWrapperProps>(
    ({ children, className, id, isActive = false, ...others }, ref) => (
        <label
            htmlFor={id}
            className={twMerge(
                'cursor-pointer rounded-lg border-1 border-solid border-grey300 bg-transparent transition-colors',
                isActive && 'border-purple500 bg-grey100',
                className
            )}
        >
            <input {...others} id={id} hidden ref={ref} />

            {children}
        </label>
    )
)
