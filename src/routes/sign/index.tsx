import {FunctionalComponent, h} from 'preact';
import {SignProperties} from '../../components/signs';
import {JREastSign} from '../../components/signs/jr-east';
import {JRWestSign} from '../../components/signs/jr-west';
import {COMPANY} from '../../util/enums';
import style from './style.css';

const Sign: FunctionalComponent<SignProperties> = (props) => {
  let SignComponent: FunctionalComponent<SignProperties>;
  switch (props.sign.company) {
    case COMPANY.JR_EAST:
      SignComponent = JREastSign;
      break;
    case COMPANY.JR_WEST:
      SignComponent = JRWestSign;
      break;
    default:
      throw new Error(`Unsupported sign company: ${props.sign.company}`);
  }

  return (
    <div class={style.signContainer} style={{transform: `scale(${props.scale})`}}>
      <SignComponent {...props} />
      {props.boxShadow ? <div class={style.signBoxShadow} /> : null}
    </div>
  );
};

export default Sign;
