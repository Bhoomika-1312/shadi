import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/sheets'
import { z } from 'zod'

const rsvpSchema = z.object({
  inviteeId: z.string().min(1, 'Invitee ID is required'),
  inviteeName: z.string().min(1, 'Name is required'),
  attending: z.boolean(),
  message: z.string().max(500, 'Message is too long').optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = rsvpSchema.parse(body)

    // Save to Google Sheets
    const sheetValues = [
      data.inviteeName,
      data.attending ? 'Yes' : 'No',
      data.message || '',
      new Date().toLocaleString()
    ];

    await appendToSheet(sheetValues)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Error saving RSVP:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save RSVP' },
      { status: 500 }
    )
  }
}

