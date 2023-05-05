export const isAcceptableKey = (
  keyPressEvent: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
  acceptableKey: string[]
): boolean => acceptableKey.includes(keyPressEvent.code)

export const onRootKeyPress = (keyPressEvent: React.KeyboardEvent<HTMLDivElement>, keyPressFunc: () => void) => {
  keyPressEvent.preventDefault()
  if (isAcceptableKey(keyPressEvent, ['Enter', 'Space'])) keyPressFunc()
}
