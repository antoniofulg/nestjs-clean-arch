import { v4 as uuid } from "uuid"

export abstract class Entity<Props = unknown> {
  public readonly _id: string
  public readonly props: Props

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id || uuid()
  }

  get id() {
    return this._id
  }

  toJSON(): Required<Props & { id: string }> {
    return {
      id: this._id,
      ...this.props,
    } as Required<Props & { id: string }>
  }
}
