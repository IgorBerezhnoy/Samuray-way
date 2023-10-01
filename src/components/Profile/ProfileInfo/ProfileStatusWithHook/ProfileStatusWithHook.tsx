import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string,
    updateStatusTC: (status: string) => void
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
        props.updateStatusTC(value)
    };
useEffect(()=>{
    setValue(props.status)
},[props.status])
    return <div>
        {editMode
            ? <div><input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange}
                          value={value}></input></div>
            : <div><span
                onDoubleClick={activateEditMode}>{value ?value : 'Your status'}</span>
            </div>
        }
    </div>;

};

//     let [editMode,setEditMode]=useState<boolean>(false)
//
//
// let onDoubleClickHandler=()=>{
//         setEditMode(true)
// }
