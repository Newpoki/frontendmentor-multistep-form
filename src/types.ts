export type FormsAggregatedData = {
    personalInfos: {
        name: string
        email: string
        phone: string
    }
}

export type FormsName = 'personalInfos' | 'plan' | 'add-ons' | 'summary'

export type Forms = {
    currentFormName: FormsName
    data: FormsAggregatedData
}
