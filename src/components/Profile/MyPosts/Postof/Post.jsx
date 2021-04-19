import s from './Post.module.css'


const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://yt3.ggpht.com/a/AATXAJwmjVEDKXOZCkT8JhOHaUIohfBGziaQolfxkw=s900-c-k-c0xffffffff-no-rj-mo'></img>
			{ props.message }

			<div>
				<span>like {props.likesCount}</span>
			</div>
			
		</div>

		
	);
}


export default Post;