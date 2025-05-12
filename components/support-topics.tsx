"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Function to display and filter support topics
export default function SupportTopics() {
  const [searchQuery, setSearchQuery] = useState("")

  const topics = [
    {
      title: "Account Management",
      description: "Help with login issues, account settings, and profile updates",
      articles: ["Password Reset", "Update Profile Information", "Delete Account"],
    },
    {
      title: "Billing & Payments",
      description: "Questions about invoices, payment methods, and subscription plans",
      articles: ["Update Payment Method", "View Invoice History", "Change Subscription Plan"],
    },
    {
      title: "Product Usage",
      description: "Learn how to use our products and features effectively",
      articles: ["Getting Started Guide", "Advanced Features", "Troubleshooting Common Issues"],
    },
    {
      title: "Technical Support",
      description: "Technical issues, bug reports, and system requirements",
      articles: ["System Requirements", "Report a Bug", "Installation Guide"],
    },
    {
      title: "Returns & Refunds",
      description: "Information about our return policy and refund process",
      articles: ["Return Policy", "Request a Refund", "Check Refund Status"],
    },
  ]

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.articles.some((article) => article.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold">Support Topics</h2>
        <div className="relative flex-1 max-w-sm ml-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search topics..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredTopics.map((topic, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {topic.articles.map((article, articleIndex) => (
                  <li key={articleIndex} className="text-primary hover:underline cursor-pointer">
                    {article}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No topics found matching your search.</p>
        </div>
      )}
    </div>
  )
}
