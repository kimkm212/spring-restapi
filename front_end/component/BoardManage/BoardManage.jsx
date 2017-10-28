import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardData from './BoardData/BoardData';
import List from './List';
import Form from './Form';


const BoardManage = () => (
  <div>
    <Route exact path="/admin/board" component={List} />
    <Route exact path="/admin/board/list" component={List} />
    <Route exact path="/admin/board/form" component={Form} />
    <Route exact path="/admin/board/form/:id" component={Form} />

    <Route path="/admin/board/data/:boardId" component={BoardData} />
  </div>
);


export default BoardManage;
