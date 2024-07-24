import "../login/Login.scss";

export default function Login({
  closeModal
}: {
  closeModal: () => void
}) {
  return (
    <div className="login">
      <h2>Đăng nhập</h2>
      <form>
        <div>
          <label>Tên đăng nhập:</label> &nbsp;
          <input type="text" placeholder='Email'/>
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input className='input' type="password" placeholder='Password'/>
        </div>
        <button type="submit">Đăng nhập</button>
        <button type="button" onClick={ closeModal }>Đóng</button>
      </form>
    </div>
  );
}