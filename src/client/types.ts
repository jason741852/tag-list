export type ItemOriginal = {
  id: number;
  name: string;
  created_at: string;
};

export type Item = {
  id: number;
  name: string;
  createdAt: string;
  tags: string[];
};

export type ItemTag = {
  id: string;
  label: string;
};

export enum FilterType {
  And = 'And',
  Or = 'Or',
}
