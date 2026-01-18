import { NextRequest, NextResponse } from 'next/server';
import { getBlessings, addBlessing } from '@/lib/sheets';
import { z } from 'zod';

const blessingSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    relationship: z.string().min(1, 'Relationship is required'),
    message: z.string().min(1, 'Message is required').max(500, 'Message is too long'),
});

export async function GET() {
    try {
        const blessings = await getBlessings();
        return NextResponse.json({ success: true, blessings });
    } catch (error) {
        console.error('Error fetching blessings:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blessings' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = blessingSchema.parse(body);

        const success = await addBlessing(data);

        if (success) {
            return NextResponse.json({ success: true }, { status: 201 });
        } else {
            return NextResponse.json(
                { success: false, error: 'Failed to save blessing' },
                { status: 500 }
            );
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: error.errors[0].message },
                { status: 400 }
            );
        }

        console.error('Error saving blessing:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
