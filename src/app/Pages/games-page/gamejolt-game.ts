interface Developer {
  id: number;
  type: string;
  username: string;
  name: string;
  display_name: string;
  web_site: string;
  url: string;
  slug: string;
  img_avatar: string;
  shouts_enabled: boolean;
  friend_requests_enabled: boolean;
  is_spawnday: boolean;
  status: number;
  permission_level: number;
  created_on: number;
  theme: {
    id: number;
    custom: string;
  };
  follower_count: number;
  following_count: number;
  avatar_frame: any; // Add the correct type if available
}

interface ThumbnailMediaItem {
  id: number;
  type: string;
  parent_id: number;
  // ... other properties
}

interface Compatibility {
  id: number;
  game_id: number;
  os_windows: boolean;
  os_windows_64: boolean;
  os_linux: boolean;
  os_linux_64: boolean;
}

interface Theme {
  id: number;
  custom: string;
}

interface Sellable {
  id: number;
  type: string;
  primary: boolean;
  key: string;
  title: string;
  description: string | null;
  pricings: any[]; // Add the correct type if available
  linked_key_providers: any[]; // Add the correct type if available
  resource_type: string;
  resource: {
    id: number;
    game_id: number;
    title: string;
    description: string | null;
    sort: number;
    added_on: number;
    published_on: number | null;
    updated_on: number;
    visibility: string;
    partner_visibility: boolean;
    status: string;
    game: Game | null;
  };
}

interface Game {
  id: number;
  developer: Developer | null;
  title: string;
  slug: string;
  path: string;
  img_thumbnail: string;
  header_media_item: any; // Add the correct type if available
  thumbnail_media_item: ThumbnailMediaItem | null;
  media_count: number | null;
  follower_count: number | null;
  ratings_enabled: boolean | null;
  referrals_enabled: boolean | null;
  compatibility: Compatibility | null;
  modified_on: number | null;
  posted_on: number | null;
  published_on: number | null;
  status: number | null;
  development_status: number | null;
  canceled: boolean | null;
  tigrs_age: number | null;
  has_adult_content: boolean | null;
  theme: Theme | null;
  should_show_ads: boolean | null;
  sellable: Sellable | null;
  comments_enabled: boolean | null;
}

interface GameListItem {
  id: number;
  developer: Developer;
  title: string;
  slug: string;
  path: string;
  img_thumbnail: string;
  header_media_item: any; // Add the correct type if available
  thumbnail_media_item: ThumbnailMediaItem | null;
  media_count: number;
  follower_count: number;
  ratings_enabled: boolean;
  referrals_enabled: boolean;
  compatibility: Compatibility;
  modified_on: number;
  posted_on: number;
  published_on: number;
  status: number;
  development_status: number;
  canceled: boolean;
  tigrs_age: number;
  has_adult_content: boolean;
  theme: Theme;
  should_show_ads: boolean;
  sellable: Sellable;
  comments_enabled: boolean;
}
