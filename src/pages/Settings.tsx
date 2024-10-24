import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Settings as SettingsIcon } from "lucide-react"

const Settings = () => {
  const [apiKey, setApiKey] = useState("")
  const { toast } = useToast()

  const handleSaveApiKey = () => {
    if (apiKey) {
      localStorage.setItem("openai_api_key", apiKey)
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved successfully.",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-6 w-6" />
            AI Settings
          </CardTitle>
          <CardDescription>Configure your AI integration settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium">
              OpenAI API Key
            </label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
            />
            <p className="text-sm text-muted-foreground">
              Enter your OpenAI API key to enable AI features
            </p>
          </div>
          <Button onClick={handleSaveApiKey}>Save API Key</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings