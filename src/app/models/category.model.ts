export interface CategoryModel {
  _id: string;
  name: string;
  parentId: string;
  children?: CategoryModel[];
  //virtual
  showChildren?: boolean;
}
