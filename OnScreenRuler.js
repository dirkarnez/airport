function OnScreenRuler() {
  return (
   <span
      style={{
        display: "block",
        height: "calc(72pt / 2.54)",
        borderWidth: 1,
        borderStyle: "solid dashed",
        textAlign: "center"
      }}
    >
      ↑<br />
      72pt / 2.54
      <br />↓
    </span>
  )
}
