import {MassageType} from '../../../../Redux/diologs-reducer';
import s from "./MyMessage.module.css"
type MyMessagePropsType = {
  message: MassageType,
userPhoto:string
userName:string

}
export const MyMessage = (props: MyMessagePropsType) => {
  return (
    <div
      className={s.message}>
      <div className={s.imageAndText}>
        <img src={props.userPhoto}/>
        <div className={s.text}>
          <div className={s.name}>{props.userName}
          </div>
          <div className={s.messageText}>{props.message.message}</div>
        </div>
      </div>
      <div className={s.time}>{props.message.time}</div>
    </div>
  );
};