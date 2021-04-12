import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='http://media.digitalphotogallery.com/pruemsozblzo/images/3e466c1e-4db0-11e7-966e-8ef06f2f9be6/motionless_in_white39_website_image_dtdr_standard.jpg?20170610100306' height='200px' width='300px' />
			</div>

			<div>
				ava + description
			</div>

			<MyPosts />
			
		</div>
	);
}


export default Profile;