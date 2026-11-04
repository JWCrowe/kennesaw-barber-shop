// Google Calendar is NOT used for Kennesaw Barber Shop. Square is the only calendar.
// These no-op stubs keep the shared Parker booking code paths (availability, blocks, appointments) unchanged.
export type Busy = { start: Date; end: Date };
export type EventInput = { summary: string; description?: string; start: Date; end: Date; allDay?: { startKey: string; endKey: string } };
export type GoogleConn = { email?: string; calendar_id?: string };

export async function getConnection(): Promise<GoogleConn | null> {
  return null;
}

export async function freeBusy(_from: Date, _to: Date): Promise<{ busy: Busy[]; connected: boolean; error?: string }> {
  return { busy: [], connected: false };
}

export async function upsertEvent(_input: EventInput, existingId?: string | null): Promise<string | null> {
  return existingId || null;
}

export async function deleteEvent(_eventId: string | null | undefined) {}
