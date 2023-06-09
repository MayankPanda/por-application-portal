import './studentloginpage.css'

function Student_Login_Page() {
  return (
    <div className="Login-Page">
        <div className='Login-Box'>
            <form>
            <label><p>Roll Number:</p>
            <input type="text" />
            </label>
            <label>
                <p>Password:</p>
                <input type="password"/>
            </label>
            </form>
        </div>
    </div>
  );
}

export default Student_Login_Page;
