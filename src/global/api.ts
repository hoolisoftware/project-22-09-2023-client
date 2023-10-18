export type APIList<O> = {
  count: number;
  next: string | null;
  previous: null | null;
  results: O[];
};

export type APIOptions = {
  actions: {
    POST: { [key: string]: APIField }
  }
}

export type APIFieldType = 'integer' | 'string' | 'choice' | 'field' | 'boolean'

export type APIField = {
  type: APIFieldType
  required: boolean
  read_only: boolean
  label: string
  help_text?: string
  choices?: {
      value: string
      display_name: string
  }[]
}

