export interface User {
  username: string;
  id: number;
  url: string;
  cover_url: string;
}

export interface Earnings {
  currency: string;
  amount: number;
  amount_formatted: string;
}

export interface ItchioGame {
  type: string;
  p_linux?: boolean;
  p_osx?: boolean;
  p_android?: boolean;
  cover_url: string;
  short_text: string;
  created_at: string;
  min_price?: number;
  user: User;
  classification: string;
  p_windows?: boolean;
  views_count: number;
  url: string;
  purchases_count: number;
  has_demo: boolean;
  published_at: string;
  published: boolean;
  downloads_count: number;
  can_be_bought: boolean;
  id: number;
  in_press_system: boolean;
  title: string;
  earnings?: Earnings[];
  embed?: {
    width: number;
    height: number;
    fullscreen: boolean;
  };
}
