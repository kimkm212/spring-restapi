import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as action from '../../action/content';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton, RaisedButton, Divider} from 'material-ui';
import './Content.css';

const Content = ({content, contentNext, contentPrev}) => {

    return (
        <Card>
{/*            <CardHeader
                title="제목제목제목제목"
                subtitle="서브타이틀서브타이틀"
            />*/}
            <CardActions>
                <RaisedButton label="이전" primary={true} onClick={contentPrev}/>
                <RaisedButton label="다음" primary={true} onClick={contentNext}/>
                <Link to="/form"><FlatButton label="글쓰기" primary={true}/></Link>
            </CardActions>
            <CardTitle title={content.subject} subtitle={content.regDate} />
            <Divider />
            <CardText className="content-area">
                {content.content}
            </CardText>
        </Card>
    )
};

Content.propTypes = {};

Content.defaultProps = {};

//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
const contentStateToProps = (state) => ({
    content : state.content
});

//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
const contentDispatchToProps = (dispatch) => ({
    contentNext : () => dispatch(action.contentNext()),
    contentPrev : () => dispatch(action.contentPrev())
});

export default connect(contentStateToProps,contentDispatchToProps)(Content);