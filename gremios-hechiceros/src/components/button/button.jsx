import styles from './button.module.css';
//dos atributos: nombre y funcion 
import {React} from 'react';
const Button = ({name,count,setCount}) => {
  return (
    <>
    <div onClick={() => setCount((count = count +2))

    }>
      <a className={styles.display}>{name}</a>
    </div>
    </>
  );
};

export default Button;