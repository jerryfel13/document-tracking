import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Upload, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
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
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Document Management & Tracking System
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Securely upload, manage, and track your documents. Monitor who accesses your files and when.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Document Management System"
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage and track your documents
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <Upload className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Document Upload</h3>
                <p className="text-center text-gray-500">
                  Securely upload and store your documents with version control
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Access Control</h3>
                <p className="text-center text-gray-500">Control who can view, download, or modify your documents</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Activity Tracking</h3>
                <p className="text-center text-gray-500">
                  Monitor all document activities including uploads and downloads
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-medium">DocTrack</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 DocTrack. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
