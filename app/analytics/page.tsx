"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Upload, User, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span>DocTrack</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/documents" className="text-sm font-medium hover:underline underline-offset-4">
              Documents
            </Link>
            <Link href="/analytics" className="text-sm font-medium hover:underline underline-offset-4">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <span className="sr-only">User profile</span>
              <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6 md:py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-gray-500">Track document usage and activity</p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <SelectValue placeholder="Time Period" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-gray-500">+12 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <Upload className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85</div>
              <p className="text-xs text-gray-500">+15 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">256</div>
              <p className="text-xs text-gray-500">+42 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <User className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500">+2 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activity" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="activity">Activity Overview</TabsTrigger>
            <TabsTrigger value="documents">Document Analytics</TabsTrigger>
            <TabsTrigger value="users">User Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="activity">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Activity by Type</CardTitle>
                  <CardDescription>Distribution of activities by type over the selected period</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Activity chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing uploads, downloads, views, edits, and deletes</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>Activity trends over the selected period</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Timeline chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing daily/weekly activity trends</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Most Active Hours</CardTitle>
                  <CardDescription>When users are most active in the system</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Hourly activity chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing activity distribution by hour of day</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Most Downloaded Documents</CardTitle>
                  <CardDescription>Top documents by download count</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Bar chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing top 10 documents by downloads</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Documents by Category</CardTitle>
                  <CardDescription>Distribution of documents by category</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Pie chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing document distribution by category</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Documents by Type</CardTitle>
                  <CardDescription>Distribution of documents by file type</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Pie chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing document distribution by file type</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Storage Usage</CardTitle>
                  <CardDescription>Storage usage by document category</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Bar chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing storage usage by category</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="users">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Most Active Users</CardTitle>
                  <CardDescription>Users with the most activity</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Bar chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing top 10 users by activity</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Activity by Type</CardTitle>
                  <CardDescription>Types of activities performed by users</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Stacked bar chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing activity types by user</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>User Activity Timeline</CardTitle>
                  <CardDescription>User activity over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p>Line chart would be displayed here</p>
                    <p className="text-sm mt-2">Showing user activity trends over time</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
