import React, { Component } from 'react';
import './state.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [{
                author: 'George R. R. Martin',
                cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
                isbn: '978-0553103547',
                stock: 7,
                title: 'A Game of Thrones',
                year: 1996
            }, {
                author: 'Neal Stephenson',
                cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
                isbn: '978-1491515051',
                stock: 3,
                title: 'Snow Crash',
                year: 1992
            }, {
                author: 'Andy Weir',
                cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
                isbn: '978-0804139021',
                stock: 11,
                title: 'The Martian',
                year: 2014
            }
            ]
        }
    }

    render() {
        return (
            <div>

                <h1>Inventory</h1>

                <table>
                    <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Description</th>
                        <th>Stock</th>
                    </tr>
                    </thead>
                </table>
                {/*<tbody>*/}
                {this.state.books.forEach(element){
                    getBooks(element)
                }}
                {/*</tbody>*/}



            </div>

    )
  }
}

export default App;



const getBooks = (book) => {
    return <div><tr>
        <td>{book.author}</td>
        <td>{book.cover}</td>
        <td>{book.isbn}</td>
        <td>{book.stock}</td>
        <td>{book.title}</td>
        <td>{book.year}</td>
    </tr></div>
}
