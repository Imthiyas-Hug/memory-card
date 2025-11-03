function RenderCard({ randomIndex, cards }) {
  return(
      cards.map((card, index) => randomIndex.includes(index) ? card : null)
  )
}

export default RenderCard;
