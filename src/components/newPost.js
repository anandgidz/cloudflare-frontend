import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "@reach/router";

class New_post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            title: '',
            img: '',
            content: ''
        }
    }
    async addPost(e){
        e.preventDefault();
        await fetch('https://square-butterfly-04dd.anandgadsing152097.workers.dev/posts', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': this.state.username, 'title': this.state.title,
            'img': this.state.img, 'content': this.state.content})
        })

    }
    render() {
        return (
            <div className="card">
                <div className={"m-2"}>
                    <form>
                        <input type="text" className={'form-control'}
                               onChange={(event) => this.setState({username: event.target.value})}
                               placeholder="Username"/>
                        <div className={"pt-2"}></div>
                        <input type="text" className={'form-control'}
                               onChange={(event) => this.setState({title: event.target.value})}
                               placeholder="Title"/>
                        <div className={"pt-2"}></div>
                        <input type="text" className={'form-control'}
                               onChange={(event) => this.setState({img: event.target.value})}
                               placeholder="Image link"/>
                        <div className={"pt-2"}></div>
                        <textarea className="form-control" id={"newPostText"} placeholder={"Content"}
                                  onChange={(event) => this.setState({content: event.target.value})}/>
                        <div className={"pt-2"}></div>
                        <button className={"btn btn-warning float-end form-control"}
                                onClick={this.addPost.bind(this)}>Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default New_post;

