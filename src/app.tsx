import { Button } from './components/button'
import { StpeIndicator } from './components/step-indicator'

export const App = () => {
    return (
        <main className="desktop:items-center desktop:justify-center flex flex-1 flex-col">
            <div className="bg-mobile desktop:hidden fixed h-[172px] w-full bg-cover" />

            <div className="desktop:flex-row desktop:w-[940px] desktop:rounded-[15px] desktop:bg-white  desktop:shadow-default desktop:m-[105px] relative flex flex-1 flex-col">
                <header className="desktop:flex-col desktop:bg-desktop desktop:bg-cover desktop:rounded-[10px] desktop:items-start desktop:justify-start desktop:py-10 desktop:px-8 desktop:gap-8 desktop:w-[274px] desktop:ml-4 desktop:my-4 flex items-center justify-center gap-4 py-8">
                    <StpeIndicator stepNumber={1} isCurrentStep title="your info" />
                    <StpeIndicator stepNumber={2} isCurrentStep={false} title="select plan" />
                    <StpeIndicator stepNumber={3} isCurrentStep={false} title="add-ons" />
                    <StpeIndicator stepNumber={4} isCurrentStep={false} title="summary" />
                </header>

                <div className="desktop:px-[100px] desktop:py-14 desktop:pb-8 flex flex-1 flex-col">
                    <section className="bg-white shadow-default desktop:shadow-none mx-4 mb-6 rounded-[10px] px-6 py-8">
                        <h1 className="text-blue800 desktop:text-[32px] desktop:mb-3 mb-2 text-[24px] font-bold leading-none">
                            Personal info
                        </h1>

                        <p className="text-body-l text-grey500 desktop:mb-9 mb-5">
                            Please provide your name, email address, and phone number.
                        </p>
                    </section>

                    <footer className="bg-white shadow-default desktop:shadow-none mt-auto flex items-center justify-between p-4">
                        <Button variant="text">go back</Button>
                        <Button>next step</Button>
                    </footer>
                </div>
            </div>
        </main>
    )
}

export default App
