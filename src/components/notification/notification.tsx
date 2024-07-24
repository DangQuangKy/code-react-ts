import  { useEffect } from 'react';
import './notification.scss'; 

interface Notification {
    message: string;
    show: boolean;
    onClose: () => void;
}
const Notification = (props: Notification) => {
    useEffect(() => {
        if (props.show) {
            const timer = setTimeout(() => {
                props.onClose();
            }, 3000); // Hiển thị thông báo trong 3 giây
            return () => clearTimeout(timer);
        }
    }, [props.show, props.onClose]);

    if (!props.show) return null;

    return (
        <div className="notification">
            {props.message}
        </div>
    );
};

export default Notification;
