import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import './App.css'
import Titlebar from '@/components/windowWidgets/Titlebar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-col h-screen bg-background text-foreground overflow-hidden'>
            <Titlebar />
            <div className='flex-1 overflow-auto p-8'>
                <div className='text-center'>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                        Electron + Vite + React
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Custom Title Bar Implementation Successful
                    </p>

                    <div className='flex justify-center items-center my-8'>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="w-32 h-32 animate-[spin_20s_linear_infinite]" alt="React logo" />
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            size="lg"
                            className='w-48 text-lg font-semibold'
                            onClick={() => setCount((count) => count + 1)}
                        >
                            Count: {count}
                        </Button>

                        <p className="max-w-md mx-auto text-muted-foreground leading-relaxed">
                            The window frame has been removed and replaced with a custom React component.
                            You can now drag the window using the title bar and use the custom controls.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                        <Button asChild variant="secondary" size="lg">
                            <a href="https://buymeacoffee.com/georgimy" target="_blank" rel="noopener noreferrer">
                                ☕ Buy me a coffee
                            </a>
                        </Button>

                        <Button asChild variant="ghost" size="lg">
                            <a href="https://x.com/GeorgiMY" target="_blank" rel="noopener noreferrer">
                                Follow me on X
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
