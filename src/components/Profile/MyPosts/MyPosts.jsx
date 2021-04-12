import s from './MyPosts.module.css'
import Post from './Postof/Post'


const MyPosts = () => {
	return (
		<div>
			<div>
				My posts
			</div>

			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			
			<div className={s.posts}>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}


export default MyPosts;