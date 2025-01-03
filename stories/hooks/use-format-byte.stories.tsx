import type { Meta } from "@storybook/react"
import { Text, useFormatByte } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useFormatByte",
}

export default meta

export const basic = () => {
  const formatted50Bytes = useFormatByte(50)
  const formatted5KB = useFormatByte(5000)
  const formatted5MB = useFormatByte(5000000)
  const formatted5GB = useFormatByte(5000000000)

  return (
    <>
      <Text>{formatted50Bytes}</Text>
      <Text>{formatted5KB}</Text>
      <Text>{formatted5MB}</Text>
      <Text>{formatted5GB}</Text>
    </>
  )
}

export const withBits = () => {
  const formattedBits = useFormatByte(1450, { unit: "bit" })

  return <Text>{formattedBits}</Text>
}

export const withLocale = () => {
  const formattedBytesDE = useFormatByte(1450, { locale: "de-DE" })
  const formattedBytesCN = useFormatByte(1450, { locale: "zh-CN" })

  return (
    <>
      <Text>{formattedBytesDE}</Text>
      <Text>{formattedBytesCN}</Text>
    </>
  )
}

export const withUnitDisplay = () => {
  const formattedBytesShort = useFormatByte(50300, {
    unitDisplay: "short",
  })
  const formattedBytesLong = useFormatByte(50300, {
    unitDisplay: "long",
  })
  const formattedBytesNarrow = useFormatByte(50300, {
    unitDisplay: "narrow",
  })

  return (
    <>
      <Text>{formattedBytesShort}</Text>
      <Text>{formattedBytesLong}</Text>
      <Text>{formattedBytesNarrow}</Text>
    </>
  )
}
