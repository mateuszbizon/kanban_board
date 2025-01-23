import { store } from "@/store"
import { PropsWithChildren } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DarkModeProvider from "@/context/DarkModeContext"

type ProvidersProps = PropsWithChildren

function Providers({ children }: ProvidersProps) {
    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
            <DarkModeProvider>
                {children}
            </DarkModeProvider>
        </ReduxProvider>
    </QueryClientProvider>
  )
}

export default Providers