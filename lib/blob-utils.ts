import { put, del, list } from "@vercel/blob"

// Function to upload a document to Vercel Blob
export async function uploadDocument(file: File, userId: string, metadata: DocumentMetadata) {
  try {
    // Generate a unique path for the document
    const timestamp = Date.now()
    const path = `documents/${userId}/${timestamp}-${file.name}`

    // Upload the file to Vercel Blob
    const blob = await put(path, file, {
      access: "public",
      addRandomSuffix: true, // Add a random suffix to ensure uniqueness
    })

    // Return the blob information along with metadata
    return {
      success: true,
      fileId: blob.url,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadTimestamp: timestamp,
      ...metadata,
    }
  } catch (error) {
    console.error("Error uploading document:", error)
    return {
      success: false,
      error: "Failed to upload document",
    }
  }
}

// Function to delete a document from Vercel Blob
export async function deleteDocument(url: string) {
  try {
    await del(url)
    return { success: true }
  } catch (error) {
    console.error("Error deleting document:", error)
    return {
      success: false,
      error: "Failed to delete document",
    }
  }
}

// Function to list documents for a user
export async function listUserDocuments(userId: string) {
  try {
    const { blobs } = await list({
      prefix: `documents/${userId}/`,
    })

    return {
      success: true,
      documents: blobs,
    }
  } catch (error) {
    console.error("Error listing documents:", error)
    return {
      success: false,
      error: "Failed to list documents",
    }
  }
}

// Types
export interface DocumentMetadata {
  title: string
  description?: string
  category: string
  accessLevel: "private" | "team" | "public"
  tags?: string[]
}
