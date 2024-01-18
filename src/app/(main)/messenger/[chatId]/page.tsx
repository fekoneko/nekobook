interface Params {
  chatId: string;
}

interface MessengerProps {
  params: Params;
}
const Messenger = ({ params }: MessengerProps) => {
  return (
    <>
      <p>Chat ID: {decodeURIComponent(params.chatId)}</p>
    </>
  );
};
export default Messenger;
