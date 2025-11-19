function OnScreenRuler() {
  return (
   <span
      style={{
        display: "block",
        height: "calc(72pt / 2.54)",
        borderWidth: 1,
        borderStyle: "solid dashed",
        lineHeight: "24pt",
        fontSize: "19pt",
        textAlign: "center",
        margin: "1.2em"
      }}
    >
      ↑<br />
      72pt / 2.54
      <br />↓
    </span>
  )
}
