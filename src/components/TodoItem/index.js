// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    isEdit: false,
    userText: this.props.todoItem.title,
    isComplete: false,
  }

  onClickToggleBtn = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }))
  }

  onChangeEdit = event => {
    this.setState({userText: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({isComplete: !prevState.isComplete}))
  }

  render() {
    const {todoItem, doDelete} = this.props

    const {id} = todoItem

    const {isEdit, userText, isComplete} = this.state

    const text = isEdit ? 'Save' : 'Edit'

    const deleteQuote = () => {
      doDelete(id)
    }
    const style = isComplete ? 'strikeThrough' : ''
    const EditableInput = () => {
      if (isEdit) {
        return (
          <input
            type="text"
            placeholder={userText}
            defaultValue={userText}
            onChange={this.onChangeEdit}
            className="edit-text-input"
          />
        )
      } else {
        return (
          <div className="checkboxContainer">
            <input
              type="checkbox"
              className="check-style"
              onChange={this.onChangeCheck}
            />
            <p className={`task-style ${style}`}>{userText}</p>
          </div>
        )
      }
    }

    return (
      <li className="list">
        {EditableInput()}
        <button type="button" className="deleteBtn" onClick={deleteQuote}>
          Delete
        </button>
        <button onClick={this.onClickToggleBtn} className="toggleBtn">
          {text}
        </button>
      </li>
    )
  }
}
export default TodoItem
