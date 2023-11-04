import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entity"

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe("UserEntity unit tests", () => {
  it("Should set props and id", () => {
    const props = { prop1: "value1", prop2: 15 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.id).not.toBeNull()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it("Should accept a valid uuid", () => {
    const props = { prop1: "value1", prop2: 15 }
    const id = "d484e7c2-4652-4445-957a-b7b68796f2db"
    const entity = new StubEntity(props, id)

    expect(entity.props).toStrictEqual(props)
    expect(entity.id).toEqual(id)
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it("Should convert a entity to a Javascript Object", () => {
    const props = { prop1: "value1", prop2: 15 }
    const id = "d484e7c2-4652-4445-957a-b7b68796f2db"
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
