import React from 'react'
import axios from 'axios'
import { Button } from "../Button" // Functional Component
import { UserManagementState, UserData } from './interface'
import './style.css'

class UserManagement extends React.Component<{}, UserManagementState> {

    constructor(props: any) {
        super(props)
        console.log("constructor")

        this.state = {
            userCount: 1,
            users: [],
            page: 1
        }
    }

    handleAddClick = () => {
        this.setState({ userCount: this.state.userCount + 1 })
    }
    handleReduceClick = () => {
        this.setState({ userCount: this.state.userCount - 1 })
    }

    handleNextPageClick = () => {
        this.setState({ page: this.state.page + 1 })
    }
    handlePrevPageClick = () => {
        this.setState({ page: this.state.page - 1 })
    }

    fetchUserData() {
        console.log("FETCHING USERDATA")
        axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
            .then(response => {
                // Array of users {first_name, last_name, avatar}
                //const users = response.data.data.map((userData: UserData) => {userData.first_name, userData.last_name, userData.avatar})
                const users = response.data.data

                this.setState({ users: users })
            })
    }

    componentDidUpdate(prevProps: any, prevState: UserManagementState, snapshot: any) {
        console.log("componentDidUpdate")
        if (prevState.page !== this.state.page) {
            this.fetchUserData()
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.fetchUserData()
    }

    static getDerivedStateFromProps(props: any, state: UserManagementState) {
        /* should be rarely used */
        console.log("getDerivedStateFromProps")
        //console.log(props)
        //console.log(state)
        //return props.ownerName === "Peter" ? { counter: 5 } : null;
        if (state.userCount > 6) {
            return { userCount: 6 }
        }
        if (state.userCount < 1) {
            return { userCount: 1 }
        }
        if (state.page > 3) {
            return { page: 3 }
        }
        if (state.page < 1) {
            return { page: 1 }
        }
        return null
    }

    shouldComponentUpdate(nextProps: any, nextState: UserManagementState) {
        console.log("shouldComponentUpdate")
        //console.log(this.state.userCount, nextState.userCount)
        //return this.state.userCount !== nextState.userCount
        return true
    }

    render() {
        console.log("render, userCount:", this.state.userCount, " page:", this.state.page)
        const users: UserData[] = this.state.users.slice(0, this.state.userCount)
        return (
            <div>
                {/*<button className="add" onClick={this.handleAddClick}>Add</button>
                <button className="reduce" onClick={this.handleReduceClick}>Reduce</button>*/}
                <div><Button className="reduce" onClick={this.handleReduceClick}>Reduce</Button>
                    <Button className="add" onClick={this.handleAddClick}>Add</Button>
                    &nbsp;User Count: {this.state.userCount}
                </div>

                <div><Button className="prevPage" onClick={this.handlePrevPageClick}>Previous Page</Button>
                    <Button className="nextPage" onClick={this.handleNextPageClick}>Next Page</Button>
                    &nbsp;Page: {this.state.page}
                </div>
                <br></br>
                <div className="usersDiv">
                    <div>
                        {users.map(users =>
                            <div key={users.id} className="userDiv">
                                <div><img className="avatarImg" alt="{users.id}" src={users.avatar}></img></div>
                                <div className="userText">{users.first_name}, {users.last_name}, {users.email}</div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserManagement