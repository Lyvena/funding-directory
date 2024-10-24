import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Index from "./pages/Index"
import Auth from "./pages/Auth"
import Contact from "./pages/Contact"
import { Button } from "./components/ui/button"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-4">
                <Link to="/" className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Funding Directory" className="h-8 w-8" />
                  <span className="font-bold text-xl">Funding Directory</span>
                </Link>
                <Link to="/auth">
                  <Button>Sign In</Button>
                </Link>
              </div>
              <Navigation />
            </div>
          </header>
          <main className="flex-1">
            <Toaster />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App