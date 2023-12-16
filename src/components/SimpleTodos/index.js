import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    task: '',
    userInput: '',
    numberOfTasks: '',
  }

  onDelete = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filteredTodoList})
    // console.log(id);
  }

  onChangeNewTask = event => {
    this.setState({userInput: event.target.value})
  }

  addNumberTasks = () => {
    const {numberOfTasks} = this.state

    for (let i = 0; i < numberOfTasks; i++) {
      this.onClickUpdateList()
    }
  }

  onClickUpdateList = () => {
    const {userInput} = this.state

    const userTitle = userInput
      .split(' ')
      .filter(item => isNaN(item))
      .join(' ')

    const number = userInput.split(' ').filter(item => !isNaN(item))

    if (!isNaN(number[0])) {
      this.setState(
        {numberOfTasks: number[0], userInput: userTitle},
        this.addNumberTasks,
      )
    } else {
      this.setState(prevState => ({
        todoList: [
          ...prevState.todoList,
          {id: prevState.todoList.length + 1, title: userInput},
        ],

        userInput: '',
      }))
    }
  }

  render() {
    const {todoList, userInput} = this.state

    return (
      <div className="orangeBackground">
        <div className="whiteBackground">
          <h1 className="mainHeading">Simple Todos</h1>
          <div className="add-task-input">
            <input
              type="text"
              placeholder="Please Enter Task"
              className="inputElement"
              onChange={this.onChangeNewTask}
              value={userInput}
            />
            <button className="AddBtn" onClick={this.onClickUpdateList}>
              Add
            </button>
          </div>

          <ul className="listStyle">
            {todoList.map(eachItem => {
              return (
                <TodoItem
                  todoItem={eachItem}
                  key={eachItem.id}
                  doDelete={this.onDelete}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
