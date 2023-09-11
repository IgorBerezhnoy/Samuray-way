import React from 'react';

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    };

    render() {
        return <div>
            {this.state.editMode
                ? <div><input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}></input></div>
                : <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
            }
        </div>;
    }
}

//     let [editMode,setEditMode]=useState<boolean>(false)
//
//
// let onDoubleClickHandler=()=>{
//         setEditMode(true)
// }
