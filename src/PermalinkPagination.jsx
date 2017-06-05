/** Pagination shown on permalink pages */
const PermalinkPagination = React.createClass({
  render: function() { return (
    <div id="navigation">

      {!!this.props.PreviousPost &&
        <a href={this.props.PreviousPost} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.NextPost &&
        <a href={this.props.NextPost} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  );}
});

export default PermalinkPagination;