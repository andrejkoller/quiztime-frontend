export class Quiz {
  id: number | undefined;
  name: string | undefined;
  category: QuizCategory | undefined;
  difficulty: QuizDifficulty | undefined;
  playerCapacity: number | undefined;
}

export enum QuizCategory {
  GeneralKnowledge = 'General',
  History = 'History',
  Art = 'Art',
  Music = 'Music',
  Book = 'Book',
}

export enum QuizDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
