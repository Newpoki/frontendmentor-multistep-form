import { twMerge } from 'tailwind-merge'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    title: string
    description: string
    actions: React.ReactNode
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
            className={twMerge(
                'flex flex-1 flex-col desktop:px-[100px] desktop:py-14 desktop:pb-8',
                className
            )}
        >
            <section className="mx-4 mb-6 rounded-[10px] bg-white px-6 py-8 shadow-default desktop:shadow-none">
                <h1 className="mb-2 text-[24px] font-bold leading-none text-blue800 desktop:mb-3 desktop:text-[32px]">
                    {title}
                </h1>

                <p className="mb-5 text-body-l text-grey500 desktop:mb-9">{description}</p>

                {children}
            </section>

            <footer className="mt-auto flex items-center justify-between bg-white p-4 shadow-default desktop:shadow-none">
                {actions}
            </footer>
        </div>
    )
}
