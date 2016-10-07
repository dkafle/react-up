import React from 'react';

var Excel = React.createClass({
  _renderToolbar: function () {
    console.log('rendering toolbar');
  },
  _renderTable: function () {
    console.log('rendering table');
  },
  render: function() {
    return (
      <div className="Excel">
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    )
  }
});

export default Excel;
