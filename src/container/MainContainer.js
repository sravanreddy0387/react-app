import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HeaderComponent from '../component/HeaderComponent'
import MainContentComponent from '../component/MainContentComponent'
class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent {...this.props} />
                <div>
                    <MainContentComponent {...this.props} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { appReducers } = state;
    return {
        header: appReducers.header,
        subHeader: appReducers.subHeader,
        content: appReducers.content
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer)
