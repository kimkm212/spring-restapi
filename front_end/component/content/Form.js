import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {TextField} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';
class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject : '',
            content : '',
            toHTML : ''
        };
    }

    sjChange (e) {
        this.setState({
            subject : e.target.value
        });
    }

    ctChange(e) {
        let mdContent = e.target.value;
        this.setState({
            content : mdContent,
            toHTML : markdown.toHTML(mdContent)
        });
        console.log(this.state);
    }


    render() {
        return (
            <Card>
                <CardTitle>
                    <TextField
                        hintText="제목"
                        fullWidth={true}
                        floatingLabelText="제목"
                        value={this.state.subject}
                        onChange={this.sjChange.bind(this)}
                    />
                </CardTitle>
                <CardText>
                    <TextField
                        hintText="내용"
                        floatingLabelText="내용"
                        multiLine={true}
                        rows={40}
                        fullWidth={true}
                        value={this.state.content}
                        onChange={this.ctChange.bind(this)}
                    />
                </CardText>
                <CardText>
                    <div dangerouslySetInnerHTML={ {__html: this.state.toHTML} }></div>
                </CardText>
                <CardActions>
                    <RaisedButton label="등록" primary={true} />
                    <Link to="/content"><RaisedButton label="취소" secondary={true} /></Link>
                </CardActions>
            </Card>
        );
    }
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;