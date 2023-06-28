export interface ConversationModel {
  _id: string;
  title: string;
  lessonId: string;

  audioFile: string;

  image: string;

  converses: { character: string, converse: string, mean: string }[];
}
