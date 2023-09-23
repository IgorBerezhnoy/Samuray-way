import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string,
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHook: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {

        setEditMode(false);
        props.updateStatusTC(status)
    };

    return <div>
        {editMode
            ? <div><input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange}
                          value={status}></input></div>
            : <div><span
                onDoubleClick={activateEditMode}>{status ?status : 'Your status'}</span>
            </div>
        }
    </div>;

};
