import React from 'react'
import TrelloList from './components/TrelloList'
import { connect } from 'react-redux'

function App(props) {
    const { lists } = props
    return (
        <div className="App">
            <h2>Hello Youtube</h2>
            <div style={styles.listsContainer}>
                {lists.map(list => {
                    return <TrelloList key={list.id} title={list.title} cards={list.cards} />
                })}
            </div>
        </div>
    );
}

const styles = {
    listsContainer: {
        display: 'flex'
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps, null)(App);
