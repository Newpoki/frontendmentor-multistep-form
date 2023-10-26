import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    label: string
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
    ({ className, error, label, ...others }) => {
        return (
            <label className="flex flex-col gap-1 desktop:gap-2">
                <div className="flex items-center justify-between text-[14px] leading-none">
                    <span className="font-normal capitalize text-blue800">{label}</span>
                    {error != null && <span className="font-bold text-red500 ">{error}</span>}
                </div>

                <input
                    {...others}
                    className={twMerge(
                        'rounded border-1 border-solid border-grey200 px-4 py-[10.5px] text-[15px] font-medium leading-none text-blue800 transition-colors placeholder:text-grey500 hover:border-purple500 focus:border-purple500 focus:outline-none desktop:rounded-lg desktop:py-[14px] desktop:text-[16px]',
                        error != null && 'border-red500 hover:border-red500 focus:border-red500',
                        className
                    )}
                />
            </label>
        )
    }
)
