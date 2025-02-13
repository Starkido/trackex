// User Types
export interface User {
  uid: string;
  email: string | null;
  displayName?: string;
}

export interface UserProfile {
  displayName: string;
  monthlyBudget: number | null;
  email: string;
  updatedAt: string;
}

// Expense Types
export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  color: string;
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'food', name: 'Food', color: '#EF4444' },
  { id: 'transportation', name: 'Transportation', color: '#F59E0B' },
  { id: 'rent', name: 'Rent', color: '#3B82F6' },
  { id: 'entertainment', name: 'Entertainment', color: '#10B981' },
  { id: 'utilities', name: 'Utilities', color: '#6366F1' },
  { id: 'other', name: 'Other', color: '#8B5CF6' }
];