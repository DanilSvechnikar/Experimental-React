import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='http://media.digitalphotogallery.com/pruemsozblzo/images/3e466c1e-4db0-11e7-966e-8ef06f2f9be6/motionless_in_white39_website_image_dtdr_standard.jpg?20170610100306'
                    height='250px' width='400px'/>
            </div>

            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}


export default ProfileInfo;