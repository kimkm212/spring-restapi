import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SiteMenuManage = () => (
  <div role="list" className="ui list">
    <div role="listitem" className="item">
      <i aria-hidden="true" className="folder icon" />
      <div className="content">
        <div className="header">src</div>
        <div className="description">Source files for project</div>
        <div className="list">
          <div role="listitem" className="item">
            <i aria-hidden="true" className="folder icon" />
            <div className="content">
              <div className="header">site</div>
              <div className="description">Your site&#x27;s theme</div>
            </div>
          </div>
          <div role="listitem" className="item">
            <i aria-hidden="true" className="folder icon" />
            <div className="content">
              <div className="header">themes</div>
              <div className="description">Packaged theme files</div>
              <div className="list">
                <div role="listitem" className="item">
                  <i aria-hidden="true" className="folder icon" />
                  <div className="content">
                    <div className="header">default</div>
                    <div className="description">Default packaged theme</div>
                  </div>
                </div>
                <div role="listitem" className="item">
                  <i aria-hidden="true" className="folder icon" />
                  <div className="content">
                    <div className="header">my_theme</div>
                    <div className="description">Packaged themes are also available in this folder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="listitem" className="item">
            <i aria-hidden="true" className="file icon" />
            <div className="content">
              <div className="header">theme.config</div>
              <div className="description">Config file for setting packaged themes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div role="listitem" className="item">
      <i aria-hidden="true" className="folder icon" />
      <div className="content">
        <div className="header">dist</div>
        <div className="description">Compiled CSS and JS files</div>
        <div className="list">
          <div role="listitem" className="item">
            <i aria-hidden="true" className="folder icon" />
            <div className="content">
              <div className="header">components</div>
              <div className="description">Individual component CSS and JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div role="listitem" className="item">
      <i aria-hidden="true" className="file icon" />
      <div className="content">
        <div className="header">semantic.json</div>
        <div className="description">Contains build settings for gulp</div>
      </div>
    </div>
  </div>
);

export default SiteMenuManage;
