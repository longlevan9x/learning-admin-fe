import {Component, OnInit} from '@angular/core';
import {CategoryModel} from "../../models/category.model";
import {LessonModel} from "../../models/lesson.model";
import {LessonService} from "../../services/lesson.service";
import {CategoryService} from "../../services/category.service";
import {UtilsShared} from "../../shareds/utils.shared";
import {ActivatedRoute} from "@angular/router";
import {ConversationService} from "../../services/conversation.service";
import {ConversationModel} from "../../models/conversation.model";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryTrees: any = [];
  conversations: ConversationModel[] = [];
  lessons: LessonModel[] = [];
  filter: { lessonId?: string, categoryId?: string } = {};

  constructor(
    private conversationService: ConversationService,
    private lessonService: LessonService,
    private categoryService: CategoryService,
    private utilsShared: UtilsShared,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.fetchListCategory();
    this.route.queryParams.subscribe((params: any) => {
      if (params.cateId) {
        this.filter.categoryId = params.cateId;
        this.fetchListLesson();
      }

      if (params.lessonId) {
        this.filter.lessonId = params.lessonId;
      }

      this.fetchList();
    });
  }

  fetchList() {
    this.conversationService.findAll(this.filter).subscribe((conversations) => {
      this.conversations = conversations;
    });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
      this.categoryTrees = this.utilsShared.convertToTree(categories, '', {key: 'key', value: 'title'});
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
}
