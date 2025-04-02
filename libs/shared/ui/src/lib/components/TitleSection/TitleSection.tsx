interface Props {
  normalText: string
  highlightText: string
  customClassName?: string
}

export function TitleSection({
  normalText,
  highlightText,
  customClassName = '',
}: Props) {
  return (
    <h2 className={`text-5xl font-normal mb-6 ${customClassName}`}>
      {normalText} <span className='font-bold'>{highlightText}</span>
    </h2>
  )
}

export default TitleSection
