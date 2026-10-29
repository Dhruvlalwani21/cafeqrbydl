export type ChatRole = "user" | "model";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
  /** true while a real request for this message is in flight and it hasn't been confirmed */
  pending?: boolean;
  /** true if the send failed and can be retried */
  failed?: boolean;
}

export interface ExtractedData {
  intent: string | null;
  budget: string | null;
  area: string | null;
  timeframe: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
}

export interface ChatApiResponse {
  sessionId: string;
  replyText: string;
  isFullyQualified: boolean;
  leadJustCreated?: boolean;
  extractedData: ExtractedData;
  error?: string;
}

export const EMPTY_EXTRACTED_DATA: ExtractedData = {
  intent: null,
  budget: null,
  area: null,
  timeframe: null,
  name: null,
  email: null,
  phone: null,
};