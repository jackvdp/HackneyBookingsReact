export default function Main(props) {
  return(
    <main className="lbh-main-wrapper" id="main-content" role="main">
      <div className="lbh-container">
        {props.children}
      </div>
    </main>
  )
}