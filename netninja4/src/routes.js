// This entire file could've been done inside main.js but we are externalizing
// the code here to keep it organized. Also not that these routes are public.

//importing each vue component to be routed
import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'

//assigning paths to each component that will be shown on that page
export default [
  { path:'/',component: showBlog },
  { path:'/add', component: addBlog },
  { path:'/list', component: listBlogs },
 //had a route parameter named id
  { path:'/blog/:id', component: singleBlog }
]
