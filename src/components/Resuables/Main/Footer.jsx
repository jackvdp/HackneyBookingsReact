import HackneyLogo from "./HackneyLogo"

var style = {
  backgroundColor: "#00664f",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  width: "100%",
  display: "inline-block"
}

var fontStyle = {
  color: "white",
  display: "block"
}

export default function Footer() {
  return (
      <>
          <div style={style}>
            <HackneyLogo />
            <a style={fontStyle} href="#" class="lbh-link">Parking fine</a>
            <a style={fontStyle} href="#" class="lbh-link">Pay your council tax</a>
            <a style={fontStyle} href="#" class="lbh-link">Pay your rent</a>
            <a style={fontStyle} href="#" class="lbh-link">Order bins and bags</a>
            <a style={fontStyle} href="#" class="lbh-link">Coronavirus</a>
          </div>
      </>
  )
}


