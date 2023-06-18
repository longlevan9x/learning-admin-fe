import {Injectable} from "@angular/core";

interface TreeNode {
  id: number;
  name: string;
  parentId?: number;
  children?: TreeNode[];
}

@Injectable({
  providedIn: 'root'
})
export class UtilsShared {
  treeForNgZorro(list: TreeNode[]) {
    return this.convertToTree(list, '', {key: 'key', value: 'title'})
  }

  convertToTree(list: TreeNode[], parentId?: string, mapKey?: { key: string, value: string }): TreeNode[] {
    const tree: any[] = [];

    list.forEach((item: any) => {
      let _item: any = null;
      if (mapKey) {
        _item = {
          [mapKey.key]: item._id,
          [mapKey.value]: item.name,
          children: [],
        };
      } else {
        _item = Object.assign({}, item);
        _item.children = [];
      }


      if (item.parentId == parentId) {
        const children = this.convertToTree(list, item._id, mapKey);
        if (children.length > 0) {
          _item.children = children;
        } else {
          _item.isLeaf = true;
        }

        tree.push(_item);
      }
    });

    return tree;
  }
}
