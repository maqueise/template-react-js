import { Avatar } from "react-daisyui";

export function User({userData}){
    return(
        <div>
            <Avatar src={userData.picture.medium} shape="circle" size={50} />
        </div>
    )
}