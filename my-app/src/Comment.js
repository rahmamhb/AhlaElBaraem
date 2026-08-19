import Moment from "react-moment";
import { DASHBOARD_CONTAINER } from "./layout";

const Comment = ({ data }) => {
    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-12`}>
            {data.map((item, index) => (
                <div className="grid w-full max-w-3xl justify-items-end gap-2 justify-self-center font-poppins text-lg" key={item.id || index}>
                    <div className="grid w-full gap-4">
                        <span className="w-fit rounded-full bg-primary-light px-5 py-2 text-white">{item.childName}</span>
                        <span className="rounded-2xl bg-gray-200 px-3 py-6 text-gray-dark">{item.commentContent}</span>
                    </div>
                    <span className="text-sm text-gray-mid"><Moment format='dddd L'>{item.addingDate}</Moment></span>
                </div>
            ))}
        </div>
    );
};

export default Comment;
