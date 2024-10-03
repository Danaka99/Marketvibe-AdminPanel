import chandi from "../../assests/chandi.jpg"

const UserAvatarImg = () => {
  // const userAvatarImg = (props) => {
  return (
    <div className="userImg userImg-lg">
      {/* <div className={`userImg ${props.lg===true && 'lg'}`}> */}
      <span className="rounded-circle">
        {/* <img src={props.img}/> */}
        <img src={chandi} alt=""/>
      </span>
    </div>
  );
}

export default UserAvatarImg;
