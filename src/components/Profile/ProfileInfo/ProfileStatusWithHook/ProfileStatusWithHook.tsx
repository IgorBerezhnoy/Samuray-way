import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string,
    updateStatusTC: (status: string) => void
    isOwner: boolean
    name: string
}

export const ProfileStatusWithHook: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [value, setValue] = useState<string>(props.status);
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {

        setEditMode(false);
        props.updateStatusTC(value);
    };
    useEffect(() => {
        setValue(props.status);
    }, [props.status]);
    return (
        props.isOwner ? <div>
                {editMode
                    ? <div><input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange}
                                  value={value}></input></div>
                    : <div><b>My status</b><span
                        onDoubleClick={activateEditMode}>{value ? value : <> I don't have status</>}</span>
                    </div>
                }
            </div>
            : <div><span>{value ? value : 'Здесь бы мог быть статус ' + props.name}</span>
            </div>
    );

};

//     let [editMode,setEditMode]=useState<boolean>(false)
//
//
// let onDoubleClickHandler=()=>{
//         setEditMode(true)
// }
