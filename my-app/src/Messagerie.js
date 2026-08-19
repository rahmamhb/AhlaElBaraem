import { useEffect, useState } from "react";
import Moment from "react-moment";
import bgPattern from "./assets/background.png";
import { useAuth } from "./context/AuthContext";
import * as messagesApi from "./mock/api/messages";
import { DASHBOARD_CONTAINER } from "./layout";

const Messagerie = () => {
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState("");

    const refresh = () => user && messagesApi.getThreadsForParent(user.id).then(setMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { refresh(); }, [user]);

    const staffOptions = Array.from(new Map(messages.map((m) => [m.staffId, m.senderName])).entries());
    const [recipient, setRecipient] = useState("");

    useEffect(() => {
        if (!recipient && staffOptions.length) setRecipient(staffOptions[0][0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!reply || !recipient) return;
        await messagesApi.sendMessage({
            staffId: recipient,
            parentId: user.id,
            senderId: user.id,
            senderName: user.name,
            role: "parent",
            content: reply,
        });
        setReply("");
        refresh();
    };

    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-8 bg-cover py-10`} style={{ backgroundImage: `url(${bgPattern})` }}>
            <div className="grid gap-12">
                {messages.map((message) => (
                    <div className="grid w-full max-w-3xl justify-items-end gap-2 justify-self-center font-poppins text-lg" key={message.id}>
                        <div className="grid w-full gap-4">
                            <span className="flex w-fit items-center justify-between gap-10 rounded-full bg-primary-light px-5 py-2 text-white">
                                <span>{message.senderName}</span>
                                <span className="text-sm capitalize opacity-90">{message.role}</span>
                            </span>
                            <span className="rounded-2xl bg-gray-200 px-3 py-6 text-gray-dark">{message.messageReceived}</span>
                        </div>
                        <span className="text-sm text-gray-mid"><Moment format='dddd L'>{message.addingDate}</Moment></span>
                    </div>
                ))}
                {messages.length === 0 && <p className="text-center text-gray-mid">Aucun message pour le moment.</p>}
            </div>

            {staffOptions.length > 0 && (
                <form onSubmit={handleSend} className="mx-auto grid w-full max-w-3xl gap-3 rounded-3xl bg-white p-6 shadow">
                    <label className="font-poppins text-sm text-gray-dark">Répondre à</label>
                    <select className="rounded-md border border-gray-light px-3 py-2 font-poppins text-gray-dark" value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                        {staffOptions.map(([id, name]) => <option key={id} value={id}>{name}</option>)}
                    </select>
                    <textarea className="min-h-[100px] rounded-md border border-gray-light p-3 font-poppins" placeholder="Votre message..." value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
                    <button className="w-fit rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white transition hover:bg-accent-yellow-dark/80">envoyer</button>
                </form>
            )}
        </div>
    );
}

export default Messagerie;
