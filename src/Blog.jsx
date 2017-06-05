import { Header } from './Header.jsx';
import { Pagination } from './Pagination.jsx';
import { PermalinkPagination } from './PermalinkPagination.jsx';
import { Footer } from './Footer.jsx';

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
const Blog = React.createClass({
  render: function() { return (
    <div>
      <Header {... this.props} />

      <div id="content">
        {Object.keys(this.props.Posts).map(function (p) {
          var post = this.props.Posts[p];

          console.log(post["Video-500"], !post["Video-500"]);
          switch (post.PostType) {

            /** Photosets have type photo, but get passed as video smh */
            case "photo": return !post["Video-500"] ? <PhotoPost {... post} /> : <VideoPost {... post} />
            case "quote": return <QuotePost {... post} />
            case "video": return <VideoPost {... post} />
            case  "link": return <LinkPost  {... post} />
            case  "chat": return <ChatPost  {... post} />
            case  "text": return <TextPost  {... post} />
            case "audio": return <AudioPost {... post} />
          }
        }.bind(this))}

        {!!this.props.Pagination &&
          <Pagination {... this.props.Pagination}/>
        }

        {!!this.props.PermalinkPagination &&
          <PermalinkPagination {... this.props.PermalinkPagination}/>
        }

      </div>

      <Footer />

    </div>
  );}
});

export default Blog;