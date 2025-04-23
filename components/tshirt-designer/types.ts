export type TShirtStyle = {
  id: string
  name: string
}

export type TShirtView = "front" | "back" | "left" | "right"

export type DesignElement = {
  id: string
  type: "image" | "text"
  content: string
  position: {
    x: number
    y: number
  }
  size: {
    width: number
    height: number
  }
  rotation: number
  zIndex: number
  textProps?: {
    fontFamily: string
    fontSize: number
    color: string
    bold: boolean
    italic: boolean
    underline: boolean
  }
}
