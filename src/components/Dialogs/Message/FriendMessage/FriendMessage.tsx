import {DialogType, MassageType} from '../../../../Redux/diologs-reducer';
import s from './FriendMessage.module.css';

type FriendMessagePropsType = {
  message: MassageType,
  friend: DialogType

}
export const FriendMessage = (props: FriendMessagePropsType) => {
  return (
    <div
      className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img src={props.friend.srs}/>
        <div className={s.friendText}>
          <div className={s.friendName}>{props.friend.name}
          </div>
          <div className={s.friendMessageText}>{props.message.message}</div>
        </div>
      </div>
      <div className={s.friendTime}>{props.message.time}</div>
    </div>
  );
};