function newhome() {
  const registerUser = async event => {
  event.preventDefault()
console.log('hi')
    const res = await fetch(
      'https://webhook.site/def40e9f-dc8a-41d7-867a-86ae542913cd',
      {
        body: JSON.stringify({
          name: event.target.xuser.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
}


  return (
    <div className="login-box">
  <h2>X</h2>
  <h4>by <a href="https://verbxtim.com">verbxtim</a></h4>
  <form id="loginForm" onSubmit={registerUser}>
    <div className="user-box">
      <input type="text" id="xuser" name="xuser" required=""></input>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="xpass" required=""></input>
      <label>Password</label>
    </div>
    <a onClick={()=>document.getElementById('loginForm').submit()}>
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
