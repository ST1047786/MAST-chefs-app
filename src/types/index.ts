export type Course = 'Starter' | 'Main' | 'Dessert' | 'Wine Pairing';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
}
