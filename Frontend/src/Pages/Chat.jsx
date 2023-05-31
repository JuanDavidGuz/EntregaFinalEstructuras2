import React from 'react';

const Chat = () => {
    <div className="fixed bottom-0 right-0 w-96 h-96 bg-white border border-gray-300 rounded-t-xl shadow-lg">
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300 rounded-t-xl">
      <h2 className="font-bold text-lg">Chat</h2>
      <button className="text-gray-600 hover:text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707,5.293c0.391,0.391,0.391,1.023,0,1.414l-8,8c-0.391,0.391-1.023,0.391-1.414,0l-3-3C1.105,10.702,1,10.502,1,10.293V3c0-0.553,0.447-1,1-1h11c0.265,0,0.52,0.105,0.707,0.293z M12,3H3v6.586l2.293-2.293c0.391-0.391,1.023-0.391,1.414,0l3,3c0.391,0.391,1.023,0.391,1.414,0L12,8.414V3z M14,16H2v-1c0-1.103,0.897-2,2-2h10v3c0,0.552,0.447,1,1,1s1-0.448,1-1v-2h2v2C16,15.103,15.103,16,14,16z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    <div className="overflow-y-scroll px-4 py-2">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <img src="https://picsum.photos/50/50" alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col ml-2">
            <span className="font-bold">John Doe</span>
            <span className="text-gray-600">Hi there!</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col mr-2">
            <span className="font-bold">Jane Smith</span>
            <span className="text-gray-600">Hello!</span>
          </div>
            <img src="https://picsum.photos/50/50" alt="avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-t border-gray-300">
        <form>
        <input
        type="text"
        placeholder="Type a message"
        className="flex-grow mr-2 px-4 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        onChange={handleMessageChange}
      />
      <button
        type="submit"
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded-full focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
      </form>
    </div>
    </div>
}
export default Chat;