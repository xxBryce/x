
function newhome() {
  return (
    <div className="login-box">
  <h2>X</h2>
  <h4>by <a href="https://verbxtim.com">verbxtim</a></h4>
  <form id="loginForm">
    <div className="user-box">
      <input type="text" id="xuser" name="xuser" required=""></input>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" id="xpass" name="xpass" required=""></input>
      <label>Password</label>
      </div>
    <a onClick={alert('coming soon')}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
  </form>
  <h6><a href="how">How do I create an account?</a></h6>

</div>
  )
}

export default newhome
