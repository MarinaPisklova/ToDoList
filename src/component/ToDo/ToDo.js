import React from 'react';
import styles from './ToDo.module.scss';
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import { Form } from "react-bootstrap";
import Tabs from "../Tabs/Tabs";
import Notes from "../Notes/Notes";
import Warning from '../Warning/Warning';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { id: 0, text: "Купить молоко", status: true },
                { id: 1, text: "Сделать уборку", status: true },
                { id: 2, text: "Убрать зимние вещи", status: false },
            ],
            newNoteText: '',
            isLengthMatch: true,
            messageLength: 20,
        };
        this.tabs = [
            { type: 0, name: "Все", isActive: true },
            { type: 1, name: "Выполненные", isActive: false },
            { type: 2, name: "Невыполненные", isActive: false },
        ];
        this.state.filteredNotes = this.getFilteredNotes(this.state.notes);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
        this.onClickTabs = this.onClickTabs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeStatus(id) {
        let newNotes = this.state.notes.map(note => {
            if (note.id === id)
                note.status = !note.status;
            return note;
        });

        this.setState({
            notes: newNotes,
            filteredNotes: this.getFilteredNotes(newNotes),
        })
    }

    deleteNote(id) {
        let newNotes = this.state.notes;
        let indexNote;

        newNotes.forEach((note, index) => {
            if (note.id === id)
                indexNote = index;
        });
        newNotes.splice(indexNote, 1);

        this.setState({
            notes: newNotes,
            filteredNotes: this.getFilteredNotes(newNotes),
        })
    }

    onChangeNote(e) {
        if (e.target.value !== '\n') {
            if (e.target.value.length > this.state.messageLength) {
                this.setState({
                    isLengthMatch: false,
                });
            }
            else {
                this.setState({
                    newNoteText: e.target.value,
                    isLengthMatch: true,
                });
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    onKeyPressHandler(event) {

        if (event.charCode === 13 && this.state.isLengthMatch) {
            if (this.state.newNoteText.length !== 0) {
                let newNotes = this.state.notes;
                newNotes.push({ id: newNotes[newNotes.length - 1].id + 1, text: this.state.newNoteText, status: false });
                this.setState({
                    notes: newNotes,
                    filteredNotes: this.getFilteredNotes(newNotes),
                    newNoteText: '',
                })
            }
        }
    }

    onClickTabs(type) {
        this.tabs.forEach(tab => {
            tab.isActive = tab.type === type ? true : false;
        });

        this.setState({
            filteredNotes: this.getFilteredNotes(this.state.notes),
        })
    }

    getFilteredNotes(newNotes) {
        const type = this.getFilterType();
        if (type === 0) {
            return newNotes;
        }
        else if (type === 1) {
            return newNotes.filter(note => note.status === true);
        }
        else if (type === 2) {
            return newNotes.filter(note => note.status === false);
        }
    }

    getFilterType() {
        return this.tabs.filter(tab => tab.isActive)[0].type;
    }

    render() {
        return (
            <div className={styles.todo}>
                <Header />
                <div>
                    <div className={styles.todo__input + ' ' + styles.input}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control className={styles.input__textarea} onKeyPress={this.onKeyPressHandler} onChange={this.onChangeNote} value={this.state.newNoteText} type="email" placeholder="Записать что-то еще..." />
                        </Form>
                        <Warning isLengthMatch={this.state.isLengthMatch} messageLength={this.state.messageLength}/>
                    </div>
                    <div className={styles.todo__list + ' ' + styles.list} >
                        <Tabs tabs={this.tabs} onClickTab={this.onClickTabs} />
                        <Notes notes={this.state.filteredNotes} deleteNote={this.deleteNote} onChangeStatus={this.onChangeStatus} />
                    </div>
                </div>
                <Counter notes={this.state.notes} />
            </div >
        )
    }
}

export default ToDo;