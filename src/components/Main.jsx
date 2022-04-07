const Main = ({ children }) =>
(<main className="lbh-main-wrapper" id="main-content" role="main">
  <div className="lbh-container">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    {children}
  </div>
</main>)

export default Main
