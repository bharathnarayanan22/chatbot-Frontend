import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("https://chatbot-backend-gf9p.onrender.com/api/v1/user/login", { email, password})
    if(res.status !== 200) {
        throw new Error("Unable to login")
    }
    const data = await res.data;
    return data
}

export const signupUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    const res = await axios.post("https://chatbot-backend-gf9p.onrender.com/api/v1/user/signup", { name, email, password });
    if (res.status !== 200) {
      throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
  };

export const checkAuthStatus = async () => {
    const res = await axios.get("https://chatbot-backend-gf9p.onrender.com/api/v1/user/auth-status")
    if(res.status !== 200) {
        throw new Error("Unable to authenticate")
    }
    const data = await res.data;
    return data
}

export const sendChatRequest = async (message: string) => {
    const res = await axios.post("https://chatbot-backend-gf9p.onrender.com/api/v1/chat/new", { message })
    if(res.status !== 200) {
        throw new Error("Unable to send chat")
    }
    const data = await res.data;
    return data
}

export const getUserChats = async () => {
    try {
        const res = await axios.get("https://chatbot-backend-gf9p.onrender.com/api/v1/chat/all-chats");
        if (res.status !== 200) {
            throw new Error("Unable to load chat");
        }
        return res.data;
    } catch (error: any) {
        throw new Error("Failed to fetch chats: " + (error.message || "Unknown error"));
    }
};

export const deleteUserChats = async () => {
    const res = await axios.delete("https://chatbot-backend-gf9p.onrender.com/api/v1/chat/delete")
    if(res.status !== 200) {
        throw new Error("Unable to delete chat")
    }
    const data = await res.data;
    return data
}

export const logoutUser = async () => {
    const res = await axios.get("https://chatbot-backend-gf9p.onrender.com/api/v1/user/logout")
    if(res.status !== 200) {
        throw new Error("Unable to logout")
    }
    const data = await res.data;
    return data
}