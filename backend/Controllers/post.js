const crearPost = async (req, res = express.request) => {
    const post = new Post(req.body);
    try {
        post.user = req.uid;
        const saved = await post.save();
        res.json({
            ok: true,
            post: saved
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error: 'Error al crear el post'
        })
    }
}

const listarPosts = async (req, res = express.request) => {
    const posts = await Post.find().populate('user', 'name');

    try{
        res.status(200).json({
            ok: true,
            posts
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error: 'Error al listar los posts'
        })
    }
}

const actualizarPost = async (req, res = express.request) => {
    
}

const eliminarPost = async (req, res = express.request) => {
        
    }

module.exports = {crearPost, listarPosts, actualizarPost, eliminarPost}