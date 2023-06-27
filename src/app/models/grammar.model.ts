export interface GrammarModel {
  _id?: string;
  title?: string;
  bookId?: string;
  structure?: string;
  explain?: string;
  mean?: string;
  examples?: { wordRaw: string, wordTranslate: string}[];
  cloneUrl?: string;

  //virtual
  expand?: boolean | any
}
