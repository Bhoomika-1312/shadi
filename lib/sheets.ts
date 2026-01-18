import { google } from 'googleapis';

// Interface for Blessing
export interface Blessing {
    name: string;
    relationship: string;
    message: string;
    timestamp?: string;
}

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthClient() {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
        console.warn('Google Sheets credentials missing');
        return null;
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: SCOPES,
    });

    return auth;
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || '1ed-fXLvLu83FgXS1fod0k6XkosRpYNl8IMT74PqjpE4';

export async function appendToSheet(values: string[]) {
    const auth = await getAuthClient();
    if (!auth) throw new Error('Authentication failed');

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:E', // RSVP Sheet
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [values],
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error appending to sheet:', error);
        throw error;
    }
}

export async function getBlessings(): Promise<Blessing[]> {
    const auth = await getAuthClient();
    if (!auth) return [];

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Blessings!A:D', // Name, Relationship, Message, Timestamp
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) return [];

        // Skip header row if it exists (assuming first row is header)
        // Adjust this logic if the sheet doesn't have headers
        // Just in case, detailed check:
        const blessings = rows.filter(row => row[0] !== 'Name').map((row) => ({
            name: row[0] || '',
            relationship: row[1] || '',
            message: row[2] || '',
            timestamp: row[3] || '',
        }));

        return blessings;
    } catch (error) {
        console.error('Error fetching blessings:', error);
        // Fallback or empty
        return [];
    }
}

export async function addBlessing(blessing: Blessing): Promise<boolean> {
    const auth = await getAuthClient();
    if (!auth) return false;

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const values = [
            [blessing.name, blessing.relationship, blessing.message, new Date().toISOString()]
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Blessings!A:D',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        return true;
    } catch (error) {
        console.error('Error adding blessing:', error);
        return false;
    }
}
