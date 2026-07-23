import { describe, it, expect } from 'vitest';
import { toApiStatus } from './bookService';

describe('toApiStatus', () => {
  it('converts WANT_TO_READ to want-to-read', () => {
    expect(toApiStatus('WANT_TO_READ')).toBe('want-to-read');
  });
  it('converts READING to reading', () => {
    expect(toApiStatus('READING')).toBe('reading');
  });

  it('converts FINISHED to finished', () => {
    expect(toApiStatus('FINISHED')).toBe('finished');
  });
});