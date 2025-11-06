'use client'
import { Provider } from "@/components/ui/provider"
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'

  const queryClient = new QueryClient({
    defaultOptions : {
      queries : {
        refetchOnWindowFocus : false,
      } 
    }
  })

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <QueryClientProvider client={queryClient}>
      <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
    </QueryClientProvider>
  )
}