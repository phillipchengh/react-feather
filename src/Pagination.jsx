/** Pagination shown on post-list pages (like the index page of the blog, for example) */
const Pagination = React.createClass({
  render: function() { return (
    <div id="navigation">

      {!!this.props.NextPage &&
        <a href={this.props.NextPage} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.PreviousPage &&
        <a href={this.props.PreviousPage} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  );}
});

export default Pagination;