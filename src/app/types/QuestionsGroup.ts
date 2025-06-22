interface QA {
  question: string;
  answer: string;
}

export interface QuestionsGroup {
  title: string;
  items: Array<QA>;
}
