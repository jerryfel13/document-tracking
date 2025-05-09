"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Eye,
  FileText,
  MoreVertical,
  Pencil,
  Trash2,
  FileSpreadsheet,
  FileImage,
  FileIcon as FilePdf,
} from "lucide-react"

// Mock data for documents
const mockDocuments = [
  {
    id: "doc-001",
    title: "Q1 Financial Report",
    type: "pdf",
    category: "Reports",
    uploadedBy: "John Doe",
    uploadDate: "2024-05-01",
    size: "2.4 MB",
    downloads: 12,
    access: "Team",
  },
  {
    id: "doc-002",
    title: "Marketing Strategy 2024",
    type: "docx",
    category: "Presentations",
    uploadedBy: "Jane Smith",
    uploadDate: "2024-04-28",
    size: "1.8 MB",
    downloads: 8,
    access: "Private",
  },
  {
    id: "doc-003",
    title: "Product Roadmap",
    type: "xlsx",
    category: "Planning",
    uploadedBy: "Mike Johnson",
    uploadDate: "2024-04-25",
    size: "3.2 MB",
    downloads: 15,
    access: "Team",
  },
  {
    id: "doc-004",
    title: "Client Contract Template",
    type: "pdf",
    category: "Contracts",
    uploadedBy: "Sarah Williams",
    uploadDate: "2024-04-20",
    size: "0.9 MB",
    downloads: 5,
    access: "Private",
  },
  {
    id: "doc-005",
    title: "Brand Guidelines",
    type: "pdf",
    category: "Marketing",
    uploadedBy: "John Doe",
    uploadDate: "2024-04-15",
    size: "4.5 MB",
    downloads: 22,
    access: "Public",
  },
  {
    id: "doc-006",
    title: "Project Timeline",
    type: "xlsx",
    category: "Planning",
    uploadedBy: "Jane Smith",
    uploadDate: "2024-04-10",
    size: "1.2 MB",
    downloads: 7,
    access: "Team",
  },
  {
    id: "doc-007",
    title: "Meeting Notes",
    type: "docx",
    category: "Notes",
    uploadedBy: "Mike Johnson",
    uploadDate: "2024-04-05",
    size: "0.5 MB",
    downloads: 3,
    access: "Private",
  },
]

// Helper function to get the appropriate icon based on file type
const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return <FilePdf className="h-4 w-4 text-red-500" />
    case "xlsx":
      return <FileSpreadsheet className="h-4 w-4 text-green-500" />
    case "docx":
      return <FileText className="h-4 w-4 text-blue-500" />
    case "jpg":
    case "png":
      return <FileImage className="h-4 w-4 text-purple-500" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

// Helper function to get the appropriate color for access badges
const getAccessColor = (access: string) => {
  switch (access) {
    case "Private":
      return "bg-yellow-100 text-yellow-800"
    case "Team":
      return "bg-blue-100 text-blue-800"
    case "Public":
      return "bg-green-100 text-green-800"
    default:
      return ""
  }
}

interface DocumentListProps {
  searchQuery: string
}

export function DocumentList({ searchQuery }: DocumentListProps) {
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([])

  // Filter documents based on search query
  const filteredDocuments = mockDocuments.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDownload = (id: string) => {
    console.log(`Downloading document ${id}`)
    // Here you would normally handle the document download
    // and log the download activity
  }

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Documents ({filteredDocuments.length})</h3>
          <div className="flex items-center gap-2">
            {selectedDocuments.length > 0 && (
              <>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Selected
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Uploaded By</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Size</TableHead>
                <TableHead className="hidden md:table-cell">Downloads</TableHead>
                <TableHead className="hidden md:table-cell">Access</TableHead>
                <TableHead className="w-12">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                    No documents found
                  </TableCell>
                </TableRow>
              ) : (
                filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>{getFileIcon(doc.type)}</TableCell>
                    <TableCell className="font-medium">{doc.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.category}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.uploadedBy}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.uploadDate}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.size}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.downloads}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className={getAccessColor(doc.access)}>
                        {doc.access}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleDownload(doc.id)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}
