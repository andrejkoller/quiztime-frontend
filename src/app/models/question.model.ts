export class Question {
  id: number  | undefined;
  name: string  | undefined;
  category: Question_Category  | undefined;
  difficulty: Question_Difficulty  | undefined;
}

export enum Question_Category {
  general_knowledge = 'general_knowledge',
  history = 'history',
  animals = 'animals',
  vehicles = 'vehicles',
  art = 'art',
  music = 'music',
}

export enum Question_Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}
