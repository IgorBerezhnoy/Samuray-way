import React from 'react';
import axios from 'axios';
import s from "./Users.module.css"


export class UsersC extends React.Component<any, any>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUsers(response.data.items);
        });
    }

    render() {
      return<div className={s.usersWrapper}>

                {this.props.users.map(el => <div className={""} key={el.id}>
                    <div>
                        <div><img width={'50px'}
                                  src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                                  alt={el.name} className={""}/></div>
                        <div>
                            {el.followed ? <button onClick={() => this.props.follow(el.id)}>Follow</button> :
                                <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>}

                        </div>
                    </div>
                    <div>
                            <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                            </span>
                    </div>
                </div>)}
            </div>
    }
}