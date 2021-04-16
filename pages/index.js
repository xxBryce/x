function newhome() {
  return (
    <div className="login-box">
  <h2>X</h2>
  <h4>by <a href="https://verbxtim.com">verbxtim</a></h4>
  <form>
    <div className="user-box">
      <input type="text" name="x-user" required=""></input>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="x-pass" required=""></input>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
  )
}

export default newhome
