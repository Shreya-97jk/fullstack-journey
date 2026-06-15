export interface Book {
  id: number;
  title: string;
  author: string;
  genre?: string;
  status: 'want-to-read' | 'reading' | 'finished';
  rating?: number;
  notes?: string;
  finished_at?: string; // ISO date string
  created_at: string;
}