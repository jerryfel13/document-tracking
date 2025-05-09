// Function to log document activity
export async function logActivity(
  documentId: string,
  userId: string,
  action: "upload" | "download" | "view" | "edit" | "delete",
  metadata: Record<string, any> = {},
) {
  try {
    // Get client IP address
    const ipAddress = metadata.ipAddress || "0.0.0.0"

    // Create activity log entry
    const activityLog = {
      documentId,
      userId,
      action,
      timestamp: new Date().toISOString(),
      ipAddress,
      userAgent: metadata.userAgent || "Unknown",
      ...metadata,
    }

    // In a real application, you would save this to your database
    console.log("Activity logged:", activityLog)

    return {
      success: true,
      activityId: `act-${Date.now()}`,
      ...activityLog,
    }
  } catch (error) {
    console.error("Error logging activity:", error)
    return {
      success: false,
      error: "Failed to log activity",
    }
  }
}

// Function to get activity logs for a document
export async function getDocumentActivityLogs(documentId: string) {
  try {
    // In a real application, you would fetch this from your database
    // This is a mock implementation
    const mockLogs = [
      {
        id: `act-${Date.now() - 1000}`,
        documentId,
        userId: "user-123",
        action: "view",
        timestamp: new Date(Date.now() - 1000).toISOString(),
        ipAddress: "192.168.1.1",
        userAgent: "Chrome",
      },
      {
        id: `act-${Date.now() - 2000}`,
        documentId,
        userId: "user-456",
        action: "download",
        timestamp: new Date(Date.now() - 2000).toISOString(),
        ipAddress: "192.168.1.2",
        userAgent: "Firefox",
      },
    ]

    return {
      success: true,
      logs: mockLogs,
    }
  } catch (error) {
    console.error("Error getting activity logs:", error)
    return {
      success: false,
      error: "Failed to get activity logs",
    }
  }
}

// Function to get user activity logs
export async function getUserActivityLogs(userId: string) {
  try {
    // In a real application, you would fetch this from your database
    // This is a mock implementation
    const mockLogs = [
      {
        id: `act-${Date.now() - 1000}`,
        documentId: "doc-123",
        userId,
        action: "upload",
        timestamp: new Date(Date.now() - 1000).toISOString(),
        ipAddress: "192.168.1.1",
        userAgent: "Chrome",
      },
      {
        id: `act-${Date.now() - 2000}`,
        documentId: "doc-456",
        userId,
        action: "download",
        timestamp: new Date(Date.now() - 2000).toISOString(),
        ipAddress: "192.168.1.1",
        userAgent: "Chrome",
      },
    ]

    return {
      success: true,
      logs: mockLogs,
    }
  } catch (error) {
    console.error("Error getting user activity logs:", error)
    return {
      success: false,
      error: "Failed to get user activity logs",
    }
  }
}

// Types
export interface ActivityLog {
  id: string
  documentId: string
  userId: string
  action: "upload" | "download" | "view" | "edit" | "delete"
  timestamp: string
  ipAddress: string
  userAgent: string
  metadata?: Record<string, any>
}
