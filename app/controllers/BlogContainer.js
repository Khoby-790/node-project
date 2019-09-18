import Blog from '../models/blog.nodel';

class BlogConatiner {
    static addPost(req, res, next){
        const { title, description, body, userId } = req.body;
        const blog = new Blog({
            title,
            description,
            body,
            userId,
        });

        blog.save()
        .then(blog =>{
            req.flash('success_msg','Blog successfully added');
            req.redirect('/');
        })


    }

    static deleteBlog(req, res, next){
        const { id } = req.params;

        Blog.findByIdAndDelete(id);

        req.flash('success_msg','Blog deleted successfully');
        req.redirect('back');
    }
}


export default BlogConatiner;