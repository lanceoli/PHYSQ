import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatCard = (props) => {
  const dateString = props.date;
  const formattedDate = new Date(dateString).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <div
        className={`chat ${props.type === "user" ? "chat-end" : "chat-start"}`}
      >
        <div class="chat-image avatar">
          <div class="w-12 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={props.img} />
          </div>
        </div>
        {props.type === "user" && (
          <div className="chat-header">
            <time className="text-xs text-white">{formattedDate}</time>
          </div>
        )}
        <div className="chat-bubble mb-5">
          <Markdown remarkPlugins={[remarkGfm]}>{props.msg}</Markdown>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
