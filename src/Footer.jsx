/** Includes: theme attribution and search field */
const Footer = React.createClass({
  render: function() { return (
    <div id="footer">

      <form action="/search" method="get" id="searchform">
        <input type="text" name="q" results="5"></input>
      </form>

      <div className="attribution">
        <a href="http://www.tumblr.com/theme/3357" title="tumblr theme feather">feather</a> by <a href="http://erichu.tumblr.com" title="eric hu">eric hu</a><br />react.js edit by <a href="http://shoesnosocks.tumblr.com" title="kevin chavez">kevin chavez</a>
      </div>
    </div>
  );}
});

export default Footer;