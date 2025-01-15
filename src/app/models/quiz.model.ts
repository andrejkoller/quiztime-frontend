export interface Quiz {
  playerCapacity: number;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  name: string;
}

export enum QuizCategory {
  GeneralKnowledge = 9,
  History = 23,
  Art = 25,
  Music = 12,
  Book = 10,
}

export enum QuizDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}
