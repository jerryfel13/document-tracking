"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Upload, Eye, Trash2, Edit, FileText, User } from "lucide-react"

// Mock data for activity log
const mockActivities = [
  {
    id: "act-001",
    documentId: "doc-001",
    documentTitle: "Q1 Financial Report",
    action: "download",
    user: "John Doe",
    timestamp: "2024-05-10T09:45:00",
    ipAddress: "192.168.1.105",
  },
  {
    id: "act-002",
    documentId: "doc-003",
    documentTitle: "Product Roadmap",
    action: "view",
    user: "Sarah Williams",
    timestamp: "2024-05-10T09:30:00",
    ipAddress: "192.168.1.110",
  },
  {
    id: "act-003",
    documentId: "doc-005",
    documentTitle: "Brand Guidelines",
    action: "upload",
    user: "Mike Johnson",
    timestamp: "2024-05-10T09:15:00",
    ipAddress: "192.168.1.120",
  },
  {
    id: "act-004",
    documentId: "doc-002",
    documentTitle: "Marketing Strategy 2024",
    action: "edit",
    user: "Jane Smith",
    timestamp: "2024-05-10T09:00:00",
    ipAddress: "192.168.1.115",
  },
  {
    id: "act-005",
    documentId: "doc-007",
    documentTitle: "Meeting Notes",
    action: "download",
    user: "John Doe",
    timestamp: "2024-05-09T17:45:00",
    ipAddress: "192.168.1.105",
  },
  {
    id: "act-006",
    documentId: "doc-004",
    documentTitle: "Client Contract Template",
    action: "view",
    user: "Mike Johnson",
    timestamp: "2024-05-09T16:30:00",
    ipAddress: "192.168.1.120",
  },
  {
    id: "act-007",
    documentId: "doc-006",
    documentTitle: "Project Timeline",
    action: "delete",
    user: "Sarah Williams",
    timestamp: "2024-05-09T15:15:00",
    ipAddress: "192.168.1.110",
  },
  {
    id: "act-008",
    documentId: "doc-003",
    documentTitle: "Product Roadmap",
    action: "download",
    user: "Jane Smith",
    timestamp: "2024-05-09T14:00:00",
    ipAddress: "192.168.1.115",
  },
  {
    id: "act-009",
    documentId: "doc-008",
    documentTitle: "Employee Handbook",
    action: "upload",
    user: "John Doe",
    timestamp: "2024-05-09T13:45:00",
    ipAddress: "192.168.1.105",
  },
  {
    id: "act-010",
    documentId: "doc-001",
    documentTitle: "Q1 Financial Report",
    action: "edit",
    user: "Mike Johnson",
    timestamp: "2024-05-09T11:30:00",
    ipAddress: "192.168.1.120",
  },
]

// Helper function to get the appropriate icon based on action
const getActionIcon = (action: string) => {
  switch (action) {
    case "download":
      return <Download className="h-4 w-4 text-blue-500" />
    case "upload":
      return <Upload className="h-4 w-4 text-green-500" />
    case "view":
      return <Eye className="h-4 w-4 text-purple-500" />
    case "edit":
      return <Edit className="h-4 w-4 text-orange-500" />
    case "delete":
      return <Trash2 className="h-4 w-4 text-red-500" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

// Helper function to get the appropriate color for action badges
const getActionColor = (action: string) => {
  switch (action) {
    case "download":
      return "bg-blue-100 text-blue-800"
    case "upload":
      return "bg-green-100 text-green-800"
    case "view":
      return "bg-purple-100 text-purple-800"
    case "edit":
      return "bg-orange-100 text-orange-800"
    case "delete":
      return "bg-red-100 text-red-800"
    default:
      return ""
  }
}

// Helper function to format timestamp
const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

export function ActivityLog() {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Action</TableHead>
                <TableHead>Document</TableHead>
                <TableHead className="hidden md:table-cell">User</TableHead>
                <TableHead className="hidden md:table-cell">Time</TableHead>
                <TableHead className="hidden lg:table-cell">IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div className="flex items-center">{getActionIcon(activity.action)}</div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{activity.documentTitle}</div>
                      <div className="text-sm text-gray-500 md:hidden">
                        <span className="flex items-center gap-1 mt-1">
                          <User className="h-3 w-3" /> {activity.user}
                        </span>
                      </div>
                      <div className="md:hidden mt-1">
                        <Badge variant="outline" className={getActionColor(activity.action)}>
                          {activity.action}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{activity.user}</TableCell>
                  <TableCell className="hidden md:table-cell">{formatTimestamp(activity.timestamp)}</TableCell>
                  <TableCell className="hidden lg:table-cell">{activity.ipAddress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}
