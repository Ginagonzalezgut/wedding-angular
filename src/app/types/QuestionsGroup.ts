interface QA {
  question: string;
  answer: string;
  email?: string;
}

export interface QuestionsGroup {
  title: string;
  items: Array<QA>;
}
