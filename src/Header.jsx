/** Includes: Blog title, links to pages and description */
const Header = React.createClass({
  render: function() { return (
    <div id="header">
      <h1><a href="/">{this.props.Title}</a></h1>

      <p id="description">

        {!!this.props.Pages &&
          Object.keys(this.props.Pages).map(function (p) {
            var page = this.props.Pages[p];
            return <a href={page.URL} style={{marginRight:".5em"}}>{page.Label}</a> 
          }.bind(this))
        }

        {!!this.props.AskEnabled &&
          <a href="/ask" style={{marginRight:".5em"}}>ask</a> 
        }

        {!!this.props.SubmissionsEnabled &&
          <a href="/submit" style={{marginRight:".5em"}}>{this.props.SubmitLabel}</a>
        }

        <br />

        {!!this.props.Description &&
          <div dangerouslySetInnerHTML={{__html: this.props.Description}}>
          </div>
        }

      </p>
    </div>
  );}
});

export default Header;