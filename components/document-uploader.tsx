"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X } from "lucide-react"

export function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      setUploading(false)
      setFile(null)
      // Here you would normally upload to Vercel Blob
      // and save the metadata to your database
    }, 2000)
  }

  const clearFile = () => {
    setFile(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
        <CardDescription>
          Upload a new document to the system. Supported formats: PDF, DOCX, XLSX, JPG, PNG.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Document Title</Label>
          <Input id="title" placeholder="Enter document title" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contracts">Contracts</SelectItem>
              <SelectItem value="invoices">Invoices</SelectItem>
              <SelectItem value="reports">Reports</SelectItem>
              <SelectItem value="presentations">Presentations</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter document description" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="access">Access Level</Label>
          <Select defaultValue="private">
            <SelectTrigger id="access">
              <SelectValue placeholder="Select access level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private (Only you)</SelectItem>
              <SelectItem value="team">Team</SelectItem>
              <SelectItem value="public">Public (All users)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Document File</Label>
          {!file ? (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOCX, XLSX, JPG, PNG (MAX. 10MB)</p>
                </div>
                <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          ) : (
            <div className="flex items-center p-4 space-x-4 border rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <Button variant="ghost" size="icon" onClick={clearFile}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
          {uploading ? "Uploading..." : "Upload Document"}
        </Button>
      </CardFooter>
    </Card>
  )
}
