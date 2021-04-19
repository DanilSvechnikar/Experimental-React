import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    );
}


const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem  name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem  name='Sveta' id='3'/>
                <DialogItem  name='Sasha' id='4'/>
                <DialogItem  name='Viktor' id='5'/>
                <DialogItem  name='Valera' id='6'/>

            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
}


export default Dialogs;