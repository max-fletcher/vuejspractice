export default{
  computed: {
    //computed property for search filter. It matches the title and content
    //against the 'search' string type inside data and returns a boolean
    //that is user to filter data from an array i.e 'blog'
    //BTW this is a mixin
    filteredBlogs: function(){
      return this.blogs.filter((blog)=> {
        return ( (blog.title.match(this.search)) || (blog.content.match(this.search)));
      });
    }
  },
}
