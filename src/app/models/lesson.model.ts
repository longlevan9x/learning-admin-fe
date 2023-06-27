export interface LessonModel {
  _id?: string;
  name: string;
  bookId?: string;
  sections?: string[];
  subjects?: string[];
  cloneUrl?: string;
  categoryId?: string;
}
