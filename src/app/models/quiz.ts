import {
  Earth,
  Landmark,
  Palette,
  Music,
  Library,
  Vote,
  Clapperboard,
  Tv,
  Medal,
  Cat,
  Gamepad2,
  School,
  LucideIconData,
  Drama,
  Car,
  Amphora,
  Divide,
  Cpu,
  Dice6,
} from 'lucide-angular';

export interface Quiz {
  playerCapacity: number;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  name: string;
}

export enum QuizCategory {
  GeneralKnowledge = 9,
  Book = 10,
  Film = 11,
  Music = 12,
  MusicalsAndTheatres = 13,
  Television = 14,
  VideoGames = 15,
  BoardGames = 16,
  Computers = 18,
  Mathematics = 19,
  Mythology = 20,
  Sports = 21,
  Geography = 22,
  History = 23,
  Politics = 24,
  Art = 25,
  Animals = 27,
  Vehicles = 28,
}

export const QuizCategoryNames: Record<QuizCategory, string> = {
  [QuizCategory.GeneralKnowledge]: 'General',
  [QuizCategory.Book]: 'Books',
  [QuizCategory.Film]: 'Film',
  [QuizCategory.Music]: 'Music',
  [QuizCategory.MusicalsAndTheatres]: 'Theatres',
  [QuizCategory.Television]: 'Television',
  [QuizCategory.VideoGames]: 'Video Games',
  [QuizCategory.BoardGames]: 'Board Games',
  [QuizCategory.Computers]: 'Computers',
  [QuizCategory.Mathematics]: 'Mathematics',
  [QuizCategory.Mythology]: 'Mythology',
  [QuizCategory.Sports]: 'Sports',
  [QuizCategory.Geography]: 'Geography',
  [QuizCategory.History]: 'History',
  [QuizCategory.Politics]: 'Politics',
  [QuizCategory.Art]: 'Art',
  [QuizCategory.Animals]: 'Animals',
  [QuizCategory.Vehicles]: 'Vehicles',
};

export const QuizCategoryIcons: Record<QuizCategory, LucideIconData> = {
  [QuizCategory.GeneralKnowledge]: School,
  [QuizCategory.Book]: Library,
  [QuizCategory.Film]: Clapperboard,
  [QuizCategory.Music]: Music,
  [QuizCategory.MusicalsAndTheatres]: Drama,
  [QuizCategory.Television]: Tv,
  [QuizCategory.VideoGames]: Gamepad2,
  [QuizCategory.BoardGames]: Dice6,
  [QuizCategory.Computers]: Cpu,
  [QuizCategory.Mathematics]: Divide,
  [QuizCategory.Mythology]: Amphora,
  [QuizCategory.Sports]: Medal,
  [QuizCategory.Geography]: Earth,
  [QuizCategory.History]: Landmark,
  [QuizCategory.Politics]: Vote,
  [QuizCategory.Art]: Palette,
  [QuizCategory.Animals]: Cat,
  [QuizCategory.Vehicles]: Car,
};

export enum QuizDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const QuizDifficultyNames: Record<QuizDifficulty, string> = {
  [QuizDifficulty.Easy]: 'Easy',
  [QuizDifficulty.Medium]: 'Medium',
  [QuizDifficulty.Hard]: 'Hard',
};
