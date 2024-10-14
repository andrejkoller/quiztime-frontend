export class Quiz {
  id: number | undefined;
  name: string | undefined;
  category: Quiz_Category | undefined;
  difficulty: Quiz_Difficulty | undefined;
  playerCapacity: number | undefined;
}

export enum Quiz_Category {
  general_knowledge = 'general_knowledge',
  history = 'history',
  art = 'art',
  music = 'music',
  book = 'book',
}

export enum Quiz_Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}
