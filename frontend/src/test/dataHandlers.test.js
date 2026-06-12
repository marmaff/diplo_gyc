import { describe, it, expect } from 'vitest';
import {
  formatPrice,
  sanitizeString,
  calculateDiscount,
  getStatusColor,
  arrayToMap,
  formatDate,
  capitalizeWords,
} from '../utils/dataHandlers';

describe('dataHandlers utilities', () => {
  describe('formatPrice', () => {
    it('should format price correctly', () => {
      expect(formatPrice(10.5, 'USD')).toContain('$10.50');
    });

    it('should return N/A for invalid price', () => {
      expect(formatPrice(null)).toBe('N/A');
      expect(formatPrice('10')).toBe('N/A');
    });
  });

  describe('sanitizeString', () => {
    it('should remove basic tags', () => {
      expect(sanitizeString('<div>Hello</div>')).toBe('divHello/div');
      expect(sanitizeString('  Spaces  ')).toBe('Spaces');
    });

    it('should return empty string for non-string inputs', () => {
      expect(sanitizeString(null)).toBe('');
      expect(sanitizeString(123)).toBe('');
    });
  });

  describe('calculateDiscount', () => {
    it('should calculate discount correctly', () => {
      expect(calculateDiscount(100, 20)).toBe(80);
      expect(calculateDiscount(50, 10)).toBe(45);
    });

    it('should handle edge cases', () => {
      expect(calculateDiscount(100, -5)).toBe(100);
      expect(calculateDiscount(100, 105)).toBe(100);
      expect(calculateDiscount(-10, 20)).toBe(0);
    });
  });

  describe('getStatusColor', () => {
    it('should return correct colors for known statuses', () => {
      expect(getStatusColor('active')).toBe('#28a745');
      expect(getStatusColor('PENDING')).toBe('#ffc107');
      expect(getStatusColor('inactive')).toBe('#dc3545');
    });

    it('should return default color for unknown status', () => {
      expect(getStatusColor('unknown')).toBe('#6c757d');
      expect(getStatusColor(null)).toBe('#6c757d');
    });
  });

  describe('arrayToMap', () => {
    it('should convert array to map', () => {
      const arr = [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ];
      const result = arrayToMap(arr);
      expect(result['1']).toEqual(arr[0]);
      expect(result['2']).toEqual(arr[1]);
    });

    it('should return empty object for invalid input', () => {
      expect(arrayToMap(null)).toEqual({});
      expect(arrayToMap({})).toEqual({});
    });
  });

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = '2023-05-20T10:00:00Z';
      const formatted = formatDate(date);
      expect(formatted).toContain('mayo');
      expect(formatted).toContain('2023');
    });

    it('should handle invalid dates', () => {
      expect(formatDate(null)).toBe('Fecha inválida');
      expect(formatDate('not-a-date')).toBe('Fecha inválida');
    });
  });

  describe('capitalizeWords', () => {
    it('should capitalize each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('REACT JS')).toBe('React Js');
    });

    it('should handle empty or null input', () => {
      expect(capitalizeWords('')).toBe('');
      expect(capitalizeWords(null)).toBe('');
    });
  });
});
