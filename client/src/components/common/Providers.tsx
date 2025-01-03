import { store } from "@/store"
import { PropsWithChildren } from "react"
import { Provider as ReduxProvider } from "react-redux"

type ProvidersProps = PropsWithChildren

function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
  )
}

export default Providers