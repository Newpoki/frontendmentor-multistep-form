import { twMerge } from 'tailwind-merge'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    title?: string
    description?: string
    actions?: React.ReactNode
}

export const SubscriptionFormsStepLayout = ({
    actions,
    className,
    children,
    description,
    title,
    ...others
}: Props) => {
    return (
        <div
            {...others}
            className="flex flex-1 animate-slideIn flex-col desktop:px-[100px] desktop:py-14 desktop:pb-8"
        >
            <section
                className={twMerge(
                    'mx-4 mb-6 rounded-[10px] bg-white px-6 py-8 shadow-default desktop:m-0 desktop:p-0 desktop:shadow-none',
                    className
                )}
            >
                {title != null && (
                    <h1 className="mb-2 text-[24px] font-bold leading-none text-blue800 desktop:mb-3 desktop:text-[32px]">
                        {title}
                    </h1>
                )}

                {description != null && (
                    <p className="mb-5 text-body-l text-grey500 desktop:mb-9">{description}</p>
                )}

                {children}
            </section>

            {actions != null && (
                <footer className="mt-auto flex items-center justify-between bg-white p-4 shadow-default desktop:shadow-none">
                    {actions}
                </footer>
            )}
        </div>
    )
}
