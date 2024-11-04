export class Quiz {
  name: string | undefined;
  category: QuizCategory | undefined;
  difficulty: QuizDifficulty | undefined;
  playerCapacity: number | undefined;
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
