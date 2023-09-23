import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string,
    updateStatusTC: (status: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}

export class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatusTC(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    };

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    };

    render() {
        return <div>
            {this.state.editMode
                ? <div><input autoFocus onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
                              value={this.state.status}></input></div>
                : <div><span
                    onDoubleClick={this.activateEditMode}>{this.state.status ? this.state.status : 'Your status'}</span>
                </div>
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
