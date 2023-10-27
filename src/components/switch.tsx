import { twMerge } from 'tailwind-merge'

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>

export const Switch = ({ className, checked, ...others }: SwitchProps) => {
    return (
        <label
            className={twMerge('w-[38px] cursor-pointer rounded-[10px] bg-blue800 p-1', className)}
        >
            <div
                className={twMerge(
                    'h-3 w-3 rounded-full bg-white transition-transform',
                    // We have to add the element width to the translate
                    checked && 'translate-x-[calc(100%+6px)]'
                )}
            />
            <input {...others} hidden type="checkbox" />
        </label>
    )
}
