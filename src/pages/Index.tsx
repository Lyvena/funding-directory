import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import FundingSourceCard from '@/components/FundingSourceCard'
import { Banknote, Rocket, Lightbulb, BarChart } from 'lucide-react'

const fetchFundingSources = async () => {
  // In a real app, this would be an API call
  return [
    { id: 1, name: 'Gitcoin Grants', type: 'Crowdfunding', amount: '$50,000' },
    { id: 2, name: 'Ethereum Foundation', type: 'Grant', amount: '$100,000' },
    { id: 3, name: 'Optimism RetroPGF', type: 'Retroactive Funding', amount: '$75,000' },
  ];
};

const Index = () => {
  const { toast } = useToast()
  const { data: fundingSources, isLoading, error } = useQuery({
    queryKey: ['fundingSources'],
    queryFn: fetchFundingSources,
  })

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: "Search Initiated",
      description: "Your search request has been received.",
    })
  }

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>
  if (error) return <div className="flex justify-center items-center h-screen">An error occurred</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Funding Directory</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover and manage funding sources for your projects with AI-powered insights
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="animate-bounce">
            <Rocket className="mr-2 h-5 w-5" /> Get Started
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              AI-Powered
            </CardTitle>
            <CardDescription>
              Smart recommendations and insights powered by artificial intelligence
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5" />
              Funding Sources
            </CardTitle>
            <CardDescription>
              Access to diverse funding opportunities and grants
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Analytics
            </CardTitle>
            <CardDescription>
              Detailed insights and tracking of your funding journey
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <Input type="search" placeholder="Search funding sources..." className="flex-grow" />
          <Button type="submit">Search</Button>
        </div>
      </form>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="grants">Grants</TabsTrigger>
          <TabsTrigger value="crowdfunding">Crowdfunding</TabsTrigger>
          <TabsTrigger value="retroactive">Retroactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fundingSources?.map((source) => (
              <FundingSourceCard key={source.id} source={source} />
            ))}
          </div>
        </TabsContent>
        {/* Add content for other tabs as needed */}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Funding Overview</CardTitle>
          <CardDescription>Quick stats about available funding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around">
            <div className="text-center">
              <Banknote className="mx-auto mb-2" />
              <p className="font-semibold">Total Available</p>
              <p>$225,000</p>
            </div>
            <div className="text-center">
              <BarChart className="mx-auto mb-2" />
              <p className="font-semibold">Sources</p>
              <p>3</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index
