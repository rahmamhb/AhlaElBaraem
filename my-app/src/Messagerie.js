import Moment from "react-moment";
import './Messagerie.css'




const Messagerie = () => {
    const messages = [
            {
                sender: "Mme Nom Prenom",
                role : "Nourice",
                messageReceived : "this is the content of the message sent by our employee, this message is about your beloved child", 
                addingDate : new Date()
            },
            {
                sender: "Mme Nom Prenom",
                role : "Nourice",
                messageReceived : "this is the content of the message sent by our employee, this message is about your beloved child", 
                addingDate : new Date()
            },
            {
                sender: "Mme Nom Prenom",
                role : "orthophoniste",
                messageReceived : "this is the content of the message sent by our employee, this message is about your beloved child", 
                addingDate : new Date()
            },
            {
                sender: "Mme Nom Prenom",
                role : "orthophoniste",
                messageReceived : "this is the content of the message sent by our employee, this message is about your beloved child", 
                addingDate : new Date()
            },
            {
                sender: "Mme Nom Prenom",
                role : "psychologue",
                messageReceived : "this is the content of the message sent by our employee, this message is about your beloved child", 
                addingDate : new Date()
            }

    ]
    return ( 
        <div className="messagerie-container" >
            <div className="messagerie">
            {
                    messages.map((message,index)=>{
                        return(
                            <div className="message" key={index}>
                                <div className="message-text">
                                    <span className="sender">
                                        <span className="sender-name">{message.sender}</span>
                                        <span className="sender-role">{message.role}</span>
                                    </span>
                                  
                                    <span className="message-content">{message.messageReceived}</span>
                                </div>
                                <span className="message-date"><Moment format='dddd L'>{message.addingDate}</Moment></span>
                            </div>
                        )
                    })
                }
       </div>
        </div>
       
     );
}
 
export default Messagerie;