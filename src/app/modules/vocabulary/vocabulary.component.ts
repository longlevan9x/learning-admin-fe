import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../../services/vocabulary.service";
import {VocabularyModel} from "../../models/vocabulary.model";
import {LessonService} from "../../services/lesson.service";
import {LessonModel} from "../../models/lesson.model";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryTrees: any = [];
  vocabularies: VocabularyModel[] = [];
  lessons: LessonModel[] = [];
  filter: { lessonId?: string, categoryId?: string } = {};

  constructor(
    private vocabularyService: VocabularyService,
    private lessonService: LessonService,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    this.fetchList();
    this.fetchListCategory();
  }

  fetchList() {
    this.vocabularyService.findAll(this.filter).subscribe((vocabularies) => {
      this.vocabularies = vocabularies;
    });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
      this.categoryTrees = this.convertToTree(categories, '');
      console.log(this.categoryTrees)
    });
  }

  fetchListLesson() {
    this.lessonService.findAll(this.filter).subscribe(results => {
      this.lessons = results;
    });
  }

  openModal() {
  }

  onFilterLessonChange(lessonId: any) {
    this.fetchList();
  }

  onFilterCategoryChange(categoryId: any) {
    this.fetchListLesson();
  }

  //
  // convertToTree(list: any[]): any[] {
  //   const map: { [key: number]: any } = {};
  //   const tree: any[] = [];
  //
  //   // Tạo một bản đồ cho các mục theo id
  //   list.forEach(item => {
  //     const _item: any = {
  //       title: item.name,
  //       key: item._id
  //     }
  //
  //     map[item._id] = _item;
  //     _item.children = [];
  //   });
  //
  //   // Xây dựng cây với mục gốc (parentId không tồn tại)
  //   list.forEach(item => {
  //     if (item.parentId) {
  //       const parent = map[item.parentId];
  //       if (parent) {
  //         parent.children.push(item);
  //       }
  //     } else {
  //       tree.push(item);
  //     }
  //   });
  //
  //   return tree;
  // }
  //

  convertToTree(list: TreeNode[], parentId?: string): TreeNode[] {
    const tree: any[] = [];

    list.forEach((item: any)=> {
      const _item: any = {
        key: item._id,
        title: item.name,
        children: []
      };

      if (item.parentId == parentId) {
        const children = this.convertToTree(list, item._id);
        if (children.length > 0) {
          _item.children = children;
        }
        tree.push(_item);
      }
    });

    return tree;
  }
}

interface TreeNode {
  id: number;
  name: string;
  parentId?: number;
  children?: TreeNode[];
}
