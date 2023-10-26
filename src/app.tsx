import { Button } from './components/button'
import { StpeIndicator } from './components/step-indicator'
import { Textfield } from './components/textfield'

export const App = () => {
    return (
        <main className="flex flex-1 flex-col desktop:items-center desktop:justify-center">
            <div className="fixed h-[172px] w-full bg-mobile bg-cover desktop:hidden" />

            <div className="relative flex flex-1 flex-col  desktop:m-[105px] desktop:w-[940px] desktop:flex-row desktop:rounded-[15px] desktop:bg-white desktop:shadow-default">
                <header className="flex items-center justify-center gap-4 py-8 desktop:my-4 desktop:ml-4 desktop:w-[274px] desktop:flex-col desktop:items-start desktop:justify-start desktop:gap-8 desktop:rounded-[10px] desktop:bg-desktop desktop:bg-cover desktop:px-8 desktop:py-10">
                    <StpeIndicator stepNumber={1} isCurrentStep title="your info" />
                    <StpeIndicator stepNumber={2} isCurrentStep={false} title="select plan" />
                    <StpeIndicator stepNumber={3} isCurrentStep={false} title="add-ons" />
                    <StpeIndicator stepNumber={4} isCurrentStep={false} title="summary" />
                </header>

                <div className="flex flex-1 flex-col desktop:px-[100px] desktop:py-14 desktop:pb-8">
                    <section className="mx-4 mb-6 rounded-[10px] bg-white px-6 py-8 shadow-default desktop:shadow-none">
                        <h1 className="mb-2 text-[24px] font-bold leading-none text-blue800 desktop:mb-3 desktop:text-[32px]">
                            Personal info
                        </h1>

                        <p className="mb-5 text-body-l text-grey500 desktop:mb-9">
                            Please provide your name, email address, and phone number.
                        </p>

                        <div>
                            <Textfield label="name" placeholder="e.g. Stephen King" />
                        </div>
                    </section>

                    <footer className="mt-auto flex items-center justify-between bg-white p-4 shadow-default desktop:shadow-none">
                        <Button variant="text">go back</Button>
                        <Button>next step</Button>
                    </footer>
                </div>
            </div>
        </main>
    )
}

export default App
