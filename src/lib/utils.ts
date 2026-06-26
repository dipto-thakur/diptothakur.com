import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, fmt = 'MMM yyyy'): string {
  return format(parseISO(dateString), fmt);
}

export function formatDateLong(dateString: string): string {
  return format(parseISO(dateString), 'MMMM d, yyyy');
}

export function timeAgo(dateString: string): string {
  return formatDistanceToNow(parseISO(dateString), { addSuffix: true });
}

export function formatDateRange(start: string, end?: string, current?: boolean): string {
  const startFmt = formatDate(start);
  if (current) return `${startFmt} — Present`;
  if (!end) return startFmt;
  return `${startFmt} — ${formatDate(end)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
