
import style1 from './Header.module.css'

const Header = () => {
  return (
    <div className={ style1.header}>
     
      <h3 className={style1.logo}>Divya Pardeshi</h3>
      <button className={ style1.button}> Login</button>
   
    </div>
  );
};

export default Header;
