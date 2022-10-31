export interface IText {
  title: string
  body: string
  stack: IStack
}

export interface IStack {
  title: string
  stackItem: IStackItem[]
}

export interface IStackItem {
  text: string
}
