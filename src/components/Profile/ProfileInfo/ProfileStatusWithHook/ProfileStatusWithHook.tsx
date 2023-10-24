import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type PropsType = {
  status: string,
  updateStatusTC: (status: string) => void
  isOwner: boolean
  name: string
}

export const ProfileStatusWithHook: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState<boolean>(false);
  let [value, setValue] = useState<string>(props.status);
  let [error, setError] = useState<string | null>(null);
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (error !== null) {
      setError(null);
    }
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    if (value.length <= 300) {
      setEditMode(false);
      props.updateStatusTC(value);
    } else {
      setError('Value is too long');
    }
  };
  useEffect(() => {
    setValue(props.status);
  }, [props.status]);
  return (
    props.isOwner ? <div>
        {editMode
          ? <div><input className={s.status} autoFocus onBlur={deactivateEditMode} onChange={onStatusChange}
                        value={value}></input></div>
          : <div className={s.status}><b>My status: </b><abbr   data-title={"Double click for change"}
            onDoubleClick={activateEditMode}>{value ? value : <> I don't have status</>}</abbr>
          </div>
        }
        {error && <div style={{color: 'red'}}>{error}</div>}
      </div>
      : <div><b>My status: </b><span>{value ? value : 'Здесь бы мог быть статус ' + props.name}</span>
      </div>
  );

};

//     let [editMode,setEditMode]=useState<boolean>(false)
//
//
// let onDoubleClickHandler=()=>{
//         setEditMode(true)
// }
