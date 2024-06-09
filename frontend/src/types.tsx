export type Tag = {
    id: string,
    label: string
}

export type Notes = {
    id: string,
    title: string,
    tags: Tag[]
}

export type NoteList = {
    notes: Notes[]
}

export type NoteData = {
    id: string,
    title: string,
    tags: Tag[],
    markdown: string
}

export type NoteFormProps = {
    id: string,
    onSubmit: (data: NoteData) => void
} & Partial<NoteData>