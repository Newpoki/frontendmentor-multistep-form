import { twMerge } from 'tailwind-merge'

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type PrimaryContainedButtonProps = BaseButtonProps & {
    color?: 'primary'
    variant?: 'contained'
}

type SecondaryContainedButtonProps = BaseButtonProps & {
    color: 'secondary'
    variant?: 'contained'
}

type PrimaryTextButtonProps = BaseButtonProps & {
    color?: 'primary'
    variant: 'text'
}

type ButtonProps =
    | PrimaryContainedButtonProps
    | SecondaryContainedButtonProps
    | PrimaryTextButtonProps

export const Button = ({
    className,
    color = 'primary',
    variant = 'contained',
    ...others
}: ButtonProps) => {
    return (
        <button
            className={twMerge(
                'desktop:px-6 desktop:py-4 desktop:text-[16px] rounded-lg px-4 py-[13px] text-[14px] font-medium capitalize leading-none transition-colors',
                color === 'primary' &&
                    variant === 'contained' &&
                    'bg-blue800 text-white hover:bg-[#164A8A]',
                color === 'primary' &&
                    variant === 'text' &&
                    'bg-transparent text-grey500 hover:text-blue800',
                color === 'secondary' &&
                    variant === 'contained' &&
                    'bg-purple500 text-white hover:bg-[#164A8A]',
                className
            )}
            {...others}
        />
    )
}
